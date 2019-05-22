import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import ToDoItem from "./ToDoItem";
import styles from "./styles/ToDoListStyle";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ToDoItem text={item.text} />}
        />
      </View>
    );
  }
}
