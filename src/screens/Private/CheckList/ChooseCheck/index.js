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

    useFocusEffect(
        React.useCallback(() => {
            if (checkListId) {
                setLoading(true);
                const fetchData = async () => {
                    try {
                        const response = await api.get(`/checklist/${checkListId}`);
                        if (response.data && typeof response.data === 'object') {
                            const excludedKeys = ['id', 'user_id', 'carro_id', 'created_at', 'updated_at'];
                            const columnNames = Object.keys(response.data)
                                .filter(key => !excludedKeys.includes(key))
                                .map(key => ({
                                    name: key,
                                    value: response.data[key]
                                }));
                            setColumns(columnNames);
                        }
                    } catch (error) {
                        console.error('Erro ao buscar dados no chooseCheck:', error);
                        setError('Erro ao buscar dados.');
                    } finally {
                        setLoading(false);
                    }
                };
                fetchData();
            }
        }, [checkListId])
    );
   

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true);
    //             const response = await api.get('/item');
    //             // console.log('response.data:', response.data);
    //             setColumns(response.data);
    //         } catch (error) {
    //             setError(error.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchData();
    // }, []);


    const handlePress = async (item) => {
        console.log('Item selecionado:', item);
        navigation.navigate('CheckListPart', { itemPart: item.name, checkListId });
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => handlePress(item)}
                style={{
                    backgroundColor: '#39BF61',
                    padding: 20,
                    marginVertical: 8,
                    // marginHorizontal: 12,
                    borderRadius: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    {['Bom', 'Regular', 'Ruim'].includes(item.value) && (
                        <Text style={{ color: 'white', marginRight: 15 }}>{item.value}</Text>
                    )}
                    <MaterialCommunityIcons
                        name={
                            item.value === 'Bom' ? "checkbox-marked" :
                                item.value === 'Regular' ? "alert-circle-outline" :
                                    item.value === 'Ruim' ? "close-box" : "arrow-right-box"
                        }
                        size={24} color={
                            item.value === 'Bom' ? "green" :
                                item.value === 'Regular' ? "yellow" :
                                    item.value === 'Ruim' ? "red" : "white"
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
            </Header>
            <Container>
                <FlatList
                    data={columns}
                    keyExtractor={item => item.name + item.value}
                    renderItem={renderItem}
                    contentContainerStyle={{ width: '100%', padding: 10 }}
                    ListHeaderComponent={
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 15 }}>Itens</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 15 }}>Status</Text>
                        </View>
                    }
                />
            </Container>
        </SafeAreaView>
    )
}
