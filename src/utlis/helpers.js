import axios from 'axios';

const API_KEY = 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr';
const TENANT_KEY = 'TYKE070323';
const BASE_URL = 'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Api-Key': API_KEY,
    'X-Tenant-Key': TENANT_KEY,
  },
});

export const getAllPlaylists = async () => {
  try {
    const response = await axiosInstance.post('getAllPlayList', {
      Content_Type: 2,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching playlists:', error);
    throw error;
  }
};

export const getFeeds = async (postIds) => {
  try {
    const response = await axiosInstance.post('getfeeds_v1', {
      Index: 1,
      ContentType: [2],
      IsTagged: false,
      URL: '',
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching feeds:', error);
    throw error;
  }
};
