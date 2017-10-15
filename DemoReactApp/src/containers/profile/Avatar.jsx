import { Avatar as AvatarComponent } from '../../components/profile/Avatar.jsx';
import { AvatarLoader } from '../../components/profile/AvatarLoader.jsx';
import { withOverlay } from '../../components/shared/withOverlay.jsx';

const Avatar = withOverlay(AvatarComponent, AvatarLoader);

export { Avatar };