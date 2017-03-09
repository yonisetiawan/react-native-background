/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, Button} from 'react-native';

export default class hacktiv8new extends Component {
    renderNewScene (route, navigator){
      return (
          <View></View>
      )
    }
    render() {
        return (
          <View style={styles.container}>
              <Image source={require("./images/cat.jpg")} style={styles.imgHome} />
                <Button
                  onPress={()=>null}
                  title="Get All Data"
                  />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imgHome:{
      flex: 1,
      width: null,
      height: null,
    },
    buttonHome: {
      height: 60,
    },
    todos: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 10,

    },
    searchForm: {
      marginTop: 20,
    }
});

AppRegistry.registerComponent('hacktiv8new', () => hacktiv8new);
