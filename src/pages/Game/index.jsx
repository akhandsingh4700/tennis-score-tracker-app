import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlayerCard from '../../components/Cards/index';
import * as UTILS from '../../utils';
import * as Actions from '../../redux/Action';

function GameScreen(props) {
  const globalState = useSelector((state) => state).reducer;
  const { playerOneInfo, playerTwoInfo } = globalState;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Props', UTILS.extractNamesFromURL(props.location.pathname));
    addPlayersInitialData();
    return () => {};
  }, []); // Component Did Mount

  //Function For Initializing Players Data
  function addPlayersInitialData() {
    let PlayersInfo = UTILS.extractNamesFromURL(props.location.pathname);
    dispatch(
      Actions.AddPlayerTwoInfoAction({
        name: PlayersInfo.playerTwo,
        points: 0
      })
    );
    dispatch(
      Actions.AddPlayerOneInfoAction({
        name: PlayersInfo.playerOne,
        points: 0
      })
    );
  }

  //Handle Add Win Function
  function handleWinCallback(info) {
    if (info === 'one') {
      dispatch(
        Actions.AddPlayerOneInfoAction({
          ...playerOneInfo,
          points: parseInt(playerOneInfo.points + 1)
        })
      );
    } else if (info === 'two') {
      dispatch(
        Actions.AddPlayerTwoInfoAction({
          ...playerTwoInfo,
          points: parseInt(playerTwoInfo.points + 1)
        })
      );
    }
  }

  //Result Calulator Function
  function calculateResult() {
    let result = {
      winner: '',
      difference: ''
    };
    if (playerOneInfo.points > playerTwoInfo.points) {
      result.winner = playerOneInfo.name;
      result.difference = parseInt(playerOneInfo.points - playerTwoInfo.points);
    } else if (playerTwoInfo.points > playerOneInfo.points) {
      result.winner = playerTwoInfo.name;
      result.difference = parseInt(playerTwoInfo.points - playerOneInfo.points);
    } else if (
      playerOneInfo.points != 0 &&
      playerTwoInfo.points != 0 &&
      playerOneInfo.points === playerTwoInfo.points
    ) {
      result.winner = 'Tie';
      result.difference = 0;
    }
    return result;
  }

  return (
    <div
      style={{
        margin: '50px 50px 50px 50px'
      }}
    >
      <h2>{`Game Page`}</h2>
      <br />
      <hr />
      <PlayerCard
        name={playerOneInfo.name}
        points={playerOneInfo.points}
        addWinCallback={() => handleWinCallback('one')}
      />
      <PlayerCard
        name={playerTwoInfo.name}
        points={playerTwoInfo.points}
        addWinCallback={() => handleWinCallback('two')}
      />
      <br />
      <hr />
      <h2>{`Current Winner :   ${calculateResult().winner}`}</h2>
      <h2>{`Win Difference :   ${calculateResult().difference}`}</h2>
    </div>
  );
}

export default GameScreen;
