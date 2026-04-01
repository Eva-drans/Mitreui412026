function NetworkTtpInterface1() {
  return (
    <div className="absolute bg-[#1b1b1b] content-stretch flex items-center justify-center left-[364.41px] rounded-[33554400px] size-[20px] top-[15px]" data-name="NetworkTTPInterface">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">!</p>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white flex-[567_0_0] h-[53px] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-b-4 border-l border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[24px] left-[269.58px] not-italic text-[#0078ae] text-[16px] text-center top-[13px] whitespace-nowrap">Enterprise/Traditional IT</p>
        <NetworkTtpInterface1 />
      </div>
    </div>
  );
}

function NetworkTtpInterface2() {
  return (
    <div className="absolute bg-[#1b1b1b] content-stretch flex items-center justify-center left-[458px] rounded-[33554400px] size-[20px] top-[15px]" data-name="NetworkTTPInterface">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">!</p>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="flex-[567_0_0] h-[50px] min-h-px min-w-px relative" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[24px] left-[269px] not-italic text-[#565c65] text-[16px] text-center top-[13px] whitespace-nowrap">Operational Technology/Industrial Control Systems</p>
        <NetworkTtpInterface2 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex h-[52px] items-center relative rounded-[14px] shrink-0 w-full" data-name="Primitive.div">
      <PrimitiveButton />
      <PrimitiveButton1 />
    </div>
  );
}

export default function NetworkTtpInterface() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-px relative size-full" data-name="NetworkTTPInterface">
      <div aria-hidden="true" className="absolute border-[#757575] border-b border-solid inset-0 pointer-events-none" />
      <PrimitiveDiv />
    </div>
  );
}