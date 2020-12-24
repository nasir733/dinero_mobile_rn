import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    ExperianBusiness,
    DunnBradsheet,
    EquifixBussiness,
} from '../../components/screens/BusinessCreditBureaus';
import { stackNavHeader } from '../StackNavHeader';

const Stack = createStackNavigator();

export const BusinessBuildingBureausStack = () => (
    <Stack.Navigator
        initialRouteName="ExperianBusiness"
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(
                    navigation,
                    'Getting Established With Business Experian',
                )
            }
            name={'ExperianBusiness'}
            component={ExperianBusiness}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(
                    navigation,
                    'Getting Established With Dunn & Bradstreet',
                )
            }
            name={'DunnBradsheet'}
            component={DunnBradsheet}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(
                    navigation,
                    'Establishing Your Business Equifax Account',
                )
            }
            name={'EquifixBussiness'}
            component={EquifixBussiness}
        />
    </Stack.Navigator>
);
