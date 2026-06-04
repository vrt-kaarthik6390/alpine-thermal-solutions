/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductItem, StatItem, GalleryItem } from './types';

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'gel-packs',
    name: 'Advanced Temperature-Controlled Gel Packs',
    badge: 'PRODUCT 01',
    subIntro: 'Engineered for high-volume, reliable 0°C transit environments',
    description: 'Our proprietary gel formulations are designed to maintain an absolute 0°C thermal plateau for critical duration transport. Encased in high-durability polymers, these packs are puncture-resistant and optimized for repeated thermal cycles.',
    features: [
      {
        title: 'Leak-Proof Architecture',
        description: 'Co-extruded heavy-duty polymer films with reinforced hermetic seams prevent any cargo contamination.'
      },
      {
        title: 'Precision Integrity',
        description: 'Specifically engineered gel matrices that resist expansion-stress during high-rate freezing phases.'
      },
      {
        title: 'Flexible Configurations',
        description: 'Available in standard sizing from 150g to 1.2kg, or custom physical formats built around your cartons.'
      },
      {
        title: 'Multi-Use Durability',
        description: 'Formulated with salt-tolerant grade polymerizers to endure hundred-fold freezing cycles without degradation.'
      }
    ],
    specs: [
      { property: 'Target temperature', value: '0°C (Chilled transit corridor)' },
      { property: 'Film technology', value: 'Multi-layer co-extruded high-barrier polymer' },
      { property: 'Sealing technology', value: 'Ultra-wide thermal hermetic seal (puncture resistant)' },
      { property: 'Volume configurations', value: '150g, 250g, 500g, 1000g, and custom dimensions' },
      { property: 'Key applications', value: 'Biological samples, vaccine kits, pharmaceutical last-mile' }
    ],
    applications: ['Vaccine Distribution', 'Biological Samples', 'Pharma Last-Mile', 'Clinical Trials']
  },
  {
    id: 'pcm-panels',
    name: 'Phase Change Material (PCM) Thermal Panels',
    badge: 'PRODUCT 02',
    subIntro: 'Rigid, high-density thermal storage units for circular supply chains',
    description: 'Alpine PCM Panels are rugged thermal shields engineered to lock extreme temperatures. Utilizing inorganic salt-hydrate matrices and heavy-gauge blow-molded walls, these panels are the backbone of high-end pharmaceutical shipping systems and clinical logistics.',
    features: [
      {
        title: 'Structural Innovation',
        description: 'Blow-molded high-density polyethylene shell stands up to brutal handling and forklift drops.'
      },
      {
        title: 'Heavy-Duty Construction',
        description: 'Stiffened structural ribs provide flat surface-profile locking, allowing streamlined stacking inside shippers.'
      },
      {
        title: 'Leak-Free Sealing',
        description: 'High-frequency spin-welded solid port plugs guarantee zero seepage even in sub-atmospheric transport.'
      },
      {
        title: 'Circular Economy Ready',
        description: 'Designed for strict 3PL and closed-loop return systems with a certified lifespan of 5+ years.'
      }
    ],
    specs: [
      { property: 'Temperature plateau options', value: '+4°C, +22°C, -21°C options available' },
      { property: 'Shell material', value: 'Virgin Food-Grade High-Density Polyethylene (HDPE)' },
      { property: 'Sealing format', value: 'Hermetic spin-weld seal + impact lock capping' },
      { property: 'Life cycle count', value: 'Rated for 1000+ thermal freeze-thaw events' },
      { property: 'Payload protection', value: 'Integrates perfectly with double-wall VIP insulated shippers' }
    ],
    applications: ['Hospital Networks', 'CRO Shipments', 'Frozen Food Export', 'Cold Chain 3PLs']
  },
  {
    id: 'eutectic-formulations',
    name: 'Tailored Eutectic Formulations',
    badge: 'PRODUCT 03',
    subIntro: 'Chemically locked thermal plateaus — eliminating supercooling and dry ice hazards',
    description: 'Our advanced Eutectic Formulations represent the pinnacle of thermochemical engineering. By fine-tuning salt-hydrate lattices and integrating powerful synthetic nucleating agents, we completely eliminate thermal hysteresis, offering rigid, sustainable alternatives to dry ice or commodity water blocks.',
    features: [
      {
        title: 'Advanced Crystallization',
        description: 'Proprietary nucleators trigger rapid, uniform freezing, avoiding the classic over-chilling slope.'
      },
      {
        title: 'Magnesium Chloride Eutectics',
        description: 'Provides powerful sub-zero plateaus down to -21°C, matching the performance of dry ice without sublimation or hazards.'
      },
      {
        title: 'Zero Segregation Stability',
        description: 'Proprietary visual-gel thickeners keep eutectic salts from settling, maintaining uniform heat latency.'
      },
      {
        title: 'Eco-Conscious Chemistry',
        description: 'Biodegradable, non-toxic, and non-hazardous formulation that meets strict airline shipping approvals.'
      }
    ],
    specs: [
      { property: 'Chilled plateau', value: '+5°C (Safety range: +2°C to +8°C)' },
      { property: 'Deep-freeze plateau', value: '-21°C (Magnesium Chloride base)' },
      { property: 'Thermal hysteresis', value: '< 0.5°C visual supercooling shift' },
      { property: 'Freeze cycles', value: 'Chemically stabilized for 500+ deep freeze actions' },
      { property: 'CO2 Emission Hazard', value: '0% (Excellent dry-ice replacement, no airline flight restrictions)' }
    ],
    applications: ['Dry Ice Replacement', 'mRNA Vaccine Logistics', 'Clinical Sample Assays', 'Frozen Foods']
  }
];

