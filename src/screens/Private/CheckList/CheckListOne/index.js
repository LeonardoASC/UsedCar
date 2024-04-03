import react, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Header, Container } from "./styles.js";
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'
import { FontAwesome } from "@expo/vector-icons";

export function CheckListOne({ navigation }) {

    const [selected, setSelected] = useState("");
    const [enabledIndex, setEnabledIndex] = useState(0);

    const dados = [
        {
            id: '1',
            marca: 'Fiat',
            modelo: 'Uno',
            ano: 2010,
            tipo_carroceria: 'Sedan',
            numero_portas: 2
        },
        {
            id: '2',
            marca: 'Ford',
            modelo: 'Palio',
            ano: 2012,
            tipo_carroceria: 'Coupé',
            numero_portas: 3
        },
        {
            id: '3',
            marca: 'Toyota',
            modelo: 'Gol',
            ano: 2015,
            tipo_carroceria: 'SUV',
            numero_portas: 4
        },
        {
            id: '4',
            marca: 'Chevrolet',
            modelo: 'Celta',
            ano: 2018,
            tipo_carroceria: 'SUV',
            numero_portas: 4
        },
        {
            id: '5',
            marca: 'Renault',
            modelo: 'Fiesta',
            ano: 2020,
            tipo_carroceria: 'Hatchback',
            numero_portas: 2
        },


    ];
    const removeDuplicates = (array) => {
        return array.filter((value, index, self) => {
          return self.indexOf(value) === index;
        });
      };
      
      const marcas = removeDuplicates(dados.map(item => item.marca));
      const modelos = removeDuplicates(dados.map(item => item.modelo));
      const anos = removeDuplicates(dados.map(item => item.ano));
      const tiposCarroceria = removeDuplicates(dados.map(item => item.tipo_carroceria));
      const numerosPortas = removeDuplicates(dados.map(item => item.numero_portas));

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>

            </Header>
            <Container>
                <View style={{ width: '90%', marginTop: '5%' }}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={marcas}
                        save="value"
                        placeholder="Selecione um marca"
                    />
                </View>
                <View style={{ width: '90%', marginTop: '5%' }}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={modelos}
                        save="value"
                        placeholder="Selecione um modelo"
                    />
                </View>
                <View style={{ width: '90%', marginTop: '5%' }}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={anos}
                        save="value"
                        placeholder="Selecione um ano"
                    />
                </View>
                <View style={{ width: '90%', marginTop: '5%' }}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={tiposCarroceria}
                        save="value"
                        placeholder="Selecione um tiposCarroceria"
                    />
                </View>
                <View style={{ width: '90%', marginTop: '5%' }}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={numerosPortas}
                        save="value"
                        placeholder="Selecione um numeros Portas"
                    />
                </View>

            </Container>
        </SafeAreaView>
    )
}