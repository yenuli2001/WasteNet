import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Platform, Alert, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { db } from './../../configs/FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import DateTimePicker from '@react-native-community/datetimepicker'; // Import DateTimePicker
import { Picker } from '@react-native-picker/picker';

export default function AddStaff() {
    const router = useRouter();
    const imageUrl = 'https://i.pinimg.com/564x/bc/d4/d8/bcd4d8028a16a6b4e3e0ecbcfd2ca437.jpg';
    
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState(null); // Use null initially
    const [nic, setNic] = useState('');
    const [phone, setPhone] = useState('');
    const [salary, setSalary] = useState('');
    const [address, setAddress] = useState('');
    const [workingDays, setWorkingDays] = useState('');
    const [gender, setGender] = useState('');
    const [role, setRole] = useState('');

    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setBirthDate(selectedDate.toLocaleDateString()); // Save only the date part
        }
    };

    function create() {
        addDoc(collection(db, "Register staff"), {
            name: name,
            birthDate: birthDate,
            nic: nic,
            salary: salary,
            phone: phone,
            gender: gender,
            role: role,
            address: address,
            workingDays: workingDays
        }).then(() => {
            console.log('Data submitted');
            Alert.alert('Success', 'Staff member registered successfully!');
        }).catch((error) => {
            console.log(error);
            Alert.alert('Error', 'Something went wrong');
        });
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#BDD695' }}>
            {/* Header Image */}
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

            {/* Title */}
            <View>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    padding: 10,
                    fontSize: 20
                }}>Register Staff</Text>
            </View>

            {/* Form Section */}
            <ScrollView 
                contentContainerStyle={{
                    paddingBottom: 20, 
                }}
            >
                {/* Form Inputs */}
                <View>
                    <TextInput value={name} onChangeText={(name) => setName(name)} placeholderTextColor='gray' placeholder='Name....'
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
                    
                    {/* Birth Date Input */}
                    <TouchableOpacity
                        onPress={() => setShowDatePicker(true)}
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
                        <Text style={{ fontSize: 17, color: birthDate ? 'black' : 'gray' }}>
                            {birthDate || 'Birth Date....'}
                        </Text>
                        <Ionicons name="calendar" size={20} color="gray" />
                    </TouchableOpacity>

                    {/* DateTimePicker */}
                    {showDatePicker && (
                        <DateTimePicker
                            value={birthDate ? new Date(birthDate) : new Date()}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}

                    <TextInput value={address} onChangeText={(address) => setAddress(address)} placeholderTextColor='gray' placeholder='Address....'
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
                    <TextInput value={nic} onChangeText={(nic) => setNic(nic)} placeholderTextColor='gray' placeholder='NIC....'
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
                    <TextInput value={phone} onChangeText={(phone) => setPhone(phone)} placeholderTextColor='gray' placeholder='Phone....'
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
                    <TextInput value={salary} onChangeText={(salary) => setSalary(salary)} placeholderTextColor='gray' placeholder='Salary....'
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
                    <TextInput value={workingDays} onChangeText={(workingDays) => setWorkingDays(workingDays)} placeholderTextColor='gray' placeholder='Working Days....'
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

                    {/* Gender Picker */}
                    <View style={{
                        padding: 15,
                        borderWidth: 1,
                        borderRadius: 5,
                        width: '90%',
                        alignSelf: 'center',
                        backgroundColor: '#fff',
                        marginTop: 10,
                        borderColor: '#fff',
                        fontFamily: 'outfit',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Picker
                            selectedValue={gender}
                            onValueChange={(itemValue) => setGender(itemValue)}
                            style={{
                                width: '90%', 
                                height: Platform.OS === 'ios' ? undefined : 50, 
                                fontSize: 17,
                                color: '#000'
                            }}
                        >
                            <Picker.Item label="Gender" value="" color="gray" />
                            <Picker.Item label="Female" value="Female" />
                            <Picker.Item label="Male" value="Male" />
                        </Picker>
                        <TouchableOpacity onPress={() => console.log('Gender Picker Opened')}>
                            <Ionicons name="chevron-down" size={20} color="gray" />
                        </TouchableOpacity>
                    </View>

                    {/* Role Picker */}
                    <View style={{
                        padding: 15,
                        borderWidth: 1,
                        borderRadius: 5,
                        width: '90%',
                        alignSelf: 'center',
                        backgroundColor: '#fff',
                        marginTop: 10,
                        borderColor: '#fff',
                        fontFamily: 'outfit',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Picker
                            selectedValue={role}
                            onValueChange={(itemValue) => setRole(itemValue)}
                            style={{
                                width: '90%', 
                                height: Platform.OS === 'ios' ? undefined : 50, 
                                fontSize: 17,
                                color: '#000'
                            }}
                        >
                            <Picker.Item label="Role" value="" color="gray" />
                            <Picker.Item label="Cleaner" value="Cleaner" />
                            <Picker.Item label="Driver" value="Driver" />
                            <Picker.Item label="Office" value="Office" />
                        </Picker>
                        <TouchableOpacity onPress={() => console.log('Role Picker Opened')}>
                            <Ionicons name="chevron-down" size={20} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            

            <View>
                {/* Register Button */}
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
                            Register
                        </Text>
                    </TouchableOpacity>
            </View>
            
        </View>
        
    );
}
