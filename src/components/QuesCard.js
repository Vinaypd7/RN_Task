import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,Dimensions} from 'react-native';
import HTMLView from 'react-native-htmlview';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import moment from 'moment';

const styles = StyleSheet.create({
    code: {
        fontFamily: 'Courier',
        fontWeight: '300',
        color: '#FF3366',
        backgroundColor: '#DDDDDD'
    }
});

const QuesCard = (props)=>{
    return (
        
        <View style={{ flex: 1, marginBottom: 10,margin:4 }}>
            <View style={{
                flexDirection: "row",
                margin: 5,
                borderWidth:1,
                borderColor:"white",
                borderBottomColor:"grey" 
            }}>
                <View style={{
                    flexDirection: "column",
                    borderWidth:1,
                    borderColor:"white",
                    borderRightColor:"grey"
                }}>
                    <MaterialCommunityIcons name="triangle-outline" size={25} color="grey" />
                    <Text style={{ color: "grey", fontSize: 15, padding: 3 }}>{props.votes}</Text>
                </View>
            
            <View style={{
                marginLeft: 10,
                flexDirection: "row"
            }}>
                <Text style={{
                    fontSize: 18,
                    width: Dimensions.get("screen").width - 50,
                    color: "#065c97"
                }}
                >{props.question}</Text>
            </View>
            </View>
           
            <HTMLView value={props.ques}
             stylesheet={styles}/>

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
                }}>asked {moment.unix(props.time).fromNow()}</Text>
            </View>
                
        </View>
        
    );
            
}


export default QuesCard