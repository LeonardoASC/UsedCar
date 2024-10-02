import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, TextInput, View, KeyboardAvoidingView, Platform } from "react-native";
import { Header, Container, CenteredView, MessageText, HeaderTitle } from "./styles.js";
import api from '../../../services/api.js'
import MostPopular from '../../../components/HorizontalList/MostPopular.js'

export function CarList() {
    const [topCarros, setTopCarros] = useState([]);
    const [carros, setCarros] = useState([]);
    const [filteredCarros, setFilteredCarros] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCarros = async () => {
            try {
                setLoading(true);
                const response = await api.get('/carrosfipe');
                setTopCarros(response.data.slice(0, 3));
                setCarros(response.data.slice(3));
                setFilteredCarros(response.data.slice(3)); // inicializa o filtro com todos os carros
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCarros();
    }, []);

    useEffect(() => {
        const filterCarros = () => {
            if (search === '') {
                setFilteredCarros(carros);
            } else {
                const filtered = carros.filter(carro =>
                    carro.marca.toLowerCase().includes(search.toLowerCase()) ||
                    carro.modelo.toLowerCase().includes(search.toLowerCase()));
                setFilteredCarros(filtered);
            }
        };
        filterCarros();
    }, [search, carros]);

    const renderItem = ({ item }) => (
        <View style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 20,
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '20%' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginRight: '10%' }}>{`${item.posicao}`}</Text>
                <Image style={{ width: 70, height: 50, resizeMode: 'cover', borderRadius: 5, backgroundColor: '#39BF61' }} source={{ uri: item.foto }} />
            </View>
            <View style={{ alignItems: 'flex-start', width: '60%', paddingHorizontal: '5%' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{`${item.marca} ${item.modelo}`}</Text>
                <Text style={{ fontSize: 14 }}>{`R$ ${item.tabela_fipe} `}</Text>
            </View>
            <View style={{ alignItems: 'flex-end', width: '20%' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{` ${item.ano}`}</Text>
                <Text style={{ fontSize: 12 }}>{` ${item.cilindrada}`}</Text>
            </View>
        </View>
    );

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <HeaderTitle>Ranking de Carros Mais Baratos</HeaderTitle>
                <TextInput
                    placeholder="Buscar por marca ou modelo"
                    value={search}
                    onChangeText={setSearch}
                    style={{ height: '30%', borderColor: 'gray', borderWidth: 1, width: '90%', padding: 10, alignSelf: 'center' }}
                />
            </Header>
            <Container>
                <View style={{
                    marginBottom: '2%',
                    height: '35%',
                }}>
                    <MostPopular dicas={topCarros} />
                </View>
                <FlatList
                    data={filteredCarros}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#39BF61' }} />}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    keyboardShouldPersistTaps="always"
                />
            </Container>
        </SafeAreaView>

    )
}