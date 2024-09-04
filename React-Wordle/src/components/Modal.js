import React from 'react';

export default function Modal({ isCorrect, turn, solution }) {
    return (
        <div className='modal-game-end'>
            {isCorrect && (
                <div>
                    <h1>You Win!</h1>
                    <p className='solution'>The answer is {solution}!!!</p>
                    <p>You found the solution in {turn} {(turn == 1 ? (<span>guess</span>) : (<span>guesses</span>))}!</p>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>Sorry, you lost.</h1>
                    <p className='solution'>The answer was {solution}!</p>
                    <p>Try again!</p>
                </div>
            )}
        </div>
    )
}