import React, {Component} from 'react';
import {Alert,TextInput} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import { Button,Card,CardSection,CardSection2,Spinner} from '../ortak';


class LoginForm extends Component{
    state ={email:'',password:'', loading:false};
    clickLogin() {
        this.setState({ loading: true });
        const { email,password } = this.state;

        if (email === '' || password === ''){
            this.setState( { loading: false} );
            Alert.alert(
                'Mesaj',
                'Her iki alanda dolu olmalı!',
                [
                    {text:'Tamam', onPress: () => null}
                ]
            );
        }else {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.loginSucces.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.loginSucces.bind(this))
            .catch(this.loginFail.bind(this));
        });
    }
}

    loginSucces(){
        console.log('başarılı');
        this.setState({loading:false});
    }

    loginFail(){
        console.log('Hatalı');
        this.setState({loading: false});
        Alert.alert(
            'Mesaj',
            'Kullanıcı adı veya şifreniz hatalı!',
            [
                {text: 'Tamam', onPress: () => null}
            ]
        );
    }

    renderButton(){
        if(!this.props.loading){
            return <Button onPress={this.clickLogin.bind(this)}>GİRİŞ</Button>
        }
        return<Spinner size="small"/>;
    }

    render(){
        console.log('response email' + this.props.email);
        console.log('response password' + this.props.password);
        const { inputStyle } = styles;
        return(
            <Card>
            <CardSection>
            <TextInput 
            placeholder="E-mail"
            style={inputStyle}
            value={this.props.email}
            onChangeText={email => this.props.emailChanged(email)}
            />
            </CardSection>

            <CardSection>
            <TextInput
            placeholder="Şifre"
            style={inputStyle}
            value={this.props.password}
            onChangeText={password => this.props.passwordChanged(password)}
            />
        </CardSection>
        
       <CardSection2>
       {this.renderButton()}
        </CardSection2>
        <CardSection2>
        <Button>KAYIT OL</Button>
        </CardSection2>
        </Card>
        );
    }
}

const styles={
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2
    }

};

const mapStateToProps = ({kimlikdogrulamaResponse}) => {
    const {email, password, loading} = kimlikdogrulamaResponse;
    return{
        email,
        password,
        loading
    };
};

export default connect(mapStateToProps, {emailChanged,passwordChanged,loginUser})(LoginForm);