import React, { useState, useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import Login from '../screens/LoginScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screens/HomeScreen';
import DetailOrderScreen from '../screens/DetailOrderScreen';
import TakePhoto from '../screens/TakePhoto';


const Stack = createStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        }); // Add some error handling, also you can simply do setIsFirstLaunch(null)



    }, []);

    if (isFirstLaunch === null) {
        return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
    } else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
    } else {
        routeName = 'Login';
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Login"
                component={Login}

            />
            <Stack.Screen
                name="Signup"
                component={Login}

            />
            <Stack.Screen
                name="HomeScreen"
                options={{
                    title: 'Trang chủ',
                }}
                component={HomeScreen}

            />
            <Stack.Screen
                name="DetailOrderScreen"
                options={{
                    title: 'Chi tiết đơn hàng',
                }}
                component={DetailOrderScreen}

            />
            <Stack.Screen
                name="TakePhoto"
                options={{
                    title: 'Chụp ảnh',
                }}
                component={TakePhoto}

            />
        </Stack.Navigator>
    );
};

export default AuthStack;