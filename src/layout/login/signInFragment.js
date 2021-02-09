import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import LottieView from 'lottie-react-native';
import {styleSignIn as style} from './style';

class SignInFragment extends Component {

    constructor(props) {
        super(props);

        this.style = style(this.props.color);
    };

    shouldComponentUpdate(nextProps, nextState, nextContext){

        if (nextProps.color !== this.props.color) {
            this.style = style(this.props.color);
        }

        return true;
    }

    componentDidMount(): void {
        this.playIcon(this.icon_user, 30, 30);
        this.playIcon(this.icon_password, 50, 50);
    }

    playIcon(icon, from, to) {
        icon.play(from, to);
    }

    render() {

        return (
            <View style={this.style.container}>
                <Text allowFontScaling={false} style={this.style.titleFragment}>Đăng nhập</Text>

                <Text allowFontScaling={false} style={this.style.textDescription}>
                    Cùng phát triển bản thân!</Text>

                {/*Form điền*/}
                <View style={this.style.viewForm}>
                    <LottieView ref={view => this.icon_user = view} loop={false}
                                source={require('../../assets/lottie/user.json')}
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
                               underlineColorAndroid={'transparent'}
                               returnKeyType={'next'}
                               allowFontScaling={false}
                               onSubmitEditing={() => {
                                   this.input_pass.focus();
                               }}
                               placeholderTextColor={this.props.color.blue_1}
                               blurOnSubmit={false}
                               placeholder={'Email đăng nhập'}
                               onFocus={() => this.playIcon(this.icon_user, 0, 30)}/>
                </View>


                <View style={this.style.viewForm}>
                    <LottieView ref={view => this.icon_password = view}
                                source={require('../../assets/lottie/password.json')}
                                style={this.style.iconPassword}
                                speed={2} loop={false}
                                colorFilters={[{
                                    keypath: "Layer 9 Outlines",
                                    color: this.props.color.blue_1
                                },{
                                    keypath: "Layer 2 Outlines",
                                    color: this.props.color.blue_1
                                }]}/>
                    <TextInput style={this.style.inputText}
                               underlineColorAndroid={'transparent'}
                               returnKeyType={'done'}
                               allowFontScaling={false}
                               ref={view => this.input_pass = view}
                               blurOnSubmit={false}
                               placeholderTextColor={this.props.color.blue_1}
                               placeholder={'Mật khẩu'}
                               onFocus={() => this.playIcon(this.icon_password, 0, 50)}/>
                </View>

                {/*Nút đăng nhập*/}
                <TouchableOpacity style={this.style.buttonSignIn}
                                  onPress={() => this.props.move()}>
                    <Text allowFontScaling={false} style={this.style.textSignIn}>
                        Đăng nhập</Text>
                </TouchableOpacity>

                <View style={this.style.viewOr}>
                    <View style={this.style.viewStrokeOr}/>
                    <Text allowFontScaling={false} style={this.style.textOr}>Hoặc</Text>

                </View>

                {/*2 nút dưới*/}
                <View style={this.style.viewButtonSwipe}>

                    <TouchableOpacity
                        onPress={() => this.props.snapItem(0)}
                        style={[{justifyContent: 'flex-start'}, this.style.buttonSwipe]}>
                        <LottieView autoPlay
                                    source={require('../../assets/lottie/swipleft.json')}
                                    style={this.style.iconSwipe}
                                    speed={2}
                                    colorFilters={[{
                                        keypath: "scroll_up",
                                        color: this.props.color.background
                                    }]}/>
                        <Text allowFontScaling={false} style={[this.style.textSwipe,{
                            width: moderateScale(60),
                            textAlign: 'center',
                        }]}>Đăng ký</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[{justifyContent: 'flex-end'}, this.style.buttonSwipe]}
                                      onPress={() => this.props.snapItem(2)}>
                        <Text allowFontScaling={false} style={[this.style.textSwipe,{
                            width: moderateScale(75),
                            textAlign: 'right',
                        }]}>Quên mật khẩu</Text>
                        <LottieView autoPlay
                                    source={require('../../assets/lottie/swiperight.json')}
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

export default SignInFragment;


