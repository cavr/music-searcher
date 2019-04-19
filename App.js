import React, { useState } from 'react';

import { Container, Header, Content } from 'native-base';
import { Search } from './src/components/Search';
import { MusicList } from './src/components/MusicList';
export default () => {
	const [items, setItems] = useState([]);

	const onSearch = musicItems => {
		setItems(musicItems);
	};

	return (
		<Container>
			<Header searchBar rounded>
				<Search onSearch={onSearch} />
			</Header>
			<Content>
				<MusicList items={items} />
			</Content>
		</Container>
	);
};
