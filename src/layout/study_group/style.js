import {ScaledSheet} from 'react-native-size-matters';
import {sizes} from '../../utils/values/sizes';
// import {Blues} from "../../utils/values";

const style = (Colors) => {
    return ScaledSheet.create({
        container: {
            backgroundColor: '#ffffff',
            // paddingTop:20,
            // paddingBottom:20,
        },
        image: {
            height: '70@ms',
            width: '60@ms',
        },
        view_row: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        view_avatar: {
            width: '55@s',
            height: '55@s',
            borderRadius: '27.5@s',
            marginHorizontal: '10@s',
            backgroundColor: '#ffffff',
        },
        view_avatar_active: {
            width: '45@ms',
            height: '45@ms',
            borderRadius: '25@s',
            marginHorizontal: '10@s',
            backgroundColor: '#ffffff',
        },
        view_content: {
            flex: 1,
            height: '80@ms',
            justifyContent: 'center',
            alignItems: 'flex-start',
        },
        view_tail: {
            width: '40@s',
            height: '80@ms',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text_name_chat: {
            fontSize: '18@ms0.3',
            fontWeight: 'bold',
            color: '#353535',
            lineHeight: '18@ms',
            marginBottom: '2@vs',
            flex: 5,
            textAlignVertical: 'bottom',
        },
        text_last_content: {
            fontSize: '14@ms0.3',
            color: '#353535',
            lineHeight: '17@ms',
            flex: 5,
            // backgroundColor:'green',
            textAlignVertical: 'top',
        },
        text_time: {
            fontSize: '11@ms0.3',
            color: '#000000',
            marginVertical: '3@ms',
        },
        flatlist_chat: {
            width: sizes.Width_Devices,
            // marginBottom:20,
            flexGrow: 1,
        },
        flatlist_active: {
            // height:"90@ms",
            // paddingTop:'45@vs',
            flexGrow: 1,
            alignItems: 'center',
            backgroundColor: '#ffffff',
        },
        tou_item: {
            height: '80@ms',
            backgroundColor: 'white',
        },
        icon_star_item: {
            alignSelf: 'flex-start',
            transform: [{rotateY: '180deg'}],
            marginTop: '10@vs',
        },
        view_hide: {
            width: '100%',
            // height:'80@ms',
            alignItems: 'center',
            justifyContent: 'space-between',
            elevation: 0,
            flexDirection: 'row',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
        },
        background_hide: {
            marginHorizontal: '25@s',
            flexDirection: 'row',
            alignItems: 'center',
        },
        text_hide: {
            fontSize: '15@ms0.3',
            color: 'white',
            fontWeight: '500',
        },
        text_empty: {
            color: Colors.blue_4,
            fontWeight: 'bold',
            fontSize: 23,
        },
        point_active: {
            width: '16@s',
            height: '16@s',
            backgroundColor: '#22df24',
            position: 'absolute',
            bottom: '4@ms',
            right: '4@s',
            borderColor: '#ffffff',
            borderWidth: '2@s',
            borderRadius: '8@s',
        },
        point_active_small: {
            width: '12@s',
            height: '12@s',
            backgroundColor: '#22df24',
            position: 'absolute',
            bottom: '5@ms',
            right: '5@s',
            borderColor: '#ffffff',
            borderWidth: '1@s',
            borderRadius: '8@s',
        },
        point_read: {
            width: '16@s',
            height: '16@s',
            marginVertical: '3@ms',
            backgroundColor: '#ff333a',
            borderColor: '#ffffff',
            borderRadius: '8@s',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text_messenger_count: {
            fontSize: '9@ms0.3',
            color: '#ffffff',
            fontWeight: 'bold',
        },
        view_header: {
            width: '100%',
            flexDirection: 'row',
            paddingTop: '10@ms',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor:'white'
        },
        view_right:{
            flexDirection:'row',
        },
        view_search: {
            backgroundColor: '#ebebeb',
            borderRadius: '25@ms',
            marginVertical: '5@ms',
            flexDirection: 'row',
            alignItems: 'center',
            height: '35@ms',
            paddingHorizontal:'10@ms',
            marginHorizontal: '8@s',

        },
        view_right_button: {
            marginRight: '16@s',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        icon_search: {
            // paddingLeft: '12@ms',
        },
        text_search: {
            color: Colors.text,
            fontSize: '14@ms',
            marginLeft: '8@ms',
        },
        text_header: {
            color: Colors.blue_3,
            fontWeight: 'bold',
            fontSize: '17@ms0.3',
            marginLeft: '15@ms',
            marginTop: '10@ms',
            textAlignVertical:'center'
        },
        view_friend_active: {
            alignItems: 'center',
            marginTop: '7@ms',
            // backgroundColor:'red',
            width:'70@ms'
        },
        text_name_friend_active: {
            color: '#242424',
            fontSize: '12@ms0.3',
            marginTop: '4@ms',
            marginHorizontal: '2@ms',
            marginBottom: '10@ms',
        },
        text_name_screen: {
            fontWeight: 'bold',
            color:Colors.text,
            fontSize: '26@ms0.3',
            marginHorizontal:'15@ms',
            marginVertical:'10@ms'
        },
    });
};
export default style;
