import axios from "axios";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const Instance = axios.create({
  baseURL: apiUrl,
  timeout:2000
});

export default Instance;
