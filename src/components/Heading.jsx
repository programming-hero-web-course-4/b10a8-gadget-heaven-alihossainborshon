
const Heading = ({title, subtitle}) => {
  return (
    <div className='flex flex-col w-full justify-center items-center py-5'>
      <h1 className='text-xl md:text-2xl lg:text-4xl font-bold mb-4'>
        {title}
      </h1>
      <p className='text-xs md:text-base font-medium text-gray-600 text-center '>
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;