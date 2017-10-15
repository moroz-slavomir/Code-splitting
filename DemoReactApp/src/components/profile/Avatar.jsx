import * as React from 'react';
import * as PropTypes from 'prop-types';
import { AvatarImage } from './Avatar.styles';

const Avatar = ({ toggleOverlay }) => (
    <div
        className="panel panel-default"
        onMouseEnter={toggleOverlay}
        onDragOver={toggleOverlay}
    >
        <AvatarImage
            className="img-rounded"
            alt="Profile picture"
        />
    </div>
);

Avatar.propTypes = {
    toggleOverlay: PropTypes.func.isRequired,
};

export { Avatar };