import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import styles from '../styles';
import { getDatabase } from '../config/FirebaseConfig'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { firebaseItems: {} };
    console.ignoredYellowBox = [
      'Setting a timer'
    ];

  var query = getDatabase().ref().child('attributes');
  query.once("value", function(snapshot) {
    snapshot.forEach(function(child) {
      console.log(snapshot.val().course);
    });
  });

}

  renderRow = ({item, index}) => {
    return (
      <Text style={{
        fontSize: 18,
        color: '#000000',
        textAlign: 'center'
      }}>
        {item.comment}
      </Text>
    );
  };

  render() {
    return (
        <FlatList data={this.state.firebaseItems}
                  renderItem={this.renderRow}/>
    );
  }
}