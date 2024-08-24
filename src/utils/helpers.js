export function transformNewsAPIResponseData(data) {
  const { articles, totalResults } = data;
  const transformedArticles = articles.map(({ title, content, url, urlToImage }) => ({
    title,
    content,
    url,
    urlToImage,
    id: title
  }));

  return {
    articles: transformedArticles,
    totalResults
  };
}

export function transformTheGuardianAPIResponseData(data) {
  const {
    response: { results, total }
  } = data;

  const transformedResults = results.map(({ webTitle, webUrl, id }) => ({
    title: webTitle,
    content: webTitle,
    url: webUrl,
    urlToImage: '',
    id
  }));

  return {
    articles: transformedResults,
    totalResults: total
  };
}

export function transformTheNewYorkTimesAPIResponseData(data) {
  const {
    response: {
      docs,
      meta: { hits }
    }
  } = data;

  const transformedDocs = docs.map(({ headline: { main }, snippet, web_url, _id }) => ({
    title: main,
    content: snippet,
    url: web_url,
    urlToImage: '',
    id: _id
  }));

  return {
    articles: transformedDocs,
    totalResults: hits
  };
}
