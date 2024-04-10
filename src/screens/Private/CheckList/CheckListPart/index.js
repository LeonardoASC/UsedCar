import react, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header, Container, CenteredView, MessageText, Section, CarImage } from "./styles.js";
import api from "../../../../services/api.js";


export function CheckListPart({ navigation, route }) {
    const { dadosPart, dadosBrutos } = route?.params;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    // console.log('checklistpart',dadosPart);
    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;
    // const motor = dadosPart.motor && dadosPart.motor.length > 0 ? dadosPart.motor[0] : null;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
            <Text>CheckListTwo</Text>
            </Header>
            <Container>
                <Text>id:{dadosBrutos.id}</Text>
                <Text>{dadosBrutos.marca} {dadosBrutos.modelo} - {dadosBrutos.ano}</Text>
                <Text>Carroceria: {dadosBrutos.tipo_carroceria}</Text>
                <Text>Portas: {dadosBrutos.numero_portas}</Text>
                {/* dadosPart */}
                
                    <Text>Partes do carro</Text>
                    {dadosPart.map((item, index) => (
                        <View key={index}>
                            <Text>{item.nome}</Text>
                            <CarImage source={{ uri: item.foto }} />
                        </View>
                    ))}
                
                {/* {motor && (
                    <View>
                        <Image
                            source={{ uri: motor.foto }}
                            style={{ width: 150, height: 150, backgroundColor: 'black' }}
                        />
                        <Text>Descrição: {motor.descricao}</Text>
                    </View>
                )}
                {!motor && <Text>Nenhum dado do motor disponível.</Text>} */}

                <TouchableOpacity
                    style={{ backgroundColor: 'green', padding: 10, borderRadius: 5, marginTop: 10 }}
                    onPress={() => navigation.navigate('ChooseCheck', { dadosBrutos, dadosPart })}
                >
                    <Text style={{color: 'white'}}>Check</Text>
                </TouchableOpacity>
            </Container>
        </SafeAreaView>
    )
}