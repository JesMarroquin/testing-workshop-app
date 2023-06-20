import React, { useState } from 'react';
import { Users } from './Components/Users/Users';

import './styles.css';

export default function App() {
  const [userData, setUserData] = useState(null);
  return (
    <div>
      <Users />
    </div>
  );
}
