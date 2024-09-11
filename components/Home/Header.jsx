import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import {useUser} from '@clerk/clerk-expo'
import {Colors} from './../../constants/Colors'
import {Ionicons} from '@expo/vector-icons';

export default function Header() {

    const {user}=useUser();
  return (
    <View>
    <View style={{
        padding:20,
        paddingTop:20,
        backgroundColor: Colors.GREEN,
        borderBottomLeftRadius: 11,
        borderBottomRightRadius: 11
    }}>
      <View style={{
              display:'flex',
              flexDirection:'row',
              alignItems:'center',
              gap:10
           }}>
           <Image source={{uri:user?.imageUrl}}
           style={{
            width:45,
            height:45,
            borderRadius:99
           }}
            />

           <View>
             <Text style={{
                color: '#000'
             }}>Welcome,</Text>
             <Text style={{
                fontFamily:'outft-medium',
                color: '#000',
                fontSize:19
             }}>{user?.fullName}</Text>
           </View>
      </View>

      {/* serach bar */}
      <View style={{
        display:'felx',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        backgroundColor: '#a1a9a4',
        padding:10,
        marginVertical:10,
        marginTop:15,
        borderRadius:8
    
      }}>
      <Ionicons name="search" size={24} color="black"/>
      <TextInput placeholder='Search....'
      style={{
        fontFamily:'outfit',
        fontSize:16
      }}/>
      </View>
    </View>
    </View>
  )
}