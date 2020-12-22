import React, {Component} from 'react';
import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
} from 'react-native';
import MaterialButton from '../material/MaterialButton';
import MaterialInput from '../material/MaterialInput';
import MaterialSnackbar from '../material/MaterialSnackbar';
import appConfig from '../../config';
import {changeLoginMessage, userRegister} from '../../store/user/Actions';
import {connect} from 'react-redux';

const emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        first_name: '',
        last_name: '',
        phone_number: '',
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

    handleSignUp = () => {
        Keyboard.dismiss();
        const {
            email,
            password,
            confirmPassword,
            first_name,
            last_name,
            phone_number,
        } = this.state;
        if (!emailValidator.test(email)) {
            return this.snackbarRef.current.ShowSnackBarFunction(
                'Email address badly formatted.',
                1,
            );
        }
        if (password !== confirmPassword) {
            return this.snackbarRef.current.ShowSnackBarFunction(
                'Password does not match.',
                1,
            );
        }

        this.props.userRegister({
            email,
            password,
            first_name,
            last_name,
            phone_number,
        });
    };

    render() {
        const {
            email,
            password,
            first_name,
            last_name,
            phone_number,
            confirmPassword,
            loading,
        } = this.state;
        const {navigation} = this.props;
        const disable = Boolean(
            !email ||
                !password ||
                !first_name ||
                !last_name ||
                !confirmPassword ||
                !phone_number,
        );
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
                                padding: 0,
                                backgroundColor: 'white',
                                margin: 10,
                                elevation: 3,
                                shadowOffset: {width: 0, height: 2},
                                shadowOpacity: 0.3,
                                marginBottom: 60,
                                paddingHorizontal: 10,
                                paddingBottom: 10,
                            }}>
                            <MaterialInput
                                bgColor="#f1f5f7"
                                value={first_name}
                                placeholder="First Name"
                                onChangeText={(first_name) =>
                                    this.setState({first_name})
                                }
                            />
                            <MaterialInput
                                bgColor="#f1f5f7"
                                value={last_name}
                                placeholder="Last Name"
                                onChangeText={(last_name) =>
                                    this.setState({last_name})
                                }
                            />
                            <MaterialInput
                                bgColor="#f1f5f7"
                                value={email}
                                placeholder="Email"
                                type="email-address"
                                onChangeText={(email) => this.setState({email})}
                            />
                            <MaterialInput
                                bgColor="#f1f5f7"
                                value={password}
                                placeholder="Password"
                                isPassword={true}
                                onChangeText={(password) =>
                                    this.setState({password})
                                }
                            />
                            <MaterialInput
                                bgColor="#f1f5f7"
                                value={confirmPassword}
                                placeholder="Confirm Password"
                                isPassword={true}
                                onChangeText={(confirmPassword) =>
                                    this.setState({confirmPassword})
                                }
                            />
                            <MaterialInput
                                bgColor="#f1f5f7"
                                value={phone_number}
                                placeholder="Phone"
                                onChangeText={(phone_number) =>
                                    this.setState({phone_number})
                                }
                            />
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 15,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onPress={() => {}}>
                                <Text
                                    style={{fontSize: 14, textAlign: 'center'}}>
                                    <Text>
                                        By clicking Create An Account, you agree
                                        to our{' '}
                                    </Text>
                                    <Text style={{fontWeight: 'bold'}}>
                                        Term of Services.
                                    </Text>
                                </Text>
                            </TouchableOpacity>
                            <MaterialButton
                                title="Create An Account"
                                style={{
                                    marginTop: 10,
                                    backgroundColor:
                                        disable || loading
                                            ? '#4b71fa'
                                            : '#4b71fa',
                                    borderRadius: 10,
                                }}
                                buttonPress={this.handleSignUp}
                            />
                            <View
                                style={{
                                    marginTop: 20,
                                    borderBottomColor: '#727272',
                                    borderBottomWidth: 1,
                                    marginBottom: 20,
                                }}
                            />
                            <Text style={{fontSize: 14, textAlign: 'center'}}>
                                Have an account?
                            </Text>
                            <MaterialButton
                                title="Log In"
                                style={{
                                    marginTop: 10,
                                    backgroundColor:
                                        disable || loading
                                            ? '#7bcb4d'
                                            : '#7bcb4d',
                                    borderRadius: 10,
                                }}
                                buttonPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    </ImageBackground>
                </TouchableWithoutFeedback>
                <MaterialSnackbar ref={this.snackbarRef} />
            </KeyboardAvoidingView>
        );
    }
}

const mapDispatchToProps = {
    userRegister,
    changeLoginMessage,
};

const mapStateToProps = (state) => {
    return {
        loginStatus: state.user.loginStatus,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
