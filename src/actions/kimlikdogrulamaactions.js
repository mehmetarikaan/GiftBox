import { Alert } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, 
         PASSWORD_CHANGED,
         LOGIN_USER,
         LOGIN_USER_SUCCES,
         LOGIN_USER_FAIL } from './types';

export const emailChanged = (email) => {
    return (dispatch) => {
        dispatch({
            type: EMAIL_CHANGED,
            payload: email
         });
    };
};

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({
        type: PASSWORD_CHANGED,
        payload: password
    });
};
};

export const loginUser = ({ email, password }) => {
return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    if (email === '' || password === '') {
        this.setState({ loading: false });
        Alert.alert(
            'Mesaj',
            'Her iki alanda dolu olmalı!',
            [
                { text: 'Tamam', onPress: () => null }
            ]
        );
    } else {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginSucces(dispatch, user))
    .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginSucces(dispatch, user))
        .catch(() => loginFail());
    });
}
};
};

const loginFail = (dispatch) => {
    Alert.alert(
        'Mesaj',
        'Her iki alanda dolu olmalı!',
        [
            { text: 'Tamam', onPress: () => null }
        ]
    );
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

const loginSucces = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCES,
        payload: user
    });
    Actions.update();
};
