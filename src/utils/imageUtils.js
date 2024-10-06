// The base URL for NYT images is derived from observation and may change
const NYT_IMAGE_BASE_URL = 'https://static01.nyt.com/';

export const getFullImageUrl = (partialUrl) => {
  if (!partialUrl) return null;
  
  // Check if it's already a full URL
  if (partialUrl.startsWith('http://') || partialUrl.startsWith('https://')) {
    return partialUrl;
  }
  
  // If it starts with 'images/', prepend the base URL
  if (partialUrl.startsWith('images/')) {
    return `${NYT_IMAGE_BASE_URL}${partialUrl}`;
  }

};

export const getImageUrlForArticle = (article) => {
  if (article.multimedia && article.multimedia.length > 0) {
    // Find the first image with a URL
    const image = article.multimedia.find(media => media.url);
    if (image) {
      return getFullImageUrl(image.url);
    }
  }
  
  // Fallback to a default image if no image is found
  return '/images/image-not-found.png';
};

// Note: Always check the API response and adjust this logic if needed.
// The structure of image URLs may vary or change over time.