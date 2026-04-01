import svgPaths from "./svg-2ju6txruqj";

function Fill() {
  return (
    <div className="absolute inset-[12.5%_14.63%_14.63%_12.5%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.575 14.575">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.p3863c300} fill="var(--fill-0, #005288)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute contents inset-[12.5%_14.63%_14.63%_12.5%]" data-name="Icons">
      <Fill />
    </div>
  );
}

function UswdsComponents() {
  return (
    <div className="absolute contents inset-[12.5%_14.63%_14.63%_12.5%]" data-name="USWDS Components">
      <Icons />
    </div>
  );
}

function InputContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] h-[39px] items-start relative shrink-0 w-full" data-name="input container">
      <div aria-hidden="true" className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute overflow-clip right-[12px] size-[20px] top-[calc(50%+0.5px)]" data-name="_usa-icon">
        <UswdsComponents />
      </div>
      <p className="absolute font-['Source_Sans_Pro:Italic',sans-serif] inset-[20.51%_32px_17.95%_9px] italic leading-[1.5] text-[#1b1b1b] text-[16px]">Search Technique Name or ID</p>
    </div>
  );
}

function MitreCardsSelectbox() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="_mitre-cards/selectbox">
      <div className="content-stretch flex flex-col gap-[8px] h-[39px] items-start relative shrink-0 w-full" data-name="selectbox">
        <InputContainer />
      </div>
    </div>
  );
}

function Fill1() {
  return (
    <div className="absolute inset-[12.5%_30.87%_12.5%_30.88%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.65 15">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.p2e5e2c00} fill="var(--fill-0, #1B1B1B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="absolute contents inset-[12.5%_30.87%_12.5%_30.88%]" data-name="Icons">
      <Fill1 />
    </div>
  );
}

function UswdsComponents1() {
  return (
    <div className="absolute contents inset-[12.5%_30.87%_12.5%_30.88%]" data-name="USWDS Components">
      <Icons1 />
    </div>
  );
}

function InputContainer1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] h-[39px] items-start relative shrink-0 w-full" data-name="input container">
      <div aria-hidden="true" className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute overflow-clip right-[12px] size-[20px] top-[calc(50%+0.5px)]" data-name="_usa-icon">
        <UswdsComponents1 />
      </div>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[20.51%_32px_17.95%_9px] leading-[0] not-italic text-[#1b1b1b] text-[0px] text-[16px]">
        <span className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5]">{`Platform Filter: `}</span>
        <span className="leading-[1.5]">All</span>
      </p>
    </div>
  );
}

function Fill2() {
  return (
    <div className="absolute inset-[12.5%_30.87%_12.5%_30.88%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.65 15">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.p2e5e2c00} fill="var(--fill-0, #1B1B1B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons2() {
  return (
    <div className="absolute contents inset-[12.5%_30.87%_12.5%_30.88%]" data-name="Icons">
      <Fill2 />
    </div>
  );
}

function UswdsComponents2() {
  return (
    <div className="absolute contents inset-[12.5%_30.87%_12.5%_30.88%]" data-name="USWDS Components">
      <Icons2 />
    </div>
  );
}

function InputContainer2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] h-[39px] items-start relative shrink-0 w-full" data-name="input container">
      <div aria-hidden="true" className="absolute border border-[#1b1b1b] border-solid inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute overflow-clip right-[12px] size-[20px] top-[calc(50%+0.5px)]" data-name="_usa-icon">
        <UswdsComponents2 />
      </div>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[20.51%_32px_17.95%_9px] leading-[0] not-italic text-[#1b1b1b] text-[0px] text-[16px]">
        <span className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5]">{`Platform: `}</span>
        <span className="leading-[1.5]">All</span>
      </p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
      <MitreCardsSelectbox />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="selectbox">
        <InputContainer1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px opacity-0 relative" data-name="selectbox">
        <InputContainer2 />
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1452px]">
      <Frame53 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame68 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex h-[35px] items-center justify-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] whitespace-nowrap">Tactics Filter:</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0078ae] content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[100px] shrink-0" data-name="button">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">All Tactics</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[normal] not-italic relative shrink-0 text-[#757575] text-center whitespace-nowrap">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] relative shrink-0 text-[15px]">Reconnaissance</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] relative shrink-0 text-[12px]">11 Techniques</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame71 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Resource Development</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame72 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">{`Initial Access `}</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame73 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Execution</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame74 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Persistence</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame75 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">{`Privileged Escalation `}</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame76 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Defense Evasion</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame77 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">{`Credential Access `}</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame78 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Discovery</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame79 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Lateral Movement</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame80 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Collection</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame81 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Command and Control</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame82 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Exfiltration</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame83 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#757575] text-[15px] text-center whitespace-nowrap">Impact</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
        <Frame84 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-[#f0f0f0] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <Frame70 />
        <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="_mitre-cards-2/tactics">
          <Frame69 />
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
            <Button />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
            <Button1 />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
            <Button2 />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
            <Button3 />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
            <Button4 />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
            <Button5 />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
            <Button6 />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="_mitre-cards/tactics-tabs/tab-button">
            <Button7 />
          </div>
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
        </div>
      </div>
    </div>
  );
}

