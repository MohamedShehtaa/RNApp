import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import {StatusBar} from 'expo-status-bar'
import GoalItem from "./components/GoalItem";
import InputModal from "./components/inputModal";

export default function App() {
  const [goals, setGoals] = useState([]);

  const onAddGoals = (enteredText) => {
    setGoals((currentGoals) => [...currentGoals, enteredText]);
  };

  const onDeleteGoal = (goal) => {
    setGoals((currentGoals) => currentGoals.filter(g => g !== goal));
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.container}>
     <InputModal onAddGoals ={onAddGoals} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item} onDelete ={onDeleteGoal}/>;
          }}
          keyExtractor={(item, index) => item.item + index.toString()}
          />
      </View>
    </View>
          </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:'gray'
  },

  goalsContainer: {
    flex: 5,
  },
});
