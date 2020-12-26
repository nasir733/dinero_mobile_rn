import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationTabBar from './NavigationTabBar';
import { SideBar } from '../components/general/SideBar';
import {
    ApplyForLoansStack,
    BusinessBuildingBureausStack,
    BusinessBuildingStack,
    BusinessBuildingStepsStack,
    BusinessCreditBuildingCourseStack,
    BusinessCreditBuildingStack,
    BusinessCreditChecklistStack,
    BusinessFinancingStack,
    CorporateCreditListStack,
    FullListOfFinancingProductsStack,
    MarketingYourBusinessCourseStack,
    OfferingFinancingToCustomersStack,
    PersonalCreditCourseStack,
    PersonalCreditRepairDoneServicesStack,
    ProfileStack,
    ProgressStack,
    UpgradeBusinessStack,
} from './AppStacks';
import { BusinessCreditBuilderTracker } from '../components/screens/BusinessCreditChecklist/BusinessCreditBuilderTracker';
import { BusinessCreditTrackerStack } from './AppStacks/BusinessCreditTrackerStack';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const ApplicationStack = () => {
    return (
        <Tab.Navigator tabBar={(props) => <NavigationTabBar {...props} />}>
            <Tab.Screen name="TabNavApplication" component={DrawerNavigator} />
        </Tab.Navigator>
    );
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <SideBar {...props} />}>
            <Drawer.Screen name="WalkThrough" component={ProgressStack} />
            <Drawer.Screen name="Profile" component={ProfileStack} />
            <Drawer.Screen
                name="UpgradeBusinessStack"
                component={UpgradeBusinessStack}
            />
            <Drawer.Screen
                name="BusinessFinancingStack"
                component={BusinessFinancingStack}
            />
            <Drawer.Screen
                name="BusinessBuildingStack"
                component={BusinessBuildingStack}
            />
            <Drawer.Screen
                name="BusinessCreditBuildingStack"
                component={BusinessCreditBuildingStack}
            />
            <Drawer.Screen
                name="CorporateCreditListStack"
                component={CorporateCreditListStack}
            />
            <Drawer.Screen
                name="BusinessCreditTrackerStack"
                component={BusinessCreditTrackerStack}
            />
            <Drawer.Screen
                name="FullListOfFinancingProductsStack"
                component={FullListOfFinancingProductsStack}
            />
            <Drawer.Screen
                name="OfferingFinancingStack"
                component={OfferingFinancingToCustomersStack}
            />
            <Drawer.Screen
                name="BusinessBuildingBureausStack"
                component={BusinessBuildingBureausStack}
            />
            <Drawer.Screen
                name="BusinessBuildingStepsStack"
                component={BusinessBuildingStepsStack}
            />
            <Drawer.Screen
                name="PersonalCreditCourseStack"
                component={PersonalCreditCourseStack}
            />
            <Drawer.Screen
                name="BusinessCreditBuildingCourseStack"
                component={BusinessCreditBuildingCourseStack}
            />
            <Drawer.Screen
                name="MarketingYourBusinessCourseStack"
                component={MarketingYourBusinessCourseStack}
            />
            <Drawer.Screen
                name="ApplyForLoansStack"
                component={ApplyForLoansStack}
            />
            <Drawer.Screen
                name="PersonalCreditRepairDoneServicesStack"
                component={PersonalCreditRepairDoneServicesStack}
            />
            <Drawer.Screen
                name="BusinessCreditChecklist"
                component={BusinessCreditChecklistStack}
            />
        </Drawer.Navigator>
    );
};
