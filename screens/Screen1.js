import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Screen1 extends Component {
  render() {
    return(
    <View style={styles.container}>
    <Text>You are on the home page</Text>

    <Button
        title="About page"
        onPress={() => this.props.navigation.navigate('About')}
    />
  </View>
);
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
});

export default Screen1;