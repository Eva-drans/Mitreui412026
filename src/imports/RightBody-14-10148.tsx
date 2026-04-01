import svgPaths from "./svg-1hfwjebh36";

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#003e67] text-[32px] whitespace-nowrap">
        <p className="leading-[normal]">Tactics, Techniques and Procedures (TTPs)</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="header">
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="page header">
        <Frame1 />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-2.89px_-0.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1537.77 5.7735">
              <path d={svgPaths.p3b04c000} fill="var(--stroke-0, #7AA5C1)" id="Line 14" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] font-['Source_Sans_Pro:SemiBold',sans-serif] h-[20px] leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] w-full whitespace-pre-wrap">
        <span className="leading-[normal]">{`Answer all questions to the best of your knowledge at the time of submission.  Required fields are marked with an asterisk (`}</span>
        <span className="leading-[normal] text-[#c41131]">*</span>
        <span className="leading-[normal]">)</span>
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[24px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p343dcc80} fill="var(--fill-0, #00BDE3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b1b] text-[16px] top-0 whitespace-nowrap">How it works</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1b1b] text-[14px] top-0 whitespace-nowrap">Select one or more network types below. Each selection creates a tab where you can provide TTPs specific to that network category. Choose your preferred view mode within each tab.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[49px] items-start left-[36px] top-0 w-[1059.469px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#e7f6f8] content-stretch flex flex-col h-[73px] items-start pl-[20px] pr-[16px] pt-[12px] relative shrink-0 w-[1136px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#00bde3] border-l-4 border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container />
    </div>
  );
}

