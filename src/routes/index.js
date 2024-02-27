import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from 'react';
import { StatusBar } from "expo-status-bar";
import { Private } from "./private";
import { Public } from "./public";
import { AuthContext } from "../context/AuthContext";

export function Routes() {
  // const { isAuthenticated } = useAuth();
  const { userToken } = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {/* <StatusBar/> */}
      {
        userToken ? (userInfo && userInfo.email === 'admin@adm.com' ? <Private />
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