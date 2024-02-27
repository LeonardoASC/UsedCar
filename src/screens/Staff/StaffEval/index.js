import React, { useState } from "react";
import { Image, SafeAreaView, Text, View, ScrollView } from "react-native";
import { Header, Container, ContainerDescription, DescriptionPayment, ContainerTwo, WapperComent } from "./styles.js";
import { CGT } from "../../../components/TextGradient/index.js";
import { MaterialCommunityIcons } from '@expo/vector-icons';



export function StaffEval({ route, navigation }) {

    const [expandedOrientation, setExpandedOrientation] = useState(null);
    const { personalTrainer } = route.params;


    const toggleOrientation = (index) => {
        if (expandedOrientation === index) {
            setExpandedOrientation(null);
        } else {
            setExpandedOrientation(index);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Staff Evaluation</Text>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', letterSpacing: 3 }}>ff</Text>
                </View>
            </Header>
            <Container>
                <ContainerDescription>
                    <DescriptionPayment>
                        <MaterialCommunityIcons name="progress-question" size={40} color="white" />
                    </DescriptionPayment>
                    <View style={{ width: '60%', alignItems: 'center', justifyContent: 'center', height: '40%', marginTop: '2%' }}>
                        <CGT style={{ fontWeight: 'bold' }}>Staff Evaluation</CGT>
                        <Text style={{ alignSelf: 'center', fontSize: 12, textAlign: 'center' }}>Personal trainer information and performance.</Text>
                    </View>
                </ContainerDescription>

                <ContainerTwo>
                    <CGT>{personalTrainer.name}</CGT>
                    <Image source={{ uri: personalTrainer.photo }} style={{ width: 100, height: 100 }} />
                    <Text>{personalTrainer.averageRating}</Text>
                    <ScrollView style={{ width: '100%', height: '10%' }} >
                        {personalTrainer.comments.map((comment, index) => (
                            <WapperComent key={index}>
                                <Text style={{}}>{comment}</Text>
                            </WapperComent>
                        ))}
                    </ScrollView>
                </ContainerTwo>
            </Container>
        </SafeAreaView>
    )
}