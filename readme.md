## Overview
This is a React Application build to fetch and display Movie information from the TMDB API. 
The features of this Application are as follow:

1. Connect to TMBD API 
2. Fetch “Now Playing” Movie Information 
3. Fetch Genre Information 
4. Display  a list of Movies &  related Information
5. Filter Movies based on Rating & Genre

## Assumptions
1. The UI is Responsive to the following Breakpoints : small (480), medium(1024), large(1440)
2. Filter Interactions:
	* The rating input is implemented as a slider with a value range between 0 and 10, increments of 0.5 and a default set to 3.
	* Multiple genres input is implemented as checkboxes and only contains genres from the TMDb API, that are in the returned movie result set.

## Pre-requisites
1. API Key Setup - Visit https://www.themoviedb.org/ and sign up for getting API key

## Editor
1. VS Code (Preferable)

## Dependencies
1. npm install --save bootstrap
2. npm install --save reactstrap react react-dom
3. npm install react-rangeslider --save 

## Setup
1. Create a folder and in terminal go to that folder path.
2. clone the repository
3. npm install //This will install all the dependencies required
## Note: Install all the dependecies Mentioned in Dependencies Section
4. npm start
5. npm run build //For bulding the code which can be deployed on the server

## File Structure
1. Logic File: Component.js
2. Service API fetch File: service.js
3. Setting Constant: Constant.js
## Note: We are currently not using hooks but will need that once the number and complexity of facets/filters increases. 

## Notes
1. The API calls are only made once.
2. Promise.all function is used for getting API response.
3. API URLs used
	* For Getting Now Playing Movies Details : https://api.themoviedb.org/3/movie/now_playing
	* For Getting Genres Details : https://api.themoviedb.org/3/genre/movie/list
	* Images are retrieved as part of “Now Playing” and don’t need to be separately fetched
4. Important: Once the API key is setup, it needs to be added in the Constant.js file which will be maintained by the variable apiKey. 
5. Default value for Rating is configured in Constant.js with variable name defaultRange.


