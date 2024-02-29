import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from 'react';
import { StatusBar } from "expo-status-bar";
import { Private } from "./private";
import { Public } from "./public";
import { AuthContext } from "../context/AuthContext";

export function Routes() {
  // const { userToken } = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);
  const userToken = 1;
  return (
    <NavigationContainer>
      {/* <StatusBar/> */}
      {
        userToken ? (userInfo && userInfo.email === 'admin@adm.br' ? <Private />
          :
          <Private />
        )
          :
          (
            <Public />
          )
      }
    </NavigationContainer>
  )
}