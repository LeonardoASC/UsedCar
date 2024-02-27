import react from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Header, Container, ContainerDescription, DescriptionPayment } from "./styles.js";
import { CGT } from "../../components/TextGradient/index.js";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Notice() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Notices</Text>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', letterSpacing: 3 }}>ff</Text>
                </View>
            </Header>
            <Container>
                <ContainerDescription>
                    <DescriptionPayment>
                        <MaterialCommunityIcons name="bell-ring" size={40} color="white" />
                    </DescriptionPayment>
                    <View style={{ width: '60%', alignItems: 'center', justifyContent: 'center', height: '40%' }}>
                        <CGT style={{ fontWeight: 'bold' }}>No News</CGT>
                        <Text style={{ alignSelf: 'center', fontSize: 12 }}>There is no news available.</Text>
                    </View>
                </ContainerDescription>
            </Container>
        </SafeAreaView>
    )
}