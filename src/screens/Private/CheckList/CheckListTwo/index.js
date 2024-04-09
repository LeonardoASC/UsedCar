import react, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header, Container, CenteredView, MessageText, Section, CarImage } from "./styles.js";
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
                // console.log(response);
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
    const motor = carroPart.motor && carroPart.motor.length > 0 ? carroPart.motor[0] : null;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
            <Text>CheckListTwo</Text>
            </Header>
            <Container>
                <Text>id:{carroPart.id}</Text>
                <Text>{carroPart.marca} {carroPart.modelo} - {carroPart.ano}</Text>
                <Text>Carroceria: {carroPart.tipo_carroceria}</Text>
                <Text>Portas: {carroPart.numero_portas}</Text>
                {motor && (
                    <View>
                        <Image
                            source={{ uri: motor.foto }}
                            style={{ width: 150, height: 150, backgroundColor: 'black' }}
                        />
                        <Text>Descrição: {motor.descricao}</Text>
                    </View>
                )}
                {!motor && <Text>Nenhum dado do motor disponível.</Text>}

                <TouchableOpacity
                    style={{ backgroundColor: 'green', padding: 10, borderRadius: 5, marginTop: 10 }}
                    onPress={() => navigation.navigate('ChooseCheck', { carroPart })}
                >
                    <Text style={{color: 'white'}}>Check</Text>
                    
                </TouchableOpacity>
            </Container>
        </SafeAreaView>
    )
}