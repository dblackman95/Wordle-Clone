import React, { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

export default function Wordle({ solution }) {
    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution);
    const [showModal, setShowModal] = useState(false);

    const handleKeyUpChild = (event) => {
        handleKeyup(event);
    };

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
            setTimeout(() => setShowModal(true), 2000);
            console.log('Congratulations, you win!');
            window.removeEventListener('keyup', handleKeyup);
        }

        if (turn > 5) {
            setTimeout(() => setShowModal(true), 2000);
            console.log('Sorry, you are out of turns.');
            window.removeEventListener('keyup', handleKeyup);
        }

        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup, isCorrect, turn]);

    return (
        <>
            {/*<div>Solution - {solution}</div>
            <div>Current Guess - {currentGuess}</div>*/}
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys} handleKeyup={handleKeyUpChild} />
            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        </>
    );
}