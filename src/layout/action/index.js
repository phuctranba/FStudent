import {Animated, FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import style from './style';
import {button_task, lightMode} from '../../utils/values';
import FastImage from 'react-native-fast-image';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../../components/icon';

const ICON = Animated.createAnimatedComponent(Icon);

export default class ActionsScreen extends Component {

    constructor(props) {
        super(props);
        this.ani = new Animated.Value(0);
    }

    _render_mutil_item(mutil_item) {
        let arr_item = mutil_item.map((item, index) => {
            return (
                <View key={index} style={{alignItems: 'center'}}>
                    {index !== 0 ?
                        <View style={{width: '90%', height: 0.5, backgroundColor: lightMode.text}}/>
                        :
                        null
                    }
                    <TouchableOpacity key={item.title} activeOpacity={0.8} style={this.style.tou_item}>

                        <View style={this.style.view_item_icon}>
                            <Icon type={item.type_icon} name={item.icon} color={lightMode.text}
                                  size={item.size_icon}/>
                        </View>


                        <Text allowFontScaling={false} style={this.style.text_title_item} numberOfLines={1}
                              ellipsizeMode={'tail'}>{item.title}</Text>

                        <Icon name={'keyboard-arrow-right'} type={'MaterialIcons'}
                              color={lightMode.blue_7} size={25} style={this.style.icon_arrow}/>
                    </TouchableOpacity>
                </View>

            );
        });

        return (
            <View style={this.style.view_list_button}>
                {arr_item}
            </View>
        );
    }


    render() {
        // tạo style theo state, cho chức năng thay đổi màu giao diện
        this.style = style(lightMode);
        const header_elevation = this.ani.interpolate({
            inputRange: [verticalScale(30), verticalScale(50)],
            outputRange: [0, 3],
            extrapolate: 'clamp',
        });

        const header_background = this.ani.interpolate({
            inputRange: [verticalScale(30), verticalScale(50)],
            outputRange: ['rgba(255,255,255,0)', 'white'],
            extrapolate: 'clamp',
        });

        const header_text = this.ani.interpolate({
            inputRange: [verticalScale(30), verticalScale(50)],
            outputRange: [lightMode.background, lightMode.text],
            extrapolate: 'clamp',
        });

        const header_text_shadow = this.ani.interpolate({
            inputRange: [verticalScale(30), verticalScale(50)],
            outputRange: [lightMode.text, '#ffffff'],
            extrapolate: 'clamp',
        });

        return (
            <View style={this.style.container}>
                <FastImage style={this.style.image_cover_image}
                           source={require('../../assets/img/coverimage.jpg')}
                           resizeMode={FastImage.resizeMode.cover}/>

                <ScrollView
                    stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{
                            nativeEvent: {
                                contentOffset: {
                                    y: this.ani,
                                },
                            },
                        }],
                        {useNativeDriver: false},
                    )}>

                    <LinearGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0)']}
                                    style={this.style.view_header}>
                        <Animated.View style={[this.style.view_header_above, {
                            backgroundColor: header_background,
                            elevation: header_elevation,
                        }]}>
                            <Animated.Text style={[this.style.text_name_screen, {color: header_text}]}>Tác
                                vụ</Animated.Text>

                            <View style={this.style.view_right}>
                                {/*<TouchableOpacity style={this.style.view_search}>*/}
                                {/*    <Icon name="search" size={moderateScale(20)} color={lightMode.text}*/}
                                {/*          style={this.style.icon_search}/>*/}
                                {/*    <Text style={this.style.text_search}>Tìm kiếm</Text>*/}
                                {/*</TouchableOpacity>*/}

                                <TouchableOpacity style={this.style.view_right_button}>
                                    <ICON type={'MaterialCommunityIcons'} name="account-heart" size={moderateScale(27)}
                                          style={{color: header_text}}/>
                                </TouchableOpacity>

                                <TouchableOpacity style={this.style.view_right_button}>
                                    <ICON type={'MaterialIcons'} name={'notifications'} size={moderateScale(26)}
                                          style={{color: header_text}}/>
                                    <View style={this.style.view_badge_bell}>
                                        <Text style={this.style.text_badge_bell}>1</Text>
                                    </View>
                                </TouchableOpacity>

                                {/*<TouchableOpacity style={[this.style.view_right_button]}>*/}
                                {/*    <ICON type={"MaterialIcons"} name="edit" size={moderateScale(25)} style={{color:header_text}}/>*/}
                                {/*</TouchableOpacity>*/}
                            </View>

                        </Animated.View>
                    </LinearGradient>

                    {/*ảnh và tên user*/}
                    <View style={{height: moderateScale(290)}}>
                        <View style={this.style.image_cover_image}
                              source={require('../../assets/img/coverimage.jpg')}
                              resizeMode={FastImage.resizeMode.cover}>

                            <FastImage style={this.style.image_avatar}
                                       source={require('../../assets/img/avatar.jpg')}
                                       resizeMode={FastImage.resizeMode.cover}/>


                            <Animated.Text style={[this.style.text_name_user, {
                                color: header_text,
                                textShadowColor: header_text_shadow,
                            }]}>Trần Bá Phúc</Animated.Text>
                            <Animated.Text style={[this.style.text_quotations, {
                                color: header_text,
                                textShadowColor: header_text_shadow,
                            }]}>Không có gì là hoàn toàn</Animated.Text>
                        </View>
                    </View>


                    {/*List item*/}
                    <View style={this.style.view_flatlist_item}>
                        <FlatList
                            data={button_task}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={(item) => this._render_mutil_item(item.item)}
                            // contentContainerStyle={this.style.flatlist_item}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>

                </ScrollView>
            </View>

        );
    };
}


