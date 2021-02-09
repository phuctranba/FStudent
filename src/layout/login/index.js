import React, {Component} from 'react';
import SignInFragment from './signInFragment';
import SignUpFragment from './signUpFragment';
import ForgetPassFragment from './forgetPassFragment';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {lightMode, darkNormalMode, darkBlueMode} from '../../utils/values/color';

const data = [
    'SignUpFragment',
    'SignInFragment',
    'ForgetPassFragment',
];

class LoginScreen extends Component {


    constructor(props) {
        super(props);
        this.color = lightMode;

        this.move = this.props.route.params.move;
    };

    _render_item(item) {
        switch (item) {
            case 'SignUpFragment':
                return (
                    <SignUpFragment snapItem={this.snapItem} color={this.color} />
                );
            case 'SignInFragment':
                return (
                    <SignInFragment move ={this.move} navigation={this.props.navigation} snapItem={this.snapItem} color={this.color}/>
                );
            case 'ForgetPassFragment':
                return (
                    <ForgetPassFragment snapItem={this.snapItem} color={this.color}/>
                );
            default:
                return (<View/>);
        }
    };

    snapItem= (index) =>{
        console.log('Called');
        console.log(this.carousel);
        this.carousel.snapToItem(index,true);
        console.log(this.carousel.snapToItem);
        console.log(this);
    };

    render() {
        return (
            <LinearGradient colors={[this.color.blue_1, this.color.blue_mid, this.color.blue_3]}
                            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <LottieView source={require('../../assets/lottie/book')} autoPlay loop
                            style={{
                                width: verticalScale(150), height: verticalScale(150),
                                marginTop: verticalScale(20),
                            }}/>
                <Text allowFontScaling={false} style={{
                    color: this.color.background, fontSize: moderateScale(40, 0.3)
                    , fontWeight: 'bold', marginTop: verticalScale(30),
                }}>Fstudent</Text>

                <Carousel
                    ref={(c) => {
                        this.carousel = c;
                    }}
                    onBeforeSnapToItem={() => console.log('aasd')}
                    data={data}
                    renderItem={(item) => this._render_item(item.item)}
                    sliderWidth={Dimensions.get('window').width}
                    // onSnapToItem={(index) => {
                    //     let loadIndex = this.props.data.length - 3;
                    //     if (index === loadIndex && this.props.total!==this.props.data.length) {
                    //         this.props.more();
                    //     } }}
                    // activeSlideOffset={2}
                    enableMomentum={true}
                    itemWidth={moderateScale(300)}
                    firstItem={1}
                    containerCustomStyle={{marginBottom: verticalScale(10)}}
                    contentContainerCustomStyle={{
                        justifyContent: 'center', alignItems: 'center'
                    }}
                    // activeSlideAlignment={"start"}
                />
            </LinearGradient>
        );
    }
}


export default LoginScreen;
