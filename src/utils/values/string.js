import {moderateScale} from 'react-native-size-matters';

export const button_task=[
    [
        {
            title:"Phản hồi",
            icon:"settings",
            type_icon:'MaterialCommunityIcons',
            size_icon:moderateScale(25),
            link_nav:"Feedback_component"
        },
        // {
        //     title:"Hỗ trợ",
        //     icon:"help-box",
        //     type_icon:'material-community',
        //     size_icon:moderateScale(30),
        //     link_nav:"No_fun"
        // },
        {
            title: "Thông tin ứng dụng",
            icon:"settings",
            type_icon:'MaterialCommunityIcons',
            size_icon:moderateScale(25),
            link_nav: "About_app_component"
        },
    ],
    [
        {
            title:"Cài đặt",
            icon:"settings",
            type_icon:'MaterialCommunityIcons',
            size_icon:moderateScale(25),
            link_nav:"Setting_component"
        },
        {
            title:"Đổi mật khẩu",
            icon:"settings",
            type_icon:'MaterialCommunityIcons',
            size_icon:moderateScale(25),
            link_nav:"Change_password_component"
        },
        {
            title:"Đăng xuất",
            icon:"settings",
            type_icon:'MaterialCommunityIcons',
            size_icon:moderateScale(25),
            link_nav:"No_fun"
        }
    ],
    [
        {
            title:"ài đặt",
            icon:"settings",
            type_icon:'MaterialCommunityIcons',
            size_icon:moderateScale(25),
            link_nav:"Setting_component"
        },
        {
            title:"Đổi ật khẩuĐổi ật khẩuĐổi ật khẩuĐổi ật khẩuĐổi ật khẩu",
            icon:"settings",
            type_icon:'MaterialCommunityIcons',
            size_icon:moderateScale(25),
            link_nav:"Change_password_component"
        },
        {
            title:"Đăngxuất",
            icon:"settings",
            type_icon:'MaterialCommunityIcons',
            size_icon:moderateScale(25),
            link_nav:"No_fun"
        }
    ]
];

export const button_utilities={
        button_event:{
            title:"Sự kiện sinh viên",
            icon:"paper-plane",
            type_icon:'font-awesome',
            size_icon:moderateScale(23),
            link_nav:"Feedback_component",
            image: require('../../assets/img/event.jpg'),
            description: 'Những sự kiện thú vị nhất sắp tới',
            color_1:'rgba(0,131,176,0.9)',
            color_2: 'rgba(162,231,255,0.8)',
        },
        button_sleep_time:{
            title:"Giờ giấc ngủ",
            icon:"clock",
            type_icon:'font-awesome',
            size_icon:moderateScale(23),
            link_nav:"Feedback_component",
            image: require('../../assets/img/sleep_time.jpg'),
            description: 'Thời gian cho những giấc ngủ hiệu quả',
            color_1:'rgba(4,30,103,0.9)',
            color_2: 'rgba(28,181,224,0.8)',
        },
        button_review:{
            title:"Review\ntrường học",
            icon:"school",
            type_icon:'font-awesome',
            size_icon:moderateScale(23),
            link_nav:"Feedback_component",
            image: require('../../assets/img/review.jpg'),
            description: 'Cái nhìn khách quan về những ngôi trường mới',
            color_1:'rgba(24,90,157,0.9)',
            color_2: 'rgba(67,206,162,0.8)',
        },
        button_sound:{
            title:"Giai điệu\ntập trung",
            icon:"library-music",
            type_icon:'font-awesome',
            size_icon:moderateScale(23),
            link_nav:"Feedback_component",
            image: require('../../assets/img/sound_soft.jpg'),
            description: 'Những giai điệu nhẹ nhàng cho việc học',
            color_1:'rgba(55,85,229,0.9)',
            color_2: 'rgba(54,209,220,0.8)',
        },
        button_note:{
            title:"Ghi chú",
            icon:"note-text",
            type_icon:'font-awesome',
            size_icon:moderateScale(23),
            link_nav:"Feedback_component",
            image: require('../../assets/img/note.jpeg'),
            description: 'Ghi chú thường nhật đơn giản nhất',
            color_1:'rgba(15,78,145,0.9)',
            color_2: 'rgba(120,255,214,0.8)',
        },
};
