import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ProfileSettings from './components/ProfileSettings';

const RouterComponent = () => {
    return (
    <Router>
        <Scene key="root" hideNavBar={true}>
            <Scene key="login">
                <Scene key="loginScreen" component={LoginForm} hideNavBar={true} />
            </Scene>

            <Scene key="update">
                <Scene key="profileScreen" component={ProfileSettings} hideNavBar={true} />
            </Scene>
        </Scene>
    </Router>
    );
};

export default RouterComponent;
