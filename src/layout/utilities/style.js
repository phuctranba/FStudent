import {ScaledSheet} from 'react-native-size-matters';
import {Task_Colors} from '../../utils/values';

const style = (Color) => {
    return ScaledSheet.create({
        container: {
            flex:1,
            backgroundColor: Color.background,
        },
        view_overload: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top:0, left:0
        },
        text_title_button_big: {
            color: Color.background,
            fontSize: '22@ms0.3',
            fontWeight: 'bold',
        },
        text_description_button_big: {
            color: Color.background,
            fontSize: '16@ms0.3',
        },
        text_title_4_button: {
            color: Color.background,
            fontSize: '18@ms0.3',
            fontWeight: 'bold',
        },
        text_description_4_button: {
            color: Color.background,
            fontSize: '12@ms0.3',
        },
        view_4_button:{
            flexDirection:'row',
            width:'100%',
            justifyContent:'center'
        },
        view_2_button:{
            marginHorizontal:'10@ms',
        },
        view_button_big: {
            width: '330@ms',
            height: '160@ms',
            backgroundColor: '#6ea9d4',
            borderRadius: '20@ms',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginVertical:'10@ms',
            margin:'3@ms',
            alignSelf:'center',
            elevation: 4,
        },
        view_button_medium:{
            width: '155@ms',
            height: '210@ms',
            backgroundColor: '#6ea9d4',
            borderRadius: '20@ms',
            justifyContent: 'space-around',
            marginVertical:'10@ms',
            margin:'3@ms',
            elevation: 4
        },
        view_button_small:{
            width: '155@ms',
            height: '155@ms',
            backgroundColor: '#6ea9d4',
            borderRadius: '20@ms',
            justifyContent: 'space-around',
            marginVertical:'10@ms',
            margin:'3@ms',
            elevation: 4
        },
        icon:{
            margin:'15@ms'
        },
        view_text:{
            margin:'15@ms'
        },
        view_badge_bell:{
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
        text_badge_bell:{
            fontSize:'11@ms',
            color:'#ffffff',
            fontWeight:'bold'
        },
        text_name_screen: {
            color:Color.text,
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
            paddingTop: '10@ms',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor:'white'
        },
    });
};
export default style;
