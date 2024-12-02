import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#eeee" }}
        onPress={() => props.onDelete (props.text)}
        style={({pressed}) => {
            return pressed &&  styles.pressed
        } }
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#eee2e2",
    borderRadius: 5,
  },
  goalText: {
    padding: 8,
    color: "gray",
  },
  pressed : {
    backgroundColor:"#eeee",
    borderRadius: 5,
  }
});

export default GoalItem;