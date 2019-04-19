import React from 'react';
import { FlatList } from 'react-native';

import { MusicItem } from './MusicItem';

export const MusicList = ({ items }) => {
	const _keyExtractor = (item, index) => {
		return index.toString();
	};
	return (
		<FlatList
			data={items}
			renderItem={item => {
				return <MusicItem item={item} />;
			}}
			keyExtractor={_keyExtractor}
		/>
	);
};
