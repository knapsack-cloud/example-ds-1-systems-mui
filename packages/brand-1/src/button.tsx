import { Button as CoreButton, ButtonProps } from '@my-org/core';
import { ComponentProps } from 'react';

export const Button = ({
  children,
  ...rest
}: ComponentProps<typeof CoreButton>) => {
  return <CoreButton {...rest}>{children}</CoreButton>;
};
