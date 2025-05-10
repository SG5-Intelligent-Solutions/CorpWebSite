import React from 'react'
import { Badge } from '../../../../components/ui/badge'
import { Button } from '../../../../components/ui/button'
import { Card, CardContent, CardFooter } from '../../../../components/ui/card'
import { Separator } from '../../../../components/ui/separator'
import { ArrowUpRight } from 'lucide-react'

export const DivWrapperByAnima = () => {
  // Feature tags data
  const features = [
    { id: 1, name: 'Fleet Optimization' },
    { id: 2, name: 'Route Efficiency' },
    { id: 3, name: 'Smart Charging' },
    { id: 4, name: 'Predictive Maintenance' },
    { id: 5, name: 'Logistics AI' },
  ]

  return (
    <Card className="w-[900px] max-h-[40rem]  bg-[#15182005] rounded-[10px] border-[5px] border-solid border-[#a1c0ff] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
      <CardContent className="p-6">
        <div className="flex items-start gap-6">
          <div className="w-[60px] h-[60px] bg-[#141414] rounded-[10px] overflow-hidden relative">
            <div className="w-9 h-9 absolute top-3 left-3">
              <div className="relative w-[26px] h-[26px] top-[5px] left-[5px] bg-[url(/flszp4idrtc4roqdkjx2vqfrurg-svg.svg)] bg-[100%_100%]" />
            </div>
            <div className="w-[60px] h-[60px] rounded-[10px] border border-solid border-[#191919] absolute top-0 left-0" />
          </div>

          <h2 className="w-[321px] h-[54px] [font-family:'Poppins',Helvetica] font-bold text-[#a1c0ff] text-[22px] tracking-[0] leading-[26.4px]">
            EV Fleet Management Platform:
          </h2>
        </div>

        <p className="mt-[37px] [font-family:'Poppins',Helvetica] font-medium text-[#cbcbcb] text-lg tracking-[0] leading-[27px]">
          AI-driven platform for fleet optimization, predictive maintenance,
          route efficiency, and smart charging solutions, ideal for logistics
          and transportation sectors.
        </p>

        <Separator className="my-[40px] bg-[#ffffff14]" />

        <div className="flex flex-wrap gap-x-[32px] gap-y-[10px]">
          {features.slice(0, 2).map((feature) => (
            <Badge
              key={feature.id}
              className="h-9 px-3.5 py-[5px] bg-[#9e9e9f1c] rounded-[100px] backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] border-none [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-6"
            >
              {feature.name}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-[31px] gap-y-[10px] mt-[10px]">
          {features.slice(2, 4).map((feature) => (
            <Badge
              key={feature.id}
              className="h-9 px-3.5 py-[5px] bg-[#9e9e9f1c] rounded-[100px] backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] border-none [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-6"
            >
              {feature.name}
            </Badge>
          ))}
        </div>

        <div className="mt-[10px]">
          <Badge className="h-9 px-3.5 py-[5px] bg-[#9e9e9f1c] rounded-[100px] backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] border-none [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
            {features[4].name}
          </Badge>
        </div>

        <Separator className="bg-[#ffffff14] my-2" />
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Button className="w-full h-12 bg-[#0f0f0f] rounded-[100px] border border-solid border-[#191919] hover:bg-[#1a1a1a]">
          <span className="[font-family:'Poppins',Helvetica] font-medium text-[#a1c0ff] text-lg tracking-[0] leading-[27px] whitespace-nowrap">
            Book a Call
          </span>
          <div className="w-8 h-8 ml-2 bg-neutral-950 rounded-[50px] overflow-hidden border border-solid border-[#191919] flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </Button>
      </CardFooter>
    </Card>
  )
}
