import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Platform, SafeAreaView, Alert } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import {
    Header,
    PaymentView,
    ItemContainer,
    DueDateText,
    PaymentFlat,
    DescriptionPayment,
    ContainerDescription,
    StatusIndicator,
    ContentGoals
} from './styles';
import RadioButtonGroup from '../../components/button/RadioButton';
import Svg, { Path } from "react-native-svg";
import { CGT } from '../../components/TextGradient';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';

import { differenceInDays, parseISO, format } from 'date-fns';


export function Payment() {
    const [payments, setPayments] = useState([]);
    const { userInfo } = useContext(AuthContext);


    useEffect(() => {
        fetchPayments();
    }, []);

    const fetchPayments = async () => {
        try {
            // setLoading(true);
            const response = await api.get('/payments');
            const userPayments = response.data.filter(payment => payment.user_id === userInfo.id);

            // Definir os pagamentos do usuário
            if (userPayments.length > 0) {
                setPayments(userPayments);
                // Verificar se já se passaram 30 dias do payday para cada pagamento
                if (userPayments.length > 0) {
                    const ultimoRegistro = userPayments[userPayments.length - 1];
                    const dataPayday = parseISO(ultimoRegistro.payday); // Parse da string para objeto Date usando a função parseISO
                    const dataAtual = new Date();
                    const diferencaDias = differenceInDays(dataAtual, dataPayday);
                    if (diferencaDias >= 30) {
                        const payload = {
                            user_id: userInfo.id,
                            value: 40,
                            status: 'Open',
                            plan: 'Monthly',
                            payday: new Date().toISOString().slice(0, 10),
                        };
                        const newRecordResponse = await api.post('/payments', payload);
                        Alert.alert(`Hello, ${userInfo.name}`, 'Sua Nova fatura chegou!');
                        fetchPayments();
                    } else {
                        // console.log("Ainda não se passaram 30 dias desde a data de payday do último registro.");
                    }
                } 
            } else {
                // Tratar o caso em que não há pagamentos para o usuário
                console.log('Não há pagamentos para este usuário.');
            }
        } catch (error) {
            console.error("Erro ao buscar payments:", error);
        } finally {
            // setLoading(false);
        }
    };



    const [selectedStatus, setSelectedStatus] = useState('All');
    const filteredData = selectedStatus === 'All' ? payments : payments.filter(item => item.status === selectedStatus);
    const reversedData = [...filteredData].reverse();

    const IconStatusIndicator = ({ status }) => {
        return status === 'Open'
            ? <EvilIcons name="close" size={14} color="white" />
            : <Ionicons name="ios-checkmark" size={14} color="white" />;
    };

    const renderItem = ({ item }) => (
        <ItemContainer>
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '10%' }}>
                <StatusIndicator status={item.status} >
                    <IconStatusIndicator status={item.status} />
                </StatusIndicator>
            </View>

            <View style={{}}>
                {/* <CGT>Monthly Fee Ref: {item.mes}/2023</CGT> */}
                <CGT style={{ fontWeight: 'bold' }}>Plan: {item.plan}</CGT>
                <DueDateText >Payday: {format(new Date(item.payday), 'dd/MM/yyyy')}</DueDateText>
            </View>

            <View style={{}}>
                <CGT>$ {item.value.toFixed(2)}</CGT>
            </View>
        </ItemContainer>
    );


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <PaymentView>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Payments</Text>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', letterSpacing: 3 }}>ff</Text>
                </PaymentView>
                <View style={{ width: '100%', justifyContent: 'flex-end', alignItems: 'center', height: '50%' }}>
                    <RadioButtonGroup onSelect={setSelectedStatus} />
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
                    <CGT style={{ fontWeight: 'bold' }}>Payment History</CGT>
                    <Text style={{ alignSelf: 'center', fontSize: 12, textAlign: 'center' }}>Track the history of the last 20 payments of your account.</Text>
                </View>
            </ContainerDescription>
            <View style={{ width: '100%', height: '55%' }}>
                <PaymentFlat
                    data={reversedData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: 50 }}
                />

            </View>

        </SafeAreaView>
    )
}
