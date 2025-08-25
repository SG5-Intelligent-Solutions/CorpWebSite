import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "../../../../../components/ui/card";
import { Separator } from "../../../../../components/ui/separator";
import { Button } from "../../../../../components/ui/button";
import { Badge } from "../../../../../components/ui/badge";

 const IndustrySolutionCard = ({ title, description, tags, iconSrc }) => {
  return (
    <Card className="w-full h-full bg-gray-50/5 rounded-lg border-4 border-solid border-blue-300 backdrop-blur relative flex flex-col">
      <CardContent className="p-6 flex flex-col gap-6 h-full pb-24">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-neutral-900 rounded-lg overflow-hidden border border-solid border-neutral-800 flex items-center justify-center">
            {iconSrc ? (
              <div className="w-8 h-6 bg-cover bg-center" style={{ backgroundImage: `url(${iconSrc})` }} />
            ) : (
              <div className="w-6 h-6 bg-gray-500" />
            )}
          </div>

          <h2 className="font-sans font-bold text-blue-300 text-xl mt-1">
            {title}
          </h2>
        </div>

        <p className="font-sans font-medium text-gray-300 text-lg">
          {description}
        </p>

        <Separator className="bg-white/10 my-2" />

        <div className="flex flex-col gap-3">
          {tags.map((tagGroup, groupIndex) => (
            <div key={groupIndex} className="flex flex-wrap gap-3">
              {tagGroup.map((tag, index) => (
                <Badge
                  key={index}
                  className={`${tag.className} h-9 w-fit bg-gray-500/10 rounded-full backdrop-blur font-poppins font-medium text-white text-base px-3.5 py-1.5 flex items-center justify-start border-none`}
                >
                  {tag.text}
                </Badge>
              ))}
            </div>
          ))}
        </div>

        <Separator className="bg-white/10 my-2" />
      </CardContent>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <Button className="w-full h-12 bg-neutral-900 rounded-full border border-solid border-neutral-800 font-sans font-medium text-blue-300 text-lg flex items-center justify-center gap-2">
          Book a Call
          <div className="w-8 h-8 bg-neutral-950 rounded-full border border-solid border-neutral-800 flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </Button>
      </div>
    </Card>
  );
};

export default IndustrySolutionCard