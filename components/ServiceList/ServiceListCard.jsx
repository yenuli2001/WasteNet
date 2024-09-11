import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'


export default function ServiceListCard({service}) {
  const router = useRouter();
  return (
    <TouchableOpacity style={{
        padding:10,
        margin:10,
        borderRadius:5,
        backgroundColor:'#D9D9D9',   //style={{backgroundColor:'#BDD695'}}
        display: 'flex',
        flexDirection: 'row',
        gap:10,
    }}
    onPress={()=>router.push('/servicedetail/' + service.id )}
    >
      
      <Image source={{uri:service.imageUrl}}
      style={{
          width:120,
          height:120,
          borderRadius:15
      }}/>

      <View style={{
        flex: 1,
        gap:7
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontsize: 20
        }}>{service.name}</Text>
        <Text style={{
          fontFamily: 'outfit',
          color:Colors.GRAY,
          fontSize:15
        }}>{service.address}</Text>
        <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
      }}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
          <Image source={require('./../../assets/images/star.png')}
            style={{
              width: 15,
              height: 15
            }}
          />
          <Text style={{ fontFamily: 'outfit' }}>4.5</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
    
  )
}