import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { generateImageData, ImageData } from './utils/ImageData';
import Search from './components/Search';
import ImageGrid from './components/ImageGrid';
import FullScreenImage from './components/FullScreenImage';

const App = () => {
  const allImages = generateImageData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const filteredImages = allImages.filter((img) =>
    img.id.toString().includes(searchTerm)
  );

  return (
    <SafeAreaView style={styles.container}>
      <Search value={searchTerm} onChange={setSearchTerm} />
      <ImageGrid images={filteredImages} onImagePress={setSelectedImage} />
      <FullScreenImage image={selectedImage} onClose={() => setSelectedImage(null)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
