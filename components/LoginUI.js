import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { Screen, Title, Text, Divider, Button, Spinner } from '@shoutem/ui';

import Input from '../containers/Input';
import LoginButton from '../containers/LoginButton';
import { setUserName, setUserAvatar } from '../actions';

const mapStateToProps = (state) => ({
    authorizing: state.user.authorizing

});

class LoginUI extends Component{
    render(){
        return(
            <Screen>
                <Title>Who are you?</Title>
                <Divider/>

                <Input placeholder="Your name here"
                       submitAction={setUserName}
                       submitOnBlur
                       noclear
                       ref="username" />

                <Divider/>

                <Input placeholder="Your Avatar URL here"
                       submitAction={setUserAvatar}
                       submitOnBlur
                       noclear
                       ref="avatar" />

                <Divider/>

                {this.props.authorizing ? <Spinner/> : <LoginButton />}

            </Screen>
        );
    }
}

export default connect(mapStateToProps)(LoginUI);