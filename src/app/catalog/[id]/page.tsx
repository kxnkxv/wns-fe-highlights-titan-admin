'use client';

import ProductPage from '@wns/features/ProductPage';
import WrapperContainer from '@wns/shared/ui/WrapperContainer';

export default function Page() {
  return (
    <WrapperContainer backGroundWrapper="palette.background.default">
      <ProductPage />
    </WrapperContainer>
  );
}
