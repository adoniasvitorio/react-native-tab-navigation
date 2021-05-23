import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import FirstScreen from './pages/FirstScreen';
import SecondScreen from './pages/SecondScreen';

const Tab = createBottomTabNavigator();


export default function Routes() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='First Screen' component={FirstScreen} />
                <Tab.Screen name='Second Screen' component={SecondScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}