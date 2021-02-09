'use strict';
import{
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Animated,
} from 'react-native';
import React, {Component} from 'react';
import {sizes} from "../../utils/values"
import style from './style'
import {verticalScale, scale, moderateScale} from "react-native-size-matters";
import Icon from '../icon'

class Toast extends Component {

    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);

        // Đống state để quản lí toast
        this.state = {
            toastShown: false,
            textColor: 'black',
            text: 'Thông báo',
            icon: null,
            iconColor: "white",
            iconType: "FontAwesome",
            textButton:"Nút",
            textColorButton:'white',
            typeButton:null,
            backgroundButton:'white',
            iconButton: null,
            iconColorButton: "white",
            iconTypeButton: "FontAwesome",
            background: 'white',
            timeShow:350,
            delay:0,
            duration:3000,
            height_toast:0,

            // Hàm và dữ liệu được gửi vào cho các sự kiện nút
            function_parent:()=>{},
            data:null
        }
    }


    show({
                  textColor= 'black',
                  text= 'Thông báo',
                  icon= null,
                  iconColor= "white",
                  iconType= "FontAwesome",
                  textButton="Nút",
                  textColorButton='white',
                  typeButton=null,
                  backgroundButton='white',
                  iconButton= null,
                  iconColorButton= "white",
                  iconTypeButton= "FontAwesome",
                  background= 'white',
                  timeShow=350,
                  delay=0,
                  duration=3000,
                  function_parent=null,
                  data=null}) {

        // Kiểm tra xem có đang hiện toast hay không, nếu được ấn tiếp sẽ làm mới thời gian hiện
        //     bằng cách huỷ sự hiện ẩn đi và gọi lại từ sự kiện hiện bên dưới
        if(this.state.toastShown&&this.hide_toast) {
            clearTimeout(this.hide_toast);
        }

        this.setState({
            toastShown: true,
            textColor: textColor,
            text: text,
            icon: icon,
            iconColor: iconColor,
            iconType: iconType,
            textButton:textButton,
            textColorButton:textColorButton,
            typeButton:typeButton,
            backgroundButton:backgroundButton,
            iconButton: iconButton,
            iconColorButton: iconColorButton,
            iconTypeButton: iconTypeButton,
            background: background,
            timeShow:timeShow,
            delay:delay,
            duration:duration,
            function_parent:function_parent,
            data:data});

        setTimeout(() => {
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 1,
                    duration: timeShow
                }).start(this.hide(duration, timeShow)) /*Gọi hàm ẩn toast*/
        }, delay);

    }

    hide_now(){

        if(this.state.toastShown&&this.hide_toast) {
            clearTimeout(this.hide_toast);
        }

        Animated.timing(
            this.animatedValue,
            {
                toValue: 0,
                duration: this.state.timeShow
            }).start()
    }

    hide(duration,timeShow){
        this.hide_toast=setTimeout(() => {
            this.setState({ toastShown: false });
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 0,
                    duration: timeShow
                }).start()
        }, duration);
    }


    // Render ra button tuỳ chọn theo tham số truyền vào
    _render_button(){
        if(this.state.typeButton!==null){
            switch (this.state.typeButton) {
                case "button": return(
                    <TouchableOpacity activeOpacity={0.8} style={[this.style.tou_button,{backgroundColor: this.state.backgroundButton}]}
                    onPress={()=>{

                        this.hide_now();

                        if(this.state.function_parent!==null){
                           return this.state.function_parent(this.state.data);
                        }
                    }}>
                        <Icon size={moderateScale(15)} type={this.state.iconTypeButton}
                              name={this.state.iconButton}
                              color={this.state.iconColorButton}
                              containerStyle={{marginRight:scale(10)}} />
                        <Text allowFontScaling={false} style={{color:this.state.textColorButton}}>{this.state.textButton}</Text>
                    </TouchableOpacity>
                );
                default: return null;
            }
        }
    }

    render() {
        // tạo style theo state, cho chức năng thay đổi màu giao diện
        this.style=style(this.props.color);
        let num = this.props.marginBottom+this.state.height_toast+(this.props.marginBottom/10);

        let animationY = this.animatedValue.interpolate({
            inputRange: [0,0.2, 1],
            outputRange: [sizes.Height_Devices,sizes.Height_Devices-(num/2), sizes.Height_Devices-num]
        });

        let animationOpa = this.animatedValue.interpolate({
            inputRange: [0,0.6, 1],
            outputRange: [0,0,1]
        });

        return (
            <Animated.View onLayout={e=>this.state.height_toast!==e.nativeEvent.layout.height?this.setState({height_toast:e.nativeEvent.layout.height}):null}
                style={[this.style.container,{ transform: [{ translateY: animationY }], backgroundColor: this.state.background, opacity:animationOpa}]}>


                <Text allowFontScaling={false} style={[this.style.text_toast,{color: this.state.textColor}]}>
                    {this.state.icon!==null?<Icon type={this.state.iconType} style={{marginRight: scale(10)}} name={this.state.icon} color={this.state.iconColor} size={moderateScale(20)}/>:null}
                    &nbsp;&nbsp;{this.state.text}
                </Text>
                {this._render_button()}
            </Animated.View>
        );
    }
}

export default Toast;
