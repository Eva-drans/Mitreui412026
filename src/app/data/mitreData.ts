import { TechniqueData } from '../components/TechniqueCard';
import { MITRE_TECHNIQUES_ENTERPRISE } from './mitreData_enterprise';
import { MITRE_TECHNIQUES_ICS } from './mitreData_ics';
import { MITRE_TECHNIQUES_MOBILE } from './mitreData_mobile';

// Export all matrices
export { MITRE_TECHNIQUES_ENTERPRISE, MITRE_TECHNIQUES_ICS, MITRE_TECHNIQUES_MOBILE };

// Default export for backward compatibility (Enterprise)
export const MITRE_TECHNIQUES = MITRE_TECHNIQUES_ENTERPRISE;

// Helper function to get the appropriate MITRE data based on network type
export function getMitreTechniques(networkType: 'enterprise' | 'ot' | 'mobile'): Record<string, TechniqueData[]> {
  switch (networkType) {
    case 'enterprise':
      return MITRE_TECHNIQUES_ENTERPRISE;
    case 'ot':
      return MITRE_TECHNIQUES_ICS;
    case 'mobile':
      return MITRE_TECHNIQUES_MOBILE;
    default:
      return MITRE_TECHNIQUES_ENTERPRISE;
  }
}
