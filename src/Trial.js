import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import InlineImage from "../src/components/InlineImage";

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const Trial = () => {
    return (
        <View style={styles.mainContainer}>
            <Image style={[styles.imageStyles, {flex : 0.2}]}
                   resizeMode={'contain'}
                   source={{uri: 'https://res.cloudinary.com/dl6qduhfx/image/upload/v1506454308/d_kxkftn.png'}}/>
            <Image style={[styles.imageStyles, {flex: 1}]}
                   resizeMode={'stretch'}
                   source={{uri: 'https://res.cloudinary.com/dl6qduhfx/image/upload/v1506454308/d_kxkftn.png'}}/>
            <Image style={[styles.imageStyles, {flex: 0.2}]}
                   resizeMode={'contain'}
                   source={{uri: 'https://res.cloudinary.com/dl6qduhfx/image/upload/v1506454308/d_kxkftn.png'}}/>
        </View>
    );
};

const styles =StyleSheet.create({
    imageStyles: {
        alignSelf: 'stretch',
        height: undefined,
        width: undefined,
    },
    mainContainer: {
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor:'silver'
    }
});

export default Trial;
