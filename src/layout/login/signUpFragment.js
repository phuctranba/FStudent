import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {styleSignUp as style} from './style';

class LoginModal extends Component {

    constructor(props) {
        super(props);

        this.style = style(this.props.color);
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        if (nextProps.color !== this.props.color) {
            this.style = style(this.props.color);
        }

        return true;
    }

    componentDidMount(): void {
        this.playIcon(this.icon_user, 30, 30);
        this.playIcon(this.icon_password, 50, 50);
        this.playIcon(this.icon_email, 70, 70);
        this.playIcon(this.icon_repassword, 55, 55);
    }

    playIcon(icon, from, to) {
        icon.play(from, to);
    }

    render() {
        return (
            <View style={this.style.container}>
                <Text allowFontScaling={false} style={this.style.titleFragment}>Đăng ký</Text>
                <Text allowFontScaling={false} style={this.style.textDescription}>
                    Tham gia cùng chúng tôi!</Text>


                {/*Form điền*/}
                <View style={this.style.viewForm}>
                    <LottieView ref={view => this.icon_user = view} loop={false}
                                source={require('../../assets/lottie/user')}
                                style={this.style.iconUser}
                                speed={2}
                                colorFilters={[{
                                    keypath: "User Outlines 2",
                                    color: this.props.color.blue_1,
                                },{
                                    keypath: "User Outlines",
                                    color: this.props.color.background,
                                }]}/>
                    <TextInput style={this.style.inputText}
                               placeholder={'Tên tài khoản'}
                               onFocus={() => this.playIcon(this.icon_user, 0, 50)}
                               underlineColorAndroid={'transparent'}
                               returnKeyType={'next'}
                               allowFontScaling={false}
                               onSubmitEditing={() => {
                                   this.input_email.focus();
                               }}
                               placeholderTextColor={this.props.color.blue_1}
                               blurOnSubmit={false}/>
                </View>


                <View style={this.style.viewForm}>
                    <LottieView ref={view => this.icon_email = view}
                                source={require('../../assets/lottie/email')}
                                style={this.style.iconEmail_RePass}
                                speed={-1} loop={false}
                                colorFilters={[{
                                    keypath: "Layer 8 Outlines 2",
                                    color: this.props.color.blue_1
                                },{
                                    keypath: "Layer 8 Outlines 4",
                                    color: this.props.color.blue_1
                                }]}/>
                    <TextInput style={this.style.inputText}
                               placeholder={'Email đăng ký'}
                               onFocus={() => this.playIcon(this.icon_email, 70, 90)}
                               underlineColorAndroid={'transparent'}
                               returnKeyType={'next'}
                               allowFontScaling={false}
                               onSubmitEditing={() => {
                                   this.input_pass.focus();
                               }}
                               placeholderTextColor={this.props.color.blue_1}
                               blurOnSubmit={false}
                               ref={view => this.input_email = view}/>
                </View>

                <View style={this.style.viewForm}>
                    <LottieView ref={view => this.icon_password = view}
                                source={require('../../assets/lottie/password')}
                                style={this.style.iconPassword}
                                speed={1.5} loop={false}
                                colorFilters={[{
                                    keypath: "Layer 9 Outlines",
                                    color: this.props.color.blue_1
                                },{
                                    keypath: "Layer 2 Outlines",
                                    color: this.props.color.blue_1
                                }]}/>
                    <TextInput style={this.style.inputText}
                               placeholder={'Mật khẩu'}
                               onFocus={() => this.playIcon(this.icon_password, 0, 50)}
                               underlineColorAndroid={'transparent'}
                               returnKeyType={'next'}
                               allowFontScaling={false}
                               onSubmitEditing={() => {
                                   this.input_repass.focus();
                               }}
                               placeholderTextColor={this.props.color.blue_1}
                               blurOnSubmit={false}
                               ref={view => this.input_pass = view}/>
                </View>

                <View style={this.style.viewForm}>
                    <LottieView ref={view => this.icon_repassword = view}
                                source={require('../../assets/lottie/rePassword')}
                                style={this.style.iconEmail_RePass}
                                speed={3} loop={false}
                                colorFilters={[{
                                    keypath: "3 Outlines",
                                    color: this.props.color.blue_1
                                }]}/>
                    <TextInput style={this.style.inputText}
                               placeholder={'Xác nhận mật khẩu'}
                               onFocus={() => this.playIcon(this.icon_repassword, 0, 55)}
                               underlineColorAndroid={'transparent'}
                               returnKeyType={'done'}
                               allowFontScaling={false}
                               blurOnSubmit={false}
                               placeholderTextColor={this.props.color.blue_1}
                               ref={view => this.input_repass = view}/>
                </View>

                {/*Nút đăng ký*/}
                <TouchableOpacity style={this.style.buttonSignUp}>
                    <Text allowFontScaling={false} style={this.style.textSignUp}>
                        Đăng ký</Text>
                </TouchableOpacity>

                <View style={this.style.viewOr}>
                    <View style={this.style.viewStrokeOr}/>
                    <Text allowFontScaling={false} style={this.style.textOr}>Hoặc</Text>
                </View>


                {/*Nút swipe*/}
                <View style={this.style.viewButtonSwipe}>

                    <Text allowFontScaling={false}
                          style={this.style.textIfHaveAccount}>
                        Nếu bạn đã có tài khoản.</Text>

                    <TouchableOpacity style={[{justifyContent: 'flex-end'}, this.style.buttonSwipe]}
                                      onPress={() => this.props.snapItem(1)}>

                        <Text allowFontScaling={false} style={this.style.textSwipe}>Đăng nhập</Text>
                        <LottieView autoPlay
                                    source={require('../../assets/lottie/swiperight')}
                                    style={this.style.iconSwipe}
                                    speed={2}
                                    colorFilters={[{
                                        keypath: "scroll_up",
                                        color: this.props.color.background
                                    }]}/>

                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

export default LoginModal;


