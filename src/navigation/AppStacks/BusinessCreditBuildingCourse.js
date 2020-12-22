import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BusinessCreditBuildingCourse} from '../../components/screens/BusinessCreditBuildingCourse/BusinessCreditBuildingCourse';
import {stackNavHeader} from '../StackNavHeader';

const Stack = createStackNavigator();

export const BusinessCreditBuildingCourseStack = () => (
    <Stack.Navigator
        initialRouteName="BusinessCreditBuildingCourseStack"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(
                    navigation,
                    'Business Credit Building Course Stack',
                )
            }
            name={'BusinessCreditBuildingCourse'}
            component={BusinessCreditBuildingCourse}
        />
    </Stack.Navigator>
);
