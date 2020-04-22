import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { ToogleTheme } from './redux-store/actions/Toogle';
import './sass/main.scss';

interface Props {

}
interface State {
  ThemeSwitch: any;
}

const ThemeChanger: React.FC<Props> = () => {
  const useTypeSelector: TypedUseSelectorHook<State> = useSelector;
  const themeState = useTypeSelector(state => state.ThemeSwitch);
  const dispatch = useDispatch();
  console.log(themeState);

  // const [state, setState] = useState<boolean>(true);
  const changeTheme = () => {
    const header = document.querySelector('.header');
    const card = document.querySelectorAll('.eventCard');
    const form = document.querySelector('.form-field');
    const footer = document.querySelector('.footer');
    const sectionA = document.querySelector('.sectionA');
    dispatch(ToogleTheme())
    // const storeThemeState = localStorage.setItem('theme', JSON.stringify('DARK_THEME'));
    // const getThemeState = JSON.parse(localStorage.getItem('theme'));
    // if () {

    // }
    if (themeState) {
      document.body.classList.add('dark-mode');
      header?.classList.add('dark-mode');
      card?.forEach(cd => {
        cd.classList.add('dark-mode');
      });
      form?.classList.add('dark-mode');
      footer?.classList.add('dark-mode');
      sectionA?.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      header?.classList.remove('dark-mode');
      card?.forEach(cd => {
        cd.classList.remove('dark-mode');
      });
      form?.classList.remove('dark-mode');
      footer?.classList.remove('dark-mode');
      sectionA?.classList.remove('dark-mode');
    }
    // localStorage.setItem('DARK_MODE', themeState)
  };

  // useEffect(() => {
  //   return () => {
  //     changeTheme();
  //   }
  // }, [state]);

  return (
    <div>
      <button style={{
        background: 'red',
        padding: '10px 30px',
        position: 'fixed',
        zIndex: 3,
        top: '3%',
        left: '60%',
      }} onClick={changeTheme}> CLICK ME</button>
    </div>
  );
}


export default ThemeChanger;