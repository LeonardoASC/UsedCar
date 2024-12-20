import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Função assíncrona para obter o token do AsyncStorage
async function getToken() {
    try {
        const token = await AsyncStorage.getItem('userToken');
        // console.log('Token obtido do AsyncStorage:', token);
        return token;
    } catch (error) {
        console.error('Erro ao obter token:', error);
    }
}

// Criando a instância Axios
const api = axios.create({
    // baseURL: 'http://192.168.56.1:8000/api/',//casa
    baseURL: 'http://10.66.0.23:8000/api/',//trabalho
    // timeout: 1000,
    headers: {
        'Content-Type': 'Application/json',
        'Accept': 'Application/json'
    },
});

// Adicionando um interceptor para inserir o token no cabeçalho de cada requisição
api.interceptors.request.use(
    async (config) => {
        const userToken = await getToken();
        if (userToken) {
            config.headers.Authorization = `Bearer ${userToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;

