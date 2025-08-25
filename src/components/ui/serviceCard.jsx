import { Card, CardContent } from "./card";

const ServiceCard = ({ service }) => {
  return (
    <Card className="w-full rounded-[12px] border-[5px] border-solid border-[#a1c0ff] bg-transparent backdrop-blur-xl shadow-[0_8px_20px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300 hover:scale-[1.02]">
      <CardContent className="p-0">
        <img
          className="w-full h-[280px] lg:h-[300px] object-cover"
          alt={`${service.title} image`}
          src={service.image}
        />
        <div className="flex flex-col p-6 gap-4">
          <div className="relative w-[80px] h-[80px] bg-[#141414]/80 backdrop-blur-md rounded-lg border border-[#191919] flex items-center justify-center">
            <img
              className="w-[55px] h-[55px] object-contain"
              alt={service.iconAlt}
              src={service.icon}
            />
          </div>
          <h3 className="text-[26px] font-semibold text-[#a1c0ff] leading-snug">
            {service.title}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
