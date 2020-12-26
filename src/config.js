const appMeta = {
    varsion: '1.5',
    build: 15,
};

export const getSubdomain = (domain) => {
    const website = appConfig.appWebsite;
    return website.replace('www', domain);
};

const appConfig = {
    phoneNumber: '1234',
    webinarLink: 'https://www.youtube.com/watch?v=xNCfnbGT5hY',

    // whitelabel: true,
    // appName: 'Business Credit Builders',
    // appDomain: 'getdinerotoday',
    // appWebsite: 'https://businesscreditbuilders.getdinerotoday.com',
    // allowRegister: true,
    // appLogo: require('./assets/dinero/whitelabel/logotrans.png'),

    whitelabel: false,
    appName: 'Get Dinero Today',
    appDomain: 'getdinerotoday',
    appBackGround: require('./assets/dinero/background.png'),
    appLogo: require('./assets/dinero/logo.png'),
    drawerBackgroundColor: '#25313f',
    showWebinar: true,
    // appWebsite: 'https://www.getdinerotoday.com',
    appWebsite: 'http://127.0.0.1:8000',
    allowRegister: true,

    // appName: 'Get Moe Fit',
    // appName: 'Business Builders MF',
    // appDomain: 'getmoefitbusinessbuilders',
    // appLogo: require('./assets/dinero/moefit/logo1.png'),
    // drawerBackgroundColor: '#25313f',
    // appWebsite: 'https://www.getmoefitbusinessbuilders.com',
    // allowRegister: true,

    // appName: 'Professor Honeys Credit and Lending',
    // appName: 'Business Builders PH',s
    // appLogo: require('./assets/dinero/whitelabel/honey.png'),
    // appDomain: 'honeyprofessorbusinessbuilders',
    // appWebsite: 'https://www.honeyprofessorbusinessbuilders.com',
    // allowRegister: true,

    // appName: 'Holliday Consulting',
    // appName: 'Business Builders HC',
    // appLogo: require('./assets/dinero/hlogo.png'),
    // appDomain: 'hollidayconsultingbusinessbuilders',
    // appWebsite: 'https://www.hollidayconsultingbusinessbuilders.com',
    // allowRegister: false,
    // showWebinar: false,
    // appBackGround: null,
    // drawerBackgroundColor: '#191919',
    // appBackGroundColor: '#eeeeee',

    // appName: 'Saw Corporation',
    // appLogo: require('./assets/dinero/sawlogo.png'),
    // appDomain: 'sawcorporationbusinessbuilders',
    // appWebsite: 'https://www.sawcorporationbusinessbuilders.com',
    // allowRegister: true,
};

export const apiConfig = {
    tokenRefreshPath: 'token/refresh/',
    baseUrl: `${appConfig.appWebsite}/api`,
};

export const YT_API_KEY = 'AIzaSyC8tXfVui-sLwlqt2C-b5d37k5BrzLz-MY';
export const ALAN_API_KEY =
    '8cc4f6ead0daaa0237224e6c859c00b22e956eca572e1d8b807a3e2338fdd0dc/stage';
export default appConfig;
