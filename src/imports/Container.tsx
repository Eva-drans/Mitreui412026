function Legend() {
  return (
    <div className="absolute h-[27px] left-0 top-0 w-[154.375px]" data-name="Legend">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[27px] left-0 not-italic text-[#1b1b1b] text-[18px] top-0 whitespace-nowrap">Change view mode:</p>
    </div>
  );
}

function PrimitiveButton() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-2 border-[#565c65] border-solid left-0 rounded-[33554400px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[20px] top-[2px]" data-name="Primitive.button" />;
}

function PrimitiveLabel() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b1b] text-[16px] top-0 whitespace-pre">{`Without Using MITRE  ATT&CK Framework`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#565c65] text-[14px] top-0 whitespace-nowrap">Recommended for Non-MITRE Savvy</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[53px] items-start left-[32px] top-0 w-[261.344px]" data-name="Container">
      <PrimitiveLabel />
      <Paragraph />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton />
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[213px] items-start pb-[2px] pt-[18px] px-[18px] relative rounded-[4px] shrink-0 w-[381px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container2 />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b1b] text-[16px] top-0 whitespace-pre">{`Using MITRE  ATT&CK Framework`}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#565c65] text-[14px] top-0 whitespace-nowrap">Recommended for MITRE Savvy</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[53px] items-start left-[0.12px] top-[-1px] w-[261.328px]" data-name="Container">
      <PrimitiveLabel1 />
      <Paragraph1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[53px] relative w-full" data-name="Container">
      <Container6 />
    </div>
  );
}

function PrimitiveButton1() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-2 border-[#565c65] border-solid left-0 rounded-[33554400px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[20px] top-[2px]" data-name="Primitive.button" />;
}

function PrimitiveLabel2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b1b] text-[16px] top-0 whitespace-nowrap">Intermediated View</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#565c65] text-[14px] top-0 w-[80px]">Recommen</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[53px] items-start left-[32.33px] top-[-0.5px] w-[72px]" data-name="Container">
      <PrimitiveLabel2 />
      <Paragraph2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton1 />
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[89px] items-start pb-[2px] pt-[18px] px-[18px] relative rounded-[4px] shrink-0 w-[206px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container8 />
    </div>
  );
}

function PrimitiveButton2() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-2 border-[#565c65] border-solid left-0 rounded-[33554400px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[20px] top-[2px]" data-name="Primitive.button" />;
}

function PrimitiveLabel3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[24px] left-0 not-italic text-[#1b1b1b] text-[16px] top-0 whitespace-nowrap">Matrix View</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#565c65] text-[14px] top-0 w-[80px]">Recommen</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[53px] items-start left-[32.33px] top-[-0.5px] w-[72px]" data-name="Container">
      <PrimitiveLabel3 />
      <Paragraph3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton2 />
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[89px] items-start pb-[2px] pt-[18px] px-[18px] relative rounded-[4px] shrink-0 w-[197px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container11 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Container7 />
      <Container10 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[213px] items-start pb-[2px] pt-[18px] px-[18px] relative rounded-[4px] shrink-0 w-[446px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#0078ae] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_0px_0px_#0078ae]" />
      <div className="flex h-[55.005px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.28deg] w-full">
          <Container5 />
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[213px] items-center left-0 top-0">
      <Container1 />
      <Container4 />
    </div>
  );
}

function NetworkTtpForm() {
  return (
    <div className="col-1 h-[213px] justify-self-stretch relative row-1 self-start shrink-0" data-name="NetworkTTPForm">
      <Frame />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="absolute gap-x-[12px] gap-y-[12px] grid grid-cols-[_1020px] grid-rows-[_146px] h-[188px] left-0 top-[43px] w-[1020px]" data-name="Primitive.div">
      <NetworkTtpForm />
    </div>
  );
}

function FieldSet() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Field Set">
      <Legend />
      <PrimitiveDiv />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#f0f0f0] content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative rounded-[4px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#757575] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <FieldSet />
    </div>
  );
}