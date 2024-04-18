import react, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header, Container, CenteredView, MessageText, ItemSearch } from "./styles.js";
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

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Text>Ranking de Carros Mais Baratos</Text>
            </Header>
            <Container>
                <View style={{ height: '35%' }}>
                    <MostPopular dicas={topCarros} />
                </View>
                <FlatList
                    data={carros}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 10.5 }} />
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <ItemSearch>{`${item.marca} ${item.modelo} - ${item.ano}`}</ItemSearch>
                            <ItemSearch>{`Preço: ${item.tabela_fipe} R$`}</ItemSearch>
                        </View>
                    )}
                />
            </Container>
        </SafeAreaView>
    )
}
