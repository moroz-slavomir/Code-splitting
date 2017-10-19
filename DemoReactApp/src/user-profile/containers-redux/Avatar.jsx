import { connect } from 'react-redux';
import { Avatar as AvatarComponent } from '../components/Avatar.jsx';
import { AvatarLoader } from '../components/AvatarLoader.jsx';
import { withOverlay } from '../../shared/components/spinner/withOverlay.jsx';
import { uploadUserAvatar } from '../actions/uploadUserAvatar';

const mapStateToProps = (state) => ({
    uri: state.profile.avatarUri,
    isUploading: state.profile.isUploadingAvatar,
});

const mapDispatchToProps = (dispatch) => ({
    onUpload: (files) => dispatch(uploadUserAvatar(files[0]))
});

const AvatarWithOverlay = withOverlay(AvatarComponent, AvatarLoader);
const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(AvatarWithOverlay);

export { connectedComponent as Avatar };