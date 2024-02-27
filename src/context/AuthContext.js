import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../services/api"

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState('');

  
  
  const register = async (username, email, password) => {
    setIsLoading(true);
    try {
      const response = await api.post('/register', {
        name: username,
        email: email,
        password: password
      });

      let userInfo = response.data.userInfo;
      let userToken = response.data.access_token;

      setUserToken(userToken);
      setUserInfo(userInfo);
      await AsyncStorage.setItem('userToken', userToken);
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));

    } catch (error) {
      console.error("Erro durante o registro:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const login = (email, password) => {
    setIsLoading(true);
    api.post('/login', {
      email,
      password
    })
      .then(res => {
        // console.log("Resposta da API:", res.data);
        let userInfo = res.data.userInfo
        setUserToken(res.data.access_token)
        AsyncStorage.setItem('userToken', res.data.access_token)
        // console.log('resposta do login: ',userInfo);
        setUserInfo(userInfo)
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
      })
      .catch(e => {
        if (e.response && e.response.status === 401) {
          // console.log("ERRO da API:", e);
          alert("Credenciais inválidas. Tente novamente.");
        } else {
          alert("Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.");
        }
      });
    setIsLoading(false);
  }

  const logout = async () => {
    setIsLoading(true);

    setUserToken(null);
    setUserInfo(null);

    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');

    setIsLoading(false);
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('userToken');

      if (userInfo) {
        userInfo = JSON.parse(userInfo);
        setUserInfo(userInfo);
      }

      if (userToken) {
        setUserToken(userToken);
      }

      setIsLoading(false);
    } catch (e) {
      // console.log(`error ${e}`);
      alert(`error ${e}`);
    }
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        setIsLoading(true);
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          // Realize a validação do token aqui, se necessário
          setUserToken(userToken);
  
          // Recupere as informações do usuário
          const storedUserInfo = await AsyncStorage.getItem('userInfo');
          if (storedUserInfo) {
            setUserInfo(JSON.parse(storedUserInfo));
          }
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    checkAuthentication();
  }, []);

  useEffect(() => {
    isLoggedIn();
  }, []);
  

  return (
    <AuthContext.Provider value={{ register, login, logout, userToken, userInfo, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
