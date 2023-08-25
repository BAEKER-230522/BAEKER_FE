import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDispatch } from 'react-redux';
import { changeDarkMode } from '@/store/modules/darkmode';
import LocalStorage from '@/util/localstorage';
const Toggle = () => {
  const dispatch = useDispatch()
  const isDarkMode = JSON.parse(useSelector((state:any) => {return state.darkmode.isDarkMode}))
  console.log(isDarkMode);
  
  const toggleDarkMode = () => {
    dispatch(changeDarkMode())
    LocalStorage.setItem('isDarkMode', LocalStorage.getItem('isDarkMode')! === 'true' ? 'false' : 'true')
  };

  return (
    <DarkModeSwitch
      style={{ }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  )
}

export default Toggle 