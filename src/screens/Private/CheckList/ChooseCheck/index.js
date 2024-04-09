import React, { useContext, useState } from 'react'
import { SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native'
import { Header, Container, ViewWrapper, ProfileImage, ConfigFlat, RenderFlat, IconWrapper } from "./styles.js"
import { Ionicons, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

export function ChooseCheck({ navigation, route }) {
    const { carroPart } = route?.params;
    const data = [
        { id: 1, routes: 'Motor' },
        { id: 2, routes: 'Lataria' },
        { id: 3, routes: 'Pneu' },
        { id: 4, routes: 'Documento' },
        { id: 5, routes: 'Freio' },
        { id: 6, routes: 'Suspensao' },
        { id: 7, routes: 'Embreagem' },
        { id: 8, routes: 'SistemaEletrico' },
        { id: 9, routes: 'Pedal' },
        { id: 10, routes: 'Cambio' },
        { id: 11, routes: 'Vidro' },

    ];

    const IconsMore = {
        Motor: <Ionicons name="md-person" size={20} color="gray" />,
        Lataria: <MaterialIcons name="fitness-center" size={20} color="gray" />,
        Pneu: <MaterialIcons name="assessment" size={20} color="gray" />,
        Documento: <FontAwesome name="money" size={20} color="gray" />,
        Freio: <Entypo name="book" size={20} color="gray" />,
        Suspensao: <MaterialCommunityIcons name="bullhorn" size={20} color="gray" />,
        Embreagem: <AntDesign name="checkcircleo" size={20} color="gray" />,
        SistemaEletrico: <AntDesign name="checkcircleo" size={20} color="gray" />,
        Pedal: <Ionicons name="md-calendar" size={20} color="gray" />,
        Cambio: <AntDesign name="staro" size={20} color="gray" />,
        Vidro: <Ionicons name="md-share" size={20} color="gray" />,
    };


    const renderItem = ({ item }) => {
        return (
            <RenderFlat
                onPress={() => handlePress(item)}
            >
                <IconWrapper style={{ marginRight: '5%' }}>{IconsMore[item.routes]}</IconWrapper>
                <Text style={{ color: 'gray' }}>{item.routes}</Text>
            </RenderFlat>
        )
    };

    const handlePress = (item) => {
        const pages = {
            Motor: 'Motor',
            Lataria: 'Lataria',
            Pneu: 'Pneu',
            Documento: 'Documento',
            Freio: 'Freio',
            Suspensao: 'Suspensao',
            Embreagem: 'Embreagem',
            SistemaEletrico: 'Sistema Eletrico',
            Pedal: 'Pedal',
            Cambio: 'Cambio',
            Vidro: 'Vidro',
        };
        if (pages[item.routes]) {
            navigation.navigate(pages[item.routes], { carroPart });
        } else {
            Alert.alert(
                "Funcionalidade Indisponível",
                `A funcionalidade '${item.routes}' ainda não está disponível.`,
                [{ text: "OK" }],
                { cancelable: false }
            );
        }
    };

    


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>

            </Header>
            <Container>
                <ConfigFlat
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: 50 }}
                />
            </Container>


        </SafeAreaView>
    )
}
