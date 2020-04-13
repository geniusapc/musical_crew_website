export const IntersectionOb =(state=false,action)=>{
  switch (action.type) {
    case 'CHANGE':
      return state === true;
    case 'REVERSE ':
      return state === false;
    default:
    return state;
  }
}