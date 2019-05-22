import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import styles from "./styles/ToDoItemStyle";

export default class ToDoList extends Component {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}
