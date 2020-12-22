import React from 'react';
import {
    Image,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import MaterialButton from '../material/MaterialButton';
import MaterialInput from '../material/MaterialInput';
import MaterialSnackbar from '../material/MaterialSnackbar';
import appConfig from '../../config';
import {changeLoginMessage, userLogin} from '../../store/user/Actions';
import {connect} from 'react-redux';

let margin = 10;

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        loading: false,
    };
    snackbarRef = React.createRef();

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.showSnackBarMessage(prevProps);
    }

    showSnackBarMessage = (prevProps) => {
        if (
            prevProps.loginStatus !== this.props.loginStatus &&
            this.props.loginStatus !== ''
        ) {
            this.snackbarRef.current.ShowSnackBarFunction(
                this.props.loginStatus,
                2,
            );
            this.props.changeLoginMessage('');
        }
    };

    _handleLogin = () => {
        Keyboard.dismiss();
        const {username, password} = this.state;
        this.props.userLogin({username, password});
    };

    render() {
        const {navigation} = this.props;
        const {username, password, loading} = this.state;
        const disable = Boolean(!username || !password);
        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <ImageBackground
                        source={appConfig.appBackGround}
                        style={{
                            flex: 1,
                            backgroundColor:
                                !appConfig.appBackGround &&
                                appConfig.appBackGroundColor,
                        }}>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingTop: 50,
                            }}>
                            <Image
                                source={appConfig.appLogo}
                                style={{
                                    height: 200,
                                    width: 200,
                                    resizeMode: 'contain',
                                }}
                            />
                        </View>

                        <View
                            style={{
                                margin: margin,
                                paddingHorizontal: margin,
                                paddingBottom: margin,
                                backgroundColor: 'white',
                                marginBottom: 100,
                                elevation: 3,
                                shadowOffset: {width: 0, height: 2},
                                shadowOpacity: 0.3,
                            }}>
                            <MaterialInput
                                bgColor="#f1f5f7"
                                placeholder="Email"
                                value={username}
                                onChangeText={(username) =>
                                    this.setState({username})
                                }
                            />
                            <MaterialInput
                                bgColor="#f1f5f7"
                                placeholder="Password"
                                isPassword={true}
                                value={password}
                                onChangeText={(password) =>
                                    this.setState({password})
                                }
                            />

                            <MaterialButton
                                title="Sign In"
                                style={{
                                    backgroundColor:
                                        disable || loading
                                            ? '#4b71fa'
                                            : '#4b71fa',
                                    borderRadius: 10,
                                    marginTop: 25,
                                }}
                                buttonPress={() => {
                                    !(disable || loading) &&
                                        this._handleLogin();
                                }}
                            />

                            {appConfig.allowRegister && (
                                <TouchableOpacity
                                    style={{
                                        flexDirection: 'row',
                                        marginHorizontal: margin,
                                        marginTop: 20,
                                        marginBottom: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                    onPress={() =>
                                        navigation.navigate('SignUp')
                                    }>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            textAlign: 'center',
                                        }}>
                                        <Text>Don't have an account?</Text>
                                        <Text style={{fontWeight: 'bold'}}>
                                            {' '}
                                            Sign Up
                                        </Text>
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </ImageBackground>
                </TouchableWithoutFeedback>
                <MaterialSnackbar ref={this.snackbarRef} />
            </KeyboardAvoidingView>
        );
    }
}

const mapDispatchToProps = {
    userLogin,
    changeLoginMessage,
};

const mapStateToProps = (state) => {
    return {
        loginStatus: state.user.loginStatus,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
