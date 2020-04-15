## Overview
This is a React Application build to shows Now Playing Movies details. This details are fetched from TMDB API which returns the desired information regarding different Movies. We have filtering enabled based on Genres listed and Movies will be displayed according to the selected Genures. There is a Movie Rating Filter to enable the user to filter Movies based on Movie Rating.

## API Key Setup
1. Visit https://www.themoviedb.org/ and sign up for getting API key

## API URL 
1. For Getting Now Playing Movies : https://api.themoviedb.org/3/movie/now_playing
2. For Getting Genres : https://api.themoviedb.org/3/genre/movie/list

## Assumptions
1. Minimum rating input with a range between 0 and 10, increments of 0.5 and a default set to 3.
2. Multiple genres input (checkboxes). Must only contain genres from the TMDb API that are in the returned movie result set.

## Editor
1. VS Code (Preferable)

## Note: Once the API key is setup, it needs to be added in the Constant.js file which will maintain the key in apiKey variable.

## Setup
1. Create a folder and in terminal go to that folder path.
2. clone the repository
3. npm install //This will install all the dependencies required
## Note: Install all the dependecies Mentioned in Dependencies Section
4. npm start
5. npm run build //For bulding the code and deploying to the Server

## File Structure
1.Logic File: Component.js
2.Service API fetch File: services.js
3.Setting Constant: Constant.js

## Dependencies
1. npm install --save bootstrap
2. npm install --save reactstrap react react-dom
3. npm install react-rangeslider --save
# Include this line in src/index.js
import 'bootstrap/dist/css/bootstrap.min.css’;   

## Key Points
1. The API calls are only made once
2. Promise.all function is used for getting API response

