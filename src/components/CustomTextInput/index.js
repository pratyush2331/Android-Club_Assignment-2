import React from 'react';
import { TextInput } from 'react-native';

export default function PratyushInput(props){
    return(
        <>
            <TextInput placeholder={props.placeholder} style={{backgroundColor: props.placeholderColor}}/>
        </>
    );
}