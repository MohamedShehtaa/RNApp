import { useState } from "react";
import { Button, Modal, View } from "react-native";
import GoalInput from "./GoalInput";

const InputModal = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <View style ={{marginBottom:30}}>
      <Button title="add your gaol" onPress={() => setOpen(true)} color={'#383434eb'}/>
      <Modal visible={isOpen} animationType="slide">
        <GoalInput onAdd={props.onAddGoals}  cancel ={()=> setOpen(false)}/>
      </Modal>
    </View>
  );
};
export default InputModal;
