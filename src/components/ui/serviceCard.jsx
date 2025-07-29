import React from "react";
import { Card, CardContent } from "./card";

const ServiceCard = ({ service }) => {
  return (
    <Card className="w-full rounded-[10px] border-[5px] border-solid border-[#a1c0ff] bg-transparent overflow-hidden">
      <CardContent className="p-0">
        <img
          className="w-full h-[597px] object-cover"
          alt={`${service.title} image`}
          src={service.image}
        />
        <div className="flex flex-col p-10 gap-[9px]">
          <div className="relative w-[90px] h-[90px] bg-[#141414] rounded-[10px] overflow-hidden">
            <div className="relative h-[90px] rounded-[10px] border border-solid border-[#191919]">
              <img
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[66px] h-[66px]"
                alt={service.iconAlt}
                src={service.icon}
              />
            </div>
          </div>
          <h3 className="text-[40px] [font-family:'Poppins',Helvetica] font-medium text-[#a1c0ff] tracking-[0] leading-[46px]">
            {service.title}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
