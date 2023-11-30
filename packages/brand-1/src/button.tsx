import { Button as CoreButton } from '@my-org/core';
import React from 'react';

type CoreButtonProps = React.ComponentProps<typeof CoreButton>;

export const Button = (props: {
  children: React.ReactNode;
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}) => {
  return <CoreButton {...props} />;
};
