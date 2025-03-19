import * as Flex from '@twilio/flex-ui';

import { FlexComponent } from '../../../types/feature-loader';
import UserInfo from '../custom-components/UserInfo';

export const componentName = FlexComponent.TaskCanvas;
export const componentHook = function addUserInfo(flex: typeof Flex) {
  flex.TaskCanvas.Content.add(<UserInfo key="user-info" />, {
    sortOrder: 0,
  });
};
