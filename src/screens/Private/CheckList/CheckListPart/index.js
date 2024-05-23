import React, { useContext, useEffect, useState } from "react";
import { Alert, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import { Header, Container, CenteredView, MessageText, Section, CarImage } from "./styles.js";
import api from '../../../../services/api';
import { CheckListContext } from "../../../../context/CheckListContext.js";

export function CheckListPart({ navigation, route }) {
    const { itemPart } = route?.params;
    const { checkListId, isLoading, selectedCar } = useContext(CheckListContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchCarro = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/carros/${selectedCar.id}`);
                setItems(response.data[itemPart] || []);
            } catch (error) {
                setError(error.message);
                Alert.alert("Erro", error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCarro();
    }, [selectedCar.id, selectedCar]);

    const handlePress = async (itemPart, checkListId) => {
        try {
            const dataToUpdate = { [itemPart]: 1 };
            // console.log('Dados a serem atualizados:', dataToUpdate);
            const response = await api.patch(`/checklist/${checkListId}`, dataToUpdate);
            if (response.status === 200) {
                // console.log('Atualização bem-sucedida:', response.data);
                Alert.alert("Sucesso", "Item atualizado com sucesso!");
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
    
    

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;
    if (!items.length) return <CenteredView><MessageText>Nenhum item encontrado para a categoria selecionada.</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Text>CheckList Part</Text>
                <Text>Marca do Carro: {selectedCar.marca}</Text>
                <Text>Modelo do Carro: {selectedCar.modelo}</Text>
                <Text>Categoria: {selectedCar.name}</Text>
            </Header>
            <ScrollView>
                {items.map((item, index) => (
                    <Container key={index}>
                        <Image source={{ uri: item.foto }} style={{ backgroundColor: 'black', width: 150, height: 150 }} />
                        <Text>Descrição: {item.descricao}</Text>
                    </Container>
                ))}
            </ScrollView>
            <TouchableOpacity onPress={() => handlePress(itemPart, checkListId)} style={{ backgroundColor: 'green', padding: 20 }}>
                <Text style={{ color: 'white' }}>Check</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