function CustomCheckbox() {
  return (
    <div className="bg-white flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[4px]" data-name="CustomCheckbox">
      <div aria-hidden="true" className="absolute border-2 border-[#565c65] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <CustomCheckbox />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[27px] relative shrink-0 w-[108.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b1b] text-[16px] top-0 whitespace-nowrap">There are no TTPs to report at this time</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[27px] items-center relative shrink-0 w-full" data-name="Container">
      <Text />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#757575] text-[14px] top-0 whitespace-nowrap">Mobile devices, tablets, remote access</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1018_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container7 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[88px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1135px]">
      <Frame6 />
      <Container3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[33px] left-0 not-italic text-[#1b1b1b] text-[22px] top-0 whitespace-nowrap">Select the type(s) of networks and systems where the TTPs were observed:</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#757575] text-[16px] top-0 whitespace-nowrap">Select all that apply</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[65px] relative shrink-0 w-[340.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#d4f4dd] h-[31px] relative rounded-[4px] shrink-0 w-[84.594px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#4d8055] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-[13px] not-italic text-[#1b1b1b] text-[14px] top-[5px] whitespace-nowrap">2 selected</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[65px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Text1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6.5L4.5 8.5L9.5 3.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CustomCheckbox1() {
  return (
    <div className="bg-[#0078ae] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[4px]" data-name="CustomCheckbox">
      <div aria-hidden="true" className="absolute border-2 border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-[2px] relative size-full">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <CustomCheckbox1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[27px] relative shrink-0 w-[195.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#1b1b1b] text-[18px] top-0 whitespace-nowrap">Enterprise/Traditional IT</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#e7f6f8] h-[24px] relative rounded-[4px] shrink-0 w-[69.047px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[18px] left-[9px] not-italic text-[#0078ae] text-[12px] top-[3px] whitespace-nowrap">Active Tab</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[12px] h-[27px] items-center relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#757575] text-[14px] top-0 whitespace-nowrap">Corporate networks, servers, workstations</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[924.969_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container16 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0078ae] h-[37px] relative rounded-[4px] shrink-0 w-[81.031px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[21px] left-[41px] not-italic text-[14px] text-center text-white top-[8px] whitespace-nowrap">Viewing</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
      <Button />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#e7f6f8] h-[88px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6.5L4.5 8.5L9.5 3.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CustomCheckbox2() {
  return (
    <div className="bg-[#0078ae] flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[4px]" data-name="CustomCheckbox">
      <div aria-hidden="true" className="absolute border-2 border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-[2px] relative size-full">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <CustomCheckbox2 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[27px] relative shrink-0 w-[406.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#1b1b1b] text-[18px] top-0 whitespace-nowrap">Operational Technology/Industrial Control Systems</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[27px] items-center relative shrink-0 w-full" data-name="Container">
      <Text4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#757575] text-[14px] top-0 whitespace-nowrap">SCADA, ICS, manufacturing systems</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[898.984_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container21 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0078ae] h-[37px] relative rounded-[4px] shrink-0 w-[107.016px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[21px] left-[54px] not-italic text-[14px] text-center text-white top-[8px] whitespace-nowrap">View Details</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
      <Button1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#e7f6f8] h-[88px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function CustomCheckbox3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[4px]" data-name="CustomCheckbox">
      <div aria-hidden="true" className="absolute border-2 border-[#565c65] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[24px] relative shrink-0 w-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <CustomCheckbox3 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[27px] relative shrink-0 w-[108.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#1b1b1b] text-[18px] top-0 whitespace-nowrap">Mobile Access</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[27px] items-center relative shrink-0 w-full" data-name="Container">
      <Text5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#757575] text-[14px] top-0 whitespace-nowrap">Mobile devices, tablets, remote access</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[1018_0_0] h-[52px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container26 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white h-[88px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[18px] px-[18px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[296px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container17 />
      <Container22 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] h-[427px] items-start pb-px pt-[25px] px-[25px] relative rounded-[4px] shrink-0 w-[1136px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container9 />
      <Container11 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[33px] relative shrink-0 w-[345.516px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[33px] left-0 not-italic text-[#1b1b1b] text-[22px] top-0 whitespace-nowrap">Provide TTPs for Selected Networks</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[96.703px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#565c65] text-[14px] top-0 whitespace-nowrap">1 of 2 completed</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[33px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Text6 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#f0f0f0] h-[66px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[16px] px-[24px] relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

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

function PrimitiveDiv1() {
  return (
    <div className="content-stretch flex h-[52px] items-center relative rounded-[14px] shrink-0 w-full" data-name="Primitive.div">
      <PrimitiveButton />
      <PrimitiveButton1 />
    </div>
  );
}

function NetworkTtpInterface() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[53px] items-start left-0 pb-px top-0 w-[1134px]" data-name="NetworkTTPInterface">
      <div aria-hidden="true" className="absolute border-[#757575] border-b border-solid inset-0 pointer-events-none" />
      <PrimitiveDiv1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[33px] relative shrink-0 w-[239.016px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[33px] left-0 not-italic text-[#1b1b1b] text-[22px] top-0 whitespace-nowrap">Enterprise/Traditional IT</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#0078ae] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] relative size-full">
          <Heading2 />
        </div>
      </div>
    </div>
  );
}

function CustomCheckbox4() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[20px] top-[2px]" data-name="CustomCheckbox" />;
}

function Text7() {
  return (
    <div className="absolute h-[24px] left-[32px] top-0 w-[259.953px]" data-name="Text">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b1b] text-[16px] top-0 whitespace-nowrap">There are no TTPs to report at this time</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <CustomCheckbox4 />
      <Text7 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white h-[58px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Label />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[24px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p343dcc80} fill="var(--fill-0, #8B6914)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b1b] text-[16px] top-0 whitespace-nowrap">Current View: Intermediate View</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1b1b] text-[14px] top-0 whitespace-nowrap">Filterable technique cards with search</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[49px] items-start left-[36px] top-0 w-[228.969px]" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Container">
      <Icon3 />
      <Container34 />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#fef3cd] h-[75px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e6c84e] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[13px] px-[17px] relative size-full">
        <Container33 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b1b] text-[16px] top-0 whitespace-nowrap">Selected Techniques (6):</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[19.94%_19.94%_20.06%_20%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.20725 7.2">
          <path clipRule="evenodd" d={svgPaths.p7ec0780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[157.83px] pt-[2px] px-[2px] rounded-[33554400px] size-[16px] top-[6.5px]" data-name="Button">
      <Icon4 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#0078ae] h-[29px] left-0 rounded-[4px] top-0 w-[185.828px]" data-name="Text">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[14px] text-white top-[4px] whitespace-nowrap">T1595 - Active Scanning</p>
      <Button2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[19.94%_19.94%_20.06%_20%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.20725 7.2">
          <path clipRule="evenodd" d={svgPaths.p7ec0780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[246.7px] pt-[2px] px-[2px] rounded-[33554400px] size-[16px] top-[6.5px]" data-name="Button">
      <Icon5 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#0078ae] h-[29px] left-[193.83px] rounded-[4px] top-0 w-[274.703px]" data-name="Text">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[14px] text-white top-[4px] whitespace-nowrap">T1592 - Gather Victim Host Information</p>
      <Button3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[19.94%_19.94%_20.06%_20%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.20725 7.2">
          <path clipRule="evenodd" d={svgPaths.p7ec0780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[265.17px] pt-[2px] px-[2px] rounded-[33554400px] size-[16px] top-[6.5px]" data-name="Button">
      <Icon6 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#0078ae] h-[29px] left-[476.53px] rounded-[4px] top-0 w-[293.172px]" data-name="Text">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-[12px] not-italic text-[14px] text-white top-[4px] whitespace-nowrap">T1589 - Gather Victim Identity Information</p>
      <Button4 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[19.94%_19.94%_20.06%_20%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.20725 7.2">
          <path clipRule="evenodd" d={svgPaths.p7ec0780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[75.44px] pt-[2px] px-[2px] rounded-[33554400px] size-[16px] top-[6.5px]" data-name="Button">
      <Icon7 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#005288] h-[29px] left-[777.7px] rounded-[4px] top-0 w-[103.438px]" data-name="Text">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[19.5px] left-[12px] not-italic text-[13px] text-white top-[4.75px] whitespace-nowrap">T1595.001</p>
      <Button5 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[19.94%_19.94%_20.06%_20%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.20725 7.2">
          <path clipRule="evenodd" d={svgPaths.p7ec0780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[75.44px] pt-[2px] px-[2px] rounded-[33554400px] size-[16px] top-[6.5px]" data-name="Button">
      <Icon8 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[#005288] h-[29px] left-[889.14px] rounded-[4px] top-0 w-[103.438px]" data-name="Text">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[19.5px] left-[12px] not-italic text-[13px] text-white top-[4.75px] whitespace-nowrap">T1595.002</p>
      <Button6 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[19.94%_19.94%_20.06%_20%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.20725 7.2">
          <path clipRule="evenodd" d={svgPaths.p7ec0780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[75.44px] pt-[2px] px-[2px] rounded-[33554400px] size-[16px] top-[5.75px]" data-name="Button">
      <Icon9 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[#005288] h-[27.5px] left-0 rounded-[4px] top-[37px] w-[103.438px]" data-name="Text">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[19.5px] left-[12px] not-italic text-[13px] text-white top-[4px] whitespace-nowrap">T1595.003</p>
      <Button7 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[64.5px] relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
      <Text10 />
      <Text11 />
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#e7f6f8] h-[134.5px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Paragraph9 />
        <Container36 />
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="absolute h-[27px] left-0 top-0 w-[154.375px]" data-name="Legend">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#1b1b1b] text-[18px] top-0 whitespace-nowrap">Change view mode:</p>
    </div>
  );
}

function PrimitiveButton2() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-2 border-[#565c65] border-solid left-0 rounded-[33554400px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[20px] top-[2px]" data-name="Primitive.button" />;
}

function PrimitiveLabel() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b1b] text-[16px] top-0 whitespace-nowrap">Matrix View</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#565c65] text-[14px] top-0 whitespace-nowrap">{`Full MITRE ATT&CK Enterprise Matrix layout`}</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[53px] items-start left-[32px] top-0 w-[261.328px]" data-name="Container">
      <PrimitiveLabel />
      <Paragraph10 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton2 />
      <Container40 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[89px] items-start left-0 pb-[2px] pt-[18px] px-[18px] rounded-[4px] top-0 w-[329.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container39 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[4px] size-[8px] top-[-4px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_14_9538)" id="Icon">
          <path d={svgPaths.p3e71aa30} fill="var(--fill-0, #030213)" id="Vector" stroke="var(--stroke-0, #0078AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
        </g>
        <defs>
          <clipPath id="clip0_14_9538">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Primitive.span">
      <Icon10 />
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-0 pb-[2px] pt-[10px] px-[2px] rounded-[33554400px] size-[20px] top-[2px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-2 border-[#565c65] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <PrimitiveSpan />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b1b] text-[16px] top-0 whitespace-nowrap">Intermediate View</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#565c65] text-[14px] top-0 whitespace-nowrap">Filterable technique cards with search</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[53px] items-start left-[32px] top-0 w-[261.328px]" data-name="Container">
      <PrimitiveLabel1 />
      <Paragraph11 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton3 />
      <Container43 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[89px] items-start left-[345.33px] pb-[2px] pt-[18px] px-[18px] rounded-[4px] top-0 w-[329.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_0px_0px_#0078ae]" />
      <Container42 />
    </div>
  );
}

function PrimitiveButton4() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-2 border-[#565c65] border-solid left-0 rounded-[33554400px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[20px] top-[2px]" data-name="Primitive.button" />;
}

function PrimitiveLabel2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b1b] text-[16px] top-0 whitespace-nowrap">Simple View</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#565c65] text-[14px] top-0 whitespace-nowrap">Basic dropdown selection for tactics</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[53px] items-start left-[32px] top-0 w-[261.344px]" data-name="Container">
      <PrimitiveLabel2 />
      <Paragraph12 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton4 />
      <Container46 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[89px] items-start left-[690.66px] pb-[2px] pt-[18px] px-[18px] rounded-[4px] top-0 w-[329.344px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container45 />
    </div>
  );
}

function NetworkTtpForm1() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="NetworkTTPForm">
      <Container38 />
      <Container41 />
      <Container44 />
    </div>
  );
}

function PrimitiveDiv2() {
  return (
    <div className="absolute gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[89px] left-0 top-[43px] w-[1020px]" data-name="Primitive.div">
      <NetworkTtpForm1 />
    </div>
  );
}

function FieldSet() {
  return (
    <div className="h-[132px] relative shrink-0 w-full" data-name="Field Set">
      <Legend />
      <PrimitiveDiv2 />
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#f0f0f0] h-[182px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">
        <FieldSet />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b1b] text-[16px] top-0 whitespace-nowrap">Search Technique Name or ID</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[42px] left-0 top-0 w-[527px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[12px] pr-[40px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Search Technique Name or ID</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[495px] size-[20px] top-[11px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p8685480} fill="var(--fill-0, #005288)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon11 />
    </div>
  );
}

function Container48() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label1 />
      <Container49 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b1b] text-[16px] top-0 whitespace-nowrap">Platform Filter</p>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-710px] size-0 top-[-1124.3px]" data-name="Option" />;
}

function Option1() {
  return <div className="absolute left-[-710px] size-0 top-[-1124.3px]" data-name="Option" />;
}

function Option2() {
  return <div className="absolute left-[-710px] size-0 top-[-1124.3px]" data-name="Option" />;
}

function Option3() {
  return <div className="absolute left-[-710px] size-0 top-[-1124.3px]" data-name="Option" />;
}

function Option4() {
  return <div className="absolute left-[-710px] size-0 top-[-1124.3px]" data-name="Option" />;
}

function Option5() {
  return <div className="absolute left-[-710px] size-0 top-[-1124.3px]" data-name="Option" />;
}

function Option6() {
  return <div className="absolute left-[-710px] size-0 top-[-1124.3px]" data-name="Option" />;
}

function Option7() {
  return <div className="absolute left-[-710px] size-0 top-[-1124.3px]" data-name="Option" />;
}

function Option8() {
  return <div className="absolute left-[-710px] size-0 top-[-1124.3px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none" />
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
      <Option5 />
      <Option6 />
      <Option7 />
      <Option8 />
    </div>
  );
}

function Container50() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label2 />
      <Dropdown />
    </div>
  );
}

function Container47() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[74px] relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container50 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex h-[35px] items-center justify-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] whitespace-nowrap">Tactics Filter:</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#0078ae] content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="button">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">All Tactics</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[normal] not-italic relative shrink-0 text-[#757575] text-center whitespace-nowrap">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] relative shrink-0 text-[15px]">Reconnaissance</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] relative shrink-0 text-[12px]">11 Techniques</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame8 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Resource Development</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame9 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">{`Initial Access `}</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame10 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Execution</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame11 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Persistence</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame12 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">{`Privileged Escalation `}</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame13 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Defense Evasion</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame14 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">{`Credential Access `}</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame15 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Discovery</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame16 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Lateral Movement</p>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame17 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Collection</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame18 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Command and Control</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame19 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Exfiltration</p>
    </div>
  );
}

function Button21() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame20 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Impact</p>
    </div>
  );
}

function Button22() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame21 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#1b1b1b] text-[14px] top-0 whitespace-nowrap">{`Platform: All tactics | Tactic: All `}</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#f0f0f0] h-[47px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[13px] px-[17px] relative size-full">
        <Paragraph13 />
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-[#1b1b1b] h-[37px] relative rounded-[4px] shrink-0 w-[39.406px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[21px] left-[20px] not-italic text-[14px] text-center text-white top-[8px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-white h-[39px] relative rounded-[4px] shrink-0 w-[40.969px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-[20.5px] not-italic text-[#1b1b1b] text-[14px] text-center top-[9px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="bg-white h-[39px] relative rounded-[4px] shrink-0 w-[40.969px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-[20.5px] not-italic text-[#1b1b1b] text-[14px] text-center top-[9px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-white h-[39px] relative rounded-[4px] shrink-0 w-[72.016px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-[36.5px] not-italic text-[#0078ae] text-[14px] text-center top-[9px] whitespace-nowrap">Next →</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[55px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[426.313px] pr-[426.328px] relative size-full">
          <Button23 />
          <Button24 />
          <Button25 />
          <Button26 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p1fbf8e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function CustomCheckbox5() {
  return (
    <div className="absolute bg-[#0078ae] content-stretch flex items-center justify-center left-0 px-[3px] py-[2px] rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox">
      <div aria-hidden="true" className="absolute border-2 border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon12 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1595</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-[#005288] h-[19px] relative rounded-[4px] shrink-0 w-[96.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] py-[2px] relative size-full">
        <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">3 sub-tech selected</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex h-[19.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph14 />
      <Text14 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Active Scanning</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[206.5px]" data-name="Container">
      <Container57 />
      <Paragraph15 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox5 />
      <Container56 />
    </div>
  );
}

function Button27() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (3)</p>
        <Icon13 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button27 />
      <Button28 />
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container55 />
        <Container58 />
      </div>
    </div>
  );
}

function TechniqueCard() {
  return (
    <div className="absolute bg-[#e7f6f8] content-stretch flex flex-col h-[101.891px] items-start left-0 p-[2px] rounded-[4px] top-0 w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border-2 border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container54 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p1fbf8e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function CustomCheckbox6() {
  return (
    <div className="absolute bg-[#0078ae] content-stretch flex items-center justify-center left-0 px-[3px] py-[2px] rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox">
      <div aria-hidden="true" className="absolute border-2 border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon14 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1592</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[171.813px] relative size-full">
          <Paragraph16 />
        </div>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Gather Victim Host Information</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[206.5px]" data-name="Container">
      <Container62 />
      <Paragraph17 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox6 />
      <Container61 />
    </div>
  );
}

function Button29() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button30() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (4)</p>
        <Icon15 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button29 />
      <Button30 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container60 />
        <Container63 />
      </div>
    </div>
  );
}

function TechniqueCard1() {
  return (
    <div className="absolute bg-[#e7f6f8] content-stretch flex flex-col h-[101.891px] items-start left-[270.5px] p-[2px] rounded-[4px] top-0 w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border-2 border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container59 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p1fbf8e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function CustomCheckbox7() {
  return (
    <div className="absolute bg-[#0078ae] content-stretch flex items-center justify-center left-0 px-[3px] py-[2px] rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox">
      <div aria-hidden="true" className="absolute border-2 border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Icon16 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1589</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[171.813px] relative size-full">
          <Paragraph18 />
        </div>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Gather Victim Identity Information</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[206.5px]" data-name="Container">
      <Container67 />
      <Paragraph19 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox7 />
      <Container66 />
    </div>
  );
}

function Button31() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button32() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (3)</p>
        <Icon17 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button31 />
      <Button32 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container65 />
        <Container68 />
      </div>
    </div>
  );
}

function TechniqueCard2() {
  return (
    <div className="absolute bg-[#e7f6f8] content-stretch flex flex-col h-[101.891px] items-start left-[541px] p-[2px] rounded-[4px] top-0 w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border-2 border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container64 />
    </div>
  );
}

function CustomCheckbox8() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph20() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1583</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph20 />
        </div>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Acquire Infrastructure</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container72 />
      <Paragraph21 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox8 />
      <Container71 />
    </div>
  );
}

function Button33() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button34() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (6)</p>
        <Icon18 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button33 />
      <Button34 />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container70 />
        <Container73 />
      </div>
    </div>
  );
}

