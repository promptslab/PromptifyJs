export const multilabelClassificationData = {
  samples: [
    {
      context: `The Vietnam War (also known by other names) was a conflict in Vietnam, Laos, and Cambodia from 1 November 1955 to the fall of Saigon on 30 April 1975. It was the second of the Indochina Wars and was officially fought between North Vietnam and South Vietnam. The north was supported by the Soviet Union, China, and other communist states, while the south was supported by the United States and other anti-communist allies. The war is widely considered to be a Cold War-era proxy war. It lasted almost 20 years, with direct U.S. involvement ending in 1973. The conflict also spilled over into neighboring states, exacerbating the Laotian Civil War and the Cambodian Civil War, which ended with all three countries becoming communist states by 1975.`,
      expected_answer: {
        'main class': 'Vietnam War',
        1: {
          'sub-class': 'Causes and Background',
          branch: 'History',
          group: 'Political',
        },
        2: {
          'sub-class': 'Military Tactics and Strategies',
          branch: 'Military Science',
          group: 'Warfare',
        },
        3: {
          'sub-class': 'International Relations',
          branch: 'Political Science',
          group: 'Diplomacy',
        },
        4: {
          'sub-class': 'Social and Cultural Impact',
          branch: 'Sociology',
          group: 'Culture and Society',
        },
        5: {
          'sub-class': 'Legacy and Aftermath',
          branch: 'History',
          group: 'Political',
        },
      },
    },
    {
      context: `MRI was originally called NMRI (nuclear magnetic resonance imaging), but "nuclear" was dropped to avoid negative associations. Certain atomic nuclei are able to absorb radio frequency energy when placed in an external magnetic field; the resultant evolving spin polarization can induce a RF signal in a radio frequency coil and thereby be detected. In clinical and research MRI, hydrogen atoms are most often used to generate a macroscopic polarization that is detected by antennas close to the subject being examined. Hydrogen atoms are naturally abundant in humans and other biological organisms, particularly in water and fat. For this reason, most MRI scans essentially map the location of water and fat in the body. Pulses of radio waves excite the nuclear spin energy transition, and magnetic field gradients localize the polarization in space. By varying the parameters of the pulse sequence, different contrasts may be generated between tissues based on the relaxation properties of the hydrogen atoms therein.`,
      expected_answer: {
        'main class': 'MRI',
        1: {
          'sub-class': 'Principles',
          branch: 'Physics',
          group: 'Medical imaging',
        },
        2: {
          'sub-class': 'Applications',
          branch: 'Medicine',
          group: 'Diagnostic imaging',
        },
        3: {
          'sub-class': 'Technique',
          branch: 'Radiology',
          group: 'Imaging',
        },
      },
    },
    {
      context: `A quantum computer is a computer that exploits quantum mechanical phenomena. At small scales, physical matter exhibits properties of both particles and waves, and quantum computing leverages this behavior using specialized hardware. Classical physics cannot explain the operation of these quantum devices, and a scalable quantum computer could perform some calculations exponentially faster than any modern "classical" computer. In particular, a large-scale quantum computer could break widely used encryption schemes and aid physicists in performing physical simulations; however, the current state of the art is still largely experimental and impractical.

The basic unit of information in quantum computing is the qubit, similar to the bit in traditional digital electronics. Unlike a classical bit, a qubit can exist in a superposition of its two "basis" states, which loosely means that it is in both states simultaneously. When measuring a qubit, the result is a probabilistic output of a classical bit. If a quantum computer manipulates the qubit in a particular way, wave interference effects can amplify the desired measurement results. The design of quantum algorithms involves creating procedures that allow a quantum computer to perform calculations efficiently.`,
      expected_answer: {
        'main class': 'Quantum Computing',
        1: {
          'sub-class': 'Fundamentals',
          branch: 'Physics',
          group: 'Quantum Mechanics',
        },
        2: {
          'sub-class': 'Hardware',
          branch: 'Engineering',
          group: 'Quantum Engineering',
        },
        3: {
          'sub-class': 'Algorithms',
          branch: 'Computer Science',
          group: 'Quantum Information Theory',
        },
        4: {
          'sub-class': 'Applications',
          branch: 'Interdisciplinary',
          group: 'Quantum Computing Applications',
        },
      },
    },
  ],
};
