import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../services/api";
import { AuthContext } from './AuthContext';

export const CheckListContext = createContext({});

export const CheckListProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkListId, setCheckListId] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const { userInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [checkList, setCheckList] = useState([{}]);
// console.log('Contexto checkListId:', checkListId);


const fetchCarros = async () => {
  try {
      
      const response = await api.get('/carros');
      // console.log('response.data:', response.data);
      setCarros(response.data);
  } catch (error) {
      setError(error.message);
  } finally {
      setLoading(false);
  }
};


  const createCheckList = async (selectedCarro) => {
    console.log('Carro selecionado:', selectedCarro);
    
    const carroData = {
      user_id: userInfo.id,
      carro_id: selectedCarro.id,
      acessorio: 0,
      arcondicionado: 0,
      assento: 0,
      cambio: 0,
      documento: 0,
      embreagem: 0,
      espelho: 0,
      farol: 0,
      freio: 0,
      lataria: 0,
      motor: 0,
      pedal: 0,
      pneu: 0,
      radio: 0,
      sistema_eletrico: 0,
      suspensao: 0,
      vidro: 0
    };
    setIsLoading(true);
    try {
      const response = await api.post('/checklist', carroData);
      const createdItemId = response.data.checklist.id;
      setCheckListId(createdItemId);
    } catch (error) {
      console.error('Erro ao salvar o carro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const resumeCheckList = async () => {
    setIsLoading(true);
    try {
      const responseChecklist = await api.get('/checklist-last');
      const lastCheckList = responseChecklist.data;
      const responseCar = await api.get(`/carro/${lastCheckList.carro_id}`);
      const lastCar = responseCar.data;     
      setCheckListId(lastCheckList.id);
      setSelectedCar(lastCar);
    } catch (error) {
      console.error('Erro ao buscar o último checklist:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // console.log('Atualização do checkListId no contexto:', checkListId);
  }, [checkListId]);



  return (
    <CheckListContext.Provider value={{
      isLoading,
      createCheckList,
      checkListId,
      setCheckListId,
      selectedCar,
      setSelectedCar,
      resumeCheckList, 
    }}>
      {children}
    </CheckListContext.Provider>
  );
};