function TechniqueCard3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[101.891px] items-start left-[811.5px] p-px rounded-[4px] top-0 w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container69 />
    </div>
  );
}

function CustomCheckbox9() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph22() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1586</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph22 />
        </div>
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Compromise Accounts</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container77 />
      <Paragraph23 />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox9 />
      <Container76 />
    </div>
  );
}

function Button35() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button36() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (3)</p>
        <Icon19 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button35 />
      <Button36 />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container75 />
        <Container78 />
      </div>
    </div>
  );
}

function TechniqueCard4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.891px] items-start left-0 p-px rounded-[4px] top-[113.89px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container74 />
    </div>
  );
}

function CustomCheckbox10() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph24() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1566</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph24 />
        </div>
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Phishing</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container82 />
      <Paragraph25 />
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox10 />
      <Container81 />
    </div>
  );
}

function Button37() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button38() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (3)</p>
        <Icon20 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button37 />
      <Button38 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container80 />
        <Container83 />
      </div>
    </div>
  );
}

function TechniqueCard5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.891px] items-start left-[270.5px] p-px rounded-[4px] top-[113.89px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container79 />
    </div>
  );
}

function CustomCheckbox11() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph26() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1190</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph26 />
        </div>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Exploit Public-Facing Application</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container87 />
      <Paragraph27 />
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox11 />
      <Container86 />
    </div>
  );
}

