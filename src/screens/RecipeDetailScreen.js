import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, FlatList } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { title, imageURL, steps } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: imageURL}} style={styles.image} />
      <Text>{ title }</Text>
      <FlatList
        data={steps}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200
  }
});

export default RecipeDetailScreen;