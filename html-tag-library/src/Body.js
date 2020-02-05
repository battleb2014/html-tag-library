import React from 'react';
import All from './Components/All';
import AudioVideo from './Components/AudioVideo';
import Basic from './Components/Basic';
import Formatting from './Components/Formatting';
import FormsAndInputs from './Components/FormsAndInputs';
import Frames from './Components/Frames';
import Images from './Components/Images';
import Links from './Components/Links';
import Lists from './Components/Lists';
import Meta from './Components/Meta';
import Programming from './Components/Programming';
import StylesAndSemantics from './Components/StylesAndSemantics';
import Tables from './Components/Tables';

const Body = () => { 
    return(
        <div className='body'>
            <All /> 
            <Basic />
            <Formatting />
            <FormsAndInputs />
            <Frames />
            <Images />
            <AudioVideo />
            <Links />
            <Lists />
            <Tables />
            <StylesAndSemantics />
            <Meta />
            <Programming />
        </div>
    )
}

export default Body;