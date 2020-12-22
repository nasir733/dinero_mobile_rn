let navigator;

export const setTopLevelNavigator = (navigatorRef) => {
    navigator = navigatorRef;
};

export const navigate = (routeName, params) => {
    if (navigator) {
        try {
            navigator.navigate({
                name: routeName,
                params,
            });
        } catch (err) {
            console.log('Failed to navigate: ', err);
        }
    }
};
