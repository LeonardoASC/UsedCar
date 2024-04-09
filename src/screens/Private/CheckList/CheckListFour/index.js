import react, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header, Container, CenteredView, MessageText, Section, CarImage } from "./styles.js";
import api from "../../../../services/api.js";



export function CheckListFour({ navigation, route }) {
    const { carroPart } = route?.params;
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
   

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;
    const pneu = carroPart.pneu && carroPart.pneu.length > 0 ? carroPart.pneu[0] : null;
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
            <Text>CheckListFour</Text>
            </Header>
            <Container>
                <Text>id:{carroPart.id}</Text>
                <Text>{carroPart.marca} {carroPart.modelo} - {carroPart.ano}</Text>
                <Text>Carroceria: {carroPart.tipo_carroceria}</Text>
                <Text>Portas: {carroPart.numero_portas}</Text>
                {pneu && (
                    <View>
                        <Image
                            source={{ uri: pneu.foto }}
                            style={{ width: 150, height: 150,backgroundColor: 'black' }}
                        />
                        <Text>Descrição: {pneu.descricao}</Text>
                    </View>
                )}
                {!pneu && <Text>Nenhum dado do pneu disponível.</Text>}

                <TouchableOpacity
                style={{ backgroundColor: 'green', padding: 10, borderRadius: 5, marginTop: 10 }}
                    onPress={() => navigation.navigate('CheckListFive', { carroPart })}
                >
                    <Text style={{color: 'white'}}>Proxima Pagina</Text>
                </TouchableOpacity>
            </Container>
        </SafeAreaView>
    )
}