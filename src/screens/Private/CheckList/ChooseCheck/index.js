import React, { useState, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { Dimensions, FlatList, SafeAreaView, Text, TouchableOpacity, View, } from 'react-native'
import { Header, Container, ConfigFlat, RenderFlat, IconWrapper, CenteredView, MessageText } from "./styles.js"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import api from '../../../../services/api';

export function ChooseCheck({ navigation, route }) {
    const { carro, checklistId } = route?.params;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [columns, setColumns] = useState([]);
    const { width } = Dimensions.get('window');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/checklist/${checklistId}`);
                if (response.data && typeof response.data === 'object') {
                    const excludedKeys = ['id', 'carro_id', 'created_at', 'updated_at'];
                    const columnNames = Object.keys(response.data).filter(key => !excludedKeys.includes(key)).map(key => ({
                        name: key,
                        value: response.data[key]
                    }));
                    setColumns(columnNames);
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        fetchData();
    }, []);



    const handlePress = async (item) => {
        navigation.navigate('CheckListPart', { selectedPartCar: item, carro: carro });
    };


    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => handlePress(item)}
                style={{
                    backgroundColor: '#fff',
                    padding: 20,
                    marginVertical: 8,
                    marginHorizontal: 12,
                    borderRadius: 5,
                    width: width / 2 - 24,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                <Text>{item.name}</Text>
                <MaterialCommunityIcons name={item.value === 0 ?  "checkbox-blank-outline" : "checkbox-marked" } size={24} color="black" />
            </TouchableOpacity>
        );
    };


    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Text>ChooseChecklist</Text>
                <Text>{carro.id}</Text>
                <Text>{carro.marca}</Text>
                <Text>{carro.modelo}</Text>
                <Text>Progresso do checklist...</Text>
            </Header>
            <Container>
                <FlatList
                    data={columns}
                    numColumns={2}
                    keyExtractor={item => item.name + item.value}
                    renderItem={renderItem}
                />
            </Container>

        </SafeAreaView>
    )
}
