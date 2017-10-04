import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Questions from './Question.json';
import InlineImage from "./components/InlineImage";

var ImageTag = "<img>";
var ImageTagEnd = "</img>";

export default class QuestionViewTwo extends Component {

    loopThroughPrompt() {
        for( var question in Questions)
        {
            var qPrompt = Questions[question].prompt;
            var imageLocation;
            var promptText;
            var promptLength = qPrompt.length;

            console.log(qPrompt.indexOf(ImageTag) + "aki");
            /*
            if (qPrompt.search(ImageTag) > 0) {

                for (var i=0; i<promptLength; i++) {
                    //iterate Through
                    imageLocation = qPrompt.substring(qPrompt.indexOf(ImageTag)+ImageTag.length,qPrompt.indexOf(ImageTagEnd));

                    var finalPrompt = qPrompt.replace("Large","Small");
                    finalPrompt = finalPrompt.replace(/<img>/g,"<Image>");
                    finalPrompt = finalPrompt.replace(/<\/img>/g,"</Image>");
                    console.log(finalPrompt); //replace img with Image tag

                    Questions[question].prompt = finalPrompt; // replace Questions value
                }
            }
            */
        }
    }

    renderInlineImage(props) {
        return (
            <InlineImage/>
        )
    }

    renderText(props) {
        return (
          <Text>
              {props.promptText}
          </Text>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                {this.loopThroughPrompt()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    }
});
