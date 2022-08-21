import React, { useEffect, useMemo } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useFlipper } from '@react-navigation/devtools';
import {
    DefaultTheme,
    NavigationContainer,
    useNavigationContainerRef,
} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Navigation from '@navigation/';
import { configureAxios } from '@services/axiosConfig';

const App = () => {
    useEffect(() => {
        configureAxios();
    }, []);

    const navigationRef = useNavigationContainerRef();
    useFlipper(navigationRef);

    const navigationTheme = useMemo(
        () => ({
            ...DefaultTheme,

            colors: {
                ...DefaultTheme.colors,
                background: 'white',
                card: 'white',
            },
        }),
        [],
    );

    return (
        <SafeAreaProvider>
            <StatusBar
                animated
                backgroundColor="white"
                barStyle={'dark-content'}
            />
            <NavigationContainer ref={navigationRef} theme={navigationTheme}>
                <Navigation />
                <Toast />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
