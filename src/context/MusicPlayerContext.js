import React, { useState } from 'react';

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
	const [state, setState] = useState({
		tracks: [
			{
				name: 'Lost Chameleon - Genesis'
			},
			{
				name: 'The Hipsta - Shaken Soda'
			},
			{
				name: 'Tobu - Such Fun'
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
