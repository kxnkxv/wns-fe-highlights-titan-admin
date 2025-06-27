import { JSX } from 'react';

export type ContactInfoType = {
  title: string;
  icon: JSX.Element;
  details: Array<string>;
};

export type ContactTimeType = {
  title: string;
  description: string;
};
