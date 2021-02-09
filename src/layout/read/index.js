import React,{Component} from 'react';
import {
    View,
    Text,StyleSheet, Dimensions
} from 'react-native';
import Pdf from 'react-native-pdf';

export default class Read extends Component{

    constructor(props){
        super(props)
    };

    render(){
        const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};

        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};

        return (
            <View style={styles.container}>
                <Pdf
                    source={require("../../assets/pdf/AndTutorials-3_1-CC.pdf")}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    onPressLink={(uri)=>{
                        console.log(`Link presse: ${uri}`)
                    }}
                    style={styles.pdf}
                    enablePaging={true}
                    fitPolicy={0}
                    // horizontal={true}
                    spacing={0}
                    enableRTL={true}
                />
            </View>
        )

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
