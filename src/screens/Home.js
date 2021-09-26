import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,FlatList,ActivityIndicator,Animated} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import HomeCard from '../components/HomeCard'
import Constant from 'expo-constants'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigation } from '@react-navigation/native';


const Home = (navigation)=>{
    const [value,setValue] = useState("")
    const [HomeCardData,setHomeCard] = useState([])
    const [loading,setLoading] = useState(false)
    const fetchData = () =>{
        setLoading(true)
        fetch(`https://api.stackexchange.com/2.3/questions?pagesize=20&order=desc&sort=activity&tagged=${value}&site=stackoverflow`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            setHomeCard(data.items)
        })
    }
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
              backgroundColor:"#F9a943"
        
          }}>
             
             <TextInput
             style={{
                 width:"70%",
                 backgroundColor:"#e6e6e6"
                }}
                value={value}
                onChangeText={(text)=>setValue(text)}
             />
             <Ionicons
              style={{color:"#e6e6e6"}}
             name="md-search"
             size={32}
             onPress={()=>fetchData()}
             />
          </View>
          {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null } 
          <FlatList
           data={HomeCardData}
           renderItem={({item})=>{
               return <HomeCard
                answer={item.link}
                question={item.title}
                tags={item.tags}
                ansCount={item.answer_count}
                votes={item.score}
                name={item.owner.display_name}
                time={item.creation_date}
                quesid={item.question_id}
               />
           }}
           keyExtractor={ (item, index) => index.toString() }
          /> 
      </View>
  )
}

export default Home