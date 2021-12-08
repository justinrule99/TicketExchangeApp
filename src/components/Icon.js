import React from 'react';
import {SvgXml} from 'react-native-svg';

import {icons} from '../../assets/icons/icons.js';

const mapIconsToName = (name) => icons[name] ?? icons['folder'];


const Icon = ({name}) => {
    const icon = mapIconsToName(name);

    return (
        <SvgXml
            xml={icon}
            style={{color: '#C8102E'}}
            width="75%"
            height="75%"
        />
    );
}

export default Icon;