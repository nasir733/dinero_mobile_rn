import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { stackNavHeader } from '../StackNavHeader';
import { BusinessCreditBuilderTracker } from '../../components/screens/BusinessCreditChecklist/BusinessCreditBuilderTracker';

const Stack = createStackNavigator();

export const BusinessCreditTrackerStack = () => (
    <Stack.Navigator
        initialRouteName="BusinessCreditBuilderTracker"
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, 'Business Credit Builder Tracker')
            }
            name={'BusinessCreditBuilderTracker'}
            component={BusinessCreditBuilderTracker}
        />
    </Stack.Navigator>
);
