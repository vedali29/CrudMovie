# Movie API

This project is a simple RESTful API for managing a collection of movies using Node.js, Express, and MongoDB.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- **Node.js** and **npm** installed on your local machine
- **MongoDB** installed and running on your local machine or a cloud-based MongoDB service

## Installation

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/vedali29/CrudMovie.git
    ```

2. **Navigate to the Project Directory**:
    ```sh
    cd CrudMovie
    ```

3. **Install Dependencies**:
    ```sh
    npm install
    ```

4. **Create a `.env` file in the root directory and add your MongoDB URL**:
    ```plaintext
    MONGODB_URL=mongodb://localhost:27017/your-database-name
    ```

## Usage

1. **Start the Server**:
    ```sh
    npm start
    ```

2. **API Endpoints**:

    - **Get All Movies**
        ```http
        GET /movies
        ```

    - **Get Single Movie**
        ```http
        GET /movies/:id
        ```

    - **Create a New Movie**
        ```http
        POST /movies
        ```

    - **Update Movie**
        ```http
        PUT /movies/:id
        ```

    - **Delete Movie**
        ```http
        DELETE /movies/:id
        ```

## Code Overview

- **`server.js`**: Entry point of the application, sets up the Express server.
- **`db.js`**: Database connection file using Mongoose.
- **`models/movieModel.js`**: Mongoose schema and model for movies.
- **`routes/movieRoutes.js`**: Express routes for handling movie-related requests.



## Example

Here's an example of a request to create a new movie:

```sh
curl -X POST http://localhost:5000/movies \
-H "Content-Type: application/json" \
-d '{
    "name": "Inception",
    "img": "https://bit.ly/3eXSOju",
    "summary": "A skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, is given a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious."
}'



