import React, { useState, useEffect, useContext, useCallback } from 'react'
import { Dimensions, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { Header, Container, CenteredView, MessageText } from "./styles.js"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../../../services/api';
import { CheckListContext } from "../../../../context/CheckListContext.js";
import { useFocusEffect } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';

export function ChooseCheck({ navigation }) {
    const { checkListId, selectedCar } = useContext(CheckListContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [columns, setColumns] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                if (checkListId !== null && checkListId !== undefined) {
                    try {
                        setLoading(true);
                        const response = await api.get(`/checklist/${checkListId}`);
                        setColumns(response.data);
                    } catch (error) {
                        setError('Erro ao buscar checklist: ' + error.message);
                    } finally {
                        setLoading(false);
                    }
                }
            };
            fetchData();
        }, [checkListId])
    );


    const handlePress = async (item) => {
        console.log('Item selecionado:', item);
        navigation.navigate('CheckListPart', { itemPart: item, checkListId });
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => handlePress(item)}
                style={{
                    backgroundColor: '#f0f0f0',
                    padding: 20,
                    marginVertical: 8,
                    borderRadius: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>

                <Text style={{ color: 'gray', fontSize: 16, fontWeight: 'bold' }}>{item.nome}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    {['Bom', 'Regular', 'Ruim', 'A verificar'].includes(item.pivot.status) && (
                        <Text style={{ color: 'gray', marginRight: 15 }}>{item.pivot.status}</Text>
                    )}
                    <Entypo
                        name={
                            item.pivot.status === 'Bom' ? "emoji-happy" :
                                item.pivot.status === 'Regular' ? "emoji-neutral" :
                                    item.pivot.status === 'Ruim' ? "emoji-sad" : "arrow-with-circle-right"
                        }
                        size={24}
                        color={
                            item.pivot.status === 'Bom' ? "green" :
                                item.pivot.status === 'Regular' ? "yellow" :
                                    item.pivot.status === 'Ruim' ? "red" : "gray"
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
                <Text style={{fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start'}}>Check List</Text>
                    <View>
                        <Text style={{}}>{selectedCar.marca} {selectedCar.modelo} {selectedCar.ano}</Text>
                    </View>
                    <Image source={{ uri: selectedCar.foto }} style={{ width: 120, height: 100, resizeMode: 'cover', borderRadius: 5, }} />
                <Text>Escolha um item para verificar</Text>
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
