import React, {useRef, useState} from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    Linking,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Surface from '../../material/Surface';
import ScrollableDropdown from '../../general/ScrollableDropdown';

const dataArr = [
    {
        image:
            'https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        step: 1,
        heading: 'Do You Have Your Duns Number?',
        description:
            'All states have an online location where you can check the status of any corporation registered in that state. Information provided can include the name, date of incorporation, registered number or ID, and current standing. To check the status of a company, click the link next to the state in which it is incorporated.\nChoose The State Your Business Is Registered In To Check If Your Business Is In Good Standing Below',
        buttonText: 'Click Here To Go & List Your Business On 411',
    },
];

const optionType1 = [
    {
        text: 'Alabama',
        value: 'http://arc-sos.state.al.us/CGI/CORPNAME.MBR/INPUT',
    },
    {
        text: 'Alaska',
        value: 'https://www.commerce.alaska.gov/web/cbpl/Corporations.aspx',
    },
    {
        text: 'Arizona',
        value: 'https://azsos.gov/business',
    },
    {
        text: 'Arkansas',
        value: 'https://www.sos.arkansas.gov/corps/search_all.php',
    },
    {
        text: 'California',
        value:
            'https://www.sos.ca.gov/business-programs/business-entities/cbs-search-tips/',
    },
    {
        text: 'Colorado',
        value: 'https://www.colorado.gov/search?tid=llc',
    },
    {
        text: 'Connecticut',
        value:
            'https://www.concord-sots.ct.gov/CONCORD/online?sn=InquiryServlet&eid=99',
    },
    {
        text: 'Delaware',
        value: 'https://corp.delaware.gov/directweb/',
    },
    {
        text: 'D.C',
        value: 'https://business.dc.gov/research_business_info',
    },
    {
        text: 'Florida',
        value: 'https://dos.myflorida.com/sunbiz/search/',
    },
    {
        text: 'Georgia',
        value: 'https://ecorp.sos.ga.gov/BusinessSearch',
    },
    {
        text: 'Hawaii',
        value:
            'https://hbe.ehawaii.gov/documents/search.html;jsessionid=9148585DCF650B5F22DD05E291E3ECCF.liona',
    },
    {
        text: 'Idaho',
        value: 'https://sosbiz.idaho.gov/search/business',
    },
    {
        text: 'Illnois',
        value: 'https://www.ilsos.gov/corporatellc/',
    },
    {
        text: 'Indiana',
        value: 'https://bsd.sos.in.gov/publicbusinesssearch',
    },
    {
        text: 'Lowa',
        value: 'http://www.sos.state.ia.us/search/index.html',
    },
    {
        text: 'Kensas',
        value: 'https://www.kansas.gov/bess/flow/main?execution=e1s1',
    },
    {
        text: 'Kentucky',
        value: 'https://www.sos.ky.gov/Pages/default.aspx',
    },
    {
        text: 'Louisiana',
        value:
            'https://coraweb.sos.la.gov/CommercialSearch/CommercialSearch.aspx',
    },
    {
        text: 'Maine',
        value: 'https://icrs.informe.org/nei-sos-icrs/ICRS?MainPage=x',
    },
    {
        text: 'Maryland',
        value: 'https://egov.maryland.gov/businessexpress/entitysearch',
    },
    {
        text: 'Massahusetts',
        value: 'http://corp.sec.state.ma.us/corpweb/corpsearch/CorpSearch.aspx',
    },
    {
        text: 'Mihigan',
        value: 'https://startabusiness.org/mi/business-search/',
    },
    {
        text: 'Minnesota',
        value: 'https://mblsportal.sos.state.mn.us/Business/Search',
    },
    {
        text: 'Mississipi',
        value:
            'https://corp.sos.ms.gov/corp/portal/c/page/corpBusinessIdSearch/portal.aspx?#clear=1',
    },
    {
        text: 'Missouri',
        value:
            'https://bsd.sos.mo.gov/businessentity/besearch.aspx?searchtype=0',
    },
    {
        text: 'Montana',
        value: 'https://sosmt.gov/business/',
    },
    {
        text: 'Nebraska',
        value: 'https://www.nebraska.gov/sos/corp/corpsearch.cgi',
    },
    {
        text: 'Nevada',
        value: 'https://esos.nv.gov/EntitySearch/OnlineEntitySearch',
    },
    {
        text: 'New Hampshire',
        value: 'http://sos.nh.gov/nhbuslookup.aspx',
    },
    {
        text: 'New Jersy',
        value: 'https://www.njportal.com/DOR/businessrecords/Maintenance.aspx',
    },
    {
        text: 'New Maxico',
        value:
            'https://portal.sos.state.nm.us/BFS/online/CorporationBusinessSearch',
    },
    {
        text: 'North Carolina',
        value: 'https://www.sosnc.gov/search/index/corp',
    },
    {
        text: 'North Dakota',
        value: 'http://sos.nd.gov/business/business-services',
    },
    {
        text: 'Ohio',
        value: 'https://businesssearch.ohiosos.gov/',
    },
    {
        text: 'Oklahoma',
        value: 'https://www.sos.ok.gov/corp/corpinquiryfind.aspx',
    },
    {
        text: 'Oregon',
        value: 'https://sos.oregon.gov/business/Pages/find.aspx',
    },
    {
        text: 'Pennsylvania',
        value: 'https://www.corporations.pa.gov/search/corpsearch',
    },
    {
        text: 'Rhode Island',
        value: 'http://sos.ri.gov/divisions/Business-Portal/databases',
    },
    {
        text: 'South Crolina',
        value: 'https://businessfilings.sc.gov/BusinessFiling/Entity/Search',
    },
    {
        text: 'South Dakota',
        value:
            'https://sosenterprise.sd.gov/BusinessServices/Business/FilingSearch.aspx',
    },
    {
        text: 'Tennessee',
        value: 'https://tnbear.tn.gov/ecommerce/default.aspx',
    },
    {
        text: 'Texas',
        value: 'http://secretaryofstates.com/texas/',
    },
    {
        text: 'Utha',
        value: 'https://startabusiness.org/ut/business-search/',
    },
    {
        text: 'Vermont',
        value: 'https://www.sec.state.vt.us/',
    },
    {
        text: 'Vrginia',
        value: 'http://www.scc.virginia.gov/clk/bussrch.aspx',
    },
    {
        text: 'Washington',
        value: 'https://ccfs.sos.wa.gov/',
    },
    {
        text: 'West Virginia',
        value: 'https://sos.wv.gov/Pages/default.aspx',
    },
    {
        text: 'Wisconcin',
        value: 'https://startabusiness.org/wi/business-search/',
    },
    {
        text: 'Wyoming',
        value: 'https://wyobiz.wy.gov/business/filingsearch.aspx',
    },
];