export const STATS_DATA: StatItem[] = [
  {
    value: 2,
    suffix: ' Core Ranges',
    label: 'Temperature Windows',
    details: 'Chilled (+2°C to +8°C) & Deep-Freeze (-18°C to -24°C) plateaus'
  },
  {
    value: 3,
    suffix: ' Core Families',
    label: 'Product Lines',
    details: 'Gel Packs, PCM Panels, and Tailored Eutectic Chemistries'
  },
  {
    value: 500,
    suffix: '+ Cycles',
    label: 'Freeze-Thaw Durability',
    details: 'Zero latent heat reduction over hundreds of operations'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  // Gel Packs
  {
    id: 'gp-1',
    title: 'Precision Gel Seam Integrity',
    description: 'High-frequency automated welding ensure zero leakages under extreme pressures.',
    imageSeed: 'pharma-box'
  },
  {
    id: 'gp-2',
    title: 'Co-Extruded Polymer Selection',
    description: 'Multi-layer durable barrier films ready for clinical transport.',
    imageSeed: 'laboratory'
  },
  {
    id: 'gp-3',
    title: 'Bulk Automated Pack Loading',
    description: 'High precision filling and sealing at our state-of-the-art Hosur plant.',
    imageSeed: 'logistics'
  },
  // PCM Panels
  {
    id: 'pcm-1',
    title: 'High Density blow-molded PCM Plates',
    description: 'Structural integrity designed to lock inside VIP passive boxes.',
    imageSeed: 'factory'
  },
  {
    id: 'pcm-2',
    title: 'Spin-Welded Seepage Isolation',
    description: 'Heavy duty spin-weld testing on structural rigid reservoirs.',
    imageSeed: 'warehouse'
  },
  {
    id: 'pcm-3',
    title: 'Multi-Plate Phase Storage Stack',
    description: 'Form factor matched exactly to global cold-chain box profiles.',
    imageSeed: 'terminal'
  },
  // Eutectic Formulations
  {
    id: 'eut-1',
    title: 'Spectrophotometric Phase Mapping',
    description: 'Testing of +5°C salt hydrate plateaus inside our R&D lab.',
    imageSeed: 'science'
  },
  {
    id: 'eut-2',
    title: 'Magnesium Chloride Formulation Reactor',
    description: 'High-capacity chemical mixing to replace hazardous dry ice shippers.',
    imageSeed: 'chemistry'
  },
  {
    id: 'eut-3',
    title: 'Precision Temperature-over-Time Logger',
    description: 'Live payload verification graphing zero excursions across high ambient heat profiles.',
    imageSeed: 'industry'
  }
];
