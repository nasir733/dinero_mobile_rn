import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Business} from '../../components/screens/Upgrade';
import {stackNavHeader} from '../StackNavHeader';

const Stack = createStackNavigator();

export const UpgradeBusinessStack = () => (
    <Stack.Navigator initialRouteName="Business">
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Upgrade to Business Builder')
            }
            name={'Business'}
            component={Business}
        />
    </Stack.Navigator>
);
