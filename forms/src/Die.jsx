import React from 'react';
import { useState } from 'react';

 export default function Forms(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        
        <button 
            style={styles}
            onClick={props.hold}
        >{props.value}</button>
        
        
    )

        
 }
