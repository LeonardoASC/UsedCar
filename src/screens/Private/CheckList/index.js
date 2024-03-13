import react from "react";
import { SafeAreaView, Text } from "react-native";
import { Header, Container } from "./styles.js";

export function CheckList() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>

            </Header>
            <Container>
                <Text>Documentação</Text>
                {/* – Bloqueio Renajud;
                – IPVA;
                – Licenciamento original;
                – Seguro DPVAT;
                – Quitação de multas do veículo;
                – Registro de matrícula;
                – Placa. */}
                <Text>chassi</Text>
                <Text>motor</Text>
                <Text>vazamento oleo</Text>
                <Text>suspensao</Text>
                <Text>lataria</Text>
                <Text>freio</Text>
                <Text>embreagem</Text>
                <Text>Pedais</Text>
                <Text>Pneus</Text>
                <Text>Cambio</Text>
                <Text>Vidros</Text>
                <Text>quilometragem</Text>
                <Text>Procedencia/comprovantes</Text>
                <Text>Consumo</Text>
                <Text>veracidade do anuncio</Text>
                <Text>Valor do seguro</Text>
                <Text>Custo medio de manutenção</Text>
            </Container>
        </SafeAreaView>
    )
}