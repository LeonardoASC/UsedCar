import React from "react";
import { FlatList, Dimensions, ImageBackground, Text, Image } from "react-native";

const { width } = Dimensions.get("window");


const MostPopular = ({ dicas }) => {
    return (
        <FlatList
            data={dicas}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            snapToOffsets={[...Array(dicas.length)].map((x, i) => i * (width * 0.6 - 80) + (i - 1) * 80)}
            horizontal
            snapToAlignment="start"
            scrollEventThrottle={16}
            decelerationRate="fast"
            style={{ marginTop: 20 }}
            renderItem={({ item }) => (
                <ImageBackground
                    source={item.imagem}
                    style={{
                        backgroundColor: '#39BF61',
                        height: width * 0.6 - 15, 
                        width: width * 0.6 - 15, 
                        marginHorizontal: 10,
                        borderRadius: (width * 0.6 - 15) / 2,
                        resizeMode: 'cover',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 10,
                    }}
                >
                    <Image style={{ width: 70, height: 50, resizeMode: 'cover', borderRadius: 5, backgroundColor: '#39BF61' }} source={{ uri: item.foto }} />
                    <Text style={{ color: 'white', fontSize: 24 }}>{item.marca} {item.modelo}</Text>
                    <Text style={{ color: 'white' }}>{item.ano}</Text>
                    <Text style={{ color: 'white' }}>R${item.tabela_fipe}</Text>
                </ImageBackground>
            )}
        />

    )
};

export default MostPopular;
