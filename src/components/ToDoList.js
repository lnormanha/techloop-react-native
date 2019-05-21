import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import styles from "./styles/ToDoListStyle";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Isso é uma ToDoList </Text>
      </View>
    );
  }
}
