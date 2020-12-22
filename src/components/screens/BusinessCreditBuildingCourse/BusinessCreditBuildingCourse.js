import React, {useRef, useState} from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    Text,
    View,
} from 'react-native';
import Surface from '../../material/Surface';
import Dot from '../../general/Dot';

const dataArr = [
    {
        name: 'Select the Entity Structure of Your Business',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'Set up a business entity or make sure your existing entity is set up correctly. It’s best to build business credit with an LLC or Corporation (S or C Corporation). Creditors, Suppliers, Lenders, etc. prefer to see an actual business entity. In addition, a corporation or an LLC is treated as a separate legal entity which separates you personally from the liability of operating your business. Be sure to compare each entity so you can see the difference between the most common entities.',
    },
    {
        name: 'Form a Corporation or LLC',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'We highly recommend that you build business credit as a corporation or Limited Liability Company (LLC). If you need to form a separate entity take 10 minutes to SET ONE UP NOW! In order to maximize your funding potential and build a business credit profile that is separate from your personal credit you need to form a corporation or LLC. Once you’ve formed a separate legal entity for your business, you must make sure everything relating to the business is done in the business name. Although you may need to personally sign for certain transaction as an authorized officer of the business, your corporation or LLC is actually the one doing business.',
    },
    {
        name: 'File for "Foreign Corporation" status',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'If the State where your business was formed does not match the State of its primary location then your business will need to file for “Foreign Corporation” status and obtain a “Certificate of Authority” in the State where it is located and does business from. For example, if your business was incorporated in Nevada or Delaware, but its primary location is in Illinois or California, then you will have to file for Foreign Corporation status in either Illinois or California.',
    },

    {
        name: 'Your Business Address',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'The address of your business needs to look like a business address. Do not use a post office box for your physical business address. You can use it for a business mailing address which is a separate address. You can use your home address for business credit building, but be aware that some lenders will not fund “home based” businesses. This will not stop you from building business credit scores, but may limit your funding options.\n' +
            '\n' +
            'The best way to know if the address you are using will work or not is to test it using Experian’s address verification tool. If the address shows “residential or mail stop” it is something you should fix. If the address comes back as “business or unknown”, you are fine using that address for your business.',
    },

    {
        name: 'Set Up a True Business Address',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'To properly establish and build credit, your business needs a deliverable physical address and not a PO Box. In fact, many lenders and credit providers may “flag” your business even if you try to use a reformatted address from service locations like the UPS Store, Mail Boxes Etc. and Postal Annex.\n' +
            '\n' +
            'If you don’t have an actual storefront or office location, you can run your business from anywhere and still have a qualifying business address with solutions like these:\n' +
            '\n' +
            '=> Address Only – Receive mail and packages at your dedicated business address.\n' +
            '\n' +
            '=> Virtual Office – Professional business address, dedicated phone and fax numbers, receptionist services, and part-time use of fully furnished offices and meeting rooms.\n' +
            '\n' +
            '=> True Office – Your own full-time private office with receptionist services, dedicated phone and fax, internet, full furnishings, meeting rooms, and more.',
    },

    {
        name: 'Business Phone Number',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'You must have a dedicated business phone number that is listed with 411 directory assistance, under the business name. Do not use your home phone number. Lenders, vendors, creditors, and even insurance providers will verify that your business is listed with 411. A toll-free number will give your business credibility, but you must have a local business number in order to get listed in 411 directory assistance.\n' +
            '\n' +
            'Boost Perception With an 800 Number How to lenders, vendors and customers see your business? It’s easy and inexpensive to ADD a virtual toll free 800 or 8** numberas one of your business numbers.\n' +
            '\n' +
            'Even if you’re a single owner with a home-based business, a toll-free number provides the perception that you are a real business. Some of the advanced features include: multiple extensions, customized music-on-hold, voicemail, flexible call forwarding options, and more.\n' +
            '\n' +
            'Whether you’re applying for financing with a lender or net credit terms with a vendor, providing a cell of home phone number as your main business phone line could get you “flagged” as an un-established business that is too high of a risk. This means we DON’T recommend giving a personal cell phone or residential phone as the business phone number. (note: you can forward a virtual number to any phone number, see the information in the paragraph above)',
    },

    {
        name: 'Business Fax Number',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'Many people say that faxing is outdated and a thing of the past. That is simply not true when it comes to lenders and credit providers. As a business, you will need a fax number to receive important documents and fax in credit applications.',
    },

    {
        name: 'Submitting Your Number to 411 Directory',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'To get your business number listed we suggest to contact your local phone carrier and request your business phone line to be added in the 411. Keep in mind that you’ll need to have your phone service with them in order to get a number listed.\n' +
            '\n' +
            'Another option is to list your business with ListYourself.net. The service is free and has been proven to be very effective to solve the 411 directory assistance listing. CLICK HERE to submit your business phone number.\n' +
            '\n' +
            'Once you have submitted your business phone number, you will need to verify that you are listed under 411. To do this you will: (Dial your area code)-555-1212 and then simply ask for the listing of your exact business legal name. If possible, do not use a cell phone to check your listing.',
    },

    {
        name: 'Submit Your Business to Online Business Directories',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'Since searching the internet is the number one tool used to locate a business today, it’s crucial to make sure your business is listed on major online business directories. While there are many popular online directories to get listed with there are several key sites that play a role in the business credit building process.\n' +
            '\n' +
            'Certain online directories are the online equivalent of a modern day phone book so getting listed is a great way for not only customers to find you but also lenders to verify your business listing in the 411.\n' +
            '\n' +
            'Here are the top three online business directories to submit your business listing with: Express Update – As part of the Infogroup family, Express Update powers and verifies the world’s top search engines. Once you submit your business listing your information is sent to the top Internet search engines, 85% of large public libraries and the leading in-car navigation system. You can submit your business listing or update your information anytime you need to without any cost or ongoing fee.\n' +
            '\n' +
            'YellowBot – This online directory is similar to the yellow pages. You can add basic business contact information as well as searchable tags to your listing. You can sign in using Windowslive, Yahoo, Twitter, Google or your Facebook account or use a company email address to create a YellowBot listing account. You also have the opportunity to purchase a premium listing for easier account management and additional benefits.\n' +
            '\n' +
            'Superpages – Superpages.com is an online directory powered by DexMedia™. This is a very popular site used during the initial stages of lender compliance. As you know the key is to get your business listed in major directories so vendors and lenders can easily verify your business listing.',
    },

    {
        name: 'Set Up Business Website',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'First, conduct a Domain Name Search to check the availability of the domain name you want for your business website. If your business name is already taken try some variations of it until you find an available one. Then purchase it.\n' +
            '\n' +
            'Lenders and credit providers will check to see that you have a professional website and email address. Whether you want a new website that is custom built for your business or you prefer to upgrade your existing one, there is a solution.',
    },

    {
        name: 'Set Up Professional Email Address',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'It’s important to get a dedicated company email address for your business. It’s not only professional, but greatly helps your chances of getting the thumbs up from a credit provider. A great example is an email such as sales@yourcompany.com or support@yourcompany.com.\n' +
            '\n' +
            'What you want to avoid is using a free service like Gmail, Yahoo and Hotmail. The email address has to be @yourcompany.com. There is nothing worse than potential credit providers noticing your company email address is buddyrocks21@yahoo.com. Setting up a business email address is easy and can be an add on option when registering your domain name.',
    },

    {
        name: 'Obtain a Federal Employer Identification Number (EIN)',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'To build business credit your business must have a Federal Tax Identification Number (EIN). To obtain an EIN, or to determine if you need a new one go to irs.gov and do it yourself or simply have a professional incorporation service provider do it for you.',
    },

    {
        name: 'Obtain Required Business Licenses',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'One of the most common mistakes when building credit for your company is non-matching business addresses on your business licenses. Even worse is not having the “required” licenses for your type of business to operate legally. You will need to contact your State, County, and City Government offices to see if there are any required licenses and permits to operate your type of business. You can contact them directly via phone or search their website to confirm if there are any required licenses or permits for your type of business.\n' +
            '\n' +
            'For example if you start a home based business some cities may require that you have a license, while others may not.',
    },

    {
        name: 'Set Up Business Bank Account\n',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'Decide which bank you want to open an account with and call or email them. Ask what their specific requirements are for opening a business checking account. Most banks require a copy of your business certificate from the secretary of state, an IRS document with your EIN number on it, and sometimes your articles of incorporation.',
    },

    {
        name: 'Set Up Merchant Credit Card Processing\n',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'Most businesses can benefit from being able to accept credit cards as payment for their products and services. Could your business benefit? There is no shortage of sources in the marketplace that can provide you with a merchant account, a processing gateway and any necessary equipment so you can accept credit cards from your customers. In fact, your bank will more than likely want to be that merchant solution for your business.\n' +
            '\n' +
            'However, it’s important to explore your options before setting up a merchant account with your bank. If may be convenient but can also limit your financing and credit options. For example, there are several funding programs based on merchant processing and not on standard credit underwriting.',
    },

    {
        name: 'Verify Each Agency Has Your Business Listed the Same',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'Take the time to verify that these main agencies (State, IRS, Bank, and 411 national directory) have your business listed the same way and with your Exact Legal Name. Also, take the time to ensure every bill you get (power bill, phone bill, landlord, etc.) has the business name listed correctly and comes to the business address.',
    },

    {
        name: 'Verify Business Listings Match\n',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'Before moving on to the next step take the time now to verify that each agency has your business listed the same.\n' +
            '\n' +
            'State business filings listed correctly\n' +
            '\n' +
            'County licenses and/or permits listed correctly\n' +
            '\n' +
            'City license and/or permit filings listed correctly\n' +
            '\n' +
            'IRS filings listed correctly\n' +
            '\n' +
            'Bank account listed correctly\n' +
            '\n' +
            '411 directory assistance listed correctly',
    },

    {
        name: 'Create a Business Plan\n',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'The following are key aspects that every business plan should include:\n' +
            '\n' +
            'The Executive Summary – a 30 second pitch that outlines your business.\n' +
            '\n' +
            'Market Analysis – How big of a role you intent to play and why.\n' +
            '\n' +
            'Company Description – An overview of what the business will do and why it is viable.\n' +
            '\n' +
            'Organization & Management – Outline of the experience and expertise the company has.\n' +
            '\n' +
            'Marketing & Sales – Your strategy for customer acquisition and how it will be done.\n' +
            '\n' +
            'Products or Services – What product is the company going to develop or offer.\n' +
            '\n' +
            'Capitalization Requirements – How much funding is required and how will it be raised.\n' +
            '\n' +
            'Financials – At least 2 years of projected sales revenue that the industry and market can support.',
    },

    {
        name: 'List Personal Assets\n',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'Do the owners own residential real estate?\n' +
            '\n' +
            'What is the current market value of the property?\n' +
            '\n' +
            'Whats is currently owed against the property?\n' +
            '\n' +
            'What is the value of IRA & 401K investments?',
    },

    {
        name: 'List Business Assets',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'What is the amount of outstanding invoices you have with customers?\n' +
            '\n' +
            'What is the current amount of existing purchase orders?\n' +
            '\n' +
            'What is the total value of equipment owned outright by the business?',
    },

    {
        name: 'Check Your Personal Credit',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'Separating personal and business credit will better protect a business owner’s assets and credit ratings. By ensuring that your personal credit reports and credit scores are fully optimized you gain leverage in the business credit building process. Check all three of your personal credit reports and scores to verify their accuracy.\n' +
            '\n' +
            'Here are two recommended options:\n' +
            '\n' +
            'Annual Credit Report.com\n' +
            '\n' +
            'BusinessFundingEngine.ProCredit.com\n' +
            '\n' +
            'By optimizing your personal and business credit scores, you will make much more capital and resources available to your business at higher credit limits, better rates, terms and pricing.',
    },

    {
        name: 'Establish a Low 5 Business Bank Rating\n',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'If you have the ability to establish a Low 5 Bank Rating ($10k+ account balance) then do so as soon as possible. Although this task does not impact the business credit building process it does position your company to potentially receive a traditional loan from your financial institution',
    },

    {
        name: 'Establish a Low 5 Business Balance Rating\n',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'Once you have established a Bank Rating of Low 5 now it’s essential to maintain that balance for a period of 90 days prior to applying for a business loan or line of credit from your bank. By achieving a Low 5 Balance Rating the bank will look upon your business as having favorable cash flow and a strong ability to repay.',
    },

    {
        name: 'Secure a Business Loan',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'How do you accomplish this? In this task you will be securing a business loan with a certificate of deposit (CD) at the bank that is extending the business loan. You’ll make a deposit into a CD account at an SBA preferred lending bank. Then, you receive a business loan for 100% of the value of the CD.\n' +
            '\n' +
            'The process works very well and works every time so long as your personal credit is at least favorable in the 680+ range. The bank is not basing your business loan on your personal credit, but if your FICO® scores are in the low 500 range they may not do this deal for you. If your scores are low it is best to try small business banks and speak with an individual banker first.\n' +
            '\n' +
            'So where does your deposit come from? You can start with as little as $5,000. There are various ways to obtain the money needed for the bank CD deposit: family, friends, savings, garage sales, or any of the creative funding programs in the steps that follow.\n' +
            '\n' +
            'The Features of a Secured Bank Loan:\n' +
            '\n' +
            '1. It will appear on your business credit report just like any other loan.\n' +
            '\n' +
            '2. There will be no note in your file, or on your business credit reports, that show it’s “secured”.\n' +
            '\n' +
            '3. It will make your business credit report stand out to other banks and lenders who obviously know how hard it is to obtain a business bank loan.',
    },

    {
        name: 'Task Number 1\n',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'Monitor your Experian Business file by enrolling in Business Credit Advantage℠',
    },

    {
        name: 'Search for Your Business on Equifax',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'To check and see if your company has an Equifax Small Business Credit Report requires that you conduct a search. Once there, click on the ‘Company Search’ link and provide your company information in the “Find a Company” box and click on the “Search” button. If your company shows up you can purchase a one-time Business Credit Report or for ongoing access you can select a monitoring service for a monthly fee.\n' +
            '\n' +
            'If you get “No results found” for initial search we recommend conducting an advanced search by clicking on the link and checking one more time. If your company is still not listed, don’t worry the credit sources we list in Module 4 will enable you to start building your Equifax Business Credit Report. If your business does show up the Business Credit Monitoring plan is the best option to have ongoing access to your file as you continue to build it up',
    },

    {
        name: 'Order Your Equifax Small Business Credit Report\n',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'If your business is listed with Equifax Small Business you can either order your report online as outlined in Task #1 or you can get a free copy the old fashion way.\n' +
            '\n' +
            'By phone – You can call 1-800-727-8495 to be mailed a free copy, but only after your business has applied for credit with a lender or supplier that shares data with Equifax Small Business within the last 60 days. Lenders will not pull your company’s Equifax report without your authorization so you should know when a lender or supplier has requested it. Remember, whether your company was approved or denied credit, only that you applied entitles you to a free report.\n' +
            '\n' +
            'By mail – You can get a free copy of your Equifax Small Business Credit Report, even if you haven’t applied for any type of business in the last 60 days by mailing your request to the following address: Equifax P.O. Box 740249 Atlanta, GA 30374-0249\n' +
            '\n' +
            'Your request letter should say, Please forward me a copy of the available commercial credit report for: and then provide the exact legal name of your business, business address, EIN number, business phone number, and owner name.\n' +
            '\n' +
            'Remember, if your business is less than a year old and it hasn’t applied for credit then most likely your company does not have a listing. But, even if you haven’t applied for any type of credit but your company is more than a year old than you may have a business listing but it labeled as an empty file.',
    },

    {
        name: 'Search for Your Business on D&B\n',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'First step is to check and see if your company is already listed with Dun & Bradstreet by running a search. The search results will show whether or not your business currently has a file with Dun & Bradstreet. Depending on your results, you’ll want to follow the instructions in Task 2 or Task 3.',
    },

    {
        name: 'Task Number 2 - If Your Company Shows Up in Search',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'If your company shows up then you may want to sign-up for Credit Signal to get free access to changes in your D&B credit scores and ratings. With Credit Signal you’ll know firsthand whether your business credit scores have been affected by your business activities.',
    },

    {
        name: 'Task Number 3 - If Your Company Does Not Show Up in Search',
        image: require('../../../assets/dinero/pics/documents_pic.jpeg'),
        text:
            'If your company does not show up you’ll need to get a D-U-N-S® Number as soon as possible. You can go the free route and apply for a free D-U-N-S Number which takes about 30 days to receive. You’ll need to know your SIC code for this process. Go to NAICS.com and scroll down to the “Search SIC Codes by Industry” box.',
    },
];

