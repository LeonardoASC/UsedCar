import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, View, StyleSheet, TextInput } from "react-native";
import { Header, Container, CenteredView, MessageText, CarImage, DetailsCar, DetailText, CommentsTitle, CommentContainer, CommentText } from "./styles.js";
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
        <CommentContainer>
            <Image
                style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#fff', marginRight: 10 }}
                source={{ uri: 'https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-man-silhouette-on-white-background-png-image_4826258.png' }}
            />
            <View>
                <CommentText>{item.user.name}</CommentText>
                <CommentText>{item.comentario}</CommentText>
            </View>

            <MaterialIcons name="more-vert" size={24} color="#ccc" />

        </CommentContainer>
    );

    if (loading) return <CenteredView><MessageText>Carregando...</MessageText></CenteredView>;
    if (error) return <CenteredView><MessageText>Erro: {error}</MessageText></CenteredView>;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <CarImage source={{ uri: item.foto }} />
            </Header>
            <Container>
                <DetailsCar>
                    <DetailText>Marca: {item.marca}</DetailText>
                    <DetailText>Modelo: {item.modelo}</DetailText>
                    <DetailText>Ano: {item.ano}</DetailText>
                    <DetailText>Cilindrada: {item.cilindrada}</DetailText>
                    <DetailText>Tipo Carroceria: {item.tipo_carroceria}</DetailText>
                    <DetailText>Número de Portas: {item.numero_portas}</DetailText>
                    <DetailText>Cor: {item.cor}</DetailText>
                    <DetailText>Tabela FIPE: {item.tabela_fipe}</DetailText>
                    <DetailText>KM/Litro: {item.km_litro}</DetailText>
                    <DetailText>Média Avaliação: {item.media_avaliacao}</DetailText>
                </DetailsCar>
                <CommentsTitle>Comentários</CommentsTitle>
                <View style={{
                    marginBottom: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    borderBottomWidth: 2,
                    borderBottomColor: '#ccc',
                    // backgroundColor: '#000',

                }}>
                    <TextInput
                        placeholder="Adicionar comentários"
                        value={search}
                        onChangeText={setSearch}
                        multiline
                    />
                    <MaterialIcons name="subdirectory-arrow-right" size={24} color="#ccc" />
                </View>
                {comentarios.length > 0 ? (
                    <FlatList
                        data={comentarios}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem}
                        contentContainerStyle={{ padding: 10 }}
                    />
                ) : (
                    <View>
                        <Text style={{ textAlign: 'center', marginTop: 10 }}>Nenhum comentário encontrado</Text>
                    </View>
                )}
            </Container>
        </SafeAreaView>
    );
}