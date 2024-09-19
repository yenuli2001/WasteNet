import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Colors} from './../../constants/Colors'
import { useRouter } from 'expo-router'
import SignedOut, { useAuth } from '@clerk/clerk-expo'

export default function MenuList() {

  const {signOut} = useAuth()

    const menuList=[
        {
            id:1,
            name: 'Client Requests',
            icon: require('./../../assets/images/analysis.png'),
            path: ''
            
        },
        {
            id:2,
            name: 'Assign Tasks',
            icon: require('./../../assets/images/qa.png'),
            path: '/tasks/add_tasks'
            
        },
        {
            id:3,
            name: 'Register Staff',
            icon: require('./../../assets/images/website.png'),
            path: '/register/add_staff'
            
        },
        {
            id:4,
            name: 'Progress',
            icon: require('./../../assets/images/tracking.png'),
            path: '/viewtasks/[vtasks]'
            
        },
        {
            id:5,
            name: 'View Staff',
            icon: require('./../../assets/images/growth.png'),
            path: '/viewstaff/vstaff'
            
        },
        {
          id:6,
          name: 'Logout',
          icon: require('./../../assets/images/logout.png'),
          path: 'logout'
          
      },
        


    ]

    const router=useRouter();

    const onMenuClick=(item) =>{
      if(item.path == 'logout'){
        signOut();
        return ;
      }
      router.push(item.path)
    }
  return (

    <View style={{marginTop:10, marginBottom:100}}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20
      }}>Category</Text>
      <FlatList
      data={menuList}
      numColumns={2}
      renderItem={({item, index})=>(
        <TouchableOpacity 
        onPress={()=>onMenuClick(item)}
        style={{
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius:15,
            borderWidth:1,
            padding:10,
            gap:5,
            flex:1,
            margin:10,
            borderColor:Colors.ICON_BG,
            backgroundColor:Colors.ICON_BG
        }}>
           <Image source={item.icon}
           style={{
             width: 45,
             height: 45
           }}
           />
           <Text style={{
               fontFamily:'outfit-medium',
               fontSize:16
           }}>{item.name}</Text>
        </TouchableOpacity>

      )} 
      />
      <Text style={{
        fontFamily: 'outfit',
        textAlign:'center', marginTop:50, 
        color:Colors.GRAY
      }}>Developed by Yenuli @ 2024</Text>
    </View>
  )
}