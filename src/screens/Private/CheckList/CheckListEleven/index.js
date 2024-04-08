import react, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header, Container, CenteredView, MessageText, Section, CarImage } from "./styles.js";
import api from "../../../../services/api.js";



export function CheckListEleven({ navigation, route }) {
    const { carroPart } = route?.params;
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
   

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;
    const cambio = carroPart.cambio && carroPart.cambio.length > 0 ? carroPart.cambio[0] : null;
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>

            </Header>
            <Container>
                <Text>id:{carroPart.id}</Text>
                <Text>{carroPart.marca} {carroPart.modelo} - {carroPart.ano}</Text>
                <Text>Carroceria: {carroPart.tipo_carroceria}</Text>
                <Text>Portas: {carroPart.numero_portas}</Text>
                {cambio && (
                    <View>
                        <Image
                            source={{ uri: cambio.foto }}
                            style={{ width: 150, height: 150,backgroundColor: 'black' }}
                        />
                        <Text>Descrição: {cambio.descricao}</Text>
                    </View>
                )}
                {!cambio && <Text>Nenhum dado do cambio disponível.</Text>}
                <TouchableOpacity
                    onPress={() => navigation.navigate('CheckListTwelve', { carroPart })}
                >
                    <Text>Proxima Pagina</Text>
                </TouchableOpacity>

            </Container>
        </SafeAreaView>
    )
}