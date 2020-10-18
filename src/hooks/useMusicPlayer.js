import { useContext } from 'react';
import { MusicPlayerContext } from '../context/MusicPlayerContext';

const useMusicPlayer = () => {
	const [state, setState] = useContext(MusicPlayerContext);

	const playTrack = ix => {
		if (ix === state.currentTrackIndex) {
			togglePlay();
		} else {
			setState(state => ({ ...state, currentTrackIndex: ix, isPlaying: true }));
		}
	};

	const togglePlay = () => {
		setState(state => ({ ...state, isPlaying: !state.isPlaying }));
	};

	const playPreviousTrack = () => {
		const newIndex = ((state.currentTrackIndex + -1) % state.tracks.length + state.tracks.length) % state.tracks.length;
		playTrack(newIndex);
	};

	const playNextTrack = () => {
		const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
		playTrack(newIndex);
	};


	return {
		playTrack,
		togglePlay,
		currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex]?.name,
		trackList: state.tracks,
		isPlaying: state.isPlaying,
		playPreviousTrack,
		playNextTrack
	};
};

export default useMusicPlayer;
