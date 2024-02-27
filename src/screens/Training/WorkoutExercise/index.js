import react, { useEffect, useState } from "react";
import { Image, Modal, SafeAreaView, Text, TextInput, View, FlatList } from "react-native";
import { Header, Container, Exercises, ExercisesText, ContentText, ExercisesTextMini, StyledButton, ContainerDescription, DescriptionPayment } from "./styles.js";
import { CGT } from "../../../components/TextGradient";
import { Feather } from '@expo/vector-icons';
import api from "../../../services/api.js";
import Svg, { Path } from "react-native-svg";

export function WorkoutExercise({ route, navigation }) {
    const { typeExercises, resumeExercises } = route?.params;
    const [workoutData, setWorkoutData] = useState([]);

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedExerciseIndex, setSelectedExerciseIndex] = useState(null);
    const [newWeight, setNewWeight] = useState('');

    const openModal = (index, weight) => {
        setSelectedExerciseIndex(index);
        setNewWeight(weight.toString());
        setModalVisible(true);
    };

    const handleWeightChange = async (exerciseIndex, newWeight) => {
        const exerciseId = workoutData[exerciseIndex].id;
        const response = await api.put(`/training-exercises/${exerciseId}`, {
            weight: newWeight,
          });
        if (response.status === 200) {
          // Atualizar o estado local com o novo peso
          const updatedWorkoutData = [...workoutData];
          updatedWorkoutData[exerciseIndex].weight = newWeight;
          setWorkoutData(updatedWorkoutData);
        } else {
          // Exibir mensagem de erro
          console.error('Erro ao atualizar o peso:', response.statusText);
        }
      };
      

    useEffect(() => {
        async function fetchWorkoutData() {
            try {
                const response = await api.get('/training-exercises');
                const filteredData = response.data.filter(exercise => exercise.training.typeExercises === typeExercises);
                setWorkoutData(filteredData);
            } catch (error) {
                console.error('Error fetching workout data:', error);
            }
        }
        fetchWorkoutData();
    }, [typeExercises]);

    const renderItem = ({ item, index }) => (
        <Exercises>
            <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <Image source={{ uri: item.image }} style={{ width: '90%', height: '90%', resizeMode: 'contain' }} />
            </View>
            <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                <CGT style={{ fontWeight: 'bold', fontSize: 16, alignSelf: 'center', textAlign: 'center' }}>{item.name}</CGT>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                    <ContentText>
                        <ExercisesText>{item.sets}</ExercisesText>
                        <ExercisesTextMini>Sets</ExercisesTextMini>
                    </ContentText>
                    <ContentText>
                        <ExercisesText>{item.reps}</ExercisesText>
                        <ExercisesTextMini>Reps</ExercisesTextMini>
                    </ContentText>
                    <ContentText>
                        <ExercisesText>{item.weight}</ExercisesText>
                        <ExercisesTextMini>Weight</ExercisesTextMini>
                    </ContentText>
                </View>
            </View>
            <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center' }}>
                <Feather
                    name="trending-up"
                    size={30}
                    color="#a82c8d"
                    onPress={() => openModal(index, item.weight)}
                />
                <CGT style={{ fontSize: 11, }}>Up Weight</CGT>
            </View>
        </Exercises>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: '5%' }}>Training: {typeExercises}</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', marginRight: '5%' }}>{resumeExercises}</Text>
            </Header>
            <Container>
                <ContainerDescription>
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
                    <View style={{ width: '60%', alignItems: 'center', justifyContent: 'center', height: '40%' }}>
                        <CGT style={{ fontWeight: 'bold' }}>Your Exercices</CGT>
                        <Text style={{ alignSelf: 'center', fontSize: 12, textAlign: 'center' }}>List of exercises for training {typeExercises}.</Text>
                    </View>
                </ContainerDescription>

                <FlatList
                    data={workoutData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: 50, width: '90%', marginTop: '5%' }}
                />
            </Container>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    setModalVisible(!isModalVisible);
                }}
            >
                {/*desfoque*/}
                <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ margin: 20, backgroundColor: 'white', borderRadius: 20, padding: 35, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
                        <TextInput
                            style={{ height: 40, borderEndColor: 'green', width: 80, marginBottom: 20, textAlign: 'center', fontSize: 18 }}
                            onChangeText={setNewWeight}
                            value={newWeight}
                            keyboardType="numeric"
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <StyledButton
                                style={{ marginRight: 10 }}
                                onPress={() => {
                                    handleWeightChange(selectedExerciseIndex, newWeight);
                                    setModalVisible(!isModalVisible);
                                }}
                            >
                                <CGT>Update </CGT>
                            </StyledButton>
                            <StyledButton
                                onPress={() => {
                                    setModalVisible(!isModalVisible);
                                }}
                            >
                                <CGT>Cancel </CGT>
                            </StyledButton>
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
}