import React from 'react';
import {View} from 'react-native';

const CardSection2=(props) => {
return(
    <View style={styles.subContainerStyle}>
    {props.children}
    </View>);
};


const styles ={
    subContainerStyle:{
        width:150,
        alignSelf:'center',
        borderWidth:2,
        padding:3,
        marginTop:5,
        backgroundColor:'#ffde00',     
        flexDirection:'row',
        borderColor:'#000000',
        borderRadius:10
    }
};

export { CardSection2 };