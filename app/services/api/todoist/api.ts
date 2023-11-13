import axios from 'axios';
import {TODOIST_API_URL, TODOIST_API_TOKEN} from '@env';

console.log({TODOIST_API_TOKEN, TODOIST_API_URL});

export const todoistApi = axios.create({
  baseURL: TODOIST_API_URL,
  headers: {
    Authorization: `Bearer ${TODOIST_API_TOKEN}`,
  },
});