function Button39() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[181.281px] pt-px relative size-full">
          <Button39 />
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container85 />
        <Container88 />
      </div>
    </div>
  );
}

function TechniqueCard6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.891px] items-start left-[541px] p-px rounded-[4px] top-[113.89px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container84 />
    </div>
  );
}

function CustomCheckbox12() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph28() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1133</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph28 />
        </div>
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">External Remote Services</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container92 />
      <Paragraph29 />
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox12 />
      <Container91 />
    </div>
  );
}

function Button40() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[181.281px] pt-px relative size-full">
          <Button40 />
        </div>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container90 />
        <Container93 />
      </div>
    </div>
  );
}

function TechniqueCard7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.891px] items-start left-[811.5px] p-px rounded-[4px] top-[113.89px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container89 />
    </div>
  );
}

function CustomCheckbox13() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph30() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1078</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph30 />
        </div>
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Valid Accounts</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container97 />
      <Paragraph31 />
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox13 />
      <Container96 />
    </div>
  );
}

function Button41() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button42() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (4)</p>
        <Icon21 />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button41 />
      <Button42 />
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container95 />
        <Container98 />
      </div>
    </div>
  );
}

function TechniqueCard8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.891px] items-start left-0 p-px rounded-[4px] top-[225.78px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container94 />
    </div>
  );
}

