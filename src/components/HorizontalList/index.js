import React from "react";
import { FlatList, Dimensions, ImageBackground, Text } from "react-native";

const { width } = Dimensions.get("window");

const HorizontalList = ({ dicas }) => {
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
                <ImageBackground
                    source={item.imagem}
                    style={{
                        backgroundColor: 'white',
                        height: width / 2.2,
                        width: width * 0.8 - 20,
                        marginHorizontal: 10,
                        borderRadius: 10,
                        resuzeMode: 'cover',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 10,
                    }}
                // imageStyle={{ borderRadius: 10 }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 24,
                        textAlign: 'center',
                        textShadowColor: 'rgba(0, 0, 0, 1)', // Cor da sombra
                        textShadowOffset: { width: -2, height: 2 }, // Direção da sombra
                        textShadowRadius: 5, // Difusão da sombra
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Fundo semi-transparente para aumentar a visibilidade
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                    }}>{item.title}</Text>
                 

                </ImageBackground>
            )}
        />
    )
};

export default HorizontalList;
