import React from 'react';
import {StyleSheet, Text, View,StatusBar,SafeAreaView,Modal,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import * as Animatable from 'react-native-animatable';
import { white } from 'color-name';


function Message(){
    const logo = require('../assets/sp.png');
    return(

        <View style={styles.cont}>
        <Animatable.View animation="bounceIn" style={styles.top}>
            <View style={styles.mylogo}>
                    <Animatable.Image animation='bounceInDown' source={logo} />
            </View>

        </Animatable.View>

        <Animatable.View animation="bounceInUp" style={styles.down}>
                        <View>
                           <Text style={{fontSize:20,fontWeight:'bold'}}>Inbox</Text> 
                        </View> 
            <ScrollView style={{flex:1,flexDirection:'column',paddingTop:50,}}>
                       
                    <View style={{paddingBottom:60}}>
                    <View style={styles.card}>
                    <View style={{borderRightColor:'indigo',borderRightWidth:1,width:50,height:100,alignItems:'center',justifyContent:'center'}}>
                       <Icon name='envelope'  size={40} />
                    </View>
                        <View style={{flexDirection:'column'}}>
                        <View style={{width:275,height:25,borderBottomColor:'indigo',borderBottomWidth:1,alignItems:'center'}}>
                        <Text>11th June, 2020</Text>
                    </View>
                    <Text style={{ padding:4}}>this is some random message for test but would be changed later</Text>

                        </View>
                </View>

                <View style={styles.card}>
                    <View style={{borderRightColor:'indigo',borderRightWidth:1,width:50,height:100,alignItems:'center',justifyContent:'center'}}>
                       <Icon name='envelope'  size={40} />
                    </View>
                        <View style={{flexDirection:'column'}}>
                        <View style={{width:275,height:25,borderBottomColor:'indigo',borderBottomWidth:1,alignItems:'center'}}>
                        <Text>10th June, 2020</Text>
                    </View>
                    <Text style={{ padding:4}}>this is some random message for test but would be changed later</Text>

                        </View>
                </View>

                <View style={styles.card}>
                    <View style={{borderRightColor:'indigo',borderRightWidth:1,width:50,height:100,alignItems:'center',justifyContent:'center'}}>
                       <Icon name='envelope'  size={40} />
                    </View>
                        <View style={{flexDirection:'column'}}>
                        <View style={{width:275,height:25,borderBottomColor:'indigo',borderBottomWidth:1,alignItems:'center'}}>
                        <Text>9th June, 2020</Text>
                    </View>
                    <Text style={{ padding:4}}>this is some random message for test but would be changed later</Text>

                        </View>
                </View>

                    </View>


               
            </ScrollView>


        </Animatable.View>


        </View>
    );

}

const styles = StyleSheet.create({
    cont:{
        flex:1,
        backgroundColor:'indigo',
    },

    top:{
        backgroundColor:'indigo',
      
        flex:1,
        alignItems:"center",
        justifyContent:'center',
       

    
    },

    down:{
        flex:2,
        backgroundColor:'white',
        borderTopLeftRadius: 200,
        alignItems:"center",
        justifyContent:'center',
        padding:10,

    },
    mylogo:{
        backgroundColor:'#ffff',
        width: 100,
        height:100,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:50,

    },
    card:{
        width:330,
        maxWidth:'100%',
        height:100,
        borderColor:'indigo',
        borderWidth:3,
        flexDirection:'row',
       
        marginLeft:10,
        borderRadius:10,
        marginVertical:10,


    }

})


export default Message;

