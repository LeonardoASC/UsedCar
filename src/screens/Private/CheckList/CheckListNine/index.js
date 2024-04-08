import react, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header, Container, CenteredView, MessageText, Section, CarImage } from "./styles.js";
import api from "../../../../services/api.js";



export function CheckListNine({ navigation, route }) {
    const { carroPart } = route?.params;
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
   

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;
    const sistema_eletrico = carroPart.sistema_eletrico && carroPart.sistema_eletrico.length > 0 ? carroPart.sistema_eletrico[0] : null;
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>

            </Header>
            <Container>
                <Text>id:{carroPart.id}</Text>
                <Text>{carroPart.marca} {carroPart.modelo} - {carroPart.ano}</Text>
                <Text>Carroceria: {carroPart.tipo_carroceria}</Text>
                <Text>Portas: {carroPart.numero_portas}</Text>
                {sistema_eletrico && (
                    <View>
                        <Image
                            source={{ uri: sistema_eletrico.foto }}
                            style={{ width: 150, height: 150,backgroundColor: 'black' }}
                        />
                        <Text>Descrição: {sistema_eletrico.descricao}</Text>
                    </View>
                )}
                {!sistema_eletrico && <Text>Nenhum dado do sistema_eletrico disponível.</Text>}
                <TouchableOpacity
                    onPress={() => navigation.navigate('CheckListTen', { carroPart })}
                >
                    <Text>Proxima Pagina</Text>
                </TouchableOpacity>

            </Container>
        </SafeAreaView>
    )
}