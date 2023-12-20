import React from 'react';

import config from './config';

const search = async (searchStr = '') => {
  const url = `https://youtube138.p.rapidapi.com/search/?q=${searchStr}&hl=en&gl=IN`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': config.key,
      'X-RapidAPI-Host': config.host,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

const feed = async () => {
  const url = `https://youtube138.p.rapidapi.com/home/?hl=en&gl=IN`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': config.key,
      'X-RapidAPI-Host': config.host,
    },
  };

  try {
    // throw 'error';
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export {search, feed};
