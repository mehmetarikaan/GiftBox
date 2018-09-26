import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Header from './ortak/header';
import LoginForm from './components/LoginForm';
import ProfileSettings from './components/ProfileSettings';
import Router from './Router';

class Main extends Component {
    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyDs9yeEU-HPrNf0XVB2zSCd386mslv9WxY',
                authDomain: 'giftbox-fb9cf.firebaseapp.com',
                databaseURL: 'https://giftbox-fb9cf.firebaseio.com',
                projectId: 'giftbox-fb9cf',
                storageBucket: 'giftbox-fb9cf.appspot.com',
                messagingSenderId: '519094526412'
            }
        );
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
<<<<<<< HEAD
           <Provider store={store}>  
            {/* <View>
                <Header headerText="GIFTBOX" />
                <LoginForm />
            </View>    */}
            
            <ProfileSettings />
=======
            <Provider store={store}>                   
               <Router />          
>>>>>>> b5d6898b36198bd1871711e0585d16a34680e41c
            </Provider>
        );
    }    
}

export default Main;
