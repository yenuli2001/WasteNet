import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import ServiceListCard from '../../components/ServiceList/ServiceListCard';
import { Colors } from '../../constants/Colors';

export default function ServiceListByCategory() {
  
    const navigation=useNavigation();
    const{category}=useLocalSearchParams();

    const[serviceList, setServiceList] = useState([]);

    const[loading, setLoading] = useState(false);
  
    useEffect(()=>{
          navigation.setOptions({
            headerShown:true,
            headerTitle: category
          })
          getServiceList();
    },[]);

    /**
     * Use to get service list by category
     */
    const getServiceList = async() =>{
        setLoading(true);
        const q = query(collection(db, 'List'), where("category", '==', category))
        const querySnapShot= await getDocs(q);

        querySnapShot.forEach((doc) => {
            console.log(doc.data())
            setServiceList(prev=>[...prev,{id:doc?.id,...doc.data()}])
        })

        setLoading(false);
    }
  
    return (
    <View>
      {serviceList?.length>0 && loading==false?
      <FlatList
         data={serviceList}
         onRefresh={getServiceList}
         refreshing={loading}
         renderItem={({item,index})=>(
            <ServiceListCard
               service={item}
               key={index}
            />
         )}
      />:loading?<ActivityIndicator
       style={{
         marginTop: '70%',
       }}
           size={'large'}
           color={Colors.GREEN}
           
      />:

      <Text style={{
        fontSize:20,
        fontFamily: 'outfit-medium',
        color: Colors.GRAY,
        textAlign: 'center',
        marginTop: '50%'
      }}>
          No service found
        </Text>}
    </View>
  )
}
