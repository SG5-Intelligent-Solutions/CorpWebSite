import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";
import { cn } from "../../lib/utils";

// Accordion component
const Accordion = AccordionPrimitive.Root;

// AccordionItem component
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

// AccordionTrigger component
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left",
        className
      )}
      {...props}
    >
      {children}
      {/* SVG Arrow icon wrapped in a container */}
      <div className="flex items-center pr-4">  {/* Parent div for padding */}
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="72"
  height="80"
  viewBox="0 0 52 50"
  fill="none"
  className="h-10 w-10 transition-transform duration-200 transform [&[data-state=open]>svg]:rotate-180"
>
  <g opacity="0.5">
    <path
      d="M25.75 10.417L25.75 39.5837"
      stroke="#BBBBBB"
      strokeWidth="4.16667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40.6309 25L25.7559 39.5833L10.8809 25"
      stroke="#BBBBBB"
      strokeWidth="4.16667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
</svg>

      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// AccordionContent component
const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-0 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
