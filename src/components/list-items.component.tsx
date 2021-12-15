import React, { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  colors,
  ListView,
  TaskText,
  TaskDate,
  ListViewHidden,
  HiddenButton,
  SwipedTaskText
} from '../styles/style';
import { TaskItem } from '../screens/home.screen';

export const ListItems = ({ taskList, setTaskList, handleTriggerUpdate }: any) => {
  const [swipedRow, setSwipedRow] = useState('');

  // handle delete task
  const handleDeleteTask = (rowKey: string) => {
    const newTaskList = taskList.filter((task: TaskItem) => task.key !== rowKey)

    AsyncStorage.setItem('storedTasks', JSON.stringify(newTaskList)).then(() => {
      setTaskList(newTaskList);
    }).catch(err => console.log(err));
  }

  return (
    <>
      {
        taskList.length == 0 &&
        <TaskText>
          You have no tasks today.
        </TaskText>
      }
      {
        taskList.length != 0 &&
        <SwipeListView
          data={taskList}
          renderItem={(data: any) => {
            const RowText = data.item.key == swipedRow ? SwipedTaskText : TaskText;
            return (
              <ListView
                underlayColor={colors.primary}
                onPress={() => handleTriggerUpdate(data.item)}
              >
                <>
                  <RowText>{data.item.title}</RowText>
                  <TaskDate>{data.item.date}</TaskDate>
                </>
              </ListView>
            )
          }}
          renderHiddenItem={(data: any, rowMap) => (
            <ListViewHidden>
              <HiddenButton
                onPress={() => handleDeleteTask(data.item.key)}
              >
                <FontAwesomeIcon icon={faTrash} color={colors.secondary}/>
              </HiddenButton>
            </ListViewHidden>
          )}
          rightOpenValue={-80}
          disableRightSwipe={true}
          previewRowKey={'1'}
          previewOpenValue={-80}
          previewOpenDelay={2000}
          tension={0}
          showsVerticalScrollIndicator={false}
          onRowOpen={(rowKey) => setSwipedRow(rowKey)}
          onRowClose={() => setSwipedRow('')}
          // style={{
          //     flex: 1, paddingBottom: 30, marginBottom:40
          // }}
        />
      }
    </>
  )
}
