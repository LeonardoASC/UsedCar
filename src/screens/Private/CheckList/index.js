import react from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Header, Container } from "./styles.js";

export function CheckList({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <TouchableOpacity style={{ backgroundColor: 'black', padding: 10, margin: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center', }}
                    onPress={() => navigation.navigate('CheckListOne')}>
                    <Text style={{ color: 'white' }}>Iniciar Check List</Text>
                </TouchableOpacity>
            </Header>
            <Container>

            </Container>
        </SafeAreaView>
    )
}