import { Metadata } from 'next/types';
import React from 'react';

import ContactPage from '@wns/features/ContactPage';

export const metadata: Metadata = {
  title: 'Контакты',
};
const page = () => {
  return <ContactPage />;
};

export default page;
