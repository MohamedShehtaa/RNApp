import { useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
  const [goal, setGoal] = useState("");
  const onAdd = () => {
    if (!goal) return;
    props.onAdd(goal);
    setGoal("");
    props.cancel()
  };
  return (
    <View style={styles.inputContainer}>
       <Image
            source={require("../assets/goal.png")}
            style={{ width: 40, height: 40, marginBottom:40}}
          />
      <TextInput
        style={styles.textInput}
        placeholder="add your goal here"
        onChangeText={(enteredText) => setGoal(enteredText)}
        value={goal}
      />
      <View style={styles.actions}>
        <Button title="add goal" onPress={onAdd} color={'#383434eb'}/>
        <Button title="cancel" onPress={props.cancel} color={'#383434eb'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'gray'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    borderRadius: 15,
    padding: 10,
    backgroundColor:'white',
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 15,
  },
});

export default GoalInput;
