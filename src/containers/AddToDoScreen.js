import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from "./styles/AddToDoScreenStyle";

export default class AddToDoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: ""
    };
  }

  render() {
    const { goBack } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.back}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Informe sua tarefa</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicionar Tarefa</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
