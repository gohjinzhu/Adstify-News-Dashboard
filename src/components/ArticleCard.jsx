// Card component for displaying article

import React from 'react';
import { getImageUrlForArticle } from '../utils/imageUtils';

const ArticleCard = ({ article }) => {
  const imageUrl = getImageUrlForArticle(article);

  return (
    <div className="border p-4 rounded shadow">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={article.headline.main}
          className="w-full h-48 object-cover mb-4"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-4">
          <span className="text-gray-500">No image available</span>
        </div>
      )}
      <h2 className="text-xl font-semibold mb-2">{article.headline.main}</h2>
      <p className="mb-2">{article.snippet}</p>
      <a
        href={article.web_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Read more
      </a>
    </div>
  );
};

export default ArticleCard;