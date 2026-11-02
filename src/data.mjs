// All content comes from Rocco Acocella's CV (PDF, Nov 2026). Duplicated entries in the PDF are merged.
export const cities = {
  milan: { name: 'Milan', lat: 45.46, lon: 9.19 },
  chieri: { name: 'Chieri, Turin', lat: 45.01, lon: 7.82 },
  rome: { name: 'Rome', lat: 41.9, lon: 12.5 },
  basel: { name: 'Basel', lat: 47.56, lon: 7.59 },
  vienna: { name: 'Vienna', lat: 48.21, lon: 16.37 },
  brighton: { name: 'Brighton', lat: 50.82, lon: -0.14 },
  cambridge: { name: 'Cambridge', lat: 52.21, lon: 0.12 },
  maynooth: { name: 'Maynooth', lat: 53.38, lon: -6.59 },
  dublin: { name: 'Dublin', lat: 53.35, lon: -6.26 },
  brussels: { name: 'Brussels', lat: 50.85, lon: 4.35 },
  reykjavik: { name: 'Reykjavík', lat: 64.15, lon: -21.94 },
  athens: { name: 'Athens', lat: 37.98, lon: 23.73 },
  sharm: { name: 'Sharm El-Sheikh', lat: 27.92, lon: 34.33 },
  malta: { name: 'Malta', lat: 35.9, lon: 14.51 },
  venice: { name: 'Venice', lat: 45.44, lon: 12.33 },
  como: { name: 'Como', lat: 45.81, lon: 9.09 },
  online: { name: 'Online', lat: null, lon: null }
};

