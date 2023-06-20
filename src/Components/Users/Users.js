import React from 'react';
import { UserLoaded } from '../../Components/Users/Components/UserLoaded';

import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { setState } from '../../slices/UserSlice';
import { UserTable } from '../../Components/Users/Components/UserTable';

const URL = 'https://randomuser.me/api/?results=5';

export async function getData() {
  try {
    const data = await fetch(URL);
    const results = await data.json();

    return results;
  } catch {
    console.error('Error');
  }
}

export const Users = () => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    const data = await getData();
    dispatch(setState(data));
  };

  return (
    <>
      <Button onClick={() => handleClick()}>Get User Data</Button>
      <UserLoaded />
    </>
  );
};
