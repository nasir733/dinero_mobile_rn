import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
    PersonalCreditCards,
    BusinessCreditCards,
    ShortTermLoans,
    BusinessTermLoans,
    SmallBusinessAdministrationLoans,
    PersonalLoans,
    BusinessLinesOfCredit,
    NoCreditCheckLoans,
    InvoiceFactoring,
    InvoiceFinancing,
    EquipmentFinancing,
} from '../../components/screens/FullListOfFinancingProducts/';

import {stackNavHeader} from '../StackNavHeader';

const Stack = createStackNavigator();

export const FullListOfFinancingProductsStack = () => (
    <Stack.Navigator
        initialRouteName="CorporateCreditList"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Personal Credit Cards')
            }
            name={'PersonalCreditCards'}
            component={PersonalCreditCards}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Business Credit Cards')
            }
            name={'BusinessCreditCards'}
            component={BusinessCreditCards}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Short Term Loans')
            }
            name={'ShortTermLoans'}
            component={ShortTermLoans}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Business Term Loans')
            }
            name={'BusinessTermLoans'}
            component={BusinessTermLoans}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(
                    navigation,
                    'Small Business Administration Loans',
                )
            }
            name={'SmallBusinessAdministrationLoans'}
            component={SmallBusinessAdministrationLoans}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Personal Loans')
            }
            name={'PersonalLoans'}
            component={PersonalLoans}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Business Lines Of Credit')
            }
            name={'BusinessLinesOfCredit'}
            component={BusinessLinesOfCredit}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'No Credit Check Loans')
            }
            name={'NoCreditCheckLoans'}
            component={NoCreditCheckLoans}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Invoice Factoring')
            }
            name={'InvoiceFactoring'}
            component={InvoiceFactoring}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Invoice Financing')
            }
            name={'InvoiceFinancing'}
            component={InvoiceFinancing}
        />
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Equipment Financing')
            }
            name={'EquipmentFinancing'}
            component={EquipmentFinancing}
        />
    </Stack.Navigator>
);
