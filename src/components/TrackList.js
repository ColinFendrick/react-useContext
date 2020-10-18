import React, { useContext } from 'react';

import { MusicPlayerContext } from '../context/MusicPlayerContext';

const TrackList = () => {
	const [state, setState] = useContext(MusicPlayerContext);
	return (
		<button onClick={() => setState(state => ({ ...state, name: 'Clicked!' }))}>
			{state.name}
		</button>
	);
};

export default TrackList;
