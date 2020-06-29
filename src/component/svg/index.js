import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@ant-design/icons';
import InfoSvg from "src/assets/svg/info.svg";
import "./index.scss"
const Svg = props => {
    // const {svgPath}=props;
    return (
        <div>
            <Icon component={InfoSvg}></Icon>
        </div>

        // <svg  className="svgClass" aria-hidden="true">
        //     <use xlink:href="iconName" />
        // </svg>

    );
};

export default Svg;