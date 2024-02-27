import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Header, ContainerDescription, DescriptionPayment, Container, DataItem, DataLabel, Separator, DataValue } from "./styles.js";
import Svg, { Path } from "react-native-svg";
import { CGT } from '../../../components/TextGradient/index.js';
import ToggleButton from '../../../components/button/ToggleButton/index.js';
import { Ionicons } from '@expo/vector-icons';
export function AssessmentResult({ route, navigation }) {

    const { selectedItem } = route.params;
    console.log(selectedItem);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Physical Assessment</Text>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', letterSpacing: 3 }}>ff</Text>
                </View>
            </Header>
            <ContainerDescription>
                <DescriptionPayment>
                    <Svg
                        width="40px"
                        height="40px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="bi bi-coin"
                    >
                        <Path fill="white" d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                        <Path fill="white"
                            fillRule="evenodd"
                            d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
                        />
                        <Path fill="white"
                            fillRule="evenodd"
                            d="M8 13.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 .5A6 6 0 108 2a6 6 0 000 12z"
                        />
                    </Svg>
                </DescriptionPayment>
                <View style={{ width: '60%', alignItems: 'center', justifyContent: 'center', height: '40%' }}>
                    <CGT style={{ fontWeight: 'bold' }}>Your Evaluation</CGT>
                    <Text style={{ alignSelf: 'center', fontSize: 12, textAlign: 'center' }}>Metrics of the {selectedItem.id}° evaluation of data {selectedItem.evaluation_date}</Text>
                </View>
            </ContainerDescription>
            <Container>
                <DataItem>
                    <DataLabel>Evaluator Name:</DataLabel>
                    <DataValue>{selectedItem.evaluator_name}</DataValue>
                </DataItem>
                
                <DataItem>
                    <DataLabel>Evaluation Date:</DataLabel>
                    <DataValue>{selectedItem.evaluation_date}</DataValue>
                </DataItem>
                
                <DataItem>
                    <DataLabel>Goals:</DataLabel>
                    <DataValue>{selectedItem.goals}</DataValue>
                </DataItem>
                
                <DataItem>
                    <DataLabel>Height:</DataLabel>
                    <DataValue>{selectedItem.height}</DataValue>
                </DataItem>
                
                <DataItem>
                    <DataLabel>Weight:</DataLabel>
                    <DataValue>{selectedItem.weight}</DataValue>
                </DataItem>
                
                <DataItem>
                    <DataLabel>BMI:</DataLabel>
                    <DataValue>{selectedItem.bmi ? selectedItem.bmi : 'Not Available'}</DataValue>
                </DataItem>
            </Container>
        </SafeAreaView>
    )
}
