import React, { PropsWithChildren } from 'react';

interface CardProps {
  image: string;
}

export const Card = ({ image, children }: PropsWithChildren<CardProps>) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border">
      <img src={image} alt="Card Image" className="w-full rounded-lg mb-4" />
      <div className="card-content flex flex-col items-start space-y-2">
        {children}
      </div>
    </div>
  );
};
