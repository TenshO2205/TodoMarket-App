import React from 'react';
import { FlatList, View, Text, Button, StyleSheet } from 'react-native';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <FlatList
      style={styles.list}
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View style={styles.taskContainer}>
          <Text>{item}</Text>
          <Button color={'#8d99ae'} title="Editar" onPress={() => onEdit(index)} />
          <Button color={'#d90429'} title="Borrar" onPress={() => onDelete(index)} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default TaskList;
