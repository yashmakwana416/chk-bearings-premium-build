export interface ProductContent {
    id: string;
    name: string;
    slug: string;
    hero: {
        title: string;
        subtitle: string;
        image: string;
    };
    seo: {
        title: string;
        description: string;
        keywords: string;
    };
    whatIs: {
        title: string;
        description: string;
        image?: string;
    };
    whyChk: {
        title: string;
        points: string[];
    };
    technicalSpecs: {
        title: string;
        data: { label: string; value: string }[];
    };
    applications: {
        title: string;
        industries: {
            city: string;
            industry: string;
            description: string;
        }[];
    };
    features: {
        title: string;
        list: string[];
    };
    comparison: {
        title: string;
        headers: string[];
        rows: string[][];
    };
    faq: {
        title: string;
        items: { question: string; answer: string }[];
    };
}

export const products: Record<string, ProductContent> = {
    'roller-bearings-in-rajkot-surat-morbi': {
        id: 'roller-bearings',
        name: 'Roller Bearings',
        slug: 'roller-bearings-in-rajkot-surat-morbi',
        hero: {
            title: 'Roller Bearings in Rajkot, Morbi & Surat — Affordable, Durable & Ready Stock',
            subtitle: 'Premium quality roller bearings designed for heavy radial loads and maximum durability. The #1 choice for industries across Gujarat.',
            image: '/images/roller-bearing.png'
        },
        seo: {
            title: 'Roller Bearings in Rajkot, Surat & Morbi | Best Supplier CHK Bearings',
            description: 'Looking for high-quality Roller Bearings in Rajkot, Morbi, or Surat? CHK Bearings offers durable, affordable, and precision-engineered roller bearings for all industrial needs. Ready stock available.',
            keywords: 'Roller Bearings in Rajkot, Roller Bearings in Morbi, Roller Bearings in Surat, best Roller Bearings supplier in Rajkot, affordable Roller Bearings Gujarat, Roller Bearings price today'
        },
        whatIs: {
            title: 'What are Roller Bearings?',
            description: 'Roller bearings are precision mechanical components designed to handle heavy radial loads by using cylindrical, tapered, or spherical rolling elements instead of balls. Unlike ball bearings, which have point contact, roller bearings have line contact, allowing them to support significantly higher loads and withstand greater shock. They are essential in heavy machinery, automotive transmissions, conveyor systems, and industrial gearboxes where reliability under stress is paramount.',
            image: '/images/roller-bearing.png'
        },
        whyChk: {
            title: 'Why CHK Bearings is the Trusted Supplier in Rajkot, Morbi & Surat',
            points: [
                'Engineered with high-grade chrome steel for superior durability and wear resistance.',
                'Rigorous quality testing ensures dimensional accuracy and vibration-free operation.',
                'Most competitive pricing in the market without compromising on quality.',
                'Lightning-fast delivery across Rajkot, Morbi, and Surat industrial zones.',
                'Trusted by over 1000+ manufacturing units and businesses in Gujarat.',
                'Comprehensive technical support and after-sales service.'
            ]
        },
        technicalSpecs: {
            title: 'Technical Specifications',
            data: [
                { label: 'Material', value: 'High Carbon Chrome Steel (GCr15) / Stainless Steel' },
                { label: 'Cage Material', value: 'Pressed Steel / Polyamide / Brass' },
                { label: 'Precision Rating', value: 'P0, P6, P5 (ABEC-1, ABEC-3, ABEC-5)' },
                { label: 'Clearance', value: 'C2, CN, C3, C4' },
                { label: 'Seals Type', value: 'Open / Shielded (ZZ) / Sealed (2RS)' },
                { label: 'Hardness', value: '60-65 HRC' },
                { label: 'Operating Temp', value: '-20°C to +120°C (Standard)' }
            ]
        },
        applications: {
            title: 'Applications in Local Industries',
            industries: [
                {
                    city: 'Rajkot',
                    industry: 'Machine Tools & CNC',
                    description: 'Vital for spindles and heavy-duty gearboxes in Rajkot’s thriving machine tool and auto-component manufacturing sector.'
                },
                {
                    city: 'Morbi',
                    industry: 'Ceramic Manufacturing',
                    description: 'Used in heavy clay crushers, ball mills, and conveyor rollers in Morbi’s world-famous ceramic tile plants.'
                },
                {
                    city: 'Surat',
                    industry: 'Textile Machinery',
                    description: 'Essential for high-speed looms and processing machinery in Surat’s textile and diamond polishing industries.'
                }
            ]
        },
        features: {
            title: 'Why Choose Our Roller Bearings?',
            list: [
                'High Radial Load Capacity: Designed to carry heavy loads effortlessly.',
                'Shock Resistance: Capable of withstanding impact and sudden load changes.',
                'Long Service Life: Premium materials reduce wear and extend maintenance intervals.',
                'Low Friction: Precision finishing ensures smooth operation and energy efficiency.',
                'Versatility: Available in varied designs like cylindrical, spherical, and tapered.'
            ]
        },
        comparison: {
            title: 'Roller Bearings VS Ball Bearings',
            headers: ['Feature', 'Roller Bearings', 'Ball Bearings'],
            rows: [
                ['Load Capacity', 'High (Heavy Radial)', 'Moderate (Light to Medium)'],
                ['Contact Type', 'Line Contact', 'Point Contact'],
                ['Speed Capability', 'Medium', 'High'],
                ['Shock Load', 'Excellent', 'Fair'],
                ['Friction', 'Moderate', 'Very Low']
            ]
        },
        faq: {
            title: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Do you deliver Roller Bearings in Surat same day?',
                    answer: 'Yes, for most standard sizes, we offer same-day or next-day delivery services across Surat, Rajkot, and Morbi industrial areas.'
                },
                {
                    question: 'Which Roller Bearing is best for high-load applications?',
                    answer: 'For extremely heavy radial loads and misalignment, Spherical Roller Bearings are recommended. For pure heavy radial loads, Cylindrical Roller Bearings are ideal.'
                },
                {
                    question: 'Can I get a tax invoice with my purchase?',
                    answer: 'Absolutely. We provide GST invoices with all our supplies to ensure seamless input tax credit for your business.'
                },
                {
                    question: 'What is the price of Roller Bearings in Rajkot?',
                    answer: 'Prices vary based on size and series. Please contact us via WhatsApp or phone for the latest, most competitive price list.'
                }
            ]
        }
    },
    'ball-bearings-in-rajkot-surat-morbi': {
        id: 'ball-bearings',
        name: 'Ball Bearings',
        slug: 'ball-bearings-in-rajkot-surat-morbi',
        hero: {
            title: 'Ball Bearings in Rajkot, Morbi & Surat — High Speed, Low Friction & Durable',
            subtitle: 'Precision-engineered ball bearings for high-speed industrial applications. Trusted by textile, diamond, and automotive industries across Gujarat.',
            image: '/images/ball-bearing.png'
        },
        seo: {
            title: 'Ball Bearings in Rajkot, Surat & Morbi | Best Supplier CHK Bearings',
            description: 'Top-rated Ball Bearings supplier in Rajkot, Morbi, and Surat. CHK Bearings offers a wide range of deep groove, angular contact, and self-aligning ball bearings. Best prices guaranteed.',
            keywords: 'Ball Bearings in Rajkot, Ball Bearings in Morbi, Ball Bearings in Surat, Deep Groove Ball Bearings Gujarat, High Speed Bearings Rajkot'
        },
        whatIs: {
            title: 'What are Ball Bearings?',
            description: 'Ball bearings are the most common type of rolling bearing, utilizing spherical balls to separate the bearing races. Their point contact design minimizes friction, making them ideal for high-speed applications requiring smooth rotation and moderate load capacity. From small electric motors to complex textile machinery in Surat, ball bearings are the silent heroes of motion.',
            image: '/images/ball-bearing.png'
        },
        whyChk: {
            title: 'Why CHK Bearings for Ball Bearings in Gujarat?',
            points: [
                'Super-finished raceways for ultra-low noise and vibration control.',
                'High-speed capability up to 30,000+ RPM for precision machinery.',
                'Available in stainless steel and ceramic hybrid options for specialized use.',
                'Immediate availability of all standard 6000, 6200, and 6300 series.',
                'Preferred supplier for Surat’s diamond processing and textile units.',
                'Competitive wholesale pricing for bulk orders in Rajkot and Morbi.'
            ]
        },
        technicalSpecs: {
            title: 'Technical Specifications',
            data: [
                { label: 'Series', value: '6000, 6200, 6300, 6400, 16000' },
                { label: 'Material', value: 'Chrome Steel (SAE 52100) / SS 440C' },
                { label: 'Cage Type', value: 'Pressed Steel / Brass / Nylon / Phenolic' },
                { label: 'Tolerance Class', value: 'P0 to P4 (High Precision)' },
                { label: 'Seals', value: 'Z, ZZ, RS, 2RS, Open' },
                { label: 'Lubrication', value: 'Pre-greased / Oil Mist compatible' },
                { label: 'Noise Level', value: 'Z1V1 to Z3V3 (Silent Running)' }
            ]
        },
        applications: {
            title: 'Applications in Gujarat Industries',
            industries: [
                {
                    city: 'Surat',
                    industry: 'Textile & Diamond',
                    description: 'Crucial for high-speed textile spindles and precision diamond polishing laps.'
                },
                {
                    city: 'Rajkot',
                    industry: 'Electric Motors',
                    description: 'Standard component in submersible pumps and induction motors manufactured in Rajkot.'
                },
                {
                    city: 'Morbi',
                    industry: 'Conveyor Systems',
                    description: 'Used in light-duty conveyor rollers and packaging machinery in ceramic plants.'
                }
            ]
        },
        features: {
            title: 'Key Features',
            list: [
                'Low Torque: Minimal starting and running friction.',
                'High Speed: Optimized internal geometry for high RPMs.',
                'Versatile: Handles radial and light axial loads in both directions.',
                'Maintenance Free: Sealed versions require no re-lubrication.',
                'Quiet Operation: Precision manufacturing ensures silent performance.'
            ]
        },
        comparison: {
            title: 'Ball Bearings VS Sleeve Bearings',
            headers: ['Feature', 'Ball Bearings', 'Sleeve Bearings'],
            rows: [
                ['Friction', 'Very Low', 'Moderate'],
                ['Speed', 'High', 'Low to Medium'],
                ['Maintenance', 'Low (Sealed)', 'Regular Lubrication Needed'],
                ['Precision', 'High', 'Moderate']
            ]
        },
        faq: {
            title: 'FAQ',
            items: [
                {
                    question: 'Do you have ball bearings for high-temperature applications?',
                    answer: 'Yes, we stock C3 and C4 clearance bearings and special high-temp grease options suitable for oven conveyors and motors.'
                },
                {
                    question: 'What is the minimum order quantity for Surat delivery?',
                    answer: 'We have no minimum order quantity. We deliver even single units for breakdowns, or bulk lots for OEM production.'
                },
                {
                    question: 'Are your bearings suitable for submersible pumps?',
                    answer: 'Yes, our V3 grade silent bearings are specifically preferred by Rajkot’s leading submersible pump manufacturers.'
                }
            ]
        }
    },
    'plain-bearings-in-rajkot-surat-morbi': {
        id: 'plain-bearings',
        name: 'Plain Bearings',
        slug: 'plain-bearings-in-rajkot-surat-morbi',
        hero: {
            title: 'Plain Bearings (Bushings) in Rajkot & Morbi — Cost-Effective & Reliable',
            subtitle: 'High-quality plain bearings and bushings for oscillating movements and heavy static loads. Ideal for agriculture and construction equipment.',
            image: '/images/plain-bearing.png'
        },
        seo: {
            title: 'Plain Bearings & Bushings in Rajkot, Morbi, Surat | CHK Bearings',
            description: 'Leading supplier of Plain Bearings (Bushings) in Rajkot and Morbi. We offer bronze, bi-metal, and composite plain bearings for agricultural and industrial use.',
            keywords: 'Plain Bearings Rajkot, Bushings Manufacturer Morbi, Bronze Bushings Surat, Bi-metal Bearings Gujarat'
        },
        whatIs: {
            title: 'What are Plain Bearings?',
            description: 'Plain bearings, also known as bushings or sleeve bearings, are the simplest type of bearing, consisting of a bearing surface with no rolling elements. They operate via sliding motion and are excellent for heavy loads at slow speeds or oscillating movements. They are widely used in Rajkot’s agricultural machinery sector due to their robustness and cost-effectiveness.',
            image: '/images/plain-bearing.png'
        },
        whyChk: {
            title: 'Why Choose CHK for Plain Bearings?',
            points: [
                'Extensive range of Bronze, Gunmetal, and Bi-metal bushings.',
                'Self-lubricating options available for maintenance-free operation.',
                'Custom sizes manufactured for specific machinery requirements in Rajkot.',
                'High load-carrying capacity for heavy agricultural equipment.',
                'Resistant to dirt and contaminants prevalent in ceramic and farming environments.',
                'Most affordable bearing solution for low-speed applications.'
            ]
        },
        technicalSpecs: {
            title: 'Technical Data',
            data: [
                { label: 'Types', value: 'Solid Bronze, Sintered, Wrapped, Composite' },
                { label: 'Materials', value: 'Bronze (CuSn), PTFE Composite, POM, Steel' },
                { label: 'Lubrication', value: 'Oil Impregnated / Grease / Dry Running' },
                { label: 'Load Capacity', value: 'Very High (Static & Dynamic)' },
                { label: 'Temp Range', value: '-200°C to +280°C (Material dependent)' },
                { label: 'Shaft Finish', value: 'Ra 0.4 to 0.8 recommended' }
            ]
        },
        applications: {
            title: 'Local Industrial Use',
            industries: [
                {
                    city: 'Rajkot',
                    industry: 'Agriculture Equipment',
                    description: 'Extensively used in rotavators, threshers, and ploughs manufactured in Rajkot.'
                },
                {
                    city: 'Morbi',
                    industry: 'Heavy Earthmovers',
                    description: 'Critical for pivot points in excavators and loaders used in clay mining.'
                },
                {
                    city: 'Surat',
                    industry: 'Fabrication Machinery',
                    description: 'Used in hydraulic presses and shearing machines.'
                }
            ]
        },
        features: {
            title: 'Advantages',
            list: [
                'Compact Design: Requires minimal radial space.',
                'Shock Absorption: Excellent damping properties.',
                'Cost Effective: Lower cost compared to rolling element bearings.',
                'Silent Operation: No moving parts to generate noise.',
                'High Load: Supports heavy static loads without deformation.'
            ]
        },
        comparison: {
            title: 'Plain VS Rolling Bearings',
            headers: ['Feature', 'Plain Bearings', 'Rolling Bearings'],
            rows: [
                ['Complexity', 'Simple (One Part)', 'Complex (Multi-part)'],
                ['Space', 'Compact', 'Bulky'],
                ['Friction', 'Higher (Sliding)', 'Lower (Rolling)'],
                ['Cost', 'Low', 'Medium to High']
            ]
        },
        faq: {
            title: 'Common Questions',
            items: [
                {
                    question: 'Do you supply self-lubricating bushings?',
                    answer: 'Yes, we stock Oilite (sintered bronze) and PTFE-lined bushings that require no external greasing.'
                },
                {
                    question: 'Can you provide custom sizes for old machinery?',
                    answer: 'Absolutely. We can source or machine custom bushings to fit specific shaft and housing dimensions unique to older Rajkot machinery.'
                },
                {
                    question: 'What is the price range for plain bearings in Rajkot?',
                    answer: 'Prices vary based on material (bronze, bi-metal, or composite) and size. Contact us for a custom quote based on your specific requirements and order quantity.'
                }
            ]
        }
    },
    'mounted-bearings-in-rajkot-surat-morbi': {
        id: 'mounted-bearings',
        name: 'Mounted Bearings',
        slug: 'mounted-bearings-in-rajkot-surat-morbi',
        hero: {
            title: 'Mounted Bearings & Pillow Blocks in Rajkot, Surat & Morbi',
            subtitle: 'Robust ready-to-mount bearing units for conveyors and shafts. UCP, UCF, and UCFL series available in stock.',
            image: '/images/mounted-bearing.png'
        },
        seo: {
            title: 'Mounted Bearings & Pillow Blocks Supplier Rajkot, Morbi | CHK',
            description: 'Buy Pillow Block (UCP), Flange (UCF) bearings in Rajkot, Morbi, and Surat. CHK Bearings offers easy-to-install mounted units for conveyors and industrial shafts.',
            keywords: 'Mounted Bearings Rajkot, Pillow Block Bearing Morbi, UCP Bearing Surat, UCF Flange Bearing Gujarat'
        },
        whatIs: {
            title: 'What are Mounted Bearings?',
            description: 'Mounted bearings (or housed bearings) consist of a bearing insert mounted within a housing, typically cast iron or pressed steel. They provide a complete solution for supporting rotating shafts, compensating for initial misalignment. They are indispensable in Morbi’s ceramic conveyor lines and Surat’s textile processing plants due to their ease of installation.',
            image: '/images/mounted-bearing.png'
        },
        whyChk: {
            title: 'Why Buy Mounted Bearings from CHK?',
            points: [
                'Complete range of UCP (Pillow Block), UCF (Square Flange), UCFL (Oval Flange).',
                'High-grade cast iron housings for superior strength and rigidity.',
                'Double-sealed inserts to prevent dust entry in ceramic factories.',
                'Easy locking mechanisms (Grub Screw / Eccentric Collar).',
                'Interchangeable with all major brands.',
                'Ready stock for immediate plant breakdown replacements.'
            ]
        },
        technicalSpecs: {
            title: 'Specifications',
            data: [
                { label: 'Housing Material', value: 'Cast Iron (HT200) / Stainless Steel / Thermoplastic' },
                { label: 'Insert Bearing', value: 'Chrome Steel (52100)' },
                { label: 'Series', value: 'UCP, UCF, UCFL, UCT, UCFC' },
                { label: 'Shaft Locking', value: 'Set Screw / Eccentric Collar / Adapter Sleeve' },
                { label: 'Seals', value: 'Triple Lip Seals available for dusty environments' },
                { label: 'Grease Fitting', value: 'Standard grease nipple included' }
            ]
        },
        applications: {
            title: 'Applications in Gujarat',
            industries: [
                {
                    city: 'Morbi',
                    industry: 'Ceramic Conveyors',
                    description: 'The backbone of roller kilns and glazing lines in ceramic tile manufacturing.'
                },
                {
                    city: 'Surat',
                    industry: 'Printing & Dyeing',
                    description: 'Used in textile rollers where easy mounting and alignment are required.'
                },
                {
                    city: 'Rajkot',
                    industry: 'Agricultural Machinery',
                    description: 'Mounted on threshers and crushers for robust shaft support.'
                }
            ]
        },
        features: {
            title: 'Product Benefits',
            list: [
                'Quick Installation: Bolt-on design saves assembly time.',
                'Self-Aligning: Spherical outer ring accommodates initial misalignment.',
                'Dust Proof: Excellent sealing options for dirty environments.',
                'Re-lubricatable: Grease nipples allow for easy maintenance.',
                'Durable Housing: Cast iron absorbs shock and vibration.'
            ]
        },
        comparison: {
            title: 'Mounted VS Plummer Blocks',
            headers: ['Feature', 'Mounted Units (UCP)', 'Plummer Blocks (SN)'],
            rows: [
                ['Duty', 'Light to Medium', 'Heavy Duty'],
                ['Speed', 'Medium', 'High'],
                ['Assembly', 'Pre-assembled', 'Split Housing (Component based)'],
                ['Lubrication', 'Grease', 'Grease or Oil']
            ]
        },
        faq: {
            title: 'FAQs',
            items: [
                {
                    question: 'Can I replace just the bearing insert?',
                    answer: 'Yes, the UC inserts are replaceable. You don’t need to buy the whole unit if the housing is intact.'
                },
                {
                    question: 'Do you have stainless steel units for food processing?',
                    answer: 'Yes, we supply SS housings and inserts suitable for food and chemical industries in Gujarat.'
                },
                {
                    question: 'How long does delivery take in Morbi and Surat?',
                    answer: 'For standard UCP and UCF series, we offer same-day delivery in Morbi and next-day delivery in Surat and Rajkot industrial areas.'
                }
            ]
        }
    },
    'tapered-roller-bearings-in-rajkot-morbi-surat': {
        id: 'tapered-roller',
        name: 'Tapered Roller Bearings',
        slug: 'tapered-roller-bearings-in-rajkot-morbi-surat',
        hero: {
            title: 'Tapered Roller Bearings in Rajkot & Morbi — For Heavy Axial & Radial Loads',
            subtitle: 'Premium tapered roller bearings for automotive and heavy industrial gearboxes. Handling extreme loads with precision.',
            image: '/images/tapered-roller-bearing.png'
        },
        seo: {
            title: 'Tapered Roller Bearings Rajkot, Morbi | Automotive & Industrial | CHK',
            description: 'Best Tapered Roller Bearings in Rajkot and Morbi. We supply inch and metric series tapered bearings for auto hubs, gearboxes, and crushers. Durable and affordable.',
            keywords: 'Tapered Roller Bearings Rajkot, Auto Bearings Morbi, Gearbox Bearings Gujarat, Heavy Duty Bearings Surat'
        },
        whatIs: {
            title: 'What are Tapered Roller Bearings?',
            description: 'Tapered roller bearings feature conical raceways and rollers, allowing them to support heavy combined radial and axial loads simultaneously. The steepness of the cup angle determines the ability to handle thrust loads. They are the standard choice for vehicle wheel hubs in Rajkot’s auto industry and heavy gear reducers in industrial plants.',
            image: '/images/tapered-roller-bearing.png'
        },
        whyChk: {
            title: 'Why Choose CHK for Tapered Bearings?',
            points: [
                'Available in both Metric (30000 series) and Inch sizes.',
                'High-carbon chromium steel for exceptional fatigue life.',
                'Optimized roller profile to reduce edge stress.',
                'Separable design (Cup and Cone) for easy mounting and dismounting.',
                'Stockist for heavy truck and tractor bearings in Rajkot.',
                'Precision grinding ensures minimal noise and heat generation.'
            ]
        },
        technicalSpecs: {
            title: 'Technical Characteristics',
            data: [
                { label: 'Types', value: 'Single Row, Double Row, Four Row' },
                { label: 'Components', value: 'Cone (Inner), Cup (Outer)' },
                { label: 'Cage', value: 'Pressed Steel (Standard) / Pin Type' },
                { label: 'Contact Angle', value: 'Standard / Steep Angle (for high thrust)' },
                { label: 'Material', value: 'Through-hardened / Case-hardened Steel' },
                { label: 'Precision', value: 'P0, P6X, P5' }
            ]
        },
        applications: {
            title: 'Key Applications',
            industries: [
                {
                    city: 'Rajkot',
                    industry: 'Automotive Components',
                    description: 'Wheel hubs, differentials, and transmissions for trucks and tractors.'
                },
                {
                    city: 'Morbi',
                    industry: 'Gearboxes & Reducers',
                    description: 'Main shaft support in heavy-duty industrial gearboxes for ceramic crushers.'
                },
                {
                    city: 'Surat',
                    industry: 'Rolling Mills',
                    description: 'Used in roll necks of metal processing machinery.'
                }
            ]
        },
        features: {
            title: 'Features',
            list: [
                'Combined Load Handling: simultaneous radial and axial support.',
                'Adjustable Clearance: internal clearance can be set during installation.',
                'Rigidity: Provides rigid shaft guidance.',
                'Separable: Inner and outer rings can be mounted separately.',
                'Heavy Duty: ideal for shock loads and harsh conditions.'
            ]
        },
        comparison: {
            title: 'Tapered VS Cylindrical Roller',
            headers: ['Feature', 'Tapered Roller', 'Cylindrical Roller'],
            rows: [
                ['Axial Load', 'High (One direction)', 'Low to None (Standard)'],
                ['Radial Load', 'High', 'Very High'],
                ['Adjustability', 'Yes', 'No'],
                ['Speed', 'Medium', 'High']
            ]
        },
        faq: {
            title: 'Frequently Asked Questions',
            items: [
                {
                    question: 'Do you sell Cup and Cone separately?',
                    answer: 'Yes, for many inch-series bearings, usage of separate cups and cones is common and we supply them accordingly.'
                },
                {
                    question: 'Are these suitable for trailer wheel hubs?',
                    answer: 'Absolutely. We supply the standard sets (Set 1, Set 4, etc.) commonly used in trailer axles across Gujarat.'
                },
                {
                    question: 'What is the load capacity difference between metric and inch series?',
                    answer: 'Both series have comparable load capacities. The choice depends on your machinery specification. We can help you cross-reference and select the right bearing for your application.'
                }
            ]
        }
    },
    'spherical-roller-bearings-in-rajkot-morbi-surat': {
        id: 'spherical-roller',
        name: 'Spherical Roller Bearings',
        slug: 'spherical-roller-bearings-in-rajkot-morbi-surat',
        hero: {
            title: 'Spherical Roller Bearings in Rajkot & Morbi — For Heavy Loads & Misalignment',
            subtitle: 'Self-aligning, heavy-duty bearings for crushers, screens, and conveyors. The toughest bearing for the toughest jobs in Morbi.',
            image: '/images/spherical-roller-bearing.png'
        },
        seo: {
            title: 'Spherical Roller Bearings Rajkot, Morbi | Crusher Bearings | CHK',
            description: 'Heavy duty Spherical Roller Bearings for crushers and vibrating screens in Morbi and Rajkot. Self-aligning 22200, 22300 series available in brass and steel cages.',
            keywords: 'Spherical Roller Bearings Morbi, Crusher Bearings Rajkot, Vibrating Screen Bearings Gujarat, Heavy Industry Bearings Surat'
        },
        whatIs: {
            title: 'What are Spherical Roller Bearings?',
            description: 'Spherical roller bearings are built to carry extremely heavy loads even when there is shaft misalignment. They feature two rows of barrel-shaped rollers sharing a common spherical outer raceway. This design makes them the MVP of the mining and ceramic industries in Morbi, handling the brutal vibrations of crushers and shakers.',
            image: '/images/spherical-roller-bearing.png'
        },
        whyChk: {
            title: 'Why CHK for Spherical Roller Bearings?',
            points: [
                'Specialized "vibratory screen" variants (C4 clearance) available.',
                'Solid Brass Cage (MB/CAM) options for high-impact durability.',
                'Steel Cage (CC/E) options for general heavy use.',
                'Stock of heavy series: 22200, 22300, 23000, 24000.',
                'Expert selection advice for bearing clearance (C3, C4) for hot applications.',
                'Direct supply to major quarry and ceramic plants in Morbi.'
            ]
        },
        technicalSpecs: {
            title: 'Tech Specs',
            data: [
                { label: 'Design', value: 'Double Row, Self-aligning' },
                { label: 'Bore', value: 'Cylindrical (Standard) / Tapered (K)' },
                { label: 'Cages', value: 'Pressed Steel (CC), Machined Brass (MB/CA)' },
                { label: 'Clearance', value: 'C3 (Standard for heat), C4 (For vibration)' },
                { label: 'Lubrication', value: 'Groove and holes in outer ring (W33)' },
                { label: 'Misalignment', value: 'Up to 2 degrees' }
            ]
        },
        applications: {
            title: 'Industry Applications',
            industries: [
                {
                    city: 'Morbi',
                    industry: 'Mining & Crushers',
                    description: 'Jaw crushers, cone crushers, and vibrating screens rely on these for survival.'
                },
                {
                    city: 'Surat',
                    industry: 'Paper & Pulp',
                    description: 'Used in heavy rollers where shaft deflection is common.'
                },
                {
                    city: 'Rajkot',
                    industry: 'Steel Rolling',
                    description: 'Support rollers in continuous casting machines.'
                }
            ]
        },
        features: {
            title: 'Why Use Them?',
            list: [
                'Self-Aligning: Accommodates shaft deflection and mounting errors.',
                'Highest Load Rating: Carries more load than any other bearing type.',
                'Shock Resistant: Robust internal design handles heavy impacts.',
                'Long Life: Even load distribution prevents premature failure.',
                'Easy Mounting: Tapered bore versions mount easily with adapter sleeves.'
            ]
        },
        comparison: {
            title: 'Spherical VS Tapered',
            headers: ['Feature', 'Spherical Roller', 'Tapered Roller'],
            rows: [
                ['Misalignment', 'Yes (Self-aligning)', 'No (Rigid)'],
                ['Radial Load', 'Extreme', 'High'],
                ['Mounting Pair', 'Single Unit', 'Usually Paired'],
                ['Vibration', 'Excellent Handling', 'Good']
            ]
        },
        faq: {
            title: 'Expert Answers',
            items: [
                {
                    question: 'What is the purpose of the W33 feature?',
                    answer: 'W33 indicates a lubrication groove and three holes in the outer ring, allowing grease to be pumped directly into the center of the bearing for optimal lubrication.'
                },
                {
                    question: 'Should I use C3 or C4 clearance?',
                    answer: 'For vibrating screens and crushers in Morbi, C4 is often recommended to prevent seizing due to heat expansion and vibration.'
                },
                {
                    question: 'Do you offer bearing replacement services?',
                    answer: 'Yes, our technical team can assist with on-site bearing inspection and replacement guidance for crusher and screening equipment across Morbi and Rajkot.'
                }
            ]
        }
    },
    'needle-roller-bearings-in-rajkot-morbi-surat': {
        id: 'needle-roller',
        name: 'Needle Roller Bearings',
        slug: 'needle-roller-bearings-in-rajkot-morbi-surat',
        hero: {
            title: 'Needle Roller Bearings in Rajkot & Surat — Compact & High Load',
            subtitle: 'Space-saving needle bearings for gearboxes, engines, and textile machinery. High load capacity in a minimal footprint.',
            image: '/images/needle-roller-bearing.png'
        },
        seo: {
            title: 'Needle Roller Bearings Supplier Rajkot, Surat | CHK Bearings',
            description: 'Buy Needle Roller Bearings in Rajkot and Surat. Ideal for compact spaces in gearboxes and textile machines. HK, NK, RNA series available.',
            keywords: 'Needle Bearings Rajkot, Textile Machinery Bearings Surat, Compact Bearings Gujarat, Needle Roller Cage Assemblies'
        },
        whatIs: {
            title: 'What are Needle Roller Bearings?',
            description: 'Needle roller bearings use long, thin cylindrical rollers resembling needles. They offer the highest load-carrying capacity for a given radial space. This makes them perfect for automotive transmissions in Rajkot and intricate textile loom mechanisms in Surat where space is at a premium.',
            image: '/images/needle-roller-bearing.png'
        },
        whyChk: {
            title: 'CHK Needle Bearings Advantage',
            points: [
                'Wide variety: Drawn cup (HK), Machined ring (NK), Cam Followers (KR).',
                'High-precision rollers for smooth operation.',
                'Shell type bearings for extremely tight housing fits.',
                'Thrust needle bearings (AXK) available for flat axial loads.',
                'Essential inventory for Surat’s textile machine maintenance.',
                'Compact solutions for Rajkot’s auto-ancillaries.'
            ]
        },
        technicalSpecs: {
            title: 'Specs',
            data: [
                { label: 'Roller Ratio', value: 'Length usually > 4x Diameter' },
                { label: 'Types', value: 'Cage Assembly, Drawn Cup, Solid Ring' },
                { label: 'Inner Ring', value: 'Optional (IR series)' },
                { label: 'Space', value: 'Minimal radial cross-section' },
                { label: 'Speed', value: 'Medium to High' },
                { label: 'Seals', value: 'Open / Sealed ends available' }
            ]
        },
        applications: {
            title: 'Major Uses',
            industries: [
                {
                    city: 'Surat',
                    industry: 'Textile Looms',
                    description: 'Critical for cam followers and rocker arms in high-speed weaving machines.'
                },
                {
                    city: 'Rajkot',
                    industry: 'Auto Transmission',
                    description: 'Used in gear selector forks and pilot bearings.'
                },
                {
                    city: 'Rajkot',
                    industry: 'Pump Manufacturing',
                    description: 'Used in hydraulic pumps requiring compact bearing solutions.'
                }
            ]
        },
        features: {
            title: 'Key Benefits',
            list: [
                'Low Cross Section: Fits where other bearings cannot.',
                'High Stiffness: Rigid roller contact minimizes deflection.',
                'Lightweight: Reduces overall machine inertia.',
                'Cost Effective: Efficient design for mass production.',
                'Diverse designs: Open ends, closed ends, with or without inner ring.'
            ]
        },
        comparison: {
            title: 'Needle VS Ball Bearing',
            headers: ['Feature', 'Needle Roller', 'Ball Bearing'],
            rows: [
                ['Radial Space', 'Tiny', 'Large'],
                ['Load Capacity', 'High', 'Medium'],
                ['Axial Load', 'Example: None (Standard)', 'Moderate'],
                ['Friction', 'Medium', 'Low']
            ]
        },
        faq: {
            title: 'Q&A',
            items: [
                {
                    question: 'Can these bearings run without an inner ring?',
                    answer: 'Yes, if the shaft is hardened and ground, needle bearings can run directly on the shaft to save even more space.'
                },
                {
                    question: 'Do you stock Cam Followers (Track Rollers)?',
                    answer: 'Yes, we have a full range of stud-type and yoke-type track rollers used in automation and textile machinery.'
                },
                {
                    question: 'Are needle bearings suitable for high-speed textile looms?',
                    answer: 'Yes, needle roller bearings are ideal for high-speed textile machinery in Surat. They provide high load capacity while maintaining a compact design essential for loom components.'
                }
            ]
        }
    },
    'cylindrical-roller-bearings-in-rajkot-morbi-surat': {
        id: 'cylindrical-roller',
        name: 'Cylindrical Roller Bearings',
        slug: 'cylindrical-roller-bearings-in-rajkot-morbi-surat',
        hero: {
            title: 'Cylindrical Roller Bearings in Rajkot & Morbi — Heavy Radial Duty',
            subtitle: 'High-speed, high-load cylindrical roller bearings (N, NU, NJ, NUP). The backbone of motors and gearboxes.',
            image: '/images/roller-bearing.png'
        },
        seo: {
            title: 'Cylindrical Roller Bearings Rajkot, Morbi, Surat | Motor Bearings',
            description: 'Premium Cylindrical Roller Bearings in Rajkot and Morbi. NU, NJ, NUP series for electric motors and gearboxes. Brass and Polyamide cage options.',
            keywords: 'Cylindrical Roller Bearings Gujarat, NU Bearing Rajkot, NJ Bearing Morbi, Motor Bearings Surat'
        },
        whatIs: {
            title: 'What are Cylindrical Roller Bearings?',
            description: 'Cylindrical roller bearings have rollers in linear contact with the raceways. They are built for heavy radial loads and high speeds. The separable design simplifies mounting. They are widely used in the large electric motors of Rajkot and the gearboxes of Morbi’s heavy industry.',
            image: '/images/roller-bearing.png'
        },
        whyChk: {
            title: 'Why CHK Cylindrical Bearings?',
            points: [
                'Full range: NU (Floating), NJ (One-way location), NUP (Two-way location).',
                'High-capacity E-design available for extra load demands.',
                'Brass Cage (M) options for heavy vibration applications.',
                'Polyamide Cage (P) for standard motor applications.',
                'Precision P6 tolerance for smooth high-speed motor running.',
                'Interchangeable with all international brands.'
            ]
        },
        technicalSpecs: {
            title: 'Specs',
            data: [
                { label: 'Series', value: 'N, NU, NJ, NUP, NF' },
                { label: 'Load', value: 'Heavy Radial' },
                { label: 'Speed', value: 'High' },
                { label: 'Cage', value: 'Brass (M), Nylon (TVP), Steel (J)' },
                { label: 'Axial Load', value: 'Limited (NJ/NUP only)' },
                { label: 'Separable', value: 'Yes (Inner or Outer ring)' }
            ]
        },
        applications: {
            title: 'Where They Are Used',
            industries: [
                {
                    city: 'Rajkot',
                    industry: 'Electric Motors',
                    description: 'The standard "drive-end" bearing for medium to large HP motors.'
                },
                {
                    city: 'Morbi',
                    industry: 'Industrial Gearboxes',
                    description: 'Supports high radial loads in reduction gear units.'
                },
                {
                    city: 'Surat',
                    industry: 'Compressors',
                    description: 'Used in air and refrigeration compressors.'
                }
            ]
        },
        features: {
            title: 'Advantages',
            list: [
                'High Stiffness: Minimal elastic deformation under load.',
                'Thermal Expansion: NU design allows continuous shaft expansion.',
                'High Speed: Cage designs optimized for rapid rotation.',
                'Separable: Makes maintenance and interference fits easier.',
                'Heavy Duty: Handles shock loads better than ball bearings.'
            ]
        },
        comparison: {
            title: 'Cylindrical VS Ball',
            headers: ['Feature', 'Cylindrical Roller', 'Ball Bearing'],
            rows: [
                ['Radial Load', 'Very High', 'Medium'],
                ['Axial Load', 'Low/None', 'Medium'],
                ['Speed', 'High', 'Very High'],
                ['Mounting', 'Separable', 'Non-separable']
            ]
        },
        faq: {
            title: 'FAQs',
            items: [
                {
                    question: 'Which type allows shaft expansion?',
                    answer: 'The NU and N types allow axial displacement of the shaft relative to the housing, accommodating thermal expansion.'
                },
                {
                    question: 'Can NJ type take axial load?',
                    answer: 'Yes, NJ bearings can support heavy radial loads and light axial loads in one direction.'
                }
            ]
        }
    },
    'spherical-roller-thrust-bearings-in-rajkot-morbi-surat': {
        id: 'spherical-thrust',
        name: 'Spherical Roller Thrust Bearings',
        slug: 'spherical-roller-thrust-bearings-in-rajkot-morbi-surat',
        hero: {
            title: 'Spherical Roller Thrust Bearings in Rajkot & Surat — Massive Axial Loads',
            subtitle: 'The ultimate thrust bearing for heavy vertical shafts and extruders. Self-aligning and incredibly strong.',
            image: '/images/spherical-roller-bearing.png'
        },
        seo: {
            title: 'Spherical Roller Thrust Bearings Gujarat | Heavy Duty Thrust',
            description: 'Supplier of 29000 series Spherical Roller Thrust Bearings in Rajkot, Morbi, Surat. Designed for heavy axial loads and self-alignment.',
            keywords: 'Spherical Thrust Bearings Rajkot, 29000 Series Bearing Gujarat, Extruder Bearings Surat'
        },
        whatIs: {
            title: 'What are Spherical Roller Thrust Bearings?',
            description: 'These bearings (29000 series) have raceways inclined to the bearing axis, allowing them to support massive axial loads and significant radial loads. They are self-aligning, making them the preferred choice for plastic extruders in Rajkot and hydro-turbines.',
            image: '/images/spherical-roller-bearing.png'
        },
        whyChk: {
            title: 'CHK Advantage',
            points: [
                'Capable of handling the highest axial loads of all roller bearings.',
                'Self-aligning capability solves shaft deflection issues.',
                'Robust machined brass cages standard.',
                'Oil lubrication preferred design.',
                'Critical stock item for plastic machinery OEMs in Rajkot.'
            ]
        },
        technicalSpecs: {
            title: 'Data Sheet',
            data: [
                { label: 'Series', value: '29200, 29300, 29400' },
                { label: 'Load', value: 'Extreme Axial + High Radial' },
                { label: 'Alignment', value: 'Self-aligning' },
                { label: 'Cage', value: 'Machined Brass / Steel' },
                { label: 'Lubrication', value: 'Oil (Recommended)' },
                { label: 'Separable', value: 'Yes' }
            ]
        },
        applications: {
            title: 'Industry Usage',
            industries: [
                {
                    city: 'Rajkot',
                    industry: 'Plastic Extruders',
                    description: 'Absorbs the massive back-pressure from extruder screws.'
                },
                {
                    city: 'Morbi',
                    industry: 'Vertical Mills',
                    description: 'Supports the main vertical shaft in grinding mills.'
                },
                {
                    city: 'Surat',
                    industry: 'Heavy Gearboxes',
                    description: 'Used in vertical shaft gearboxes.'
                }
            ]
        },
        features: {
            title: 'Features',
            list: [
                'Highest Thrust Capacity: Unmatched by any other type.',
                'Self-Aligning: Tolerates mounting errors.',
                'Combined Loads: Creates a compact assembly.',
                'Separable: Shaft washer and housing washer mount separately.'
            ]
        },
        comparison: {
            title: 'Spherical Thrust VS Ball Thrust',
            headers: ['Feature', 'Spherical Roller Thrust', 'Ball Thrust'],
            rows: [
                ['Axial Load', 'Extreme', 'Medium'],
                ['Radial Load', 'High', 'Zero'],
                ['Speed', 'Medium', 'Low'],
                ['Alignment', 'Self-aligning', 'Rigid']
            ]
        },
        faq: {
            title: 'FAQs',
            items: [
                {
                    question: 'Do these require oil lubrication?',
                    answer: 'Generally, yes. Due to the sliding contact and high loads, oil bath lubrication is standard, though grease is possible at very low speeds.'
                }
            ]
        }
    },
    'pedestal-bearings-in-rajkot-morbi-surat': {
        id: 'pedestal',
        name: 'Pedestal Bearings',
        slug: 'pedestal-bearings-in-rajkot-morbi-surat',
        hero: {
            title: 'Pedestal Bearings (Plummer Blocks) in Rajkot & Morbi',
            subtitle: 'Heavy-duty split housings (SN/SNA/SNL) for big shafts. The industrial standard for mining and fans.',
            image: '/images/mounted-bearing.png'
        },
        seo: {
            title: 'Pedestal Bearings & Plummer Blocks Rajkot | SN500, SNL | CHK',
            description: 'Pedestal Bearings (Plummer Blocks) supplier in Rajkot. SN, SNA, SNL housings with adapter sleeves. Complete units for fans and crushers in Morbi.',
            keywords: 'Pedestal Bearing Rajkot, Plummer Block Morbi, SN500 Housing Gujarat, Bearing Housing Surat'
        },
        whatIs: {
            title: 'What are Pedestal Bearings?',
            description: 'Pedestal bearings, commonly called Plummer Blocks, are split housing units designed to hold large spherical roller bearings. The split cap design allows for easy mounting on long shafts without disassembling the drive. They are the standard for heavy conveyor pulleys and industrial fans in Morbi’s ceramic plants.',
            image: '/images/mounted-bearing.png'
        },
        whyChk: {
            title: 'Why Buy Plummer Blocks from CHK?',
            points: [
                'High-strength Cast Iron (FG260) or SG Iron housings.',
                'Effective sealing options: Felt strips (Standard), V-ring, Labyrinth.',
                'Complete kits: Housing + Bearing + Sleeve + Seals + Locating Rings.',
                'Stock of big sizes: SN 505 to SN 532 and beyond.',
                'Custom oil-lubricated housings available.',
                'Immediate delivery for plant shutdowns.'
            ]
        },
        technicalSpecs: {
            title: 'Specifications',
            data: [
                { label: 'Series', value: 'SN 500, SN 600, SNL, S3000' },
                { label: 'Shaft', value: 'Metric / Inch' },
                { label: 'Seals', value: 'Felt (TC), V-Ring (TA), Labyrinth (TS)' },
                { label: 'Lubrication', value: 'Grease (Standard) / Oil' },
                { label: 'Material', value: 'Cast Iron / Cast Steel' },
                { label: 'Mounting', value: '2-Bolt / 4-Bolt Base' }
            ]
        },
        applications: {
            title: 'Critical Applications',
            industries: [
                {
                    city: 'Morbi',
                    industry: 'Heavy Fans/Blowers',
                    description: 'Supporting high-speed impellers in ceramic kiln cooling zones.'
                },
                {
                    city: 'Rajkot',
                    industry: 'Conveyor Pulleys',
                    description: 'Head and tail pulley support for bulk material handling.'
                },
                {
                    city: 'Gujarat',
                    industry: 'Cement Plants',
                    description: 'Used in elevators and crusher drives.'
                }
            ]
        },
        features: {
            title: 'Key Benefits',
            list: [
                'Split Housing: Easy bearing change without dismantling shaft.',
                'Versatile sealing: Adaptable to dust, water, and heat.',
                'Strong Support: Rigid base prevents vibration.',
                'Expansion: "Floating" arrangement possible with locating rings.'
            ]
        },
        comparison: {
            title: 'Pedestal VS Flange',
            headers: ['Feature', 'Pedestal (Plummer)', 'Flange Unit'],
            rows: [
                ['Load', 'Very Heavy', 'Medium'],
                ['Shaft Size', 'Large (up to 500mm+)', 'Small/Medium'],
                ['Maintenance', 'Easy (Split)', 'Unit Replacement'],
                ['Seal Options', 'Many', 'Few']
            ]
        },
        faq: {
            title: 'FAQs',
            items: [
                {
                    question: 'What is included in a complete unit?',
                    answer: 'A standard complete unit includes the Housing, Bearing (Spherical or Self-aligning), Adapter Sleeve, Locating Rings, and Felt Seals.'
                },
                {
                    question: 'Do you offer SG Iron housings?',
                    answer: 'Yes, for impact applications like crushers, we supply Spheroidal Graphite (SG) Iron housings which are much stronger than standard grey cast iron.'
                }
            ]
        }
    },
    'deep-groove-ball-bearings-in-rajkot-morbi-surat': {
        id: 'deep-groove',
        name: 'Deep Groove Ball Bearings',
        slug: 'deep-groove-ball-bearings-in-rajkot-morbi-surat',
        hero: {
            title: 'Deep Groove Ball Bearings in Rajkot & Surat — The Universal Choice',
            subtitle: 'The most popular bearing type. Versatile, robust, and available in thousands of sizes.',
            image: '/images/ball-bearing.png'
        },
        seo: {
            title: 'Deep Groove Ball Bearings (DGBB) Rajkot, Surat | 6000, 6200, 6300 Series',
            description: 'Buy Deep Groove Ball Bearings in Rajkot and Surat. The most versatile bearing for electric motors, pumps, and fans. 6000, 6200, 6300 series in stock.',
            keywords: 'DGBB Rajkot, 6205 Bearing Price, Electric Motor Bearings Surat, Deep Groove Bearing Gujarat'
        },
        whatIs: {
            title: 'What are Deep Groove Ball Bearings?',
            description: 'Deep Groove Ball Bearings (DGBB) are the workhorse of the industry. Their deep raceway grooves allow them to handle radial loads and axial loads in both directions at high speeds. They are simple, robust, and require little maintenance, making them the default choice for electric motors across Rajkot.',
            image: '/images/ball-bearing.png'
        },
        whyChk: {
            title: 'CHK DGBB Benefits',
            points: [
                'Quiet running for electric motor applications (Z3V3 grade).',
                'High-quality grease for sealed life-long operation.',
                'Traceability and genuine quality guarantee.',
                'Massive inventory of 6000, 6200, 6300, 6800, 6900 series.',
                'Stainless steel options (S6000) for food/pharma industries in Gujarat.',
                'Bulk pricing for OEMs.'
            ]
        },
        technicalSpecs: {
            title: 'Tech Data',
            data: [
                { label: 'Series', value: '160, 60, 62, 63, 64' },
                { label: 'Seals', value: 'Z (Metal Shield), RS (Rubber Seal)' },
                { label: 'Clearance', value: 'CN (Normal), C3 (Loose)' },
                { label: 'Cage', value: 'Steel Ribbon (Standard), Brass, Nylon' },
                { label: 'Temp', value: '-30 to 110°C (Standard Grease)' }
            ]
        },
        applications: {
            title: 'Common Uses',
            industries: [
                {
                    city: 'Rajkot',
                    industry: 'Submersible Pumps',
                    description: 'Main rotor bearings.'
                },
                {
                    city: 'Surat',
                    industry: 'Fans & HVAC',
                    description: 'Silent operation for ventilation systems.'
                },
                {
                    city: 'Morbi',
                    industry: 'Conveyor Rollers',
                    description: 'Idler roller bearings.'
                }
            ]
        },
        features: {
            title: 'Key Features',
            list: [
                'Versatile: Can be found in almost any machine.',
                'Low Friction: Excellent for high speeds.',
                'Low Noise: Precision grinding minimizes sound.',
                'Sealed for Life: 2RS versions need no maintenance.'
            ]
        },
        comparison: {
            title: 'DGBB VS Others',
            headers: ['Feature', 'DGBB', 'Angular Contact'],
            rows: [
                ['Axial Load', 'Bidirectional (Light)', 'Unidirectional (High)'],
                ['Speed', 'Very High', 'High'],
                ['Price', 'Lowest', 'Medium']
            ]
        },
        faq: {
            title: 'FAQs',
            items: [
                {
                    question: 'What does C3 mean?',
                    answer: 'C3 is an internal clearance greater than normal. It is preferred for electric motors where heat expansion occurs.'
                },
                {
                    question: 'Can you supply ZZ vs 2RS?',
                    answer: 'Yes. ZZ (Metal shields) are for dust protection without friction. 2RS (Rubber seals) offer better water protection but slightly more friction.'
                }
            ]
        }
    },
    'self-aligning-ball-bearings-in-rajkot-morbi-surat': {
        id: 'self-aligning-ball',
        name: 'Self Aligning Ball Bearings',
        slug: 'self-aligning-ball-bearings-in-rajkot-morbi-surat',
        hero: {
            title: 'Self-Aligning Ball Bearings in Rajkot & Surat — Correcting Misalignment',
            subtitle: 'Double row ball bearings with a spherical raceway. Perfect for long shafts and agricultural machinery.',
            image: '/images/ball-bearing.png'
        },
        seo: {
            title: 'Self Aligning Ball Bearings Rajkot, Surat | 1200, 2200 Series',
            description: 'Buy Self Aligning Ball Bearings in Rajkot. 1200 and 2200 series available. Ideal for shafts with deflection or misalignment problems.',
            keywords: 'Self Aligning Bearings Rajkot, 1200 Series Bearing Gujarat, Bearing Misalignment Solutions'
        },
        whatIs: {
            title: 'What are Self-Aligning Ball Bearings?',
            description: 'These bearings have two rows of balls and a common sphered raceway in the outer ring. This allows the inner ring/balls to rotate within the outer ring, accommodating shaft deflection or angular misalignment. They are heavily used in Rajkot’s agricultural machinery where frames may not be perfectly rigid.',
            image: '/images/ball-bearing.png'
        },
        whyChk: {
            title: 'CHK Advantage',
            points: [
                'Lowest friction of all rolling bearings.',
                'Excellent running accuracy even with shaft deflection.',
                'Available with tapered bore (K) for adapter sleeve mounting.',
                'Extended inner ring versions available.',
                'Trusted solution for agricultural blower fans.'
            ]
        },
        technicalSpecs: {
            title: 'Specs',
            data: [
                { label: 'Series', value: '1200, 1300, 2200, 2300' },
                { label: 'Misalignment', value: 'Up to 2.5-3 degrees' },
                { label: 'Friction', value: 'Extremely Low' },
                { label: 'Load', value: 'Light to Medium Radial' },
                { label: 'Seals', value: 'Open / Sealed (2RS)' }
            ]
        },
        applications: {
            title: 'Applications',
            industries: [
                {
                    city: 'Rajkot',
                    industry: 'Agriculture',
                    description: 'Threshers and harvesters where shaft flex is common.'
                },
                {
                    city: 'Surat',
                    industry: 'Textile',
                    description: 'Long shaft drives in processing machines.'
                },
                {
                    city: 'Morbi',
                    industry: 'Fans',
                    description: 'Light duty industrial fans.'
                }
            ]
        },
        features: {
            title: 'Benefits',
            list: [
                'Cool Running: Lowest friction means lowest heat generation.',
                'Forgiving: Handles mounting errors gracefully.',
                'Quiet: Very smooth operation.',
                'High Speed: Capable of high RPMs.'
            ]
        },
        comparison: {
            title: 'Self-Aligning Ball VS Spherical Roller',
            headers: ['Feature', 'Self-Aligning Ball', 'Spherical Roller'],
            rows: [
                ['Load Capacity', 'Low/Medium', 'Very Heavy'],
                ['Friction', 'Lowest', 'Medium'],
                ['Speed', 'High', 'Medium'],
                ['Weight', 'Light', 'Heavy']
            ]
        },
        faq: {
            title: 'FAQs',
            items: [
                {
                    question: 'Are these stronger than regular ball bearings?',
                    answer: 'No, they generally have lower load capacity than deep groove ball bearings. Their main strength is handling misalignment, not heavy loads.'
                }
            ]
        }
    },
    'angular-contact-ball-bearings-in-rajkot-morbi-surat': {
        id: 'angular-contact',
        name: 'Angular Contact Ball Bearings',
        slug: 'angular-contact-ball-bearings-in-rajkot-morbi-surat',
        hero: {
            title: 'Angular Contact Ball Bearings in Rajkot & Surat — Precision & Speed',
            subtitle: 'Designed for combined loads and high precision. 7000 series for spindles and pumps.',
            image: '/images/ball-bearing.png'
        },
        seo: {
            title: 'Angular Contact Bearings Rajkot, Surat | Spindle Bearings | CHK',
            description: 'Precision Angular Contact Ball Bearings in Rajkot and Surat. 7200, 7300 series. Ideal for pumps, CNC spindles, and high-speed applications.',
            keywords: 'Angular Contact Bearing Rajkot, Spindle Bearings Surat, 7200 Series Bearing Gujarat, CNC Bearings'
        },
        whatIs: {
            title: 'What are Angular Contact Bearings?',
            description: 'Angular contact ball bearings have raceways displaced relative to each other in the direction of the bearing axis. This means they are designed to accommodate combined loads (simultaneously acting radial and axial loads). They are standard in Rajkot’s CNC machine spindles and centrifugal pumps.',
            image: '/images/ball-bearing.png'
        },
        whyChk: {
            title: 'Why Choose CHK?',
            points: [
                'High precision P4/P2 classes available for CNCs.',
                'Universal matching (paired mounting) available.',
                'Polyamide and Brass cage options.',
                'Wide contact angles (40° - B suffix) for greater thrust capability.',
                'Critical stock for pump manufacturers in Rajkot.'
            ]
        },
        technicalSpecs: {
            title: 'Specs',
            data: [
                { label: 'Series', value: '7000, 7200, 7300' },
                { label: 'Contact Angle', value: '15° (C), 25° (AC), 40° (B)' },
                { label: 'Cage', value: 'Polyamide (P), Brass (M)' },
                { label: 'Pairing', value: 'DB, DF, DT (Duplex sets)' },
                { label: 'Speed', value: 'Very High' }
            ]
        },
        applications: {
            title: 'Uses',
            industries: [
                {
                    city: 'Rajkot',
                    industry: 'CNC Machines',
                    description: 'Main spindle bearings for lathes and VMCs.'
                },
                {
                    city: 'Rajkot',
                    industry: 'Centrifugal Pumps',
                    description: 'Handles the thrust load from the impeller.'
                }
            ]
        },
        features: {
            title: 'Features',
            list: [
                'High Axial Load: Increases with contact angle.',
                'High Precision: Essential for accurate shaft guidance.',
                'High Speed: Excellent for high-speed motors and spindles.'
            ]
        },
        comparison: {
            title: 'Angular VS Deep Groove',
            headers: ['Feature', 'Angular Contact', 'Deep Groove'],
            rows: [
                ['Axial Load', 'High (One way)', 'Light (Two way)'],
                ['Mounting', 'Directional', 'Non-directional'],
                ['Speed', 'High', 'High']
            ]
        },
        faq: {
            title: 'FAQs',
            items: [
                {
                    question: 'Do I need to mount these in pairs?',
                    answer: 'Single row angular contact bearings can only take axial load in one direction. For two-way support, they must be mounted in pairs (Back-to-back or Face-to-face).'
                }
            ]
        }
    },
    'double-row-angular-contact-in-rajkot-morbi-surat': {
        id: 'double-row-angular',
        name: 'Double Row Angular Contact',
        slug: 'double-row-angular-contact-in-rajkot-morbi-surat',
        hero: {
            title: 'Double Row Angular Contact Bearings in Rajkot & Morbi',
            subtitle: 'Two bearings in one. Rigid handling of axial loads in both directions.',
            image: '/images/ball-bearing.png'
        },
        seo: {
            title: 'Double Row Angular Contact Bearings Rajkot | 3200, 3300 Series',
            description: 'Double Row Angular Contact Ball Bearings (3200, 3300 series) supplier in Rajkot. Compact solution for loads in both directions.',
            keywords: 'Double Row Angular Bearing Rajkot, 3205 Bearing Price, 5200 Series Bearing Gujarat'
        },
        whatIs: {
            title: 'What are Double Row Angular Contact Bearings?',
            description: 'These bearings correspond in design to two single row angular contact ball bearings arranged back-to-back, but take up less axial space. They can accommodate radial loads, axial loads in either direction, and tilting moments. They are popular in automotive wheels and industrial gearboxes.',
            image: '/images/ball-bearing.png'
        },
        whyChk: {
            title: 'Benefits',
            points: [
                'Compact width compared to two single bearings.',
                'Rigid mounting handles tilting moments well.',
                'Available sealed (2RS) for maintenance-free life.',
                'Competitive pricing for the 3200 and 3300 series.',
                'Used widely in Rajkot’s engineering pumps.'
            ]
        },
        technicalSpecs: {
            title: 'Specs',
            data: [
                { label: 'Series', value: '3200 (5200), 3300 (5300)' },
                { label: 'Cage', value: 'Steel / Polyamide' },
                { label: 'Seals', value: 'Open / ZZ / 2RS' },
                { label: 'Angle', value: '30° usually' }
            ]
        },
        applications: {
            title: 'Applications',
            industries: [
                {
                    city: 'Rajkot',
                    industry: 'Pumps',
                    description: 'Process pumps requiring stiff shaft support.'
                },
                {
                    city: 'Gujarat',
                    industry: 'Automotive',
                    description: 'Car wheel hubs (older generations).'
                }
            ]
        },
        features: {
            title: 'Features',
            list: [
                'Bidirectional: Handles axial load both ways.',
                'Stiff: Good for moment loads.',
                'Sealed: Keeps grease in and dirt out.'
            ]
        },
        comparison: {
            title: 'Double Row VS Two Single Rows',
            headers: ['Feature', 'Double Row Unit', 'Paired Singles'],
            rows: [
                ['Width', 'Narrower', 'Wider'],
                ['Mounting', 'Simpler', 'Requires preload setting'],
                ['Cost', 'Lower', 'Higher']
            ]
        },
        faq: {
            title: 'FAQs',
            items: [
                {
                    question: 'Are 3200 and 5200 series the same?',
                    answer: 'Yes, 3200 is the European metric designation, and 5200 is often the American designation for essentially the same interchangeable bearing.'
                }
            ]
        }
    },
    'thrust-ball-bearings-in-rajkot-morbi-surat': {
        id: 'thrust-ball',
        name: 'Thrust Ball Bearings',
        slug: 'thrust-ball-bearings-in-rajkot-morbi-surat',
        hero: {
            title: 'Thrust Ball Bearings in Rajkot & Surat — Pure Axial Support',
            subtitle: 'Simplest solution for vertical shaft loads. 51100, 51200 series available.',
            image: '/images/thrust-ball-bearing.png'
        },
        seo: {
            title: 'Thrust Ball Bearings Rajkot, Surat | 51100, 51200 Series',
            description: 'Buy Thrust Ball Bearings in Rajkot and Surat. 51100, 51200, 51300 series. Designed for axial loads in low speed applications.',
            keywords: 'Thrust Ball Bearing Rajkot, 51100 Series Bearing Gujarat, Axial Bearing Supplier'
        },
        whatIs: {
            title: 'What are Thrust Ball Bearings?',
            description: 'Thrust ball bearings consist of two rings (washer-like) with raceways and a set of balls in a cage. They are designed to support axial loads in one direction only and must not be subjected to any radial load. They are commonly used in crane hooks and vertical jacks in Rajkot.',
            image: '/images/thrust-ball-bearing.png'
        },
        whyChk: {
            title: 'CHK Offering',
            points: [
                'Full range: 51100 to 51400 series.',
                'Separable design for easy cleaning and mounting.',
                'High-grade steel balls for smooth rotation.',
                'Economical solution for axial loads.',
                'Ready stock for jack manufacturers in Rajkot.'
            ]
        },
        technicalSpecs: {
            title: 'Specs',
            data: [
                { label: 'Series', value: '511, 512, 513, 514' },
                { label: 'Load', value: 'Axial Only (One direction)' },
                { label: 'Speed', value: 'Low' },
                { label: 'Components', value: 'Shaft washer, Housing washer, Ball assembly' }
            ]
        },
        applications: {
            title: 'Uses',
            industries: [
                {
                    city: 'Rajkot',
                    industry: 'Lifting Equipment',
                    description: 'Crane hooks and hydraulic jacks.'
                },
                {
                    city: 'Surat',
                    industry: 'Valves',
                    description: 'Valve stems in industrial pipelines.'
                }
            ]
        },
        features: {
            title: 'Features',
            list: [
                'Separable: All parts can be mounted individually.',
                'Axial Load: Dedicated design for thrust.',
                'Zero Radial Load: Cannot take side forces.'
            ]
        },
        comparison: {
            title: 'Thrust Ball VS Roller Thrust',
            headers: ['Feature', 'Thrust Ball', 'Roller Thrust'],
            rows: [
                ['Axial Load', 'Medium', 'Extreme'],
                ['Speed', 'Low', 'Medium'],
                ['Cost', 'Low', 'High']
            ]
        },
        faq: {
            title: 'FAQs',
            items: [
                {
                    question: 'Can I use this on a horizontal shaft?',
                    answer: 'It is generally not recommended for horizontal shafts at high speeds as the balls may slide due to gravity, but with proper preload (springs), it is possible.'
                }
            ]
        }
    }
};
