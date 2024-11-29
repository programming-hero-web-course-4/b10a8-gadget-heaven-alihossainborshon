import pic from "../assets/banner.jpg"

const BannerImg = () => {
  return (
    <div className="relative -top-[250px] flex justify-center items-center">
      <img className="w-3/5 object-cover rounded-3xl border-2 border-white p-[8px] bg-[#fffcfc71]" src={pic}  alt="" />
    </div>
  );
};

export default BannerImg;