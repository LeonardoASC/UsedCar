import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, TextInput, View, KeyboardAvoidingView, Platform, Modal } from "react-native";
import { Header, Container, CenteredView, MessageText, HeaderTitle, HeaderContent, CenteredViewModal } from "./styles.js";
import api from '../../../services/api.js';
import MostPopular from '../../../components/HorizontalList/MostPopular.js';
import logo from '../../../../assets/UsedCarVerde.png';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native";
export function CarList({ navigation }) {
    const [topCarros, setTopCarros] = useState([]);
    const [carros, setCarros] = useState([]);
    const [filteredCarros, setFilteredCarros] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

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
       <TouchableOpacity onPress={() => navigation.navigate('CarDetails', { item })}>
        <View style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 20,
            marginVertical: 5,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 5,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 2,
            
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
        </TouchableOpacity>
    );

    const onPressHandler = () => {
        setModalVisible(true);
    }
    const onPressEntendi = () => {
        setModalVisible(false);
    }


    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1,  }}>
            <Header>
                <HeaderContent>
                    <Image source={logo} style={{ width: 50, height: 50 }} />
                    <HeaderTitle>Ranking de Carros Mais Baratos</HeaderTitle>
                    <TouchableOpacity onPress={onPressHandler}>
                        <MaterialCommunityIcons name="comment-question" size={30} color="#39BF61" />
                    </TouchableOpacity>
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
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <CenteredViewModal>
                    <View style={{
                        margin: 20,
                        backgroundColor: "white",
                        borderRadius: 15,
                        padding: 35,
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                    }}>
                        <Text style={{ fontSize: 22 }}>Dicas!!!</Text>
                        <Text style={{ textAlign: 'center' }}>UsedCar exibe uma lista de veículos ordenados pelo preço, ajudando os usuários a identificar os carros com melhor preço de mercado.</Text>
                        <View style={{ marginTop: '5%', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                            <TouchableOpacity onPress={onPressEntendi}>
                                <Text style={{ color: 'white', fontSize: 20, borderColor: 'white', borderWidth: 1, borderRadius: 5, paddingHorizontal: 15, alignSelf: 'center', backgroundColor: 'green' }}>Entendi 😁</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </CenteredViewModal>
            </Modal>
        </SafeAreaView>

    )
}