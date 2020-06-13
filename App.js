import React , {useState} from 'react';
import { StyleSheet, Text, View,StatusBar,SafeAreaView,Modal,Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import Message from './screen/Message';


const Tab = createBottomTabNavigator();


function Feed() {

  const [isvisible,setIsvisible] = useState(false);

  const mypic = require ('./assets/load.gif');
 
  const showsping = ()=>{
    setIsvisible(true);
  }

  const hideSpin=()=>{
    setIsvisible(false);
  }
  return (
    <>
    <StatusBar barStyle='dark-content' />
    
  <SafeAreaView  style={{flex:1}}>
  <Modal visible={isvisible} transparent={true} style={{backgroundColor:'rgba(255,255,255,0.5'}}>
     <View style={ {flex:1,alignItems: 'center',justifyContent:'center'}} > 
        <Image source={mypic}  style={{width:100,height:100}} />
     </View>
      </Modal>
   

    <WebView source={{ uri: 'https://sarpsee.com/' }}
    startInLoadingState={true}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    onLoadStart={showsping}
    onLoad={hideSpin}
   
    renderLoading={
      showsping
      
    //   ()=>(
    //   <ActivityIndicator 
    //   color='black'
    //   size='large'

    //   style={{flex:1}}
      
    //   />
    // )

    }
    />
   
</SafeAreaView>
</>

  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}



function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Message}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}




const Stack = createStackNavigator();



export default function App() {
  return (

    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
