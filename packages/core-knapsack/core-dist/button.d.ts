import React from 'react';
interface ButtonProps {
    children: React.ReactNode;
    type?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
}
export declare const Button: React.FC<ButtonProps>;
export {};
