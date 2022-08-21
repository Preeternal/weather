import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TStackParamList } from 'Interfaces';
import React from 'react';
import { Daily } from '@screens/';

const Stack = createNativeStackNavigator<TStackParamList>();

const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                orientation: 'portrait_up',
                headerShown: false,
            }}>
            <Stack.Screen name="Daily" component={Daily} />
        </Stack.Navigator>
    );
};

export default Navigation;
