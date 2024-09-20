import React, { useContext, useEffect, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Dimensions, Platform, Modal } from "react-native";
import { Header, Container, ImageHeader, CenteredViewModal } from "./styles.js";
import startChecklist from '../../../../assets/startChecklist2.png';
import capoAberto from '../../../../assets/capoAberto.png';
import capoabertoestrada from '../../../../assets/capoabertoestrada.png';
import mecanicomaos from '../../../../assets/mecanicomaos.png';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HorizontalList from '../../../components/HorizontalList';
// import { CheckListContext } from "../../../../context/CheckListContext.js";
// const { createCheckList, selectedCar, setSelectedCar } = useContext(CheckListContext);
import api from '../../../services/api.js';
import { CheckListContext } from "../../../context/CheckListContext.js";

export function CheckList({ navigation }) {
    const { resumeCheckList } = useContext(CheckListContext);
    const { height } = Dimensions.get('window');
    const [checkList, setCheckList] = useState([]);
    const [selectedCar, setSelectedCar] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const dicas = [
        {
            id: '1',
            title: 'Dica 1',
            description: 'Para utilizar o aplicativo',
            imagem: capoAberto
        },
        {
            id: '2',
            title: 'Dica 2',
            description: 'Para utilizar o aplicativo',
            imagem: capoabertoestrada
        },
        {
            id: '3',
            title: 'Dica 3',
            description: 'Para utilizar o aplicativo',
            imagem: mecanicomaos
        },
    ];

    useEffect(() => {
        const fecthCheckList = async () => {
            try {
                setLoading(true);
                const response = await api.get('/checklist-last');
                //chama a api de carro
                const responseCar = await api.get(`/carros/${response.data.carro_id}`);
                setCheckList(response.data);
                setSelectedCar(responseCar.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fecthCheckList();
    }, []);

    const onPressHandler = () => {
        if (checkList) {
            setModalVisible(true);
        } else {
            navigation.navigate('CheckListOne');
        }
    };

    const handleSim = () => {
        resumeCheckList();
        setModalVisible(false);
        navigation.navigate('ChooseCheck');
    };

    const handleNao = () => {
        setModalVisible(false);
        navigation.navigate('CheckListOne');
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header>
                <ImageHeader source={startChecklist} style={StyleSheet.absoluteFill} />
                <View style={{ width: '90%', height: '25%', alignItems: 'center', justifyContent: 'center' }}>
                    <MaterialCommunityIcons name="hand-wave" size={24} color="#DEAC38" />
                    <Text style={{
                        color: 'white',
                        fontSize: 24,
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>Olá Usuário,</Text>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        textShadowColor: 'rgba(0, 0, 0, 1)', textShadowOffset: { width: 8, height: 4 }, textShadowRadius: 15
                    }}>aqui você poderá realizar um checklist do carro escolhido!</Text>
                </View>
            </Header>
            <Container>
                <View style={{ width: '100%', height: '90%', marginTop: '10%', alignItems: 'center' }}>
                    <View style={{ width: '90%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Dicas</Text>
                        <Text style={{ marginTop: 5, color: 'gray' }}>Pontos importantess</Text>
                    </View>
                    <HorizontalList dicas={dicas} />
                </View>
            </Container>
            <TouchableOpacity style={{
                width: '90%',
                height: '10%',
                backgroundColor: '#39BF61',
                borderRadius: 20,
                alignItems: 'center',
                flexDirection: 'row',
                position: 'absolute',
                alignSelf: 'center',
                top: height / (Platform.OS === 'ios' ? 2.6 : 2.5),
            }} onPress={onPressHandler}>
                <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name="car" size={24} color="white" />
                </View>
                <View style={{ width: '60%', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Iniciar Check List</Text>
                    <Text style={{ color: 'white' }}>Checklist para auxiliar na analise dos veiculos</Text>
                </View>
                <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name="arrow-forward" size={24} color="white" />
                </View>
            </TouchableOpacity>
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
                        {/* <Text style={{ fontSize: 22 }}>{selectedCar?.marca} {selectedCar?.modelo} - {selectedCar?.ano}</Text> */}
                        <Text style={{ fontSize: 22 }}>Atenção!!! {selectedCar.marca}</Text>
                        <Text style={{ textAlign: 'center' }}>Existe um checklist nao finalizado, deseja continuar?</Text>
                        <Text>{selectedCar.marca} {selectedCar.modelo} {selectedCar.ano}</Text>
                        

                        <View style={{ marginTop: '5%', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={handleSim}
                            >
                                <Text style={{ color: 'green', fontSize: 20, borderColor: 'green', borderWidth: 1, borderRadius: 5, paddingHorizontal: 5, alignSelf: 'center' }}>Sim</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handleNao}
                            >
                                <Text style={{ color: 'red', fontSize: 14 }}>Não</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </CenteredViewModal>
            </Modal>
        </View>
    )
}