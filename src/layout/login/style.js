import {ScaledSheet} from 'react-native-size-matters';

export const styleSignIn = (Color) => {
    return ScaledSheet.create({
        container:{
            width: '300@ms',
            backgroundColor: Color.background,
            borderRadius: '20@ms',
            justifyContent: 'center',
            alignItems: 'center',
        },
        titleFragment:{
            color: Color.blue_2,
            fontSize: '30@ms0.3',
            paddingTop: '20@vs',
            fontWeight: 'bold'
        },
        viewForm:{
            width: '250@ms',
            height: '35@vs',
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: Color.blue_2,
            borderRadius: '25@ms',
            borderWidth: 1,
            paddingHorizontal: '10@ms',
            marginVertical: '5@vs'
        },
        buttonSignIn:{
            justifyContent: 'center',
            width: '250@ms',
            height: '35@vs',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Color.blue_2,
            borderRadius: '25@ms',
            paddingHorizontal: '10@ms',
            marginTop: '20@vs',
        },
        viewOr:{
            width: '250@ms',
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: '15@vs',
            alignItems: 'center',
        },
        viewButtonSwipe:{
            flexDirection: 'row',
            width: '250@ms',
            justifyContent: 'space-between',
            marginBottom: '20@vs',
        },
        buttonSwipe:{
            backgroundColor: Color.blue_2,
            flexDirection: 'row',
            width: '120@ms',
            borderRadius: '15@ms',
            paddingHorizontal: '5@ms',
            alignItems: 'center',
            paddingVertical: '4@ms',
        },
        iconUser:{
            width: '20@ms',
            height: '20@ms',
            marginRight: '5@ms',
            marginBottom:'4@ms'
        },
        iconPassword:{
            width: '25@ms',
            height: '25@ms',
        },
        inputText:{
            width: '200@ms',
            padding: 0,
            height: '30@vs',
            color:Color.blue_1
        },
        textSignIn: {
            color: Color.background,
            fontWeight: 'bold',
            fontSize: '16@ms0.3'
        },
        iconSwipe:{
            width: '25@ms',
            height: '25@ms',
        },
        textOr:{
            color: Color.blue_3,
            fontSize: '13@ms0.3',
            alignSelf: 'center',
            backgroundColor: Color.background,
            paddingHorizontal: '10@ms',
        },
        viewStrokeOr:{
            width: '100%',
            backgroundColor: Color.blue_3,
            height: 1,
            position: 'absolute'
        },
        textSwipe:{
            color: Color.background,
            fontSize: '11@ms0.3',
        },
        textDescription:{
            color: Color.blue_2,
            marginBottom: '25@vs',
            fontSize: '12@ms0.3',
            textAlign: 'center',
        },
    });
};


export const styleSignUp = (Color) => {
    return ScaledSheet.create({
        container:{
            width: '300@ms',
            backgroundColor: Color.background,
            borderRadius: '20@ms',
            justifyContent: 'center',
            alignItems: 'center',
        },
        titleFragment:{
            color: Color.blue_2,
            fontSize: '27@ms0.3',
            paddingTop: '10@vs',
            fontWeight: 'bold'
        },
        viewForm:{
            width: '250@ms',
            height: '35@vs',
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: Color.blue_2,
            borderRadius: '25@ms',
            borderWidth: 1,
            paddingHorizontal: '10@ms',
            marginVertical: '5@vs'
        },
        buttonSignUp:{
            justifyContent: 'center',
            width: '250@ms',
            height: '35@vs',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Color.blue_2,
            borderRadius: '25@ms',
            paddingHorizontal: '10@ms',
            marginTop: '20@vs',
        },
        viewOr:{
            width: '250@ms',
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: '10@vs',
            alignItems: 'center'
        },
        viewButtonSwipe:{
            flexDirection: 'row',
            width: '250@ms',
            justifyContent: 'space-between',
            marginBottom: '15@vs',
            alignItems:'center'
        },
        textIfHaveAccount:{
            color: Color.blue_2,
            fontSize: '11@ms0.3'
        },
        buttonSwipe:{
            backgroundColor: Color.blue_2,
            flexDirection: 'row',
            width: '120@ms',
            borderRadius: '15@ms',
            paddingHorizontal: '5@ms',
            alignItems: 'center',
            paddingVertical: '4@ms',
        },
        iconUser:{
            width: '20@ms',
            height: '20@ms',
            marginRight: '5@ms',
            marginBottom:'4@ms'
        },
        iconEmail_RePass:{
            width: '21@ms',
            marginRight: '3@ms',
            marginLeft: '1@ms',
            height: '21@ms',
        },
        iconPassword:{
            width: '25@ms',
            height: '25@ms',
        },
        inputText:{
            width: '200@ms',
            padding: 0,
            borderColor: 'transparent',
            height: '30@vs',
            color: Color.blue_1
        },
        textSignUp: {
            color: Color.background,
            fontWeight: 'bold',
            fontSize: '16@ms0.3'
        },
        iconSwipe:{
            width: '25@ms',
            height: '25@ms',
        },
        textOr:{
            color: Color.blue_3,
            fontSize: '13@ms0.3',
            alignSelf: 'center',
            backgroundColor: Color.background,
            paddingHorizontal: '10@ms',
        },
        viewStrokeOr:{
            width: '100%',
            backgroundColor: Color.blue_3,
            height: 1,
            position: 'absolute'
        },
        textSwipe:{
            color: Color.background,
            fontSize: '11@ms0.3',
            width: '75@ms',
            textAlign: 'center',
        },
        textDescription:{
            color: Color.blue_2,
            marginBottom: '10@vs',
            fontSize: '12@ms0.3',
            textAlign: 'center',
        },
    });
};

