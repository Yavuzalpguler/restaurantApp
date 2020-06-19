import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  Cities from './pages/Cities'
import  Restaurant from './pages/Restaurant'
import  Details from './pages/Details'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainPage">

                <Stack.Screen
                    name="RestaurantsPage"
                    component={Restaurant}
                    options={{
                        title: "Restaurants",
                        headerStyle: {
                            backgroundColor: '#6d6d6d'
                        }
                    }}
                />

                <Stack.Screen
                    name="MainPage"
                    component={Cities}
                    options={{
                        title: "Cities",
                        headerStyle: {
                            backgroundColor: '#6d6d6d'
                        }
                    }}
                />

                <Stack.Screen
                    name="DetailsPage"
                    component={Details}
                    options={{
                        title: "Details",
                        headerStyle: {
                            backgroundColor: '#6d6d6d'
                        }
                    }}
                />



            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router; 