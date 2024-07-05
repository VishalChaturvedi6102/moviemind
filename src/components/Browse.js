import React from 'react';
import { useSelector } from 'react-redux';

const Browse = () => {
  const user = useSelector((store) => store.user);
  
  return (
    <div>
      {user ? (
        <div>
          {/* Your browse content here */}
        </div>
      ) : (
        <div>
          {/* Prompt user to log in */}
        </div>
      )}
    </div>
  );
};

export default Browse;
