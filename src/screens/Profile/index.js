import react, { useContext, useEffect, useState } from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import { Header, ViewWrapper, ProfileImage, InfoHeader, DataInfo, AdditionalInfo, DeathContent } from './styles.js';
import { CGT } from "../../components/TextGradient/index.js";
import { Octicons } from '@expo/vector-icons';
import api from "../../services/api.js";
import { AuthContext } from "../../context/AuthContext.js";
export function Profile() {
    const [user, setUser] = useState([]);
    const { userInfo } = useContext(AuthContext);
    const [frequencyCount, setFrequencyCount] = useState();
    useEffect(() => {
        fetchUser();
    }, []);
    fetchUser = async () => {
        try {
            // setLoading(true);
            const response = await api.get('/users');
            console.log('response.data', response.data);
            if (response.data) {
                const user = response.data.find(user => user.id === userInfo.id);
                if (user) {
                    setUser(user);
                    console.log('user', user);
                } else {
                    console.log('Não há usuário.');
                }
            } else {
                console.log('Não há usuário.');
            }
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
        }
        finally {
            // setLoading(false);
        }
    }

    function getAge(birthDate) {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const monthsDiff = today.getMonth() - birthDateObj.getMonth();
        if (monthsDiff < 0 || (monthsDiff === 0 && today.getDate() < birthDateObj.getDate())) {
          age--;
        }
        return age;
      }
      
      const age = getAge(user.birth);


       
    useEffect(() => {
        const fetchData = async () => {
            try {
                // setLoading(true);
                const response = await api.get('/physical-evaluations');
                const filteredRecords = response.data.filter(record => record.user_id === userInfo.id);
                const count = filteredRecords.length;
                setFrequencyCount(count);
            } catch (error) {
                Alert.alert('Erro', 'Ocorreu um erro ao buscar as frequências.');
            } finally {
                // setLoading(false);
            }
        };
        if (userInfo) {
            fetchData();
        }
    }, [userInfo]); 
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <ViewWrapper>
                    <ProfileImage source={{ uri: ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCKq1XnPYYDaUIlwlsvmLPZ-9-rdK28RToA&usqp=CAU') }} />
                    <CGT style={{ fontSize: 20, fontWeight: 'bold' }}>Leonardo Augusto Silva Chaves</CGT>
                    <CGT>Matricula: {user.registration}</CGT>
                </ViewWrapper>
                <InfoHeader>
                    <View style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <CGT style={{ fontSize: 20, fontWeight: 'bold' }}>100%</CGT>
                        <Text style={{ fontSize: 12 }}>Treinos Realizados</Text>
                        <Text style={{ fontSize: 11 }}>sessões</Text>
                    </View>
                    <View style={{ width: 1, height: '70%', backgroundColor: '#DCDCDC', alignSelf: 'center' }}></View>
                    <View style={{ width: '50%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <CGT style={{ fontSize: 20, fontWeight: 'bold' }}>{frequencyCount}</CGT>
                        <Text style={{ fontSize: 12 }}>Avaliações fisicas</Text>
                        <Text style={{ fontSize: 11 }}>realizadas</Text>
                    </View>
                </InfoHeader>
            </Header>
            <DeathContent>
            </DeathContent>
            <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', minHeight: '70%' }}>
                <DataInfo>
                    <View style={{ height: '25%', alignItems: 'center', fontWeight: 'bold', flexDirection: 'row', marginLeft: '10%' }}>
                        <Octicons name="checklist" size={24} color="#e91e63" />
                        <CGT style={{ marginLeft: '5%', fontWeight: 'bold', fontSize: 16 }}>Dados Cadastrais</CGT>
                    </View>
                    <View style={{ width: '90%', height: 1, backgroundColor: '#DCDCDC', alignSelf: 'center' }}></View>
                    <View style={{ height: '75%', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginLeft: '10%', paddingRight: '10%' }}>
                            <CGT>phone</CGT>
                            <CGT>address</CGT>
                            <CGT>neighborhood</CGT>
                            <CGT>zip_cod</CGT>
                            <CGT>city</CGT>
                            <CGT>state</CGT>
                        </View>
                        <View>
                            <Text>{user.phone}</Text>
                            <Text>{user.address}</Text>
                            <Text>{user.neighborhood}</Text>
                            <Text>{user.zip_cod}</Text>
                            <Text>{user.city}</Text>
                            <Text>{user.state}</Text>
                        </View>
                    </View>
                </DataInfo>
                <AdditionalInfo>
                    <View style={{ height: '40%', alignItems: 'center', fontWeight: 'bold', flexDirection: 'row', marginLeft: '10%' }}>
                        <Octicons name="checklist" size={24} color="#e91e63" />
                        <CGT style={{ marginLeft: '5%', fontWeight: 'bold', fontSize: 16 }}>Dados Cadastrais</CGT>
                    </View>
                    <View style={{ width: '90%', height: 1, backgroundColor: '#DCDCDC', alignSelf: 'center' }}></View>
                    <View style={{ height: '60%', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginLeft: '10%', paddingRight: '10%' }}>
                            <CGT>birth</CGT>
                            <CGT>CPF</CGT>
                        </View>
                        <View>
                            <Text>{user.birth} ({age} anos)</Text>
                            <Text>{user.cpf}</Text>
                        </View>
                    </View>
                </AdditionalInfo>
            </ScrollView>
        </SafeAreaView>
    )
}