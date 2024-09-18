import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker

export default function AddTasks() {
    const router = useRouter();
    const imageUrl = 'https://i.pinimg.com/236x/79/8f/a5/798fa5a60e05706361958a7d97adc4e8.jpg';

    const [cusName, setCusName] = useState('');
    const [phone, setPhone] = useState('');
    const [area, setArea] = useState('');
    const [noOfStaff, setNoOfStaff] = useState('');
    const [date, setDate] = useState(null); // Initial value is null so we can show "Date" as a placeholder
    const [showDatePicker, setShowDatePicker] = useState(false); // Toggle DatePicker visibility

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setDate(selectedDate.toLocaleDateString()); // Save only the date part
        }
    };

    function create() {

        // Validation to check if any field is empty
        if (!cusName || !phone || !area || !noOfStaff || !date) {
            Alert.alert('Please fill all the fields before submitting');
            return;
        }
        
        addDoc(collection(db, "Assign"), {
            cusName: cusName,
            phone: phone,
            area: area,
            noOfStaff: noOfStaff,
            date: date ? date.toLocaleDateString() : '' // Save date in a human-readable format or empty if not selected
        }).then(() => {
            console.log('Data submitted');
            Alert.alert('Success', 'Task assigned successfully');
        }).catch((error) => {
            console.log(error);
            Alert.alert('Error', 'Something went wrong');
        });
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#BDD695' }}>
            <Image source={{ uri: imageUrl }}
                style={{
                    width: '100%',
                    height: 200,
                    borderRadius: 2,
                    marginBottom: 5
                }}
            />

            {/* Back Button */}
            <View style={{ marginTop: 1, padding: 10 }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={40} color="black" />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    padding: 10,
                    fontSize: 20
                }}>Assign Tasks</Text>
            </View>

            {/* Form Section */}
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 20,
                }}
            >
                {/* Form Inputs */}
                <View>
                    <TextInput value={cusName} onChangeText={(cusName) => setCusName(cusName)}
                        placeholderTextColor='gray' placeholder='Customer Name....'
                        style={{
                            padding: 15,
                            borderWidth: 1,
                            borderRadius: 5,
                            width: '90%',
                            alignSelf: 'center',
                            fontSize: 17,
                            backgroundColor: '#fff',
                            marginTop: 10,
                            borderColor: '#fff',
                            fontFamily: 'outfit'
                        }}
                    />

                    {/* Date Picker Input */}
                    <TouchableOpacity
                        onPress={() => setShowDatePicker(true)} // Open the date picker
                        style={{
                            padding: 15,
                            borderWidth: 1,
                            borderRadius: 5,
                            width: '90%',
                            alignSelf: 'center',
                            fontSize: 17,
                            backgroundColor: '#fff',
                            marginTop: 10,
                            borderColor: '#fff',
                            fontFamily: 'outfit',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text style={{ fontSize: 17, color: date ? 'black' : 'gray' }}>
                        {date || 'Date....'} {/* Display "Date" as a placeholder */}
                        </Text>
                        <Ionicons name="calendar" size={20} color="gray" />
                    </TouchableOpacity>

                    {/* DateTimePicker */}
                    {showDatePicker && (
                        <DateTimePicker
                            value={date ? new Date(date) : new Date()}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}

                    <TextInput value={phone} onChangeText={(phone) => setPhone(phone)}
                        placeholderTextColor='gray' placeholder='Phone....'
                        style={{
                            padding: 15,
                            borderWidth: 1,
                            borderRadius: 5,
                            width: '90%',
                            alignSelf: 'center',
                            fontSize: 17,
                            backgroundColor: '#fff',
                            marginTop: 10,
                            borderColor: '#fff',
                            fontFamily: 'outfit'
                        }}
                    />
                    <TextInput value={area} onChangeText={(area) => setArea(area)}
                        placeholderTextColor='gray' placeholder='Area....'
                        style={{
                            padding: 15,
                            borderWidth: 1,
                            borderRadius: 5,
                            width: '90%',
                            alignSelf: 'center',
                            fontSize: 17,
                            backgroundColor: '#fff',
                            marginTop: 10,
                            borderColor: '#fff',
                            fontFamily: 'outfit'
                        }}
                    />
                    <TextInput value={noOfStaff} onChangeText={(noOfStaff) => setNoOfStaff(noOfStaff)}
                        placeholderTextColor='gray' placeholder='No of staff....'
                        style={{
                            padding: 15,
                            borderWidth: 1,
                            borderRadius: 5,
                            width: '90%',
                            alignSelf: 'center',
                            fontSize: 17,
                            backgroundColor: '#fff',
                            marginTop: 10,
                            borderColor: '#fff',
                            fontFamily: 'outfit'
                        }}
                    />
                </View>
            </ScrollView>

            {/* Submit Button */}
            <View>
                <TouchableOpacity onPress={create}
                    style={{
                        backgroundColor: Colors.BTN,
                        width: '50%',
                        alignSelf: 'center',
                        padding: 15,
                        borderRadius: 5,
                        marginTop: 20,
                        marginBottom: 20
                    }}
                >
                    <Text style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: 17,
                        fontFamily: 'outfit-medium'
                    }}>
                        Assign
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
