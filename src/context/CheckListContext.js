import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../services/api";

export const CheckListContext = createContext({});

export const CheckListProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkListId, setCheckListId] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  const createCheckList = async (selectedCarro) => {
    const carroData = {
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
      setSelectedCar
    }}>
      {children}
    </CheckListContext.Provider>
  );
};
