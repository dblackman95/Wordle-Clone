import React, { useEffect, useState } from 'react';

export default function Keypad({ usedKeys, handleKeyup }) {
    const [letters, setLetters] = useState(null);

    useEffect(() => {
        let URL = '';
        if (navigator.appVersion.indexOf("Win") != -1) {
            URL = 'http://192.168.1.152:3001/'
        } else {
            URL = 'https://wordle-clone-04zv.onrender.com:3001/'
        }
        fetch(URL + 'letters')
            .then(res => res.json())
            .then(json => {
                setLetters(json);
            });
    }, [setLetters])

    return (
        <div className='keypad'>
            {letters && letters.map((l) => {
                const color = usedKeys[l.key];
                if (l.key === 'p' || l.key === 'l') {
                    if (l.key === 'l') {
                        return (
                            <>
                                <div className={color + ' letterdecorate'} key={l.key} onClick={() => handleKeyup({key: l.key})}>{l.key}</div>
                                <br />
                                <div className='enter' onClick={() => handleKeyup({key: 'Enter'})}>Enter</div>
                            </>
                        );
                    } else {
                        return (
                            <>
                                <div className={color + ' letterdecorate'} key={l.key} onClick={() => handleKeyup({key: l.key})}>{l.key}</div>
                                <br />
                            </>
                        );
                    }
                    
                } else {
                    if (l.key === 'm') {
                        return (
                            <>
                            <div className={color + ' letterdecorate'} key={l.key} onClick={() => handleKeyup({key: l.key})}>{l.key}</div>
                            <div className='backspace' onClick={() => handleKeyup({key: 'Backspace'})}><i className="bi bi-backspace"></i></div>
                            </>
                        );
                    } else {
                        return (
                            <div className={color + ' letterdecorate'} key={l.key} onClick={() => handleKeyup({key: l.key})}>{l.key}</div>
                        );
                    }
                }
            })}
        </div>
    );
}