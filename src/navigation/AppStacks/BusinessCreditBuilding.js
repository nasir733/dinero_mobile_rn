import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    BusinessBackStanding,
    BusinessBankAccount,
    BusinessEntity,
    BusinessLicenses,
    BusinessStanding,
    Domain,
    DunsNumber,
    EINNumber,
    FaxNumber,
    FourElevenListing,
    MerchantAccount,
    ProfessionalEmailAddress,
    SICCode,
    TollFreeNumber,
    VirtualAddress,
    WebsiteCreation,
} from '../../components/screens/BusinessCreditBuilding';
import { stackNavHeader } from '../StackNavHeader';

const Stack = createStackNavigator();

export const BusinessCreditBuildingStack = () => (
    <Stack.Navigator
        initialRouteName="BusinessEntity"
        screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, 'Business Entity')
            }
            name={'BusinessEntity'}
            component={BusinessEntity}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, 'EIN Number')
            }
            name={'EINNumber'}
            component={EINNumber}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, 'Business License')
            }
            name={'BusinessLicenses'}
            component={BusinessLicenses}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, 'Website Creation')
            }
            name={'WebsiteCreation'}
            component={WebsiteCreation}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, 'Fax Number')
            }
            name={'FaxNumber'}
            component={FaxNumber}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, '411 Listing')
            }
            name={'FourElevenListing'}
            component={FourElevenListing}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, 'Professional Email Address')
            }
            name={'ProfessionalEmailAddress'}
            component={ProfessionalEmailAddress}
        />
        <Stack.Screen
            options={({ navigation }) => stackNavHeader(navigation, 'Domian')}
            name={'Domain'}
            component={Domain}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, 'Toll Free Number')
            }
            name={'TollFreeNumber'}
            component={TollFreeNumber}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, 'Virtual Address')
            }
            name={'VirtualAddress'}
            component={VirtualAddress}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, 'Business Bank Account')
            }
            name={'BusinessBankAccount'}
            component={BusinessBankAccount}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, 'Merchant Account')
            }
            name={'MerchantAccount'}
            component={MerchantAccount}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, 'Duns Number')
            }
            name={'DunsNumber'}
            component={DunsNumber}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(navigation, 'SIC & NAICS Codes')
            }
            name={'SICCode'}
            component={SICCode}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(
                    navigation,
                    'How To Check If Your Business Is In Good Standing',
                )
            }
            name={'BusinessStanding'}
            component={BusinessStanding}
        />
        <Stack.Screen
            options={({ navigation }) =>
                stackNavHeader(
                    navigation,
                    'How To Get Your Business Back In Good Standing',
                )
            }
            name={'BusinessBackStanding'}
            component={BusinessBackStanding}
        />
    </Stack.Navigator>
);
