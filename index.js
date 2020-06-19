/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Restaurant from './src/pages/Restaurant';
import Cities from './src/pages/Cities';
import Router from './src/Router'
import Details from './src/pages/Details'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
