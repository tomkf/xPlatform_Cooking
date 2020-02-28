import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import RecipeItem from '../components/RecipeItem';

const HomeScreen = ({ navigation }) => {
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
      
      const showDetail = (recipe) => {
        navigation.navigate('RecipeDetails', recipe);
      }
      
      return(
        <TouchableOpacity onPress={() => showDetail(item)}>
          <RecipeItem recipe={item} />
        </TouchableOpacity>
      );
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
  }
});

export default HomeScreen;
