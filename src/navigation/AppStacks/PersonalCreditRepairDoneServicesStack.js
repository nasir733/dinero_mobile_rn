import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PersonalCreditRepairDoneServices} from '../../components/screens/PersonalCreditRepairDoneServices/PersonalCreditRepairDoneServices';
import {stackNavHeader} from '../StackNavHeader';

const Stack = createStackNavigator();

export const PersonalCreditRepairDoneServicesStack = () => (
    <Stack.Navigator
        initialRouteName="PersonalCreditRepairDoneServices"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(
                    navigation,
                    'Personal Credit Repair Done For You Services',
                )
            }
            name={'PersonalCreditRepairDoneServices'}
            component={PersonalCreditRepairDoneServices}
        />
    </Stack.Navigator>
);
