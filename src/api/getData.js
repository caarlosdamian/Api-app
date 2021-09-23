import axios from "axios";
import { query } from "./query";
import { githubUrl, oauth } from "./apiConfig";
export const getData = async () => {
  const response = await axios.post(
    githubUrl,
    { query: query },
    { headers: oauth }
  );
  return response.data;
};
