import React, { useEffect } from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { ToogleTheme } from './redux-store/actions/Toogle';
import nightMode from './images/moonlight.svg';
import dayMode from './images/sun.svg';
import './sass/main.scss';
interface Props { }
interface State {
  ThemeSwitch: boolean;
}

const ThemeChanger: React.FC<Props> = () => {
  const useTypeSelector: TypedUseSelectorHook<State> = useSelector;
  const themeState = useTypeSelector(state => state.ThemeSwitch);
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(ToogleTheme());
    if (themeState) {
      localStorage.setItem('theme', JSON.stringify(true));
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', JSON.stringify(!true));
    }
  };
  useEffect(() => {
    const store = localStorage.getItem('theme');
    if (store === 'true') return document.body.classList.add('dark-mode');
  }, [themeState]);
  return (
    <>
      <div>
        <button style={{
          position: 'fixed',
          zIndex: 3,
          top: '3.1%',
          left: '60%',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          background: '#000'
        }} onClick={changeTheme}>{themeState ? <img src={nightMode} alt="day light" height="35" width="35" /> : <img src={dayMode} alt="day light" height="35" width="35" />}</button>
      </div>
    </>
  );
}

export default ThemeChanger;