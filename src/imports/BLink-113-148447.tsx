import svgPaths from "./svg-b915i3s8pc";

function BArrow() {
  return (
    <div className="bg-[#757575] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0" data-name="B-Arrow">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[18px]">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Fill() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.p148d2280} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="Icons">
      <Fill />
    </div>
  );
}

function UswdsComponents() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="USWDS Components">
      <Icons />
    </div>
  );
}

function UsaIcon() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip" data-name="_usa-icon">
      <UswdsComponents />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="opacity-30 relative size-[12px]" data-name="icon-container">
      <UsaIcon />
    </div>
  );
}

export default function BLink() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[2px] py-px relative rounded-[10px] size-full" data-name="B- Link">
      <BArrow />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <IconContainer />
        </div>
      </div>
    </div>
  );
}