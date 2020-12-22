import React, {Component} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

const SnackBarColor = {
    0: '#009688', //success
    1: '#FFCC00', //warning
    2: '#DD0000', //danger
};

class MaterialSnackbar extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(150);
        this.ShowSnackBar = false;
        this.state = {
            SnackBarInsideMsgHolder: '',
            color: '#009688',
        };
    }

    ShowSnackBarFunction(
        SnackBarInsideMsgHolder = 'Default SnackBar Message...',
        type,
        duration = 2000,
    ) {
        if (this.ShowSnackBar === false) {
            const color = SnackBarColor[type];
            this.setState({
                SnackBarInsideMsgHolder: SnackBarInsideMsgHolder,
                SnackBarDuration: duration,
                color,
            });
            this.ShowSnackBar = true;
            Animated.timing(this.animatedValue, {
                toValue: 50,
                duration: 400,
                useNativeDriver: true,
            }).start(this.hide(duration));
        }
    }

    hide = (duration) => {
        this.timerID = setTimeout(() => {
            Animated.timing(this.animatedValue, {
                toValue: 150,
                duration: 400,
                useNativeDriver: true,
            }).start(() => {
                this.ShowSnackBar = false;
                clearTimeout(this.timerID);
            });
        }, duration);
    };

    render() {
        const {color} = this.state;
        return (
            <Animated.View
                style={[
                    {transform: [{translateY: this.animatedValue}]},
                    styles.SnackBarContainter,
                    {backgroundColor: color},
                ]}>
                <Text numberOfLines={1} style={styles.SnackBarMessage}>
                    {this.state.SnackBarInsideMsgHolder}
                </Text>
            </Animated.View>
        );
    }
}

export default MaterialSnackbar;

const styles = StyleSheet.create({
    SnackBarContainter: {
        position: 'absolute',
        backgroundColor: '#009688',
        flexDirection: 'row',
        alignItems: 'flex-start',
        elevation: 10,
        left: 0,
        bottom: 0,
        right: 0,
        height: 100,
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 55,
    },
    SnackBarMessage: {
        color: '#fff',
        fontSize: 14,
    },
});
