import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native'
import { Header, Container, ViewWrapper, ProfileImage, ConfigFlat, RenderFlat, IconWrapper, CenteredView, MessageText } from "./styles.js"
import { Ionicons, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, AntDesign, Fontisto } from '@expo/vector-icons';
import api from '../../../../services/api';

export function ChooseCheck({ navigation, route }) {
    const { carro } = route?.params;
    const [carroPart, setCarroPart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCarro = async () => {
            try {
                setLoading(true);
                // const response = await api.get('/carros/1');
                const response = await api.get(`/carros/${carro.id}`);
                setCarroPart(response.data);
                // console.log(response);
            } catch (error) {
                setError(error.message);
                alert(`Erro: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };
        fetchCarro();
    }, []);

    const data = [
        { id: 1, routes: 'Motor' },
        { id: 2, routes: 'Lataria' },
        { id: 3, routes: 'Pneu' },
        { id: 4, routes: 'Documento' },
        { id: 5, routes: 'Freio' },
        { id: 6, routes: 'Suspensao' },
        { id: 7, routes: 'Embreagem' },
        { id: 8, routes: 'SistemaEletrico' },
        { id: 9, routes: 'Pedal' },
        { id: 10, routes: 'Cambio' },
        { id: 11, routes: 'Vidro' },
    ];

    

    const IconsMore = {
        Motor: <Fontisto name="checkbox-passive" size={24} color="black" />,
        Lataria: <Fontisto name="checkbox-passive" size={24} color="black" />,
        Pneu: <Fontisto name="checkbox-passive" size={24} color="black" />,
        Documento: <Fontisto name="checkbox-passive" size={24} color="black" />,
        Freio: <Fontisto name="checkbox-passive" size={24} color="black" />,
        Suspensao: <Fontisto name="checkbox-passive" size={24} color="black" />,
        Embreagem: <Fontisto name="checkbox-passive" size={24} color="black" />,
        SistemaEletrico: <Fontisto name="checkbox-passive" size={24} color="black" />,
        Pedal: <Fontisto name="checkbox-passive" size={24} color="black" />,
        Cambio: <Fontisto name="checkbox-passive" size={24} color="black" />,
        Vidro: <Fontisto name="checkbox-passive" size={24} color="black" />,
    };

    const renderItem = ({ item }) => {
        return (
            <RenderFlat
                onPress={() => handlePress(item)}
            >
                <IconWrapper style={{ marginRight: '5%' }}>{IconsMore[item.routes]}</IconWrapper>
                <Text style={{ color: 'gray' }}>{item.routes}</Text>
            </RenderFlat>
        )
    };

    const handlePress = (item) => {
        const pages = {
            Motor: 'Motor',
            Lataria: 'Lataria',
            Pneu: 'Pneu',
            Documento: 'Documento',
            Freio: 'Freio',
            Suspensao: 'Suspensao',
            Embreagem: 'Embreagem',
            SistemaEletrico: 'Sistema Eletrico',
            Pedal: 'Pedal',
            Cambio: 'Cambio',
            Vidro: 'Vidro',
        };
        if (pages[item.routes]) {
            navigation.navigate(pages[item.routes], { carroPart });
        } else {
            Alert.alert(
                "Funcionalidade Indisponível",
                `A funcionalidade '${item.routes}' ainda não está disponível.`,
                [{ text: "OK" }],
                { cancelable: false }
            );
        }
    };



    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>

            </Header>
            <Container>
                <ConfigFlat
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: 50 }}
                />
            </Container>


        </SafeAreaView>
    )
}
