import {
    Dimensions, StatusBar
} from 'react-native';


export const sizes={
    Width_Devices:Dimensions.get("window").width,
    Height_Devices:Dimensions.get("window").height
};

export const height_statusbar=StatusBar.currentHeight;
