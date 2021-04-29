import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StatusBar, Image, Dimensions, View } from 'react-native';



import {
  Container,
  Button,
  Content, 
  Footer,
  Icon 

} from 'native-base';

import { Explore } from './Containers/Explore'

import { Footers } from './Components/Footers'
import { Beautips } from './Containers/Beautips'
import { Bookings } from './Containers/Bookings'
import { Me } from './Containers/Me'
import { Details } from './Containers/Details'
import { Pay } from "./Containers/Pay";
import { Chat } from "./Containers/Chat"

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


const win = Dimensions.get('window');
const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const ArNail = ({ navigation }) => {
  return (
    <View>
      <View style={{width:win.width,height:win.height}} onTouchEnd={() => navigation.goBack()}>
        <Image
          source={{uri:
          "https://nailexpress.oss-accelerate.aliyuncs.com/5/5.png"}}
          style={{width:"100%",height:"100%",resizeMode:"stretch"}}
        />
        
      </View>
      <Button
          style={{zIndex:999, alignSelf:"flex-end", bottom:"35%", 
            borderTopLeftRadius:10,borderBottomLeftRadius:10,borderTopRightRadius:0,
            borderBottomRightRadius:0,
            backgroundColor:"#FFFFFF"
          }}
          onPress={() => navigation.navigate("Chat")}
      ><Icon name="share-2" type="Feather" style={{color: "#FF6D6D"}}></Icon></Button>
   </View>
  )
}


const MainPages = () => {
  return (
    <Tab.Navigator tabBar={ props => 
      <Footer style={{backgroundColor:"#FFF8F1", borderWidth:0}}>
        <Footers
          {...props}
        />
      </Footer>
    }>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Beautips" component={Beautips} />
      <Tab.Screen name="Bookings" component={Bookings} />
      <Tab.Screen name="Me" component={Me} />
    </Tab.Navigator>
  )
}

export default class App extends Component {
  

  render() {
    return (
        <NavigationContainer>
          <StatusBar hidden />
          <RootStack.Navigator mode="modal">
            <RootStack.Screen
              name="MainPages"
              component={MainPages}
              options={{ headerShown: false }}
            />
            <RootStack.Screen 
              name="ArNail" 
              component={ArNail}
              options={{ headerShown: false }}
            />
            <RootStack.Screen 
              name="Chat" 
              component={Chat}
              options={{ headerShown: false }}
            />
            <RootStack.Screen 
              name="Details" 
              component={Details}
              options={{ headerShown: false }}
            />
            <RootStack.Screen 
              name="Pay" 
              component={Pay}
              options={{ headerShown: false }}
            />
          </RootStack.Navigator> 

          
        </NavigationContainer>
    );
  }
}

