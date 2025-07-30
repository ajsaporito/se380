import React from 'react';
import { FlatList, Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import { ImageData } from '../utils/ImageData';

const { width } = Dimensions.get('window');
const IMAGE_SIZE = width / 3 - 4;

interface Props {
  images: ImageData[];
  onImagePress: (img: ImageData) => void;
}

const ImageGrid = ({ images, onImagePress }: Props) => {
  const renderItem = ({ item }: { item: ImageData }) => (
    <TouchableOpacity onPress={() => onImagePress(item)}>
      <Image source={{ uri: item.url }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      numColumns={3}
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 2,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    margin: 2,
    borderRadius: 4,
  },
});

export default ImageGrid;
