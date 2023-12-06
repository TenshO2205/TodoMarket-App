import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const DeleteConfirmationModal = ({ isVisible, onCancel, onDelete }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>¿Estas seguro que quieres eliminar esta tarea?</Text>
          <View style={styles.buttonContainer}>
            <Button color={'#8d99ae'} title="Cancelar" onPress={onCancel} />
            <Button color={'#d90429'} title="Borrar" onPress={onDelete} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    gap: 5,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
});

export default DeleteConfirmationModal;
