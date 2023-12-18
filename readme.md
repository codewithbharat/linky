# URL Shortener with MERN Stack

This repository contains a simple URL shortener application built using the MERN stack. The project is divided into two main folders: `client` for the Vite React app and `server` for the Express.js backend.

## Live Demo

Check out the live demo of the URL shortener app at [linky-orcin.vercel.app](https://linky-orcin.vercel.app).

## Client

### Dependencies

- **axios** (version 1.6.2): A promise-based HTTP client for the browser and Node.js.
- **react** (version 18.2.0): A JavaScript library for building user interfaces.
- **react-dom** (version 18.2.0): Entry point for working with the DOM in React applications.
- **react-router-dom** (version 6.21.0): Declarative routing for React.js.

### Getting Started

1. Navigate to the `client` folder.
2. Install dependencies by running:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000).

### Usage

- The main page (`/`) provides a form to shorten URLs.
- Shortened URLs are displayed on the page with their corresponding original URLs.
- Clicking on a shortened URL redirects to the original URL.

## Server

### Dependencies

- **cors** (version 2.8.5): Middleware for handling Cross-Origin Resource Sharing (CORS).
- **dotenv** (version 16.3.1): Loads environment variables from a `.env` file.
- **express** (version 4.18.2): Fast, unopinionated, minimalist web framework for Node.js.
- **mongoose** (version 8.0.3): MongoDB object modeling for Node.js.
- **shortid** (version 2.2.16): Library for creating unique, short IDs.
- **valid-url** (version 1.0.9): Library for URL validation.

### Getting Started

1. Navigate to the `server` folder.
2. Create a `.env` file based on the provided `.env.example` and set the required variables.
3. Install dependencies by running:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

### API Routes

- **POST /shorten**: Shortens a provided URL.
- **GET /:hash**: Redirects to the original URL associated with the given hash.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.
