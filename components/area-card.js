const AreaCard = () => {
  return (
    <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-gray-white font-body-regular-500 md:flex-[unset] md:self-stretch">
      <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
        <div className="relative leading-[32px] font-semibold">Centerville</div>
        <div className="relative text-base leading-[24px] text-center">
          25 listings
        </div>
      </div>
    </div>
  );
};

export default AreaCard;
