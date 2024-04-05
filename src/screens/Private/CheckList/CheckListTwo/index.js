import react, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { Header, Container, CenteredView, MessageText } from "./styles.js";
import api from "../../../../services/api.js";

export function CheckListTwo({ navigation, route }) {
    const { carro } = route?.params;
    const [carroPart, setCarroPart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCarro = async () => {
            try {
                setLoading(true);
                // const response = await api.get('/carros/1');
                const response = await api.get(`/carros/${carro.id}`);
                setCarroPart(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCarro();
    }, []);

       

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>

            </Header>
            <Container>
                <Text>id: {carroPart.id}</Text>
                <Text>Marca: {carroPart.marca}</Text>
                <Text>Modelo: {carroPart.modelo}</Text>
                <Text>Ano: {carroPart.ano}</Text>
                <Text>Tipo de Carroceria: {carroPart.tipo_carroceria}</Text>
                <Text>Número de Portas: {carroPart.numero_portas}</Text>
                {/* Detalhes do motor */}
                testar para ver se nao é o proxy
                {carroPart.motor && carroPart.motor.length > 0 && (
                    <View style={{width: '100%', height: '50%', backgroundColor:'yellow'}}>
                        <Image source={{ uri: 'carroPart.motor[0].foto' }} style={{ width: 200, height: 200 }} />
                        <Text>Descrição do Motor: {carroPart.motor[0].descricao}</Text>
                    </View>
                )}
            </Container>
        </SafeAreaView>
    )
}