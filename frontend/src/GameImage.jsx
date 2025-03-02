import React from 'react';
export const GameImage = React.memo(({ handleUserClick, imageRef }) => {
  return (
    <div className="gameImage">
      <img
        ref={imageRef}
        onClick={handleUserClick}
        src="https://cdn.myportfolio.com/f640091a26e1205999cdb2a35209ee7d/bce780e8-d10f-4888-85b0-73f98ca93c19_rw_1920.jpg?h=8b3d1153c5ce368d27c557efa443138d"
        alt=""
      />
    </div>
  );
});
