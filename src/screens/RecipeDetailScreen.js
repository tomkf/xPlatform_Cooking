import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const RecipeDetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Detail!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});

export default RecipeDetailScreen;