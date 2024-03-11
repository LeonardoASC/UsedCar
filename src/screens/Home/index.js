import React, { useEffect, useState } from 'react'
import {
    Header,
    ContentHome,
} from './styles'

import { SafeAreaView, FlatList, Text, Image } from 'react-native'
import axios from 'axios';

export function Home({ navigation }) {
    const [news, setNews] = useState([]); // This is a comment

    useEffect(() => {
        getNews();
    }, []);

    

    async function getNews() {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
            // const filteredNews = response.data.articles.filter(article => article.source.name === "BBC News");
            console.log(response);
            setNews(response.data);
        } catch (error) {
            console.log("Error fetching news:", error);
            // Optionally display an error message to the user
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
                                <View style={{ flex: 1, padding: 10 }}>
                                    <Text style={{ fontSize: 18 }}>{item.title}</Text>
                                    <Text style={{ fontSize: 14 }}>{item.source.name}</Text>
                                    <Image source={{ uri: item.urlToImage }} style={{ width: 100, height: 100 }} />
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
