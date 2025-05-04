import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Badge } from '../../../../components/ui/badge'
import { Button } from '../../../../components/ui/button'
import { Card, CardContent, CardFooter } from '../../../../components/ui/card'
import { Separator } from '../../../../components/ui/separator'

export const DivByAnima = () => {
  // Tags data for mapping
  const tags = [
    { text: 'GreenTech', className: 'w-[117px]' },
    { text: 'Energy Optimization', className: 'w-[191px]' },
    { text: 'Solar Park Management', className: 'w-[223px]' },
    { text: 'Dynamic Pricing', className: 'w-[158px]' },
    { text: 'AI & Blockchain', className: 'w-[176px]' },
  ]

  return (
    <Card className="w-full max-h-[40rem] max-w-[502px] h-auto py-6 px-6 bg-[#15182005] rounded-[10px] border-[5px] border-solid border-[#a1c0ff] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
      <CardContent className="p-0 flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="w-[60px] h-[60px] bg-[#141414] rounded-[10px] overflow-hidden border border-solid border-[#191919] flex items-center justify-center">
            <div className="w-[26px] h-[26px] bg-[url(/flszp4idrtc4roqdkjx2vqfrurg-svg.svg)] bg-[100%_100%]" />
          </div>

          <h3 className="font-['Poppins',Helvetica] font-bold text-[#a1c0ff] text-[22px] leading-[26.4px]">
            Smart Energy Management System:
          </h3>
        </div>

        <p className="font-['Poppins',Helvetica] font-medium text-[#cbcbcb] text-lg leading-[27px]">
          Utilize AI and blockchain to optimize solar park efficiency, manage
          dynamic energy pricing, and enhance asset management.
        </p>

        <Separator className="bg-[#ffffff14]" />

        <div className="flex flex-wrap gap-3">
          {tags.slice(0, 2).map((tag, index) => (
            <Badge
              key={index}
              className={`${tag.className} h-9 bg-[#9e9e9f1c] rounded-[100px] backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] font-['Poppins',Helvetica] font-medium text-white text-base px-3.5 py-[5px] flex items-center border-none`}
            >
              {tag.text}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.slice(2, 4).map((tag, index) => (
            <Badge
              key={index}
              className={`${tag.className} h-9 bg-[#9e9e9f1c] rounded-[100px] backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] font-['Poppins',Helvetica] font-medium text-white text-base px-3.5 py-[5px] flex items-center border-none`}
            >
              {tag.text}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge
            className={`${tags[4].className} h-9 bg-[#9e9e9f1c] rounded-[100px] backdrop-blur-[44.65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(44.65px)_brightness(100%)] font-['Poppins',Helvetica] font-medium text-white text-base px-3.5 py-[5px] flex items-center border-none`}
          >
            {tags[4].text}
          </Badge>
        </div>

        <Separator className="bg-[#ffffff14] my-6" />
      </CardContent>

      <CardFooter>
        <Button className="w-full h-12 bg-[#0f0f0f] rounded-[100px] border border-solid border-[#191919] [font-family:'Poppins',Helvetica] font-medium text-lg text-[#a1c0ff]">
          <span className="mx-auto flex items-center gap-2">
            Book a Call
            <div className="w-8 h-8 bg-neutral-950 rounded-[50px] border border-solid border-[#191919] flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}
