export const processUrl = (url) => {
    if (url.startsWith('http')) {
        return url;
    } else {
        return 'http://' + url;
    }
};
