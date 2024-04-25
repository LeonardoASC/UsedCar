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
        // Dados do carro para enviar
        const carroData = {
            carro_id: selectedCarro.id,
            acessorio: 0,
            arcondicionado: 0,
            assento: 0,
            cambio: 0,
            documento: 0,
            embreagem: 0,
            espelho: 0,
            farol: 0,
            freio: 0,
            lataria: 0,
            motor: 0,
            pedal: 0,
            pneu: 0,
            radio: 0,
            sistema_eletrico: 0,
            suspensao: 0,
            vidro: 0
        };
        api.post('/checklist', carroData)
            .then(response => {
                const createdChecklistId = response.data.checklist.id;
                navigation.navigate('ChooseCheck', { carro: selectedCarro, checklistId: createdChecklistId });
                setModalVisible(false);
            })
            .catch(error => {
                console.error('Erro ao salvar o carro:', error);
            });
    };

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Text>ChecklistOne</Text>
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
                            elevation: 5,
                            gap: '5%'
                        }}>
                            <Text style={{ fontSize: 22 }}>{selectedCarro?.marca} {selectedCarro?.modelo} - {selectedCarro?.ano}</Text>
                            <Text style={{ textAlign: 'center' }}>Você deseja escolher este veículo para iniciar o checklist?</Text>

                            <View style={{ flexDirection: 'row', gap: '15%', marginTop: '5%', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={confirmSelection}>
                                    <Text style={{ color: 'green', fontSize: 20 }}>Iniciar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                    <Text style={{ color: 'red', fontSize: 14 }}>Cancelar</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </CenteredViewModal>
                </Modal>
            </Container>
        </SafeAreaView>
    )
}
