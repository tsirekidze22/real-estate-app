import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "1485e7d2f0mshc15fe0de09a2f8ep11391fjsn7bc0160fa4b3",
    },
  });

  return data;
};
