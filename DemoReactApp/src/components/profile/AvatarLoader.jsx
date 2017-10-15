import * as React from 'react';
import * as PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { AvatarLoaderPane } from './AvatarLoader.styles';

const AvatarLoader = ({ toggleOverlay, onUpload }) => (
    <AvatarLoaderPane onMouseLeave={toggleOverlay}>
        <Dropzone
            className="dropzone"
            multiple={false}
            onDrop={onUpload}
        >
            <i className='glyphicon glyphicon-open' />
        </Dropzone>
    </AvatarLoaderPane>
);

AvatarLoader.propTypes = {
    toggleOverlay: PropTypes.func.isRequired,
    onUpload: PropTypes.func.isRequired,
};

export { AvatarLoader };
