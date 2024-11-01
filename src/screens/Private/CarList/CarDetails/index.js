import React, { useEffect, useState, useContext } from "react";
import { FlatList, Image, SafeAreaView, Text, View, StyleSheet, TextInput } from "react-native";
import { Header, Container, CenteredView, MessageText, CarImage, DetailsCar, DetailText, CommentsTitle, CommentContainer, CommentText, CommentName } from "./styles.js";
import api from "../../../../services/api.js";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity } from "react-native";
import { AuthContext } from "../../../../context/AuthContext.js";


export function CarDetails({ route }) {
    const { item } = route.params;
    const [comentarios, setComentarios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [addComentario, setAddComentario] = useState('');
    const { userInfo } = useContext(AuthContext);

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


    const handleAddComentario = async () => {
        try {
            const response = await api.post(`carros/${item.id}/comentarios`, {
                user_id: userInfo.id,
                carro_id: item.id,
                comentario: addComentario
            });
            setComentarios([...comentarios, response.data]);
            setAddComentario('');
        } catch (error) {
            console.log(error);
        }
    };


    const renderItem = ({ item }) => (
        <CommentContainer>
            <View style={{flexDirection: 'row'}}>
                <Image
                    style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#fff', marginRight: 10 }}
                    source={{ uri: 'https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-man-silhouette-on-white-background-png-image_4826258.png' }}
                    />
                <View style={{ width: '80%' }}>
                    <CommentName>{item.user.name}</CommentName>
                    <CommentText>{item.comentario}</CommentText>
                </View>
            </View>

            <MaterialIcons name="more-vert" size={24} color="#555" />

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
                }}>
                    <TextInput
                        placeholder="Adicionar comentários"
                        value={addComentario}
                        onChangeText={setAddComentario}
                        multiline
                    />
                    <TouchableOpacity onPress={handleAddComentario} disabled={!addComentario}>
                        <MaterialIcons
                            name="subdirectory-arrow-right"
                            size={24}
                            color={addComentario ? '#39BF61' : '#ccc'}
                        />
                    </TouchableOpacity>
                </View>
                {comentarios.length > 0 ? (
                    <FlatList
                        data={comentarios}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem}
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