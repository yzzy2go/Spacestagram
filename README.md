# Spacestagram
Spacestagram is an app created for Shopify's Summer 2022 frontend internship.  


## View the project
Spacestagram is hosted using GitHub Pages, you can visit this link to view it in your browser: 

[yzzy2go.github.io/Spacestagram](https://yzzy2go.github.io/Spacestagram/)

### Run the project locally
1. Visit NASA's API page to obtain your API key for free: [Get NASA API Key](https://api.nasa.gov/) 
2. Clone this repository ```git clone https://github.com/yzzy2go/Spacestagram.git```
3. Navigate into the root folder ```cd Spacestagram```
4. Install dependencies ```npm install```
5. Create a ```.env``` file in the root of the project
6. Create a variable for your api key: ```REACT_APP_NASA_API_KEY=<YOUR_KEY>``` and save the file
7. Open a terminal and run ```npm start``` to start the app on localhost

To run tests: 
* ```cd Spacestagram```
* ```npm test```


## Technology Used
Spacestagram is built with React and tested with using Jest.

Shopify's design library [Polaris](https://polaris.shopify.com/) was used for most of the elements on the page and Google's [Material UI](https://mui.com/) for the grid system and headers.  

[Lighthouse](https://developers.google.com/web/tools/lighthouse) was a tool used to check accessibility of the site. 


## Current Features
Spacestagram uses NASA's Astronomy Photo of the Day (APOD) API to display photos and their descriptions. These posts can be liked and are displayed in chronological order. 

Below is a list of current features in the app: 
* Chronological feed of images from NASA's APOD API
* Date picker to determine a date range for posts
* Collapsible card to hide the date picker when not in use
* Like button on posts
* Link to copy the post image URL
* Loading state that shows when waiting for the API to return data

### Date Picker
The Date Picker defines the date range for all the posts displayed on the page. It initially loads pictures starting from June 1st, 2023 to the current day. 

Users can change this start date (to dates within the last year) and get pictures since then. For example, if November, 16th, 2021 was selected on the calendar and they press the "Get Posts" button, the page will repopulate with images from November 16, 2021, to the current date.  
Dates in the future are disabled, and dates further than 365 days ago are also disabled - this was a decision made to limit the time taken waiting for data to be fetched from the API. 

### Like Button
The Like Button is the primary action on the post a user can take. Clicking the button puts it into a "liked" state and users can click it again to revert it to an "unliked" state. The "liked" state is currently lost on page refresh or a date change. 

### Copy Link
The Copy Link is the secondary action on the post. Pressing this option copies the URL of the current post's image to the user's clipboard so that it can easily be shared. 
