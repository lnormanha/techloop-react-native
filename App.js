/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import ToDoList from "./src/components/ToDoList";
import AddToDoScreen from "./src/containers/AddToDoScreen";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      currentScreen: "ToDoListScreen"
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderContent()}
      </SafeAreaView>
    );
  }

  renderContent() {
    const { currentScreen } = this.state;
    switch (currentScreen) {
      case "ToDoListScreen":
        return (
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.header}>
              <Text style={styles.title}>Sua lista de tarefas</Text>
              <TouchableOpacity onPress={this.goToAddToDoScreen}>
                <Text style={styles.add}>Adicionar</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginVertical: 10 }} />
            <ToDoList data={this.state.toDoList} />
          </View>
        );
      case "AddToDoScreen":
        return <AddToDoScreen addToDo={this.addToDo} goBack={this.goBack} />;
    }
  }

  goToAddToDoScreen = () => {
    this.setState({ currentScreen: "AddToDoScreen" });
  };

  goBack = () => {
    this.setState({ currentScreen: "ToDoListScreen" });
  };

  addToDo = toDo => {
    const { toDoList } = this.state;

    let list = toDoList;

    let item = {
      text: `${list.length + 1}. ${toDo}`
    };

    list.push(item);
    this.setState({ toDoList: list });

    console.log({ toDoList });
    this.goBack();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    height: 80,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.1,
    borderColor: "gray",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10
  },
  add: {
    fontSize: 16,
    fontWeight: "500",
    color: "blue",
    marginRight: 10
  }
});
