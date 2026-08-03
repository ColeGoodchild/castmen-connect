import wireHarnessMacro from "@/assets/blog/wire-harness-macro.jpg";
import crimpingBench from "@/assets/blog/crimping-bench.jpg";
import electricalTesting from "@/assets/blog/electrical-testing.jpg";
import qualityAudit from "@/assets/blog/quality-audit.jpg";
import automatedLine from "@/assets/blog/automated-line.jpg";
import overmoldingImg from "@/assets/blog/overmolding.jpg";

export type CalloutVariant =
  | "tip"
  | "note"
  | "standard"
  | "quality"
  | "best-practice"
  | "warning";

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; variant: CalloutVariant; title: string; text: string }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "spec"; title: string; lines: string[] };

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  summary: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  date: string; // ISO
  image: string;
  imageAlt: string;
  featured?: boolean;
  mostRead?: boolean;
  editorsPick?: boolean;
  content: Block[];
}

export const CATEGORIES = [
  "Wire Harnesses",
  "Cable Assemblies",
  "Engineering",
  "Quality",
  "AS9100",
  "ISO 9001",
  "Manufacturing",
  "Defense",
  "Aerospace",
  "Medical",
  "Automation",
  "Case Studies",
  "Industry News",
] as const;

const ENG_TEAM = "Castmen Engineering Team";
const QUALITY_TEAM = "Castmen Quality Assurance";

