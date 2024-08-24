import axios from 'axios';
import { BBC_NEWS, GUARDIAN_NEWS, NEW_YORK_TIMES_NEWS, PAGE_SIZE } from '../utils/constants';
import {
  transformNewsAPIResponseData,
  transformTheGuardianAPIResponseData,
  transformTheNewYorkTimesAPIResponseData
} from '../utils/helpers';

export async function fetchFromAPI(data) {
  const { source } = data;
  let responseData;

  if (source === BBC_NEWS) {
    responseData = await fetchFromNewsAPI(data);
    responseData = transformNewsAPIResponseData(responseData);
  }

  if (source === GUARDIAN_NEWS) {
    responseData = await fetchFromGuardianAPI(data);
    responseData = transformTheGuardianAPIResponseData(responseData);
  }

  if (source === NEW_YORK_TIMES_NEWS) {
    responseData = await fetchFromNYTAPI(data);
    responseData = transformTheNewYorkTimesAPIResponseData(responseData);
  }

  return responseData;
}

export async function fetchFromNewsAPI({ searchKeyword, source, category, date, page }) {
  const response = await axios.get('https://newsapi.org/v2/everything', {
    params: {
      ...((searchKeyword || category) && {
        q: `${searchKeyword} ${category}`.trim()
      }),
      ...(source && { sources: source }),
      ...(date && { from: date, to: date }),
      page,
      pageSize: PAGE_SIZE,
      apiKey: import.meta.env.VITE_NEWS_API_KEY
    }
  });

  return response.data;
}

export async function fetchFromGuardianAPI({ searchKeyword, category, date, page }) {
  const response = await axios.get('https://content.guardianapis.com/search', {
    params: {
      ...(searchKeyword && { q: searchKeyword }),
      ...(category && { section: category }),
      ...(date && { 'from-date': date, 'to-date': date }),
      page,
      ['page-size']: PAGE_SIZE,
      'api-key': import.meta.env.VITE_GUARDIAN_API_KEY
    }
  });

  return response.data;
}

export async function fetchFromNYTAPI({ searchKeyword, category, date, page }) {
  const response = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
    params: {
      ...(searchKeyword && { q: searchKeyword }),
      ...(category && { fq: `section_name:("${category}")` }),
      ...(date && { begin_date: date, end_date: date }),
      page: page - 1,
      'api-key': import.meta.env.VITE_NYT_API_KEY
    }
  });

  return response.data;
}
