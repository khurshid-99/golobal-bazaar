const CompareSlot = ({ product, label, openPicker }) => (
  <div className="flex flex-col items-center h-[110vw] lg:h-[30vw] 2xl:h-[30vw]">
    {product && (
      <>
        <div className="w-[40vw] h-[85vw] lg:w-[25vw] xl:w-[19vw] hover:drop-shadow-2xl duration-300 bg-[#ffffff] rounded-b-2xl ">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-[30vw] lg:h-[14vw] object-cover object-center bg-center "
          />
          <div className="px-2">
            <h4 className="font-semibold lg:text-[1.8vw] xl:text-xl my-2 xl:my-4 ">
              {product.name}
            </h4>
            <h4>{product.rating}</h4>
            <div className="flex flex-col lg:flex-row items-start gap-y-5 justify-between mt-2 mb-3 ">
              <h4 className="text-[#787878] lg:text-[1.8vw] xl:text-[20px] font-medium ">
                MRP:{" "}
                <small className="text-[#17C354] mr-1 lg:text-[1.4] xl:text-[17px] ">
                  Rs
                </small>
                <span
                  className="text-black lg:text-[2.5vw] xl:text-3xl font-semibold
               "
                >
                  {product.rs}
                </span>
              </h4>
              <button className="bg-[#F4F4F4] font-medium rounded-full text-nowrap px-5 py-3 block lg:text-[1.2vw] xl:text-[.8vw] hover:bg-[#FF9812] duration-300 ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </>
    )}
    <div className="flex items-center justify-center w-[40vw] h-[85vw] lg:w-[25vw] lg:h-[30vw] xl:w-[19vw] 2xl:h-[30vw]">
      <button
        onClick={openPicker}
        className="Button relative px-10 py-2 border-2 border-dashed border-[gray] rounded-full mt-2 mb-5 cursor-pointer z-[100] "
      >
        Add {label}
      </button>
    </div>
  </div>
);

export default CompareSlot;
