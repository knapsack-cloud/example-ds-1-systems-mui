import { Button as CoreButton } from '@my-org/core';
import React from 'react';

type CoreButtonProps = React.ComponentProps<typeof CoreButton>;

export const Button = (props: CoreButtonProps) => {
  return <CoreButton {...props} />;
};
