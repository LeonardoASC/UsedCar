import react, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
import { Header, Container, CenteredView, MessageText, ItemSearch } from "./styles.js";
import api from '../../../services/api.js'

export function Fuel() {
    const [carros, setCarros] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCarros = async () => {
            try {
                setLoading(true);
                const response = await api.get('/carrosfuel');
                setCarros(response.data);
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

            </Header>
            <Container>
                <FlatList
                    data={carros}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 10.5 }} />
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                        // onPress={() => handlePressItem(item)}
                        >
                            <ItemSearch>{`${item.marca} ${item.modelo} - ${item.ano} - ${item.km_litro}`}</ItemSearch>
                        </TouchableOpacity>
                    )}
                />
            </Container>
        </SafeAreaView>
    )
}