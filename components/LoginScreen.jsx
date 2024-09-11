import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Colors } from '@/constants/Colors'
import { TouchableOpacity } from 'react-native'
import { useWarmUpBrowser } from './../hooks/useWarmUpBrowser'
import * as WebBrowser from'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'


WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();
    const { startOAuthFlow} = useOAuth({strategy: "oauth_google"});
    const onPress = React.useCallback(async() => {
        try {
            const{createdSessionId, signIn, signUp, setActive} =
            await startOAuthFlow();

            if(createdSessionId){
                setActive({session: createdSessionId});
            } else{

            }
        } catch (err) {
            console.error("OAuth error", err)
        }
    }, [])
  return (
    <View>
        <View style={{
            display:'flex',
            alignItems:'center',
            margin:100
        }}>
       <Image source={require('./../assets/images/login2.jpeg')} 
         style={{
            width: 220,
            height:200,
            borderRadius:20,
            borderWidth:6,
            borderColor:'#000'
            

         }} /> 
         </View>

         <View style={{backgroundColor:'#fff', padding:20, marginTop:-20}}>
            <Text style={{
                fontSize:30,
                fontFamily:'outfit-bold',
                textAlign:'center'
            }}>Gargabe 
                <Text style={{
                    color:Colors.PRIMARY
                }}> management</Text> App</Text>
                <Text style={{fontSize:15, fontFamily: 'outfit', textAlign:'center', marginVertical:15, color:Colors.GRAY}}>Find your service and get the work done</Text>
                <TouchableOpacity style={styles.btn} 
                   onPress={onPress}
                >
                    <Text style={{textAlign:'center', color:'#fff', fontFamily:'outfit' }}>Let's get started</Text>
                </TouchableOpacity>
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
    btn:{
      backgroundColor:Colors.DGREEN,
      padding:16,
      borderRadius:99,
      marginTop:20
    }
})