export const workshops = [
  {
    id: 'w-vienna', short: 'Multilingualism', city: 'vienna', count: null, sortDate: '2026-10-23',
    title: 'Multilingualism and Attention Alternation: Creative-Cerebral Strategies',
    venue: 'World Languages Conference 2026, American International School of Vienna',
    when: '23 October 2026', length: 'In person', audience: 'Headcount not recorded',
    text: 'How multilingualism and switching attention lift learning and group creativity. Participants used languages, gestures and cultural perspectives as a creative method, moving between divergent and convergent modes, and left with practical strategies for innovation and collaborative learning.'
  },
  {
    id: 'w-chromasoma', short: 'Chromasoma', city: 'online', count: null, sortDate: '2026-06-19',
    title: 'Chromasoma: Minds, Memories, Morphing, and Surfacing Collective Intuition',
    venue: 'Possibility Studies Network', when: '19 June 2026', length: 'Online', audience: 'Headcount not recorded',
    text: 'An experimental collaborative workshop combining body mapping, visual scoring, quantum-inspired tools and AI-assisted creation. Colour became a rhizomatic space for surfacing memories, sensations, intuitions and rhythms, which were turned into a shared animated visual field: a collective prelude to the conference.'
  },
  {
    id: 'w-turin', short: 'Alternating Attention', city: 'chieri', count: 48, sortDate: '2026-05-08',
    title: 'Alternating Attention as a Catalyst for a Creative-Cerebral Educational Perspective',
    venue: 'Italian Summit 2026, International School of Turin', when: '8 May 2026', length: '1 hour', audience: '48 IB teachers',
    text: 'Teachers played through an alternate scenario at the meeting point of creative cognition, play, sense-making and collaboration. Experiential activities used transdisciplinary materials and systemic thinking, and a facilitating card deck trained deliberate attention-shifting and metacognitive awareness for cognitive and temporal flexibility.'
  },
  {
    id: 'w-mita', short: 'Idea Bouncing', city: 'milan', count: 14, sortDate: '2026-03-21',
    title: 'Idea Bouncing: Building the Future through Vibrational LEGOciation',
    venue: 'MITA 2026, American School of Milan', when: '21 March 2026', length: '1 hour', audience: '14 teachers',
    text: 'Language, communication and creative cognition in practice. Linguistic interaction and collaborative problem-solving, with deliberate attention-shifting, turned abstract ideas into built, tangible outcomes, showing how dialogue mediates creativity and learning design.'
  },
  {
    id: 'w-friction', short: 'Productive Friction', city: 'online', count: 30, sortDate: '2026-01-19',
    title: 'Productive Friction: Creative Freedom in Times of Political Contestation',
    venue: '5th Virtual Conference of the Possibility Studies Network', when: '19 January 2026', length: '2 hours, online', audience: '30 participants',
    text: 'What happens to a creative community once its annual conference ends? Participants designed local PSN hubs, small events that carry the network into their own places, to keep connection alive and ease everyday tension through shared creative work.'
  },
  {
    id: 'w-csm26', short: 'LEGOciation', city: 'milan', count: 25, sortDate: '2026-01-07',
    title: 'Idea Bouncing: Building the Future through Vibrational LEGOciation',
    venue: 'Canadian School of Milan', when: '7 January 2026', length: '1 hour', audience: '25 teachers',
    text: 'The in-house edition of Idea Bouncing for colleagues: linguistic interaction, collaborative building and deliberate attention-shifting to move ideas from abstract to tangible.'
  },
  {
    id: 'w-basel', short: 'Idea to Creation', city: 'basel', count: 15, sortDate: '2025-10-24',
    title: 'From Idea to Creation: A Creative-Cerebral Perspective for Language Education',
    venue: '2nd Annual World Languages Conference, International School of Basel', when: '24 October 2025', length: '1 hour 20 minutes', audience: '15 teachers',
    text: 'Experiential activities for language teachers on how communication and language act as mediators of creativity, using structured collaboration and metacognitive awareness to turn ideas into purposeful learning design.'
  },
  {
    id: 'w-rome', short: 'Thinker', city: 'rome', count: 70, sortDate: '2025-06-06',
    title: 'IB Learner Profile Thinker: Una prospettiva creativo-cerebrale per la didattica dell’italiano e oltre!',
    venue: 'Italian Summit 2025, Marymount International School Rome', when: '6 June 2025', length: '2 hours', audience: '70 IB teachers',
    text: 'The IB Learner Profile attribute Thinker seen through creativity and cognitive neuroscience. Educators reflected on their own teaching approaches and cognitive styles, and explored brain-based learning and strategies that bring creative thinking into the Learner Profile.'
  },
  {
    id: 'w-ai', short: 'R(AI)sing Awareness', city: 'milan', count: 25, sortDate: '2025-01-15',
    title: 'R(AI)sing Awareness in the Pl(AI)ground',
    venue: 'Canadian School of Milan', when: 'January to February 2025', length: '4.5 hours over three sessions', audience: '25 teachers',
    text: 'Staff training on artificial intelligence: prompt frameworks in ChatGPT for lesson plans, assessments, reports and creative tasks, and hands-on use of NotebookLM, Napkin AI, Gamma, Revoldiv and NoteGPT for designing teaching content.'
  },
  {
    id: 'w-journey', short: 'The Thinking Journey', city: 'milan', count: 80, sortDate: '2024-10-15',
    title: 'The Thinking Journey',
    venue: 'Canadian School of Milan', when: 'October 2024', length: '2 hours', audience: '80 MYP students',
    text: 'Students explored how the brain works while building critical thinking. In Shape Your Brain they pictured neural growth as a response to challenge; in LEGOciation at the Station they rotated through nine thematic stations of dialogue and LEGO construction, closing with reflection on high-quality thinking.'
  },
  {
    id: 'w-iceland24', short: 'Creative Mindset', city: 'reykjavik', count: 14, sortDate: '2024-10-01',
    title: 'Creative Mindset and Language Learning',
    venue: 'University of Iceland', when: 'October 2024', length: '2 hours, online', audience: '14 pre-service teachers',
    text: 'Growth mindset meets creative thinking for future language teachers: creativity and neuroplasticity in theory, then Random Word, Random Picture, Reverse Brainstorming and Six Thinking Hats in practice.'
  },
  {
    id: 'w-rights', short: 'Human Rights & the Brain', city: 'milan', count: 14, sortDate: '2024-02-15',
    title: 'Human Rights, Emotions & the Brain: a Transversal Bridge between Past and Future',
    venue: 'Canadian School of Milan', when: 'February to April 2024', length: '12 sessions', audience: '14 MYP3 students',
    text: 'A series on creativity, change and perspective within personal and cultural expression and fairness and development. Memory, thinking strategies, emotions and brain function were explored through Memory, LEGO and jigsaw games, and students presented on human rights, memory, emotional intelligence and divergent thinking.'
  },
  {
    id: 'w-iceland23', short: 'Mindset Journey', city: 'reykjavik', count: 14, sortDate: '2023-03-15',
    title: 'The Creative Mindset Journey',
    venue: 'University of Iceland, Reykjavík', when: 'March to April 2023', length: '8 hours in person', audience: '14 pre-service teachers',
    text: 'In-person sessions joining growth mindset with creative thinking methods to build future teachers’ creative dispositions. Participants reported more confidence, engagement and enthusiasm for using creative strategies in their teaching.'
  }
];

