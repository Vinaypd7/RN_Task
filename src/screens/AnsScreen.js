import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import QuesCard from '../components/QuesCard'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native';
import AnsCard from '../components/AnsCard';

const AnsScreen = ({ route,navigation}) => {
    const { quesid } = route.params
    const [QuesCardData, setQuesCard] = useState([])
    const [AnsCardData, setAnsCard] = useState([])

    const fetchQues = () => {
        fetch(`https://api.stackexchange.com/2.3/questions/${quesid}?order=desc&sort=activity&site=stackoverflow&filter=withbody`)
            .then(res => res.json())
            .then(data1 => {
                setQuesCard(data1.items)    
            })
    }
    const fetchAns = () => {
        fetch(`https://api.stackexchange.com/2.3/questions/${quesid}/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody`)
            .then(res => res.json())
            .then(data2 => {
                setAnsCard(data2.items)
            })
    }
    useEffect(() => {
        fetchQues(),
            fetchAns()
    }, [])

    const renderItem1=useCallback(({ item }) => {
        return <QuesCard
            question={item.title}
            votes={item.score}
            name={item.owner.display_name}
            time={item.creation_date}
            quesid={item.question_id}
            ques={item.body}/>
    })

    const renderItem2=useCallback(({ item }) => {
        return <AnsCard
            ansCount={item.answer_count}
            votes={item.score}
            name={item.owner.display_name}
            profile={item.owner.link}
            time={item.creation_date}
            quesid={item.question_id}
            ans={item.body}
        />
        
    })
    const keyExtractor=useCallback((item, index) => index.toString())

    return (
        <View style={{
            flex: 1,
            marginTop: Constant.statusBarHeight
        }}>
            <View style={{
              padding:5,
              flexDirection:"row",
              justifyContent:"space-around",
              elevation:5,
              backgroundColor:"#F9a943"
        
          }}>
             <Ionicons
             style={{color:"#e6e6e6"}}
             name="md-arrow-back" size={32}
             onPress={()=>navigation.goBack()}
             />
             <Text
             style={{
                 width:"70%",
                 fontSize:22,
                 fontWeight:'bold',
                 color:"#e6e6e6"
                }}
             >Answer Section</Text>
             </View>
                <ScrollView>
                <FlatList
                    data={QuesCardData}
                    renderItem={ renderItem1 }
                    keyExtractor={keyExtractor}
                />
           
                <FlatList
                    data={AnsCardData}
                    renderItem={ renderItem2 }
                    keyExtractor={keyExtractor}
                />
            </ScrollView>
        </View>
    )
    
}

export default AnsScreen


