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

export const fetchPuans = async (rotaId) => {
  try {
    const response = await axios.get(apiUrl+ `/puans/getlist?rotaId=${rotaId}`);
    return response.data;
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

export const getFilteredGaleriData = async (rotaId) => {
  try {
    const response = await axios.get(apiUrl + "/rotaGaleris/getAll");
    const filteredData = response.data.filter(item => item.resimTipiId === 1 && item.rotaId === rotaId);
    return filteredData;
  } catch (error) {
    console.log("API çekme hatası rota galeri", error);
    return [];
  }
};



export const getPhotoUrl = () => {
    return process.env.FOTO_URL;
  };
