import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Game from './Game';

export default function Languages() {
  
  return (
    <View style={styles.all}>
    <Text style={styles.title}>Languages</Text>
    <Game/>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 80,
    marginLeft: 20,
  },
});
