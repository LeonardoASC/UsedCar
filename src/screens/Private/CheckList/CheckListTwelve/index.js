import react, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header, Container, CenteredView, MessageText, Section, CarImage } from "./styles.js";
import api from "../../../../services/api.js";



export function CheckListTwelve({ navigation, route }) {
    const { carroPart } = route?.params;
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
   

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;
    const vidro = carroPart.vidro && carroPart.vidro.length > 0 ? carroPart.vidro[0] : null;
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>

            </Header>
            <Container>
                <Text>id:{carroPart.id}</Text>
                <Text>{carroPart.marca} {carroPart.modelo} - {carroPart.ano}</Text>
                <Text>Carroceria: {carroPart.tipo_carroceria}</Text>
                <Text>Portas: {carroPart.numero_portas}</Text>
                {vidro && (
                    <View>
                        <Image
                            source={{ uri: vidro.foto }}
                            style={{ width: 150, height: 150,backgroundColor: 'black' }}
                        />
                        <Text>Descrição: {vidro.descricao}</Text>
                    </View>
                )}
                {!vidro && <Text>Nenhum dado do vidro disponível.</Text>}
                <TouchableOpacity
                    onPress={() => navigation.navigate('CheckList2', { carroPart })}
                    style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 }}
                >
                    <Text style={{color: 'white'}}>Proxima Pagina</Text>
                </TouchableOpacity>

            </Container>
        </SafeAreaView>
    )
}