import React, { PropsWithChildren } from "react";

/* ================= RAC STRUCTURE ================= */

export default function RACPage() {
  return (
    <div className="w-full">
      <RACStructure />
      <ResearchTeam />
    </div>
  );
}

function RACStructure() {
  return (
    <div className="w-full flex justify-center p-6">
      <div className="flex flex-col items-center gap-8">

        <Box>
          <strong>Research Advisory Council (RAC)</strong>
          <br />
          Chaired by Prof. Udhav V. Bhosle
          <br />
          (Vice-Chancellor)
        </Box>

        <Connector />

        <Box>
          <strong>Director – RDC</strong>
          <br />
          Dr. Sambhaji M. Pawar
          <br />
          (Convener)
        </Box>

        <Connector />

        <div className="flex gap-6 flex-wrap justify-center">
          <Box>
            <strong>Committee 1</strong>
            <br />
            Finance & Infrastructure
            <br />
            Prof. S. T. Kumbhar
          </Box>

          <Box>
            <strong>Committee 2</strong>
            <br />
            Research Program & Policy Development
            <br />
            Dr. P. D. Bhange
          </Box>

          <Box>
            <strong>Committee 3</strong>
            <br />
            Collaboration & Community
            <br />
            Dr. A. D. Sawant
          </Box>

          <Box>
            <strong>Committee 4</strong>
            <br />
            Product Development, Monitoring & Commercialization
            <br />
            Dr. S. M. Hirikude
          </Box>

          <Box>
            <strong>Committee 5</strong>
            <br />
            IPR, Legal & Ethical Matters
            <br />
            Prof. J. P. Lavande
          </Box>
        </div>
      </div>
    </div>
  );
}

/* ================= RESEARCH TEAM ================= */

type ResearchMember = {
  sr: number;
  name: string;
  designation: string;
  research: string;
};

function ResearchTeam() {
  const team: ResearchMember[] = [
    {
      sr: 1,
      name: "Dr. Sambhaji M. Pawar",
      designation: "Associate Professor in Physics and Director (R&D)",
      research:
        "Synthesis of nano-materials for advanced energy conversion and storage devices (CIGS, CZTS thin film solar cells), electrocatalysis for hydrogen fuel generation, electrochemical CO2 reduction, supercapacitors, Li-ion and Na-ion batteries.",
    },
    {
      sr: 2,
      name: "Dr. Anand D. Sawant",
      designation: "Associate Professor in Chemistry",
      research:
        "Ionic liquid catalyzed selective organic transformations; functionalized molecules for energy applications; natural molecules for biological applications and biomass conversion aligned with UNSDGs.",
    },
    {
      sr: 3,
      name: "Dr. Pallavi D. Bhange",
      designation: "Associate Professor in Chemistry",
      research:
        "Synthesis of heterogeneous catalysts for organic transformations and nano/solid-state materials for hydrogen generation and photocatalysis.",
    },
    {
      sr: 4,
      name: "Prof. Subhash T. Kumbhar",
      designation: "Professor, School of Pharmaceutical Sciences",
      research:
        "Drug development, research design, formulation research, and animal studies.",
    },
    {
      sr: 5,
      name: "Prof. Jiwan P. Lavande",
      designation: "Professor, School of Pharmaceutical Sciences",
      research:
        "Formulation, development and evaluation of oral fast dissolving tablets and gastroretentive drug delivery systems.",
    },
    {
      sr: 6,
      name: "Dr. S. M. Hirikude",
      designation:
        "Assistant Professor, Electronics and Communication Engineering",
      research:
        "Wireless and mobile communication, navigation, Internet of Things, signal processing, and mechatronics.",
    },
  ];

  return (
    <div className="w-full p-6 mt-12">
      <h2 className="text-2xl font-bold text-center mb-6">
        Research Team
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-black border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-black p-2">Sr. No</th>
              <th className="border border-black p-2">Name of Faculty</th>
              <th className="border border-black p-2">Research Area</th>
            </tr>
          </thead>
          <tbody>
            {team.map((member) => (
              <tr key={member.sr}>
                <td className="border border-black p-2 text-center">
                  {member.sr}
                </td>
                <td className="border border-black p-2">
                  <strong>{member.name}</strong>
                  <br />
                  {member.designation}
                </td>
                <td className="border border-black p-2 text-sm leading-relaxed">
                  {member.research}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ================= COMMON COMPONENTS ================= */

function Box({ children }: PropsWithChildren) {
  return (
    <div className="border-2 border-black rounded-xl px-4 py-3 text-center max-w-xs shadow-sm">
      {children}
    </div>
  );
}

function Connector() {
  return <div className="w-px h-8 bg-black" />;
}