export const talks = [
  { city: 'brighton', title: 'Mission Possible: Hub Creation', kind: 'Poster', conf: 'Waves of Possibilities, 6th International Possibility Studies Conference, University of Sussex', when: 'July 2026' },
  { city: 'brighton', title: 'Life and its synergistic interplay: a possibility for the network', kind: 'Symposium', conf: 'Waves of Possibilities, 6th International Possibility Studies Conference, University of Sussex', when: 'July 2026' },
  { city: 'maynooth', title: 'Unlocking the Power of Vision: The Interplay of Time, Space and Human Energy', kind: 'Paper', conf: 'Communities of Possibilities, 5th International Possibility Studies Conference, Maynooth University', when: 'July 2025' },
  { city: 'cambridge', title: 'The SEC-Cr Dimensional Continuum: A Journey through Energy and Potential', kind: 'Paper', conf: 'Expanding Research on Possibilities, 4th International Possibility Studies Conference, Faculty of Education, University of Cambridge', when: 'July 2024' },
  { city: 'dublin', title: 'An alternating attention-driven theory of creativity: a sensory-processing approach for Higher Education', kind: 'Paper', conf: 'Cultivating the Possible, 3rd International Possibility Studies Conference', when: 'July 2023' },
  { city: 'brussels', title: 'How Experience, Creativity and Multiple Intelligence influence Language Teaching', kind: 'Online paper', conf: '2nd World Conference on Future of Education', when: 'September 2020' }
];

export const conferences = [
  { city: 'vienna', title: '3rd World Languages Conference', place: 'American International School of Vienna', when: '23–24 Oct 2026' },
  { city: 'brighton', title: 'Waves of Possibilities, 6th International Possibility Studies Conference', place: 'University of Sussex', when: '29 Jun – 2 Jul 2026' },
  { city: 'chieri', title: 'Italian Summit 2026', place: 'International School of Turin', when: 'May 2026' },
  { city: 'milan', title: 'MITA 2026, Milan International Teacher Association', place: 'American School of Milan', when: '21 Mar 2026' },
  { city: 'basel', title: '2nd World Languages Conference', place: 'International School of Basel', when: '23–24 Oct 2025' },
  { city: 'milan', title: 'Learning Festival', place: 'Museo Nazionale della Scienza e della Tecnologia Leonardo da Vinci', when: '10–11 Oct 2025' },
  { city: 'maynooth', title: 'Communities of Possibilities, 5th International Possibility Studies Conference', place: 'Maynooth', when: '30 Jun – 4 Jul 2025' },
  { city: 'rome', title: 'Italian Summit 2025', place: 'Marymount International School Rome', when: '6 Jun 2025' },
  { city: 'milan', title: 'MITA 2025', place: 'Milan', when: '22 Mar 2025' },
  { city: 'cambridge', title: 'Expanding Research on Possibilities, 4th International Possibility Studies Conference', place: 'Cambridge', when: '8–12 Jul 2024' },
  { city: 'milan', title: 'MITA 2024', place: 'Milan', when: '22 Mar 2024' },
  { city: 'dublin', title: 'Cultivating the Possible, 3rd International Possibility Studies Conference', place: 'Dublin', when: '17–21 Jul 2023' },
  { city: 'brussels', title: '2nd World Conference on Future of Education', place: 'Brussels', when: '11–13 Sep 2020' },
  { city: 'sharm', title: '3rd World Youth Forum', place: 'Sharm El-Sheikh', when: '11–18 Dec 2019' }
];

