import React, { useContext } from 'react';

import { faPlay, faPause, FontAwesomeIcon } from '@fortawesome/fontawesome-free';
import useMusicPlayer from '../hooks/useMusicPlayer';

const TrackList = () => {
	const { togglePlay, trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();

	return (
		<>
			{trackList.map((track, ix) => (
				<div className='box' key={ix}>
					<div className='song-title' onClick={togglePlay}>
						{track.name}
					</div>
				</div>
			))}
		</>
	);
};

export default TrackList;
