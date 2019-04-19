import React, {Fragment} from 'react';
import { Image, View } from 'react-native';
import Video from 'react-native-video';

export default ({ item }) => {
	return (
		<View>
		<Image
			source={{
				uri: item.item.artworkUrl100.replace('100x100', '600x600')
			}}
			style={{ height: 300, width: 300, flex: 1 }}
		></Image>		
		<Video source={{uri: item.item.previewUrl}} />
		</View>
	);
};
