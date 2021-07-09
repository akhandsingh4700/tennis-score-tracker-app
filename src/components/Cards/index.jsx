import React from 'react';

function PlayerCard(props) {
  const { name, points, addWinCallback } = props;
  // console.log('PROPS @ CARD ', props);
  return (
    <div
      style={
        {
          // margin: '50px 0 50px 50px'
        }
      }
    >
      <h2>{`Name :  ${name}`}</h2>
      <h3>{`Wins :  ${points}`}</h3>
      <button onClick={addWinCallback}>Add Win </button>
    </div>
  );
}

export default PlayerCard;
