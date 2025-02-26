import axios from "axios"

const BASE_URL = 'https://api.unsplash.com';

const ACCESS_KEY = 'ygHvH53koI59IX-TAYYGulr5gzCVsOa9_pVHv_UfHRo';

export const fetchPhotos = async (query, page) => {
    const { data } = await axios.get(`${BASE_URL}/search/photos`, {
        params: {
            page,
            query,
            client_id: ACCESS_KEY
        }
    });
    return data;
}