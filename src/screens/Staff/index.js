import React, { useState } from "react";
import { Image, SafeAreaView, Text, View, ScrollView } from "react-native";
import { Header, Container, ContainerDescription, DescriptionPayment, ContainerTwo, OrientationButton, OrientationText, AdditionalContent, Divider } from "./styles.js";
import { CGT } from "../../components/TextGradient/index.js";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export function Staff({navigation}) {

    const [expandedOrientation, setExpandedOrientation] = useState(null);

    const personalTrainers = [
        {
            name: "John Smith",
            photo: "https://e7.pngegg.com/pngimages/931/921/png-clipart-coach-personal-trainer-health-man-flu-sport-health-tshirt-blue.png",
            averageRating: 4.7,
            comments: [
                "Great professional, always motivating!",
                "Excellent technical knowledge.",
                "Excellent technical sknowledge.",
                "Excellent technicals knowledge.",
                "Excellent technicasl knowledgse.",
                "Excellent technicsal knowledsge.",
                "Excellent techniscal knowlesdge.",
                "Excellent technsical knowlsedge.",
                "Excellent tecsshnical knoswledge.",
                "Excellent teschnical knoswledge.",
                "Excellent tsechnical knsowledge.",
                "Excellent atechnical ksnowledge.",
                "Excellent technical ksnowledge.",
                "Attentive and helpful."
            ]
        },
        {
            name: "Mary Johnson",
            photo: "https://cdn.imgbin.com/11/10/22/imgbin-teambodycoach-personal-trainer-t-shirt-coaching-fitness-coach-MYK95x695Ju3pNeSvcnj8ZnMg.jpg",
            averageRating: 4.9,
            comments: [
                "The best personal trainer I've ever had!",
                "Always bringing new challenges.",
                "Super committed to the progress of the students."
            ]
        },
        {
            name: "Peter Brown",
            photo: "https://w7.pngwing.com/pngs/684/333/png-transparent-physical-fitness-personal-trainer-fitness-professional-coach-bodybuilding-fitness-coach-tshirt-arm-bodybuilder-thumbnail.png",
            averageRating: 4.5,
            comments: [
                "Good professional, but could be more punctual.",
                "Excellent at designing personalized workouts.",
                "Good communication with the students."
            ]
        }
    ];




    // const toggleOrientation = (index) => {
    //     if (expandedOrientation === index) {
    //         setExpandedOrientation(null);
    //     } else {
    //         setExpandedOrientation(index);
    //     }
    // };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Staff</Text>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', letterSpacing: 3 }}>ff</Text>
                </View>
            </Header>
            <Container>
                <ContainerDescription>
                    <DescriptionPayment>
                        <MaterialCommunityIcons name="progress-question" size={40} color="white" />
                    </DescriptionPayment>
                    <View style={{ width: '60%', alignItems: 'center', justifyContent: 'center', height: '40%', marginTop: '2%' }}>
                        <CGT style={{ fontWeight: 'bold' }}>Staff</CGT>
                        <Text style={{ alignSelf: 'center', fontSize: 12, textAlign: 'center' }}>Click on the doubt to have more information.</Text>
                    </View>
                </ContainerDescription>

                <ContainerTwo>
                    {personalTrainers.map((personalTrainer, index) => (
                        <React.Fragment key={index}>
                            
                            <OrientationButton onPress={() => navigation.navigate('StaffEval', { personalTrainer: personalTrainers[index] })}
                                style={{
                                    borderTopRightRadius: expandedOrientation === index ? 10 : 10,
                                    borderTopLeftRadius: expandedOrientation === index ? 10 : 10,
                                    borderBottomRightRadius: expandedOrientation === index ? 0 : 10,
                                    borderBottomLeftRadius: expandedOrientation === index ? 10 : 10,
                                }}
                            >
                                <View style={{ backgroundColor: 'black', width: 65, height: 65, borderRadius: 100, right: 5, borderColor: '#e91e63', borderWidth: 2, zIndex: 2 }}>
                                    <Image
                                        source={{ uri: personalTrainer.photo }}
                                        style={{ width: '100%', height: '100%', borderRadius: 100 }}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%', height: '100%', justifyContent: 'space-between', alignItems: 'center', right: '5%' }}>
                                    <OrientationText>{personalTrainer.name}</OrientationText>
                                    <EvilIcons name="arrow-down" size={24} color="black" />
                                </View>
                            </OrientationButton>
                            {/* {expandedOrientation === index && (
                                <AdditionalContent style={{ zIndex: -1 }}>
                                    <View style={{ marginTop: '5%' }}>
                                        <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                                            <AntDesign name="star" size={24} color="#eead2d" />
                                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}> {personalTrainer.averageRating}</Text>
                                        </View>
                                        <ScrollView style={{height: '80%'}}>
                                            {personalTrainer.comments.map(comment => (
                                                <Text key={comment} style={{ marginTop: "2%", textAlign: 'center' }}>-{comment}</Text>
                                            ))}
                                        </ScrollView>
                                    </View>
                                </AdditionalContent>
                            )} */}
                        </React.Fragment>
                    ))}
                </ContainerTwo>
            </Container>
        </SafeAreaView>
    )
}