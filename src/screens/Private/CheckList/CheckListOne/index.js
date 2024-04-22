import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, Modal, Button } from "react-native";
import { Header, Container, InputSearch, ItemSearch, CenteredView, MessageText, CenteredViewModal } from "./styles.js";
import api from "../../../../services/api.js";

export function CheckListOne({ navigation }) {
    const [carros, setCarros] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(carros);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCarro, setSelectedCarro] = useState(null);

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
        setSelectedCarro(carro);
        setModalVisible(true);
    };

    const confirmSelection = () => {
        navigation.navigate('ChooseCheck', { carro: selectedCarro });
        setModalVisible(false);
    };

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

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
                        <TouchableOpacity
                            onPress={() => handlePressItem(item)}>
                            <ItemSearch>{`${item.marca} ${item.modelo} - ${item.ano} - ${item.tipo_carroceria} - ${item.numero_portas}`}</ItemSearch>
                        </TouchableOpacity>
                    )}
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
                            elevation: 5
                        }}>
                            <Text>Você deseja escolher este veículo: {selectedCarro?.marca} {selectedCarro?.modelo}?</Text>
                            <Button title="Confirmar" onPress={confirmSelection} />
                            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
                        </View>
                    </CenteredViewModal>
                </Modal>
            </Container>
        </SafeAreaView>
    )
}
