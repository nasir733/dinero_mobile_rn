import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BusinessBuildingSteps} from '../../components/screens/BusinessBuildingSteps/BusinessBuildingSteps';
import {stackNavHeader} from '../StackNavHeader';

const Stack = createStackNavigator();

export const BusinessBuildingStepsStack = () => (
    <Stack.Navigator
        initialRouteName="BusinessBuildingStepsStack"
        screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
            options={({navigation}) =>
                stackNavHeader(navigation, 'Business Building Steps')
            }
            name={'BusinessBuildingSteps'}
            component={BusinessBuildingSteps}
        />
    </Stack.Navigator>
);
