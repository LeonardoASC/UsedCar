import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header, Container } from "./styles.js";
import { AuthContext } from "../../../context/AuthContext.js";
import api from "../../../services/api.js";

export function Profile() {
    const { userInfo, logout } = useContext(AuthContext);
    const [userCheckList, setUserCheckList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getChecklists = async () => {
            try {
                setLoading(true);
                const response = await api.get('/checklists-user');
                setUserCheckList(response.data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        getChecklists();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Ola, {userInfo.name}</Text>
                <TouchableOpacity
                    style={{ backgroundColor: '#39BF61', padding: 5, borderRadius: 5 }}
                    onPress={logout}>
                    <Text style={{ color: 'white' }}>Sair</Text>
                </TouchableOpacity>
            </Header>
            <Container>
                {userCheckList.length > 0 ? (
                    <FlatList
                        data={userCheckList}
                        keyExtractor={(item) => item.id.toString()}
                        ListHeaderComponent={() => (
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Minhas Checklists</Text>
                            </View>
                        )}
                        renderItem={({ item }) => (
                            <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
                                {/* <Text>Carro ID: {item.carro_id}</Text> */}
                                <Text>Carro: {item.carro.marca} {item.carro.modelo} - {item.carro.ano}</Text>
                                <Text>Status: {item.status === 0 ? 'Nao finalizado' : 'Finalizado'}</Text>
                                <Text>Criado em: {new Date(item.created_at).toLocaleString()}</Text>
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
