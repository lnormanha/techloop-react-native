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
    const { currentScreen, taskList } = this.state;
    switch (currentScreen) {
      case "ToDoListScreen":
        return (
          <View>
            <View style={styles.header}>
              <Text style={styles.title}>Sua lista de tarefas</Text>
              <TouchableOpacity onPress={this.goToAddToDoScreen}>
                <Text style={styles.add}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case "AddToDoScreen":
        return <AddToDoScreen goBack={this.goBack} />;
    }
  }

  goToAddToDoScreen = () => {
    this.setState({ currentScreen: "AddToDoScreen" });
  };

  goBack = () => {
    this.setState({ currentScreen: "ToDoListScreen" });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  header: {
    height: 80,
    width: "100%",
    backgroundColor: "#F5FCFF",
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
