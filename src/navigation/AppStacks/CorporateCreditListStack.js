import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
    CreditCardNoPersonalGuaranteeVendorList,
    RevolvingBusinessCreditVendorList,
    StarterVendorList,
    StoreCreditVendorList,
} from '../../components/screens/CorporateCreditList/';

import {stackNavHeader} from '../StackNavHeader';

const Stack = createStackNavigator();

export const CorporateCreditListStack = () => (
    <Stack.Navigator
        initialRouteName="CorporateCreditList"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Starter Vendor List')
            }
            name={'StarterVendorList'}
            component={StarterVendorList}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Store Credit Vendor List')
            }
            name={'StoreCreditVendorList'}
            component={StoreCreditVendorList}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(
                    navigation,
                    'Revolving Business Credit Vendor List',
                )
            }
            name={'RevolvingBusinessCreditVendorList'}
            component={RevolvingBusinessCreditVendorList}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(
                    navigation,
                    'Credit Card No Personal Guarantee Vendor List',
                )
            }
            name={'CreditCardNoPersonalGuaranteeVendorList'}
            component={CreditCardNoPersonalGuaranteeVendorList}
        />
    </Stack.Navigator>
);
