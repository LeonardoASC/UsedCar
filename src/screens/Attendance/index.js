import react, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Header, Container, CalendarBG, ResView } from "./styles.js";
import { Calendar } from 'react-native-calendars';
import { CGT } from '../../components/TextGradient/index.js';

export function Attendance() {
    const [selectedDate, setSelectedDate] = useState('');
    const [attendanceInfo, setAttendanceInfo] = useState({});

    
    const attendanceData = {
        '2024-01-01': { entry: '08:00', exit: '09:00' },
        '2024-01-03': { entry: '09:00', exit: '10:00' },
        '2024-01-04': { entry: '09:00', exit: '10:00' },
    };

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
        if (attendanceData[day.dateString]) {
            setAttendanceInfo(attendanceData[day.dateString]);
        } else {
            setAttendanceInfo({});
        }
    };

    const markedDates = Object.keys(attendanceData).reduce((acc, date) => {
        acc[date] = { 
            marked: true, 
            dotColor: '#e91e63',
            ...(selectedDate === date && { selected: true, selectedColor: '#e91e63', selectedTextColor: '#fff' })
        };
        return acc;
    }, {});

    if (selectedDate && !markedDates[selectedDate]) {
        markedDates[selectedDate] = {
            selected: true,
            disableTouchEvent: true,
            selectedColor: '#e91e63',
            selectedTextColor: '#fff'
        };
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Your Attendance</Text>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', letterSpacing: 3 }}>ff</Text>
                </View>
            </Header>
            <Container>
                <CalendarBG >
                    <Calendar
                        // Marque a data atual
                        current={new Date().toISOString().split('T')[0]}
                        // Chame uma função quando uma data é pressionada
                        onDayPress={onDayPress}
                        // Personalize o estilo do calendário
                        markedDates={markedDates}

                        theme={{
                            backgroundColor: '#000',
                            calendarBackground: '#fff',
                            textSectionTitleColor: '#b6c1cd',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#e91e63',
                            dayTextColor: '#2d4150',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: '#FFA500',
                            monthTextColor: '#0000ff',
                            textDayFontFamily: 'monospace',
                            textMonthFontFamily: 'monospace',
                            textDayHeaderFontFamily: 'monospace',
                            textDayFontWeight: '100',
                            monthTextColor: '#000',
                            // textMonthFontWeight: 'bold',
                            textDayHeaderFontWeight: '300',
                            textDayFontSize: 16,
                            textMonthFontSize: 16,
                            textDayHeaderFontSize: 16
                        }}
                    />
                </CalendarBG>
                <ResView>
                    {attendanceInfo.entry && attendanceInfo.exit ? (
                        <CGT>Entrada: {attendanceInfo.entry} / Saída: {attendanceInfo.exit}</CGT>
                    ) : (
                        <CGT>Nenhuma informação de entrada/saída para este dia.</CGT>
                    )}
                </ResView>
            </Container>
        </SafeAreaView>
    )
}