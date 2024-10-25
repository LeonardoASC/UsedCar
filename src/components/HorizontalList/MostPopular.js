import React from "react";
import { FlatList, Dimensions, ImageBackground, Text, Image, View } from "react-native";

const { width } = Dimensions.get("window");

const renderItem = ({ item }) => {
    return (
        <View>
            <ImageBackground
                source={item.imagem}
                style={{
                    backgroundColor: '#39BF61',
                    height: width / 2.2,
                    width: width * 0.8 - 20,
                    marginHorizontal: 10,
                    borderRadius: 10,
                    resizeMode: 'cover',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 10,
                    padding: 2,
                }}
            >
                <Image style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 15, backgroundColor: '#39BF61' }} source={{ uri: item.foto }} />
                <Text style={{ color: 'gray', fontWeight : 'bold', fontSize: 24, position: 'absolute', top: 10, left: 10 }}>{item.posicao}</Text>
            </ImageBackground>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>{item.marca} {item.modelo} - {item.ano}</Text>
                <Text style={{ color: 'gray', fontWeight: 'bold' }}>{`R$ ${item.tabela_fipe}`}</Text>
            </View>
        </View>
    )
}

const MostPopular = ({ dicas }) => {
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
            // style={{ marginTop: 20 }}
            renderItem={renderItem}
            keyboardShouldPersistTaps="never"
        />

    )
};

export default MostPopular;
