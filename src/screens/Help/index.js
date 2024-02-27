import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Header, Container, ContainerDescription, DescriptionPayment, ContainerTwo, OrientationButton, OrientationText, AdditionalContent, Divider } from "./styles.js";
import { CGT } from "../../components/TextGradient/index.js";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function Help() {

    const [expandedOrientation, setExpandedOrientation] = useState(null);

    const orientations = [
        {
            title: 'First Guideline',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu eros tempus, pulvinar dolor vitae, viverra diam. Aenean in blandit lectus. Ut tortor ligula, molestie eget pellentesque at, rhoncus vel enim. Aenean nec dui ultricies, iaculis tortor in, tincidunt libero. Nam non hendrerit nibh.',
        },
        {
            title: 'Second Guideline',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu eros tempus, pulvinar dolor vitae, viverra diam. Aenean in blandit lectus. Ut tortor ligula, molestie eget pellentesque at, rhoncus vel enim. Aenean nec dui ultricies, iaculis tortor in, tincidunt libero. Nam non hendrerit nibh.',
        },
        {
            title: 'Third Guideline',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu eros tempus, pulvinar dolor vitae, viverra diam. Aenean in blandit lectus. Ut tortor ligula, molestie eget pellentesque at, rhoncus vel enim. Aenean nec dui ultricies, iaculis tortor in, tincidunt libero. Nam non hendrerit nibh.',
        },
        {
            title: 'Fourth Guideline',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu eros tempus, pulvinar dolor vitae, viverra diam. Aenean in blandit lectus. Ut tortor ligula, molestie eget pellentesque at, rhoncus vel enim. Aenean nec dui ultricies, iaculis tortor in, tincidunt libero. Nam non hendrerit nibh.',
        },
        {
            title: 'Fifth Guideline',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu eros tempus, pulvinar dolor vitae, viverra diam. Aenean in blandit lectus. Ut tortor ligula, molestie eget pellentesque at, rhoncus vel enim. Aenean nec dui ultricies, iaculis tortor in, tincidunt libero. Nam non hendrerit nibh.',
        },
        
    ];

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
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Help</Text>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', letterSpacing: 3 }}>ff</Text>
                </View>
            </Header>
            <Container>
                <ContainerDescription>
                    <DescriptionPayment>
                        <MaterialCommunityIcons name="progress-question" size={40} color="white" />
                    </DescriptionPayment>
                    <View style={{ width: '60%', alignItems: 'center', justifyContent: 'center', height: '40%', marginTop: '2%' }}>
                        <CGT style={{ fontWeight: 'bold' }}>Help Center</CGT>
                        <Text style={{ alignSelf: 'center', fontSize: 12, textAlign: 'center' }}>Click on the doubt to have more information.</Text>
                    </View>
                </ContainerDescription>

                <ContainerTwo>
                    {orientations.map((orientation, index) => (
                        <React.Fragment key={index}>
                            <OrientationButton onPress={() => toggleOrientation(index)}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        width: '100%',
                                        height:'100%',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <OrientationText>{orientation.title}</OrientationText>
                                    <MaterialCommunityIcons name="account-question" size={24} color="black" style={{marginRight: '5%'}} />
                                </View>
                            </OrientationButton>
                            {expandedOrientation === index && (
                                <AdditionalContent>
                                    <Text>{orientation.content}</Text>
                                </AdditionalContent>
                            )}
                        </React.Fragment>
                    ))}
                </ContainerTwo>
            </Container>
        </SafeAreaView>
    )
}