import React, { useState, useEffect, useContext, useCallback } from 'react'
import { Dimensions, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View, Alert, Modal } from 'react-native'
import { Header, Container, CenteredView, MessageText, CenteredViewModal } from "./styles.js"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../../../services/api';
import { CheckListContext } from "../../../../context/CheckListContext.js";
import { CommonActions, useFocusEffect } from '@react-navigation/native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function ChooseCheck({ navigation }) {
    const { checkListId, selectedCar } = useContext(CheckListContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [columns, setColumns] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

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

    const handlePressFinalizar = async () => {
        try {
            // setLoading(true);
            const updatedData = {
                user_id: selectedCar.user_id,
                carro_id: selectedCar.id,
                status: 1,
            };
            const response = await api.put(`/checklist/${checkListId}`, updatedData);

            if (response.status === 200) {
                Alert.alert('Sucesso', 'Checklist finalizada com sucesso.');
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'CheckList2' }], 
                    })
                );
            } else {
                Alert.alert('Erro', 'Não foi possível atualizar a checklist.');
            }

        } catch (error) {
            console.error('Erro ao atualizar a checklist:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao atualizar a checklist. Por favor, tente novamente.');
        } finally {
            // Opcional: Ocultar o indicador de carregamento
            // setLoading(false);
        }
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
                    {['Bom', 'Regular', 'Ruim'].includes(item.pivot.status) && (
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

    const handlePressOpenModal = () => {
        setModalVisible(true);
    }
    


    if (loading || !selectedCar || !checkListId) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{}}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start' }}>Check List</Text>
                        <Text style={{ color: 'gray' }}>{selectedCar.marca} {selectedCar.modelo} {selectedCar.ano}</Text>
                    </View>
                    <TouchableOpacity onPress={handlePressOpenModal}
                        style={{ backgroundColor: 'white', padding: 10, borderRadius: 5 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome name="check-square-o" size={24} color="#39BF61" />
                            <Text style={{ color: 'gray' }}>Finalizar</Text>
                        </View>
                    </TouchableOpacity>
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
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <CenteredViewModal>
                    <View style={{
                        margin: 20,
                        backgroundColor: "white",
                        borderRadius: 15,
                        padding: 35,
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                    }}>
                        <Text style={{ fontSize: 18,textAlign: 'center' }}>Você deseja finalizar o checklist atual?</Text>
                        <Text style={{  }}>{selectedCar?.marca} {selectedCar?.modelo} {selectedCar?.cilindrada} - {selectedCar?.ano} </Text>

                        <View style={{ marginTop: '5%', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={{ color: 'red', fontSize: 14 }}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePressFinalizar}>
                                <Text style={{ color: 'white', fontSize: 20, borderColor: 'white', borderWidth: 1, borderRadius: 5, paddingHorizontal: 15, alignSelf: 'center', backgroundColor: 'green' }}>Finalizar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </CenteredViewModal>
            </Modal>
        </SafeAreaView>
    )
}