export const styleForgetPass = (Color) => {
    return ScaledSheet.create({
        container:{
            width: '300@ms',
            backgroundColor: Color.background,
            borderRadius: '20@ms',
            justifyContent: 'center',
            alignItems: 'center',
        },
        titleFragment:{
            color: Color.blue_2,
            fontSize: '25@ms0.3',
            paddingTop: '20@vs',
            fontWeight: 'bold'
        },
        viewForm:{
            width: '250@ms',
            height: '35@vs',
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: Color.blue_2,
            borderRadius: '25@ms',
            borderWidth: 1,
            paddingHorizontal: '10@ms',
            marginVertical: '5@vs'
        },
        buttonResetPass:{
            justifyContent: 'center',
            width: '250@ms',
            height: '35@vs',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Color.blue_2,
            borderRadius: '25@ms',
            paddingHorizontal: '10@ms',
            marginTop: '20@vs',
        },
        textDescription:{
            color: Color.blue_2,
            marginBottom: '25@vs',
            fontSize: '12@ms0.3',
            textAlign: 'center',
        },
        viewOr:{
            width: '250@ms',
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: '10@vs',
            alignItems: 'center'
        },
        viewButtonSwipe:{
            flexDirection: 'row',
            width: '250@ms',
            justifyContent: 'space-between',
            marginBottom: '15@vs',
            alignItems:'center',
        },
        textIfHaveAccount:{
            color: Color.blue_2,
            fontSize: '11@ms0.3',
            alignSelf: 'center',
        },
        buttonSwipe:{
            backgroundColor: Color.blue_2,
            flexDirection: 'row',
            width: '120@ms',
            borderRadius: '15@ms',
            paddingHorizontal: '5@ms',
            alignItems: 'center',
            paddingVertical: '4@ms',
        },
        iconEmail:{
            width: '21@ms',
            marginRight: '3@ms',
            marginLeft: '1@ms',
            height: '21@ms',
        },
        inputText:{
            width: '200@ms',
            padding: 0,
            borderColor: 'transparent',
            height: '30@vs',
            color: Color.blue_1
        },
        textResetPass: {
            color: Color.background,
            fontWeight: 'bold',
            fontSize: '16@ms0.3'
        },
        iconSwipe:{
            width: '25@ms',
            height: '25@ms',
        },
        textOr:{
            color: Color.blue_3,
            fontSize: '13@ms0.3',
            alignSelf: 'center',
            backgroundColor: Color.background,
            paddingHorizontal: '10@ms',
        },
        viewStrokeOr:{
            width: '100%',
            backgroundColor: Color.blue_3,
            height: 1,
            position: 'absolute'
        },
        textSwipe:{
            color: Color.background,
            fontSize: '11@ms0.3',
            width: '60@ms',
            textAlign: 'center',
        }
    });
};
