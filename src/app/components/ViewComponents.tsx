import { useState } from 'react';
import { TechniqueCard, TechniqueData, SubTechnique } from './TechniqueCard';
import { TechniqueDetailsPanel } from './TechniqueDetailsPanel';
import { getMitreTechniques } from '../data/mitreData';
import { CustomCheckbox } from './CustomCheckbox';
import chevronSvg from '../../imports/svg-41sujrmk6v';

interface ViewProps {
  networkType: 'enterprise' | 'ot' | 'mobile';
  selectedTechniques: string[];
  selectedSubTechniques: string[];
  onToggleTechnique: (id: string) => void;
  onToggleSubTechnique: (id: string) => void;
  onLearnMore: (technique: TechniqueData, subTechnique?: SubTechnique) => void;
}

export function IntermediateView({ networkType, selectedTechniques, selectedSubTechniques, onToggleTechnique, onToggleSubTechnique, onLearnMore }: ViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTactic, setSelectedTactic] = useState('All Tactics');
  const [selectedPlatform, setSelectedPlatform] = useState('All Platforms');
  const [currentPage, setCurrentPage] = useState(1);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedTechniqueForPanel, setSelectedTechniqueForPanel] = useState<TechniqueData | null>(null);
  const [selectedSubTechniqueForPanel, setSelectedSubTechniqueForPanel] = useState<SubTechnique | null>(null);

  // Get MITRE data for the current network type
  const MITRE_TECHNIQUES = getMitreTechniques(networkType);

  // Get tactics based on network type
  const getTactics = () => {
    const allTactics = Object.keys(MITRE_TECHNIQUES);
    return ['All Tactics', ...allTactics];
  };

  const tactics = getTactics();

  // Get platforms based on network type
  const getPlatforms = () => {
    if (networkType === 'ot') {
      // No platform filter for OT
      return [];
    } else if (networkType === 'mobile') {
      return ['All Platforms', 'Android', 'iOS'];
    } else {
      // Enterprise platforms
      return [
        'All Platforms',
        'Windows',
        'macOS',
        'Linux',
        'Office Suite',
        'Identity Provider',
        'SaaS',
        'IaaS',
        'Network Devices',
        'Containers',
        'ESXi'
      ];
    }
  };

  const platforms = getPlatforms();

  // Flatten all techniques from MITRE data
  const allTechniques: TechniqueData[] = Object.values(MITRE_TECHNIQUES).flat();

  const filteredTechniques = allTechniques.filter(tech => {
    const matchesSearch = tech.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tech.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTactic = selectedTactic === 'All Tactics' || tech.tactic === selectedTactic;
    const matchesPlatform = selectedPlatform === 'All Platforms' || 
                           !tech.platforms ||
                           tech.platforms.length === 0 ||
                           tech.platforms.includes(selectedPlatform);
    return matchesSearch && matchesTactic && matchesPlatform;
  });

  // Pagination logic
  const itemsPerPage = 16; // 4 rows × 4 columns
  const totalPages = Math.ceil(filteredTechniques.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTechniques = filteredTechniques.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleTacticChange = (tactic: string) => {
    setSelectedTactic(tactic);
    setCurrentPage(1);
  };

  const handlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Count techniques per tactic
  const getTechniqueCount = (tactic: string) => {
    return allTechniques.filter(tech => tech.tactic === tactic).length;
  };

  const handleBackToTechnique = () => {
    setSelectedSubTechniqueForPanel(null);
  };

  const handleSubTechniqueClick = (subTech: SubTechnique) => {
    setSelectedSubTechniqueForPanel(subTech);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className={platforms.length > 0 ? "grid grid-cols-1 md:grid-cols-2 gap-4" : ""}>
        <div>
          <label className="font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] text-[#1b1b1b] block mb-2">
            Search Technique Name or ID
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search Technique Name or ID"
              className="w-full px-3 py-2 pr-10 border border-[#1b1b1b] font-['Source_Sans_Pro:Regular',sans-serif] text-[16px] focus:outline-none focus:border-[#0078ae] focus:ring-2 focus:ring-[#0078ae]"
            />
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#005288]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Only show Platform Filter for Enterprise and Mobile */}
        {platforms.length > 0 && (
          <div>
            <label className="font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] text-[#1b1b1b] block mb-2">
              Platform Filter
            </label>
            <select
              value={selectedPlatform}
              onChange={(e) => handlePlatformChange(e.target.value)}
              className="w-full px-3 py-2 border border-[#1b1b1b] font-['Source_Sans_Pro:Regular',sans-serif] text-[16px] focus:outline-none focus:border-[#0078ae] focus:ring-2 focus:ring-[#0078ae]"
            >
              {platforms.map(platform => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
          </div>
        )}

        
      </div>

      {/* Tactics Filter Pills */}
      <div className="flex flex-wrap gap-2 items-center">
        <div className="flex items-center h-[35px]">
          <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] text-[#1b1b1b] whitespace-nowrap">
            Tactics Filter:
          </p>
        </div>
        
        {/* All Tactics Button */}
        <button
          onClick={() => setSelectedTactic('All Tactics')}
          className={`
            ${selectedTactic === 'All Tactics' 
              ? 'bg-[#005288] text-white' 
              : 'bg-white text-[#757575]'
            }
            flex items-center justify-center px-4 py-2 rounded-[100px] transition-colors relative
          `}
        >
          <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[15px] whitespace-nowrap">
            All Tactics
          </p>
          {selectedTactic !== 'All Tactics' && (
            <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
          )}
        </button>

        {/* Individual Tactic Buttons */}
        {tactics.slice(1).map(tactic => {
          const isSelected = selectedTactic === tactic;
          
          return (
            <button
              key={tactic}
              onClick={() => setSelectedTactic(isSelected ? 'All Tactics' : tactic)}
              className={`
                ${isSelected 
                  ? 'bg-[#005288] text-white' 
                  : 'bg-white text-[#757575]'
                }
                flex items-center justify-center px-4 py-2 rounded-[100px] transition-colors relative
              `}
            >
              <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[15px] whitespace-nowrap">
                {tactic}
              </p>
              {!isSelected && (
                <div aria-hidden="true" className="absolute border-2 border-[#757575] border-solid inset-0 pointer-events-none rounded-[100px]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Results Summary */}
      <div className="bg-[#f0f0f0] border border-[#757575] rounded px-4 py-3">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] text-[#1b1b1b]">
          <strong>Techniques Filtered By:</strong> Platform: {selectedPlatform} • Tactic: {selectedTactic}
        </p>
      </div>

      {/* Pagination - Top */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] px-4 py-2 bg-white border border-[#757575] text-[#0078ae] rounded hover:bg-[#f0f0f0]"
            >
              ← Previous
            </button>
          )}
          
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`
                  ${currentPage === pageNum 
                    ? "font-['Source_Sans_Pro:Bold',sans-serif] bg-[#1b1b1b] text-white" 
                    : "font-['Source_Sans_Pro:Regular',sans-serif] bg-white border border-[#757575] text-[#1b1b1b] hover:bg-[#f0f0f0]"
                  }
                  text-[14px] px-4 py-2 rounded
                `}
              >
                {pageNum}
              </button>
            );
          })}
          
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] px-4 py-2 bg-white border border-[#757575] text-[#0078ae] rounded hover:bg-[#f0f0f0]"
            >
              Next →
            </button>
          )}
        </div>
      )}

      {/* Technique Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {paginatedTechniques.map(technique => (
          <TechniqueCard
            key={`${technique.tactic}-${technique.id}`}
            technique={technique}
            isSelected={selectedTechniques.includes(technique.id)}
            selectedSubTechniques={selectedSubTechniques}
            onToggleTechnique={onToggleTechnique}
            onToggleSubTechnique={onToggleSubTechnique}
            onLearnMore={onLearnMore}
            variant="card"
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] px-4 py-2 bg-white border border-[#757575] text-[#0078ae] rounded hover:bg-[#f0f0f0]"
            >
              ← Previous
            </button>
          )}
          
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`
                  ${currentPage === pageNum 
                    ? "font-['Source_Sans_Pro:Bold',sans-serif] bg-[#1b1b1b] text-white" 
                    : "font-['Source_Sans_Pro:Regular',sans-serif] bg-white border border-[#757575] text-[#1b1b1b] hover:bg-[#f0f0f0]"
                  }
                  text-[14px] px-4 py-2 rounded
                `}
              >
                {pageNum}
              </button>
            );
          })}
          
          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] px-4 py-2 bg-white border border-[#757575] text-[#0078ae] rounded hover:bg-[#f0f0f0]"
            >
              Next →
            </button>
          )}
        </div>
      )}

      {/* Technique Details Panel */}
      <TechniqueDetailsPanel
        isOpen={isPanelOpen}
        technique={selectedTechniqueForPanel}
        subTechnique={selectedSubTechniqueForPanel}
        onClose={() => setIsPanelOpen(false)}
        onBackToTechnique={handleBackToTechnique}
        onSubTechniqueClick={handleSubTechniqueClick}
      />
    </div>
  );
}

