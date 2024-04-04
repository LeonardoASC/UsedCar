import react, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Header, Container } from "./styles.js";
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'
import { FontAwesome } from "@expo/vector-icons";

export function CheckListOne({ navigation }) {

    // const [selected, setSelected] = useState("");
    // const [enabledIndex, setEnabledIndex] = useState(0);
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
            marca: 'Fiat',
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
    const [list2, setList2] = useState(false);
    const [list3, setList3] = useState(false);
    const [list4, setList4] = useState(false);
    const [list5, setList5] = useState(false);
    const [selectedModelo, setSelectedModelo] = useState(null);
    const [selectedMarca, setSelectedMarca] = useState(null);
    const [selectedAnos, setSelectedAnos] = useState(null);
    const [selectedTiposCarroceria, setSelectedTiposCarroceria] = useState(null);
    const [selectedNumerosPortas, setSelectedNumerosPortas] = useState(null);
    const [modelos, setModelos] = useState(removeDuplicates(dados.map(item => item.modelo)));
    const [marcas, setMarcas] = useState(removeDuplicates(dados.map(item => item.marca)));
    const [anos, setAnos] = useState(removeDuplicates(dados.map(item => item.ano)));
    const [tiposCarroceria, setTiposCarroceria] = useState(removeDuplicates(dados.map(item => item.tipo_carroceria)));
    const [numerosPortas, setNumerosPortas] = useState(removeDuplicates(dados.map(item => item.numero_portas)));

    // Função para lidar com a seleção na primeira SelectList
    const handleMarcaSelect = (val) => {
        setSelectedMarca(val);
        setList3(false);
        setList4(false);
        setList5(false);
        setSelectedModelo(null);
        setSelectedAnos(null);
        setSelectedTiposCarroceria(null);
        setSelectedNumerosPortas(null);

        const modelosFiltrados = dados.filter(item => item.marca === val).map(item => item.modelo);
        setModelos(removeDuplicates(modelosFiltrados));
        setList2(!list2);
    };
    // Função para lidar com a seleção na segunda SelectList
    const handleModeloSelect = (val) => {
        setSelectedModelo(val);
        setList4(false); 
        setList5(false);
        setSelectedAnos(null);
        setSelectedTiposCarroceria(null);
        setSelectedNumerosPortas(null);
        const anosFiltrados = dados.filter(item => item.modelo === val).map(item => item.ano);
        setAnos(removeDuplicates(anosFiltrados));
        setList3(!list3); 
    };
    // Função para lidar com a seleção na terceira SelectList
    const handleAnoSelect = (val) => {
        setSelectedAnos(val);
        setList5(false);
        setSelectedTiposCarroceria(null);
        setSelectedNumerosPortas(null);
        const tiposCarroceriaFiltrados = dados.filter(item => item.ano === val).map(item => item.tipo_carroceria);
        setTiposCarroceria(removeDuplicates(tiposCarroceriaFiltrados));
        setList4(!list4); 
    };
    // Função para lidar com a seleção na quarta SelectList 
    const handleTiposCarroceriaSelect = (val) => {
        setSelectedTiposCarroceria(val);
        setSelectedNumerosPortas(null);
        const numerosPortasFiltrados = dados.filter(item => item.tipo_carroceria === val).map(item => item.numero_portas);
        setNumerosPortas(removeDuplicates(numerosPortasFiltrados));
        setList5(!list5);
    };
    // Função para lidar com a seleção na quinta SelectList
    const handleNumerosPortasSelect = (val) => {
        setSelectedNumerosPortas(val);
    };
console.log(selectedMarca, selectedModelo, selectedAnos, selectedTiposCarroceria, selectedNumerosPortas);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>

            </Header>
            <Container>
                <View style={{ width: '90%', marginTop: '5%' }}>
                    <SelectList
                        setSelected={handleMarcaSelect}
                        search={false} 
                        data={marcas}
                        save="value"
                        placeholder="Selecione um marca"
                    />
                </View>
                {list2 &&
                    <View style={{ width: '90%', marginTop: '5%' }}>
                        <SelectList
                            setSelected={handleModeloSelect}
                            search={false} 
                            data={modelos}
                            save="value"
                            placeholder="Selecione um modelo"
                        />
                    </View>
                }
                {list3 &&
                    <View style={{ width: '90%', marginTop: '5%' }}>
                        <SelectList
                            setSelected={handleAnoSelect}
                            search={false} 
                            data={anos}
                            save="value"
                            placeholder="Selecione um ano"
                        />
                    </View>
                }
                {list4 &&
                    <View style={{ width: '90%', marginTop: '5%' }}>
                        <SelectList
                            setSelected={handleTiposCarroceriaSelect}
                            search={false} 
                            data={tiposCarroceria}
                            save="value"
                            placeholder="Selecione um tiposCarroceria"
                        />
                    </View>
                }
                {list5 &&
                    <View style={{ width: '90%', marginTop: '5%' }}>
                        <SelectList
                            setSelected={handleNumerosPortasSelect}
                            search={false} 
                            data={numerosPortas}
                            save="value"
                            placeholder="Selecione um numeros Portas"
                        />
                    </View>
                }
            </Container>
        </SafeAreaView>
    )
}