import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, View, StyleSheet, TextInput } from "react-native";
import { Header, Container, CenteredView, MessageText, HeaderTitle } from "./styles.js";
import api from "../../../../services/api.js";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export function CarDetails({ route }) {
    const { item } = route.params;
    const [comentarios, setComentarios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchComentariosCarro = async () => {
            try {
                setLoading(true);
                const response = await api.get(`carros/${item.id}/comentarios`);
                setComentarios(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchComentariosCarro();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.commentContainer}>

            <Image
                style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#fff', marginRight: 10 }}
                source={{ uri: 'https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-man-silhouette-on-white-background-png-image_4826258.png' }}
            />
            <View>
                <Text style={styles.commentText}>{item.user.name}</Text>
                <Text style={styles.commentText}>{item.comentario}</Text>
            </View>

            <MaterialIcons name="more-vert" size={24} color="#ccc" />

        </View>
    );

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <Image
                    style={styles.carImage}
                    source={{ uri: item.foto }}
                />
            </Header>
            <Container>
                <View style={styles.carDetails}>
                    <Text style={styles.detailText}>Marca: {item.marca}</Text>
                    <Text style={styles.detailText}>Modelo: {item.modelo}</Text>
                    <Text style={styles.detailText}>Ano: {item.ano}</Text>
                    <Text style={styles.detailText}>Cilindrada: {item.cilindrada}</Text>
                    <Text style={styles.detailText}>Tipo Carroceria: {item.tipo_carroceria}</Text>
                    <Text style={styles.detailText}>Número de Portas: {item.numero_portas}</Text>
                    <Text style={styles.detailText}>Cor: {item.cor}</Text>
                    <Text style={styles.detailText}>Tabela FIPE: {item.tabela_fipe}</Text>
                    <Text style={styles.detailText}>KM/Litro: {item.km_litro}</Text>
                    <Text style={styles.detailText}>Média Avaliação: {item.media_avaliacao}</Text>
                </View>
                <Text style={styles.commentsTitle}>Comentários</Text>

                <FlatList
                    data={comentarios}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    ListHeaderComponent={
                        <View style={{
                            marginBottom: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            borderBottomWidth: 2,
                            borderBottomColor: '#ccc',
                            justifyContent: 'space-between'

                        }}>
                            <TextInput
                                placeholder="Adicionar comentários"
                                value={search}
                                onChangeText={setSearch}
                                multiline
                            />
                            <MaterialIcons name="subdirectory-arrow-right" size={24} color="#ccc" />
                        </View>
                    }
                    contentContainerStyle={styles.commentsList}
                />
            </Container>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    carImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 15,
        backgroundColor: '#39BF61',
        // marginBottom: 15,
    },
    carDetails: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    commentsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    commentsList: {
        paddingHorizontal: 20,
    },
    commentContainer: {
        backgroundColor: '#f2f2f2',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    commentText: {
        fontSize: 14,
        color: '#555',
        maxWidth: '90%',
    },
});
