import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Header, Info, Historic } from "./styles.js";
import { Ionicons } from '@expo/vector-icons';
import { Container, DescriptionPayment, ContentGoals, Observation, DatasheetFlat, ItemContainer } from './styles.js';
import Svg, { Path } from "react-native-svg";
import { CGT } from '../../components/TextGradient/index.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ToggleButton from '../../components/button/ToggleButton/index.js';
import api from '../../services/api.js';
import { AuthContext } from '../../context/AuthContext.js';

export function Training({ navigation }) {
    const { userInfo } = useContext(AuthContext);
    const [trainings, setTrainings] = useState([]);
    const [lastPhysicalEvaluation, setLastPhysicalEvaluation] = useState([]);

    useEffect(() => {
        fetchTrainings();
        fetchPhysicalEvaluations();
    }, []);

    const fetchTrainings = async () => {
        try {
            // setLoading(true);
            const response = await api.get('/trainings');
            // console.log('response.data', response.data);
            if (response.data && response.data.length) {
                setTrainings(response.data);
            }
        } catch (error) {
            console.error("Erro ao buscar trainings:", error);
        } finally {
            // setLoading(false);
        }
    };

    const fetchPhysicalEvaluations = async () => {
        try {
            // setLoading(true);
            const response = await api.get('/physical-evaluations');
            //console.log('response.data', response.data);
            if (response.data && response.data.length) {
                const userPhysicalEvaluations = response.data.filter(item => item.user_id === userInfo.id);
                if (userPhysicalEvaluations.length > 0) {
                    setLastPhysicalEvaluation(userPhysicalEvaluations[userPhysicalEvaluations.length - 1]);
                }
            }
        } catch (error) {
            console.error("Erro ao buscar exames físicos:", error);
        } finally {
            // setLoading(false);
        }
    };



    const renderItem = ({ item }) => (
        <ItemContainer onPress={() => navigation.navigate('WorkoutExercise', { typeExercises: item.typeExercises, resumeExercises: item.resumeExercises })}>
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '10%' }}>
                <CGT style={{ fontSize: 25, fontWeight: 'bold' }}>{item.typeExercises}</CGT>
            </View>

            <View style={{ width: '70%' }}>
                <CGT>Muscle Groups</CGT>
                <View>
                    <Text style={{ fontSize: 12, color: 'gray' }}>{item.resumeExercises}</Text>
                </View>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <CGT style={{ fontSize: 20 }}>{item.amountExercises}</CGT>
                <CGT style={{ fontSize: 10, fontWeight: 'bold' }}>exercises</CGT>
            </View>
        </ItemContainer>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Info>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Avaliador</Text>
                    <Text style={{ color: 'white' }}>{lastPhysicalEvaluation.evaluator_name}</Text>
                </Info>
                <Historic>
                    <Ionicons name="folder-open-outline" size={24} color="white" />
                    <TouchableOpacity style={{ marginLeft: '5%' }}>
                        <Text style={{ color: 'white' }}>Historic</Text>
                    </TouchableOpacity>
                </Historic>
            </Header>
            <Container>
                <ContentGoals>
                    <View style={{ alignItems: 'flex-start', width: '30%' }}>
                        <CGT style={{ fontWeight: 'bold' }}>Goal</CGT>
                        <Text style={{ fontSize: 12 }}>{lastPhysicalEvaluation.goals}</Text>
                    </View>
                    <DescriptionPayment>
                        <Svg
                            fill="#fff"
                            viewBox="0 0 122.88 122.88"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            stroke="#fff"
                            enableBackground="new 0 0 122.87 122.88"
                            width={'70%'}
                            height={'70%'}
                        >
                            <Path d="M1.61 97.18l5.38-5.38c.14-.14.29-.27.44-.4l-3.86-3.86v0c-.06-.06-.11-.12-.16-.18a5.461 5.461 0 01.17-7.57h0l5.38-5.38h0c.14-.14.29-.27.44-.4l-3.86-3.86h0a5.493 5.493 0 010-7.75h0l5.38-5.38a5.473 5.473 0 013.88-1.6c1.41 0 2.81.53 3.88 1.6l47.21 47.21a5.473 5.473 0 011.6 3.88c0 1.41-.53 2.81-1.6 3.88l-5.38 5.38v0c-.06.06-.12.11-.18.16a5.478 5.478 0 01-7.57-.16h0l-3.27-3.27c-.12.15-.25.3-.39.44h0l-5.38 5.38h0c-.06.06-.12.11-.18.16a5.48 5.48 0 01-3.7 1.43c-1.41 0-2.81-.53-3.87-1.6h0l-4.46-4.46c-.12.15-.25.3-.4.44l-5.38 5.38a5.473 5.473 0 01-3.88 1.6c-1.4 0-2.81-.53-3.88-1.6L1.61 104.95A5.484 5.484 0 010 101.07c0-1.41.54-2.81 1.61-3.89h0zm64.24-88.2l-5.38 5.38h0l-.05.05c-.08.11-.12.24-.12.37 0 .15.06.31.17.42h0l47.21 47.21a.607.607 0 00.84 0l5.38-5.38h0l.05-.05c.08-.1.12-.24.12-.37a.58.58 0 00-.16-.42h0l-7.13-7.13v0L74.41 16.71l-7.72-7.72v0a.59.59 0 00-.42-.17.543.543 0 00-.42.16h0zm5.62 38.33a3.452 3.452 0 014.87 0 3.452 3.452 0 010 4.87l-23.6 23.58a3.452 3.452 0 01-4.87 0 3.452 3.452 0 010-4.87l23.6-23.58h0zm29.18-42.24l-5.38 5.38h0a.592.592 0 00-.06.78l.06.06h0l16.32 16.32h0l.05.05c.1.08.23.11.36.11.15 0 .31-.06.42-.17l5.38-5.38v0a.592.592 0 00.01-.84h0v0L101.49 5.07h0c-.11-.11-.26-.17-.42-.17s-.31.06-.42.17h0zm-8.84 1.91l5.38-5.38h0C98.26.53 99.67 0 101.07 0s2.81.53 3.88 1.6h0l16.32 16.32h0a5.423 5.423 0 011.59 3.87c0 1.41-.53 2.82-1.59 3.88h0l-5.38 5.38c-.14.14-.29.27-.44.4l4.46 4.46a5.473 5.473 0 011.6 3.88c0 1.41-.54 2.81-1.6 3.88l-5.38 5.38h0c-.14.14-.29.27-.44.39l3.27 3.27h0a5.45 5.45 0 011.6 3.87c0 1.33-.48 2.66-1.44 3.7-.05.06-.1.12-.16.18h0l-5.38 5.38a5.473 5.473 0 01-3.88 1.6c-1.41 0-2.81-.54-3.88-1.6L57.01 18.66v0a5.484 5.484 0 01-1.61-3.88c0-1.33.48-2.66 1.44-3.7.05-.06.1-.12.16-.18h0l5.38-5.38h0a5.45 5.45 0 013.87-1.6c1.41 0 2.81.54 3.88 1.6h0l3.86 3.86c.12-.15.25-.3.4-.44l5.38-5.38a5.484 5.484 0 017.76 0l3.86 3.86c.15-.15.28-.3.42-.44h0zm-8.56.05l-5.38 5.38a.59.59 0 00-.17.42c0 .15.05.3.16.41l.01.01 32.36 32.36h0c.11.11.26.17.42.17.16 0 .31-.05.42-.16h0l5.38-5.38a.607.607 0 000-.84l-8.31-8.31h0L84.09 7.03a.607.607 0 00-.42-.17.55.55 0 00-.42.17h0zM16.71 74.41h0l32.36 32.36h0l7.11 7.11h0c.11.11.27.16.42.16.13 0 .26-.04.37-.12l.05-.05v0l5.38-5.38a.607.607 0 000-.84L15.2 60.47a.607.607 0 00-.84 0l-5.38 5.38v0h0c-.11.11-.16.27-.16.42 0 .15.06.31.17.42v0l7.72 7.72h0zm28.95 35.88l-.05-.05-32.37-32.37h0l-.06-.06a.592.592 0 00-.78.06h0l-5.38 5.38v0h0c-.11.11-.16.27-.16.42 0 .13.04.26.12.37l.05.05v0l7.72 7.72 16.32 16.32 8.32 8.32h0c.12.12.27.17.42.17.13 0 .26-.04.37-.12l.05-.05h0l5.38-5.38h0c.11-.11.16-.27.16-.42 0-.13-.04-.26-.11-.36h0zM10.45 95.27l-5.38 5.38c-.11.11-.17.26-.17.42s.06.31.17.42l16.32 16.32a.607.607 0 00.84 0l5.38-5.38a.59.59 0 00.17-.42.59.59 0 00-.17-.42L11.28 95.27l-.01-.01a.574.574 0 00-.41-.16c-.15 0-.3.06-.41.17h0z" />
                        </Svg>
                    </DescriptionPayment>
                    <View style={{ alignItems: 'flex-end', width: '30%' }}>
                        <CGT style={{ fontWeight: 'bold' }}>Start date</CGT>
                        <Text style={{ fontSize: 12 }}>{lastPhysicalEvaluation.evaluation_date}</Text>
                    </View>
                </ContentGoals>

                <View style={{ width: '100%', height: '80%' }}>
                    <DatasheetFlat
                        data={trainings}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{ paddingBottom: 50 }}
                        ListHeaderComponent={
                            <Observation >
                                <View style={{ flexDirection: 'row', width: '90%' }}>
                                    <View style={{ flexDirection: 'row', width: '50%', alignItems: 'center' }}>
                                        <MaterialCommunityIcons name="file-document-edit-outline" size={24} color="black" />
                                        <CGT>Observation</CGT>
                                    </View>
                                    <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        <ToggleButton />
                                    </View>
                                </View>
                            </Observation>
                        }
                        ListHeaderComponentStyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    />
                </View>
            </Container>

        </SafeAreaView>
    )
}
