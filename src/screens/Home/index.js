import React, { useEffect, useState } from 'react'
import {
    Header,
    ContentHome,
} from './styles'

import { SafeAreaView, FlatList, Text, Image, View } from 'react-native'
import axios from 'axios';

export function Home({ navigation }) {
    const [news, setNews] = useState([]); // This is a comment

    useEffect(() => {
        getNews();
    }, []);


    async function getNews() {
        try 
        {
            const response = await axios.get('https://newsapi.org/v2/everything?q="carros"&apiKey=7a4ed333c3df43dca5a43f092f836a73');
            console.log(response.data.articles);
            setNews(response.data.articles);
        } catch (error) {
            console.error('Erro ao buscar fontes de notícias:', error);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>

            </Header>
            <ContentHome>
                <>
                    {news.length > 0 ? (
                        <FlatList
                            data={news}
                            renderItem={({ item }) => (
                                <View style={{ padding: 10, backgroundColor: 'white', marginBottom: '2%', width: '90%', borderRadius: 10 }}>
                                    <Text >{item.title}</Text>
                                    <Text style={{ fontSize: 14 }}>{item.source.name}</Text>
                                    <Text>{item.author}</Text>
                                    <Image source={{ uri: item.urlToImage }} style={{ width: 100, height: 100, borderRadius: 100 }} />
                                </View>
                            )}
                        />
                    ) : (
                        <Text>Falha ao carregar as noticias. Por favor check sua conexão.</Text>
                    )}
                </>
            </ContentHome>
        </SafeAreaView>
    )
}
