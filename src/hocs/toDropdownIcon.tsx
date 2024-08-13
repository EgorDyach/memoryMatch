import { FC } from 'react';
import { IconWrapperProps } from '@hocs/withIcon';
import { content } from '@lib/theme';

export const toDropdownIcon = (Icon: FC<IconWrapperProps>) => (
  <Icon size={20} color={content.secondary} />
);
