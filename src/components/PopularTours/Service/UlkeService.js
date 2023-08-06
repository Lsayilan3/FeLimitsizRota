import axios from 'axios';


const apiUrl = process.env.API_URL;

export const ulkeCek = async () => {
  try {
    const sonuc = await axios.get(apiUrl + "/ulkes/getAll");
    return sonuc.data;
  } catch (error) {
    console.log("API çekme hatası ulke cek", error);
    return [];
  }
};
  
export const getPhotoUrl = () => {
  return process.env.FOTO_URL;
};