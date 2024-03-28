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
        style={{ marginTop: 20}}
        renderItem={({ item }) => (
            <ImageBackground
                source={item.imagem}
                style={{
                    backgroundColor: 'black',
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
                <Text style={{ color: 'white' }}>{item.title}</Text>
            </ImageBackground>
        )}
    />
    )
};

export default HorizontalList;
