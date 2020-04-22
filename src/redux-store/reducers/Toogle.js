export const ThemeSwitch = (state = true, action) => {
  switch (action.type) {
    case 'DARK_MODE':
      return state === !true;
    default:
      return state;
  }
};

// export const ThemeSwitch = (state = { darMode: JSON.parse(localStorage.setItem('DARK_MODE',('DARK_MODE'))) }, action) => {
//   switch (action.type) {
//     case 'DARK_MODE':
//       return state = { localStorage: !state.darMode };
//     default:
//       return state;
//   }
// };

const Toogle = (state = true, action) => {
  switch (action.type) {
    case "TOOGLE":
      return state === !true;
    case "CLOSE":
      return state;
    default:
      return state;
  }
};

export default Toogle;