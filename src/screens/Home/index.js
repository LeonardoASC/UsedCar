import React, { useContext, useEffect, useState } from 'react'
import {
    Container,
    Header,
    ProfileImage,
    NameSC,
    ExpirationDate,
    ViewWrapper,
    ViewWrapperLeft,
    ContentHome,
    AcessView,
    WelcomeHome,
    SessionHome,
    LogoContainer,
    LogoGym,
    IconView,
    StyledText,
    StyledButton,
    BgWelcome
} from './styles'
import { ActivityIndicator, Alert, SafeAreaView, Text, View } from 'react-native'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { GradientView } from './styles';
import { CGT } from '../../components/TextGradient';
import labex from '../../../assets/LabexRosa.png'
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';

export function Home({ navigation }) {
    const { userInfo, isLoading } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [frequencyCount, setFrequencyCount] = useState();
   
  

    const handleButtonPress = async () => {
        try {
            setLoading(true);
            const response = await api.get('/frequences');
            const userFrequencies = response.data.filter(freq => freq.user_id === userInfo.id);
            const latestFrequency = userFrequencies.reduce((latest, freq) => {
                return (!latest || freq.date > latest.date) ? freq : latest;
            }, null);
            if (latestFrequency) {
                const currentDate = new Date().toISOString().slice(0, 10);
                if (latestFrequency.date === currentDate) {
                    Alert.alert('Aviso', 'A frequência já foi gravada para hoje.');
                    return;
                }
            }
            const now = new Date();
            const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
            const payload = {
                user_id: userInfo.id,
                date: new Date().toISOString().slice(0, 10),
                present: 1,
                entry_time: currentTime
            };
            const newRecordResponse = await api.post('/frequences', payload);
            Alert.alert('Sucesso', 'Frequência gravada com sucesso!');
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro ao tentar gravar a frequência.');
        } finally {
            setLoading(false);
        }
    };


    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await api.get('/frequences');
                const filteredRecords = response.data.filter(record => record.user_id === userInfo.id);
                const count = filteredRecords.length;
                setFrequencyCount(count);
            } catch (error) {
                Alert.alert('Erro', 'Ocorreu um erro ao buscar as frequências.');
            } finally {
                setLoading(false);
            }
        };
        if (userInfo) {
            fetchData();
        }
    }, [userInfo]); // Execute sempre que userInfo mudar
    

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <ViewWrapper>
                    <ProfileImage source={{ uri: ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCKq1XnPYYDaUIlwlsvmLPZ-9-rdK28RToA&usqp=CAU') }} />
                    <NameSC>{userInfo.name}</NameSC>
                </ViewWrapper>
                <View>
                    <ViewWrapperLeft>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', letterSpacing: 3, right: 15, bottom: 10 }}>ff</Text>
                        <ExpirationDate style={{ fontSize: 12, right: 15 }}>Fatura: </ExpirationDate>
                        <ExpirationDate style={{ fontSize: 18, color: '#e91e63' }}>R$ 600</ExpirationDate>
                    </ViewWrapperLeft>
                </View>
            </Header>
            <ContentHome>
                <AcessView>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign name="check" size={20} color="#e91e63" />
                            <Text style={{ marginLeft: '5%' }}>Card AcessView.</Text>
                        </View>
                        <AntDesign name="qrcode" size={24} color="#e91e63" />
                    </View>
                </AcessView>
                <WelcomeHome>
                    <LogoContainer>
                        <LogoGym source={labex} />
                        {/* <LogoGym source={{ uri: ('https://static.wixstatic.com/media/b6b1f4_71cf33ede6f146bb958b263e8179cb9f~mv2.png/v1/fill/w_108,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo2_2023.png') }} /> */}
                    </LogoContainer>
                    <BgWelcome>
                        <Text style={{ color: 'white' }}>Welcome, {userInfo.name}! </Text>
                    </BgWelcome>
                </WelcomeHome>
                <SessionHome >
                    <View style={{ display: 'flex', flexDirection: 'row', width: '90%', alignItems: 'center' }}>
                        <IconView>
                            <FontAwesome5 name="dumbbell" size={18} color="white" />
                        </IconView>
                        <View>
                            <Text>Sessions held.</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                                <CGT style={{ color: '#e91e63', fontSize: 30 }}>{frequencyCount}</CGT>
                                <CGT style={{ color: '#e91e63', bottom: 5 }}>/365</CGT>
                            </View>
                        </View>
                    </View>
                    <View style={{ elevation: 15, width: '100%', height: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <GradientView
                            colors={['#e91e63', '#673ab7']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        />
                    </View>
                    <View style={{ width: '90%' }}>
                        <StyledButton onPress={handleButtonPress}>
                            {loading ? (
                                <ActivityIndicator size="small" color="#ffffff" />
                            ) : (
                                <>
                                    {/* <StyledText>Marcar Frequencia: </StyledText> */}
                                    <CGT style={{ fontWeight: '800', color: '#e91e63' }}>Marcar Frequencia</CGT>
                                </>
                            )}
                        </StyledButton>
                    </View>
                </SessionHome>
            </ContentHome>
        </SafeAreaView>
    )
}
