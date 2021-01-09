const appConfig = {
    // appWebsite: 'http://127.0.0.1:8000',

    // com.millennialbusiness.businesscreditbuilders
    // appName: 'Business Credit Builders',
    // whitelabel: true,
    // webinarLink: 'https://www.youtube.com/watch?v=xNCfnbGT5hY',
    // appWebsite: 'https://businesscreditbuilders.getdinerotoday.com',
    // appLogo: require('./assets/dinero/whitelabel/logotrans.png'),
    // allowRegister: true,
    // showWebinar: true,

    // com.millennialbusiness.getdinerotodayapp
    appName: 'Get Dinero Today',
    whitelabel: false,
    webinarLink: 'https://www.youtube.com/watch?v=61P3fl9GEiw',
    appWebsite: 'https://www.getdinerotoday.com',
    appBackGround: require('./assets/dinero/background.png'),
    appLogo: require('./assets/dinero/logo.png'),
    drawerBackgroundColor: '#25313f',
    showWebinar: true,
    allowRegister: true,

    // com.millennialbusiness.moefit
    // appName: 'Get Moe Fit',
    // whitelabel: false,
    // appLogo: require('./assets/dinero/moefit/logo1.png'),
    // webinarLink: 'https://www.youtube.com/watch?v=61P3fl9GEiw',
    // drawerBackgroundColor: '#25313f',
    // appWebsite: 'https://www.getmoefitbusinessbuilders.com',
    // allowRegister: true,
    // showWebinar: true,

    // com.millennialbusiness.moefitbb
    // appName: 'Business Builders MF',
    // whitelabel: true,
    // webinarLink: 'https://www.youtube.com/watch?v=xNCfnbGT5hY',
    // appLogo: require('./assets/dinero/whitelabel/logotrans.png'),
    // appWebsite: 'https://businesscreditbuilders.getmoefitbusinessbuilders.com',
    // allowRegister: true,
    // showWebinar: true,

    // com.millennialbusiness.honeywl
    // appName: 'Business Builders PH',
    // whitelabel: true,
    // appLogo: require('./assets/dinero/whitelabel/logotrans.png'),
    // webinarLink: 'https://www.youtube.com/watch?v=xNCfnbGT5hY',
    // appWebsite:
    //     'https://businesscreditbuilders.honeyprofessorbusinessbuilders.com',
    // allowRegister: true,
    // showWebinar: true,

    // com.millennialbusiness.honey
    // appName: 'Professor Honeys Credit and Lending',
    // whitelabel: false,
    // webinarLink: 'https://www.youtube.com/watch?v=61P3fl9GEiw',
    // appLogo: require('./assets/dinero/whitelabel/honey.png'),
    // appWebsite: 'https://www.honeyprofessorbusinessbuilders.com',
    // allowRegister: true,
    // showWebinar: true,

    // com.millennialbusiness.hollidayconsultingbb
    // appName: 'Business Builders HC',
    // whitelabel: true,
    // appLogo: require('./assets/dinero/whitelabel/logotrans.png'),
    // webinarLink: 'https://www.youtube.com/watch?v=xNCfnbGT5hY',
    // appWebsite:
    //     'https://businesscreditbuilders.hollidayconsultingbusinessbuilders.com',
    // allowRegister: false,
    // showWebinar: false,

    // com.millennialbusiness.hollidayconsulting
    // appName: 'Holliday Consulting',
    // whitelabel: false,
    // appLogo: require('./assets/dinero/hlogo.png'),
    // webinarLink: 'https://www.youtube.com/watch?v=61P3fl9GEiw',
    // appWebsite: 'https://www.hollidayconsultingbusinessbuilders.com',
    // allowRegister: false,
    // showWebinar: false,
    // appBackGround: null,
    // drawerBackgroundColor: '#191919',
    // appBackGroundColor: '#eeeeee',

    // appName: 'Saw Corporation',
    // appLogo: require('./assets/dinero/sawlogo.png'),
    // appWebsite: 'https://www.sawcorporationbusinessbuilders.com',
    // allowRegister: true,
    // showWebinar: true,
};

export const getSubdomain = (domain) => {
    const website = appConfig.appWebsite;
    return website.replace('www', domain);
};

export const apiConfig = {
    tokenRefreshPath: 'token/refresh/',
    baseUrl: `${appConfig.appWebsite}/api`,
};

export const YT_API_KEY = 'AIzaSyC8tXfVui-sLwlqt2C-b5d37k5BrzLz-MY';
export const ALAN_API_KEY =
    '8cc4f6ead0daaa0237224e6c859c00b22e956eca572e1d8b807a3e2338fdd0dc/stage';
export default appConfig;
