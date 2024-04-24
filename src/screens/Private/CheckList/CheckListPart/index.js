import React, { useEffect, useState } from "react";
import { Alert, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { Header, Container, CenteredView, MessageText, Section, CarImage } from "./styles.js";
import api from '../../../../services/api';
import { ca } from "date-fns/locale";

export function CheckListPart({ navigation, route }) {
    const { selectedItem, carro } = route.params;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchCarro = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/carros/${carro.id}`);
                setItems(response.data[selectedItem] || []);
            } catch (error) {
                setError(error.message);
                // Alert.alert("Erro", error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCarro();
    }, [carro.id, selectedItem]);

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;
    if (!items.length) return <CenteredView><MessageText>Nenhum item encontrado para a categoria selecionada.</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Text>CheckList Part</Text>
                <Text>Marca do Carro: {carro.marca}</Text>
                <Text>Modelo do Carro: {carro.modelo}</Text>
                <Text>Categoria: {selectedItem}</Text>
            </Header>
            <ScrollView>
                {items.map((item, index) => (
                    <Container key={index}>
                        <Image source={{ uri: item.foto }} style={{backgroundColor:'black', width: 150, height: 150 }} />
                        <Text>Descrição: {item.descricao}</Text>
                    </Container>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
