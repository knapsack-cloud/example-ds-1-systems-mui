import { Button as CoreButton, ButtonProps } from '@my-org/core';
import { ComponentProps } from 'react';

export const Button = ({
  children,
  // additionalClasses,
  additionalClasses = 'rounded',
  ...rest
}: ComponentProps<typeof CoreButton>) => {
  return (
    <CoreButton className={additionalClasses} {...rest}>
      {children}
    </CoreButton>
  );
};
