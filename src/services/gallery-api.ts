import axios from 'axios';
import { Photos } from '../components/App/App.types';

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';




export const fetchPhotos = async (query: string, page: number): Promise<Photos> => {
  const response = await axios.get(
    '?client_id=GL9ZwMGBGbtnkzK4zruAeb174gwfMAQItvNcz-qdC4k',
    {
      params: {
        query: query,
        page,
        hitsPerPage: 10,
      },
    }
  );

  return {
    photos: response.data.results,
    totalPages: response.data.total_pages,
  };
};
