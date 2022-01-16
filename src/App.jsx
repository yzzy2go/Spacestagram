import React from "react";
import "./App.css";
import { MediaCard, Spinner } from "@shopify/polaris";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/navbar";
import Calendar from "./components/calendar";
import Footer from "./components/footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      startDate: "2022-01-01",
    };
  }

  componentDidMount() {
    this.apiCall(this.assembleApiString(this.state.startDate));
  }

  assembleApiString(startDate) {
    const nasaKey = "8na89LeHNg4pQ67PQxc3NaQ0KqqSQlhgFKI4uhgB";
    const startDateParam = "&start_date=";
    const endDateParam = "&end_date=";
    const today = new Date();
    const endDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    return `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}${startDateParam}${startDate}${endDateParam}${endDate}`;
  }

  apiCall(apiString) {
    fetch(apiString)
      .then((response) => response.json())
      .then((postData) => {
        this.setState({
          posts: postData,
          loading: false,
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  handleLike(i) {
    var currentState = this.state[i];
    this.setState({ [i]: !currentState });
    if (currentState === undefined) {
      currentState = true;
    }
  }

  handleCopy(url) {
    navigator.clipboard.writeText(url);
  }

  callbackChangeDate = (date) => {
    var startDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    this.setState({
      startDate: startDate,
      loading: true,
    });
    this.apiCall(this.assembleApiString(startDate));
    return startDate;
  };

  renderCards() {
    return (
      <div className="cards">
        {this.state.posts.map((currentPost, i) => (
          <MediaCard
            title={currentPost.title + " - " + currentPost.date}
            description={currentPost.explanation}
            key={i}
            portrait={true}
            primaryAction={{
              content: "Like",
              onAction: () => {
                this.handleLike(i);
              },
              pressed: this.state[i],
            }}
            secondaryAction={{
              content: "Copy Image Link",
              onAction: () => {
                this.handleCopy(currentPost.url);
              },
            }}
          >
            <img
              alt={currentPost.title}
              width="100%"
              height="100%"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={currentPost.url}
            />
          </MediaCard>
        ))}
        <h4>Created using NASA's Astronomy Picture of the Day API.</h4>
      </div>
    );
  }

  renderContent() {
    return (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        align="center"
      >
        <Grid item xs></Grid>
        <Grid item xs={10} md={4}>
          <Calendar parentCallback={this.callbackChangeDate}></Calendar>
          {this.state.loading ? this.renderSpinner() : this.renderCards()}
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    );
  }

  renderSpinner() {
    return (
      <div className="spinner">
        <Spinner accessibilityLabel="Spinner example" size="large" />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        {this.renderContent()}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
