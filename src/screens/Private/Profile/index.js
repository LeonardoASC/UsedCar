import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header, Container } from "./styles.js";
import { AuthContext } from "../../../context/AuthContext.js";
import api from "../../../services/api.js";

export function Profile() {
    const { userInfo, logout } = useContext(AuthContext);
    const [userCheckList, setUserCheckList] = useState([]);

    useEffect(() => {
        getChecklists();
    }, []);

    async function getChecklists() {
        try {
            const response = await api.get('/user/checklists');
            setUserCheckList(response.data);
            // console.log(response.data);
        } catch (error) {
            console.error('Erro ao buscar checklists do usuario:', error);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Text style={{ color: 'white' }}>{userInfo.name}</Text>
                <TouchableOpacity
                    style={{ backgroundColor: 'red', padding: 5, borderRadius: 5 }}
                    onPress={logout}>
                    <Text style={{ color: 'white' }}>Sair</Text>
                </TouchableOpacity>
            </Header>
            <Container>
            {userCheckList > 0 ? (
                <FlatList
                    data={userCheckList}
                    keyExtractor={(item) => item.id.toString()}
                    ListHeaderComponent={() => (
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Checklists</Text>
                        </View>
                    )}
                    renderItem={({ item }) => (
                        <View style={{}}>
                            <Text>{item.carro.marca} {item.carro.modelo}</Text>
                        </View>
                    )}
                />
            ) : (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Nenhum checklist encontrado</Text>
                </View>
            )}
            </Container>
        </SafeAreaView>
    );
}
