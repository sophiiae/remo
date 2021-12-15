import React, { useState } from 'react';
import { Header } from '../components/header.component';
import { ListItems } from '../components/list-items.component';
import { InputModal } from '../components/input-modal.component';

export interface TaskItem {
  title: string;
  date: string;
  key: string;
}

export const Home = () => {
  const initialTaskList: TaskItem[] = [
    {
      title: 'Get some snacks',
      date: 'Fri, 08 Jan 2021 16:32:11 GMT',
      key: '1'
    },
    {
      title: 'Get some groceries',
      date: 'Tue, 05 Jan 2021 16:32:11 GMT',
      key: '2'
    },
    {
      title: 'Prepare youtube script',
      date: 'Fri, 05 Feb 2021 16:32:11 GMT',
      key: '3'
    },
    {
      title: 'Meet with Aurora',
      date: 'Thur, 15 Feb 2021 16:32:11 GMT',
      key: '4'
    }
  ]

  const [taskList, setTaskList] = useState(initialTaskList);
  const [modalVisible, setModalVisible] = useState(false);
  const [taskInputValue, setTaskInputValue] = useState('');
  const [taskUpdated, setTaskUpdated] = useState(null);

  const handleAddTask = (task: TaskItem) => {
    const newTaskList = [...taskList, task];
    setTaskList(newTaskList);
    setModalVisible(false);
  }

  const handleTaskUpdate = (task: TaskItem) => {
    const taskIndex = taskList.findIndex(item => item.key === task.key);
    const newTaskList = [...taskList];
    newTaskList.splice(taskIndex, 1, task);
    setTaskList(newTaskList);
    setTaskUpdated(null);
    setModalVisible(false);
  }

  const handleTriggerUpdate = (item: any) => {
    setTaskUpdated(item);
    setModalVisible(true);
    setTaskInputValue(item.title);
  }

  return (
    <>
      <Header />
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