const {width, height} = Dimensions.get('window');
export const BusinessCreditBuildingCourse = () => {
    const [page, setPage] = useState(0);
    const onViewRef = useRef((viewableItems) => {
        setPage(viewableItems.viewableItems[0].index);
    });
    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
    const flatlistRef = useRef(null);
    const itemwidth = width / 2;
    const itemwidtextend = 160;
    const imagewidth = 220;
    return (
        <View style={{flex: 1}}>
            <Text
                style={{
                    marginTop: 10,
                    color: '#000',
                    opacity: 0.5,
                    textAlign: 'center',
                    fontSize: 20,
                    padding: 20,
                }}>
                {/*{`Our Different Financing Plans\nWe Have No Credit Check 0% Interest Offers For You`}*/}
            </Text>
            <FlatList
                // initialScrollIndex={ page }
                // scrollToIndex={ page }
                // ref={ flatlistRef }
                // pagingEnabled={ true }
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
                            // backgroundColor: '#000',
                            marginTop: 0,
                        }}>
                        <Surface
                            style={{
                                backgroundColor: '#FFF',
                                height: height / 1.5,
                                width: itemwidth + itemwidtextend - 25,
                            }}>
                            <View style={{flex: 1}}>
                                <View
                                    style={{
                                        alignItems: 'center',
                                        paddingVertical: 10,
                                    }}>
                                    <Text
                                        style={{
                                            color: '#000',
                                            textAlign: 'center',
                                            fontWeight: '600',
                                            fontSize: 18,
                                        }}>
                                        {item.name}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        height: height / 4,
                                        backgroundColor: '#FFF',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Image
                                        style={{width: '100%', height: '100%'}}
                                        source={item.image}
                                    />
                                </View>
                                <ScrollView>
                                    <Text
                                        style={{
                                            marginTop: 10,
                                            color: '#000',
                                            fontSize: (height + width) / 85,
                                            padding: (height + width) / 50,
                                        }}>
                                        {item.text}
                                    </Text>
                                </ScrollView>
                            </View>
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
};
