import axios from 'axios';
import {TODOIST_API_URL, TODOIST_API_TOKEN} from '@env';

export const todoistApi = axios.create({
  baseURL: TODOIST_API_URL,
  headers: {
    Authorization: `Bearer ${TODOIST_API_TOKEN}`,
  },
});
