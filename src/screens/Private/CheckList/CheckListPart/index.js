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
                // Fazendo a requisição para buscar os dados do carro e do item
                const response = await api.get(`/carro_itens/${selectedCar.id}/${itemPart.id}`);
                console.log('response.data:', JSON.stringify(response.data, null, 2));

                // Salvando os dados recebidos no estado items
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

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
            <Header>
                {items.item && (
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{items.item.nome}</Text>
                )}
                {items.foto && (
                    <Image
                        source={{ uri: items.foto }}
                        style={{ width: 200, height: 200, alignSelf: 'center' }}
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
                            <SubText>Descrição: {items.descricao}</SubText>
                        </View>
                    </ScrollView>
                )}
                <View style={{ position: 'absolute', bottom: '5%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TituloText style={{}}>Status de Inspeção do componente</TituloText>
                    {/* <Text style={{}}>Condição</Text> 
                     <Text style={{}}>Avaliação</Text>
                    <Text style={{}}>Situação Atual</Text>
                    <Text style={{}}>Nível de Manutenção</Text>
                    <Text style={{}}>Qualidade</Text>
                    <Text style={{}}>Resultado da Inspeção</Text> */}
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