function CustomCheckbox14() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph32() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1059</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph32 />
        </div>
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Command and Scripting Interpreter</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container102 />
      <Paragraph33 />
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox14 />
      <Container101 />
    </div>
  );
}

function Button43() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button44() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (9)</p>
        <Icon22 />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button43 />
      <Button44 />
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container100 />
        <Container103 />
      </div>
    </div>
  );
}

function TechniqueCard9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.891px] items-start left-[270.5px] p-px rounded-[4px] top-[225.78px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container99 />
    </div>
  );
}

function CustomCheckbox15() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph34() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1204</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph34 />
        </div>
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">User Execution</p>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container107 />
      <Paragraph35 />
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox15 />
      <Container106 />
    </div>
  );
}

function Button45() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button46() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (3)</p>
        <Icon23 />
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button45 />
      <Button46 />
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container105 />
        <Container108 />
      </div>
    </div>
  );
}

function TechniqueCard10() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.891px] items-start left-[541px] p-px rounded-[4px] top-[225.78px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container104 />
    </div>
  );
}

function CustomCheckbox16() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph36() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1053</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph36 />
        </div>
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Scheduled Task/Job</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container112 />
      <Paragraph37 />
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox16 />
      <Container111 />
    </div>
  );
}

function Button47() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button48() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (5)</p>
        <Icon24 />
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button47 />
      <Button48 />
    </div>
  );
}

