const ProductCard = ({ product, onAdd }) => (
  <div className="w-[80vw] h-[85vw] lg:w-[25vw] lg:h-[30vw] xl:w-[19vw] 2xl:h-[22vw] bg-white rounded-b-2xl hover:drop-shadow-2xl duration-300">
    <img
      src={product.img}
      alt={product.name}
      className="w-full h-[50vw] lg:h-[14vw] object-cover object-center bg-center"
    />
    <div className="px-2">
      <h4 className="font-semibold lg:text-[1.8vw] xl:text-xl my-2 xl:my-4">
        {product.name}
      </h4>
      <h4>{product.rating}</h4>
      <div className="flex items-center justify-between">
        <h4 className="text-[#787878] lg:text-[1.8vw] xl:text-[20px] font-medium">
          MRP:
          <small className="text-[#17C354] mr-1 lg:text-[1.4] xl:text-[17px]">
            Rs
          </small>
          <span className="text-black lg:text-[2.5vw] xl:text-3xl font-semibold">
            {product.rs}
          </span>
        </h4>
        <button
          onClick={onAdd}
          className="bg-[#F4F4F4] font-medium rounded-full px-5 py-3 lg:text-[1.2vw] xl:text-[.8vw] hover:bg-[#FF9812] duration-300"
        >
          Add to Compare
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
