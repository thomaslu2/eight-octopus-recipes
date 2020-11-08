import React from 'react';
import { TouchableOpacity, FlatList, View } from 'react-native';
import { Card } from 'react-native-elements'
import { recipes } from '../data/dataArrays';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  renderRecipes = ({ item }) => (
    <TouchableOpacity onPress={() => this.pressHandler(item)}>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
        <Card.Image 
          style={{ resizeMode: 'cover', width: 300, height: 300 }}
          source={{ uri: item.photo_url }}
        />
      </Card>
    </TouchableOpacity>
  );

  pressHandler = item => {
    this.props.navigation.navigate('RecipePage', item);
  }

  render() {
    return (
      <View>
        <FlatList 
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={(item) => item.key}
        />
      </View>
    );
  }
}