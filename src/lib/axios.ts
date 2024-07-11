import axios from "axios";

const ax = axios.create({
  baseURL: process.env.SITE_URL,
})

export default ax;
