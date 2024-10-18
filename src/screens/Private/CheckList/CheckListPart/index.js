import React, { useContext, useEffect, useState } from "react";
import { Alert, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, View, Modal, ActivityIndicator } from "react-native";
import { Header, Container, TituloText, SubText } from "./styles.js";
import api from '../../../../services/api';
import { CheckListContext } from "../../../../context/CheckListContext.js";
import Entypo from '@expo/vector-icons/Entypo';

export function CheckListPart({ navigation, route }) {
    const { itemPart } = route?.params;
    const { checkListId, isLoading, selectedCar } = useContext(CheckListContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [items, setItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const fetchCarro = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/carro_itens/${selectedCar.id}/${itemPart.id}`);
                // console.log('response.data:', JSON.stringify(response.data, null, 2));
                setItems(response.data);
            } catch (error) {
                setError(error.message);
                Alert.alert("Erro", error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCarro();
    }, [selectedCar.id, itemPart.id]);

    const handlePress = async (itemPart, checkListId, status) => {
        try {
            const response = await api.put(`/checklist/${checkListId}/item/${itemPart.id}`, {
                status: status,
              });
            if (response.status === 200) {
                // console.log('Atualização bem-sucedida:', response.data);
                Alert.alert("Sucesso", "Item Verificado!");
                navigation.navigate('ChooseCheck');
            } else {
                // console.error('Falha na atualização:', response.status);
                Alert.alert("Falha na Atualização", "Não foi possível atualizar o item.");
            }
        } catch (error) {
            // console.error('Erro ao atualizar dados:', error.response?.data || error.message);
            Alert.alert("Erro", "Erro ao tentar atualizar o item: " + (error.response?.data?.message || error.message));
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
            <Header>

                {items.item && (
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{items.item.nome}</Text>
                )}
                {items.foto && (
                    <Image
                        source={{ uri: items.foto }}
                        style={{ width: 250, height: 200, alignSelf: 'center' }}
                    />
                )}
            </Header>
            <Container>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : error ? (
                    <Text>{error}</Text>
                ) : (
                    <ScrollView>
                        <View>
                            <TituloText>Especifição Tecnica</TituloText>
                            {items.carro && (
                                <View>
                                    <SubText>{items.carro.marca} {items.carro.modelo} {items.carro.ano} {items.carro.cilindrada} {items.carro.cor} {items.carro.numero_portas}</SubText>
                                    <Image
                                        source={{ uri: items.carro.foto }}
                                        style={{ width: 150, height: 100, alignSelf: 'center' }}
                                    />
                                </View>
                            )}
                            <TituloText>Inspeção Visual</TituloText>
                            <SubText>{items.descricao}</SubText>
                            <SubText>Ruídos anormais: Ligue o carro e ouça atentamente o som do motor. Ruídos de "batidas", estalos ou rangidos podem indicar problemas mecânicos. O motor deve funcionar de forma suave, sem barulhos fora do normal.</SubText>
                        </View>
                    </ScrollView>
                )}
                <View style={{ position: 'absolute', bottom: '5%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TituloText style={{}}>Resultado da Inspeção</TituloText> 
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: '5%', width: '100%' }}>
                        <TouchableOpacity
                            style={{ borderWidth: 1, borderColor: 'green', padding: 5, borderRadius: 5, width: '25%', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => handlePress(itemPart, checkListId, 'Bom')}>
                            <Entypo name="emoji-happy" size={24} color="green" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ borderWidth: 1, borderColor: '#e5e340', padding: 5, borderRadius: 5, width: '25%', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => handlePress(itemPart, checkListId, 'Regular')}>
                            <Entypo name="emoji-neutral" size={24} color="#e5e340" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ borderWidth: 1, borderColor: 'red', padding: 5, borderRadius: 5, width: '25%', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => handlePress(itemPart, checkListId, 'Ruim')}>
                            <Entypo name="emoji-sad" size={24} color="red" />
                        </TouchableOpacity>
                    </View>

                </View>
            </Container>
        </SafeAreaView>
    );
}
