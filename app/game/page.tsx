'use client';
import { useState } from 'react';

export default function Page() {
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleGuess = () => {
    const num = Number(guess);
    if (Number.isNaN(num)) {
      setFeedback('Enter a valid number!');
      return;
    }
    if (num < target) setFeedback('Too low!');
    else if (num > target) setFeedback('Too high!');
    else setFeedback('Correct!');
  };

  const reset = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setFeedback('');
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-bold">Guess the Number</h1>
      <p>I'm thinking of a number between 1 and 100.</p>
      <input
        className="border rounded px-2 py-1"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleGuess}
      >
        Guess
      </button>
      {feedback && <p>{feedback}</p>}
      <button className="underline text-sm" onClick={reset}>
        New game
      </button>
    </div>
  );
}
