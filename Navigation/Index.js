import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import Home from '../Screens/Home';
import Testing from '../Screens/Testing';
import Beds from '../Screens/Beds';
import Contact from '../Screens/Contact';
import Notification from '../Screens/Notification';

const Tab = createMaterialBottomTabNavigator();

const Index = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#1a6ed6"
                inactiveColor="#5c5f6e"
                barStyle={{ backgroundColor: '#1e1e30'}}>
                <Tab.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}/>
                <Tab.Screen name="Testing stats" component={Testing}
                    options={{
                        tabBarLabel: 'Testing',
                        tabBarIcon: ({ color }) => (
                            <Fontisto name="injection-syringe" size={26} color={color} />
                        ),
                    }}/>
                <Tab.Screen name="Hospitals & beds" component={Beds}
                    options={{
                        tabBarLabel: 'Hospitals',
                        tabBarIcon: ({ color }) => (
                        <FontAwesome name="bed" size={26} color={color} />
                        ),
                    }}/>
                <Tab.Screen name="Contact & helpline" component={Contact}
                    options={{
                        tabBarLabel: 'Contact',
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="contacts" size={26} color={color} />
                        ),
                    }}/>
                <Tab.Screen name="Notifications & advisories" component={Notification}
                    options={{
                        tabBarLabel: 'About us',
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="notification" size={26} color={color} />
                        ),
                    }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Index
