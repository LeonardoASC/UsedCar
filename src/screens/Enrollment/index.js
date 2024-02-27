import react from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { Header, Container, ContainerDescription, DescriptionPayment, ItemContainer, StatusIndicator, DueDateText } from "./styles.js"
import Svg, { Path } from "react-native-svg";
import { CGT } from "../../components/TextGradient/index.js";

import { Ionicons, EvilIcons } from '@expo/vector-icons';


export function Enrollment() {
    const data = [
        { id: '1', typePlan: 'Monthly', Valor_mensalidade: 100, mes: 'Jan', startPlan: '05/08/2024', vencimento: '2023-01-10', status: 'Active' },
        { id: '2', typePlan: 'Quarterly', Valor_mensalidade: 120, mes: 'Feb', startPlan: '05/07/2024', vencimento: '2023-02-11', status: 'Closed' },
        { id: '3', typePlan: 'Quarterly', Valor_mensalidade: 120, mes: 'Mar', startPlan: '05/06/2024', vencimento: '2023-02-12', status: 'Closed' },
        { id: '4', typePlan: 'Quarterly', Valor_mensalidade: 120, mes: 'Abr', startPlan: '05/05/2024', vencimento: '2023-02-13', status: 'Closed' },
        { id: '5', typePlan: 'Monthly', Valor_mensalidade: 120, mes: 'May', startPlan: '05/04/2024', vencimento: '2023-02-14', status: 'Closed' },
        { id: '6', typePlan: 'Monthly', Valor_mensalidade: 120, mes: 'Jun', startPlan: '05/03/2024', vencimento: '2023-02-15', status: 'Closed' },
        { id: '7', typePlan: 'Monthly', Valor_mensalidade: 120, mes: 'Jul', startPlan: '05/02/2024', vencimento: '2023-02-16', status: 'Closed' },
        { id: '8', typePlan: 'Monthly', Valor_mensalidade: 120, mes: 'Aug', startPlan: '05/01/2024', vencimento: '2023-02-17', status: 'Closed' },
    ];


    const IconStatusIndicator = ({ status }) => {
        return status === 'Active'
            ? <Ionicons name="ios-checkmark" size={14} color="white" />
            : <EvilIcons name="close" size={14} color="white" />;
    };

    const renderItem = ({ item }) => (
        <ItemContainer >
            <View style={{flexDirection: 'row', width: '70%'}}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <StatusIndicator status={item.status} >
                        <IconStatusIndicator status={item.status} />
                    </StatusIndicator>
                </View>

                <View>
                    <CGT>Plan {item.typePlan}</CGT>
                    <DueDateText>Start: {item.startPlan}</DueDateText>
                    <DueDateText>Due Date: {item.vencimento}</DueDateText>
                    <DueDateText>Plan: Monthly</DueDateText>
                </View>
            </View>

            <View style={{ width: '30%'}}>
                <CGT>{item.status}</CGT>
                <CGT>$ {item.Valor_mensalidade.toFixed(2)}</CGT>
            </View>
        </ItemContainer>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Your Registrations</Text>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', letterSpacing: 3 }}>ff</Text>
                </View>
            </Header>
            <ContainerDescription>
                <DescriptionPayment>
                    <Svg
                        width="40px"
                        height="40px"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="bi bi-coin"
                    >
                        <Path fill="white" d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                        <Path fill="white"
                            fillRule="evenodd"
                            d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
                        />
                        <Path fill="white"
                            fillRule="evenodd"
                            d="M8 13.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 .5A6 6 0 108 2a6 6 0 000 12z"
                        />
                    </Svg>
                </DescriptionPayment>
                <View style={{ width: '60%', alignItems: 'center', justifyContent: 'center', height: '40%' }}>
                    <CGT style={{ fontWeight: 'bold' }}>Enrollment history</CGT>
                    <Text style={{ alignSelf: 'center', fontSize: 12 }}>Track your enrollment history.</Text>
                </View>
            </ContainerDescription>
            <Container>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: 50, width: '90%' }}
                />
            </Container>

        </SafeAreaView>
    )
}