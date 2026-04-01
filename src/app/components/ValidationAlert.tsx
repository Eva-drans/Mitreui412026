import svgPaths from "../../imports/svg-1hfwjebh36";

interface ValidationAlertProps {
  onClose: () => void;
  missingNetworkSelection: boolean;
  missingTechniques: boolean;
}

export function ValidationAlert({ onClose, missingNetworkSelection, missingTechniques }: ValidationAlertProps) {
  return (
    <div className="bg-[#fef3cd] border border-[#e6c84e] rounded px-4 py-3 mb-6">
      <div className="flex gap-3">
        <div className="size-[24px] flex-shrink-0 mt-0.5">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g>
              <path
                clipRule="evenodd"
                d={svgPaths.p343dcc80}
                fill="#8B6914"
                fillRule="evenodd"
              />
            </g>
          </svg>
        </div>
        <div className="flex-1">
          <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] text-[#1b1b1b] mb-2">
            Action Required
          </p>
          <div className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] text-[#1b1b1b] space-y-1">
            {missingNetworkSelection && (
              <p>• You must select at least one network type in step 1 or check "There are no TTPs to report at this time"</p>
            )}
            {missingTechniques && (
              <p>• You must provide techniques/tactics for the selected network(s) in step 2 or check "There are no TTPs to report" for each network</p>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-[#8b6914] hover:text-[#1b1b1b] p-2 flex-shrink-0"
          aria-label="Close alert"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
