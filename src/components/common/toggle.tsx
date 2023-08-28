import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useTheme from '@/hooks/useTheme';

const Toggle = () => {
  const { isDarkMode, toggleTheme, theme } = useTheme();


  return (
    theme !== 'init' ?
    <DarkModeSwitch
      style={{ }}
      checked={isDarkMode}
      onChange={toggleTheme}
      size={30}
    /> : null
  )
}

export default Toggle 