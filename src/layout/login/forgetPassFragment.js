import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import LottieView from 'lottie-react-native';
import {styleForgetPass as style} from './style';

class SignInFragment extends Component {

    constructor(props) {
        super(props);

        this.play = this.playIcon.bind(this);
        this.style = style(this.props.color);
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        if (nextProps.color !== this.props.color) {
            this.style = style(this.props.color);
        }

        return true;
    }

    componentDidMount(): void {
        this.playIcon();
    }

    playIcon() {
        this.icon_email.play(70, 90);
    }

    render() {
        return (
            <View style={this.style.container}>
                <Text allowFontScaling={false} style={this.style.titleFragment}>Quên mật khẩu</Text>

                <Text allowFontScaling={false} style={this.style.textDescription}>
                    {'Đặt lại mật khẩu của bạn nào! \n' +
                    'Nhưng lần này thì đừng có quên đấy nhé!'}</Text>

                <View style={this.style.viewForm}>
                    <LottieView ref={view => this.icon_email = view} loop={false}
                                source={require('../../assets/lottie/email')}
                                style={this.style.iconEmail}
                                speed={-1}
                                colorFilters={[{
                                    keypath: "Layer 8 Outlines 2",
                                    color: this.props.color.blue_1
                                },{
                                    keypath: "Layer 8 Outlines 4",
                                    color: this.props.color.blue_1
                                }]}/>
                    <TextInput style={this.style.inputText}
                               placeholder={'Emai đăng ký'}
                               onFocus={this.play}
                               underlineColorAndroid={'transparent'}
                               returnKeyType={'done'}
                               allowFontScaling={false}
                               placeholderTextColor={this.props.color.blue_1}
                               blurOnSubmit={false}/>
                </View>


                <TouchableOpacity style={this.style.buttonResetPass}>
                    <Text allowFontScaling={false} style={this.style.textResetPass}>
                        Đặt lại mật khẩu</Text>
                </TouchableOpacity>

                <View style={this.style.viewOr}>
                    <View style={this.style.viewStrokeOr}/>
                    <Text allowFontScaling={false} style={this.style.textOr}>Hoặc</Text>

                </View>

                <View style={this.style.viewButtonSwipe}>

                    <TouchableOpacity
                        style={this.style.buttonSwipe}
                        onPress={() => this.props.snapItem(1)}>
                        <LottieView autoPlay
                                    source={require('../../assets/lottie/swipleft')}
                                    style={this.style.iconSwipe}
                                    speed={2}
                                    colorFilters={[{
                                        keypath: "scroll_up",
                                        color: this.props.color.background
                                    }]}/>
                        <Text allowFontScaling={false} style={this.style.textSwipe}>Đăng nhập</Text>
                    </TouchableOpacity>

                    <Text allowFontScaling={false} style={this.style.textIfHaveAccount}>
                        Khi đã có lại mật khẩu!</Text>

                </View>
            </View>
        );
    }
}

export default SignInFragment;


