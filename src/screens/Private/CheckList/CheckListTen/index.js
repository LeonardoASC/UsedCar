import react, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header, Container, CenteredView, MessageText, Section, CarImage } from "./styles.js";
import api from "../../../../services/api.js";



export function CheckListTen({ navigation, route }) {
    const { carroPart } = route?.params;
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
   

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;
    const pedal = carroPart.pedal && carroPart.pedal.length > 0 ? carroPart.pedal[0] : null;
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>

            </Header>
            <Container>
                <Text>id:{carroPart.id}</Text>
                <Text>{carroPart.marca} {carroPart.modelo} - {carroPart.ano}</Text>
                <Text>Carroceria: {carroPart.tipo_carroceria}</Text>
                <Text>Portas: {carroPart.numero_portas}</Text>
                {pedal && (
                    <View>
                        <Image
                            source={{ uri: pedal.foto }}
                            style={{ width: 150, height: 150,backgroundColor: 'black' }}
                        />
                        <Text>Descrição: {pedal.descricao}</Text>
                    </View>
                )}
                {!pedal && <Text>Nenhum dado do pedal disponível.</Text>}
                <TouchableOpacity
                    onPress={() => navigation.navigate('CheckListEleven', { carroPart })}
                >
                    <Text>Proxima Pagina</Text>
                </TouchableOpacity>

            </Container>
        </SafeAreaView>
    )
}