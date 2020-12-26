import 'react-native-gesture-handler';
import React from 'react';
import { store } from './src/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as NavigationService from './src/services/NavigationService';
import { AuthStack } from './src/navigation/AuthStack';
import { ApplicationStack } from './src/navigation/ApplicationStack';

const Stack = createStackNavigator();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer
                    ref={(navigatorRef) => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}>
                    <Stack.Navigator
                        screenOptions={{ gestureEnabled: false }}
                        headerMode="none"
                        initialRouteName="AuthStack">
                        <Stack.Screen name="AuthStack" component={AuthStack} />
                        <Stack.Screen
                            name="ApplicationStack"
                            component={ApplicationStack}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}

export default App;
