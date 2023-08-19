
import React, { useState } from 'react';
import { TextControlProps } from '../models/TextControl';

export const TextControl1: React.FC<TextControlProps> = ({ text, onTextChange, buttons }) => {
    return (
        <div className="textControl">
            <textarea value={text} onChange={onTextChange} rows={5} cols={40}></textarea>
            <div >
                {buttons.map((button, index) => (
                    <button style={{height:"100%"}}  key={index} onClick={button.callback}>
                        {button.text}
                    </button>
                ))}
            </div>
        </div>
    );
};