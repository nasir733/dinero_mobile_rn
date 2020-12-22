import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Progress from '../../components/screens/Progress/Progress';
import {stackNavHeader} from '../StackNavHeader';

const Stack = createStackNavigator();

const ProgressStack = () => {
    return (
        <Stack.Navigator initialRouteName="WalkThrough">
            <Stack.Screen
                options={({navigation}) =>
                    stackNavHeader(
                        navigation,
                        'How Our App Can Help Your Business',
                    )
                }
                name="WalkThrough"
                component={Progress}
            />
        </Stack.Navigator>
    );
};
export {ProgressStack};
