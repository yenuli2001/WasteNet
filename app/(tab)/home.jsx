import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import ServiceList from '../../components/Home/ServiceList'

export default function home() {
  return (
    <ScrollView>
      {/* Header */}
      <Header/>

      {/* Slider */}
       <Slider/>
      {/* Category */}

      <Category/>

      {/* Popular business list */}

      <ServiceList/>

      <View style={{height:50}}>

      </View>
    </ScrollView>
  )
}