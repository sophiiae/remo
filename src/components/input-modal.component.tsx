import React from 'react';
import { Modal } from 'react-native';
import { 
  colors,
  HeaderTitle,
  ModalButton,
  ModalContainer,
  ModalIcon,
  StyledInput,
  ModalActionGroup,
  ModalAction
} from '../styles/style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faEdit, faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export const InputModal = ({
  modalVisible,
  setModalVisible,
  taskInputValue,
  setTaskInputValue,
  handleAddTask,
  taskList,
  taskUpdated,
  setTaskUpdated,
  handleTaskUpdate
}: any) => {
  const handleCloseModal = () => {
    setModalVisible(false);
    setTaskInputValue('');
    setTaskUpdated(null);
  };

  const handleSubmit = () => {
    if (taskUpdated) {
      handleTaskUpdate({
        title: taskInputValue,
        date: new Date().toUTCString(),
        key: taskUpdated.key
      });
    } else {
      const key = taskList.length ? parseInt(taskList[taskList.length - 1].key) + 1 : 1;
      handleAddTask({
        title: taskInputValue,
        date: new Date().toUTCString(),
        key
      });
    };
    setTaskInputValue('');
  }

  return (
    <>
      <ModalButton
        onPress={() => setModalVisible(true)}
      >
        <FontAwesomeIcon icon={faPlus} size={30} color={colors.secondary}/>
      </ModalButton>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalIcon>
            <HeaderTitle>Tasks</HeaderTitle>
            {/* <FontAwesomeIcon icon={faEdit} size={30} color={colors.alternative}/> */}
          </ModalIcon>
          <StyledInput
            placeholder='Add a task'
            placeholderTextColor={colors.primary}
            selectionColor={colors.secondary}
            autoFocus={true}
            onChangeText={( text:string ) => setTaskInputValue(text)}
            value={taskInputValue}
            onSubmitEditing={handleSubmit}
          />

          <ModalActionGroup>
            <ModalAction onPress={handleCloseModal}>
              <FontAwesomeIcon icon={faTimesCircle} size={40} color={colors.close}/>
            </ModalAction>
            <ModalAction onPress={handleSubmit}>
              <FontAwesomeIcon icon={faCheckCircle} size={40} color={colors.tertiary}/>
            </ModalAction>
          </ModalActionGroup>
        </ModalContainer>
      </Modal>
    </>
  )
}
