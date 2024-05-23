import react, { useContext } from "react";
import { SafeAreaView, Text } from "react-native";
import { Header, Container } from "./styles.js";
import { AuthContext } from "../../../context/AuthContext.js";

export function Profile(){
    const { userToken } = useContext(AuthContext);
    const { userInfo } = useContext(AuthContext);
    return(
        <SafeAreaView style={{flex: 1}}>
            <Header>
                <Text style={{color: 'white'}}>{userInfo.name}</Text>
            </Header>
            <Container>
                <Text style={{color: 'black'}}>{userToken}</Text>
                
            </Container>
        </SafeAreaView>
    )
}