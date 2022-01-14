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
    this.setState({
      loading: true,
    });
    fetch(apiString)
      .then((response) => response.json())
      .then((postData) => {
        this.setState({
          posts: postData.map((post) => {
            return {
              date: post.date,
              explanation: post.explanation,
              image: post.url,
              title: post.title,
            };
          }),
        });
      })
      .then(() => {
        this.setState({
          loading: false,
        });
      });
  }

  handleLike(i) {
    var currentState = this.state[i];
    this.setState({ [i]: !currentState });
    if (currentState === undefined) {
      currentState = true;
    }
  }

  callback = (date) => {
    var startDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    this.setState({ startDate: startDate });
    this.apiCall(this.assembleApiString(startDate));
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
          >
            <img
              alt=""
              width="100%"
              height="100%"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={currentPost.image}
            />
          </MediaCard>
        ))}
      </div>
    );
  }

  renderContent() {
    return (
      <div className="App">
        <a id="button"></a>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          align="center"
        >
          <Grid item xs></Grid>
          <Grid item xs={10} md={6}>
            <Calendar parentCallback={this.callback}></Calendar>
            {this.state.loading ? this.renderSpinner() : this.renderCards()}
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
    );
  }

  renderSpinner() {
    return (
      <div
        style={{
          height: "100vh",
        }}
      >
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
