export interface User {
    id: string;
    name: string;
    email: string;
    profilePicture?: string;
}

export interface Poem {
    title: string;
    content: string;
    author: string;
}

export interface MusicTrack {
    id: string;
    title: string;
    artist: string;
    album?: string;
    duration: number; // duration in seconds
    isPlaying: boolean;
}