import ProductForm from '@wns/features/ProductForm';

export default function Page() {
  return (
    <ProductForm
      initialValues={{
        name: 'КОЛЬЦО ОРБИТА',
        category: 'Кольца',
        description:
          'Минималистичное кольцо из титана с матовой отделкой. Уникальный дизайн, вдохновленный космическими орбитами, делает это кольцо идеальным аксессуаром для повседневной носки и особых случаев.',
        price: '12 900',
        stock: '15',
        isNew: true,
        isLimited: false,
        details: {
          sizes: ['16', '17', '18', '19', '20'],
          features: [
            'Материал: титан Grade 5',
            'Вес: 4.2 г',
            'Ширина: 6 мм',
            'Матовая отделка',
            'Возможность гравировки',
          ],
          careInstructions: [
            'Избегайте контакта с агрессивными химическими веществами',
            'Протирайте мягкой тканью',
            'Храните в отдельном футляре',
          ],
        },
        images: ['/mockImage/placeholderBanner.png', '/mockImage/placeholderBanner.png'],
      }}
      isEdit
    />
  );
}
