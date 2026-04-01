import { useState } from 'react';
import svgPaths from '../../imports/svg-bk5hjjnd0k';
import arrowPaths from '../../imports/svg-1akhl532u0';

export interface SubTechnique {
  id: string;
  name: string;
  description?: string;
}

export interface TechniqueData {
  id: string;
  name: string;
  tactic: string;
  description?: string;
  platforms?: string[];
  subTechniques?: SubTechnique[];
}

interface TechniqueCardProps {
  technique: TechniqueData;
  isSelected: boolean;
  selectedSubTechniques: string[];
  onToggleTechnique: (id: string) => void;
  onToggleSubTechnique: (id: string) => void;
  onLearnMore: (technique: TechniqueData, subTechnique?: SubTechnique) => void;
  variant?: 'card' | 'list';
}

export function TechniqueCard({ 
  technique, 
  isSelected, 
  selectedSubTechniques,
  onToggleTechnique,
  onToggleSubTechnique,
  onLearnMore,
  variant = 'card'
}: TechniqueCardProps) {
  const [showSubTechniques, setShowSubTechniques] = useState(false);

  const hasSubTechniques = technique.subTechniques && technique.subTechniques.length > 0;
  const selectedSubTechCount = hasSubTechniques 
    ? technique.subTechniques!.filter(st => selectedSubTechniques.includes(st.id)).length 
    : 0;

  // Auto-expand when technique is selected and has subtechniques
  const handleTechniqueToggle = () => {
    onToggleTechnique(technique.id);
    if (!isSelected && hasSubTechniques) {
      setShowSubTechniques(true);
    }
  };

  if (variant === 'list') {
    // Matrix view list style - matching Figma design pixel-perfect
    return (
      <div className={`relative ${isSelected ? 'bg-[#e7f6f8]' : 'bg-white'}`}>
        {/* Main Technique */}
        <div className="flex flex-col gap-[8px] items-start pl-[16px] pr-[8px] py-[16px]">
          {/* Tag at top right */}
          <div className="flex items-start w-full">
            <div className="flex flex-[1_0_0] flex-col items-end justify-center min-h-px min-w-px pb-[16px]">
              <div className="flex gap-[2px] h-[18px] items-center justify-end w-full">
                <div className="bg-[#e7f6f8] px-[8px] py-[2px] rounded-[2px]">
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">
                    {technique.id}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Checkbox and Technique Name */}
          <div className="flex flex-col gap-[8px] items-start w-full">
            <div className="flex gap-[8px] items-start w-full">
              {/* Checkbox */}
              <button
                onClick={handleTechniqueToggle}
                className="flex items-start shrink-0"
              >
                <div className="relative shrink-0 size-[20px]">
                  {isSelected ? (
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g>
                        <path d={svgPaths.p2c663080} fill="#0078AE" />
                        <path clipRule="evenodd" d={svgPaths.p175c9200} fill="white" fillRule="evenodd" />
                      </g>
                    </svg>
                  ) : (
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g>
                        <path d={arrowPaths.p2f45a580} fill="#1B1B1B" />
                      </g>
                    </svg>
                  )}
                </div>
              </button>

              {/* Technique Name */}
              <div className="flex flex-[1_0_0] items-center min-h-px min-w-px">
                <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] text-[#003e67] text-[14px]">
                  {technique.name}
                </p>
              </div>
            </div>

            {/* Learn More and Sub-technique Badge */}
            <div className="flex gap-[8px] items-center justify-center w-full">
              {/* Learn More */}
              <div className="flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onLearnMore(technique);
                  }}
                  className="decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-none text-[#0078ae] text-[12px] tracking-[-0.132px] underline whitespace-nowrap"
                >
                  Learn More
                </button>
              </div>

              {/* Sub-technique Badge */}
              {hasSubTechniques && (
                <div className="flex flex-[1_0_0] items-center justify-end min-h-px min-w-px">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowSubTechniques(!showSubTechniques);
                    }}
                    className="flex items-center justify-center size-[20px]"
                  >
                    <div className="flex flex-col items-center justify-center relative">
                      {/* Badge with number */}
                      <div className="bg-[#757575] flex items-center justify-center rounded-[20px] shrink-0">
                        <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] text-[14px] text-center text-white w-[18px]">
                          <p className="leading-[normal]">{technique.subTechniques!.length}</p>
                        </div>
                      </div>
                      {/* Arrow Icon - shown when subtechniques are visible */}
                      {showSubTechniques && (
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="-scale-y-100 flex-none">
                            <div className="opacity-30 relative size-[12px]">
                              <div className="absolute bg-white inset-0 overflow-clip">
                                <div className="absolute inset-[16.67%]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                                    <path clipRule="evenodd" d={arrowPaths.p148d2280} fill="black" fillRule="evenodd" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sub-techniques Section */}
        {showSubTechniques && hasSubTechniques && (
          <div className="bg-[#e7f6f8] flex flex-col items-start pb-[8px] relative">
            <div aria-hidden="true" className="absolute border border-[#d6d7d9] inset-[-1px] pointer-events-none" />
            
            {/* Sub-Techniques Header */}
            <div className="bg-[#f0f0f0] h-[34px] w-full z-[2]">
              <div className="flex flex-col items-start justify-between px-[16px] py-[8px]">
                <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[18px] text-[#1b1b1b] text-[12px] whitespace-nowrap">
                  Sub-Techniques:
                </p>
              </div>
            </div>

            {/* Sub-techniques List */}
            <div className="flex flex-col items-start pt-[10px] w-full z-[1]">
              {technique.subTechniques!.map((subTech, index) => {
                const isSubSelected = selectedSubTechniques.includes(subTech.id);
                
                return (
                  <div key={subTech.id} className="w-full z-[${9 - index}]">
                    <div className="flex flex-col items-start px-[10px] w-full">
                      <div className="bg-white w-full z-[1]">
                        <div className="flex flex-col gap-[8px] items-start pl-[20px] pr-[16px] py-[8px] w-full">
                          {/* Sub-technique ID Tag */}
                          <div className="flex gap-[8px] items-center w-full">
                            <div className="bg-[#e7f6f8] flex gap-[4px] items-center px-[8px] py-[2px] rounded-[2px]">
                              <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">
                                {subTech.id}
                              </p>
                            </div>
                          </div>

                          {/* Sub-technique Checkbox and Name */}
                          <div className="flex gap-[8px] items-center w-full">
                            <button
                              onClick={() => onToggleSubTechnique(subTech.id)}
                              className="flex items-start shrink-0 size-[14px]"
                            >
                              <div className="relative size-full">
                                {isSubSelected ? (
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                    <g>
                                      <path d="M1.16667 0H12.8333C13.4777 0 14 0.522334 14 1.16667V12.8333C14 13.4777 13.4777 14 12.8333 14H1.16667C0.522334 14 0 13.4777 0 12.8333V1.16667C0 0.522334 0.522334 0 1.16667 0V0Z" fill="#0078AE" />
                                      <path clipRule="evenodd" d="M10.5583 5.075C10.5562 5.18316 10.5147 5.28683 10.4417 5.36667L7.11667 8.69167L6.475 9.33333C6.39516 9.40631 6.29149 9.44782 6.18333 9.45C6.07517 9.44782 5.9715 9.40631 5.89167 9.33333L5.25 8.69167L3.61667 7.05833C3.54366 6.97849 3.5022 6.87483 3.5 6.76667C3.5022 6.6585 3.54366 6.55484 3.61667 6.475L4.25833 5.83333C4.33817 5.76034 4.44184 5.71887 4.55 5.71667C4.65816 5.71887 4.76183 5.76034 4.84167 5.83333L6.18333 7.175L9.15833 4.2C9.23817 4.127 9.34184 4.08554 9.45 4.08333C9.55816 4.08554 9.66183 4.127 9.74167 4.2L10.3833 4.84167C10.5 4.9 10.5583 4.95833 10.5583 5.075V5.075Z" fill="white" fillRule="evenodd" />
                                    </g>
                                  </svg>
                                ) : (
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                    <g>
                                      <path d={svgPaths.p381e7100} fill="#1B1B1B" />
                                    </g>
                                  </svg>
                                )}
                              </div>
                            </button>

                            <div className="flex flex-[1_0_0] items-center">
                              <p className="flex-[1_0_0] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] text-[#005288] text-[14px]">
                                {subTech.name}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border-[#d6d7d9] border-b inset-0 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(117,117,117,0.5)] inset-0 pointer-events-none" />
      </div>
    );
  }

  // Card style for intermediate view - matching Figma design
  return (
    <div className={`relative ${isSelected ? 'bg-[#e7f6f8]' : 'bg-white'}`}>
      {/* Main Technique Card */}
      <div className="flex flex-col gap-[8px] items-start pl-[16px] pr-[8px] py-[16px]">
        {/* Tag at top right */}
        <div className="flex items-start w-full">
          <div className="flex flex-[1_0_0] flex-col items-end justify-center min-h-px min-w-px pb-[16px]">
            <div className="flex gap-[2px] h-[18px] items-center justify-end w-full">
              <div className="bg-[#e7f6f8] px-[8px] py-[2px] rounded-[2px]">
                <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">
                  {technique.id}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox and Technique Name */}
        <div className="flex flex-col gap-[8px] items-start w-full">
          <div className="flex gap-[8px] items-start w-full">
            {/* Checkbox */}
            <button
              onClick={handleTechniqueToggle}
              className="flex items-start shrink-0"
            >
              <div className="relative shrink-0 size-[20px]">
                {isSelected ? (
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPaths.p2c663080} fill="#0078AE" />
                      <path clipRule="evenodd" d={svgPaths.p175c9200} fill="white" fillRule="evenodd" />
                    </g>
                  </svg>
                ) : (
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={arrowPaths.p2f45a580} fill="#1B1B1B" />
                    </g>
                  </svg>
                )}
              </div>
            </button>

            {/* Technique Name */}
            <div className="flex flex-[1_0_0] items-center min-h-px min-w-px">
              <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] text-[#003e67] text-[14px]">
                {technique.name}
              </p>
            </div>
          </div>

          {/* Learn More and Sub-technique Badge */}
          <div className="flex gap-[8px] items-center justify-center w-full">
            {/* Learn More */}
            <div className="flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onLearnMore(technique);
                }}
                className="decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-none text-[#0078ae] text-[12px] tracking-[-0.132px] underline whitespace-nowrap"
              >
                Learn More
              </button>
            </div>

            {/* Sub-technique Badge */}
            {hasSubTechniques && (
              <div className="flex flex-[1_0_0] items-center justify-end min-h-px min-w-px">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSubTechniques(!showSubTechniques);
                  }}
                  className="flex items-center justify-center size-[20px]"
                >
                  <div className="flex flex-col items-center justify-center relative">
                    {/* Badge with number */}
                    <div className="bg-[#757575] flex items-center justify-center rounded-[20px] shrink-0">
                      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] text-[14px] text-center text-white w-[18px]">
                        <p className="leading-[normal]">{technique.subTechniques!.length}</p>
                      </div>
                    </div>
                    {/* Arrow Icon - shown when subtechniques are visible */}
                    {showSubTechniques && (
                      <div className="flex items-center justify-center relative shrink-0">
                        <div className="-scale-y-100 flex-none">
                          <div className="opacity-30 relative size-[12px]">
                            <div className="absolute bg-white inset-0 overflow-clip">
                              <div className="absolute inset-[16.67%]">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                                  <path clipRule="evenodd" d={arrowPaths.p148d2280} fill="black" fillRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sub-techniques Section */}
      {showSubTechniques && hasSubTechniques && (
        <div className="bg-[#e7f6f8] flex flex-col items-start pb-[8px] relative">
          <div aria-hidden="true" className="absolute border border-[#d6d7d9] inset-[-1px] pointer-events-none" />
          
          {/* Sub-Techniques Header */}
          <div className="bg-[#f0f0f0] h-[34px] w-full z-[2]">
            <div className="flex flex-col items-start justify-between px-[16px] py-[8px]">
              <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[18px] text-[#1b1b1b] text-[12px] whitespace-nowrap">
                Sub-Techniques:
              </p>
            </div>
          </div>

          {/* Sub-techniques List */}
          <div className="flex flex-col items-start pt-[10px] w-full z-[1]">
            {technique.subTechniques!.map((subTech, index) => {
              const isSubSelected = selectedSubTechniques.includes(subTech.id);
              
              return (
                <div key={subTech.id} className="w-full z-[${9 - index}]">
                  <div className="flex flex-col items-start px-[10px] w-full">
                    <div className="bg-white w-full z-[1]">
                      <div className="flex flex-col gap-[8px] items-start pl-[20px] pr-[16px] py-[8px] w-full">
                        {/* Sub-technique ID Tag */}
                        <div className="flex gap-[8px] items-center w-full">
                          <div className="bg-[#e7f6f8] flex gap-[4px] items-center px-[8px] py-[2px] rounded-[2px]">
                            <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">
                              {subTech.id}
                            </p>
                          </div>
                        </div>

                        {/* Sub-technique Checkbox and Name */}
                        <div className="flex gap-[8px] items-center w-full">
                          <button
                            onClick={() => onToggleSubTechnique(subTech.id)}
                            className="flex items-start shrink-0 size-[14px]"
                          >
                            <div className="relative size-full">
                              {isSubSelected ? (
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                  <g>
                                    <path d="M1.16667 0H12.8333C13.4777 0 14 0.522334 14 1.16667V12.8333C14 13.4777 13.4777 14 12.8333 14H1.16667C0.522334 14 0 13.4777 0 12.8333V1.16667C0 0.522334 0.522334 0 1.16667 0V0Z" fill="#0078AE" />
                                    <path clipRule="evenodd" d="M10.5583 5.075C10.5562 5.18316 10.5147 5.28683 10.4417 5.36667L7.11667 8.69167L6.475 9.33333C6.39516 9.40631 6.29149 9.44782 6.18333 9.45C6.07517 9.44782 5.9715 9.40631 5.89167 9.33333L5.25 8.69167L3.61667 7.05833C3.54366 6.97849 3.5022 6.87483 3.5 6.76667C3.5022 6.6585 3.54366 6.55484 3.61667 6.475L4.25833 5.83333C4.33817 5.76034 4.44184 5.71887 4.55 5.71667C4.65816 5.71887 4.76183 5.76034 4.84167 5.83333L6.18333 7.175L9.15833 4.2C9.23817 4.127 9.34184 4.08554 9.45 4.08333C9.55816 4.08554 9.66183 4.127 9.74167 4.2L10.3833 4.84167C10.5 4.9 10.5583 4.95833 10.5583 5.075V5.075Z" fill="white" fillRule="evenodd" />
                                  </g>
                                </svg>
                              ) : (
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                                  <g>
                                    <path d={svgPaths.p381e7100} fill="#1B1B1B" />
                                  </g>
                                </svg>
                              )}
                            </div>
                          </button>

                          <div className="flex flex-[1_0_0] items-center">
                            <p className="flex-[1_0_0] font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] text-[#005288] text-[14px]">
                              {subTech.name}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#d6d7d9] border-b inset-0 pointer-events-none" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(117,117,117,0.5)] inset-0 pointer-events-none" />
    </div>
  );
}