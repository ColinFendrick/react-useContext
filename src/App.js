import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, TrackList } from './components';
import { MusicPlayerProvider } from './context/MusicPlayerContext';

const App = () => {
	return (
		<MusicPlayerProvider>
			<div className='container mt-3'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/musicplayer' component={TrackList} />
				</Switch>
			</div>
		</MusicPlayerProvider>
	);
};

export default App;
