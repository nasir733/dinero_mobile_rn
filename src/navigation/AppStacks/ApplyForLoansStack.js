import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import { ApplyForLoans } from "../screens/ApplyForLoans/ApplyForLoans";

const Stack = createStackNavigator();

export const ApplyForLoansStack = () => (
    <Stack.Navigator
        initialRouteName="ApplyForLoansStack"
        screenOptions={{gestureEnabled: false}}>
        {/*<Stack.Screen options={({navigation}) => optionsHandler(navigation, "Apply For Loans")} name={"ApplyForLoans"} component={ApplyForLoans} />*/}
    </Stack.Navigator>
);
