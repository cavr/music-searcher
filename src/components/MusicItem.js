import React from 'react';
import { Image, WebView } from 'react-native';
import Video from 'react-native-video';


import {
	Text,
	Card,
	CardItem,
	Thumbnail,
	Left,
	Body,
	View,
	Icon
} from 'native-base';
import { Actions } from 'react-native-router-flux'; // New code


const styles = {	
	backgroundVideo: {
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  bottom: 0,
	  right: 0,
	},
  };

export const MusicItem = ({ item }) => {
	return (
		<View>			

			<Card style={{ flex: 0 }}>
				<CardItem>
					<Left>
						<Thumbnail
							source={{
								uri: item.item.artworkUrl100.replace('100x100', '600x600')
							}}
						/>
						<Body>
							<Text note>{item.item.trackName}</Text>
							<Text note>{item.item.collectionName}</Text>						
							<Video style={styles.backgroundVideo} source={{uri: item.item.previewUrl}} />							
						</Body>
					</Left>
				</CardItem>
				<CardItem>
					<Body>
						<Image
							source={{
								uri: item.item.artworkUrl100.replace('100x100', '600x600')
							}}
							style={{ height: 200, width: 300, flex: 1 }}
						/>
						<Text onPress={() => Actions.detail({ item })}>
							<Icon name="image" />
						</Text>
					</Body>
				</CardItem>
			</Card>
		</View>
	);
};
