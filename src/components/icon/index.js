import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import React,{Component} from 'react';


export default class Icon extends Component{

    constructor(props){
        super(props)
    };

    render(){
        let icon;
        let props = this.props;
        switch (props.type) {
            case 'AntDesign':
                icon = <AntDesign {...props}/>;
                break;
            case 'Entypo':
                icon = <Entypo {...props}/>;
                break;
            case 'EvilIcons':
                icon = <EvilIcons {...props}/>;
                break;
            case 'Feather':
                icon = <Feather {...props}/>;
                break;
            case 'FontAwesome':
                icon = <FontAwesome {...props}/>;
                break;
            case 'FontAwesome5':
                icon = <FontAwesome5 {...props}/>;
                break;
            case 'FontAwesome5Pro':
                icon = <FontAwesome5Pro {...props}/>;
                break;
            case 'Fontisto':
                icon = <Fontisto {...props}/>;
                break;
            case 'Foundation':
                icon = <Foundation {...props}/>;
                break;
            case 'Ionicons':
                icon = <Ionicons {...props}/>;
                break;
            case 'MaterialIcons':
                icon = <MaterialIcons {...props}/>;
                break;
            case 'MaterialCommunityIcons':
                icon = <MaterialCommunityIcons {...props}/>;
                break;
            case 'Octicons':
                icon = <Octicons {...props}/>;
                break;
            case 'Zocial':
                icon = <Zocial {...props}/>;
                break;
            case 'SimpleLineIcons':
                icon = <SimpleLineIcons {...props}/>;
                break;
            default:
                icon = <FontAwesome {...props}/>;
        }

        return icon;
    }
}

