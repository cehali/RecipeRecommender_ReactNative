import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import styles from '../styles';
import firebase from '../config/FirebaseConfig' 

export default class Auth extends Component{
  
  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  static navigationOptions = {
    title: 'Recipe Recommender',
  }

  signUpUser = (email, password) => {
    try{
      if (this.state.password.length < 6) {
        alert('Please enter at least 6 characters')
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    catch(error){
      console.log(error.toString())
      alert('Something went wrong, please try again later')
    }
  }

  loginUser = (email, password) => {
    const { navigate } = this.props.navigation;
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        navigate('Profile', { user: 'Cezary' })
      });
    }
    catch(error){
      console.log(error.toString())
      alert('Email or Password is incorrect')
    }
  }
  
  render() {    
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel> 
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText = {(email) => this.setState({ email })}
            />

          </Item>
          <Item floatingLabel> 
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText = {(password) => this.setState({ password })}
            />
          </Item>
          <Button style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress = {() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}t>Login</Text>
          </Button>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress = {() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}>Sign Up</Text>
          </Button>

        </Form>
      </Container>
    );
  }
}