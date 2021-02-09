import React, {Component} from 'react';
import {Animated, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {button_utilities, lightMode} from '../../utils/values';
import style from './style';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../components/icon'

export default class UtilitiesScreen extends Component {

    constructor(props) {
        super(props);
        this.style = style(lightMode);
        this.ani = new Animated.Value(0);
    };

    _render_4_button({image, icon, title, description, color_1, color_2, color_3}, style_fastimage) {
        return (
            <TouchableOpacity>
                <FastImage style={style_fastimage}
                           source={image}
                           resizeMode={FastImage.resizeMode.cover}>
                    <LinearGradient colors={[color_1, color_2]}
                                    start={{x: 0, y: 1}} end={{x: 1, y: 0}}
                        // locations={[0,1]}
                                    style={this.style.view_overload}/>
                    <Icon type={"MaterialCommunityIcons"} name={icon} size={moderateScale(35)} color={lightMode.background}
                          style={this.style.icon}/>

                    <View style={this.style.view_text}>
                        <Text style={this.style.text_title_4_button}
                              allowFontScaling={false}
                              numberOfLines={2}>{title}</Text>
                        <Text
                            allowFontScaling={false}
                            numberOfLines={2}
                            style={this.style.text_description_4_button}>{description}</Text>
                    </View>
                </FastImage>
            </TouchableOpacity>
        );
    }

    render() {
        const header_elevation = this.ani.interpolate({
            inputRange: [0, verticalScale(50)],
            outputRange: [0, 3],
            extrapolate: 'clamp',
        });

        return (
            <View style={this.style.container}>
                <ScrollView
                            showsVerticalScrollIndicator={false}
                            stickyHeaderIndices={[0]}
                            onScroll={Animated.event(
                                [{
                                    nativeEvent: {
                                        contentOffset: {
                                            y: this.ani,
                                        },
                                    },
                                }],
                                {useNativeDriver: false}
                            )}>

                    <Animated.View style={[this.style.view_header, {elevation: header_elevation}]}>
                        <View style={this.style.view_header}>
                            <Text style={this.style.text_name_screen}>Tiện ích</Text>

                            <View style={this.style.view_right}>

                                <TouchableOpacity style={this.style.view_right_button}>
                                    <Icon type={"MaterialCommunityIcons"} name="lightbulb-on" size={moderateScale(27)} color={'#1b1b1b'}/>
                                </TouchableOpacity>

                                <TouchableOpacity style={this.style.view_right_button}>
                                    <Icon type={"MaterialIcons"} name={'notifications'} size={moderateScale(26)}
                                          color={'#1b1b1b'}/>
                                    <View style={this.style.view_badge_bell}>
                                        <Text style={this.style.text_badge_bell}>1</Text>
                                    </View>
                                </TouchableOpacity>

                                {/*<TouchableOpacity style={[this.style.view_right_button]}>*/}
                                {/*    <Icon name="edit" size={moderateScale(25)} color={'#1b1b1b'}/>*/}
                                {/*</TouchableOpacity>*/}
                            </View>
                        </View>
                    </Animated.View>



                    <TouchableOpacity>
                        <FastImage style={this.style.view_button_big}
                                   source={button_utilities.button_event.image}
                                   resizeMode={FastImage.resizeMode.cover}>
                            <LinearGradient
                                colors={[button_utilities.button_event.color_1, button_utilities.button_event.color_2]}
                                start={{x: 0, y: 1}} end={{x: 1, y: 0}}
                                // locations={[0,0.5,1]}
                                style={this.style.view_overload}/>

                            <Icon type={"MaterialCommunityIcons"} name="calendar-star" size={moderateScale(40)} color={lightMode.background}
                                    style={this.style.icon}/>
                            <View style={this.style.view_text}>
                                <Text
                                    allowFontScaling={false}
                                    numberOfLines={2}
                                    style={this.style.text_title_button_big}>{button_utilities.button_event.title}</Text>
                                <Text
                                    allowFontScaling={false}
                                    numberOfLines={2}
                                    style={this.style.text_description_button_big}>{button_utilities.button_event.description}</Text>
                            </View>

                        </FastImage>
                    </TouchableOpacity>

                    <View style={this.style.view_4_button}>

                        {/*2 nút bên trái*/}
                        <View style={this.style.view_2_button}>
                            {this._render_4_button(button_utilities.button_sleep_time, this.style.view_button_small)}
                            {this._render_4_button(button_utilities.button_sound, this.style.view_button_medium)}
                        </View>


                        {/*2 nút bên phải*/}
                        <View style={this.style.view_2_button}>
                            {this._render_4_button(button_utilities.button_review, this.style.view_button_medium)}
                            {this._render_4_button(button_utilities.button_note, this.style.view_button_small)}
                        </View>
                    </View>
                </ScrollView>
            </View>


        );
    }
}
