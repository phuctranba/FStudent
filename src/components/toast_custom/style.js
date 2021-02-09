import {ScaledSheet} from "react-native-size-matters";

const style=(Blues)=>{ return ScaledSheet.create({
    tou_button:{
        flexDirection: 'row',
        alignSelf:'flex-end',
        marginVertical: '5@vs',
        paddingHorizontal:'10@s',
        paddingVertical:'6@vs',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10@ms',
        elevation: 2
    },
    container:{
        marginHorizontal:"7.5%",
        borderRadius:'10@ms',
        position: 'absolute',
        alignSelf:'center',
        paddingVertical:'8@vs',
        paddingHorizontal:'12@s',
        alignItems:'center',
        justifyContent:  'center',
        elevation:3
    },
    text_toast:{
        fontSize:'16@ms0.3',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})}

export default style;
