import React, {useRef, useState} from 'react';
import {
    Dimensions,
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Surface from '../../material/Surface';

const dataArr = [
    {
        'Financing Products We Want To Qualify For In The Future':
            'Lines Of Credit',
        'How To Qualify In The Future':
            'You will need to be in business for at least 3 months and make at least $4,200 per month for 3 months and have no to very minimal NSF’s and keep a daily bank account balance of at least $500.',
        'Description Of Why We Want To Qualify For Loan & Strategy':
            'Lines Of Credit are great because you only pay back what you have used. The interest rate does tend to be a bit higher because there isn’t a specific date you have to pay it back in. You want to position yourself for this type of financing because they will place a UCC filing on your business which is a blanket lien on all of your assets if you default. Once you have a UCC filing it severely hampers your ability to get more business term or revenue lending financing.',
    },
    {
        'Financing Products We Want To Qualify For In The Future':
            'Invoice Financings',
        'How To Qualify In The Future':
            'You will need to have creditworthy businesses to have a contract with you so you can borrow against your accounts receivables.',
        'Description Of Why We Want To Qualify For Loan & Strategy':
            'You want to leverage invoice financing when you have accounts receivables or money that is owed to you by other businesses but do not want to have them be notified like invoice factoring.',
    },
    {
        'Financing Products We Want To Qualify For In The Future':
            'Invoice Factoring',
        'How To Qualify In The Future':
            'You will need to have creditworthy businesses to have a contract with you so you can borrow against your accounts receivables.',
        'Description Of Why We Want To Qualify For Loan & Strategy':
            'You want to leverage invoice factoring when you have accounts receivables or money that is owed to you by other businesses but you do not mind your customers being notified and you have no recourse or risk to you with no recourse factoring.',
    },
    {
        'Financing Products We Want To Qualify For In The Future':
            'Business Loans',
        'How To Qualify In The Future':
            'You will need to be in business for at least 3 months and make at least $4,200 per month for 3 months and have no to very minimal NSF’s and keep a daily bank account balance of at least $500',
        'Description Of Why We Want To Qualify For Loan & Strategy':
            'Term loans are great because you will have longer terms. You want to position yourself for this type of loan because they will place a UCC filing on your business which is a blanket lien on all of your assets if you default. Once you have a UCC filing it severely hampers your ability to get more business term or revenue lending financing.',
    },
    {
        'Financing Products We Want To Qualify For In The Future': 'SBA Loan',
        'How To Qualify In The Future':
            'We Want To Dispute Anything Negative On Our Personal Credit & Use Primary Tradelines To Lower Our Utiliazation Or An Authorized User Account.',
        'Description Of Why We Want To Qualify For Loan & Strategy':
            'This is the loan we want to really position ourselves for because Small Business Administration Loans have better rates and longer terms such as 10 years and 5-6% interest rate.',
    },
    {
        'Financing Products We Want To Qualify For In The Future':
            'Business Credit Cards',
        'How To Qualify In The Future':
            'We Want To Dispute Anything Negative On Our Personal Credit & Use Primary Tradelines To Lower Our Utiliazation Or An Authorized User Account. So that we can have a 680+ Fico Score with 5 or less inquiries and no derogatories.',
        'Description Of Why We Want To Qualify For Loan & Strategy':
            'Business Credit Cards are a great option! Because we can have a high balance on them and it doesn’t report to the personal credit bureau other than the inquiry and if you were to ever default on your minimum payment. Also, most business credit cards we have in our system have 0% apr rates that can benefit you by essentially getting you free use of money for that promotional period while also allowing you to get cashback and rewards. Which is almost like getting paid to use your business credit card.',
    },
    {
        'Financing Products We Want To Qualify For In The Future':
            'Revenue Lending',
        'How To Qualify In The Future':
            'You will need to be in business for at least 3 months and make at least $4,200 per month for 3 months and have no to very minimal NSF’s and keep a daily bank account balance of at least $500.',
        'Description Of Why We Want To Qualify For Loan & Strategy':
            'Revenue lending loans are great for short term needs. This loan usually has much higher interest rates and shorter terms. This is really the last option for your business if you need the money and you can not qualify for a term loan or SBA loan. Because they will place a UCC filing on your business which is a blanket lien on all of your assets if you default. Once you have a UCC filing it severely hampers your ability to get more business term or revenue lending financing.',
    },
];

const {width, height} = Dimensions.get('window');

function NotQualifyingLenders() {
    const [page, setPage] = useState(0);
    const onViewRef = useRef((viewableItems) =>
        setPage(viewableItems.viewableItems[0]?.index),
    );
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    const flatlistRef = useRef(null);
    const itemwidth = width / 2;
    const itemwidtextend = 160;
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <FlatList
                initialScrollIndex={page}
                scrollToIndex={page}
                ref={flatlistRef}
                pagingEnabled={true}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={itemwidth + itemwidtextend}
                ListHeaderComponent={() => (
                    <View
                        style={{
                            width: (itemwidth - itemwidtextend) / 2,
                            height: 100,
                        }}
                    />
                )}
                ListFooterComponent={() => (
                    <View
                        style={{
                            width: (itemwidth - itemwidtextend) / 2,
                            height: 100,
                        }}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dataArr}
                extraData={dataArr}
                renderItem={({item, index}) => (
                    <View
                        style={{
                            width: itemwidth + itemwidtextend,
                            alignItems: 'center',
                            marginTop: 10,
                        }}>
                        <Surface
                            style={{
                                backgroundColor: '#FFF',
                                height: height * 0.75,
                                width: itemwidth + itemwidtextend - 25,
                            }}>
                            <View style={{flex: 1}}>
                                <View style={{alignItems: 'center'}}>
                                    <Text
                                        style={{
                                            marginTop: 10,
                                            color: '#000',
                                            opacity: 0.5,
                                            textAlign: 'center',
                                            fontWeight: '600',
                                            fontSize: (height + width) / 80,
                                            padding: (height + width) / 130,
                                        }}>
                                        {
                                            'Lenders You Do Not Currently Qualify *But Strategies On How To Qualify For Them In The Future*'
                                        }
                                    </Text>
                                </View>
                                <ScrollView>
                                    {Object.keys(item).map((key, index) => (
                                        <Item
                                            heading={key}
                                            value={item[key]}
                                            key={index}
                                        />
                                    ))}
                                </ScrollView>
                            </View>
                            <TouchableOpacity
                                onPress={() => {}}
                                style={{
                                    height: 50,
                                    backgroundColor: '#4b71fa',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text
                                    style={{
                                        color: '#FFF',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        padding: 10,
                                    }}>
                                    Apply Now
                                </Text>
                            </TouchableOpacity>
                        </Surface>
                    </View>
                )}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
                keyExtractor={(item, index) => index.toString()}
            />
            <View
                style={{
                    position: 'absolute',
                    height: 80,
                    left: 20,
                    right: 20,
                    bottom: 0,
                    paddingTop: 20,
                }}>
                <Dot dataArr={dataArr} page={page} />
            </View>
        </View>
    );
}

function Dot({dataArr, page}) {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            {dataArr.map((x, y) => {
                return (
                    <View
                        key={y}
                        style={{
                            height: 10,
                            width: 10,
                            marginRight: 10,
                            backgroundColor: page === y ? '#4b71fa' : '#FFF',
                            borderRadius: 20,
                        }}
                    />
                );
            })}
        </View>
    );
}

const Item = ({heading, value}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
            }}>
            <Text style={{maxWidth: '50%', fontWeight: 'bold'}}>
                {heading}:
            </Text>
            <Text style={{textAlign: 'right', maxWidth: '50%'}}>{value}</Text>
        </View>
    );
};

export {NotQualifyingLenders};
