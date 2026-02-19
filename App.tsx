import React, { useState, useCallback, useEffect } from 'react';
import { PlayerProfile, GameState } from './types';
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOverScreen from './components/GameOverScreen';
import InstructionsScreen from './components/InstructionsScreen';
import GameWonScreen from './components/GameWonScreen';

const App: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>(GameState.Start);
    const [playerProfile, setPlayerProfile] = useState<PlayerProfile>({ name: 'Electro Kid', avatar: 'boy' });
    const [finalScore, setFinalScore] = useState(0);

    useEffect(() => {
        // Preload sounds
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioContext.close();
    }, []);

    const handleGameStart = useCallback((profile: PlayerProfile) => {
        setPlayerProfile(profile);
        setGameState(GameState.Instructions);
    }, []);
    
    const handleReadyToPlay = useCallback(() => {
        setGameState(GameState.Playing);
    }, []);

    const handleGameOver = useCallback((score: number) => {
        setFinalScore(score);
        setGameState(GameState.GameOver);
    }, []);

    const handleGameWon = useCallback((score: number) => {
        setFinalScore(score);
        setGameState(GameState.Won);
    }, []);

    const handleRestart = useCallback(() => {
        setGameState(GameState.Start);
        setFinalScore(0);
    }, []);

    return (
        <div className="game-container">
            <div className="grid-floor"></div>
            <div className="side-wall left"></div>
            <div className="side-wall right"></div>
            <div className="horizon-glow"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
                {gameState === GameState.Start && <StartScreen onStart={handleGameStart} />}
            
                {gameState === GameState.Instructions && (
                    <InstructionsScreen onReadyToPlay={handleReadyToPlay} />
                )}
                
                {gameState === GameState.Playing && (
                    <Game playerProfile={playerProfile} onGameOver={handleGameOver} onGameWon={handleGameWon} onExit={handleRestart} />
                )}
                
                {gameState === GameState.GameOver && (
                    <GameOverScreen score={finalScore} onRestart={handleRestart} />
                )}

                {gameState === GameState.Won && (
                    <GameWonScreen score={finalScore} onRestart={handleRestart} />
                )}
            </div>
        </div>
    );
};

export default App;