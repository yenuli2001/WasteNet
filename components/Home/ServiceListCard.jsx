import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function ServiceListCard({ service }) {
  return (
    <View style={{
      marginLeft: 20,
      padding: 10,
      backgroundColor:'#D9D9D9',
      borderRadius: 15
    }}>
      <Image source={{ uri: service?.imageUrl }}
        style={{
          width: 200,
          height: 130,
          borderRadius: 15
        }}
      />
      <View style={{ marginTop: 7, gap: 7 }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 17
        }}>{service.name}</Text>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 13,
          color: Colors.GRAY
        }}>{service.address}</Text>
      </View>

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

        <Text style={{
          fontFamily: 'outfit',
          backgroundColor: Colors.DGREEN,
          color: '#fff',
          padding: 4,
          fontSize:10,
          borderRadius:5,

        }}>{service.category}</Text>
      </View>
    </View>

  )
}