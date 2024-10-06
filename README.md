# NYT News App

This project is a React-based web application that allows users to search for news articles using the New York Times Article Search API.

## Features

- Search for news articles by keyword
- Display article details including headlines, snippets, and images
- Responsive design for various screen sizes

## Technologies Used

- React
- Vite
- Axios for API requests
- Tailwind CSS for styling
- Express.js for backend proxy

## NYT API Usage

This application uses the New York Times Article Search API. Here's how we interact with the API:

1. **API Endpoint**: We use the Article Search API endpoint:
   `https://api.nytimes.com/svc/search/v2/articlesearch.json`

2. **Search Functionality**: When a user enters a search term, we send a GET request to our backend proxy with the search query. The backend then forwards this request to the NYT API, adding the API key.

3. **Request Format**: A typical request URL looks like this:
   `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=SEARCH_TERM&api-key=YOUR_API_KEY`

4. **Response Handling**: The API returns a JSON response containing article data. We parse this response and display the relevant information (headline, snippet, multimedia) in our application.

5. **Image Handling**: The API doesn't always return full image URLs. We construct the full URLs using a base URL and the partial paths provided in the API response.

6. **Error Handling**: We implement error handling to manage cases where the API request fails or returns unexpected data.


## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/gohjinzhu/news-dashboard.git
   cd your-vite-project
   ```

2. Install dependencies:
   ```
   npm install
   ```
3. Copy .env file to project root directory:

3. Start the development server:
   ```
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Configuration

The development server runs on port 3000 by default. If you need to change this, you can modify the `vite.config.js` file:

```javascript
export default defineConfig({
  // ... other config options
  server: {
    port: 3000
  }
})
```

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
