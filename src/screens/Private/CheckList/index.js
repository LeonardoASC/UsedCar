import React, { useContext, useEffect, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Dimensions, Platform, Modal, Alert } from "react-native";
import { Header, Container, ImageHeader, CenteredViewModal } from "./styles.js";
import startChecklist from '../../../../assets/startChecklist2.png';
import capoAberto from '../../../../assets/capoAberto.png';
import capoabertoestrada from '../../../../assets/capoabertoestrada.png';
import mecanicomaos from '../../../../assets/mecanicomaos.png';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HorizontalList from '../../../components/HorizontalList';
import api from '../../../services/api.js';
import { CheckListContext } from "../../../context/CheckListContext.js";
import { AuthContext } from "../../../context/AuthContext.js";

export function CheckList({ navigation }) {
    const { userInfo } = useContext(AuthContext);
    const { resumeCheckList } = useContext(CheckListContext);
    const { height } = Dimensions.get('window');
    const [checkList, setCheckList] = useState(null);
    const [selectedCar, setSelectedCar] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const dicas = [
        {
            id: '1',
            title: 'Verifique o estado do motor',
            description: 'Abra o capô e inspecione visualmente o motor. Procure sinais de vazamentos de óleo ou ruídos incomuns ao ligar o carro. O estado do motor é essencial para garantir que o veículo está em boas condições.',
            imagem: capoAberto
        },
        {
            id: '2',
            title: 'Inspecione a carroceria',
            description: 'Verifique se a carroceria do veículo apresenta amassados, arranhões ou sinais de ferrugem. Observe também se há alguma diferença de cor nas partes pintadas, o que pode indicar reparos mal feitos.',
            imagem: capoabertoestrada
        },
        {
            id: '3',
            title: 'Cheque os documentos do veículo',
            description: 'Certifique-se de que a documentação do veículo está em ordem, incluindo o histórico de revisões e possíveis sinistros. Essa verificação é crucial para garantir que o carro está legal e seguro para compra.',
            imagem: mecanicomaos
        },
    ];

    useEffect(() => {
        const fecthCheckList = async () => {
            try {
                setLoading(true);
                const response = await api.get('/checklist-last');
                console.log('response.data:', response.data);
                setCheckList(response.data);
                // setSelectedCar(responseCar.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fecthCheckList();
    }, []);


    const onPressHandler = () => {
        if (!checkList) {
            Alert.alert(
                'Erro',
                'Não foi possível carregar o checklist. Verifique sua conexão e tente novamente.',
                [{ text: 'Ok' }]
            );
            return;
        }
        if (checkList.CheckListStatus == true) {
            navigation.navigate('CheckListOne');
        } else if (checkList.CheckListItemStatus == true) {
            navigation.navigate('CheckListOne');
        } else {
            setModalVisible(true);
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
                <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ padding: 10, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 10, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                        <MaterialCommunityIcons name="hand-wave" size={24} color="#DEAC38" />
                        <Text style={{
                            color: 'white',
                            fontSize: 24,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>Olá {userInfo.name},</Text>
                        <Text style={{
                            color: 'white',
                            textAlign: 'center',
                        }}>aqui você poderá realizar um checklist do carro escolhido!</Text>
                    </View>
                </View>

            </Header>
            <Container>
                <View style={{ width: '100%', height: '90%', marginTop: '10%', alignItems: 'center' }}>
                    <View style={{ width: '90%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Dicas</Text>
                        <Text style={{ marginTop: 5, color: 'gray' }}>Pontos importantes</Text>
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
                        <Text style={{ fontSize: 22 }}>Atenção!!!</Text>
                        <Text style={{ textAlign: 'center' }}>Existe um checklist nao finalizado, deseja continuar?</Text>
                        <Text>{selectedCar.marca} {selectedCar.modelo} {selectedCar.ano}</Text>
                        <View style={{ marginTop: '5%', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                            <TouchableOpacity onPress={handleNao}>
                                <Text style={{ color: 'red', fontSize: 16 }}>Não</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSim}>
                                <Text style={{ color: 'white', fontSize: 20, borderColor: 'white', borderWidth: 1, borderRadius: 5, paddingHorizontal: 15, alignSelf: 'center', backgroundColor: 'green' }}>Sim</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </CenteredViewModal>
            </Modal>
        </View>
    )
}