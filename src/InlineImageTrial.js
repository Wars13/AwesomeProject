import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, PixelRatio } from 'react-native';
import InlineImage from "../src/components/InlineImage";

export default class InlineImageTrial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgWidth: 1,
            imgHeight: 1
        };

    }

    foo() {
        Image.getSize(this.props.uri, (width, height) => {
            this.setState({imgWidth: width, imgHeight: height});
        });
    }

    componentDidMount() {
        Image.getSize(this.props.uri, (width, height) => {
            console.log(width);
            console.log("Foooooooooooo B - URI " + this.props.uri);
            this.setState({imgWidth: width, imgHeight: height});
            console.log("Height : " + this.state.imgHeight);
            console.log("width : " + this.state.imgWidth);
        });
    }

    render() {
        console.log(this.state);
        console.log("HEIGHT : " + this.state.imgHeight);
        return (
            <Image
                style={{width: this.state.imgWidth, height: this.state.imgHeight, flex:1}}
                source={{uri: this.props.uri}}
                resizeMode={'contain'}
            />
        );
    }
}

/*
export default class InlineImageTrial extends Component {

    constructor(props) {
        super(props);

        Image.getSize(this.props.uri, (width, height) => {
            console.log("B - URI " + this.props.uri);
            this.state= {imgWidth: width, imgHeight: height};
            console.log("Height : " + this.state.imgHeight);
            console.log("width : " + this.state.imgWidth);
        });

    }


    render() {
        console.log("A - URI " + this.props.uri);
        console.log("HEIGHT : " + this.state.imgHeight);
        return (
            <Image
                style={{width: this.state.imgWidth, height: this.state.imgHeight, flex:1}}
                source={{uri: this.props.uri}}
                resizeMode={'contain'}
            />
        );
    }
}

*/