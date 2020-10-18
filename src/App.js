import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, TrackList, PlayerControls } from './components';
import { MusicPlayerProvider } from './context/MusicPlayerContext';

const Player = () => (
	<div className='container'>
		<TrackList />
		<PlayerControls />
	</div>
);

const App = () => {
	return (
		<MusicPlayerProvider>
			<div className='container mt-3'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/musicplayer' component={Player} />
				</Switch>
			</div>
		</MusicPlayerProvider>
	);
};

export default App;
