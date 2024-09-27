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



  const createCheckList = async (selectedCarro) => {
    // console.log('Carro selecionado:', selectedCarro);
    const carroData = {
      user_id: userInfo.id,
      carro_id: selectedCarro.id,
      status: 0,
    };
    setIsLoading(true);
    try {
      const response = await api.post('/checklist', carroData);
      // console.log('aqui:', response.data.data.id);
      const createdItemId = response.data.data.id;
      setCheckListId(createdItemId);
    } catch (error) {
      console.error('Erro ao criar uma checklist:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const resumeCheckList = async () => {
    setIsLoading(true);
    try {
      const responseChecklist = await api.get('/checklist-resume');
      const lastCheckList = responseChecklist.data.CheckList;
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
