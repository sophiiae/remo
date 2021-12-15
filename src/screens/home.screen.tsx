import React, { useState } from 'react';
import { Header } from '../components/header.component';
import { ListItems } from '../components/list-items.component';
import { InputModal } from '../components/input-modal.component';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface TaskItem {
  title: string;
  date: string;
  key: string;
}

export const HomeScreen = ({
  taskList,
  setTaskList
}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskInputValue, setTaskInputValue] = useState('');
  const [taskUpdated, setTaskUpdated] = useState(null);

  // handle add new task
  const handleAddTask = (task: TaskItem) => {
    const newTaskList = [...taskList, task];

    AsyncStorage.setItem('storedTasks', JSON.stringify(newTaskList)).then(() => {
      setTaskList(newTaskList);
      setModalVisible(false);
    }).catch(err => console.log(err));
  }

  // handle task edit/update
  const handleTaskUpdate = (task: TaskItem) => {
    const taskIndex = taskList.findIndex((item: TaskItem) => item.key === task.key);
    const newTaskList = [...taskList];
    newTaskList.splice(taskIndex, 1, task);

    AsyncStorage.setItem('storedTasks', JSON.stringify(newTaskList)).then(() => {
      setTaskList(newTaskList);
      setTaskUpdated(null);
      setModalVisible(false);
    }).catch(err => console.log(err));
  }

  // handle trigger edit/update modal
  const handleTriggerUpdate = (item: any) => {
    setTaskUpdated(item);
    setModalVisible(true);
    setTaskInputValue(item.title);
  }

  return (
    <>
      <Header title='Tasks' />
      <ListItems
        taskList={taskList}
        setTaskList={setTaskList}
        handleTriggerUpdate={handleTriggerUpdate}
      />
      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        taskInputValue={taskInputValue}
        setTaskInputValue={setTaskInputValue}
        handleAddTask={handleAddTask}
        taskUpdated={taskUpdated}
        setTaskUpdated={setTaskUpdated}
        handleTaskUpdate={handleTaskUpdate}
        taskList={taskList}
      />
    </>
  )
}