function Container109() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container110 />
        <Container113 />
      </div>
    </div>
  );
}

function TechniqueCard11() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.891px] items-start left-[811.5px] p-px rounded-[4px] top-[225.78px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container109 />
    </div>
  );
}

function CustomCheckbox17() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph38() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1098</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph38 />
        </div>
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Account Manipulation</p>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container117 />
      <Paragraph39 />
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox17 />
      <Container116 />
    </div>
  );
}

function Button49() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button50() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (5)</p>
        <Icon25 />
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button49 />
      <Button50 />
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container115 />
        <Container118 />
      </div>
    </div>
  );
}

function TechniqueCard12() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.891px] items-start left-0 p-px rounded-[4px] top-[337.67px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container114 />
    </div>
  );
}

function CustomCheckbox18() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph40() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1136</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph40 />
        </div>
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Create Account</p>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container122 />
      <Paragraph41 />
    </div>
  );
}

function Container120() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox18 />
      <Container121 />
    </div>
  );
}

function Button51() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button52() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (3)</p>
        <Icon26 />
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button51 />
      <Button52 />
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container120 />
        <Container123 />
      </div>
    </div>
  );
}

function TechniqueCard13() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.891px] items-start left-[270.5px] p-px rounded-[4px] top-[337.67px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container119 />
    </div>
  );
}

function CustomCheckbox19() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph42() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1548</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph42 />
        </div>
      </div>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Abuse Elevation Control Mechanism</p>
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container127 />
      <Paragraph43 />
    </div>
  );
}

function Container125() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox19 />
      <Container126 />
    </div>
  );
}

function Button53() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button54() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (4)</p>
        <Icon27 />
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button53 />
      <Button54 />
    </div>
  );
}

function Container124() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container125 />
        <Container128 />
      </div>
    </div>
  );
}