export const articles: Article[] = [
  {
    slug: "what-is-a-custom-wire-harness",
    title: "What Is a Custom Wire Harness?",
    subtitle:
      "How engineered wire harnesses differ from off-the-shelf wiring, and when a custom build is the right call.",
    seoTitle:
      "What Is a Custom Wire Harness? Definition, Components & Uses | Castmen Electronics",
    metaDescription:
      "A custom wire harness is an engineered assembly of wires, terminals, connectors and protection built to a specific drawing. Learn the components, benefits and when to specify one.",
    excerpt:
      "A custom wire harness is far more than a bundle of wires. It is an engineered, documented, repeatable assembly built to a controlled drawing — and for high-reliability programs it is often the single most failure-prone subsystem if it is built wrong.",
    summary:
      "A plain-English definition of the custom wire harness, the components that make one up, and the programs where a build-to-print harness outperforms generic wiring.",
    category: "Wire Harnesses",
    tags: ["Wire Harnesses", "Build-to-Print", "Aerospace", "Engineering"],
    author: ENG_TEAM,
    authorRole: "Manufacturing Engineering",
    date: "2026-07-21",
    image: wireHarnessMacro,
    imageAlt:
      "Macro photograph of a color-coded custom wire harness terminated into a circular MIL-SPEC connector",
    featured: true,
    mostRead: true,
    content: [
      {
        type: "p",
        text: "A custom wire harness is an assembly of wires, terminals, connectors, splices, protective coverings and identification, built to a specific drawing for a specific piece of equipment. Unlike a generic cable you can order from a catalog, every dimension, circuit, connector position and marking on a custom harness is controlled by documentation — which is exactly what makes it repeatable across hundreds or thousands of units.",
      },
      {
        type: "p",
        text: "For aerospace, defense, robotics and medical equipment, the harness is the nervous system of the machine. It routes power and signal through vibration, temperature swings, EMI and confined geometry. When it is engineered and manufactured correctly, nobody thinks about it. When it is not, it becomes the leading cause of field returns.",
      },
      { type: "h2", text: "What a custom wire harness is made of" },
      {
        type: "ul",
        items: [
          "**Conductors** — hookup wire, shielded pairs, coax or multiconductor cable selected for gauge, insulation, temperature rating and flex life.",
          "**Terminations** — machine or hand crimps, solder cups, IDC contacts, or terminal lugs, each with a validated tooling and pull-force requirement.",
          "**Connectors** — circular MIL-DTL-38999/5015, D-subminiature, rectangular, RF/coax, or commercial connectors with defined keying and contact arrangements.",
          "**Protection** — braided sleeving, convoluted tubing, heat-shrink, molded boots, lacing tape and abrasion-resistant conduit.",
          "**Shielding and grounding** — braid, foil, shield terminations, drain wires and backshell grounding schemes for EMI/EMC control.",
          "**Identification** — heat-shrink wire markers, laser-etched labels, serial numbers and revision-controlled part marking for traceability.",
        ],
      },
      {
        type: "callout",
        variant: "note",
        title: "Engineering Note",
        text: "A harness drawing should always define more than geometry. Wire list, connector pinout, torque and crimp specs, shield termination method, marking scheme and acceptance criteria all belong on the print. Ambiguity on the print becomes variability on the floor.",
      },
      { type: "h2", text: "Custom vs. off-the-shelf wiring" },
      {
        type: "table",
        caption: "Comparison of off-the-shelf cabling and engineered custom harnesses",
        head: ["Attribute", "Off-the-Shelf Cable", "Custom Wire Harness"],
        rows: [
          ["Fit", "Generic lengths, excess slack", "Exact routed lengths and breakouts"],
          ["Documentation", "Datasheet only", "Controlled drawing, wire list, revision history"],
          ["Traceability", "Rarely lot-controlled", "Full material and build traceability"],
          ["Testing", "Sample-based by supplier", "100% continuity and hi-pot as specified"],
          ["Assembly labor", "High — field routing and tie-down", "Low — drop-in installation"],
          ["Reliability", "Variable", "Repeatable and qualified"],
        ],
      },
      { type: "h2", text: "When you should specify a custom harness" },
      {
        type: "ol",
        items: [
          "The product ships in volume and installation labor matters.",
          "The equipment is subject to vibration, thermal cycling or environmental sealing requirements.",
          "The program requires traceability, certifications of conformance, or first article inspection.",
          "EMI, shield continuity or controlled impedance affects performance.",
          "Field service or maintainability requires keyed, unambiguous connections.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Tip",
        text: "If your team is cutting, labeling and tie-wrapping wire on the production line, you are paying harness assembly costs at your most expensive labor rate. Moving that work to a harness supplier usually pays for itself before the second production lot.",
      },
      { type: "h2", text: "How a custom harness gets built" },
      {
        type: "p",
        text: "At Castmen Electronics the flow is drawing review, manufacturability review, material procurement, cut and strip, termination, assembly on a formboard, protection and marking, then 100% electrical verification and final inspection. Learn more about our [build-to-print harness manufacturing](/custom-wire-harness-manufacturer-usa) and [rapid prototype builds](/rapid-prototype-cable-assembly).",
      },
      {
        type: "spec",
        title: "Typical Castmen harness acceptance criteria",
        lines: [
          "Workmanship .......... IPC/WHMA-A-620 Class 2 or 3",
          "Continuity ........... 100% point-to-point verification",
          "Hi-pot ............... per drawing, typically 500-1500 VDC",
          "Crimp validation ..... pull test per AS/EN specification",
          "Traceability ......... lot and serial recorded per assembly",
        ],
      },
    ],
  },
  {
    slug: "wire-harness-vs-cable-assembly",
    title: "Wire Harness vs Cable Assembly: What's the Difference?",
    subtitle:
      "The two terms are used interchangeably in purchasing conversations — but they describe different products with different cost and reliability profiles.",
    seoTitle:
      "Wire Harness vs Cable Assembly: Key Differences Explained | Castmen Electronics",
    metaDescription:
      "Wire harness vs cable assembly: understand the structural, environmental and cost differences, and learn which one your application actually requires.",
    excerpt:
      "Both organize conductors between two points, but a cable assembly is a jacketed cable terminated at each end, while a harness is a branched network bound together and routed through an entire machine.",
    summary:
      "Clarifies the structural, environmental and cost differences between harnesses and cable assemblies so buyers and engineers specify the right product on the RFQ.",
    category: "Cable Assemblies",
    tags: ["Cable Assemblies", "Wire Harnesses", "Procurement", "Engineering"],
    author: ENG_TEAM,
    authorRole: "Applications Engineering",
    date: "2026-07-14",
    image: crimpingBench,
    imageAlt:
      "Technician crimping a terminal onto a cable assembly at a lit manufacturing workbench",
    mostRead: true,
    content: [
      {
        type: "p",
        text: "Ask five engineers to define the difference and you will get five answers. The distinction matters, though, because it changes tooling, testing, cost per unit and how the product survives its environment.",
      },
      { type: "h2", text: "Cable assembly: one jacket, defined ends" },
      {
        type: "p",
        text: "A cable assembly starts with a finished cable — a jacketed group of conductors — and terminates it with connectors, contacts or lugs. The outer jacket carries the environmental burden: abrasion, moisture, chemicals, and often shielding. Most cable assemblies are point-to-point, with two or three ends.",
      },
      { type: "h2", text: "Wire harness: many branches, bound together" },
      {
        type: "p",
        text: "A wire harness bundles individual wires into a branched geometry that mirrors the machine it lives in. Branches break out at defined lengths to reach different subsystems. Protection is applied where it is needed instead of everywhere, which keeps weight and cost down inside an already-protected enclosure.",
      },
      {
        type: "table",
        head: ["Characteristic", "Cable Assembly", "Wire Harness"],
        rows: [
          ["Structure", "Single jacketed run", "Multi-branch network"],
          ["Ends", "Typically 2", "Often 5-50+"],
          ["Environment", "External, harsh, moving", "Usually inside an enclosure"],
          ["Protection", "Extruded jacket", "Sleeving, tape, conduit, tie-downs"],
          ["Build fixture", "Bench or fixture", "Formboard layout"],
          ["Typical use", "Sensor leads, RF links, power drops", "Avionics bays, control panels, robots"],
        ],
      },
      {
        type: "callout",
        variant: "standard",
        title: "Standards Reference",
        text: "IPC/WHMA-A-620 covers requirements and acceptance for both cable and wire harness assemblies — crimping, soldering, splicing, shielding, marking and workmanship classes. Referencing a class (typically Class 2 or Class 3) on your drawing removes most workmanship ambiguity.",
      },
      { type: "h2", text: "Which should you specify?" },
      {
        type: "ul",
        items: [
          "Choose a **cable assembly** when the run is point-to-point, exposed, flexing, or requires a sealed jacket and defined electrical characteristics such as impedance.",
          "Choose a **wire harness** when multiple subsystems must be connected in one installed unit, when routing geometry is fixed, or when installation labor is the driver.",
          "Many programs use both: harnesses inside the chassis, [RF and coaxial cable assemblies](/rf-cable-manufacturing-testing) for the antenna and instrumentation runs.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Procurement Tip",
        text: "On an RFQ, describe the end use rather than only the label. Send the routing envelope, connector part numbers and environment; a good manufacturer will tell you which construction is cheaper to build and easier to install.",
      },
    ],
  },
  {
    slug: "understanding-ipc-whma-a-620-standards",
    title: "Understanding IPC/WHMA-A-620 Standards",
    subtitle:
      "The industry acceptance standard for cable and wire harness assemblies — what the classes mean and how to reference it correctly.",
    seoTitle:
      "IPC/WHMA-A-620 Explained: Classes, Requirements & Acceptance | Castmen Electronics",
    metaDescription:
      "A practical guide to IPC/WHMA-A-620: Class 1, 2 and 3 requirements, crimp and solder acceptance, shielding, marking, and how to reference the standard on your drawing.",
    excerpt:
      "IPC/WHMA-A-620 is the only widely-adopted acceptance standard specifically written for cable and wire harness assemblies. Referencing it correctly is the fastest way to align expectations between buyer and builder.",
    summary:
      "What IPC/WHMA-A-620 covers, how Class 1, 2 and 3 differ, and the exact language to put on your drawing so acceptance criteria are unambiguous.",
    category: "Quality",
    tags: ["Quality", "IPC/WHMA-A-620", "Standards", "Manufacturing"],
    author: QUALITY_TEAM,
    authorRole: "Quality Assurance",
    date: "2026-07-07",
    image: qualityAudit,
    imageAlt:
      "Quality inspector reviewing wire harness inspection records and documentation with calipers on a workbench",
    editorsPick: true,
    content: [
      {
        type: "p",
        text: "IPC/WHMA-A-620, \"Requirements and Acceptance for Cable and Wire Harness Assemblies,\" is the interconnect industry's common language for workmanship. It defines target, acceptable, defect and process-indicator conditions for nearly every operation performed on a harness.",
      },
      { type: "h2", text: "What the standard covers" },
      {
        type: "ul",
        items: [
          "Wire preparation, stripping damage limits and conductor deformation",
          "Crimped terminations: bell mouth, brush, insulation support, pull-force",
          "Soldered terminations and wetting criteria",
          "Insulation displacement connections and ultrasonic welding",
          "Splices, shielding, braiding and grounding",
          "Connectorization, backshells, strain relief and overmolding",
          "Marking, labeling, coax and RF assemblies, and final inspection",
        ],
      },
      { type: "h2", text: "The three classes" },
      {
        type: "table",
        head: ["Class", "Intended Use", "Typical Programs"],
        rows: [
          ["Class 1", "General electronic products where function is the priority", "Consumer, non-critical industrial"],
          ["Class 2", "Dedicated service products requiring continued performance", "Industrial equipment, robotics, telecom"],
          ["Class 3", "High-performance products where downtime is unacceptable", "Aerospace, defense, life-support medical"],
        ],
      },
      {
        type: "callout",
        variant: "quality",
        title: "Quality Note",
        text: "Class 3 is not simply \"better.\" It carries tighter dimensional and process limits, more documentation and higher inspection cost. Specify Class 3 where reliability demands it and Class 2 where it does not — mixing them intentionally is a legitimate cost strategy.",
      },
      { type: "h2", text: "How to reference it on a drawing" },
      {
        type: "spec",
        title: "Recommended drawing note",
        lines: [
          "1. ASSEMBLE PER IPC/WHMA-A-620, CLASS 3.",
          "2. CRIMP TOOLING AND DIES PER CONNECTOR MFR SPECIFICATION.",
          "3. 100% CONTINUITY AND INSULATION RESISTANCE TEST REQUIRED.",
          "4. MARK ASSEMBLY PER SHEET 2, WITH SERIAL AND REVISION.",
          "5. SUPPLIER TO PROVIDE C OF C WITH EACH SHIPMENT.",
        ],
      },
      {
        type: "callout",
        variant: "best-practice",
        title: "Best Practice",
        text: "Call out the class once, at the assembly level, and let the standard govern the details. Copying individual acceptance figures onto your print creates conflicts the moment the standard revises.",
      },
      {
        type: "p",
        text: "Castmen Electronics builds to IPC/WHMA-A-620 Class 2 and Class 3 under an [AS9100D-aligned quality system](/as9100-wire-harness-manufacturer), with certified operators and documented inspection at every stage.",
      },
    ],
  },
  {
    slug: "why-as9100-certification-matters",
    title: "Why AS9100 Certification Matters",
    subtitle:
      "What AS9100D actually requires of a supplier, and how it changes the risk profile of your aerospace and defense programs.",
    seoTitle:
      "Why AS9100 Certification Matters for Wire Harness Suppliers | Castmen Electronics",
    metaDescription:
      "AS9100D adds aerospace-specific controls on top of ISO 9001: configuration management, counterfeit part prevention, FAI, risk management and traceability. Here is why it matters.",
    excerpt:
      "AS9100D is ISO 9001 plus roughly a hundred aerospace-specific requirements. For a harness supplier, those additions are the difference between building parts and building qualified, traceable, audit-ready hardware.",
    summary:
      "Breaks down what AS9100D adds beyond ISO 9001 and how those requirements reduce program risk for aerospace and defense buyers sourcing interconnect hardware.",
    category: "AS9100",
    tags: ["AS9100", "Quality", "Aerospace", "ISO 9001"],
    author: QUALITY_TEAM,
    authorRole: "Quality Assurance",
    date: "2026-06-30",
    image: qualityAudit,
    imageAlt: "Aerospace quality documentation review during an AS9100 audit",
    mostRead: true,
    content: [
      {
        type: "p",
        text: "AS9100D is built directly on ISO 9001:2015 and then layered with requirements written specifically for aviation, space and defense. When you buy from a certified supplier, you are buying a system that has been audited against those requirements by an accredited third party.",
      },
      { type: "h2", text: "What AS9100D adds beyond ISO 9001" },
      {
        type: "ul",
        items: [
          "**Configuration management** — revision control from drawing release through delivery.",
          "**First article inspection (AS9102)** — documented proof that the first production part meets every drawing characteristic.",
          "**Counterfeit part prevention** — controlled sourcing, franchised distribution and inspection of incoming components.",
          "**Risk management** — formal identification and mitigation of program and process risk.",
          "**Product safety and human factors** — explicit requirements for safety-critical items and operator competency.",
          "**Special process control** — crimping, soldering and molding treated as controlled processes with qualified operators.",
        ],
      },
      {
        type: "callout",
        variant: "note",
        title: "Engineering Note",
        text: "The requirement most often underestimated is configuration management. On multi-year programs, the majority of interconnect escapes trace back to a supplier building the wrong revision — not to poor workmanship.",
      },
      { type: "h2", text: "What it means for your program" },
      {
        type: "table",
        head: ["Risk", "Without AS9100", "With AS9100D Supplier"],
        rows: [
          ["Wrong revision built", "Discovered at integration", "Blocked by configuration control"],
          ["Counterfeit connector", "Possible, hard to trace", "Franchised sourcing + incoming inspection"],
          ["Undocumented change", "Silent process drift", "Change control and requalification"],
          ["Field failure", "Root cause unclear", "Traceable to lot, operator and test record"],
        ],
      },
      {
        type: "callout",
        variant: "best-practice",
        title: "Best Practice",
        text: "Ask suppliers for their certificate, scope statement, and a sample AS9102 First Article Inspection report. The scope matters — a certificate that does not cover cable and harness assembly does not cover your part.",
      },
      {
        type: "p",
        text: "Castmen Electronics operates an AS9100D-aligned quality management system and is ITAR-registered, JCP-certified and CMMC Level 2 self-certified. See our [AS9100 wire harness capabilities](/as9100-wire-harness-manufacturer) and [ITAR-controlled manufacturing](/itar-cable-assembly-manufacturer).",
      },
    ],
  },
  {
    slug: "how-to-select-a-wire-harness-manufacturer",
    title: "How to Select the Right Wire Harness Manufacturer",
    subtitle:
      "A supplier evaluation framework built around the failure modes that actually cost programs money.",
    seoTitle:
      "How to Select a Wire Harness Manufacturer: Supplier Checklist | Castmen Electronics",
    metaDescription:
      "A practical checklist for evaluating wire harness manufacturers: certifications, testing capability, engineering support, capacity, traceability and communication.",
    excerpt:
      "Price per unit is the easiest thing to compare and the worst predictor of total cost. The suppliers that quietly destroy schedules do it through missed revisions, silent substitutions and untested deliveries.",
    summary:
      "A structured supplier evaluation framework covering certifications, testing, engineering access, capacity and traceability — with the questions to ask on every RFQ.",
    category: "Manufacturing",
    tags: ["Manufacturing", "Procurement", "Quality", "Wire Harnesses"],
    author: ENG_TEAM,
    authorRole: "Program Management",
    date: "2026-06-23",
    image: automatedLine,
    imageAlt: "Automated wire processing machinery on a manufacturing floor with spools of wire",
    editorsPick: true,
    content: [
      {
        type: "p",
        text: "Selecting a harness manufacturer is a risk decision, not a purchasing decision. Use a consistent framework across every quote so you are comparing capability, not just price.",
      },
      { type: "h2", text: "1. Certifications and registrations" },
      {
        type: "ul",
        items: [
          "AS9100D for aerospace and defense programs; ISO 9001 as a minimum baseline",
          "ITAR registration for controlled technical data",
          "JCP / DD Form 2345 for access to militarily critical technical data",
          "CMMC alignment for DoD supply chain cybersecurity",
          "IPC/WHMA-A-620 certified operators and inspectors",
        ],
      },
      { type: "h2", text: "2. In-house testing capability" },
      {
        type: "p",
        text: "Ask what percentage of assemblies are electrically verified and what equipment performs the test. \"Visual inspection\" is not testing. Look for 100% continuity, hi-pot where specified, crimp pull testing and — for RF work — [in-house VNA verification](/rf-cable-manufacturing-testing).",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Warning",
        text: "If a supplier cannot describe how a mis-wire would be caught before shipment, assume it would not be. Sample-based continuity testing on a 40-circuit harness leaves real escape probability on every lot.",
      },
      { type: "h2", text: "3. Engineering access" },
      {
        type: "p",
        text: "You should be able to reach the person who will actually review your drawing. A manufacturability review before the first build catches connector interference, unbuildable break-out lengths and shield termination ambiguity while changes are still free.",
      },
      { type: "h2", text: "4. Capacity and scalability" },
      {
        type: "table",
        head: ["Stage", "What to Verify"],
        rows: [
          ["Prototype", "Turnaround in days, not weeks; direct engineer contact"],
          ["Bridge", "Process documentation locked before ramp"],
          ["Production", "Capacity headroom, approved component sources, forecast alignment"],
          ["Sustaining", "Revision control and long-term component obsolescence support"],
        ],
      },
      { type: "h2", text: "5. Traceability and documentation" },
      {
        type: "ul",
        items: [
          "Certificate of conformance with every shipment",
          "Lot traceability on wire, contacts and connectors",
          "Serialized records where the program requires them",
          "Documented corrective action process with measurable RMA data",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Tip",
        text: "Ask for two numbers: RMA rate and on-time delivery, both over the last twelve months. A supplier that tracks them will answer immediately. Castmen holds a sub-0.5% RMA rate and above 98% on-time delivery.",
      },
      {
        type: "p",
        text: "See how we approach [build-to-print manufacturing in the USA](/custom-wire-harness-manufacturer-usa) or review real program outcomes in our [case studies](/case-studies).",
      },
    ],
  },
  {
    slug: "mil-spec-wire-harness-manufacturing-explained",
    title: "MIL-SPEC Wire Harness Manufacturing Explained",
    subtitle:
      "What military specifications actually govern, and how they shape material selection, process control and documentation.",
    seoTitle:
      "MIL-SPEC Wire Harness Manufacturing Explained | Castmen Electronics",
    metaDescription:
      "Understand MIL-SPEC wire harness manufacturing: key specifications, qualified materials, connector families, environmental requirements and documentation obligations.",
    excerpt:
      "\"MIL-SPEC\" is not a single document. It is a family of specifications governing wire, connectors, sleeving, marking and workmanship — and building to them changes procurement as much as production.",
    summary:
      "Explains the specification families behind MIL-SPEC harnesses, the qualified products list model, and the documentation defense programs require at delivery.",
    category: "Defense",
    tags: ["Defense", "MIL-SPEC", "Wire Harnesses", "ITAR"],
    author: ENG_TEAM,
    authorRole: "Defense Programs",
    date: "2026-06-16",
    image: wireHarnessMacro,
    imageAlt: "MIL-SPEC circular connector terminated to a shielded military wire harness",
    content: [
      {
        type: "p",
        text: "Military programs specify performance through documents that control the item itself and the process used to build it. A harness built \"to MIL-SPEC\" is really a harness whose every component appears on a qualified products list and whose every process is traceable.",
      },
      { type: "h2", text: "Specification families you will encounter" },
      {
        type: "table",
        head: ["Specification", "Governs"],
        rows: [
          ["MIL-DTL-38999", "High-density circular connectors for aerospace/defense"],
          ["MIL-DTL-5015", "Heavy-duty circular connectors for ground and shipboard use"],
          ["MIL-W-22759 / M22759", "Fluoropolymer-insulated airframe hookup wire"],
          ["MIL-DTL-27500", "Shielded and jacketed multiconductor cable"],
          ["SAE AS50881", "Wiring for aerospace vehicles — installation and workmanship"],
          ["MIL-STD-461", "EMI/EMC requirements affecting shielding and grounding"],
        ],
      },
      {
        type: "callout",
        variant: "standard",
        title: "Standards Reference",
        text: "AS50881 is often the controlling installation document on airframe programs. It drives bend radius, clamping intervals, separation of power and signal, and shield termination — decisions that must be made before the harness is built, not during installation.",
      },
      { type: "h2", text: "Why MIL-SPEC changes procurement" },
      {
        type: "ul",
        items: [
          "Components must come from qualified sources, which lengthens lead time and eliminates casual substitution.",
          "Lot traceability is mandatory; documentation travels with the hardware.",
          "Tooling is specification-controlled — crimp dies and positioners are not interchangeable.",
          "Technical data is frequently export-controlled, requiring ITAR registration and secure handling.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Warning",
        text: "Never accept an unapproved connector substitution to recover schedule on a defense program. A visually identical commercial part will not carry the qualification, and requalification costs vastly more than the delay it avoided.",
      },
      { type: "h2", text: "Environmental qualification" },
      {
        type: "spec",
        title: "Typical MIL environment requirements",
        lines: [
          "Temperature ......... -55 C to +200 C depending on wire spec",
          "Vibration ........... MIL-STD-810 random profiles",
          "Salt fog / humidity . sealed backshells, potting, environmental grommets",
          "EMI ................. MIL-STD-461 CE/RE limits, 360 degree shield termination",
          "Altitude ............ corona and dielectric withstand at reduced pressure",
        ],
      },
      {
        type: "p",
        text: "Castmen manufactures [MIL-SPEC cable assemblies](/mil-spec-cable-assemblies) as an ITAR-registered, JCP-certified and CMMC Level 2 self-certified U.S. manufacturer.",
      },
    ],
  },
  {
    slug: "common-wire-harness-failures-and-how-to-prevent-them",
    title: "Common Wire Harness Failures and How to Prevent Them",
    subtitle:
      "The failure modes that dominate field returns — and the controls that eliminate each one at the source.",
    seoTitle:
      "Common Wire Harness Failures & How to Prevent Them | Castmen Electronics",
    metaDescription:
      "Chafing, crimp failures, strain relief problems, contact retention issues and shield termination faults account for most harness field returns. Learn the root causes and preventive controls.",
    excerpt:
      "Harness failures are rarely exotic. Five mechanisms account for the overwhelming majority of returns, and every one of them is preventable with controls applied before the first unit ships.",
    summary:
      "A field-failure breakdown covering chafing, crimp defects, strain relief, contact retention and shield termination, with the specific preventive control for each.",
    category: "Engineering",
    tags: ["Engineering", "Reliability", "Quality", "Wire Harnesses"],
    author: ENG_TEAM,
    authorRole: "Reliability Engineering",
    date: "2026-06-09",
    image: crimpingBench,
    imageAlt: "Close-up of a technician inspecting a crimped wire termination",
    mostRead: true,
    content: [
      {
        type: "p",
        text: "When a harness comes back from the field, the root cause almost always sits in one of five categories. Understanding them turns reactive troubleshooting into preventive engineering.",
      },
      { type: "h2", text: "1. Chafing and abrasion" },
      {
        type: "p",
        text: "Vibration drives insulation against structure until the conductor is exposed. It is the leading cause of intermittent faults in mobile and airborne equipment.",
      },
      {
        type: "callout",
        variant: "best-practice",
        title: "Prevention",
        text: "Specify clamping intervals, minimum bend radius and abrasion sleeving at every structural pass-through. Grommet or edge-protect every hole the harness passes through, without exception.",
      },
      { type: "h2", text: "2. Crimp defects" },
      {
        type: "p",
        text: "Under-crimping leaves a high-resistance joint that heats and eventually opens; over-crimping fractures strands and reduces pull strength. Both usually trace to uncontrolled tooling.",
      },
      {
        type: "ul",
        items: [
          "Use only manufacturer-specified dies and positioners",
          "Verify with periodic pull testing and cross-section analysis",
          "Log tool calibration and operator certification",
        ],
      },
      { type: "h2", text: "3. Inadequate strain relief" },
      {
        type: "p",
        text: "Stress concentrates where the conductor exits a rigid termination. Without backshells, boots or overmolding, cyclic motion fatigues the conductor at that exact point. [Overmolding](/blog/overmolding-explained) distributes that load across a controlled radius.",
      },
      { type: "h2", text: "4. Contact retention and insertion faults" },
      {
        type: "p",
        text: "Contacts that are not fully seated pass a continuity test and back out under vibration. Push-pull verification after insertion is a two-second operation that eliminates the mode entirely.",
      },
      { type: "h2", text: "5. Shield and ground termination" },
      {
        type: "p",
        text: "Pigtail grounds create inductance that undermines EMI performance and can fatigue mechanically. Where EMI is controlled, use 360-degree shield termination into the backshell.",
      },
      {
        type: "table",
        head: ["Failure Mode", "Detection Method", "Preventive Control"],
        rows: [
          ["Chafing", "Visual inspection, insulation resistance", "Sleeving, clamping, edge protection"],
          ["Crimp defect", "Pull test, micro-section", "Controlled tooling and calibration"],
          ["Strain relief", "Flex cycle test", "Backshells, boots, overmolding"],
          ["Contact retention", "Push-pull verification", "Post-insertion verification step"],
          ["Shield termination", "Hi-pot, EMI scan", "360 degree backshell termination"],
        ],
      },
      {
        type: "callout",
        variant: "quality",
        title: "Quality Note",
        text: "Castmen maintains an RMA rate below 0.5% by testing 100% of assemblies electrically and treating every escape as a documented corrective action, not an isolated event.",
      },
    ],
  },
  {
    slug: "overmolding-explained",
    title: "Overmolding Explained",
    subtitle:
      "How molded strain relief and sealing are produced, when they are worth the tooling investment, and what to specify.",
    seoTitle:
      "Cable Overmolding Explained: Process, Materials & When to Use It | Castmen Electronics",
    metaDescription:
      "Overmolding creates sealed, strain-relieved cable terminations. Learn the low-pressure and injection processes, material options, IP sealing performance and tooling considerations.",
    excerpt:
      "Overmolding encapsulates a termination in polymer, delivering strain relief, environmental sealing and a finished appearance in a single operation — with tooling economics that reward volume.",
    summary:
      "Covers overmolding processes and materials, the sealing and strain-relief performance they deliver, and how to decide between molded boots and custom tooling.",
    category: "Cable Assemblies",
    tags: ["Cable Assemblies", "Overmolding", "Manufacturing", "Medical"],
    author: ENG_TEAM,
    authorRole: "Process Engineering",
    date: "2026-06-02",
    image: overmoldingImg,
    imageAlt:
      "Overmolded strain relief boot on a multi-pin cable connector on a brushed metal surface",
    content: [
      {
        type: "p",
        text: "Overmolding is the process of forming a polymer body directly over a terminated connection. The result is a single, sealed part with no separate strain relief hardware to loosen, and no ingress path for moisture or contaminants.",
      },
      { type: "h2", text: "Processes" },
      {
        type: "table",
        head: ["Process", "Pressure / Temp", "Best For"],
        rows: [
          ["Low-pressure molding", "Low, ~200 C polyamide", "Delicate electronics, PCB potting, sensor leads"],
          ["Injection molding", "High, thermoplastic", "High-volume, precise cosmetic finish"],
          ["Two-shot molding", "Sequential shots", "Rigid core with soft-touch outer grip"],
        ],
      },
      { type: "h2", text: "Material selection" },
      {
        type: "ul",
        items: [
          "**PVC** — economical, good general-purpose flexibility",
          "**TPU** — abrasion resistance and excellent flex life for moving applications",
          "**TPE** — soft-touch, wide durometer range",
          "**Polyamide (hot melt)** — low-pressure sealing over sensitive components",
          "**Medical-grade compounds** — biocompatible options where patient contact applies",
        ],
      },
      {
        type: "callout",
        variant: "note",
        title: "Engineering Note",
        text: "Adhesion is a chemistry problem, not a pressure problem. The molded compound must bond to the cable jacket material. Matching the mold compound family to the jacket family is the single largest driver of seal integrity.",
      },
      { type: "h2", text: "When overmolding earns its tooling cost" },
      {
        type: "ol",
        items: [
          "The assembly requires IP67 or better sealing at the termination.",
          "The cable flexes repeatedly in service and standard boots fatigue.",
          "Volume is high enough to amortize a mold across the program.",
          "The product is user-facing and finish quality is part of the brand.",
          "Tamper resistance or a captive, non-serviceable joint is required.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Tip",
        text: "For prototypes and low-volume programs, heat-shrink boots with adhesive liner give most of the strain-relief benefit at zero tooling cost. Move to a custom mold when annual volume justifies it — usually in the low thousands.",
      },
      {
        type: "p",
        text: "Need molded terminations on a fast schedule? See our [rapid prototype cable assembly](/rapid-prototype-cable-assembly) capabilities.",
      },
    ],
  },
  {
    slug: "manufacturability-review-dfm-for-cable-assemblies",
    title: "Manufacturability Review (DFM) for Cable Assemblies",
    subtitle:
      "The pre-build review that removes cost and risk from a harness before the first wire is cut.",
    seoTitle:
      "Manufacturability Review (DFM) for Cable Assemblies | Castmen Electronics",
    metaDescription:
      "A manufacturability review catches unbuildable geometry, tooling conflicts, ambiguous drawings and cost drivers before production. Here is what a thorough DFM review covers.",
    excerpt:
      "Every dollar removed during a manufacturability review is a dollar that never enters the recurring unit cost. Most harness drawings contain three to five changes that reduce cost without touching performance.",
    summary:
      "What a rigorous manufacturability review examines on a cable assembly drawing, the most common findings, and how to run the review early enough for it to matter.",
    category: "Engineering",
    tags: ["Engineering", "DFM", "Cable Assemblies", "Manufacturing"],
    author: ENG_TEAM,
    authorRole: "Manufacturing Engineering",
    date: "2026-05-26",
    image: automatedLine,
    imageAlt: "Engineering review of cable assembly manufacturing process on the production floor",
    editorsPick: true,
    content: [
      {
        type: "p",
        text: "A manufacturability review is a structured evaluation of a drawing package against how the part will actually be built. It is performed before quoting is finalized, while every change is still free.",
      },
      { type: "h2", text: "What the review examines" },
      {
        type: "ul",
        items: [
          "**Drawing completeness** — wire list, pinout, marking, tolerance and acceptance criteria present and non-contradictory",
          "**Component availability** — lead times, obsolescence risk, franchised sourcing, approved alternates",
          "**Tooling compatibility** — crimp dies, positioners, molds and test fixtures already qualified or newly required",
          "**Geometry** — breakout lengths, bend radius, connector clearance, formboard layout feasibility",
          "**Test strategy** — how each circuit will be verified and whether a fixture is warranted",
          "**Cost drivers** — hand operations that could be automated, over-specified materials, unnecessary tolerance",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        title: "Tip",
        text: "Send drawings in native or PDF form with the wire list as a separate spreadsheet. Transcribing a wire list from a drawing image is the most common source of first-article discrepancies.",
      },
      { type: "h2", text: "Findings we see most often" },
      {
        type: "table",
        head: ["Finding", "Impact", "Typical Resolution"],
        rows: [
          ["Tolerance tighter than needed", "Higher scrap and inspection", "Open tolerance on non-critical branches"],
          ["Unavailable connector", "Weeks of delay", "Qualified alternate identified pre-build"],
          ["Ambiguous shield termination", "Field EMI issues", "Define 360 degree backshell method"],
          ["No test callout", "Escapes to integration", "Add 100% continuity and hi-pot"],
          ["Unbuildable breakout length", "Rework at first article", "Adjust formboard geometry"],
        ],
      },
      {
        type: "callout",
        variant: "best-practice",
        title: "Best Practice",
        text: "Run the review before the drawing is released, not after. Post-release changes require revision control, requalification and often a new first article — turning a five-minute conversation into a multi-week action.",
      },
      {
        type: "p",
        text: "Castmen performs a manufacturability review on every RFQ at no cost. Send your package through the [quote request form](/#contact) and an engineer will respond with findings, typically within 24 hours.",
      },
    ],
  },
  {
    slug: "how-electrical-testing-improves-reliability",
    title: "How Electrical Testing Improves Reliability",
    subtitle:
      "Continuity, hi-pot, insulation resistance and RF verification — what each test catches and why sampling is not enough.",
    seoTitle:
      "How Electrical Testing Improves Wire Harness Reliability | Castmen Electronics",
    metaDescription:
      "Continuity, hi-pot, insulation resistance and VNA testing each catch different defects. Learn why 100% electrical verification outperforms sample-based inspection.",
    excerpt:
      "Visual inspection cannot see a marginal crimp, a swapped pair inside a bundle, or insulation damage under a sleeve. Electrical testing can — and the math strongly favors testing every unit.",
    summary:
      "Explains what each electrical test detects, why 100% verification beats sampling statistically, and how test records support traceability and root-cause analysis.",
    category: "Quality",
    tags: ["Quality", "Testing", "Reliability", "Aerospace"],
    author: QUALITY_TEAM,
    authorRole: "Test Engineering",
    date: "2026-05-19",
    image: electricalTesting,
    imageAlt:
      "Benchtop electrical test instrument displaying waveform traces while testing a cable assembly",
    content: [
      {
        type: "p",
        text: "Every electrical test detects a specific class of defect. Understanding which test catches what is the difference between a meaningful test plan and a checkbox.",
      },
      { type: "h2", text: "The core tests" },
      {
        type: "table",
        head: ["Test", "Detects", "Typical Parameters"],
        rows: [
          ["Continuity", "Opens, mis-wires, swapped pairs", "Low-voltage point-to-point, all circuits"],
          ["Insulation resistance", "Insulation damage, contamination", "100-500 VDC, >100 MΩ typical"],
          ["Hi-pot (dielectric withstand)", "Marginal insulation, creepage faults", "500-1500 VDC per drawing"],
          ["Contact resistance", "Marginal crimps, oxidation", "Four-wire milliohm measurement"],
          ["VNA / RF", "Insertion loss, VSWR, impedance", "Swept to 20 GHz for coax assemblies"],
        ],
      },
      {
        type: "callout",
        variant: "quality",
        title: "Quality Note",
        text: "Continuity confirms the circuit exists. Hi-pot confirms nothing else exists. Programs that run only continuity ship assemblies with insulation damage that will not fail until the equipment is energized in the field.",
      },
      { type: "h2", text: "Why sampling falls short" },
      {
        type: "p",
        text: "Assume a process with a 0.5% per-unit defect rate and a 10% sample. Roughly nine out of ten defective assemblies ship. Escapes are not caught by the customer's incoming inspection either — they surface at integration or, worse, in service, where the cost multiplies by orders of magnitude.",
      },
      {
        type: "spec",
        title: "Castmen standard verification flow",
        lines: [
          "1. In-process inspection ...... per operation, IPC/WHMA-A-620",
          "2. Continuity ................. 100% of circuits, 100% of units",
          "3. Hi-pot / IR ................ per drawing requirement",
          "4. RF verification ............ VNA sweep, serialized record",
          "5. Final visual ............... marking, workmanship, packaging",
          "6. Documentation .............. C of C and test data with shipment",
        ],
      },
      {
        type: "callout",
        variant: "best-practice",
        title: "Best Practice",
        text: "Require test records to be retained and traceable to serial number. When a field issue does occur, having the as-built test data turns a program-wide investigation into a single-unit root cause.",
      },
      {
        type: "p",
        text: "Castmen tests 100% of assemblies electrically and offers [standalone VNA testing services](/rf-cable-manufacturing-testing) for RF and coaxial assemblies built elsewhere.",
      },
    ],
  },
];

const WORDS_PER_MINUTE = 225;

const blockWords = (b: Block): number => {
  switch (b.type) {
    case "h2":
    case "h3":
    case "p":
      return b.text.split(/\s+/).length;
    case "ul":
    case "ol":
      return b.items.join(" ").split(/\s+/).length;
    case "callout":
      return (b.title + " " + b.text).split(/\s+/).length;
    case "table":
      return [...b.head, ...b.rows.flat()].join(" ").split(/\s+/).length;
    case "spec":
      return b.lines.join(" ").split(/\s+/).length;
    default:
      return 0;
  }
};

export const readingTime = (article: Article): number =>
  Math.max(1, Math.round(article.content.reduce((n, b) => n + blockWords(b), 0) / WORDS_PER_MINUTE));

export const slugifyHeading = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export const sortedArticles = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const getRelated = (article: Article, limit = 3) =>
  sortedArticles
    .filter((a) => a.slug !== article.slug)
    .map((a) => ({
      a,
      score:
        (a.category === article.category ? 3 : 0) +
        a.tags.filter((t) => article.tags.includes(t)).length,
    }))
    .sort((x, y) => y.score - x.score)
    .slice(0, limit)
    .map((x) => x.a);

export const activeCategories = Array.from(
  new Set(articles.map((a) => a.category))
).sort();
