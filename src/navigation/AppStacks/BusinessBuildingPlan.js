import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
    BusinessCredit,
    BusinessCreditCard,
    CreateBusinessPlan,
    Have5Accounts,
    RevolvingVendors,
    StarterVendors,
    StoreCreditVendors,
    VendorsToBegin,
} from '../../components/screens/BusinessCreditBuildingPlan';
import {stackNavHeader} from '../StackNavHeader';

const Stack = createStackNavigator();

export const BusinessBuildingStack = () => (
    <Stack.Navigator
        initialRouteName="CreateBusinessPlan"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Create My Financing Plan')
            }
            name={'CreateBusinessPlan'}
            component={CreateBusinessPlan}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Building Your Business Credit')
            }
            name={'BusinessCredit'}
            component={BusinessCredit}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Vendors To Begin With')
            }
            name={'VendorsToBegin'}
            component={VendorsToBegin}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Once You Have 5 Accounts')
            }
            name={'Have5Accounts'}
            component={Have5Accounts}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Starter Vendors')
            }
            name={'StarterVendors'}
            component={StarterVendors}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Store Credit Vendors')
            }
            name={'StoreCreditVendors'}
            component={StoreCreditVendors}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Revolving Vendors')
            }
            name={'RevolvingVendors'}
            component={RevolvingVendors}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Business Credit Cards')
            }
            name={'BusinessCreditCard'}
            component={BusinessCreditCard}
        />
    </Stack.Navigator>
);
