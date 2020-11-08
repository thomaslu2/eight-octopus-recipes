import React from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-elements'

export default class RecipePageScreen extends React.Component {
  
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    }
  }

  renderTimeAndServing = () => (
    <Card>
      <Card.Title>Time and Servings</Card.Title>
      <Card.Divider/>
      <Text>{this.props.navigation.getParam('prep_time')}</Text>
      <Text>{this.props.navigation.getParam('cook_time')}</Text>
      <Text>{this.props.navigation.getParam('serve_amt')}</Text>
    </Card>
  )

  renderIngredients = () => (
    <Card>
      <Card.Title>Ingredients</Card.Title>
      <Card.Divider/>
      <Text >{this.props.navigation.getParam('ingredients')}</Text>
    </Card>
  )

  renderInstructions = () => (
    <Card>
      <Card.Title>Instructions</Card.Title>
      <Card.Divider/>
      <Text>{this.props.navigation.getParam('instructions')}</Text>
    </Card>
  );

  renderAboutMe = () => (
    <Card>
      <Text>My name is Jian Yang. My grandmother give me family 
        recipe before she died in a horrible way.</Text>
    </Card>
  )

  render() {
    var aboutMe = this.props.navigation.getParam('recipeId') < 9;
    return (
      <ScrollView>
        <Image 
          style={{ resizeMode: 'cover', width: 500, height: 300 }}
          source={{ uri: this.props.navigation.getParam('photo_url')}}
        />
        { aboutMe ? this.renderTimeAndServing() : null }
        { aboutMe ? this.renderIngredients() : this.renderAboutMe() }
        { aboutMe ? this.renderInstructions() : null }
      </ScrollView>
    );
  }
}