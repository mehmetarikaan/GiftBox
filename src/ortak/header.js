import React from 'react';
import {Text,View} from 'react-native';
import Dimensions from 'Dimensions';
const {height, width} = Dimensions.get('window');



const Header = ({headerText}) => {
    const {textStyle,viewStyle} = styles;
    return (
        <View style={viewStyle}>
        <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle : {
        color:'black',
        fontSize: 40,
        top:50,
        fontFamily:'HOLIDAY'
    },
    viewStyle:{
        backgroundColor:'#ffde00',
        height:height,
        width:width,
        position:'absolute',
        alignItems:'center',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2
    }
};

export default Header;
