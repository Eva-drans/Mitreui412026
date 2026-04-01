import svgPaths from "./svg-t8ju5qz273";

function Fill() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 26.6667">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.p1bdcd800} fill="var(--fill-0, #1B1B1B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Icons">
      <Fill />
    </div>
  );
}

function UswdsComponents() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="USWDS Components">
      <Icons />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px not-italic relative text-[#1b1b1b]" data-name="text">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] relative shrink-0 text-[22px] w-full">How it works</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[16px] w-full">Select one or more network types below. Each selection creates a tab where you can provide TTPs specific to that network category. Choose your preferred view mode within each tab.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="content">
      <div className="content-stretch flex gap-[14px] items-start pl-[14px] pr-[16px] py-[16px] relative w-full">
        <div className="relative shrink-0 size-[32px]" data-name="icon-container">
          <div className="absolute inset-0 overflow-clip" data-name="_usa-icon">
            <UswdsComponents />
          </div>
        </div>
        <Text />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Field Label">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] w-full">{`Document the tactics, techniques, and procedures (TTPs) observed. `}</p>
      </div>
      <div className="bg-[#e7f6f8] content-stretch flex items-start relative shrink-0 w-full" data-name="alert">
        <div className="relative self-stretch shrink-0 w-[8px]" data-name="rectangle">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 110">
            <path d="M8 0H0V110H8V0Z" fill="var(--fill-0, #00BDE3)" id="rectangle" />
          </svg>
        </div>
        <Content />
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#1b1b1b] text-[16px]">{`There are no TTPs to report at this time `}</p>
    </div>
  );
}

function Fill1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.p13868300} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Icons">
      <Fill1 />
    </div>
  );
}

function UswdsComponents1() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="USWDS Components">
      <Icons1 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#1b1b1b] text-[16px]">{`Enterprise/Traditional IT `}</p>
    </div>
  );
}

function LabelDescription() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label Description">
      <div className="content-stretch flex items-start pl-[28px] relative w-full">
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#757575] text-[16px]">Corporate networks, servers, workstations</p>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#1b1b1b] text-[16px] text-left">{`Operational Technology/Industrial Control Systems `}</p>
    </div>
  );
}

function LabelDescription1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label Description">
      <div className="content-stretch flex items-start pl-[28px] relative w-full">
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#757575] text-[16px] text-left">SCADA, ICS, manufacturing systems</p>
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
        </svg>
      </div>
      <p className="flex-[1_0_0] font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#1b1b1b] text-[16px] text-left">{`Mobile Devices `}</p>
    </div>
  );
}

function LabelDescription2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label Description">
      <div className="content-stretch flex items-start pl-[28px] relative w-full">
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#757575] text-[16px] text-left">Mobile devices, tablets, remote access</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="checkbox-tile">
        <div aria-hidden="true" className="absolute border-2 border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start pl-[8px] pr-[16px] py-[12px] relative w-full">
          <Checkbox1 />
          <LabelDescription />
        </div>
      </div>
      <button className="bg-white cursor-pointer relative rounded-[4px] shrink-0 w-full" data-name="checkbox-tile">
        <div aria-hidden="true" className="absolute border-2 border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start pl-[8px] pr-[16px] py-[12px] relative w-full">
          <Checkbox2 />
          <LabelDescription1 />
        </div>
      </button>
      <button className="bg-white cursor-pointer relative rounded-[4px] shrink-0 w-full" data-name="checkbox-tile">
        <div aria-hidden="true" className="absolute border-2 border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start pl-[8px] pr-[16px] py-[12px] relative w-full">
          <Checkbox3 />
          <LabelDescription2 />
        </div>
      </button>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col isolate items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="Field Label">
        <p className="font-['Source_Sans_Pro:Bold',sans-serif] relative shrink-0 text-[22px] text-black w-full z-[2]">Select the type of network and system where the TTPs were observed:</p>
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] relative shrink-0 text-[#757575] text-[16px] w-full z-[1]">Select all that apply</p>
      </div>
      <button className="content-stretch cursor-pointer flex gap-[4px] items-center relative shrink-0" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[16px] text-left underline whitespace-nowrap">Learn More</p>
        <div className="relative shrink-0 size-[16px]" data-name="icon-container">
          <div className="absolute inset-0 overflow-clip" data-name="_usa-icon">
            <UswdsComponents1 />
          </div>
        </div>
      </button>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#adadad] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative w-full">
        <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="checkbox-tile">
          <div aria-hidden="true" className="absolute border-2 border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="content-stretch flex flex-col gap-[8px] items-start pl-[8px] pr-[16px] py-[12px] relative w-full">
            <Checkbox />
          </div>
        </div>
        <Frame1 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[536px] size-[64px] top-[50px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Icon">
          <path d={svgPaths.paacb00} id="Vector" stroke="var(--stroke-0, #757575)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[27px] left-[34px] top-[130px] w-[1068px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[27px] left-[534.28px] not-italic text-[#565c65] text-[18px] text-center top-0 whitespace-nowrap">No Network Types Selected</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[34px] top-[165px] w-[1068px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[24px] left-[534.36px] not-italic text-[#757575] text-[16px] text-center top-0 whitespace-nowrap">Select at least one network type above to begin providing TTPs</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f9f9f9] h-[239px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <Icon />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

export default function ABTtPsQuestion() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative size-full" data-name="A/B TTPs question">
      <Frame4 />
      <Frame5 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1130 1">
            <line id="Line " stroke="var(--stroke-0, #DFE1E2)" x2="1130" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Container />
    </div>
  );
}