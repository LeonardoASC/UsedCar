import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, Modal, Button, Image } from "react-native";
import { Header, Container, InputSearch, ItemSearch, CenteredView, MessageText, CenteredViewModal, BtnCar } from "./styles.js";
import api from "../../../../services/api.js";
import { CheckListContext } from "../../../../context/CheckListContext.js";


export function CheckListOne({ navigation }) {
    const [carros, setCarros] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(carros);
    const [modalVisible, setModalVisible] = useState(false);


    const { createCheckList, selectedCar, setSelectedCar } = useContext(CheckListContext);

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

    useEffect(() => {
        if (!query) {
            setFilteredData(carros);
        }
    }, [carros, query]);

    const handleSearch = (text) => {
        const formattedQuery = text.toLowerCase();
        const filteredData = carros.filter(item => {
            return Object.values(item).join(' ').toLowerCase().includes(formattedQuery);
        });
        setQuery(text);
        setFilteredData(filteredData);
    };

    const handlePressItem = (carro) => {
        setSelectedCar(carro);
        setModalVisible(true);
    };

    const navigateToCheckList = (selectedCar) => {
        createCheckList(selectedCar);
        navigation.navigate('ChooseCheck');
    };

    const renderItem = ({ item }) => {
        return (
            <BtnCar onPress={() => handlePressItem(item)}>
                <Image source={{ uri: item.foto }} style={{
                    width: '100%',
                    height: 150,
                    resizeMode: 'cover',
                    borderRadius: 5,
                }} />
                <View style={{ marginLeft: 12 }}>
                    <ItemSearch>{`${item.marca} ${item.modelo} - ${item.cilindrada}`}</ItemSearch>
                    <ItemSearch>{`${item.ano}`}</ItemSearch>
                    <ItemSearch>{`${item.tipo_carroceria}`}</ItemSearch>
                    <ItemSearch>{`${item.numero_portas} portas`}</ItemSearch>
                </View>
            </BtnCar>
        );
    };

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Selecione o Veículo</Text>
            </Header>
            <Container>
                <Text style={{ color: 'black' }}>Escolha um carro</Text>
                <InputSearch
                    onChangeText={handleSearch}
                    value={query}
                    placeholder="Pesquise o veiculo..."
                    placeholderTextColor="#000"
                    backgroundColor="white"
                />

                <FlatList
                    data={filteredData}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    numColumns={2}
                    style={{
                        width: '100%',
                    }}
                />
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
                            <Text style={{ fontSize: 22 }}>{selectedCar?.marca} {selectedCar?.modelo} - {selectedCar?.ano}</Text>
                            <Text style={{ textAlign: 'center' }}>Você deseja escolher este veículo para iniciar o checklist?</Text>

                            <View style={{ marginTop: '5%', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                    <Text style={{ color: 'red', fontSize: 14 }}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => navigateToCheckList(selectedCar)}>
                                    <Text style={{ color: 'white', fontSize: 20, borderColor: 'white', borderWidth: 1, borderRadius: 5, paddingHorizontal: 15, alignSelf: 'center', backgroundColor: 'green' }}>Iniciar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </CenteredViewModal>
                </Modal>
            </Container>
        </SafeAreaView>
    )
}
