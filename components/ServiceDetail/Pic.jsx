import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';

export default function Pic({ service }) {

  const router = useRouter();
  // Ensure that service and service.imageUrl exist before rendering the Image
  if (!service || !service.imageUrl) {
    return (
      <View>
        {/* Text wrapped inside <Text> */}
        <Text>No image available</Text>
      </View>
    );
  }

  return (
    <View>
      {/* Only render the Image if imageUrl is defined */}
      <Image
        source={{ uri: service.imageUrl }}
        style={{
          width: '100%',
          height: 200,
          borderRadius: 9

        }}
      />
      <View style={{
        marginTop:10,
        padding:10
      }}>
        <TouchableOpacity onPress={() =>router.back()}>
        <AntDesign name="arrowleft" size={40} color="black" />
        </TouchableOpacity>
      
      </View>
    </View>
  )
}
