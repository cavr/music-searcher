import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import App from './App';
import MusicDetails from './src/components/MusicDetails';

const Root = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="list" title="List" component={App} initial />
				<Scene key="detail" component={MusicDetails} title="Details" />
			</Scene>
		</Router>
	);
};

export default Root;
