import react, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header, Container, InputSearch, ItemSearch } from "./styles.js";
import api from "../../../../services/api.js";

export function CheckListOne({ navigation }) {
    const [carros, setCarros] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(carros);

    useEffect(() => {
        const fetchCarros = async () => {
          try {
            setLoading(true);
            const response = await api.get('/carros');
            setCarros(response.data);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchCarros();
      }, []);
    
      if (loading) return <View><Text>Carregando...</Text></View>;
      if (error) return <View><Text>Erro: {error}</Text></View>;

    const dados = [
        {
            id: '1',
            marca: 'Fiat',
            modelo: 'Uno',
            ano: 2010,
            tipo_carroceria: 'Sedan',
            numero_portas: 2
        },
        {
            id: '2',
            marca: 'Ford',
            modelo: 'Palio',
            ano: 2012,
            tipo_carroceria: 'Coupé',
            numero_portas: 3
        },
        {
            id: '3',
            marca: 'Toyota',
            modelo: 'Gol',
            ano: 2015,
            tipo_carroceria: 'SUV',
            numero_portas: 4
        },
        {
            id: '4',
            marca: 'Chevrolet',
            modelo: 'Celta',
            ano: 2018,
            tipo_carroceria: 'SUV',
            numero_portas: 4
        },
        {
            id: '5',
            marca: 'Fiat',
            modelo: 'Fiesta',
            ano: 2020,
            tipo_carroceria: 'Hatchback',
            numero_portas: 2
        },
    ];



    const handleSearch = (text) => {
        const formattedQuery = text.toLowerCase();
        const filteredData = carros.filter(item => {
            return Object.values(item).join(' ').toLowerCase().includes(formattedQuery);
        });
        setQuery(text);
        setFilteredData(filteredData);
    };
    const handlePressItem = (carro) => {
        navigation.navigate('CheckListTwo', { carro });
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>

            </Header>
            <Container>
                <InputSearch
                    onChangeText={handleSearch}
                    value={query}
                    placeholder="Pesquise o veiculo..."
                    placeholderTextColor="#999"
                />
                <FlatList
                    data={filteredData}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 10.5 }} />
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handlePressItem(item)}>
                            <ItemSearch>{`${item.marca} ${item.modelo} - ${item.ano} - ${item.tipo_carroceria} - ${item.numero_portas} portas`}</ItemSearch>
                        </TouchableOpacity>
                    )}
                />
            </Container>
        </SafeAreaView>
    )
}