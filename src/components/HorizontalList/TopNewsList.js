import React from "react";
import { FlatList, Dimensions, ImageBackground, Text, View } from "react-native";

const { width } = Dimensions.get("window");

const TopNewsList = ({ dicas }) => {
    return (
        <FlatList
            data={dicas}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            snapToOffsets={[...Array(dicas.length)].map((x, i) => i * (width * 0.8 - 40) + (i - 1) * 40)}
            horizontal
            snapToAlignment="start"
            scrollEventThrottle={16}
            decelerationRate="fast"
            style={{ marginTop: 20 }}
            renderItem={({ item }) => (
                <View style={{
                    marginBottom: 10,
                    backgroundColor: 'white',
                    height: (width / 2.5) + 50, 
                    width: width * 0.8 - 20,
                    marginHorizontal: 10,
                    borderRadius: 10,
                    overflow: 'hidden',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}>
                    <ImageBackground
                        source={{ uri: item.urlToImage }}
                        style={{
                            height: width / 3, 
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            resizeMode: 'cover',
                        }}
                    />
                    <View style={{ backgroundColor: 'white', paddingHorizontal: 10 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.title}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ color: 'black' }}>{item.source.name}</Text>
                            <Text style={{ color: 'black' }}>{item.author}</Text>
                        </View>
                    </View>
                </View>
            )}
        />
    )
};

export default TopNewsList;
