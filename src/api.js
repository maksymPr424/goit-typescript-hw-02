import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const Key = "bwREocLO86Jv1sSZLJQ3hJR9uYit47xpGrNvnJ6Tkhk";

const getImages = async (searchQuery, page = 1, perPage = 12) => {
  try {
    const images = await axios.get(`search/photos/?client_id=${Key}`, {
      params: {
        query: searchQuery,
        page,
        per_page: perPage,
      },
    });
    return images.data.results;
  } catch (e) {
    console.error("Error fetching images:", e);
    throw e;
  }
};

export default getImages;
