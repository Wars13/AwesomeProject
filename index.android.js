import React from 'react';
import { AppRegistry } from 'react-native';
import QuestionView from "./src/QuestionView";
import ImageView from "./src/ImageView";
import QuestionViewTwo from "./src/QuestionViewTwo";
import Trial from "./src/Trial";
import ImageViewClassBased from "./src/ImageViewClassBased";

const App = () => (
    <ImageView />
);

AppRegistry.registerComponent('AwesomeProject', () => App);
