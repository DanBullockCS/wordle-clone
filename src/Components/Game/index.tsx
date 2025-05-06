import React, { CSSProperties } from 'react';
import Board from './Board';
import OnscreenKeyboard from './OnscreenKeyboard';

const Game = () => {
  const styles: { [key: string]: CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px 20px',
    },
  };

  return (
        <div style={styles.container}>
          <Board />
          <OnscreenKeyboard />
        </div>
    );
}

export default Game;