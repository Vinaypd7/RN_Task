import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,FlatList,ActivityIndicator,Animated} from 'react-native';
import HTMLView from 'react-native-htmlview';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import moment from 'moment';

const styles = StyleSheet.create({
    code: {
        fontWeight: '500',
        color: '#FF3366',
        backgroundColor: '#DDDDDD'
    }
});

const AnsCard = (props)=>{
  return (
      <View style={{ flex: 1, marginBottom: 10,margin:4 }}>
          <View style={{
              flexDirection: "row",
              margin: 5,
              borderWidth: 1,
              borderColor: "white",
              borderBottomColor: "grey"
          }}>
              <Text style={{ color: "grey", fontSize: 15, padding: 3 }}>{props.ansCount}Answers</Text>
          </View>

          <HTMLView value={props.ans} 
          stylesheet={styles}
          />
          <View style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "white",
              borderTopColor: "grey",
              borderBottomColor: 'grey'
          }}>
              <MaterialCommunityIcons name="account-box" size={25} color="grey" />
              <Text style={{
                  color: "#065c97"
              }}>{props.name}</Text>
              <Text style={{
                  color: "grey", paddingRight: 5, marginLeft: 30
              }}>answered {moment.unix(props.time).fromNow()}</Text>
          </View>


      </View>
    
  );
}

export default AnsCard