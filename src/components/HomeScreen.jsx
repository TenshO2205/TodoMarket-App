import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import DeleteConfirmationModal from './DeleteConfirmationModal'

const HomeScreen = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [deleteConfirmationModalVisible, setDeleteConfirmationModalVisible] = useState(false);
  const [taskToDeleteIndex, setTaskToDeleteIndex] = useState(null);

  const addTask = () => {
    if (editingIndex !== null) {
      const newTasks = [...tasks];
      newTasks[editingIndex] = task;
      setTasks(newTasks);
      setTask('');
      setEditingIndex(null);
    } else {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setEditingIndex(index);
  };

  const showDeleteConfirmationModal = (index) => {
    setTaskToDeleteIndex(index);
    setDeleteConfirmationModalVisible(true);
  };

  const hideDeleteConfirmationModal = () => {
    setTaskToDeleteIndex(null);
    setDeleteConfirmationModalVisible(false);
  };

  const deleteTask = () => {
    const newTasks = [...tasks];
    newTasks.splice(taskToDeleteIndex, 1);
    setTasks(newTasks);
    hideDeleteConfirmationModal();
    setEditingIndex(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hecho por Martin Carrizo</Text>
        <TaskForm
        task={task}
        onTaskChange={setTask}
        onSubmit={addTask}
        buttonText={editingIndex !== null ? 'Actualizar Tarea' : 'Agregar Tarea'} 
        />
        <TaskList
        tasks={tasks}
        onEdit={editTask}
        onDelete={showDeleteConfirmationModal}
        />
        <DeleteConfirmationModal
        isVisible={deleteConfirmationModalVisible}
        onCancel={hideDeleteConfirmationModal}
        onDelete={deleteTask}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#edede9'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#000'
  },
});

export default HomeScreen;