import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Dimensions, Platform } from "react-native";
import { Header, Container, ImageHeader, StyledItemContainer, StyledItemText } from "./styles.js";
import startChecklist from '../../../../assets/startChecklist2.png';
import capoAberto from '../../../../assets/capoAberto.png';
import capoabertoestrada from '../../../../assets/capoabertoestrada.png';
import mecanicomaos from '../../../../assets/mecanicomaos.png';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HorizontalList from '../../../components/HorizontalList';

export function CheckList({ navigation }) {
    const { height } = Dimensions.get('window');
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
            }} onPress={() => navigation.navigate('CheckListOne')}>
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
        </View>
    )
}