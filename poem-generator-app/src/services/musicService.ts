import { Howl } from 'howler';

class MusicService {
    private sound: Howl | null = null;

    loadTrack(url: string): void {
        this.sound = new Howl({
            src: [url],
            html5: true,
        });
    }

    play(): void {
        if (this.sound) {
            this.sound.play();
        }
    }

    pause(): void {
        if (this.sound) {
            this.sound.pause();
        }
    }

    stop(): void {
        if (this.sound) {
            this.sound.stop();
        }
    }

    setVolume(volume: number): void {
        if (this.sound) {
            this.sound.volume(volume);
        }
    }

    isPlaying(): boolean {
        return this.sound ? this.sound.playing() : false;
    }
}

const musicService = new MusicService();
export default musicService;