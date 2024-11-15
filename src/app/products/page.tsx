import ProductListsSection from '@/containers/products-page/product-lists-section';

function ProductsPage() {
  return (
    <div className="flex flex-col items-center responsive-container pt-14 md:pt-[76px]">
      <ProductListsSection />
    </div>
  );
}

export default ProductsPage;