const {width, height} = Dimensions.get('window');

function BusinessStanding() {
    const [page, setPage] = useState(0);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    const flatlistRef = useRef(null);
    const itemwidth = width / 2;
    const itemwidtextend = 160;
    const imagewidth = 220;
    let url = optionType1[0].value;
    return (
        <View style={{flex: 1}}>
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
                            marginTop: height * 0.05,
                        }}>
                        <Surface
                            style={{
                                backgroundColor: '#FFF',
                                height: height * 0.75,
                                width: itemwidth + itemwidtextend - 25,
                            }}>
                            <View style={{flex: 1}}>
                                <View
                                    style={{
                                        height: height / 4,
                                        backgroundColor: '#FFF',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Image
                                        style={{width: '100%', height: '100%'}}
                                        source={{uri: item.image}}
                                    />
                                </View>
                                <ScrollView style={{marginBottom: 10}}>
                                    <View style={{flex: 1}}>
                                        <Text
                                            style={{
                                                marginTop: 10,
                                                color: '#000',
                                                fontSize: (height + width) / 70,
                                                padding: 20,
                                            }}>
                                            {item.description}
                                        </Text>
                                    </View>
                                </ScrollView>
                                <View
                                    style={{
                                        alignItems: 'center',
                                        marginBottom: 20,
                                    }}>
                                    <View style={{width: '90%'}}>
                                        <ScrollableDropdown
                                            data={optionType1}
                                            onPress={(data) =>
                                                (url = data.value)
                                            }
                                            initial_value={optionType1[0].text}
                                        />
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    Linking.openURL(url);
                                }}
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
                                    }}>
                                    Click Here To Check If Your Business Is In
                                    Good Standing
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
    // console.warn(page)
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            {dataArr.length > 1 &&
                dataArr.map((x, y) => {
                    return (
                        <View
                            key={y}
                            style={{
                                height: 10,
                                width: 10,
                                marginRight: 10,
                                backgroundColor:
                                    page === y ? '#4b71fa' : '#FFF',
                                // borderWidth: 1,
                                // borderColor: '#d3d3d3',
                                borderRadius: 20,
                            }}
                        />
                    );
                })}
        </View>
    );
}

export {BusinessStanding};
