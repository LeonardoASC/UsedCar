import React, { useState, useEffect } from 'react'
import { Dimensions, FlatList, SafeAreaView, Text, TouchableOpacity, View, } from 'react-native'
import { Header, Container, ConfigFlat, RenderFlat, IconWrapper, CenteredView, MessageText } from "./styles.js"
import { MaterialIcons } from '@expo/vector-icons';
import api from '../../../../services/api';

export function ChooseCheck({ navigation, route }) {
    const { carro, dadosCarro } = route?.params;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [columns, setColumns] = useState([]);
    const { width } = Dimensions.get('window');

console.log(dadosCarro);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/checklist');
                if (response.data.length > 0) {
                    const firstItem = response.data[0];
                    const excludedKeys = ['id', 'carro_id', 'created_at', 'updated_at'];
                    const columnNames = Object.keys(firstItem).filter(key => !excludedKeys.includes(key));
                    setColumns(columnNames);
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        fetchData();
    }, []);

    const handlePress = async (item) => {
        navigation.navigate('CheckListPart', {
            selectedItem: item,
            carro: carro
        });
    };


    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => handlePress(item)}
                style={{
                    backgroundColor: '#f9c2ff',
                    padding: 20,
                    marginVertical: 8,
                    marginHorizontal: 12,
                    borderRadius: 5,
                    width: width / 2 - 24
                }}>
                <Text>{item}</Text>
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
                    keyExtractor={item => item}
                    renderItem={renderItem}
                />
            </Container>

        </SafeAreaView>
    )
}
