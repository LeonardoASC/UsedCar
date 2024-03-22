import react from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Header, Container, ImageHeader } from "./styles.js";
import startChecklist from '../../../../assets/startChecklist.png';

export function CheckList({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <ImageHeader source={startChecklist} style={StyleSheet.absoluteFill} />
                <TouchableOpacity style={{
                    width: '90%',
                    height: '20%',
                    backgroundColor: 'green',
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                    onPress={() => navigation.navigate('CheckListOne')}>
                    <Text style={{ color: 'white' }}>Iniciar Check List</Text>
                </TouchableOpacity>
            </Header>
            <Container>
                <Text>1</Text>
            </Container>
        </SafeAreaView>
    )
}