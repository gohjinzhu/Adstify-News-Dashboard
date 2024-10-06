import React, { useState } from 'react';
import axios from 'axios';
import ArticleCard from './components/ArticleCard';
import { BASE_URL } from './constants/api';

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * 
   * Handle news articles search based on query
   */
  const handleSearch = async (e) => {
    // prevent form submission
    e.preventDefault();
    // prevent empty query
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}?q=${query}&api-key=${import.meta.env.VITE_NYTIMES_API_KEY}`);
      setArticles(response.data.response.docs);
    } catch (err) {
      console.log(err)
      setError('Failed to fetch articles. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">NYT News Search</h1>
      <form onSubmit={handleSearch} className="mb-4 flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for news..."
          className="flex-grow p-2 border border-r-0 rounded-l"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default App;