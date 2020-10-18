import React, { useState } from 'react';

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
	const [state, setState] = useState({
		tracks: [
			{
				name: 'The Mountain Goats - Picture of My Dress'
			},
			{
				name: 'Black Thought - Good Morning'
			},
			{
				name: 'Jay Electronica - New Illuminati'
			}
		]
	});
	return (
		<MusicPlayerContext.Provider value={[state, setState]}>
			{props.children}
		</MusicPlayerContext.Provider>
	);
};

export { MusicPlayerContext, MusicPlayerProvider };