function Fill3() {
  return (
    <div className="absolute bottom-1/4 left-[35.79%] right-[33.33%] top-1/4" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5575 9">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.p33a6b500} fill="var(--fill-0, #71767A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons3() {
  return (
    <div className="absolute bottom-1/4 contents left-[35.79%] right-[33.33%] top-1/4" data-name="Icons">
      <Fill3 />
    </div>
  );
}

function UswdsComponents3() {
  return (
    <div className="absolute bottom-1/4 contents left-[35.79%] right-[33.33%] top-1/4" data-name="USWDS Components">
      <Icons3 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="h-[26px] relative shrink-0 w-full">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] left-0 not-italic text-[#005ea2] text-[#1b1b1b] text-[14px] top-0 whitespace-pre">
        <span className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[26px]">{`Techniques Filtered By: `}</span>
        <span className="leading-[26px]">{`     `}</span>
      </p>
      <div className="absolute content-stretch flex gap-[4px] items-center left-[160px] top-0" data-name="breadcrumb">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#005ea2] text-[#1b1b1b] text-[14px] whitespace-nowrap">
          <span className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[26px]">Network/System:</span>
          <span className="leading-[26px]">{` Enterprise/Traditional IT`}</span>
        </p>
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="_usa-icon">
          <UswdsComponents3 />
        </div>
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[14px] whitespace-nowrap">
          <span className="leading-[1.62]">Tactic:</span>
          <span className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.62]">{` `}</span>
          <span className="leading-[1.62]">All</span>
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1548</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">Abuse Elevation Control Mechanism</p>
      </div>
    </div>
  );
}

function Fill4() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.pf313640} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons4() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="Icons">
      <Fill4 />
    </div>
  );
}

function UswdsComponents4() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="USWDS Components">
      <Icons4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Sub Techniques (3)</p>
        <div className="relative shrink-0 size-[16px]" data-name="icon-container">
          <div className="absolute inset-0 overflow-clip" data-name="_usa-icon">
            <UswdsComponents4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1134</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame2 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">Access Token Manipulation</p>
      </div>
    </div>
  );
}

function Fill5() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.pf313640} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons5() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="Icons">
      <Fill5 />
    </div>
  );
}

function UswdsComponents5() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="USWDS Components">
      <Icons5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Sub Techniques (4)</p>
        <div className="relative shrink-0 size-[16px]" data-name="icon-container">
          <div className="absolute inset-0 overflow-clip" data-name="_usa-icon">
            <UswdsComponents5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1531</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame6 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">{`	Account Access Removal`}</p>
      </div>
    </div>
  );
}

function Fill6() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.pf313640} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons6() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="Icons">
      <Fill6 />
    </div>
  );
}

function UswdsComponents6() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="USWDS Components">
      <Icons6 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Sub Techniques (7)</p>
        <div className="relative shrink-0 size-[16px]" data-name="icon-container">
          <div className="absolute inset-0 overflow-clip" data-name="_usa-icon">
            <UswdsComponents6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1087</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame9 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">Account Discovery</p>
      </div>
    </div>
  );
}

function Fill7() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.pf313640} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons7() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="Icons">
      <Fill7 />
    </div>
  );
}

