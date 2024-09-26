import React, { useState, useEffect, useContext } from 'react'
import { Dimensions, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { Header, Container, CenteredView, MessageText } from "./styles.js"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../../../services/api';
import { CheckListContext } from "../../../../context/CheckListContext.js";
import { useFocusEffect } from '@react-navigation/native';

export function ChooseCheck({ navigation }) {
    const { checkListId, selectedCar } = useContext(CheckListContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [columns, setColumns] = useState([]);
    // console.log('CheckListId:', checkListId);

    useEffect(() => {
        if (checkListId !== null && checkListId !== undefined) {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    const response = await api.get(`/checklist/${checkListId}`);
                    // console.log('response.data:', JSON.stringify(response.data, null, 2));
                    setColumns(response.data);
                } catch (error) {
                    setError('Meu erro: ', error.message);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [checkListId]);


    const handlePress = async (item) => {
        console.log('Item selecionado:', item);
        navigation.navigate('CheckListPart', { itemPart: item, checkListId });
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => handlePress(item)}
                style={{
                    backgroundColor: '#39BF61',
                    padding: 20,
                    marginVertical: 8,
                    borderRadius: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                {/* Exibir o nome do item */}
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{item.nome}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    {['Bom', 'Regular', 'Ruim', 'A verificar'].includes(item.pivot.status) && (
                        <Text style={{ color: 'white', marginRight: 15 }}>{item.pivot.status}</Text>
                    )}
                    <MaterialCommunityIcons
                        name={
                            item.pivot.status === 'Bom' ? "checkbox-marked" :
                                item.pivot.status === 'Regular' ? "alert-circle-outline" :
                                    item.pivot.status === 'Ruim' ? "close-box" : "arrow-right-box"
                        }
                        size={24}
                        color={
                            item.pivot.status === 'Bom' ? "green" :
                                item.pivot.status === 'Regular' ? "yellow" :
                                    item.pivot.status === 'Ruim' ? "red" : "white"
                        }
                    />
                </View>

            </TouchableOpacity>
        );
    };


    if (loading || !selectedCar || !checkListId) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={{}}>{selectedCar.marca} {selectedCar.modelo}</Text>
                    </View>
                    <Image source={{ uri: selectedCar.foto }} style={{ width: 120, height: 100, resizeMode: 'cover', borderRadius: 5, }} />
                </View>
                <Text>Escolha um item para verificar</Text>
                {/* <Text>{columns.data.id}</Text> */}
            </Header>
            <Container>
                {columns.data === undefined ? (<MessageText>Nenhum item encontrado</MessageText>) : (
                    <FlatList
                        data={columns.data.items}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem}
                        contentContainerStyle={{ width: '100%', padding: 10 }}
                        ListHeaderComponent={
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>Itens</Text>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 15 }}>Status</Text>
                            </View>
                        }
                    />
                )}
            </Container>
        </SafeAreaView>
    )
}
