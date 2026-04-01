import svgPaths from "./svg-wfzmv8h4a9";

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

function BArrow1() {
  return (
    <div className="bg-[#757575] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0" data-name="B-Arrow">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[18px]">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function BArrow() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-br-[5px] rounded-tl-[5px] shrink-0" data-name="B-Arrow">
      <div className="opacity-30 relative shrink-0 size-[12px]" data-name="icon-container">
        <div className="absolute inset-0 overflow-clip" data-name="_usa-icon">
          <UswdsComponents />
        </div>
      </div>
      <BArrow1 />
    </div>
  );
}

export default function BLink() {
  return (
    <button className="content-stretch cursor-pointer flex items-center justify-center px-[2px] py-px relative rounded-[10px] size-full" data-name="B- Link">
      <BArrow />
    </button>
  );
}