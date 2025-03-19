import { getFeatureFlags } from '../../utils/configuration';
import UserInfoConfig from './types/ServiceConfiguration';

const { enabled = false } = (getFeatureFlags()?.features?.user_info as UserInfoConfig) || {};

export const isFeatureEnabled = () => {
  return enabled;
};
