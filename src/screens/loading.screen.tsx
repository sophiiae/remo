import React, { useEffect } from 'react';
import { Header } from '../components/header.component';

export const LoadingScreen = ({
  title,
  startAsync,
  setReady
}: any) => {
  useEffect(() => {
    startAsync();
    setReady(true);
  }, [])

  // TODO: update loading screen with logo in the center
  return (
    <>
      <Header title={title}/>
    </>
  )
} 
