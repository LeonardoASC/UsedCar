import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, TextInput, View, KeyboardAvoidingView, Platform } from "react-native";
import { Header, Container, CenteredView, MessageText, HeaderTitle, HeaderContent } from "./styles.js";
import api from '../../../services/api.js';
import MostPopular from '../../../components/HorizontalList/MostPopular.js';
import logo from '../../../../assets/UsedCarVerde.png';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
            marginVertical: 5,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 5,
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '25%', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16, color: 'gray' }}>{`${item.posicao}`}</Text>
                <Image style={{ width: 70, height: 50, resizeMode: 'cover', borderRadius: 5, backgroundColor: '#39BF61' }} source={{ uri: item.foto }} />
            </View>
            <View style={{ alignItems: 'flex-start', width: '55%', paddingHorizontal: '2%' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{`${item.marca} ${item.modelo}`}</Text>
                <Text style={{ fontSize: 14 }}>{`R$ ${item.tabela_fipe} `}</Text>
            </View>
            <View style={{ alignItems: 'flex-end', width: '20%' }}>
                <Text style={{ fontSize: 16 }}>{` ${item.ano}`}</Text>
                <Text style={{ fontSize: 12 }}>{` ${item.cilindrada}`}</Text>
            </View>
        </View>
    );

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1,  }}>
            <Header>
                <HeaderContent>
                    <Image source={logo} style={{ width: 50, height: 50 }} />
                    <HeaderTitle>Ranking de Carros Mais Baratos</HeaderTitle>
                    <MaterialCommunityIcons name="comment-question" size={30} color="#39BF61" />
                </HeaderContent>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 0.3,
                    width: '90%',
                    padding: 10,
                    alignSelf: 'center',
                    borderRadius: 10,
                    backgroundColor: 'white',
                }}>
                    <AntDesign name="search1" size={24} color="#39BF61" />
                    <TextInput
                        placeholder="Buscar por marca ou modelo"
                        value={search}
                        onChangeText={setSearch}
                        style={{ marginLeft: 10, width: '80%' }}
                    />
                </View>
            </Header>
            <Container>
                <View style={{marginBottom: '2%'}}>
                    <MostPopular dicas={topCarros} />
                </View>
                <FlatList
                    data={filteredCarros}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    keyboardShouldPersistTaps="always"
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                />
            </Container>
        </SafeAreaView>

    )
}