function UswdsComponents7() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="USWDS Components">
      <Icons7 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Sub Techniques (6)</p>
        <div className="relative shrink-0 size-[16px]" data-name="icon-container">
          <div className="absolute inset-0 overflow-clip" data-name="_usa-icon">
            <UswdsComponents7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1098</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame12 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">Account Manipulation</p>
      </div>
    </div>
  );
}

function Fill8() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.pf313640} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons8() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="Icons">
      <Fill8 />
    </div>
  );
}

function UswdsComponents8() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="USWDS Components">
      <Icons8 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Sub Techniques (6)</p>
        <div className="relative shrink-0 size-[16px]" data-name="icon-container">
          <div className="absolute inset-0 overflow-clip" data-name="_usa-icon">
            <UswdsComponents8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1650</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame15 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">Acquire Access</p>
      </div>
    </div>
  );
}

function Fill9() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.pf313640} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons9() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="Icons">
      <Fill9 />
    </div>
  );
}

function UswdsComponents9() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="USWDS Components">
      <Icons9 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Sub Techniques (6)</p>
        <div className="relative shrink-0 size-[16px]" data-name="icon-container">
          <div className="absolute inset-0 overflow-clip" data-name="_usa-icon">
            <UswdsComponents9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1583</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame19 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame18 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">Acquire Infrastructure</p>
      </div>
    </div>
  );
}

function Fill10() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.pf313640} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons10() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="Icons">
      <Fill10 />
    </div>
  );
}

function UswdsComponents10() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="USWDS Components">
      <Icons10 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Sub Techniques (6)</p>
        <div className="relative shrink-0 size-[16px]" data-name="icon-container">
          <div className="absolute inset-0 overflow-clip" data-name="_usa-icon">
            <UswdsComponents10 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1595</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame21 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">Active Scanning</p>
      </div>
    </div>
  );
}

function Fill11() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.pf313640} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons11() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="Icons">
      <Fill11 />
    </div>
  );
}

function UswdsComponents11() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="USWDS Components">
      <Icons11 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Sub Techniques (6)</p>
        <div className="relative shrink-0 size-[16px]" data-name="icon-container">
          <div className="absolute inset-0 overflow-clip" data-name="_usa-icon">
            <UswdsComponents11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1557</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame24 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">Adversary-in-the-Middle</p>
      </div>
    </div>
  );
}

function Fill12() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.pf313640} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons12() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="Icons">
      <Fill12 />
    </div>
  );
}

function UswdsComponents12() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="USWDS Components">
      <Icons12 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Sub Techniques (6)</p>
        <div className="relative shrink-0 size-[16px]" data-name="icon-container">
          <div className="absolute inset-0 overflow-clip" data-name="_usa-icon">
            <UswdsComponents12 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">{`T1071	`}</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame28 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame27 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">Application Layer Protocol</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1010</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame31 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame30 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">Application Window Discovery</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1560</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame33 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">{`	Archive Collected Data`}</p>
      </div>
    </div>
  );
}

function Fill13() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.pf313640} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons13() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="Icons">
      <Fill13 />
    </div>
  );
}

function UswdsComponents13() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="USWDS Components">
      <Icons13 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Sub Techniques (3)</p>
        <div className="relative shrink-0 size-[16px]" data-name="icon-container">
          <div className="absolute inset-0 overflow-clip" data-name="_usa-icon">
            <UswdsComponents13 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1123</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame37 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame36 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">Audio Capture</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1119</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame40 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame39 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">Automated Collection</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1020</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame43 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame42 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">Automated Exfiltration</p>
      </div>
    </div>
  );
}

function Fill14() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.pf313640} fill="var(--fill-0, #0078AE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons14() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="Icons">
      <Fill14 />
    </div>
  );
}

