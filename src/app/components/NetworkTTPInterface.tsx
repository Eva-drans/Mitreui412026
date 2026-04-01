import { useState } from 'react';
import svgPaths from '../../imports/svg-t8ju5qz273';
import chevronSvg from '../../imports/svg-41sujrmk6v';
import { SimpleView, IntermediateView, MatrixView } from './ViewComponents';
import { TechniqueData, SubTechnique } from './TechniqueCard';
import { TechniqueDetailsPanel } from './TechniqueDetailsPanel';
import { MITRE_TECHNIQUES } from '../data/mitreData';

type NetworkType = 'enterprise' | 'ot' | 'mobile';
type ViewMode = 'simple' | 'intermediate' | 'matrix';

interface NetworkSelection {
  type: NetworkType;
  label: string;
  description: string;
}

const NETWORK_TYPES: NetworkSelection[] = [
  {
    type: 'enterprise',
    label: 'Enterprise/Traditional IT',
    description: 'Corporate networks, servers, workstations'
  },
  {
    type: 'ot',
    label: 'Operational Technology/Industrial Control Systems',
    description: 'SCADA, ICS, manufacturing systems'
  },
  {
    type: 'mobile',
    label: 'Mobile Devices',
    description: 'Mobile devices, tablets, remote access'
  }
];

interface NetworkState {
  viewMode: ViewMode;
  selectedTactics: string[];
  selectedTechniques: string[];
  selectedSubTechniques: string[];
  noTTPs: boolean;
}

