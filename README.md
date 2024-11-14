# Movie Data API

This project is a simple Node.js and Express server that provides a  API for movie data screening in Metrograph, November, 2024. It serves data from a JSON file (`MovieData.json`) and allows clients to fetch movie information.

## Features

•	Fetches and serves movie data from MovieData.json.

•	Allows cross-origin requests.

•	Provides specific movie details based on query parameters such as img, title, director, screentime, link, time, and description.


## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for building RESTful APIs.
- **CORS**: Middleware to allow cross-origin requests.
- **node-fetch**: A lightweight module to handle HTTP requests.

## Requirements

•	Node.js

•	npm (Node Package Manager)

## Getting Started 

### Installation

1.	**Clone this repository:**

    `git clone <repository-url>
`

2.	**Navigate to the project directory:**

    `cd movie-data-api
`

3.	**Install dependencies:**

    `npm install
`
### Running the Server

1.	**Start the server:**

node app.js

2.	**Access the API:**

The server will run on the default port 3001. You can access the API at [http://localhost:3001](http://localhost:3001/).

**API Endpoints**

**Root Endpoint**

•	**GET /**

Retrieves all movie data from MovieData.json.

**Example Request:**

curl http://localhost:3001/

**Example Response:**

```json
[
    {
        "img": "image-url",
        "title": "Movie Title",
        "director": "Director Name",
        "screentime": "Screen Time",
        "link": "URL to Movie",
        "time": "Duration",
        "description": "Movie Description"
    },
]
```

**Movie Details Endpoint**

•	**GET /MovieData**

Retrieves movie details based on the provided query parameters.

**Query Parameters:**

•	img: Image URL for the movie.

•	title: Title of the movie.

•	director: Director’s name.

•	screentime: Screen time information.

•	link: Link to the movie.

•	time: Movie duration.

•	description: Description of the movie.

**Example Request:**

```curl "http://localhost:3001/MovieData?title=The%20Aviator's%20Wife&director=Éric%20Rohmer"```

**Example Response:**
```json
  {
    "img":"asset/Aviators.jpg",
    "poster":"posters/THE AVIATOR'S WIFE.jpg",
    "title":"THE AVIATOR'S WIFE",
    "director":"ÉRIC ROHMER",
    "screenTime":"1981 / 106MIN / DCP",
    "link":"https://metrograph.com/film/?vista_film_id=9999002870",
    "time":"Saturday September 7_2:00pm",
    "Description":"The inaugural film of Rohmer’s “Comedies and Proverbs” cycle, The    Aviator’s Wife is a fleecy farce of romantic overanalysis that finds the director exploring the possibilities of handheld camerawork in following a narrative expression of the opening epigraph: “It is impossible to think of nothing.” A young man sees his girlfriend’s ex leaving her apartment one early morning, and his imagination is off to the races, as stars Philippe Marlaud and Marie Rivière introduce a younger, less perfectly articulate type of Rohmer character than those of the “Moral Tales.” A Metrograph Pictures release."
  },
  ```

**Configuration**

•	**CORS**: CORS is enabled for all origins. Adjust as needed in the code.

•	**Port**: The server runs on port 3001 by default. You can set a different port by defining the PORT environment variable.