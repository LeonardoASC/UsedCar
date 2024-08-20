import React, { useEffect, useState } from 'react'
import {
    Header,
    ContentHome,
    HeaderTitle,
    InputSearch,
} from './styles'
import { SafeAreaView, FlatList, Text, Image, View, ActivityIndicator, TouchableOpacity, Linking, TextInput, Button } from 'react-native'
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';
import TopNewsList from '../../../components/HorizontalList/TopNewsList';

export function Home({ navigation }) {
    const [news, setNews] = useState([]);
    const [topNews, setTopNews] = useState([]);
    const [sources, setSources] = useState([]);
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState(news);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getNews = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://newsapi.org/v2/everything?q="carros"&apiKey=7a4ed333c3df43dca5a43f092f836a73');
                setNews(response.data.articles);
                const sourceNames = [...new Set(response.data.articles.map(item => item.source.name))];
                setSources(sourceNames);
            } catch (error) {
                console.error('Erro ao buscar fontes de notícias:', error);
            } finally {
                setLoading(false);
            }
        }
        getNews();
    }, []);

    useEffect(() => {
        const getTopNews = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://newsapi.org/v2/everything?q=carro&sortBy=popularity&pageSize=3&apiKey=7a4ed333c3df43dca5a43f092f836a73');
                setTopNews(response.data.articles);
            } catch (error) {
                console.error('Erro ao buscar fontes de top notícias:', error);
            } finally {
                setLoading(false);
            }
        }
        getTopNews();
    }, []);

    useEffect(() => {
        if (!query) {
            setFilteredData(news);
        }
    }, [news, query]);

    const filterNewsBySource = (sourceName) => {
        const filteredNews = news.filter(item => item.source.name === sourceName);
        setFilteredData(filteredNews);
    };

    const renderItem = ({ item }) => {
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingVertical: 20,


            }}>
                <Image style={{ width: 120, height: 100, resizeMode: 'cover', borderRadius: 5, }} source={{ uri: item.urlToImage }} />
                <View style={{ flex: 1, marginLeft: 16 }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12 }}>{item.source.name}</Text>
                        <View style={{ width: 1, height: 10, backgroundColor: 'black', marginHorizontal: 10 }} />
                        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                            <Text style={{ color: 'blue' }}>Leia mais</Text>
                        </TouchableOpacity>
                    </View>
                    <Text numberOfLines={5} >{item.author}</Text>
                </View>
            </View>
        )
    }

    const renderButton = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => filterNewsBySource(item)}
                style={{
                    backgroundColor: '#39BF61',
                    marginHorizontal: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 8,
                    // borderWidth: 0.5,
                    borderRadius: 10,
                    height: '50%',
                    alignSelf: 'center',
                }}>
                <Text style={{ color: 'white' }}>{item}</Text>
            </TouchableOpacity>
        )
    }


    function formatDate() {
        const date = new Date();
        const day = date.getDate();
        const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        const month = months[date.getMonth()];
        return `Hoje, ${day} de ${month}`;
    }


    const handleSearch = (text) => {
        const formattedQuery = text.toLowerCase();
        const filteredData = news.filter(item => {
            return Object.values(item).join(' ').toLowerCase().includes(formattedQuery);
        });
        setQuery(text);
        setFilteredData(filteredData);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fafafa' }}>
            <Header>
                <HeaderTitle>Noticias</HeaderTitle>
                <Text style={{ fontSize: 14, color: 'gray', marginLeft: '5%', marginTop: '2%' }}>{formatDate()}</Text>
                <InputSearch>
                    <FontAwesome name="search" size={16} color="gray" />
                    <TextInput
                        onChangeText={handleSearch}
                        value={query}
                        placeholder="Pesquise aqui..."
                        placeholderTextColor="#999"
                    />
                </InputSearch>
                <FlatList
                    horizontal
                    data={sources}
                    keyExtractor={(item, index) => item + index}
                    renderItem={renderButton}
                />
            </Header>

            <ContentHome>
                <Text style={{ fontWeight: 'bold', marginHorizontal: '5%', fontSize: 18 }}>Destaques</Text>
                {news.length > 0 ? (
                    <FlatList
                        ListHeaderComponent={<TopNewsList dicas={topNews} />}
                        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#ddd' }} />}
                        data={filteredData}
                        keyExtractor={(item, index) => item.url + index}
                        renderItem={renderItem}
                        maxToRenderPerBatch={10}
                        initialNumToRender={5}
                        updateCellsBatchingPeriod={30000}
                        removeClippedSubviews={true}
                        onEndReachedThreshold={0.1}
                    />
                ) : (
                    <ActivityIndicator size="large" color="#000" />
                )}
            </ContentHome>
        </SafeAreaView>
    )
}
