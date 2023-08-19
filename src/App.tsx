import React, { useState } from 'react';
import { Button } from './models/TextControl';
import {TextControl1} from "./components/TextControl1"
import {TextControl2} from "./components/TextControl2"
import TextControl3  from './components/TextControl3';

const App: React.FC = () => {
    const [control1Text, setControl1Text] = useState('');
    const [control2Text, setControl2Text] = useState('');

    const control1LeftButtons: Button[] = [];
    const controlRightButtons: Button[] = [
        { text: "Clear", callback: () => setControl1Text('') },
        { text: "Hello World", callback: () => setControl1Text('Hello world!') }
    ];

    const control2LeftButtons: Button[] = [
        {
            text: "Show Text",
            callback: () => alert(control2Text)
        },
        {
            text: "Show Number",
            callback: () => {
                const num = parseFloat(control2Text);
                if (!isNaN(num)) {
                    alert(num);
                }
            }
        }
    ];

    return (
        <div className='center'>
            <TextControl1
                text={control1Text}
                onTextChange={(event) => setControl1Text(event.target.value)}
                buttons={controlRightButtons}
                
            />
            <TextControl2
                text={control2Text}
                onTextChange={(event) => setControl2Text(event.target.value)}
                buttons={control2LeftButtons}
           
            />
            <TextControl3 maxOptions={3}></TextControl3>
            <TextControl3 maxOptions={10}></TextControl3>
        </div>
    );
};

export default App;
