import React, {useRef, useState} from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import MaterialButton from '../../material/MaterialButton';
import ViewPagerIndicator from '../../material/ViewPagerIndicator';
import {goToBusinessSteps} from '../../../api/business';

const screenWidth = Dimensions.get('window').width;

const screens = [
    {
        id: 1,
        text:
            'Create A Business Financing Plan To Show You Credit Options You Can Get Today Based Of Your Business Revenue & Credit Score',
        image: require('../../../assets/dinero/icons/money.png'),
        route: 'BusinessFinancingStack',
        screen: '',
    },
    {
        id: 10,
        text:
            'Use Voice Assistant to Help You Automate Business Building. \n\n Try the blue button in the right bottom corner and ask "What can you do?"',
        image: require('../../../assets/dinero/icons/presentation.png'),
        route: 'BusinessFinancingStack',
        screen: '',
    },
    {
        id: 2,
        text:
            'Create A Business Credit Financing Plan To Show You Credit Options You Can Get Today Based Of How Many Business Tradelines You Have',
        image: require('../../../assets/dinero/icons/money.png'),
        route: 'BusinessBuildingStack',
        screen: '',
    },
    {
        id: 3,
        text: 'Help You Establish All The Business Credit Building Steps',
        image: require('../../../assets/dinero/icons/money.png'),
        action: goToBusinessSteps,
        route: 'BusinessFinancingStack',
        screen: '',
    },
    {
        id: 4,
        text:
            'Help You Automate Website, Toll Free Number, Fax Number, & Professional Email Business Steps',
        image: require('../../../assets/dinero/icons/money.png'),
        action: goToBusinessSteps,
        route: 'FullListOfFinancingProductsStack',
        screen: '',
    },
    {
        id: 5,
        text:
            'Show You 500+ Lenders From No Credit Check Lenders To Business Term Loans',
        image: require('../../../assets/dinero/icons/coupon.png'),
        route: 'BusinessFinancingStack',
        screen: '',
    },
    {
        id: 6,
        text: 'Show You Updates On Your Business Credit Steps You’ve Paid For',
        image: require('../../../assets/dinero/icons/list.png'),
        route: 'Profile',
        screen: '',
    },
    {
        id: 7,
        text: 'Business Credit Course',
        image: require('../../../assets/dinero/icons/presentation.png'),
        route: 'BusinessCreditBuildingCourseStack',
        screen: '',
    },
    {
        id: 8,
        text: 'Personal Credit Course',
        image: require('../../../assets/dinero/icons/presentation.png'),
        route: 'PersonalCreditCourseStack',
        screen: '',
    },
    {
        id: 9,
        text: 'Offering Financing To Your Customers',
        image: require('../../../assets/dinero/icons/presentation.png'),
        route: 'OfferingFinancingStack',
        screen: '',
    },
];

function Progress(props) {
    const [page, setPage] = useState(0);
    const flatlistRef = useRef(null);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

    const onButtonContinue = () => {
        console.log(props);
        props.navigation.navigate('Profile');
    };

    const onProgrgessButtonClick = (item) => {
        if (item.action) {
            item.action();
            return;
        }
        if (item.screen) {
            props.navigation.navigate(item.route, {screen: item.screen});
        } else {
            props.navigation.navigate(item.route);
        }
    };

    const PageItem = ({item}) => {
        return (
            <View
                style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '5%',
                }}>
                <Image
                    source={item.image}
                    style={{
                        height: '20%',
                        width: '40%',
                        marginVertical: '10%',
                        resizeMode: 'contain',
                    }}
                />
                <View style={{width: '80%'}}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: 'black',
                            textAlign: 'center',
                        }}>
                        {item.text}
                    </Text>
                </View>

                <MaterialButton
                    buttonPress={() => onProgrgessButtonClick(item)}
                    title={' Go to page'}
                    style={{
                        marginTop: 60,
                        height: 50,
                        // marginTop: 60,
                        paddingHorizontal: 30,
                        marginBottom: 20,
                        backgroundColor: '#2640e8',
                    }}
                />
            </View>
        );
    };

    return (
        <View
            style={{flex: 1, backgroundColor: '#f8f9fb', alignItems: 'center'}}>
            <FlatList
                ref={flatlistRef}
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={screens}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => <PageItem item={item} />}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />
            <ViewPagerIndicator
                size={6}
                space={5}
                numPages={screens.length}
                activeIndex={page}
                defaultColor="#ccd2da"
                activeColor="#ffaf1d"
            />
            <MaterialButton
                title="Continue"
                style={{
                    width: screenWidth - 40,
                    height: 50,
                    marginTop: 60,
                    marginBottom: 20,
                    backgroundColor: '#2640e8',
                }}
                buttonPress={onButtonContinue}
            />
        </View>
    );
}

export default Progress;
