import App from "./App";
import { render, screen } from "@testing-library/react";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

const spacestagramApp = new App();

test("renders website title", () => {
  render(
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  );
  const linkElement = screen.getByText(/Spacestagram/);
  expect(linkElement).toBeInTheDocument();
});

test("renders calendar component", () => {
  render(
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  );
  const linkElement = screen.getByText(/Choose a starting date/);
  expect(linkElement).toBeInTheDocument();
});

test("correct format for api url", () => {
  const startDate = "2022-01-01";
  const today = new Date();
  const endDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const output = `https://api.nasa.gov/planetary/apod?api_key=8na89LeHNg4pQ67PQxc3NaQ0KqqSQlhgFKI4uhgB&start_date=${startDate}&end_date=${endDate}`;
  expect(spacestagramApp.assembleApiString(startDate)).toEqual(output);
});

test("api is called on refresh or date change", async () => {
  const postData = {
    title: "My Space Photo",
    date: "2022-01-14",
    explanation: "My very first picture of Saturn",
  };
  const testDate = new Date("January 1, 2022");

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(postData),
    })
  );

  spacestagramApp.componentDidMount();
  expect(fetch).toHaveBeenCalledTimes(1);

  spacestagramApp.callbackChangeDate(testDate);
  expect(fetch).toHaveBeenCalledTimes(2);
});
