import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ErrorTag from '.././../components/Tags';
function AddInfo() {
  let history = useHistory();

  const [playerOneInfo, setPlayerOneInfo] = useState({
    name: ''
  });
  const [playerTwoInfo, setPlayerTwoInfo] = useState({
    name: ''
  });

  const [formError, setFormError] = useState(null);
  function handleSubmit(event) {
    setFormError(null);
    if (playerOneInfo.name && playerTwoInfo.name) {
      history.push(
        `/gamePage_player_one=${playerOneInfo.name}&player_two=${playerTwoInfo.name}`
      );
    } else {
      setFormError('*Please add name of both players');
    }
  }

  return (
    <div style={{ width: 500, margin: 50 }}>
      <h3>Please Enter Players Name To start the Game</h3>
      <hr />
      <br></br>
      <br></br>
      Enter Player 1:{' '}
      <input onChange={(e) => setPlayerOneInfo({ name: e.target.value })} />
      <br></br>
      <br></br>
      Enter Player 2:{' '}
      <input onChange={(e) => setPlayerTwoInfo({ name: e.target.value })} />
      <br></br>
      <br></br>
      <ErrorTag>{formError}</ErrorTag>
      <button type='submit' onClick={handleSubmit}>
        Continue
      </button>
    </div>
  );
}

export default AddInfo;
