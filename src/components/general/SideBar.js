import React, { Component } from 'react';
import {
    Image,
    Linking,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { goToBusinessSteps, goToLoggedView } from '../../api/business';
import appConfig, { getSubdomain } from '../../config';
import { getWhiteLabelLogo } from '../../api/userData';

const MENU_ITEM = [
    {
        id: '0',
        title: 'How Our App Can Help Your Business',
        route: 'WalkThrough',
    },
    { id: '1', title: 'Profile', route: 'Profile' },
    {
        id: '2',
        title: 'Business Credit Checklist',
        route: 'BusinessCreditChecklist',
    },
    {
        id: '3',
        title: 'Business Credit Builder Tracker',
        route: 'BusinessCreditTrackerStack',
    },
    // { id: '2', title: 'Upgrade To Full Business Builder Program With No Money Down', route: "UpgradeBusinessStack" },

    {
        id: '4',
        title: 'Create My Business Financing Plan',
        route: 'BusinessFinancingStack',
    },
    {
        id: '5',
        title: 'Create My Business Credit Building Plan',
        route: 'BusinessBuildingStack',
    },
    {
        id: '5',
        title: 'Add Business Tradelines',
        action: () => {
            goToLoggedView('/business/tradelines/');
        },
    },
    {
        id: '6',
        title: 'Business Credit Building',
        options: [
            { name: 'Business Entity', screen: 'BusinessEntity' },
            { name: 'EIN Number', screen: 'EINNumber' },
            { name: 'Business License', screen: 'BusinessLicenses' },
            {
                name: 'Website Creation',
                screen: 'WebsiteCreation',
                action: () => {
                    goToLoggedView('/business/website-creation/');
                },
            },
            {
                name: 'Fax Number',
                screen: 'FaxNumber',
                action: () => {
                    goToLoggedView('/business/fax-number/');
                },
            },
            { name: '411 Listings', screen: 'FourElevenListing' },
            {
                name: 'Professional Email Address',
                screen: 'ProfessionalEmailAddress',
                action: () => {
                    goToLoggedView('/business/professional-email/');
                },
            },
            {
                name: 'Domain',
                screen: 'Domain',
                action: () => {
                    goToLoggedView('/business/domain/');
                },
            },
            {
                name: 'Toll Free Number',
                screen: 'TollFreeNumber',
                action: () => {
                    goToLoggedView('/business/toll-free-options/');
                },
            },
            { name: 'Virtual Address', screen: 'VirtualAddress' },
            { name: 'Business Bank Account', screen: 'BusinessBankAccount' },
            { name: 'Merchant Account', screen: 'MerchantAccount' },
            { name: 'Duns Number', screen: 'DunsNumber' },
            { name: 'SIC & NAICS Codes', screen: 'SICCode' },
            {
                name: 'How To Check If Your Business Is In Good Standing',
                screen: 'BusinessStanding',
            },
            {
                name: 'How To Get Your Business Back In Good Standing',
                screen: 'BusinessBackStanding',
            },
        ],
        route: 'BusinessCreditBuildingStack',
    },
    {
        id: '7',
        title: 'Business Credit Building Steps You Need Done For You',
        action: goToBusinessSteps,
    },
    {
        id: '8',
        title: 'Business Credit Bureaus',
        options: [
            { name: 'Experian Business', screen: 'ExperianBusiness' },
            { name: 'Dunn & Bradstreet', screen: 'DunnBradsheet' },
            { name: 'Equifax', screen: 'EquifixBussiness' },
        ],
        route: 'BusinessBuildingBureausStack',
    },
    {
        id: '9',
        title: 'Corporate Credit List',
        options: [
            { name: 'Starter vendor list', screen: 'StarterVendorList' },
            {
                name: 'Store credit vendor list',
                screen: 'StoreCreditVendorList',
            },
            {
                name: 'Revolving business credit vendor list',
                screen: 'RevolvingBusinessCreditVendorList',
            },
            {
                name: 'Credit card no personal guarantee vendor list',
                screen: 'CreditCardNoPersonalGuaranteeVendorList',
            },
        ],
        route: 'CorporateCreditListStack',
    },
    {
        id: '10',
        title: 'Full List Of Financing Products',
        options: [
            { name: 'Personal Credit Cards', screen: 'PersonalCreditCards' },
            { name: 'Business Credit Cards', screen: 'BusinessCreditCards' },
            { name: 'Short Term Loans', screen: 'ShortTermLoans' },
            { name: 'Business Term Loans', screen: 'BusinessTermLoans' },
            {
                name: 'Small Business Administration Loans',
                screen: 'SmallBusinessAdministrationLoans',
            },
            { name: 'Personal Loans', screen: 'PersonalLoans' },
            {
                name: 'Business Lines Of Credit',
                screen: 'BusinessLinesOfCredit',
            },
            { name: 'No Credit Check Loans', screen: 'NoCreditCheckLoans' },
            { name: 'Invoice Factoring', screen: 'InvoiceFactoring' },
            { name: 'Invoice Financing', screen: 'InvoiceFinancing' },
            { name: 'Equipment Financing', screen: 'EquipmentFinancing' },
        ],
        route: 'FullListOfFinancingProductsStack',
    },
    {
        id: '11',
        title: 'Offering Financing To Your Customers',
        route: 'OfferingFinancingStack',
    },
    // { id: '12', title: 'Marketing Your Business', action: () => { Linking.openURL("https://www.getdinerotoday.com/business/marketing-business/") } },
    {
        id: '12',
        title: 'Marketing Your Business',
        route: 'MarketingYourBusinessCourseStack',
    },
    // { id: '13', title: 'Business Credit Building Course', action: () => { Linking.openURL("https://www.getdinerotoday.com/businesscreditcourse/") } },
    {
        id: '13',
        title: 'Business Credit Building Course',
        route: 'BusinessCreditBuildingCourseStack',
    },
    {
        id: '14',
        title: 'Personal Credit Course',
        route: 'PersonalCreditCourseStack',
    },
    {
        id: '15',
        title: 'Personal Credit Repair Done For You Services',
        route: 'PersonalCreditRepairDoneServicesStack',
    },
    {
        id: '16',
        title: 'Shop At Our Online Store',
        action: () => {
            Linking.openURL('https://getdinerotodaystore.com/');
        },
    },
    // { id: '15', title: 'Apply For Business Loans', action: () => { Linking.openURL("https://www.getdinerotoday.com/business/apply-loans") } },
    // { id: '15', title: 'Apply For Business Loans', route: "ApplyForLoansStack" },
    // { id: '16', title: 'Covid-19 Business Loan Section', action: () => { Linking.openURL("https://www.getdinerotoday.com/covid19/homeone") } },
];

if (appConfig.showWebinar) {
    MENU_ITEM.splice(2, 0, {
        id: '3',
        title: 'Watch Webinar On Building Business Credit',
        action: () => {
            Linking.openURL(appConfig.webinarLink);
        },
    });
}

class SideBar extends Component {
    state = {
        selected: '1',
        dropdown: null,
        logo: '',
        bgColor: '',
        shouldUpdateLogo: false,
    };

    _handleSelect = ({ id, route }) =>
        this.setState(
            {
                selected: id,
                dropdown: null,
            },
            () => this.props.navigation.navigate(route),
        );

    componentDidMount() {
        if (appConfig.whitelabel) {
            getWhiteLabelLogo()
                .then((data) => {
                    if (data.status) {
                        if (appConfig.whitelabel) {
                            this.setState({
                                logo: data.url,
                                bgColor: data.bgColor,
                                shouldUpdateLogo: data.status,
                            });
                            if (data.subdomain) {
                                appConfig.appWebsite = getSubdomain(
                                    data.subdomain,
                                );
                            }
                        }
                    }
                    if (data.webinar) {
                        appConfig.webinarLink = data.webinar;
                    }
                })
                .catch((err) => console.log(err));
        }
    }

    renderItem = (item, key) => {
        const { selected, dropdown } = this.state;

        if (item.options && item.options.length) {
            return (
                <TouchableOpacity key={key}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingLeft: 20,
                            paddingRight: 20,
                        }}>
                        <ItemMenu
                            id={item.id}
                            title={item.title}
                            selected={selected === item.id}
                            onSelect={() =>
                                this.setState({
                                    selected: item.id,
                                    dropdown:
                                        dropdown === item.id ? null : item.id,
                                })
                            }
                        />
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({
                                    selected: item.id,
                                    dropdown:
                                        dropdown === item.id ? null : item.id,
                                })
                            }
                            style={{ paddingTop: 10 }}>
                            <Image
                                source={require('../../assets/icon/ic_expand.png')}
                                style={{
                                    height: 30,
                                    width: 25,
                                    resizeMode: 'contain',
                                    tintColor: '#909fa7',
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    {item.id === this.state.dropdown && (
                        <View
                            style={{
                                paddingLeft: 40,
                                backgroundColor: '#1A232D',
                                width: '100%',
                            }}>
                            {item.options.map((obj, index) => {
                                return obj.action ? (
                                    <ItemMenu
                                        key={`${index}`}
                                        id={index}
                                        title={obj.name}
                                        onSelect={obj.action}
                                    />
                                ) : (
                                    <ItemMenu
                                        key={`${index}`}
                                        id={index}
                                        title={obj.name}
                                        onSelect={() =>
                                            this.props.navigation.navigate(
                                                item.route,
                                                {
                                                    screen: obj.screen,
                                                },
                                            )
                                        }
                                    />
                                );
                            })}
                        </View>
                    )}
                </TouchableOpacity>
            );
        } else if (item.action) {
            return (
                <View style={{ paddingLeft: 20 }} key={key}>
                    <ItemMenu
                        id={item.id}
                        title={item.title}
                        selected={selected === item.id}
                        onSelect={item.action}
                    />
                </View>
            );
        } else {
            return (
                <View style={{ paddingLeft: 20 }} key={key}>
                    <ItemMenu
                        id={item.id}
                        title={item.title}
                        selected={selected === item.id}
                        onSelect={() => this._handleSelect(item)}
                    />
                </View>
            );
        }
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingBottom: 20,
                    backgroundColor: '#000000',
                }}>
                <View
                    style={{
                        paddingTop: 50,
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        backgroundColor:
                            appConfig.whitelabel && this.state.shouldUpdateLogo
                                ? this.state.bgColor
                                : appConfig.drawerBackgroundColor,
                        paddingBottom: 20,
                    }}>
                    {appConfig.whitelabel && this.state.shouldUpdateLogo ? (
                        <Image
                            source={{ uri: this.state.logo }}
                            style={{
                                height: 100,
                                width: 200,
                                resizeMode: 'contain',
                            }}
                        />
                    ) : (
                        <Image
                            source={appConfig.appLogo}
                            style={{
                                height: 100,
                                width: 200,
                                resizeMode: 'contain',
                            }}
                        />
                    )}
                </View>
                <ScrollView>
                    <View
                        style={{
                            paddingTop: 20,
                        }}>
                        {MENU_ITEM.map((item, index) =>
                            this.renderItem(item, index),
                        )}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

function ItemMenu({ title, selected, onSelect }) {
    return (
        <TouchableOpacity
            onPress={() => {
                onSelect && onSelect();
            }}
            style={{ padding: 15 }}>
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: selected ? 'bold' : 'normal',
                    color: 'white',
                    width: 180,
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export { SideBar };
