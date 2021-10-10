import React from 'react';
import {View} from 'react-native';
import {StyleSheet, Text} from 'react-native';

const Spacer = ({children}) => {
  return (
    <View style={styles.spacer}>
      {children}
      {/* <Text> hjjhvhj</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
    // padding:10////////
  },
});

export default Spacer;
