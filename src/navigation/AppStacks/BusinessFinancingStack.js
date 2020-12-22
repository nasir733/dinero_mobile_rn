import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
    CreateFinancingPlan,
    Lenders,
    PersonalCreditCards,
    PersonalLoan,
    NoCreditCheck,
    NotQualifyingLenders,
} from '../../components/screens/BusinessFinancingPlan';
import {stackNavHeader} from '../StackNavHeader';

const Stack = createStackNavigator();

export const BusinessFinancingStack = () => (
    <Stack.Navigator
        initialRouteName="CreateFinancingPlan"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Create My Financing Plan')
            }
            name={'CreateFinancingPlan'}
            component={CreateFinancingPlan}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Lenders You Qualify For')
            }
            name={'Lenders'}
            component={Lenders}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Personal Credit Cards')
            }
            name={'PersonalCreditCards'}
            component={PersonalCreditCards}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Personal Loans')
            }
            name={'PersonalLoan'}
            component={PersonalLoan}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'No Credit Check Loans')
            }
            name={'NoCreditCheck'}
            component={NoCreditCheck}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(
                    navigation,
                    'Lenders You Do Not Currently Qualify',
                )
            }
            name={'NotQualifyingLenders'}
            component={NotQualifyingLenders}
        />
    </Stack.Navigator>
);