export function NetworkTTPInterface() {
  const [globalNoTTPs, setGlobalNoTTPs] = useState(false);
  const [selectedNetworks, setSelectedNetworks] = useState<NetworkType[]>([]);
  const [activeNetwork, setActiveNetwork] = useState<NetworkType | null>(null);
  const [networkStates, setNetworkStates] = useState<Record<NetworkType, NetworkState>>({
    enterprise: { viewMode: 'simple', selectedTactics: [], selectedTechniques: [], selectedSubTechniques: [], noTTPs: false },
    ot: { viewMode: 'simple', selectedTactics: [], selectedTechniques: [], selectedSubTechniques: [], noTTPs: false },
    mobile: { viewMode: 'simple', selectedTactics: [], selectedTechniques: [], selectedSubTechniques: [], noTTPs: false }
  });
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [selectedDetailTechnique, setSelectedDetailTechnique] = useState<TechniqueData | null>(null);
  const [selectedDetailSubTechnique, setSelectedDetailSubTechnique] = useState<SubTechnique | null>(null);

  const toggleNetwork = (network: NetworkType) => {
    if (globalNoTTPs) return;
    
    setSelectedNetworks(prev => {
      const isSelected = prev.includes(network);
      if (isSelected) {
        const newNetworks = prev.filter(n => n !== network);
        if (activeNetwork === network) {
          setActiveNetwork(newNetworks[0] || null);
        }
        return newNetworks;
      } else {
        const newNetworks = [...prev, network];
        if (!activeNetwork) {
          setActiveNetwork(network);
        }
        return newNetworks;
      }
    });
  };

  const handleLearnMore = (technique: TechniqueData, subTechnique?: SubTechnique) => {
    setSelectedDetailTechnique(technique);
    setSelectedDetailSubTechnique(subTechnique || null);
    setSidePanelOpen(true);
  };

  const updateNetworkState = (network: NetworkType, updates: Partial<NetworkState>) => {
    setNetworkStates(prev => ({
      ...prev,
      [network]: { ...prev[network], ...updates }
    }));
  };

  return (
    <div className="min-h-screen bg-white p-[32px]">
      <div className="max-w-[1130px] mx-auto">
        <div className="flex flex-col gap-[50px]">
          {/* Header Instructions */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] text-[#1b1b1b] text-[16px]">
              Document the tactics, techniques, and procedures (TTPs) observed.
            </p>
            
            {/* How it works alert */}
            <div className="bg-[#e7f6f8] flex">
              <div className="w-[8px] bg-[#00BDE3] shrink-0" />
              <div className="flex-1 flex gap-[14px] items-start pl-[14px] pr-[16px] py-[16px]">
                <div className="size-[32px] shrink-0 relative">
                  <svg className="absolute block size-full" fill="none" viewBox="0 0 32 32">
                    <g transform="scale(1) translate(2.67, 2.67)">
                      <path clipRule="evenodd" d={svgPaths.p1bdcd800} fill="#1B1B1B" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
                <div className="flex-1 flex flex-col gap-[2px]">
                  <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] text-[22px] text-[#1b1b1b]">
                    How it works
                  </p>
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] text-[16px] text-[#1b1b1b]">
                    Select one or more network types below. Each selection creates a tab where you can provide TTPs specific to that network category. Choose your preferred view mode within each tab.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Network Selection Section */}
          <div className="border border-[#adadad] rounded-[4px] p-[25px] flex flex-col gap-[16px]">
            {/* Global No TTPs checkbox */}
            <button
              onClick={() => {
                setGlobalNoTTPs(!globalNoTTPs);
                if (!globalNoTTPs) {
                  setSelectedNetworks([]);
                  setActiveNetwork(null);
                }
              }}
              className="bg-white border-2 border-[#c9c9c9] rounded-[4px] pl-[8px] pr-[16px] py-[12px]"
            >
              <div className="flex gap-[8px] items-start w-full">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    {globalNoTTPs ? (
                      <>
                        <path d="M1.66667 0H18.3333C18.7754 0 19.1993 0.175595 19.5118 0.488155C19.8244 0.800716 20 1.22464 20 1.66667V18.3333C20 18.7754 19.8244 19.1993 19.5118 19.5118C19.1993 19.8244 18.7754 20 18.3333 20H1.66667C1.22464 20 0.800716 19.8244 0.488155 19.5118C0.175595 19.1993 0 18.7754 0 18.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0V0Z" fill="#0078AE" />
                        <path clipRule="evenodd" d="M15.0833 7.25C15.0802 7.40451 15.021 7.55261 14.9167 7.66667L10.1667 12.4167L9.25 13.3333C9.13594 13.4376 8.98785 13.4969 8.83333 13.5C8.67882 13.4969 8.53072 13.4376 8.41667 13.3333L7.5 12.4167L5.16667 10.0833C5.06238 9.96928 5.00314 9.82118 5 9.66667C5.00314 9.51215 5.06238 9.36406 5.16667 9.25L6.08333 8.33333C6.19739 8.22905 6.34549 8.16981 6.5 8.16667C6.65451 8.16981 6.80261 8.22905 6.91667 8.33333L8.83333 10.25L13.0833 6C13.1974 5.89571 13.3455 5.83648 13.5 5.83333C13.6545 5.83648 13.8026 5.89571 13.9167 6L14.8333 6.91667C15 7 15.0833 7.08333 15.0833 7.25V7.25Z" fill="white" fillRule="evenodd" />
                      </>
                    ) : (
                      <path d={svgPaths.p2f45a580} fill="#1B1B1B" />
                    )}
                  </svg>
                </div>
                <p className="flex-1 font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] text-[#1b1b1b] text-[16px] text-left">
                  There are no TTPs to report at this time
                </p>
              </div>
            </button>

            {/* Network Type Selection */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[22px] text-black">
                    Select the type of network and system where the TTPs were observed:
                  </p>
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[#757575] text-[16px]">
                    Select all that apply
                  </p>
                </div>
                {selectedNetworks.length > 0 && (
                  <div className="bg-[#0078ae] text-white px-[12px] py-[6px] rounded-[4px]">
                    <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[14px]">
                      {selectedNetworks.length} Selected
                    </p>
                  </div>
                )}
              </div>

              <button className="flex gap-[4px] items-center">
                <p className="decoration-solid font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] text-[#0078ae] text-[16px] underline">
                  Learn More
                </p>
                <div className="size-[16px] relative">
                  <svg className="absolute block size-full" fill="none" viewBox="0 0 16 16">
                    <g transform="scale(1 translate(1.33, 1.33)">
                      <path clipRule="evenodd" d={svgPaths.p13868300} fill="#0078AE" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
              </button>

              <div className="flex flex-col gap-[8px]">
                {NETWORK_TYPES.map(network => {
                  const isSelected = selectedNetworks.includes(network.type);
                  const isActive = activeNetwork === network.type;
                  return (
                    <div
                      key={network.type}
                      className={`bg-white rounded-[4px] border-2 relative ${
                        isSelected
                          ? 'border-[#0078ae] bg-[#e7f6f8]'
                          : 'border-[#c9c9c9]'
                      } ${
                        isActive ? 'ring-4 ring-[#0078ae] ring-opacity-30' : ''
                      } ${globalNoTTPs ? 'opacity-50' : ''}`}
                    >
                      <div className="flex flex-col gap-[8px] pl-[8px] pr-[16px] py-[12px]">
                        <button
                          onClick={() => !globalNoTTPs && toggleNetwork(network.type)}
                          disabled={globalNoTTPs}
                          className="flex gap-[8px] items-start w-full text-left"
                        >
                          <div className="relative shrink-0 size-[20px]">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              {isSelected ? (
                                <>
                                  <path d="M1.66667 0H18.3333C18.7754 0 19.1993 0.175595 19.5118 0.488155C19.8244 0.800716 20 1.22464 20 1.66667V18.3333C20 18.7754 19.8244 19.1993 19.5118 19.5118C19.1993 19.8244 18.7754 20 18.3333 20H1.66667C1.22464 20 0.800716 19.8244 0.488155 19.5118C0.175595 19.1993 0 18.7754 0 18.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0V0Z" fill="#0078AE" />
                                  <path clipRule="evenodd" d="M15.0833 7.25C15.0802 7.40451 15.021 7.55261 14.9167 7.66667L10.1667 12.4167L9.25 13.3333C9.13594 13.4376 8.98785 13.4969 8.83333 13.5C8.67882 13.4969 8.53072 13.4376 8.41667 13.3333L7.5 12.4167L5.16667 10.0833C5.06238 9.96928 5.00314 9.82118 5 9.66667C5.00314 9.51215 5.06238 9.36406 5.16667 9.25L6.08333 8.33333C6.19739 8.22905 6.34549 8.16981 6.5 8.16667C6.65451 8.16981 6.80261 8.22905 6.91667 8.33333L8.83333 10.25L13.0833 6C13.1974 5.89571 13.3455 5.83648 13.5 5.83333C13.6545 5.83648 13.8026 5.89571 13.9167 6L14.8333 6.91667C15 7 15.0833 7.08333 15.0833 7.25V7.25Z" fill="white" fillRule="evenodd" />
                                </>
                              ) : (
                                <path d={svgPaths.p2f45a580} fill="#1B1B1B" />
                              )}
                            </svg>
                          </div>
                          <div className="flex-1 flex flex-col items-start gap-[4px]">
                            <div className="flex items-center gap-[8px] w-full">
                              <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] text-[#1b1b1b] text-[16px] text-left">
                                {network.label}
                              </p>
                              {isActive && (
                                <span className="bg-[#fbca1b] text-[#1b1b1b] px-[8px] py-[2px] rounded-[4px] font-['Source_Sans_Pro:Bold',sans-serif] text-[12px]">
                                  Active Tab
                                </span>
                              )}
                            </div>
                          </div>
                        </button>
                        <div className="pl-[28px] flex items-center justify-between">
                          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] text-[#757575] text-[16px] text-left">
                            {network.description}
                          </p>
                          {isSelected && (
                            <button
                              onClick={() => setActiveNetwork(network.type)}
                              className="ml-[8px] px-[12px] py-[6px] bg-[#0078ae] text-white rounded-[4px] font-['Source_Sans_Pro:Bold',sans-serif] text-[14px] hover:bg-[#005a87] transition-colors"
                            >
                              View Details
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#DFE1E2]" />

          {/* Network Tabs or Empty State */}
          {selectedNetworks.length === 0 ? (
            <div className="bg-[#f9f9f9] border-2 border-dashed border-[#757575] rounded-[4px] h-[239px] relative flex items-center justify-center">
              <div className="flex flex-col items-center gap-[8px]">
                <svg className="size-[64px]" fill="none" viewBox="0 0 64 64">
                  <path d={svgPaths.paacb00} stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                </svg>
                <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[#565c65] text-[18px]">
                  No Network Types Selected
                </p>
                <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[#757575] text-[16px]">
                  Select at least one network type above to begin providing TTPs
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-[24px]">
              {/* Section Header - Hidden on mobile, shown on desktop */}
              <div className="hidden md:flex items-center justify-between">
                <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[22px] text-[#1b1b1b]">
                  Provide TTPs for Selected Networks
                </p>
                <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[#757575] text-[16px]">
                  {Array.from(selectedNetworks).filter(network => {
                    const state = networkStates[network];
                    return state.selectedTactics.length > 0 || state.selectedTechniques.length > 0 || state.selectedSubTechniques.length > 0 || state.noTTPs;
                  }).length} of {selectedNetworks.length} completed
                </p>
              </div>

              {/* Desktop: Horizontal Tabs */}
              <div className="hidden md:flex gap-[2px] border-b border-[#dfe1e2]">
                {selectedNetworks.map(network => {
                  const networkInfo = NETWORK_TYPES.find(n => n.type === network)!;
                  const isActive = activeNetwork === network;
                  const state = networkStates[network];
                  const hasCompletedTTPs = state.selectedTactics.length > 0 || state.selectedTechniques.length > 0 || state.selectedSubTechniques.length > 0 || state.noTTPs;
                  
                  return (
                    <button
                      key={network}
                      onClick={() => setActiveNetwork(network)}
                      className={`relative px-[16px] py-[12px] font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] border-b-[3px] transition-colors ${
                        isActive
                          ? 'border-[#0078ae] text-[#0078ae] bg-white'
                          : 'border-transparent text-[#565c65] hover:text-[#1b1b1b]'
                      }`}
                    >
                      {networkInfo.label}
                      {hasCompletedTTPs && (
                        <div className="absolute top-[15px] right-[8px] bg-[#1b1b1b] rounded-full size-[20px] flex items-center justify-center">
                          <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[12px] text-white">!</p>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Mobile: Accordion Sections */}
              <div className="flex flex-col gap-[16px] md:hidden">
                <div className="flex items-center justify-between">
                  <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[18px] text-[#1b1b1b]">
                    Provide TTPs for Selected Networks
                  </p>
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[#757575] text-[14px]">
                    {Array.from(selectedNetworks).filter(network => {
                      const state = networkStates[network];
                      return state.selectedTactics.length > 0 || state.selectedTechniques.length > 0 || state.selectedSubTechniques.length > 0 || state.noTTPs;
                    }).length} of {selectedNetworks.length}
                  </p>
                </div>

                {selectedNetworks.map(network => {
                  const networkInfo = NETWORK_TYPES.find(n => n.type === network)!;
                  const isExpanded = activeNetwork === network;
                  const state = networkStates[network];
                  const hasCompletedTTPs = state.selectedTactics.length > 0 || state.selectedTechniques.length > 0 || state.selectedSubTechniques.length > 0 || state.noTTPs;
                  
                  return (
                    <div key={network} className="border-2 border-[#c9c9c9] rounded-[4px] overflow-hidden">
                      {/* Accordion Header */}
                      <button
                        onClick={() => setActiveNetwork(isExpanded ? null : network)}
                        className={`w-full px-4 py-3 flex items-center justify-between transition-colors ${
                          isExpanded ? 'bg-[#e7f6f8] border-b-2 border-[#0078ae]' : 'bg-white hover:bg-[#f9f9f9]'
                        }`}
                      >
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-2">
                            <p className={`font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] ${
                              isExpanded ? 'text-[#0078ae]' : 'text-[#1b1b1b]'
                            }`}>
                              {networkInfo.label}
                            </p>
                            {hasCompletedTTPs && (
                              <div className="bg-[#1b1b1b] rounded-full size-[20px] flex items-center justify-center">
                                <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[12px] text-white">!</p>
                              </div>
                            )}
                          </div>
                          <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] text-[#757575] mt-1">
                            {networkInfo.description}
                          </p>
                        </div>
                        
                        {/* Chevron Icon */}
                        <div className="ml-3">
                          <svg 
                            className={`size-[20px] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              d="M5 7.5L10 12.5L15 7.5" 
                              stroke={isExpanded ? '#0078ae' : '#757575'} 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </button>
                      
                      {/* Accordion Content */}
                      {isExpanded && (
                        <div className="p-4 bg-white">
                          <NetworkTabContent
                            network={network}
                            state={state}
                            onUpdateState={(updates) => updateNetworkState(network, updates)}
                            onLearnMore={handleLearnMore}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Desktop: Active Network Content */}
              <div className="hidden md:block">
                {activeNetwork && (
                  <NetworkTabContent
                    network={activeNetwork}
                    state={networkStates[activeNetwork]}
                    onUpdateState={(updates) => updateNetworkState(activeNetwork, updates)}
                    onLearnMore={handleLearnMore}
                  />
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-col gap-[16px] mt-[32px] border-t border-[#dfe1e2] pt-[24px]">
                {/* Error/Warning Messages */}
                {(() => {
                  const completedNetworks = selectedNetworks.filter(network => {
                    const state = networkStates[network];
                    return state.selectedTactics.length > 0 || state.selectedTechniques.length > 0 || state.selectedSubTechniques.length > 0 || state.noTTPs;
                  });

                  const incompleteNetworks = selectedNetworks.filter(network => {
                    const state = networkStates[network];
                    return !(state.selectedTactics.length > 0 || state.selectedTechniques.length > 0 || state.selectedSubTechniques.length > 0 || state.noTTPs);
                  });

                  if (incompleteNetworks.length > 0) {
                    return (
                      <div className="bg-[#fef6e8] border-2 border-[#fbca1b] rounded-[4px] p-[16px] flex gap-[12px] items-start">
                        <div className="size-[24px] shrink-0">
                          <svg viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" fill="#fbca1b" />
                            <path d="M12 7v6M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] text-[#1b1b1b]">
                            Incomplete Networks
                          </p>
                          <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] text-[#1b1b1b]">
                            Please provide TTPs for the following networks before proceeding: {incompleteNetworks.map(n => NETWORK_TYPES.find(nt => nt.type === n)?.label).join(', ')}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })()}

                {/* Back and Next Buttons */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => {
                      // Scroll to top or navigate back
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-[24px] py-[12px] border-2 border-[#0078ae] text-[#0078ae] rounded-[4px] font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] hover:bg-[#e7f6f8] transition-colors"
                  >
                    Back
                  </button>

                  <button
                    onClick={() => {
                      const completedNetworks = selectedNetworks.filter(network => {
                        const state = networkStates[network];
                        return state.selectedTactics.length > 0 || state.selectedTechniques.length > 0 || state.selectedSubTechniques.length > 0 || state.noTTPs;
                      });

                      if (completedNetworks.length === selectedNetworks.length) {
                        // All networks completed, proceed to next step
                        alert('All networks completed! Proceeding to next step...');
                        // Add your navigation logic here
                      } else {
                        // Show error
                        const incompleteNetworks = selectedNetworks.filter(network => {
                          const state = networkStates[network];
                          return !(state.selectedTactics.length > 0 || state.selectedTechniques.length > 0 || state.selectedSubTechniques.length > 0 || state.noTTPs);
                        });

                        alert(`Please complete TTPs for: ${incompleteNetworks.map(n => NETWORK_TYPES.find(nt => nt.type === n)?.label).join(', ')}`);
                      }
                    }}
                    className="px-[24px] py-[12px] bg-[#0078ae] text-white rounded-[4px] font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] hover:bg-[#005a87] transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Technique Details Side Panel */}
      {sidePanelOpen && selectedDetailTechnique && (
        <TechniqueDetailsPanel
          technique={selectedDetailTechnique}
          subTechnique={selectedDetailSubTechnique}
          onClose={() => {
            setSidePanelOpen(false);
            setSelectedDetailTechnique(null);
            setSelectedDetailSubTechnique(null);
          }}
        />
      )}
    </div>
  );
}

interface NetworkTabContentProps {
  network: NetworkType;
  state: NetworkState;
  onUpdateState: (updates: Partial<NetworkState>) => void;
  onLearnMore: (technique: TechniqueData, subTechnique?: SubTechnique) => void;
}

function NetworkTabContent({ network, state, onUpdateState, onLearnMore }: NetworkTabContentProps) {
  return (
    <div className="flex flex-col gap-[24px]">
      {/* Network-specific No TTPs */}
      <button
        onClick={() => onUpdateState({ noTTPs: !state.noTTPs })}
        className="bg-white border-2 border-[#c9c9c9] rounded-[4px] pl-[8px] pr-[16px] py-[12px]"
      >
        <div className="flex gap-[8px] items-start w-full">
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              {state.noTTPs ? (
                <>
                  <path d="M1.66667 0H18.3333C18.7754 0 19.1993 0.175595 19.5118 0.488155C19.8244 0.800716 20 1.22464 20 1.66667V18.3333C20 18.7754 19.8244 19.1993 19.5118 19.5118C19.1993 19.8244 18.7754 20 18.3333 20H1.66667C1.22464 20 0.800716 19.8244 0.488155 19.5118C0.175595 19.1993 0 18.7754 0 18.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0V0Z" fill="#0078AE" />
                  <path clipRule="evenodd" d="M15.0833 7.25C15.0802 7.40451 15.021 7.55261 14.9167 7.66667L10.1667 12.4167L9.25 13.3333C9.13594 13.4376 8.98785 13.4969 8.83333 13.5C8.67882 13.4969 8.53072 13.4376 8.41667 13.3333L7.5 12.4167L5.16667 10.0833C5.06238 9.96928 5.00314 9.82118 5 9.66667C5.00314 9.51215 5.06238 9.36406 5.16667 9.25L6.08333 8.33333C6.19739 8.22905 6.34549 8.16981 6.5 8.16667C6.65451 8.16981 6.80261 8.22905 6.91667 8.33333L8.83333 10.25L13.0833 6C13.1974 5.89571 13.3455 5.83648 13.5 5.83333C13.6545 5.83648 13.8026 5.89571 13.9167 6L14.8333 6.91667C15 7 15.0833 7.08333 15.0833 7.25V7.25Z" fill="white" fillRule="evenodd" />
                </>
              ) : (
                <path d="M1 1H19V19H1V1Z" stroke="#1B1B1B" strokeWidth="2" fill="none" />
              )}
            </svg>
          </div>
          <p className="flex-1 font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] text-[#1b1b1b] text-[16px] text-left">
            No TTPs to report for this network
          </p>
        </div>
      </button>

      {!state.noTTPs && (
        <>
          {/* View Mode Selection */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[18px] text-[#1b1b1b]">
              Change view mode:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[16px]">
              <ViewModeCard
                mode="simple"
                label="Simple View"
                description="Recommended for clarity"
                category="Without Using MITRE Framework"
                isSelected={state.viewMode === 'simple'}
                onClick={() => onUpdateState({ viewMode: 'simple' })}
              />
              <ViewModeCard
                mode="intermediate"
                label="Intermediate View"
                description="Filterable cards with search"
                category="Using MITRE Framework"
                isSelected={state.viewMode === 'intermediate'}
                onClick={() => onUpdateState({ viewMode: 'intermediate' })}
              />
              <div className="hidden md:block">
                <ViewModeCard
                  mode="matrix"
                  label="Matrix View"
                  description="Recommended for experts"
                  category="Using MITRE Framework"
                  isSelected={state.viewMode === 'matrix'}
                  onClick={() => onUpdateState({ viewMode: 'matrix' })}
                />
              </div>
            </div>
          </div>

          {/* Selected Tactics/Techniques Display */}
          {(state.selectedTactics.length > 0 || state.selectedTechniques.length > 0 || state.selectedSubTechniques.length > 0) && (
            <SelectedTTPsDisplay
              selectedTactics={state.selectedTactics}
              selectedTechniques={state.selectedTechniques}
              selectedSubTechniques={state.selectedSubTechniques}
            />
          )}

          {/* Current View Indicator */}
          <div className="bg-[#fef6e8] border border-[#fbca1b] rounded-[4px] p-[16px] flex gap-[12px] items-start">
            <div className="size-[24px] shrink-0">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#fbca1b" />
                <path d="M12 7v6M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] text-[#1b1b1b]">
                Current View: {state.viewMode === 'simple' ? 'Simple View' : state.viewMode === 'intermediate' ? 'Intermediate View' : 'Matrix View'}
              </p>
              <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] text-[#1b1b1b]">
                {state.viewMode === 'simple' && 'Selection for tactics'}
                {state.viewMode === 'intermediate' && 'Filterable technique cards'}
                {state.viewMode === 'matrix' && 'Full MITRE ATT&CK matrix'}
              </p>
            </div>
          </div>

          {/* View Component */}
          {state.viewMode === 'simple' && (
            <SimpleView
              networkType={network}
              selectedTactics={state.selectedTactics}
              selectedTechniques={state.selectedTechniques}
              selectedSubTechniques={state.selectedSubTechniques}
              onToggleTactic={(tactic) => {
                const isSelected = state.selectedTactics.includes(tactic);
                onUpdateState({
                  selectedTactics: isSelected
                    ? state.selectedTactics.filter(t => t !== tactic)
                    : [...state.selectedTactics, tactic]
                });
              }}
              onToggleTechnique={(technique) => {
                const isSelected = state.selectedTechniques.includes(technique);
                onUpdateState({
                  selectedTechniques: isSelected
                    ? state.selectedTechniques.filter(t => t !== technique)
                    : [...state.selectedTechniques, technique]
                });
              }}
              onToggleSubTechnique={(subTechnique) => {
                const isSelected = state.selectedSubTechniques.includes(subTechnique);
                onUpdateState({
                  selectedSubTechniques: isSelected
                    ? state.selectedSubTechniques.filter(st => st !== subTechnique)
                    : [...state.selectedSubTechniques, subTechnique]
                });
              }}
              onLearnMore={onLearnMore}
            />
          )}
          
          {state.viewMode === 'intermediate' && (
            <IntermediateView
              networkType={network}
              selectedTechniques={state.selectedTechniques}
              selectedSubTechniques={state.selectedSubTechniques}
              onToggleTechnique={(technique) => {
                const isSelected = state.selectedTechniques.includes(technique);
                onUpdateState({
                  selectedTechniques: isSelected
                    ? state.selectedTechniques.filter(t => t !== technique)
                    : [...state.selectedTechniques, technique]
                });
              }}
              onToggleSubTechnique={(subTechnique) => {
                const isSelected = state.selectedSubTechniques.includes(subTechnique);
                onUpdateState({
                  selectedSubTechniques: isSelected
                    ? state.selectedSubTechniques.filter(st => st !== subTechnique)
                    : [...state.selectedSubTechniques, subTechnique]
                });
              }}
              onLearnMore={onLearnMore}
            />
          )}
          
          {state.viewMode === 'matrix' && (
            <MatrixView
              networkType={network}
              selectedTechniques={state.selectedTechniques}
              selectedSubTechniques={state.selectedSubTechniques}
              onToggleTechnique={(technique) => {
                const isSelected = state.selectedTechniques.includes(technique);
                onUpdateState({
                  selectedTechniques: isSelected
                    ? state.selectedTechniques.filter(t => t !== technique)
                    : [...state.selectedTechniques, technique]
                });
              }}
              onToggleSubTechnique={(subTechnique) => {
                const isSelected = state.selectedSubTechniques.includes(subTechnique);
                onUpdateState({
                  selectedSubTechniques: isSelected
                    ? state.selectedSubTechniques.filter(st => st !== subTechnique)
                    : [...state.selectedSubTechniques, subTechnique]
                });
              }}
              onLearnMore={onLearnMore}
            />
          )}
        </>
      )}
    </div>
  );
}

interface ViewModeCardProps {
  mode: ViewMode;
  label: string;
  description: string;
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

function ViewModeCard({ mode, label, description, category, isSelected, onClick }: ViewModeCardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 border-2 rounded-[4px] text-left ${ isSelected ? 'border-[#0078ae] bg-[#e7f6f8]' : 'border-[#c9c9c9] bg-white' } p-[8px]`}
    >
      <div className="flex flex-col gap-[8px]">
        <div className="flex items-center gap-[8px]">
          <div className="size-[20px] shrink-0">
            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
              {isSelected ? (
                <>
                  <circle cx="10" cy="10" r="9" stroke="#0078ae" strokeWidth="2" fill="white" />
                  <circle cx="10" cy="10" r="5" fill="#0078ae" />
                </>
              ) : (
                <circle cx="10" cy="10" r="9" stroke="#757575" strokeWidth="2" fill="white" />
              )}
            </svg>
          </div>
          <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] text-[#1b1b1b] m-[0px] p-[0px]">
            {label}
          </p>
        </div>
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] text-[#757575]">
          {description}
        </p>
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[12px] text-[#0078ae]">
          {category}
        </p>
      </div>
    </button>
  );
}

interface SelectedTTPsDisplayProps {
  selectedTactics: string[];
  selectedTechniques: string[];
  selectedSubTechniques: string[];
}

function SelectedTTPsDisplay({ selectedTactics, selectedTechniques, selectedSubTechniques }: SelectedTTPsDisplayProps) {
  // Flatten all techniques from MITRE data for lookup
  const allTechniques: TechniqueData[] = Object.values(MITRE_TECHNIQUES).flat();
  
  // Build display items with hierarchy
  const displayItems: Array<{
    type: 'tactic' | 'technique' | 'subtechnique';
    tactic: string;
    technique?: TechniqueData;
    subTechnique?: SubTechnique;
  }> = [];

  // Add tactic-only selections (dark blue)
  selectedTactics.forEach(tactic => {
    // Check if there's a technique selected under this tactic
    const techniqueUnderTactic = selectedTechniques.find(techId => {
      const tech = allTechniques.find(t => t.id === techId);
      return tech?.tactic === tactic;
    });
    
    // Only show tactic if no technique is selected under it
    if (!techniqueUnderTactic) {
      displayItems.push({ type: 'tactic', tactic });
    }
  });

  // Add technique selections (medium blue) - with tactic breadcrumb
  selectedTechniques.forEach(techId => {
    const technique = allTechniques.find(t => t.id === techId);
    if (technique) {
      // Check if there's a sub-technique selected under this technique
      const subTechniqueUnder = selectedSubTechniques.find(subId => subId.startsWith(techId + '.'));
      
      // Only show technique if no sub-technique is selected under it
      if (!subTechniqueUnder) {
        displayItems.push({ type: 'technique', tactic: technique.tactic, technique });
      }
    }
  });

  // Add sub-technique selections (light blue) - with full breadcrumb
  selectedSubTechniques.forEach(subTechId => {
    // Find parent technique
    const parentTechId = subTechId.split('.')[0];
    const technique = allTechniques.find(t => t.id === parentTechId);
    if (technique) {
      const subTechnique = technique.subTechniques?.find(st => st.id === subTechId);
      if (subTechnique) {
        displayItems.push({ 
          type: 'subtechnique', 
          tactic: technique.tactic, 
          technique, 
          subTechnique 
        });
      }
    }
  });

  const totalCount = displayItems.length;

  return (
    <div className="bg-[#e7f6f8] border border-[#0078ae] rounded-[4px] p-3 md:p-[17px]">
      <div className="flex flex-col gap-2 md:gap-[8px]">
        <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[14px] md:text-[16px] text-[#1b1b1b]">
          Selected Tactics and Techniques ({totalCount}):
        </p>
        
        <div className="flex flex-wrap gap-2 md:gap-[8px]">
          {displayItems.map((item, index) => {
            if (item.type === 'tactic') {
              // Dark blue - Tactic only
              return (
                <div key={`tactic-${item.tactic}-${index}`} className="px-2 md:px-[10px] py-1 md:py-[5px] rounded-[4px] flex items-center gap-2 bg-[#005288]">
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[12px] md:text-[14px] text-white leading-tight md:leading-[21px] break-words">
                    {item.tactic}
                  </p>
                </div>
              );
            } else if (item.type === 'technique') {
              // Medium blue - Tactic > Technique
              return (
                <div key={`tech-${item.technique!.id}-${index}`} className="bg-[#0078ae] px-2 md:px-[10px] py-1 md:py-[5px] rounded-[4px] flex flex-wrap items-center gap-1 md:gap-[4px] min-h-[28px] md:min-h-[31px]">
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[11px] md:text-[14px] text-white leading-tight md:leading-[21px]">
                    {item.tactic}
                  </p>
                  <div className="size-[16px] md:size-[24px] flex items-center justify-center shrink-0">
                    <svg className="size-[8px] md:size-[12px]" fill="none" viewBox="0 0 12 12">
                      <path d={chevronSvg.p25284240} fill="white" fillRule="evenodd" clipRule="evenodd" transform="scale(0.75)" />
                    </svg>
                  </div>
                  <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[11px] md:text-[14px] text-white leading-tight md:leading-[21px] break-words">
                    {item.technique!.id}: {item.technique!.name}
                  </p>
                </div>
              );
            } else {
              // Light blue - Tactic > Technique > Sub-technique
              return (
                <div key={`subtech-${item.subTechnique!.id}-${index}`} className="bg-[#7ab9d5] px-2 md:px-[10px] py-1 md:py-[5px] rounded-[4px] flex flex-wrap items-center gap-1 md:gap-[4px] min-h-[28px] md:min-h-[31px]">
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[11px] md:text-[14px] text-[#035] leading-tight md:leading-[21px]">
                    {item.tactic}
                  </p>
                  <div className="size-[16px] md:size-[24px] flex items-center justify-center shrink-0">
                    <svg className="size-[8px] md:size-[12px]" fill="none" viewBox="0 0 12 12">
                      <path d={chevronSvg.p25284240} fill="#035" fillRule="evenodd" clipRule="evenodd" transform="scale(0.75)" />
                    </svg>
                  </div>
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[11px] md:text-[14px] text-[#035] leading-tight md:leading-[21px]">
                    {item.technique!.id}: {item.technique!.name}
                  </p>
                  <div className="size-[16px] md:size-[24px] flex items-center justify-center shrink-0">
                    <svg className="size-[8px] md:size-[12px]" fill="none" viewBox="0 0 12 12">
                      <path d={chevronSvg.p25284240} fill="#035" fillRule="evenodd" clipRule="evenodd" transform="scale(0.75)" />
                    </svg>
                  </div>
                  <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[11px] md:text-[14px] text-[#035] leading-tight md:leading-[21px] break-words">
                    {item.subTechnique!.id}: {item.subTechnique!.name}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}