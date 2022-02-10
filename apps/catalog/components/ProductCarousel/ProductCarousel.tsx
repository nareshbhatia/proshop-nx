import Image from 'next/image';
import productImage from '../../public/images/product.jpg';

export function ProductCarousel() {
  return <Image src={productImage} alt="product" />;
}
