import {Task_Colors} from '../../utils/values';
import {ScaledSheet} from 'react-native-size-matters';

const style = (Color) => {
    return ScaledSheet.create({
        container: {
            backgroundColor: Color.background,
        },
        image_cover_image: {
            width: '100%',
            height: '350@ms',
            alignItems: 'center',
            paddingTop: '50@ms',
            position:'absolute',
            top:0,
            left:0,
            zIndex: 0,
        },
        image_avatar: {
            width: '110@ms',
            height: '110@ms',
            borderRadius: '60@ms',
            margin: '20@ms',
            elevation: 13,
        },
        view_overload: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
        },
        text_name_user: {
            fontSize: '25@ms',
            fontWeight: 'bold',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: '10@ms'
        },
        text_quotations: {
            fontSize: '16@ms',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: '10@ms'
        },
        view_flatlist_item: {
            backgroundColor: '#00000000',
            left: 0,
            alignItems: 'center',
            width: '100%',
        },
        view_list_button: {
            elevation: 4,
            marginBottom: '10@vs',
            backgroundColor: Color.background,
            width: '330@ms',
            borderRadius: '10@ms',
            margin: '7@ms',
        },
        tou_item: {
            width: '100%',
            height: '54@ms',
            backgroundColor: '#ffffff',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            borderRadius: '10@ms',
        },
        view_item_icon: {
            width: '15%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        icon_arrow: {
            position: 'absolute',
            right: '15@s',
        },
        text_title_item: {
            color: Task_Colors.task_special,
            fontSize: '16@ms0.3',
            fontWeight: '200',
            width: '72%',
        },
        text_name_screen: {
            fontWeight: 'bold',
            fontSize: '26@ms0.3',
            marginHorizontal: '15@ms',
            marginVertical: '10@ms',
        },
        view_right: {
            flexDirection: 'row',
        },
        view_right_button: {
            marginRight: '16@s',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        view_header: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            right: 0,
        },
        view_header_above: {
            width: '100%',
            flexDirection: 'row',
            paddingTop: '20@ms',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        view_badge_bell: {
            backgroundColor: Task_Colors.task_danger_light,
            position: 'absolute',
            right: '-6@ms',
            top: '-3@ms',
            borderRadius: '9@ms',
            width: '17@ms',
            height: '17@ms',
            justifyContent: 'center',
            alignItems: 'center',
        },
        text_badge_bell: {
            fontSize: '11@ms',
            color: '#ffffff',
            fontWeight: 'bold',
        },
    });
};
export default style;
