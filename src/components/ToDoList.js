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
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <ToDoItem text={item.text} />;
        }}
        keyExtractor={item => item.text.toString()}
      />
    );
  }
}
