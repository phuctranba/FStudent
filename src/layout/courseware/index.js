import React, {Component} from 'react';
import {Animated, FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {lightMode} from '../../utils/values/color';
import style from './style';
import FastImage from 'react-native-fast-image';
import Icon from '../../components/icon';

const datas = [
    {
        id: 0,
        img: require('../../assets/img/b1.jpg'),
        title: 'Một đứa trẻ vừa chạy trốn khỏi tôi',
    },
    {
        id: 1,
        img: require('../../assets/img/b2.jpeg'),
        title: 'Đừng để tiền ngủ yên trong túi',
    },
    {
        id: 2,
        img: require('../../assets/img/b3.jpg'),
        title: 'Yêu trên từng ngón tay',
    },
    {
        id: 3,
        img: require('../../assets/img/b4.jpg'),
        title: 'Cho tôi xin một vé đi tuổi thơ',
    },
    {
        id: 4,
        img: require('../../assets/img/b5.jpg'),
        title: 'Hoa hồng xứ khác',
    },
    {
        id: 5,
        img: require('../../assets/img/b1.jpg'),
        title: 'Một đứa trẻ vừa chạy trốn khỏi tôi',
    },
    {
        id: 6,
        img: require('../../assets/img/b2.jpeg'),
        title: 'Đừng để tiền ngủ yên trong túi',
    },
    {
        id: 7,
        img: require('../../assets/img/b3.jpg'),
        title: 'Yêu trên từng ngón tay',
    },
    {
        id: 8,
        img: require('../../assets/img/b4.jpg'),
        title: 'Cho tôi xin một vé đi tuổi thơ',
    },
    {
        id: 9,
        img: require('../../assets/img/b5.jpg'),
        title: 'Hoa hồng xứ khác',
    },
];

export default class CoursewareScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listViewData: datas,
            list_prev: [],
            item_working: null,
        };
        this.ani = new Animated.Value(0);

        // tạo style theo state, cho chức năng thay đổi màu giao diện
        this.style = style(lightMode);
    }


    _render_item_active({img, title}, style) {
        return (
            <View style={style.view_book}>
                <FastImage
                    style={style.view_image_book}
                    source={img}
                    resizeMode={FastImage.resizeMode.stretch}/>

                <Text style={style.text_name_book} numberOfLines={2}>{title}</Text>
            </View>
        );
    }

    render() {
// tạo style theo state, cho chức năng thay đổi màu giao diện
        this.style = style(lightMode);
        const header_elevation = this.ani.interpolate({
            inputRange: [0, verticalScale(50)],
            outputRange: [0, 3],
            extrapolate: 'clamp',
        });
        return (
            <ScrollView style={this.style.container}
            stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}
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
                        <Text style={this.style.text_name_screen}>Học liệu</Text>

                        <View style={this.style.view_right}>
                            {/*<TouchableOpacity style={this.style.view_search}>*/}
                            {/*    <Icon type={'MaterialCommunityIcons'} name="search" size={moderateScale(20)} color={lightMode.text}*/}
                            {/*          style={this.style.icon_search}/>*/}
                            {/*    <Text style={this.style.text_search}>Tìm kiếm</Text>*/}
                            {/*</TouchableOpacity>*/}
                            <TouchableOpacity style={this.style.view_right_button}>
                                <Icon type={'MaterialCommunityIcons'} name="file-search" size={moderateScale(27)} color={'#1b1b1b'}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={this.style.view_right_button}>
                                <Icon type={'MaterialCommunityIcons'} name="flash-red-eye" size={moderateScale(26)} color={'#1b1b1b'}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={[this.style.view_right_button]}>
                                <Icon type={'MaterialCommunityIcons'} name="book-multiple-plus" size={moderateScale(25)} color={'#1b1b1b'}/>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Animated.View>



                    <Text style={this.style.text_header}>Công nghệ thông tin</Text>
                    <FlatList
                        data={this.state.listViewData}
                        extraData={this.state.listViewData}
                        disableScrollViewPanResponder={true}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={(item) => this._render_item_active(item.item, this.style)}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={this.style.flatlist_active}
                        // ListEmptyComponent={this._renderEmptyContainer()}
                        horizontal={true}
                    />


                    <Text style={this.style.text_header}>Kinh tế học</Text>
                    <FlatList
                        data={this.state.listViewData}
                        extraData={this.state.listViewData}
                        disableScrollViewPanResponder={true}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={(item) => this._render_item_active(item.item, this.style)}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={this.style.flatlist_active}
                        // ListEmptyComponent={this._renderEmptyContainer()}
                        horizontal={true}
                    />


                    <Text style={this.style.text_header}>Quản trị kinh doanh</Text>
                    <FlatList
                        data={this.state.listViewData}
                        extraData={this.state.listViewData}
                        disableScrollViewPanResponder={true}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={(item) => this._render_item_active(item.item, this.style)}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={this.style.flatlist_active}
                        // ListEmptyComponent={this._renderEmptyContainer()}
                        horizontal={true}
                    />


                    <Text style={this.style.text_header}>Tiếng trung quốc</Text>
                    <FlatList
                        data={this.state.listViewData}
                        extraData={this.state.listViewData}
                        disableScrollViewPanResponder={true}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={(item) => this._render_item_active(item.item, this.style)}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={this.style.flatlist_active}
                        // ListEmptyComponent={this._renderEmptyContainer()}
                        horizontal={true}
                    />
            </ScrollView>
        );
    }
}
