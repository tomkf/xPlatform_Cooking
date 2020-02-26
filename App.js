import React from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';        
import RecipeItem from './src/components/RecipeItem'

export default function App() {
  const recipes = [
    { title: "Best Brownies", steps: ["step1", "step2"], imageURL: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg" },
    { title: "Banana Bread", steps: ["step1", "step2"], imageURL: "https://images.pexels.com/photos/830894/pexels-photo-830894.jpeg" },
    { title: "Chocolate Chip Cookies", steps: ["step1", "step2"], imageURL: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg" }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={recipe => recipe.title}
        data={recipes}
        renderItem={({ item }) => {
          return <RecipeItem recipe={item} />
      }} />
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});