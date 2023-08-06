import axios from 'axios';


const apiUrl = process.env.API_URL;

export const apiCek = async () => {
    try {
      const response = await axios.get(apiUrl + "/bolgelers/getAll");
      return response.data;
    } catch (error) {
      console.log("API çekme hatası bolgeler", error);
      return [];
    }
  };

export const getPhotoUrl = () => {
  return process.env.FOTO_URL;
};