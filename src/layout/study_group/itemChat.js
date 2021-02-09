import React, {Component} from 'react';
import {Animated, PanResponder, Text, TouchableOpacity, View} from 'react-native';
import {sizes} from '../../utils/values/sizes';
import {Task_Colors} from '../../utils/values/color';
import style from './style';
import {moderateScale, scale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import Icon from '../../components/icon'

export default class ItemChat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ani_height: this.props.data.id === this.props.item_working ? new Animated.Value(0) : new Animated.Value(1),
            ani_color: new Animated.Value(0),
        };
        this.style = style(this.props.color);
    }

    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        return this.props.data.id === nextProps.item_working;
    }


// Animated vuốt
    translateX = new Animated.Value(0);
    _panResponder = PanResponder.create({
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderMove: Animated.event([null, {dx: this.translateX}], {useNativeDriver: false}),
        onPanResponderRelease: (e, {vx, dx}) => {
            if (Math.abs(vx) >= 0.5 || Math.abs(dx) >= 0.5 * sizes.Width_Devices) {

                if (dx < 0) {
                    Animated.timing(this.translateX, {
                        toValue: -sizes.Width_Devices,
                        duration: 200,
                    }).start(this._hide_item());
                } else {
                    Animated.spring(this.translateX, {
                        toValue: 0,
                        bounciness: 10,
                    }).start(this.props.change_mark(this.props.data.id));
                }

            } else {
                Animated.spring(this.translateX, {
                    toValue: 0,
                    bounciness: 10,
                }).start();
            }
        },
    });

    _hide_item() {
        Animated.timing(
            this.state.ani_height,
            {
                toValue: 0,
                duration: 350,
            },
        ).start(this.props.remove_item(this.props.data.id));
    }

    _show_item() {
        Animated.timing(
            this.state.ani_height,
            {
                toValue: 1,
                duration: 350,
            },
        ).start();
    }

    componentDidMount() {
        this.props.data.id === this.props.item_working ? this._show_item() : null;
    }

    render() {
        // tạo style theo state, cho chức năng thay đổi màu giao diện
        this.style = style(this.props.color);
        const {
            avatar,
            time,
            mark,
            id,
            nameChat,
            lastContent,
            numberNewMessenger,
            read,
            active
        } = this.props.data;
        const height_view = this.state.ani_height.interpolate({
            inputRange: [0, 1],
            outputRange: [0, moderateScale(80)],
        });
        const translateY = this.state.ani_height.interpolate({
            inputRange: [0, 1],
            outputRange: [-0.0000000001, 1],
        });
        const change_color_background = this.translateX.interpolate({
            inputRange: [-sizes.Width_Devices, -sizes.Width_Devices / 2, 0, sizes.Width_Devices / 2, sizes.Width_Devices],
            outputRange: [Task_Colors.task_danger_light, Task_Colors.task_danger_light, 'white', Task_Colors.task_warning_light, Task_Colors.task_warning_light],
        });

        const change_opa_delete = this.translateX.interpolate({
            inputRange: [0, sizes.Width_Devices / 2],
            outputRange: [1, 0],
        });

        const change_opa_mark = this.translateX.interpolate({
            inputRange: [-sizes.Width_Devices / 2, 0],
            outputRange: [0, 1],
        });

        const opacity_icon_mark = mark ?
            this.translateX.interpolate({
                inputRange: [0, sizes.Width_Devices / 2, sizes.Width_Devices * 0.55],
                outputRange: [1, 0.3, 0],
            })
            :
            this.translateX.interpolate({
                inputRange: [0, sizes.Width_Devices / 2, sizes.Width_Devices * 0.55],
                outputRange: [0, 0.7, 1],
            });

        return (
            <Animated.View style={{width: '100%', height: height_view}}>

                {/*Nội dung phía trên*/}
                <Animated.View
                    style={{transform: [{translateX: this.translateX}], zIndex: 0}} {...this._panResponder.panHandlers}>
                    <TouchableOpacity activeOpacity={0.8} style={[this.style.view_row, this.style.tou_item]}
                                      onPress={() => this.props.nav.navigate('Detail_notification')}>
                        {/*Avatar*/}
                        <View>
                            <FastImage
                                style={this.style.view_avatar}
                                source={avatar}
                                resizeMode={FastImage.resizeMode.contain}/>
                                {active?<View style={this.style.point_active}/>:null}
                        </View>

                        {/*Nội dung*/}
                        <View style={this.style.view_content}>
                            <Text allowFontScaling={false} style={this.style.text_name_chat} numberOfLines={1}
                                  ellipsizeMode={'tail'}>{nameChat}</Text>
                            <Text allowFontScaling={false} style={[this.style.text_last_content,{fontWeight:read?'100':'bold'}]} numberOfLines={1}
                                  ellipsizeMode={'tail'}>{lastContent}</Text>
                        </View>

                        {/*Đuôi*/}
                        <View style={this.style.view_tail}>
                            <Text allowFontScaling={false} style={this.style.text_time} numberOfLines={1}
                                  ellipsizeMode={'tail'}>{time}</Text>
                            {!read?<View style={this.style.point_read}>
                                <Text style={this.style.text_messenger_count}>{numberNewMessenger}</Text>
                            </View>:null}
                        </View>

                    </TouchableOpacity>
                </Animated.View>


                {/*Background phía sau*/}
                <Animated.View
                    style={[this.style.view_hide, {height: height_view, backgroundColor: change_color_background}]}>

                    <Animated.View style={[this.style.background_hide, {
                        opacity: change_opa_mark,
                        transform: [{scale: translateY}],
                    }]}>
                        <Icon type={"FontAwesome"} name="star" size={moderateScale(25)} color={'#fff'} style={{marginRight: scale(10)}}/>
                        <Text allowFontScaling={false} style={this.style.text_hide}>Đánh dấu</Text>
                    </Animated.View>

                    <Animated.View style={[this.style.background_hide, {
                        opacity: change_opa_delete,
                        transform: [{scale: translateY}],
                    }]}>
                        <Icon type={"FontAwesome"} name="trash" size={moderateScale(25)} color={'#fff'} style={{marginRight: scale(10)}}/>
                        <Text allowFontScaling={false} style={this.style.text_hide}>Xoá</Text>
                    </Animated.View>


                </Animated.View>

            </Animated.View>

        );
    }
}
