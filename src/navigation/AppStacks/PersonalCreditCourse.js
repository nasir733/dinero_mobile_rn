import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PersonalCreditCourse} from '../../components/screens/PersonalCreditCourse/PersonalCreditCourse';
import {stackNavHeader} from '../StackNavHeader';

const Stack = createStackNavigator();

export const PersonalCreditCourseStack = () => (
    <Stack.Navigator
        initialRouteName="PersonalCreditCourseStack"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Personal Credit Course')
            }
            name={'PersonalCreditCourse'}
            component={PersonalCreditCourse}
        />
    </Stack.Navigator>
);
