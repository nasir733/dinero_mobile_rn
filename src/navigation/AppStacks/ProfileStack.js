import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../components/screens/Profile/Profile';
import {stackNavHeader} from '../StackNavHeader';

const Stack = createStackNavigator();

export const ProfileStack = () => (
    <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen
            options={({navigation}) => stackNavHeader(navigation, 'Profile')}
            name={'Profile'}
            component={Profile}
        />
    </Stack.Navigator>
);
