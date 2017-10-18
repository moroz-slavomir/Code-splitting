import { fetchUserAvatarFactory } from './fetchUserAvatar';
import { fetchReceiveFactory } from '../../utils/api/fetchReceive';
import { fetchUserDetailsFactory } from './fetchUserDetails';

const fetchReceive = fetchReceiveFactory(fetch);
export const fetchUserAvatar = fetchUserAvatarFactory(fetchReceive);
export const fetchUserDetails = fetchUserDetailsFactory({ fetchReceive, fetchUserAvatar });