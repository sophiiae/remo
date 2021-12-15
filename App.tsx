import React, { useState } from 'react';
import { HomeScreen } from './src/screens/home.screen';
import { Container } from './src/styles/style';
import { TaskItem } from './src/screens/home.screen';
import { LoadingScreen } from './src/screens/loading.screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const initialTaskList: TaskItem[] = [];

  const [ready, setReady] = useState(false);
  const [taskList, setTaskList] = useState(initialTaskList);

  const loadTasks = () => {
    AsyncStorage.getItem('storedTasks').then(data => {
      if (data) setTaskList(JSON.parse(data)); 
    }).catch(err => console.log(err));
  }

  // Show loading page if data is not ready
  if (!ready) {
    return (
      <Container>
        <LoadingScreen
          title='Remo'
          startAsync={loadTasks}
          setReady={setReady}
        />
      </Container>
    )
  }

  return (
    <Container>
      <HomeScreen
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </Container>
  );
};

export default App;
