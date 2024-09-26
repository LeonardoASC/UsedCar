import React, { useContext, useEffect, useState } from "react";
import { Alert, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, View, Modal, ActivityIndicator } from "react-native";
import { Header, Container, CenteredView, MessageText, Section, CarImage, CenteredViewModal } from "./styles.js";
import api from '../../../../services/api';
import { CheckListContext } from "../../../../context/CheckListContext.js";

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
                console.log('response.data:', response.data);
                
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
        <Container>
            <Header>
                <Text>CheckListPart</Text>
                <Text>{checkListId}</Text>
            </Header>

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : error ? (
                <Text>{error}</Text>
            ) : (
                <ScrollView>
                    <View>
                        <Text>ID: {items.id}</Text>
                        <Text>Carro ID: {items.carro_id}</Text>
                        <Text>Item ID: {items.item_id}</Text>
                        <Text>Descrição: {items.descricao}</Text>
                        {items.foto && (
                            <Image
                                source={{ uri: items.foto }}
                                style={{ width: 150, height: 150 }}
                            />
                        )}
                        {items.carro && (
                            <View>
                                <Text>Carro: {items.carro.marca} {items.carro.modelo}</Text>
                                <Text>Ano: {items.carro.ano}</Text>
                                <Text>Cor: {items.carro.cor}</Text>
                                <Image
                                    source={{ uri: items.carro.foto }}
                                    style={{ width: 150, height: 100 }}
                                />
                            </View>
                        )}
                        {items.item && (
                            <View>
                                <Text>Item: {items.item.nome}</Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            )}
        </Container>
    );
}
