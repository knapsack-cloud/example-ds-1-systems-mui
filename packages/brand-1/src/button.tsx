import { Button as CoreButton, ButtonProps } from '@my-org/core';
import { ComponentProps } from 'react';

export const Button = ({
  children,
  additionalClasses = 'rounded',
  kittens,
  ...rest
}: ComponentProps<typeof CoreButton> & { kittens: boolean }) => {
  return (
    <CoreButton className={additionalClasses} {...rest}>
      {children}
    </CoreButton>
  );
};
