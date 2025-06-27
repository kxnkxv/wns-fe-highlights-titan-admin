import { IMaterialsGraph, IMaterialsProperty } from './type';

export const materialsPropertyData: IMaterialsProperty = {
  columns: ['Титан', 'Золото', 'Серебро', 'Сталь'],
  rows: [
    { characteristic: 'Плотность (г/см³)', values: [4.5, 19.3, 10.5, 8.0] },
    { characteristic: 'Прочность на разрыв (МПа)', values: [900, 120, 170, 500] },
    { characteristic: 'Твердость (по Виккерсу)', values: [350, 25, 25, 200] },
    { characteristic: 'Устойчивость к коррозии', values: ['Отличная', 'Отличная', 'Средняя', 'Низкая'] },
    { characteristic: 'Гипоаллергенность', values: ['Высокая', 'Средняя', 'Низкая', 'Низкая'] },
    { characteristic: 'Относительная стоимость', values: ['Средняя', 'Очень высокая', 'Низкая', 'Очень низкая'] },
  ],
};

export const materialsGraphData: IMaterialsGraph[] = [
  {
    type: 'Титан',
    score: 92,
  },
  {
    type: 'Золото',
    score: 78,
  },
  {
    type: 'Серебро',
    score: 65,
  },
  {
    type: 'Сталь',
    score: 50,
  },
];
