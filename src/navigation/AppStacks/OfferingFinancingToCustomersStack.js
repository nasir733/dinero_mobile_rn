import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {OfferingFinancingToCustomers} from '../../components/screens/OfferingFinancingToCustomers/OfferingFinancingToCustomers';
import {stackNavHeader} from '../StackNavHeader';

const Stack = createStackNavigator();

export const OfferingFinancingToCustomersStack = () => (
    <Stack.Navigator
        initialRouteName="OfferingFinancingToCustomersStack"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(
                    navigation,
                    'Offering Financing To Your Customers',
                )
            }
            name={'OfferingFinancing'}
            component={OfferingFinancingToCustomers}
        />
    </Stack.Navigator>
);