export const roles = [
  {
    role: 'Primary School Italian Teacher', school: 'Canadian School of Milan', when: 'Aug 2025 – present',
    points: ['Brings AI and LEGO into primary Italian through The EduDesign Alchemist, his own layered system for designing learning.']
  },
  {
    role: 'IB MYP Italian Language Acquisition Teacher', school: 'Canadian School of Milan', when: 'Aug 2024 – Jun 2025',
    points: ['Taught Italian language acquisition across the Middle Years Programme.']
  },
  {
    role: 'IB MYP Italian Literature and IB DP Italian Language Acquisition Teacher', school: 'Canadian School of Milan', when: 'Nov 2023 – Jun 2024',
    points: [
      'Built the IB Learner Profile into daily teaching so students grew as inquirers, thinkers, communicators and principled global citizens.',
      'Designed MYP units around key concepts, global contexts and the inquiry cycle, with ATL skills and interdisciplinary links to real-world problems.',
      'Led MYP workshops and assemblies joining Learner Profile attributes with creative thinking and cognitive psychology, for metacognition, empathy and self-expression.',
      'Tracked homework, progress and next steps for every student, gave regular feedback, and kept parents and colleagues informed.'
    ]
  },
  {
    role: 'Online Italian Language Teacher', school: 'Lycée Franco-Hellénique Eugène Delacroix, Athens', when: 'Jan – Apr 2021',
    points: ['Built a personal Italian learning plan for each student from their personality, temperament, multiple intelligences, curiosity and motivation, with workshops and group reflection.']
  }
];

export const alchemy = [
  ['A', 'Attunement'], ['L', 'Listening'], ['C', 'Cultivate'], ['H', 'Humanise'], ['E', 'Envision'], ['M', 'Metacognise'], ['Y', 'Yield']
];

export const projects = [
  { name: 'LEGOciation', text: 'Negotiating ideas through building. Groups talk, build in LEGO, and rebuild, so thinking becomes something they can hold. Used from MYP classrooms to teacher conferences.' },
  { name: 'Shape Your Brain', text: 'An activity where students picture neural growth as their answer to a hard task: a working metaphor for how challenge changes the brain.' },
  { name: 'The attention card deck', text: 'A facilitation deck that prompts deliberate switches of attention, built for the alternating-attention workshop at the Italian Summit 2026.' },
  { name: 'PSN hubs', text: 'Small local gatherings that carry the Possibility Studies Network between conferences, developed in Productive Friction and the Mission Possible poster.' }
];

export const skills = [
  'Creative, critical, lateral and non-linear thinking', 'workshop design and leadership', 'team dynamics', 'personalised learning',
  'mental imagery', 'visual conceptualisation', 'AI tools in practice', 'public speaking', 'classroom management', 'problem solving', 'lesson planning'
];

export const education = [
  { title: 'Master in Creativity and Innovation, M.CI (Melit.)', place: 'The Edward de Bono Institute for Creative Thinking and Innovation, Malta', city: 'malta' },
  { title: 'Master ITALS, first level: teaching Italian as a foreign language', place: 'Ca’ Foscari University, Venice', city: 'venice' },
  { title: 'BA L-12, Interlinguistic and Intercultural Mediation', place: 'University of Insubria, Como', city: 'como' },
  { title: 'Erasmus Programme', place: 'Háskóli Íslands, Reykjavík', city: 'reykjavik' }
];

export const languages = [['Italian', 'Mother tongue'], ['English', 'C1, IELTS'], ['Spanish', 'B1']];
export const certificates = ['IB MYP Language Acquisition, Category 1', 'IELTS, English C1', 'Certificate of Recognition, 4th Possibility Studies Network Conference'];

export const publications = [
  { cite: 'Acocella, R. (2021). A Qualitative-Exploratory Pilot Study to Explore Students’ Perception on Experience and Multiple Intelligences’ Impact on Their Linguistic & Personal Growth. European Journal of Teaching and Education, 3(1), 34–43.', href: 'https://doi.org/10.33422/ejte.v3i1.669', link: 'Read via DOI' },
  { cite: 'Wanasika, I., Bakker, D., Wehner, R., Ahmed, G., Bakhadirov, M., Rong, L., … & Acocella, R. (2023). Cultural differences and entrepreneurial needs. In International Business with New Challenges and Entrepreneurial Opportunities (pp. 115–121). Würzburg International Business Press.' }
];

// LinkedIn profile URL (not in the PDF). Leave empty to show the plain "On LinkedIn as Rocco Acocella" line.
export const linkedin = '';

// Rocco's own photographs. Put the files in src/photos/ and list them here; the build copies them and places each
// as a full-width band in its slot. Slots: 'teaching', 'workshops', 'talks', 'contact'. Empty list = no photos shown.
// Example: { file: 'workshop-turin.jpg', slot: 'workshops', alt: 'Teachers building with bricks at the Italian Summit, Turin', caption: 'Italian Summit 2026, Turin' }
export const photos = [];
