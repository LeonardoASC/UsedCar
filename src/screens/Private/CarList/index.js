import react, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header, Container, CenteredView, MessageText, ItemSearch, HeaderTitle } from "./styles.js";
import api from '../../../services/api.js'
import MostPopular from '../../../components/HorizontalList/MostPopular.js'

export function CarList() {
    const [topCarros, setTopCarros] = useState([]);
    const [carros, setCarros] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCarros = async () => {
            try {
                setLoading(true);
                const response = await api.get('/carrosfipe');
                setTopCarros(response.data.slice(0, 3));
                setCarros(response.data.slice(3));
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCarros();
    }, []);

    const renderItem = ({ item }) => (
        <View style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingVertical: 20,
        }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Image style={{ width: 70, height: 50, resizeMode: 'cover', borderRadius: 5, backgroundColor: '#39BF61' }} source={{ uri: item.foto }} />
               <View style={{ justifyContent: 'center'}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{`${item.marca} ${item.modelo} - ${item.ano}`}</Text>
                <Text style={{ fontSize: 14 }}>{`Preço: ${item.tabela_fipe} R$`}</Text>
               </View>
            </View>
        </View>
    );



    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <HeaderTitle>Ranking de Carros Mais Baratos</HeaderTitle>
            </Header>
            <Container>
                <View style={{ height: '35%' }}>
                    <MostPopular dicas={topCarros} />
                </View>
                <FlatList
                    data={carros}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ddd' }} />}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </Container>
        </SafeAreaView>
    )
}
