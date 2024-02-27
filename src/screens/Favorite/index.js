import react from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Header, Container, ContainerDescription, DescriptionPayment, BtnFav } from "./styles.js";
import { CGT } from "../../components/TextGradient/index.js";
import { Fontisto } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export function Favorite() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Favorites</Text>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', letterSpacing: 3 }}>ff</Text>
                </View>
            </Header>
            <Container>
                <ContainerDescription>
                    <DescriptionPayment>
                        <Fontisto name="favorite" size={40} color="white" />
                    </DescriptionPayment>
                    <View style={{ width: '60%', alignItems: 'center', justifyContent: 'center', height: '40%', marginTop: '2%' }}>
                        <CGT style={{ fontWeight: 'bold' }}>Customizing favorites</CGT>
                        <Text style={{ alignSelf: 'center', fontSize: 12, textAlign: 'center' }}>Choose the menus you use most and customize the application the way you want.</Text>
                    </View>
                </ContainerDescription>
                <View style={{ marginTop: '5%', width: '100%', alignItems: 'center' }}>
                    <BtnFav style={{ marginTop: '5%' }}>
                        <Text style={{marginLeft: '5%'}}>1° Botão (Esquerda)</Text>
                        <EvilIcons name="pencil" size={28} color="#e91e63" style={{marginRight: '5%'}} />
                    </BtnFav>
                    <BtnFav style={{ marginTop: '5%' }}>
                        <Text style={{marginLeft: '5%'}}>2° Botão (Centro)</Text>
                        <EvilIcons name="pencil" size={28} color="#e91e63" style={{marginRight: '5%'}}/>
                    </BtnFav>
                    <BtnFav style={{ marginTop: '5%' }}>
                        <Text style={{marginLeft: '5%'}}>3° Botão (Direita)</Text>
                        <EvilIcons name="pencil" size={28} color="#e91e63" style={{marginRight: '5%'}}/>
                    </BtnFav>
                </View>
            </Container>
        </SafeAreaView>
    )
}