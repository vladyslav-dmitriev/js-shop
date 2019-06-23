export const reduce = (type, payload) => ({ type, payload });

export const getIdFromUrl = (path) => {
  const { length } = path;
  const url = window.location.pathname;
  const position = url.indexOf(path);
  const id = url.slice(position + length + 1);
  return id;
};

export const saveObjectToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getObjectFromLocalStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key)) || {};
  return data;
};

export const saveUserDataToLocalStorage = (...values) => {
  const previousUserData = getObjectFromLocalStorage('userData');
  const nextUserData = { ...previousUserData };
  values.forEach((value) => {
    Object.keys(value).forEach((key) => {
      nextUserData[key] = value[key];
    });
  });
  saveObjectToLocalStorage('userData', nextUserData);
};

export const getUserDataFromLocalStorage = (...requestedFields) => {
  const userData = getObjectFromLocalStorage('userData');
  const requestedUserData = {};
  requestedFields.forEach((field) => {
    requestedUserData[field] = '';
    Object.keys(userData).forEach((key) => {
      if (field === key) {
        requestedUserData[field] = userData[key];
      }
    });
  });
  return requestedUserData;
};

export const getFormattedTime = (data) => {
  const twoCharInt = anInt => (anInt < 10 ? `0${anInt}` : anInt);
  const diff = Date.now() - new Date(data);
  const min = Math.floor(diff / 60000);
  const hou = Math.floor(diff / 3600000);
  let result = '';

  if (min < 1) {
    result = 'только что';
  } else if (min < 5) {
    result = 'менее 5 мин назад';
  } else if (min < 59) {
    result = `${min} мин назад`;
  } else if (hou < 3) {
    result = `${hou} час назад`;
  } else {
    const times = new Date(data);
    const day = twoCharInt(times.getDate());
    const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    const month = months[times.getMonth()];
    const year = times.getFullYear();
    const hours = twoCharInt(times.getHours());
    const minutes = twoCharInt(times.getMinutes());
    result = `${day} ${month} ${year} ${hours}:${minutes}`;
  }
  return result;
};
