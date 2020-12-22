import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MarketingYourBusinessCourse} from '../../components/screens/MarketingYourBusinessCourse/MarketingYourBusinessCourse';
import {stackNavHeader} from '../StackNavHeader';

const Stack = createStackNavigator();

export const MarketingYourBusinessCourseStack = () => (
    <Stack.Navigator
        initialRouteName="MarketingYourBusinessCourseStack"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(
                    navigation,
                    'Marketing Your Business Course Stack',
                )
            }
            name={'MarketingYourBusinessCourse'}
            component={MarketingYourBusinessCourse}
        />
    </Stack.Navigator>
);
