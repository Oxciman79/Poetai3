import React, { useState, useEffect } from 'react';
import { playTrack, pauseTrack, stopTrack, loadTrack } from '../services/musicService';

const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState<string | null>(null);

    useEffect(() => {
        if (currentTrack) {
            loadTrack(currentTrack);
        }
    }, [currentTrack]);

    const handlePlay = () => {
        playTrack();
        setIsPlaying(true);
    };

    const handlePause = () => {
        pauseTrack();
        setIsPlaying(false);
    };

    const handleStop = () => {
        stopTrack();
        setIsPlaying(false);
    };

    const handleTrackChange = (track: string) => {
        setCurrentTrack(track);
        if (isPlaying) {
            handleStop();
            handlePlay();
        }
    };

    return (
        <div>
            <h2>Music Player</h2>
            <button onClick={handlePlay} disabled={isPlaying}>Play</button>
            <button onClick={handlePause} disabled={!isPlaying}>Pause</button>
            <button onClick={handleStop}>Stop</button>
            <div>
                <label htmlFor="track-select">Select Track:</label>
                <select id="track-select" onChange={(e) => handleTrackChange(e.target.value)}>
                    <option value="">--Select a track--</option>
                    <option value="track1.mp3">Track 1</option>
                    <option value="track2.mp3">Track 2</option>
                    <option value="track3.mp3">Track 3</option>
                </select>
            </div>
        </div>
    );
};

export default MusicPlayer;