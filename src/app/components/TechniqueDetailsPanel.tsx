import { useEffect } from 'react';
import { TechniqueData, SubTechnique } from './TechniqueCard';

interface TechniqueDetailsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  technique: TechniqueData | null;
  subTechnique?: SubTechnique | null;
  onBackToTechnique?: () => void;
  onSubTechniqueClick?: (subTech: SubTechnique) => void;
}

export function TechniqueDetailsPanel({
  isOpen,
  onClose,
  technique,
  subTechnique,
  onBackToTechnique,
  onSubTechniqueClick
}: TechniqueDetailsPanelProps) {
  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!technique) return null;

  const isShowingSubTechnique = !!subTechnique;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[480px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="bg-[#1b4668] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isShowingSubTechnique && onBackToTechnique && (
              <button
                onClick={onBackToTechnique}
                className="hover:bg-[#2d5a7b] rounded p-1 transition-colors"
                aria-label="Back to technique"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            )}
            <h2 className="font-['Source_Sans_Pro:Bold',sans-serif] text-[18px]">
              {isShowingSubTechnique ? 'Sub-Technique Details' : 'Technique Details'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-[#2d5a7b] rounded p-1 transition-colors"
            aria-label="Close panel"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-[calc(100%-64px)] p-6">
          {isShowingSubTechnique ? (
            // Sub-Technique View
            <>
              <div className="mb-6">
                <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[11px] text-[#757575] uppercase tracking-wide mb-2">
                  TECHNIQUE ID
                </p>
                <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] text-[#1b1b1b]">
                  {subTechnique.id}
                </p>
              </div>

              <div className="border-t border-[#d9d9d9] pt-6 mb-6">
                <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[11px] text-[#757575] uppercase tracking-wide mb-2">
                  NAME
                </p>
                <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[18px] text-[#1b1b1b] leading-[1.4]">
                  {subTechnique.name}
                </p>
              </div>

              {subTechnique.description && (
                <div className="border-t border-[#d9d9d9] pt-6">
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[11px] text-[#757575] uppercase tracking-wide mb-2">
                    DESCRIPTION
                  </p>
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[15px] text-[#1b1b1b] leading-[1.6]">
                    {subTechnique.description}
                  </p>
                </div>
              )}
            </>
          ) : (
            // Technique View
            <>
              <div className="mb-6">
                <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[11px] text-[#757575] uppercase tracking-wide mb-2">
                  TECHNIQUE ID
                </p>
                <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] text-[#1b1b1b]">
                  {technique.id}
                </p>
              </div>

              <div className="border-t border-[#d9d9d9] pt-6 mb-6">
                <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[11px] text-[#757575] uppercase tracking-wide mb-2">
                  NAME
                </p>
                <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[18px] text-[#1b1b1b] leading-[1.4]">
                  {technique.name}
                </p>
              </div>

              {technique.description && (
                <div className="border-t border-[#d9d9d9] pt-6 mb-6">
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[11px] text-[#757575] uppercase tracking-wide mb-2">
                    DESCRIPTION
                  </p>
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[15px] text-[#1b1b1b] leading-[1.6]">
                    {technique.description}
                  </p>
                </div>
              )}

              {technique.subTechniques && technique.subTechniques.length > 0 && (
                <div className="border-t border-[#d9d9d9] pt-6">
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[11px] text-[#757575] uppercase tracking-wide mb-3">
                    SUB-TECHNIQUES ({technique.subTechniques.length})
                  </p>
                  <div className="space-y-2">
                    {technique.subTechniques.map(subTech => (
                      <button
                        key={subTech.id}
                        className="w-full border border-[#d9d9d9] rounded p-3 bg-[#f9f9f9] hover:bg-[#e7f6f8] hover:border-[#0078ae] transition-colors text-left"
                        onClick={() => onSubTechniqueClick && onSubTechniqueClick(subTech)}
                      >
                        <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[12px] text-[#757575] mb-1">
                          {subTech.id}
                        </p>
                        <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[14px] text-[#0078ae]">
                          {subTech.name}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}