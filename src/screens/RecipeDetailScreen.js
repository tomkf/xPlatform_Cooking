import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, FlatList } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { title, imageURL, steps } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: imageURL}} style={styles.image} />
      <Text style={styles.heading}>{ title }</Text>
      <Text style={styles.heading}>Steps</Text>
      <FlatList
        data={steps}
        keyExtractor={item => item}
        renderItem={({ item }) => {
          return <Text style={styles.stepItem}>{item}</Text>;
        }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },

  heading: {
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 10
  },
  image: {
    height: 250
  },
  stepItem: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20
  }
});

export default RecipeDetailScreen;