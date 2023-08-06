import axios from 'axios';

const apiUrl = process.env.API_URL;

export const fetchDataList = async () => {
  try {
    const response = await axios.get(apiUrl+ `/rotaDetayis/getall`);
    return response.data;
  } catch (error) {
    console.log('api cekme rota detayi hatası', error);
    return [];
  }
};

export const fetchPhotos = async () => {
  try {
    const response = await axios.get(apiUrl+ `/rotaGaleris/getall`);
    return response.data;
  } catch (error) {
    console.log('api cekme rota galeri hatası', error);
    return [];
  }
};

export const fetchData = async (rotaId) => {
  try {
    const response = await axios.get(apiUrl+ `/puans/getlist?rotaId=${rotaId}`);
    return response.data[0];
  } catch (error) {
    console.log('api cekme puan hatası', error);
    return null;
  }
};

export const fetchGunler = async (rotaId) => {
  try {
    const response = await axios.get(apiUrl+ `/gunlers/getlist?rotaId=${rotaId}`);
    return response.data;
  } catch (error) {
    console.log('api cekme gunler hatası', error);
    return [];
  }
};

export const fetchRota = async (rotaId) => {
  try {
    const response = await axios.get(apiUrl + `/rotas/getlist?rotaId=${rotaId}`);
    return response.data;
  } catch (error) {
    console.log('api cekme rota hatası', error);
    return [];
  }
};

export const getPhotoUrl = () => {
    return process.env.FOTO_URL;
  };
