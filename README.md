# Spacestagram
Spacestagram is an app created for Shopify's Summer 2022 frontend internship.  


## Intro
Spacestagram uses NASA's Astronomy Photo of the Day (APOD) API to display photos and their descriptions. These posts can be liked and are displayed in chronological order. 

It initially loads pictures starting from January 1st, 2022 to the current day. There is a date picker component that allows users to change this start date (within the last year) and get pictures since then.  


## View the project
Spacestagram is hosted using GitHub Pages, you can visit this link to view it in your browser: 

[yzzy2go.github.io/Spacestagram](https://yzzy2go.github.io/Spacestagram/)

### Run the project locally
1. Visit NASA's API page to obtain your API key for free: [Get NASA API Key](https://api.nasa.gov/) 
2. Clone this repository ```git clone https://github.com/yzzy2go/Spacestagram.git```
3. Navigate into the root folder ```cd Spacestagram```
4. Install dependencies ```npm install```
5. Create a ```.env``` file in the root of the project
6. Create a variable for your api key: ```REACT_APP_NASA_API_KEY=<YOUR_KEY>```
7. Open a terminal and run ```npm start``` to start the app on localhost

To run tests: 
* ```cd Spacestagram```
* ```npm test```


## Technology Used
Spacestagram is built with React and tested with using Jest.

Shopify's design library [Polaris](https://polaris.shopify.com/) was used for most of the elements on the page and Google's [Material UI](https://mui.com/) for the grid system and headers.  

[Lighthouse](https://developers.google.com/web/tools/lighthouse) was a tool used to check accessibility of the site. 


## Current Features
Below is a list of current features in the app: 
* Chronological feed of images from NASA's APOD API
* Date picker to determine a date range for posts
* Collapsible card to hide the date picker when not in use
* Like button on posts
* Link to copy the post image URL
* Loading state that shows when waiting for the API to return data
