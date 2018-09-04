import React from 'react';
import {View} from 'react-native';

const CardSection=(props) => {
return(
    <View style={styles.subContainerStyle}>
    {props.children}
    </View>);
};


const styles ={
    subContainerStyle:{
        borderWidth:2,
        padding:3,
        marginTop:5,
        backgroundColor:'#ffde00',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#000000',
        borderRadius:10,
        position:'relative'
    }
};

export { CardSection };