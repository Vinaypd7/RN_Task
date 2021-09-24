import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,FlatList,ActivityIndicator,Animated} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import HomeCard from '../components/HomeCard'
import Constant from 'expo-constants'

const Home = ()=>{
  return(
      <View style={{
          flex:1,
          marginTop:Constant.statusBarHeight,
          }}>
          <View style={{
              padding:10,
              flexDirection:"row",
              justifyContent:"space-around",
              elevation:5,
              backgroundColor:"orange"
        
          }}>
             
             <TextInput
             style={{
                 width:"70%",
                 backgroundColor:"#e6e6e6"
                }}
             />
             <Ionicons
              style={{color:"#e6e6e6"}}
             name="md-search"
             size={32}
             />
          </View>
            <HomeCard/> 
      </View>
  )
}

export default Home