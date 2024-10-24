import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native";
import { Header, Container } from "./styles.js";
import { AuthContext } from "../../../context/AuthContext.js";
import api from "../../../services/api.js";
import logo from "../../../../assets/UsedCarVerde.png";

export function Profile() {
    const { userInfo, logout } = useContext(AuthContext);
    const [userCheckList, setUserCheckList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const completedChecklists = userCheckList.filter((item) => item.status === 1).length;

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

    const renderItem = ({ item }) => {
        return (
            <View
                style={{
                    backgroundColor: '#fff',
                    padding: 15,
                    marginVertical: 8,
                    marginHorizontal: 16,
                    borderRadius: 8,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 3,
                }}
            >
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>
                    Carro: {item.carro.marca} {item.carro.modelo} - {item.carro.ano}
                </Text>
                <Text style={{ fontSize: 16, marginBottom: 5 }}>
                    Status:{' '}
                    <Text style={{ color: item.status === 0 ? 'red' : 'green' }}>
                        {item.status === 0 ? 'Não finalizado' : 'Finalizado'}
                    </Text>
                </Text>
                <Text style={{ fontSize: 14, color: '#666' }}>
                    Criado em: {new Date(item.created_at).toLocaleString()}
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Image source={logo} style={{ width: 100, height: 100, marginBottom: '5%' }} />
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', right: 10 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Ola, {userInfo.name}</Text>
                        <Text style={{ color: 'gray', fontSize: 16 }}>
                            {completedChecklists > 0
                                ? `Você já realizou ${completedChecklists} checklist(s)`
                                : 'Você ainda não realizou nenhum checklist'}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{ backgroundColor: '#39BF61', padding: 10, borderRadius: 5 }}
                        onPress={logout}>
                        <Text style={{ color: 'white' }}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </Header>
            <Container>
                {userCheckList.length > 0 ? (
                    <FlatList
                        data={userCheckList}
                        keyExtractor={(item) => item.id.toString()}
                        // ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'gray', }} />}
                        ListHeaderComponent={() => (
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Minhas Checklists</Text>
                            </View>
                        )}
                        renderItem={renderItem}
                        style={{ flex: 1 }}
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
