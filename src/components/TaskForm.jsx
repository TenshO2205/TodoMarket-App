import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskForm = ({ task, onTaskChange, onSubmit, buttonText }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Ingrese una Tarea"
        placeholderTextColor="#000"
        value={task}
        onChangeText={onTaskChange}
      />
      <Button color={'#d5bdaf'} title={buttonText} onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#d5bdaf',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000',
  },
});

export default TaskForm;
