import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Chip } from 'react-native-paper';

const dataSource = [
  "Volvo", "Alpha Sports", "Ford", "Mazda", "Rosenbauer"]

const HomeCard = () => {
  return (
    <ScrollView>
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
              <Text style={{ color: "grey", fontSize: 15, padding: 3 }}>0</Text>
              <MaterialCommunityIcons name="triangle-outline" size={25} color="grey" />
            </View>

            <View style={{
              flexDirection: "row",
            }}>

              <Text style={{ color: "grey", fontSize: 15, padding: 3 }}>0</Text>
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
                color: "#2596be"
              }}
                ellipsizeMode="tail"
                numberOfLines={3}
              >How to identify the topic level while processing an image in a DITA OT template and add prefix text to the image</Text>

              <View style={{ flex: 1,flexDirection:"row",flexWrap: 'wrap'}}>
                {
                  dataSource.map((item, index) => {
                    return (
                      <View style={{
                        margin: 3,
                        flexWrap: 'wrap' 
                      }}>
                        <Chip
                          key={index}
                          mode="outlined"
                          height={25}
                          textStyle={{ color: 'white', fontSize: 14}} 
                          style={{ backgroundColor: "grey"}}
                          >
                          {item}
                        </Chip>
                      </View>
                    );
                  })}
              </View>
              <View style={{flexDirection: "row"}}>
              <Text style={{
                color: "grey",paddingRight:5
              }}>10 mins ago</Text>
              <Text style={{
                color: "#2596be"
              }}>vpd</Text>
              </View>
            </View>
          </View>
        </View>
        


      </View>
    </ScrollView>
  )
}

export default HomeCard