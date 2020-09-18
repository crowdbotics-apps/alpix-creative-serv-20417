import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList103742Navigator from '../features/NotificationList103742/navigator';
import Settings103741Navigator from '../features/Settings103741/navigator';
import Settings103733Navigator from '../features/Settings103733/navigator';
import UserProfile103731Navigator from '../features/UserProfile103731/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList103742: { screen: NotificationList103742Navigator },
Settings103741: { screen: Settings103741Navigator },
Settings103733: { screen: Settings103733Navigator },
UserProfile103731: { screen: UserProfile103731Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
