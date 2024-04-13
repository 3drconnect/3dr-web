export const setValue = (state: any, path: string, value: any): any => {
  const pathArray = path.split('.');
  const currentState = { ...state };
  let currentObject: any = currentState;

  for (let i = 0; i < pathArray.length - 1; i++) {
    const key = pathArray[i];
    currentObject[key] = { ...currentObject[key] };
    currentObject = currentObject[key];
  }

  const lastKey = pathArray[pathArray.length - 1];
  currentObject[lastKey] = value;

  return currentState;
};