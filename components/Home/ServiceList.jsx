import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors'
import {collection, doc, getDocs, limit, query} from 'firebase/firestore'
import { db } from './../../configs/FirebaseConfig'
import { useEffect } from 'react'
import { useState } from 'react'
import ServiceListCard from './ServiceListCard'

export default function ServiceList() {

  const[serviceList, setServiceList] = useState([])

  useEffect(() =>{
    GetServiceList();
  },[])

  const GetServiceList= async ()=>{
    setServiceList([]);
    const q=query(collection(db,'List'), limit(10));
    const querySnapshot=await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setServiceList(prev=>[...prev, doc.data()]);

    })
  }
  return (
    <View>
      <View style={{ padding: 12, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <Text style={{
          fontSize: 20,
          fontFamily: 'outfit-bold'
        }}>
          Service List
        </Text>
        <Text style={{ color: Colors.DGREEN, fontFamily: 'outfit-medium' }}> View All</Text>
      </View>
      <FlatList
          data={serviceList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index})=>(
              <ServiceListCard
                key={index}
                service={item}
              />

          )}
      
      />

      
    </View>
  )
}