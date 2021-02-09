/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import StudyGroupScreen from './src/layout/study_group';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
    // 'Animated: `useNativeDriver` was not specified'
]);
AppRegistry.registerComponent(appName, () => App);
