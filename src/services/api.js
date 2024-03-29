// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Função assíncrona para obter o token do AsyncStorage
// async function getToken() {
//     try {
//         return await AsyncStorage.getItem('userToken');
//     } catch (error) {
//         console.error('Erro ao obter token:', error);
//     }
// }

// // Criando a instância Axios
// const api = axios.create({
//     // baseURL: 'http://192.168.15.5:8000/api/',//casa
//     baseURL: 'http://10.55.0.220:8000/api/',//trabalho
//     // timeout: 1000,
//     headers: {
//         'Content-Type': 'Application/json',
//         'Accept': 'Application/json'
//     },

// });

// // Adicionando um interceptor para inserir o token no cabeçalho de cada requisição
// api.interceptors.request.use(
//     async (config) => {
//         const userToken = await getToken();
//         if (userToken) {
//             config.headers.Authorization = `Bearer ${userToken}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// export default api;

// https://newsapi.org/v2/everything?q=carros&apiKey=7a4ed333c3df43dca5a43f092f836a73


import axios from 'axios';

const api = axios.create({
 baseURL: 'https://newsapi.org/v2/everything',
 proxy: {
    host: 'proxy.campus.unimontes.int', // Substitua pelo endereço do seu servidor proxy
    port: 3128, // Substitua pela porta do seu servidor proxy
    auth: {
      username: 'leonardo.chaves', // Substitua pelo seu nome de usuário do proxy, se necessário
      password: '@Leopvq0872' // Substitua pela sua senha do proxy, se necessário
    }
 }
});

export default api;