function TechniqueCard14() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.891px] items-start left-[541px] p-px rounded-[4px] top-[337.67px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container124 />
    </div>
  );
}

function CustomCheckbox20() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph44() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1134</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph44 />
        </div>
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Access Token Manipulation</p>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container132 />
      <Paragraph45 />
    </div>
  );
}

function Container130() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox20 />
      <Container131 />
    </div>
  );
}

function Button55() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button56() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (5)</p>
        <Icon28 />
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button55 />
      <Button56 />
    </div>
  );
}

function Container129() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container130 />
        <Container133 />
      </div>
    </div>
  );
}

function TechniqueCard15() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.891px] items-start left-[811.5px] p-px rounded-[4px] top-[337.67px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container129 />
    </div>
  );
}

function CustomCheckbox21() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph46() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1140</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph46 />
        </div>
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[33.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] w-[155px]">Deobfuscate/Decode Files or Information</p>
    </div>
  );
}

function Container136() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[57.281px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container137 />
      <Paragraph47 />
    </div>
  );
}

function Container135() {
  return (
    <div className="h-[57.281px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox21 />
      <Container136 />
    </div>
  );
}

function Button57() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[181.281px] pt-px relative size-full">
          <Button57 />
        </div>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[114.781px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container135 />
        <Container138 />
      </div>
    </div>
  );
}

function TechniqueCard16() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[116.781px] items-start left-0 p-px rounded-[4px] top-[449.56px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container134 />
    </div>
  );
}

function CustomCheckbox22() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph48() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1564</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph48 />
        </div>
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Hide Artifacts</p>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container142 />
      <Paragraph49 />
    </div>
  );
}

function Container140() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox22 />
      <Container141 />
    </div>
  );
}

function Button58() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button59() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (5)</p>
        <Icon29 />
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button58 />
      <Button59 />
    </div>
  );
}

function Container139() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container140 />
        <Container143 />
      </div>
    </div>
  );
}

function TechniqueCard17() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[116.781px] items-start left-[270.5px] p-px rounded-[4px] top-[449.56px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container139 />
    </div>
  );
}

function CustomCheckbox23() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph50() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1110</p>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph50 />
        </div>
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Brute Force</p>
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container147 />
      <Paragraph51 />
    </div>
  );
}

function Container145() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox23 />
      <Container146 />
    </div>
  );
}

function Button60() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button61() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (4)</p>
        <Icon30 />
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button60 />
      <Button61 />
    </div>
  );
}

function Container144() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container145 />
        <Container148 />
      </div>
    </div>
  );
}

function TechniqueCard18() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[116.781px] items-start left-[541px] p-px rounded-[4px] top-[449.56px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container144 />
    </div>
  );
}

function CustomCheckbox24() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph52() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1003</p>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph52 />
        </div>
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">OS Credential Dumping</p>
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container152 />
      <Paragraph53 />
    </div>
  );
}

function Container150() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox24 />
      <Container151 />
    </div>
  );
}

function Button62() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button63() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (8)</p>
        <Icon31 />
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button62 />
      <Button63 />
    </div>
  );
}

function Container149() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container150 />
        <Container153 />
      </div>
    </div>
  );
}

function TechniqueCard19() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[116.781px] items-start left-[811.5px] p-px rounded-[4px] top-[449.56px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container149 />
    </div>
  );
}

function CustomCheckbox25() {
  return <div className="absolute bg-white border-2 border-[#565c65] border-solid left-0 rounded-[4px] size-[16px] top-[2px]" data-name="CustomCheckbox" />;
}

function Paragraph54() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[34.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#0078ae] text-[13px] top-0 whitespace-nowrap">T1557</p>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[173.813px] relative size-full">
          <Paragraph54 />
        </div>
      </div>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.9px] left-0 not-italic text-[#1b1b1b] text-[13px] top-[-1px] whitespace-nowrap">Adversary-in-the-Middle</p>
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.391px] items-start left-[24px] top-0 w-[208.5px]" data-name="Container">
      <Container157 />
      <Paragraph55 />
    </div>
  );
}

function Container155() {
  return (
    <div className="h-[40.391px] relative shrink-0 w-full" data-name="Container">
      <CustomCheckbox25 />
      <Container156 />
    </div>
  );
}

