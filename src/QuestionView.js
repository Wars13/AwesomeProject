import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Questions from './Question.json';

var ImageTag = "<img>";
var ImageTagEnd = "</img>";

export default class AwesomeProject extends Component {

    renderQuestion(){
        for( var question in Questions)
        {
            var qPrompt = Questions[question].prompt;

            if (qPrompt.search(ImageTag) > 0) {
                console.log( qPrompt ); //full Question
                console.log( qPrompt.substring(qPrompt.indexOf(ImageTag)+ImageTag.length,qPrompt.indexOf(ImageTagEnd)) ); // Image location

                var finalPrompt = qPrompt.replace("Large","Small");
                finalPrompt = finalPrompt.replace(/<img>/g,"<Image>");
                finalPrompt = finalPrompt.replace(/<\/img>/g,"</Image>");
                console.log(finalPrompt); //replace img with Image tag

                Questions[question].prompt = finalPrompt; // replace Questions value
            }
        }

        return Questions.map((question) =>
            <View key={question.id} style={styles.questionViewContainer}>
                <Text>
                    {question.prompt}
                    <Image style={styles.imageStyles}
                           source={{uri: 'https://res.cloudinary.com/dl6qduhfx/image/upload/v1506454308/a_gipd3c.png'}}
                            resizeMode="stretch"/>
                </Text>
            </View>
        );
    }

    render() {
        return (
            <View>
                {this.renderQuestion()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    questionViewContainer: {
        flex: 1,
        marginTop: 40,
        marginHorizontal: 10,
        justifyContent: 'space-between'
    },
    imageStyles: {
        width: 170,
        height: 50,

    }
});