function UswdsComponents14() {
  return (
    <div className="absolute contents inset-[16.67%]" data-name="USWDS Components">
      <Icons14 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Sub Techniques (1)</p>
        <div className="relative shrink-0 size-[16px]" data-name="icon-container">
          <div className="absolute inset-0 overflow-clip" data-name="_usa-icon">
            <UswdsComponents14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="bg-[#e7f6f8] content-stretch flex gap-[4px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">T1197</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 w-full">
      <Frame46 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame45 />
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="checkbox">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f45a580} fill="var(--fill-0, #1B1B1B)" id="Vector" />
          </svg>
        </div>
        <p className="flex-[1_0_0] font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#003e67] text-[16px]">BITS Jobs</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Link">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0078ae] text-[14px] underline whitespace-nowrap">Learn More</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 49">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame49 />
        <Frame1 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 51">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame50 />
        <Frame5 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 83">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame51 />
        <Frame8 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 78">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame52 />
        <Frame11 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 84">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame54 />
        <Frame14 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 85">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame56 />
        <Frame17 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 86">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame57 />
        <Frame20 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 87">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame58 />
        <Frame23 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 88">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame59 />
        <Frame26 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 89">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame60 />
        <Frame29 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 90">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame61 />
        <Frame32 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 91">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame62 />
        <Frame35 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 92">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame63 />
        <Frame38 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 93">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame64 />
        <Frame41 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 94">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame65 />
        <Frame44 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[4px] shrink-0 w-[284px]" data-name="Component 95">
        <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Frame67 />
        <Frame47 />
      </div>
    </div>
  );
}

function Fill15() {
  return (
    <div className="absolute bottom-1/4 left-[35.79%] right-[33.33%] top-1/4" data-name="Fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5575 9">
        <g id="Fill">
          <path clipRule="evenodd" d={svgPaths.p33a6b500} fill="var(--fill-0, #1B1B1B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons15() {
  return (
    <div className="absolute bottom-1/4 contents left-[35.79%] right-[33.33%] top-1/4" data-name="Icons">
      <Fill15 />
    </div>
  );
}

function UswdsComponents15() {
  return (
    <div className="absolute bottom-1/4 contents left-[35.79%] right-[33.33%] top-1/4" data-name="USWDS Components">
      <Icons15 />
    </div>
  );
}

function PaginationBoundedFirstPage() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0" data-name="pagination bounded - first page">
      <div className="relative shrink-0 size-[40px]" data-name="pagination button - selected">
        <div className="absolute bg-[#1b1b1b] inset-0 rounded-[4px]" data-name="Rectangle" />
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[16px] left-[20%] not-italic right-[20%] text-[16px] text-center text-white top-[calc(50%-8px)]">1</p>
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="pagination button - unselected">
        <div className="absolute border border-[#dfe1e2] border-solid inset-0 rounded-[4px]" data-name="Rectangle" />
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[16px] left-[20%] not-italic right-[20%] text-[#005ea2] text-[16px] text-center top-[calc(50%-8px)]">2</p>
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="pagination button - unselected">
        <div className="absolute border border-[#dfe1e2] border-solid inset-0 rounded-[4px]" data-name="Rectangle" />
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[16px] left-[20%] not-italic right-[20%] text-[#005ea2] text-[16px] text-center top-[calc(50%-8px)]">3</p>
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="pagination button - unselected">
        <div className="absolute border border-[#dfe1e2] border-solid inset-0 rounded-[4px]" data-name="Rectangle" />
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[16px] left-[20%] not-italic right-[20%] text-[#005ea2] text-[16px] text-center top-[calc(50%-8px)]">4</p>
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="pagination button - unselected">
        <div className="absolute border border-[#dfe1e2] border-solid inset-0 rounded-[4px]" data-name="Rectangle" />
        <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[16px] left-[20%] not-italic right-[20%] text-[#005ea2] text-[16px] text-center top-[calc(50%-8px)]">5</p>
      </div>
      <div className="content-stretch flex gap-[4px] items-start px-[10px] py-[11px] relative shrink-0" data-name="_pagination button - next">
        <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#005ea2] text-[16px] whitespace-nowrap">Next</p>
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="_usa-icon">
          <UswdsComponents15 />
        </div>
      </div>
    </div>
  );
}

export default function MitreCards2MainlayoutEnterprise() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="_mitre-cards-2/mainlayout/enterprise">
      <Frame66 />
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="_mitre-cards-2/enterprise/All-cards">
        <Frame55 />
        <Frame48 />
        <PaginationBoundedFirstPage />
      </div>
    </div>
  );
}