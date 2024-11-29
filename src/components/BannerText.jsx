

const BannerText = () => {
  return (
    <div className="relative -top-16 border-2 border-[#9538e277] p-[5px] rounded-[30px]">
      <div className="flex flex-col items-center gap-8 bg-[#9538E2] pt-24 pb-52 px-20  text-center rounded-[30px] border-transparent">
        <h1 className="w-2/3 text-5xl font-bold text-white">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="w-1/2 text-base font-normal text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="bg-white px-4 py-2 rounded-full font-semibold text-[#9538E2]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default BannerText;
