import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enterdText) {
    setEnteredGoalText(enterdText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal
      style={styles.buttonContainer}
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="YOUR GOALS"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color="#b180f0"
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancel}
              color="#f31282"
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    padding: 16,
    width: "100%",
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
