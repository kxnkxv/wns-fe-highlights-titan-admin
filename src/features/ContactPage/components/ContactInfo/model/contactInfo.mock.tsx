import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

import { ContactInfoType, ContactTimeType } from './ContactInfoTypes';

export const ContactInfoMock: ContactInfoType[] = [
  {
    icon: <HiOutlineLocationMarker size={25} />,
    title: 'АДРЕС',
    details: ['Москва, ул. Тверская, 15', 'Шоу-рум: 10:00 - 20:00 (Пн-Вс)'],
  },
  {
    icon: <HiOutlinePhone size={25} />,
    title: 'ТЕЛЕФОН',
    details: ['+7 (495) 123-45-67', 'Ежедневно: 9:00 - 21:00'],
  },
  {
    icon: <HiOutlineMail size={25} />,
    title: 'EMAIL',
    details: ['info@titan-jewelry.ru', 'Ответ в течение 24 часов'],
  },
];

export const ContactTimeTypeMock: ContactTimeType[] = [
  {
    title: 'Понедельник - Пятница',
    description: '10:00 - 20:00',
  },
  {
    title: 'Суббота',
    description: '11:00 - 19:00',
  },
  {
    title: 'Воскресенье',
    description: '11:00 - 18:00',
  },
  {
    title: 'Онлайн-заказы',
    description: '24/7',
  },
];
