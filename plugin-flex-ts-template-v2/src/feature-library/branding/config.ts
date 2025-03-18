import { getFeatureFlags } from '../../utils/configuration';
import BrandingConfig from './types/ServiceConfiguration';

const {
  enabled = true,
  custom_logo_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhOh1TyvAxfXLd9gqChWcVSFYm5ko_7p8n-w&s',
  use_custom_colors = true,
  custom_colors = {
    main_header_background: '#000000',
    side_nav_background: '',
    side_nav_border: '',
    side_nav_icon: '',
    side_nav_selected_icon: '',
    side_nav_hover_background: '',
  },
  component_theme_overrides = {},
} = (getFeatureFlags()?.features?.branding as BrandingConfig) || {};

export const isFeatureEnabled = () => {
  return enabled;
};

export const isCustomColorsEnabled = () => {
  return use_custom_colors;
};

export const getCustomLogoUrl = () => {
  return custom_logo_url;
};

export const getCustomColors = () => {
  return custom_colors;
};

export const getComponentThemeOverrides = () => {
  return component_theme_overrides;
};
