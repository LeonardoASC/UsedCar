import react, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header, Container, CenteredView, MessageText, ItemSearch } from "./styles.js";
import api from '../../../services/api.js'
import MostEconomical from '../../../components/HorizontalList/MostEconomical.js'

export function Fuel() {
    const [topCarros, setTopCarros] = useState([]);
    const [carros, setCarros] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCarros = async () => {
            try {
                setLoading(true);
                const response = await api.get('/carrosfuel');
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
            <View style={{ flex: 1, marginLeft: 16 }}>
                {/* <Image style={{ width: 120, height: 100, resizeMode: 'cover', borderRadius: 5, }} source={{ uri: item.urlToImage }} /> */}
                <Text style={{ fontSize: 12 }}>{`${item.marca} ${item.modelo} - ${item.ano}`}</Text>
                <Text style={{ fontSize: 12 }}>{`Media: ${item.km_litro} km/l`}</Text>
            </View>
        </View>
    );



    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Text>Ranking de Carros Mais Economicos</Text>
            </Header>
            <Container>
                <View style={{ height: '35%' }}>
                    <MostEconomical dicas={topCarros} />
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