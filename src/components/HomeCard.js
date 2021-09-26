import React,{useState} from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Chip } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

const HomeCard = (props) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
       onPress={()=>navigation.navigate("AnsScreen",{quesid:props.quesid})}
      >
      <View style={{ marginBottom: 10 }}
      >
        <View style={{
          flexDirection: "row",
          margin: 5
        }}>
          <View style={{
            flexDirection: "column"
          }}>

            <View style={{
              flexDirection: "row",
            }}>
              <Text style={{ color: "grey", fontSize: 15, padding: 3 }}>{props.votes}</Text>
              <MaterialCommunityIcons name="triangle-outline" size={25} color="grey" />
            </View>

            <View style={{
              flexDirection: "row",
            }}>

              <Text style={{ color: "grey", fontSize: 15, padding: 3 }}>{props.ansCount}</Text>
              <MaterialCommunityIcons name="message-reply-text" size={25} color="grey" />
            </View>
          </View>
          <View style={{
            flexDirection: "row"
          }}>

            <View style={{
              marginLeft: 10
            }}>
              <Text style={{
                fontSize: 18,
                width: Dimensions.get("screen").width - 50,
                color: "#065c97"
              }}
              >{props.question}</Text>

              <View style={{ flex: 1,flexDirection:"row",flexWrap: 'wrap'}}>
                {
                  props.tags.map((tag, index) => {
                    return (
                      <View style={{
                        margin: 3,
                        flexWrap: 'wrap',
                      }}>
                        <Chip
                          key={index}
                          mode="outlined"
                          height={28}
                          textStyle={{ color: '#065c97', fontSize: 14}} 
                          style={{ backgroundColor: "#E5e6ee"}}
                          >
                          {tag}
                        </Chip>
                      </View>
                    );
                  })}
              </View>
              <View style={{flexDirection: "row"}}>
              <Text style={{
                color: "grey",paddingRight:5
              }}> {moment.unix(props.time).fromNow()}</Text>
  
              <Text style={{
                color: "#065c97"
              }}>{props.name}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default HomeCard