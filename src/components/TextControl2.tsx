
import React, { useState } from 'react';
import { TextControlProps } from '../models/TextControl';


export const TextControl2: React.FC<TextControlProps> = ({ text, onTextChange, buttons }) => {
    return (
        <div className="textControl">
            <button style={{height:"100%"}} onClick={buttons[0].callback}>{buttons[0].text}</button>
            <textarea value={text} onChange={onTextChange} rows={5} cols={40}></textarea>
            <button  style={{height:"100%"}} onClick={buttons[1].callback}>{buttons[1].text}</button>
        </div>
    );
};