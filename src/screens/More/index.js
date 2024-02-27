import React, { useContext, useState } from 'react'
import { SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native'
import { Header, Container, ViewWrapper, ProfileImage, ConfigFlat, RenderFlat, IconWrapper } from "./styles.js"
import { CGT } from '../../components/TextGradient/index.js';
import { Ionicons, MaterialIcons, FontAwesome, Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Review } from '../Review/index.js';
import { SignOut } from '../SignOut/index.js';



export function More({ navigation }) {
    const [isReviewModalVisible, setReviewModalVisible] = useState(false);
    const [isSignOutModalVisible, setSignOutModalVisible] = useState(false);

    const data = [
        { id: 1, routes: 'Profile' },
        { id: 2, routes: 'Training' },
        { id: 3, routes: 'Assessment' },
        { id: 4, routes: 'Payment' },
        { id: 5, routes: 'Enrollment' },
        { id: 6, routes: 'Notice' },
        { id: 7, routes: 'Attendance' },
        { id: 8, routes: 'Staff' },
        { id: 9, routes: 'Schedule' },
        { id: 10, routes: 'Favorite' },
        { id: 11, routes: 'Share' },
        { id: 12, routes: 'Review' },
        { id: 13, routes: 'Help' },
        { id: 14, routes: 'SignOut' },
    ];

    const IconsMore = {
        Profile: <Ionicons name="md-person" size={20} color="gray" />,
        Training: <MaterialIcons name="fitness-center" size={20} color="gray" />,
        Assessment: <MaterialIcons name="assessment" size={20} color="gray" />,
        Payment: <FontAwesome name="money" size={20} color="gray" />,
        Enrollment: <Entypo name="book" size={20} color="gray" />,
        Notice: <MaterialCommunityIcons name="bullhorn" size={20} color="gray" />,
        Attendance: <AntDesign name="checkcircleo" size={20} color="gray" />,
        Staff: <AntDesign name="checkcircleo" size={20} color="gray" />,
        Schedule: <Ionicons name="md-calendar" size={20} color="gray" />,
        Favorite: <AntDesign name="staro" size={20} color="gray" />,
        Share: <Ionicons name="md-share" size={20} color="gray" />,
        Review: <FontAwesome name="comment-o" size={20} color="gray" />,
        Help: <Ionicons name="md-help-circle" size={20} color="gray" />,
        SignOut: <AntDesign name="logout" size={20} color="gray" />,
    };


    const renderItem = ({ item }) => {
        return (
            <RenderFlat
                onPress={() => handlePress(item)}
            >
                <IconWrapper style={{ marginRight: '5%' }}>{IconsMore[item.routes]}</IconWrapper>
                <Text style={{ color: 'gray' }}>{item.routes}</Text>
            </RenderFlat>
        )
    };

    const handlePress = (item) => {
        const pages = {
            Profile: 'Profile',
            Training: 'Training',
            Assessment: 'Assessment',
            Payment: 'Payment',
            Enrollment: 'Enrollment',
            Notice: 'Notice',
            Attendance: 'Attendance',
            Staff: 'Staff',
            Schedule: 'Schedule',
            Favorite: 'Favorite',
            Share: 'Share',
            Review: 'Review',
            Help: 'Help',
            SignOut: 'SignOut',
        };
        if (item.routes === 'Review') {
            setReviewModalVisible(true);
        } else if (item.routes === 'SignOut') {
            setSignOutModalVisible(true)
        } else {
            if (pages[item.routes]) {
                navigation.navigate(pages[item.routes]);
            } else {
                Alert.alert(
                    "Funcionalidade Indisponível",
                    `A funcionalidade '${item.routes}' ainda não está disponível.`,
                    [{ text: "OK" }],
                    { cancelable: false }
                );
            }
        }
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <ViewWrapper>
                    <ProfileImage source={{ uri: ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCKq1XnPYYDaUIlwlsvmLPZ-9-rdK28RToA&usqp=CAU') }} />
                    <CGT style={{ fontSize: 18, fontWeight: 'bold' }}>Leonardo Augusto</CGT>
                    <Text style={{ fontSize: 11, fontWeight: '300' }}>Matricula: xxxx</Text>
                </ViewWrapper>
            </Header>
            <Container>
                <ConfigFlat
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: 50 }}
                />
            </Container>
            <Review
                isVisible={isReviewModalVisible}
                onClose={() => setReviewModalVisible(false)}
                navigation={navigation}
            />
            <SignOut
                isVisible={isSignOutModalVisible}
                onClose={() => setSignOutModalVisible(false)}
                navigation={navigation}

            />
            
        </SafeAreaView>
    )
}
