import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/home';
import RecipePageScreen from '../screens/recipePage';

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        RecipePage: RecipePageScreen
    },
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(HomeStack);