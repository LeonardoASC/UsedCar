import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, } from 'react-native'
import { Header, Container, ConfigFlat, RenderFlat, IconWrapper, CenteredView, MessageText } from "./styles.js"
import { MaterialIcons } from '@expo/vector-icons';
import api from '../../../../services/api';

export function ChooseCheck({ navigation, route }) {
    const { carro } = route?.params;
    const [carroPart, setCarroPart] = useState([]);
    const [dadosBrutos, setDadosBrutos] = useState([]);
    const [routeApi, setrouteApi] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCarro = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/carros/${carro.id}`);
                setCarroPart(response.data);
                const data = response.data;
                const routesApi = Object.keys(data).filter(key => Array.isArray(data[key])).map(key => ({
                    nome: key.charAt(0).toUpperCase() + key.slice(1),
                    checked: false,
                }));
                setrouteApi(routesApi);
                const dadosPrincipais = {
                    id: response.data.id,
                    marca: response.data.marca,
                    modelo: response.data.modelo,
                    ano: response.data.ano,
                    tipo_carroceria: response.data.tipo_carroceria,
                    numero_portas: response.data.numero_portas,
                };
                setDadosBrutos(dadosPrincipais);
            } catch (error) {
                setError(error.message);
                alert(`Erro: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };
        fetchCarro();
    }, [carro.id]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => { });
        return unsubscribe;
    }, [navigation]);


    const toggleItemState = (nome) => {
        const newRouteApi = routeApi.map(item => {
            if (item.nome === nome) {
                return { ...item, checked: !item.checked };
            }
            return item;
        });
        setrouteApi(newRouteApi);
    };

    const renderItem = ({ item }) => {
        return (
            <RenderFlat onPress={() => handlePress(item)}>
                <IconWrapper style={{ marginRight: '5%' }}>
                    {item.checked ? (
                        <MaterialIcons name="check-box" size={24} color="green" />
                    ) : (
                        <MaterialIcons name="check-box-outline-blank" size={24} color="gray" />
                    )}
                </IconWrapper>
                <Text style={{ color: 'gray' }}>{item.nome}</Text>
            </RenderFlat>
        );
    };

    const handlePress = async (item) => {
        const categoriaNome = item.nome.toLowerCase();
        const dadosPart = carroPart[categoriaNome];
        navigation.navigate('CheckListPart', {
            dadosPart,
            dadosBrutos,
            onGoBack: () => toggleItemState(item.nome),
        });
    };


    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>

            </Header>
            <Container>
                <ConfigFlat
                    data={routeApi}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                />
            </Container>

        </SafeAreaView>
    )
}