export function MatrixView({ networkType, selectedTechniques, selectedSubTechniques, onToggleTechnique, onToggleSubTechnique, onLearnMore }: ViewProps) {
  const [showMatrix, setShowMatrix] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [platformFilter, setPlatformFilter] = useState('All Platforms');
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedTechniqueForPanel, setSelectedTechniqueForPanel] = useState<TechniqueData | null>(null);
  const [selectedSubTechniqueForPanel, setSelectedSubTechniqueForPanel] = useState<SubTechnique | null>(null);

  // Get MITRE data for the current network type
  const MITRE_TECHNIQUES = getMitreTechniques(networkType);

  // Get dynamic matrix title based on network type
  const getMatrixTitle = () => {
    switch (networkType) {
      case 'enterprise':
        return 'MITRE ATT&CK Enterprise Matrix';
      case 'mobile':
        return 'MITRE ATT&CK Mobile Devices';
      case 'ot':
        return 'MITRE ATT&CK OT/ICS';
      default:
        return 'MITRE ATT&CK Matrix';
    }
  };

  // Get platforms based on network type
  const getPlatforms = () => {
    if (networkType === 'ot') {
      // No platform filter for OT
      return [];
    } else if (networkType === 'mobile') {
      return ['All Platforms', 'Android', 'iOS'];
    } else {
      // Enterprise platforms
      return [
        'All Platforms',
        'Windows',
        'macOS',
        'Linux',
        'Office Suite',
        'Identity Provider',
        'SaaS',
        'IaaS',
        'Network Devices',
        'Containers',
        'ESXi'
      ];
    }
  };

  // Build selected items display
  const getSelectedItems = () => {
    const items: Array<{
      type: 'tactic' | 'technique-chain';
      tactic: string;
      tacticId: string;
      technique?: TechniqueData;
      subTechnique?: SubTechnique;
    }> = [];

    // Track which tactics have technique selections
    const tacticsWithTechniques = new Set<string>();
    const processedTactics = new Set<string>();

    // First, process all technique and sub-technique selections
    Object.entries(MITRE_TECHNIQUES).forEach(([tactic, techniques]) => {
      techniques.forEach(technique => {
        const isTechniqueSelected = selectedTechniques.includes(technique.id);
        const selectedSubs = technique.subTechniques?.filter(st => 
          selectedSubTechniques.includes(st.id)
        ) || [];

        if (isTechniqueSelected && selectedSubs.length === 0) {
          // Technique only (no sub-techniques selected)
          items.push({
            type: 'technique-chain',
            tactic: tactic,
            tacticId: getTacticId(tactic),
            technique: technique
          });
          tacticsWithTechniques.add(tactic);
        } else if (selectedSubs.length > 0) {
          // Each selected sub-technique gets its own chain
          selectedSubs.forEach(subTech => {
            items.push({
              type: 'technique-chain',
              tactic: tactic,
              tacticId: getTacticId(tactic),
              technique: technique,
              subTechnique: subTech
            });
          });
          tacticsWithTechniques.add(tactic);
        }
      });
    });

    // Then add tactic-only selections (tactics with no technique selections)
    Object.keys(MITRE_TECHNIQUES).forEach(tactic => {
      if (!tacticsWithTechniques.has(tactic)) {
        // This is a tactic-only selection (would need to track this separately in the parent)
        // For now, we'll only show tactics that have technique selections
      }
    });

    return items;
  };

  // Helper to get tactic ID (simplified - in real implementation would map properly)
  const getTacticId = (tactic: string) => {
    const tacticMap: Record<string, string> = {
      'Reconnaissance': 'TA0043',
      'Resource Development': 'TA0042',
      'Initial Access': 'TA0001',
      'Execution': 'TA0002',
      'Persistence': 'TA0003',
      'Privilege Escalation': 'TA0004',
      'Defense Evasion': 'TA0005',
      'Credential Access': 'TA0006',
      'Discovery': 'TA0007',
      'Lateral Movement': 'TA0008',
      'Collection': 'TA0009',
      'Command and Control': 'TA0011',
      'Exfiltration': 'TA0010',
      'Impact': 'TA0040',
      // OT/ICS
      'Impair Process Control': 'TA0106',
      'Inhibit Response Function': 'TA0107',
      // Mobile
      'Network Effects': 'TA0030',
      'Remote Service Effects': 'TA0031'
    };
    return tacticMap[tactic] || 'TA0000';
  };

  const platforms = getPlatforms();
  const matrixTitle = getMatrixTitle();
  const selectedItems = getSelectedItems();

  const handleBackToTechnique = () => {
    setSelectedSubTechniqueForPanel(null);
  };

  const handleSubTechniqueClick = (subTech: SubTechnique) => {
    setSelectedSubTechniqueForPanel(subTech);
  };

  return (
    <div className="space-y-6">
      {/* Matrix Trigger Button */}
      <div className="hidden md:block bg-[#f0f0f0] border border-[#757575] rounded p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-['Source_Sans_Pro:Bold',sans-serif] text-[18px] text-[#1b1b1b] mb-2">
              {matrixTitle}
            </h3>
            <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] text-[#757575] mb-4">
              Select techniques and sub-techniques to build your threat model
            </p>
          </div>
          <button
            onClick={() => setShowMatrix(true)}
            className="font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] px-6 py-3 bg-[#0078ae] text-white rounded hover:bg-[#005288] transition-colors"
          >
            Open Matrix View
          </button>
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        
        
        
      </div>

      {/* Matrix Modal */}
      {showMatrix && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-[95vw] my-8">
            {/* Modal Header */}
            <div className="bg-white border-b border-[#d9d9d9] px-6 py-4 flex items-center justify-between sticky top-0 z-10">
              <div>
                <h2 className="font-['Source_Sans_Pro:Bold',sans-serif] text-[24px] text-[#1b1b1b]">
                  {matrixTitle}
                </h2>
                <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] text-[#757575]">
                  Select techniques and sub-techniques to build your threat model
                </p>
              </div>
              <button
                onClick={() => setShowMatrix(false)}
                className="text-[#757575] hover:text-[#1b1b1b] p-2"
                aria-label="Close matrix"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Selected Tactics and Techniques Section */}
            {selectedItems.length > 0 && (
              <div className="bg-white border-b border-[#d9d9d9] sticky top-[92px] z-10">
                <div className="p-4">
                  <div className="bg-[#e7f6f8] border border-[#0078ae] rounded p-[17px]">
                    <div className="flex flex-col gap-[8px]">
                      {/* Header */}
                      <div className="flex flex-wrap items-center">
                        <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] text-[#1b1b1b]">
                          Selected Tactics and Techniques ({selectedItems.length}):
                        </p>
                      </div>
                      
                      {/* Selected Items */}
                      <div className="flex flex-wrap gap-[8px]">
                        {selectedItems.map((item, index) => {
                          if (item.type === 'tactic') {
                            // Tactic only - dark blue
                            return (
                              <div
                                key={`tactic-${index}`}
                                className="bg-[#003e67] flex items-center px-[10px] py-[5px] rounded"
                              >
                                <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] text-white whitespace-nowrap">
                                  {item.tacticId} {item.tactic}
                                </p>
                              </div>
                            );
                          } else {
                            // Technique chain
                            const isTechniqueOnly = !item.subTechnique;
                            const bgColor = isTechniqueOnly ? '#0078ae' : '#7ab9d5';
                            const textColor = isTechniqueOnly ? 'white' : '#003355';
                            
                            return (
                              <div
                                key={`chain-${index}`}
                                className="flex items-center px-[10px] py-[5px] rounded"
                                style={{ backgroundColor: bgColor }}
                              >
                                <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] whitespace-nowrap" style={{ color: textColor }}>
                                  {item.tacticId} {item.tactic}
                                </p>
                                <div className="relative shrink-0 size-[24px]">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                    <g transform="translate(8.295, 6)">
                                      <path 
                                        clipRule="evenodd" 
                                        d={chevronSvg.p25284240} 
                                        fill={textColor}
                                        fillRule="evenodd" 
                                      />
                                    </g>
                                  </svg>
                                </div>
                                <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] whitespace-nowrap" style={{ color: textColor }}>
                                  {item.technique?.id}: {item.technique?.name}
                                </p>
                                {item.subTechnique && (
                                  <>
                                    <div className="relative shrink-0 size-[24px]">
                                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                        <g transform="translate(8.295, 6)">
                                          <path 
                                            clipRule="evenodd" 
                                            d={chevronSvg.p25284240} 
                                            fill={textColor}
                                            fillRule="evenodd" 
                                          />
                                        </g>
                                      </svg>
                                    </div>
                                    <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[14px] whitespace-nowrap" style={{ color: textColor }}>
                                      {item.subTechnique.id}: {item.subTechnique.name}
                                    </p>
                                  </>
                                )}
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Search and Filter Bar */}
            <div className="bg-[#f0f0f0] px-6 py-4 border-b border-[#d9d9d9]">
              <div className={platforms.length > 0 ? "grid grid-cols-2 gap-4" : ""}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search techniques or sub-techniques..."
                    className="w-full px-3 py-2 pr-10 border border-[#757575] font-['Source_Sans_Pro:Regular',sans-serif] text-[16px] focus:outline-none focus:border-[#0078ae] focus:ring-2 focus:ring-[#0078ae]"
                  />
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#757575]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>

                {/* Only show Platform Filter for Enterprise and Mobile */}
                {platforms.length > 0 && (
                  <div className="relative">
                    <select
                      value={platformFilter}
                      onChange={(e) => setPlatformFilter(e.target.value)}
                      className="w-full px-3 py-2 border border-[#757575] font-['Source_Sans_Pro:Regular',sans-serif] text-[16px] focus:outline-none focus:border-[#0078ae] focus:ring-2 focus:ring-[#0078ae] appearance-none bg-white"
                    >
                      {platforms.map(platform => (
                        <option key={platform} value={platform}>{platform}</option>
                      ))}
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#757575] pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Matrix Grid */}
            <div className="bg-[#e6e6e6] overflow-x-auto">
              <div className="inline-flex gap-[16px] min-w-full p-[8px]">
                {Object.entries(MITRE_TECHNIQUES).map(([tactic, techniques]) => (
                  <div key={tactic} className="flex-shrink-0 w-[220px] flex flex-col">
                    {/* Tactic Header */}
                    <div className="bg-[#005288] p-[8px] flex flex-col gap-[8px]">
                      <div className="flex flex-col gap-[4px]">
                        {/* First Technique ID Badge (placeholder) */}
                        <div className="flex items-end pb-[8px]">
                          <div className="flex-1 flex justify-end">
                            <div className="bg-white px-[8px] py-[2px] rounded-[2px]">
                              <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-none text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap">
                                {techniques[0]?.id || 'T0000'}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Tactic Name */}
                        <div className="flex items-center">
                          <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[14px] text-white leading-[normal] flex-1">
                            {tactic}
                          </p>
                        </div>
                      </div>
                      
                      {/* Technique Count */}
                      <div className="flex flex-col">
                        <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[12px] text-white leading-[normal]">
                          <span className="font-['Source_Sans_Pro:Bold',sans-serif]">{techniques.length}</span>
                          {` Technique${techniques.length !== 1 ? 's' : ''}`}
                        </p>
                      </div>
                    </div>

                    {/* Techniques List with Scrolling */}
                    <div className="bg-white flex-1 overflow-y-auto" style={{ maxHeight: '1000px' }}>
                      {techniques
                        .filter(tech => {
                          const matchesSearch = searchTerm === '' || 
                            tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            tech.id.toLowerCase().includes(searchTerm.toLowerCase());
                          const matchesPlatform = platformFilter === 'All Platforms' || 
                            !tech.platforms ||
                            tech.platforms.length === 0 ||
                            tech.platforms.includes(platformFilter);
                          return matchesSearch && matchesPlatform;
                        })
                        .map(technique => (
                          <TechniqueCard
                            key={`${tactic}-${technique.id}`}
                            technique={technique}
                            isSelected={selectedTechniques.includes(technique.id)}
                            selectedSubTechniques={selectedSubTechniques}
                            onToggleTechnique={onToggleTechnique}
                            onToggleSubTechnique={onToggleSubTechnique}
                            onLearnMore={onLearnMore}
                            variant="list"
                          />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-[#f0f0f0] border-t border-[#d9d9d9] px-6 py-4 flex items-center justify-between sticky bottom-0">
              <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] text-[#565c65]">
                {selectedTechniques.length} technique(s) selected • {selectedSubTechniques.length} sub-technique(s) selected
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowMatrix(false)}
                  className="font-['Source_Sans_Pro:Bold',sans-serif] text-[14px] px-6 py-2 bg-[#0078ae] text-white rounded hover:bg-[#005288]"
                >
                  Apply Selection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface SimpleViewProps {
  networkType: 'enterprise' | 'ot' | 'mobile';
  selectedTactics: string[];
  selectedTechniques: string[];
  selectedSubTechniques: string[];
  onToggleTactic: (tactic: string) => void;
  onToggleTechnique: (technique: string) => void;
  onToggleSubTechnique: (subTechnique: string) => void;
  onLearnMore: (technique: TechniqueData, subTechnique?: SubTechnique) => void;
}

export function SimpleView({ networkType, selectedTactics, onToggleTactic }: SimpleViewProps) {
  // Get MITRE data for the current network type
  const MITRE_TECHNIQUES = getMitreTechniques(networkType);

  const tactics = Object.keys(MITRE_TECHNIQUES);

  // Get first technique ID for each tactic
  const getFirstTechniqueId = (tactic: string): string => {
    const techniques = MITRE_TECHNIQUES[tactic];
    return techniques && techniques.length > 0 ? techniques[0].id : '';
  };

  const handleTacticToggle = (tactic: string) => {
    onToggleTactic(tactic);
  };

  return (
    <div className="space-y-6">
      {/* Info Section */}
      <div className="bg-[#e7f6f8] border border-[#00bde3] rounded px-4 py-3">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] text-[#1b1b1b]">
          Select the tactics that were observed in this network environment. You can select multiple tactics.
        </p>
      </div>

      {/* Tactics Selection */}
      <div>
        <label className="font-['Source_Sans_Pro:Bold',sans-serif] text-[18px] text-[#1b1b1b] block mb-4">
          Select Observed Tactics
        </label>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[8px]">
          {tactics.map(tactic => {
            const isSelected = selectedTactics.includes(tactic);
            const techniqueId = getFirstTechniqueId(tactic);
            
            return (
              <div
                key={tactic}
                className={`
                  p-[8px] rounded cursor-pointer transition-all
                  ${isSelected ? 'bg-[#005288]' : 'bg-white border-2 border-[#d9d9d9] hover:border-[#757575]'}
                `}
                onClick={() => handleTacticToggle(tactic)}
              >
                <div className="flex flex-col gap-[4px]">
                  {/* Technique ID Tag */}
                  <div className="flex justify-end">
                    {techniqueId && (
                      <div className="bg-white rounded-[2px] px-[8px] py-[2px] bg-[#e7f6f8]">
                        <p className="font-['Source_Sans_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.8)] tracking-[-0.132px] whitespace-nowrap leading-none text-[#000000cc]">
                          {techniqueId}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Checkbox and Tactic Name */}
                  <div className="flex items-center gap-[8px]">
                    <div className="relative shrink-0 size-[20px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        {isSelected ? (
                          <>
                            <path d="M1.66667 0H18.3333C18.7754 0 19.1993 0.175595 19.5118 0.488155C19.8244 0.800716 20 1.22464 20 1.66667V18.3333C20 18.7754 19.8244 19.1993 19.5118 19.5118C19.1993 19.8244 18.7754 20 18.3333 20H1.66667C1.22464 20 0.800716 19.8244 0.488155 19.5118C0.175595 19.1993 0 18.7754 0 18.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0V0Z" fill="white" />
                            <path clipRule="evenodd" d="M15.0833 7.25C15.0802 7.40451 15.021 7.55261 14.9167 7.66667L10.1667 12.4167L9.25 13.3333C9.13594 13.4376 8.98785 13.4969 8.83333 13.5C8.67882 13.4969 8.53072 13.4376 8.41667 13.3333L7.5 12.4167L5.16667 10.0833C5.06238 9.96928 5.00314 9.82118 5 9.66667C5.00314 9.51215 5.06238 9.36406 5.16667 9.25L6.08333 8.33333C6.19739 8.22905 6.34549 8.16981 6.5 8.16667C6.65451 8.16981 6.80261 8.22905 6.91667 8.33333L8.83333 10.25L13.0833 6C13.1974 5.89571 13.3455 5.83648 13.5 5.83333C13.6545 5.83648 13.8026 5.89571 13.9167 6L14.8333 6.91667C15 7 15.0833 7.08333 15.0833 7.25V7.25Z" fill="#0078AE" fillRule="evenodd" />
                          </>
                        ) : (
                          <rect x="1" y="1" width="18" height="18" rx="1.66667" stroke="#1B1B1B" strokeWidth="2" fill="white" />
                        )}
                      </svg>
                    </div>
                    <p className={`flex-1 font-['Source_Sans_Pro:Bold',sans-serif] text-[14px] leading-normal ${isSelected ? 'text-white' : 'text-[#1b1b1b]'}`}>
                      {tactic}
                    </p>
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="flex justify-start px-[0px] pt-[10px] pb-[0px]">
                    <p className={`font-['Source_Sans_Pro:Regular',sans-serif] text-[12px] tracking-[-0.132px] underline whitespace-nowrap leading-none ${isSelected ? 'text-white' : 'text-[#0078ae]'}`}>
                      Learn More
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Summary */}
      {selectedTactics.length > 0 && (
        null
      )}
    </div>
  );
}