function Button64() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[51.219px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[26px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute left-[91px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p32f3b210} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button65() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[103px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[16.5px] left-[43.5px] not-italic text-[#0078ae] text-[11px] text-center top-0 whitespace-nowrap">Sub Techniques (3)</p>
        <Icon32 />
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex h-[25.5px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t inset-0 pointer-events-none" />
      <Button64 />
      <Button65 />
    </div>
  );
}

function Container154() {
  return (
    <div className="h-[97.891px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[12px] px-[12px] relative size-full">
        <Container155 />
        <Container158 />
      </div>
    </div>
  );
}

function TechniqueCard20() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99.891px] items-start left-0 p-px rounded-[4px] top-[578.34px] w-[258.5px]" data-name="TechniqueCard">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container154 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[678.234px] relative shrink-0 w-full" data-name="Container">
      <TechniqueCard />
      <TechniqueCard1 />
      <TechniqueCard2 />
      <TechniqueCard3 />
      <TechniqueCard4 />
      <TechniqueCard5 />
      <TechniqueCard6 />
      <TechniqueCard7 />
      <TechniqueCard8 />
      <TechniqueCard9 />
      <TechniqueCard10 />
      <TechniqueCard11 />
      <TechniqueCard12 />
      <TechniqueCard13 />
      <TechniqueCard14 />
      <TechniqueCard15 />
      <TechniqueCard16 />
      <TechniqueCard17 />
      <TechniqueCard18 />
      <TechniqueCard19 />
      <TechniqueCard20 />
    </div>
  );
}

function Button66() {
  return (
    <div className="bg-[#1b1b1b] h-[37px] relative rounded-[4px] shrink-0 w-[39.406px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[21px] left-[20px] not-italic text-[14px] text-center text-white top-[8px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Button67() {
  return (
    <div className="bg-white h-[39px] relative rounded-[4px] shrink-0 w-[40.969px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-[20.5px] not-italic text-[#1b1b1b] text-[14px] text-center top-[9px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Button68() {
  return (
    <div className="bg-white h-[39px] relative rounded-[4px] shrink-0 w-[40.969px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-[20.5px] not-italic text-[#1b1b1b] text-[14px] text-center top-[9px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Button69() {
  return (
    <div className="bg-white h-[39px] relative rounded-[4px] shrink-0 w-[72.016px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-[36.5px] not-italic text-[#0078ae] text-[14px] text-center top-[9px] whitespace-nowrap">Next →</p>
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="h-[55px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[426.313px] pr-[426.328px] relative size-full">
          <Button66 />
          <Button67 />
          <Button68 />
          <Button69 />
        </div>
      </div>
    </div>
  );
}

function IntermediateView() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1025.234px] items-start relative shrink-0 w-full" data-name="IntermediateView">
      <Container47 />
      <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="_mitre-cards-2/tactics">
        <Frame7 />
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button8 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button9 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button10 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button11 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button12 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button13 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button14 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button15 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button16 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button17 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button18 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button19 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button20 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button21 />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
          <Button22 />
        </div>
      </div>
      <Container51 />
      <Container52 />
      <Container53 />
      <Container159 />
    </div>
  );
}

function NetworkTtpForm() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1627.734px] items-start left-[32px] top-[93px] w-[1070px]" data-name="NetworkTTPForm">
      <Container30 />
      <Container31 />
      <Container32 />
      <Container35 />
      <Container37 />
      <IntermediateView />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="h-[1776.734px] relative shrink-0 w-full" data-name="Primitive.div">
      <NetworkTtpInterface />
      <NetworkTtpForm />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white h-[1867px] relative rounded-[4px] shrink-0 w-[1136px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container28 />
        <PrimitiveDiv />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ABTtPsQuestion() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full" data-name="A/B TTPs question">
      <Frame5 />
      <Container8 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1532 1">
            <line id="Line" stroke="var(--stroke-0, #DFE1E2)" x2="1532" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Container27 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pb-[32px] relative shrink-0 w-full">
      <Header />
      <ABTtPsQuestion />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full z-[2]">
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] items-start justify-end relative shrink-0">
      <div className="bg-[#0078ae] content-stretch flex flex-col items-center overflow-clip px-[20px] py-[12px] relative rounded-[4px] shrink-0" data-name="button">
        <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Next</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <button className="cursor-pointer relative rounded-[4px] shrink-0" data-name="button">
        <div className="content-stretch flex flex-col items-center overflow-clip px-[20px] py-[12px] relative rounded-[inherit]">
          <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[16px] text-center whitespace-nowrap">Back</p>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </button>
      <Frame2 />
    </div>
  );
}

export default function RightBody() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] isolate items-start p-[32px] relative size-full" data-name="right body">
      <Frame3 />
      <div className="bg-[#d6e9f2] relative rounded-[4px] shrink-0 w-full z-[1]" data-name="footer/form/action-footer">
        <div aria-hidden="true" className="absolute border border-[#b8d9e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col gap-[30px] items-start p-[20px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}