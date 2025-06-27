export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  image: string;
  stock: string;
  status: string;
}

export const mockAdminProducts: ProductType[] = [
  {
    id: '1',
    name: 'КОЛЬЦО ОРБИТА',
    description: 'Минималистичное кольцо из титана с матовой отделкой',
    price: 12900,
    category: 'Кольца',
    tags: ['НОВИНКА'],
    image: '/placeholder.png',
    status: 'New',
    stock: '15',
  },
  {
    id: '2',
    name: 'СЕРЬГИ ГЕОМЕТРИЯ',
    description: 'Легкие титановые серьги с геометрическим дизайном',
    price: 9800,
    category: 'Серьги',
    tags: [],
    image: '/placeholder.png',
    status: 'Regular',
    stock: '8',
  },
  {
    id: '3',
    name: 'БРАСЛЕТ ВОЛНА',
    description: 'Гибкий титановой браслет с волнообразным дизайном',
    price: 15600,
    category: 'Браслеты',
    tags: [],
    image: '/placeholder.png',
    status: 'Regular',
    stock: '12',
  },
  {
    id: '4',
    name: 'КУЛОН МИНИМАЛ',
    description: 'Титановый кулон с минималистичным дизайном',
    price: 8400,
    category: 'Кулоны',
    tags: [],
    image: '/placeholder.png',
    status: 'Regular',
    stock: '20',
  },
  {
    id: '5',
    name: 'КОЛЬЦО ЗАТМЕНИЕ',
    description: 'Титановое кольцо с черным матовым покрытием',
    price: 14200,
    category: 'Кольца',
    tags: ['ЛИМИТИРОВАННАЯ СЕРИЯ'],
    image: '/placeholder.png',
    status: 'Limited',
    stock: '5',
  },
];
