import React from 'react';
import { useSelector } from 'react-redux';
import { UserTable } from '../../../Components/Users/Components/UserTable';

export const UserLoaded = () => {
  const userValue = useSelector((state) => state.user);

  return (
    <>
      {userValue && (
        <>
          <p>Loaded User Info</p>
          <UserTable />
        </>
      )}
    </>
  );
};
