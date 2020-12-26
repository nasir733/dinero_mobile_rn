import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { stackNavHeader } from '../StackNavHeader';
import { BusinessCreditChecklist } from '../../components/screens/BusinessCreditChecklist/BusinessCreditChecklist';

const Stack = createStackNavigator();

export const BusinessCreditChecklistStack = () => (
    <Stack.Navigator
        initialRouteName="BusinessCreditChecklist"
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, 'Business Credit Checklist')
            }
            name={'BusinessCreditChecklist'}
            component={BusinessCreditChecklist}
        />
    </Stack.Navigator>
);
