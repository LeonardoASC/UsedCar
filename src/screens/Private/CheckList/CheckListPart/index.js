import react, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header, Container, CenteredView, MessageText, Section, CarImage } from "./styles.js";

export function CheckListPart({ navigation, route }) {
    const { dadosPart, dadosBrutos } = route?.params;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Text>CheckList Part</Text>
            </Header>
            <Container>
                <Text>id:{dadosBrutos.id}</Text>
                <Text>{dadosBrutos.marca} {dadosBrutos.modelo} - {dadosBrutos.ano}</Text>
                <Text>Carroceria: {dadosBrutos.tipo_carroceria}</Text>
                <Text>Portas: {dadosBrutos.numero_portas}</Text>

                {dadosPart.map((item, index) => (
                    <View key={index}>
                        <Text>Carro ID: {item.carro_id}</Text>
                        <Text>Descrição: {item.descricao}</Text>
                        <Image source={{ uri: item.foto }} style={{ width: 150, height: 150, backgroundColor: 'black' }} />
                    </View>
                ))}


                <TouchableOpacity
                    style={{ backgroundColor: 'green', padding: 10, borderRadius: 5, marginTop: 10 }}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={{ color: 'white' }}>Checar</Text>
                </TouchableOpacity>



            </Container>
        </SafeAreaView>
    )
}