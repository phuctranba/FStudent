import React, {Component} from 'react';
import {Animated, FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ItemChat from './itemChat';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {lightMode, Task_Colors} from '../../utils/values/color';
import style from './style';
import FastImage from 'react-native-fast-image';
import Icon from '../../components/icon'

const datas = [
    {
        id: 0,
        avatar: require('../../assets/img/a1.jpg'),
        time: '12:00',
        nameChat: 'MobileCity',
        lastContent: 'MobileCity Hà Nội kính chào Quý khách! Hiện tại các nhân viên tư vấn online đang vắng mặt. Quý khách có thể để lại sdt đến giờ làm việc sẽ có nhân viên liên hệ lại. Trân trọng cảm ơn Quý khách !',
        numberNewMessenger: 3,
        read: false,
        mark: false,
        active: true,
    },
    {
        id: 1,
        avatar: require('../../assets/img/a2.jpg'),
        time: '06/02',
        nameChat: 'Hội đồng giáo sư các sư vãi tại thành phố nha trang',
        lastContent: 'Đang làm gì thế',
        numberNewMessenger: 0,
        read: true,
        mark: false,
        active: false,
    },
    {
        id: 2,
        avatar: require('../../assets/img/a3.jpg'),
        time: '07:56',
        nameChat: 'Thảo ngố',
        lastContent: 'Mà đợi lâu.  Lại thôi . chẳng khám nữa',
        numberNewMessenger: 'N',
        read: false,
        mark: false,
        active: true,
    },
    {
        id: 3,
        avatar: require('../../assets/img/a4.jpg'),
        time: 'Thứ 4',
        nameChat: 'Lâm Văn Ân',
        lastContent: 'em đang có 1 project có 1 cái button là bật thông báo thì khi em click vào, app sẽ hỏi notification permission như hình',
        numberNewMessenger: 0,
        read: true,
        mark: false,
        active: true,
    },
    {
        id: 4,
        avatar: require('../../assets/img/a1.jpg'),
        time: '12:00',
        nameChat: 'MobileCity',
        lastContent: 'MobileCity Hà Nội kính chào Quý khách! Hiện tại các nhân viên tư vấn online đang vắng mặt. Quý khách có thể để lại sdt đến giờ làm việc sẽ có nhân viên liên hệ lại. Trân trọng cảm ơn Quý khách !',
        numberNewMessenger: 99,
        read: false,
        mark: false,
        active: false,
    },
    {
        id: 5,
        avatar: require('../../assets/img/a2.jpg'),
        time: '06/02',
        nameChat: 'Hội đồng giáo sư các sư vãi tại thành phố nha trang',
        lastContent: 'Đang làm gì thế',
        numberNewMessenger: 0,
        read: true,
        mark: false,
        active: false,
    },
    {
        id: 6,
        avatar: require('../../assets/img/a3.jpg'),
        time: '07:56',
        nameChat: 'Thảo ngố',
        lastContent: 'Mà đợi lâu.  Lại thôi . chẳng khám nữa',
        numberNewMessenger: 21,
        read: false,
        mark: false,
        active: false,
    },
    {
        id: 7,
        avatar: require('../../assets/img/a4.jpg'),
        time: 'Thứ 4',
        nameChat: 'Lâm Văn Ân',
        lastContent: 'em đang có 1 project có 1 cái button là bật thông báo thì khi em click vào, app sẽ hỏi notification permission như hình',
        numberNewMessenger: 0,
        read: true,
        mark: false,
        active: true,
    },
    {
        id: 8,
        avatar: require('../../assets/img/a1.jpg'),
        time: '12:00',
        nameChat: 'MobileCity',
        lastContent: 'MobileCity Hà Nội kính chào Quý khách! Hiện tại các nhân viên tư vấn online đang vắng mặt. Quý khách có thể để lại sdt đến giờ làm việc sẽ có nhân viên liên hệ lại. Trân trọng cảm ơn Quý khách !',
        numberNewMessenger: 0,
        read: true,
        mark: false,
        active: false,
    },
    {
        id: 9,
        avatar: require('../../assets/img/a2.jpg'),
        time: '06/02',
        nameChat: 'Hội đồng giáo sư các sư vãi tại thành phố nha trang',
        lastContent: 'Đang làm gì thế',
        numberNewMessenger: 0,
        read: true,
        mark: false,
        active: false,
    },
    {
        id: 10,
        avatar: require('../../assets/img/a3.jpg'),
        time: '07:56',
        nameChat: 'Thảo ngố',
        lastContent: 'Mà đợi lâu.  Lại thôi . chẳng khám nữa',
        numberNewMessenger: 0,
        read: true,
        mark: false,
        active: false,
    },
    {
        id: 11,
        avatar: require('../../assets/img/a4.jpg'),
        time: 'Thứ 4',
        nameChat: 'Lâm Văn Ân',
        lastContent: 'em đang có 1 project có 1 cái button là bật thông báo thì khi em click vào, app sẽ hỏi notification permission như hình',
        numberNewMessenger: 0,
        read: true,
        mark: false,
        active: false,
    },
];

export default class StudyGroupScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listViewData: datas,
            list_prev: [],
            item_working: null,
        };
        this.ani = new Animated.Value(0);

        this.undo = this._undo_item.bind(this);
        this.change_mark = this._change_mark.bind(this);
        this.remove_item = this._remove_item.bind(this);

        // tạo style theo state, cho chức năng thay đổi màu giao diện
        this.style = style(lightMode);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext ) {
        if (nextProps !== this.props) {
            this.style = style(lightMode);

        }
        return true;
    }

    _render_item_active({active, avatar, nameChat}) {
        return (
            <View style={this.style.view_friend_active}>
                <View>
                    <FastImage
                        style={this.style.view_avatar_active}
                        source={avatar}
                        resizeMode={FastImage.resizeMode.contain}/>
                    {active ? <View style={this.style.point_active_small}/> : null}
                </View>

                <Text style={this.style.text_name_friend_active}
                      numberOfLines={1}>{nameChat}</Text>
            </View>
        );
    }

    _remove_item(key) {

        if (this.delete_item) {
            clearTimeout(this.delete_item);
        }

        let list = this.state.listViewData;
        this.state.list_prev = this.state.listViewData;
        // Xoá item bằng cách lọc
        list = list.filter((item) => item.id !== key);
        // Hiệu ứng xoá item
        // this[key]._hide_item();

        // Hiện toast hoàn tác
        this.Toast.show({
            text: 'Đã xoá thông báo!',
            textColor: Task_Colors.task_success_dark,
            icon: 'trash-o',
            iconColor: Task_Colors.task_success_dark,
            iconButton: 'undo',
            textButton: 'Hoàn tác',
            textColorButton: 'white',
            typeButton: 'button',
            backgroundButton: lightMode.blue_main,
            duration: 4000,
            data: key,
            function_parent: this.undo,
        });
        this.state.item_working = key;
        // Độ trễ kẻo hiệu ứng chưa chạy, item đã biến mất
        setTimeout(() => {
            this._delete_item(key);
            this.setState({listViewData: list});
        }, 800);

    }

    _delete_item(key) {
        this.delete_item = setTimeout(() => {
            this.state.list_prev = this.state.list_prev.filter((item) => item.id !== key);
        }, 3000);
    }

    _undo_item(key) {

        if (this.delete_item) {
            clearTimeout(this.delete_item);
        }

        let list = this.state.list_prev;
        this.state.item_working = key;
        this.setState({listViewData: list});
    }

    _change_mark(key) {
        const list = this.state.listViewData.map((item, i) => {
            if (item.id === key) {
                item.mark = !item.mark;
            }
            return item;
        });
        this.state.item_working = key;
        this.setState({listViewData: list});
    }

    _show_mark = () => {
        console.log('show_mark');
    };

    _renderEmptyContainer() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Icon name={'inbox'} color={lightMode.blue_4}
                      size={moderateScale(80, 0.4)} style={{marginBottom: 20}}/>
                <Text allowFontScaling={false} style={this.style.text_empty}>Bạn không có thông báo!</Text>
            </View>
        );
    }

    render() {
        const header_elevation = this.ani.interpolate({
            inputRange: [0, verticalScale(50)],
            outputRange: [0, 3],
            extrapolate: 'clamp'
        });

        return (
            <ScrollView style={this.style.container} stickyHeaderIndices={[0]}
                        showsVerticalScrollIndicator={false}
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
                        <Text style={this.style.text_name_screen}>Học nhóm</Text>

                        <View style={this.style.view_right}>
                            {/*<TouchableOpacity style={this.style.view_search}>*/}
                            {/*    <Icon name="search" size={moderateScale(20)} color={lightMode.text}*/}
                            {/*          style={this.style.icon_search}/>*/}
                            {/*    <Text style={this.style.text_search}>Tìm kiếm</Text>*/}
                            {/*</TouchableOpacity>*/}
                            <TouchableOpacity style={this.style.view_right_button}>
                                <Icon type={"MaterialCommunityIcons"} name="comment-search" size={moderateScale(27)} color={'#1b1b1b'}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={this.style.view_right_button}>
                                <Icon type={"MaterialCommunityIcons"} name="newspaper" size={moderateScale(26)} color={'#1b1b1b'}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={[this.style.view_right_button]}>
                                <Icon type={"FontAwesome"} name="edit" size={moderateScale(25)} color={'#1b1b1b'}/>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Animated.View>

                <Text style={this.style.text_header}>Bạn bè hoạt động</Text>
                <FlatList
                    data={this.state.listViewData}
                    extraData={this.state.listViewData}
                    disableScrollViewPanResponder={true}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={(item) => this._render_item_active(item.item)}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={this.style.flatlist_active}
                    ListEmptyComponent={this._renderEmptyContainer()}
                    horizontal={true}
                />

                <Text style={this.style.text_header}>Tin nhắn</Text>


                <FlatList
                    data={this.state.listViewData}
                    extraData={this.state.listViewData}
                    disableScrollViewPanResponder={true}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={(item) => <ItemChat remove_item={this.remove_item}
                                                    change_mark={this.change_mark}
                                                    data={item.item} item_working={this.state.item_working}
                                                    nav={this.props.navigation}
                                                    color={lightMode}
                    />}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={this.style.flatlist_chat}
                    ListEmptyComponent={this._renderEmptyContainer()}
                />
                {/*<Toast ref={view => this.Toast = view} marginBottom={verticalScale(20)}/>*/}
                {/*</ScrollView>*/}
            </ScrollView>
        );
    }
}
