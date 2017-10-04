import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, PixelRatio } from 'react-native';
import InlineImage from "../src/components/InlineImage";
import InlineImageTrial from "./InlineImageTrial";

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default class ImageViewClassBased extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <ScrollView style={{flex: 1}}>
                    <Text style={styles.prototypeContainer}>
                        A React component for displaying different types of images, including network images, static
                        resources, temporary local images, and images from local disk, such as the camera roll.
                        <Image style={[styles.imageInline]}
                               resizeMode={'center'}
                               source={{uri: 'https://res.cloudinary.com/dl6qduhfx/image/upload/v1507040142/image_embedded_185_u77hkw.png'}}/>
                        When the image has rounded corners, specifying an overlayColor will cause the remaining space in
                        the corners to be filled with a solid color.
                        This is useful in cases which are not supported by the Android implementation of rounded
                        corners: - Certain resize modes, such as 'contain' - Animated GIFs
                        <InlineImageTrial
                            uri='https://res.cloudinary.com/dl6qduhfx/image/upload/v1506454308/d_kxkftn.png'/>
                        {console.log("HERE")}
                        uri is a string representing the resource identifier for the image, which could be an http
                        address, a local file path, or the name of a static image resource
                        <Image style={styles.imageInline}
                               resizeMode={'contain'}
                               source={{uri: 'https://res.cloudinary.com/dl6qduhfx/image/upload/v1506454308/b_iv3jnv.png'}}/>
                    </Text>
                </ScrollView>

                <Image style={styles.imageStyles}
                       resizeMode={'contain'}
                       source={{uri: 'https://res.cloudinary.com/dl6qduhfx/image/upload/v1506454308/a_gipd3c.png'}}/>

                <Image style={styles.imageStyles}
                       resizeMode={'contain'}
                       source={{uri: 'https://res.cloudinary.com/dl6qduhfx/image/upload/v1506454308/d_kxkftn.png'}}/>

            </View>
        );
    }
}

const styles =StyleSheet.create({
    imageStyles: {
        flex: 1,
        alignSelf: 'stretch',
        height: windowHeight,
        width: windowWidth,
    },
    imageInline: {
        flex: 1,
    },
    prototypeContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        flex:1,
    },
    mainContainer: {
        flexWrap: 'wrap',
        backgroundColor:'silver',
        flex:1,
    }
});
