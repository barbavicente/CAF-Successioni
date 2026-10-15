export interface TeachingModule {
  id: number;
  numberRoman: string;
  title: string;
  cfu: number;
  hours: number;
  ssd: string;
  instructors: string[];
  description: string;
  keyTopics: string[];
  practicalWorkshop: string;
}

export interface CalendarSession {
  id: string;
  date: string; // YYYY-MM-DD
  formattedDate: string;
  dayOfWeek: string;
  time: string;
  moduleId: number;
  moduleTitle: string;
  instructors: string;
  type: 'Lezione frontale' | 'Laboratorio applicativo' | 'Seminario specialistico' | 'Discussione Prova Finale';
  topic: string;
  location: string;
}

export interface FacultyMember {
  name: string;
  role: string;
  institution: string;
  bio: string;
  specialization: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Didattica' | 'Iscrizione & Tasse' | 'Riconoscimento CFU' | 'Titoli Esteri';
}

export const COURSE_INFO = {
  title: "Diritto delle Successioni e Tecniche di Pianificazione Patrimoniale",
  type: "Corso di Alta Formazione (CAF)",
  legalRef: "Istituito ex L. 341/1990 art. 6 - Regolamento D.R. 915/2018",
  academicYear: "2026/2027",
  startDate: "1 Marzo 2026",
  endDate: "Mese di Aprile 2026 (con prolungamento per discussione finale prima settimana di Maggio 2026)",
  cfu: 9,
  totalHours: 225,
  frontalHours: 48,
  minAttendancePercent: 75,
  minStudents: 15,
  maxStudents: 150,
  teachingMode: "Mista (Didattica in aula a Roma + Streaming sincrono / FAD per professionisti fuori sede)",
  department: "Dipartimento di Diritto ed Economia dell'Impresa",
  faculty: "Facoltà di Economia",
  university: "Sapienza Università di Roma",
  address: "Via del Castro Laurenziano, 9 - 00161 Roma",
  director: "Prof. Vincenzo Barba",
  tuition: {
    standard: 900,
    stampDuty: 16,
    installments: {
      singlePaymentDeadline: "20 Febbraio 2026",
      singleAmount: 900,
      firstDeadline: "20 Febbraio 2026",
      firstAmount: 500,
      secondDeadline: "15 Marzo 2026 (entro 15 gg dall'inizio)",
      secondAmount: 400
    },
    discounts: [
      {
        category: "Notai e Praticanti Notai",
        percent: 20,
        amount: 720,
        description: "Riduzione del 20% sulla quota di iscrizione per Notai e praticanti notai regolarmente iscritti."
      },
      {
        category: "Assegnisti di ricerca e Dottorandi Sapienza",
        percent: 15,
        amount: 765,
        description: "Riduzione del 15% per assegnisti di ricerca e dottorandi dell'Università La Sapienza di Roma."
      },
      {
        category: "Studenti con disabilità ≥ 66% o L. 104/1992 (art. 3 c. 1 e 3)",
        percent: 50,
        amount: 450,
        description: "Esonero del 50% della quota con certificazione inviata a servizio.disabilita@uniroma1.it."
      }
    ]
  },
  deadlines: {
    applicationDeadline: "31 Gennaio 2026 (ore 23:59)",
    rankingPublication: "10 Febbraio 2026",
    firstPaymentDeadline: "20 Febbraio 2026",
    classesStart: "1 Marzo 2026",
    secondPaymentDeadline: "15 Marzo 2026",
    finalProject: "Prima settimana di Maggio 2026"
  },
  contacts: {
    emailOffice: "caf.diritto.successioni@uniroma1.it",
    directorEmail: "vincenzo.barba@uniroma1.it",
    secondaryEmail: "tandem.obtinet.iustitia@gmail.com",
    disabilityEmail: "servizio.disabilita@uniroma1.it",
    feesEmail: "settoreentrate@uniroma1.it",
    phone: "06 497661",
    infostudUrl: "https://www.studenti.uniroma1.it/phoenixreg/#/",
    howToPayUrl: "https://www.uniroma1.it/it/pagina/come-pagare",
    foreignStudentsUrl: "https://www.studiare-in-italia.it/studentistranieri/"
  },
  partners: [
    {
      name: "Cassa Nazionale del Notariato",
      status: "Partner convenzionato"
    },
    {
      name: "Consiglio Nazionale del Notariato",
      status: "In fase di approvazione convenzione"
    },
    {
      name: "Fondazione del Notariato",
      status: "In fase di approvazione convenzione"
    }
  ]
};

export const MODULES: TeachingModule[] = [
  {
    id: 1,
    numberRoman: "I",
    title: "Principi generali della successione e apertura dell'eredità",
    cfu: 1,
    hours: 6,
    ssd: "GIUR-01/A (IUS/01)",
    instructors: ["Prof. Vincenzo Barba", "Prof. Daniele Imbruglia"],
    description: "Analizza i fondamenti dogmatici del diritto ereditario italiano, prendendo le mosse dall'inquadramento costituzionale (art. 42, comma 4, Cost.) volto a bilanciare l'autonomia testamentaria, la solidarietà familiare e la tutela statale. Attraverso il principio di continuità dei rapporti giuridici, il percorso esamina la sequenza procedimentale della successione: dall'apertura (art. 456 c.c.), alla vocazione e delazione, fino al rigoroso divieto dei patti successori (art. 458 c.c.). Vengono approfonditi i presupposti della capacità di succedere e l'istituto dell'indegnità quale sanzione civile per gravi colpe verso il de cuius. Particolare attenzione è riservata alle modalità di acquisto dell'eredità: accettazione pura e semplice (espressa o tacita), accettazione con beneficio d'inventario (intra vires) e rinunzia. Il modulo si chiude con l'analisi della tutela del chiamato (art. 460 c.c.), della petitio hereditatis (art. 533 c.c.) e della protezione dei terzi nei confronti dell'erede apparente (art. 534 c.c.).",
    keyTopics: [
      "Inquadramento costituzionale dell'art. 42 Cost. e autonomia privata",
      "Apertura della successione, vocazione e delazione",
      "Il divieto imperativo dei patti successori (art. 458 c.c.)",
      "Capacità a succedere e indegnità civile",
      "Accettazione pura e semplice, beneficio d'inventario e rinunzia",
      "Tutela del chiamato (art. 460 c.c.), petitio hereditatis ed erede apparente"
    ],
    practicalWorkshop: "Simulazione negoziale di atti di accettazione beneficiata con redazione di verbale di inventario e gestione delle tutele d'urgenza del chiamato."
  },
  {
    id: 2,
    numberRoman: "II",
    title: "Successione dei legittimari e tutela della riserva (con esercitazioni di calcolo e azioni)",
    cfu: 1,
    hours: 6,
    ssd: "GIUR-01/A (IUS/01)",
    instructors: ["Prof. Vincenzo Barba"],
    description: "Offre una disamina approfondita della successione necessaria e del sistema di tutela riservato ai legittimari (coniuge, parte dell'unione civile, figli e ascendenti). L'analisi muove dallo snodo dogmatico fondante della materia: la rigida distinzione tra quota di patrimonio (entità di valore calcolata mediante la riunione fittizia) e quota ereditaria (frazione dell'asse residuo netto o relictum), presupposto teorico indispensabile per comprendere la natura della legittima e l'eventuale configurabilità di una lesione. La parte operativa prevede numerosi esercizi pratici focalizzati sul calcolo matematico-giuridico della riunione fittizia (relictum minus debiti plus donatum, ai sensi dell'art. 556 c.c.). Si analizzano l'azione di riduzione e l'azione di restituzione verso i terzi aventi causa, unitamente agli strumenti di autonomia negoziale volti a prevenire il contenzioso.",
    keyTopics: [
      "Distinzione rigorosa tra quota di patrimonio e quota di eredità",
      "La riunione fittizia: Relictum minus Debiti plus Donatum (art. 556 c.c.)",
      "Calcolo della disponibile e quantificazione millesimale delle quote riservate",
      "Azione di riduzione di testamento e donazioni lesive",
      "Azione di restituzione contro terzi acquirenti",
      "Accordi di reintegrazione della legittima e rinunzia all'azione di riduzione"
    ],
    practicalWorkshop: "Laboratorio intensivo di calcolo matematico-giuridico su casi complessi plurisoggettivi e redazione di atti di composizione della lite e tacitazione."
  },
  {
    id: 3,
    numberRoman: "III",
    title: "Successione legale e diritti del coniuge, dell'unito civilmente e del convivente",
    cfu: 1,
    hours: 6,
    ssd: "GIUR-01/A (IUS/01)",
    instructors: ["Prof. Vincenzo Barba"],
    description: "Analisi sistematica della successione ab intestato e dei diritti successori riconosciuti al coniuge, alla parte dell'unione civile e al convivente di fatto. Il percorso muove dai presupposti della successione legittima e dall'ordine dei successibili (artt. 565 ss. c.c.), per poi concentrarsi sui complessi casi di concorso: la ripartizione delle quote tra il coniuge e gli ascendenti, la concorrenza con ascendenti, fratelli e sorelle (art. 582 c.c.), nonché la delicata disciplina del concorso tra i soli ascendenti e fratelli del de cuius (art. 571 c.c.). Ampia attenzione è dedicata alle asimmetrie normative del convivente di fatto e alla problematica dell'art. 540, comma 2, c.c. inerente ai diritti di abitazione sulla casa coniugale e uso sui mobili.",
    keyTopics: [
      "Successione legittima e ordine dei successibili (artt. 565 ss. c.c.)",
      "Regole di concorso: coniuge, discendenti, ascendenti e collaterali",
      "Diritti successori dell'unito civilmente (Legge 76/2016) e tutele del convivente",
      "Art. 540 comma 2 c.c.: natura giuridica (legato ex lege vs prelegato)",
      "Imputazione del diritto di abitazione e immobile in comproprietà con terzi",
      "Successioni anomale e attribuzioni ex lege a tutela familiare"
    ],
    practicalWorkshop: "Risoluzione applicativa di casistiche di concorso ereditario plurimo con attribuzione del diritto reale di abitazione e stima economica d'asse."
  },
  {
    id: 4,
    numberRoman: "IV",
    title: "Il testamento e le tecniche di redazione testamentaria",
    cfu: 1,
    hours: 6,
    ssd: "GIUR-01/A (IUS/01)",
    instructors: ["Prof. Vincenzo Barba", "Not. Giuseppe Trapani"],
    description: "Dedicato allo studio del testamento quale negozio tipico, unilaterale e fondamentale strumento dell'autonomia privata mortis causa. Esamina le diverse forme testamentarie ordinarie (olografo, pubblico e segreto) e speciali, soffermandosi sulla capacità di disporre e di ricevere, sulle incapacità speciali e sul regime delle invalidità della scheda testamentaria (nullità, annullabilità e vizi del consenso). Ampio risalto viene dato al principio di continua e indefettibile revocabilità (art. 679 c.c.), alle forme di revoca espressa, tacita e legale per sopravvenienza di figli (art. 687 c.c.). Comprende un laboratorio applicativo per la redazione assistita di schemi testamentari complessi.",
    keyTopics: [
      "Forme testamentarie ordinarie (olografo, pubblico, segreto) e speciali",
      "Requisiti essenziali formali: autografia, datazione, sottoscrizione",
      "Patologie della scheda testamentaria: nullità, annullabilità, vizi del consenso",
      "Principio di continua revocabilità del testamento (art. 679 c.c.)",
      "Revocazione espressa, tacita e legale ex art. 687 c.c.",
      "Laboratorio di drafting guidato di schemi e clausole notarili"
    ],
    practicalWorkshop: "Laboratorio guidato di tecnica di redazione notarile: identificazione delle difformità formali vizianti e stesura di clausole testamentarie inoppugnabili."
  },
  {
    id: 5,
    numberRoman: "V",
    title: "Successione testamentaria: disposizioni universali e particolari, legati, sostituzioni e diseredazione",
    cfu: 1,
    hours: 6,
    ssd: "GIUR-01/A (IUS/01)",
    instructors: ["Prof. Vincenzo Barba"],
    description: "Cuore dogmatico ed operativo della conformazione del contenuto della scheda testamentaria. L'analisi muove dalla distinzione tra istituzione di erede e legato, con specifico focus sull'institutio ex re certa (art. 588, comma 2, c.c.) e sull'individuazione della mens testatoris. Ricostruzione esaustiva dei legati tipici (specie, genere, cosa di terzo, di debito, alimenti, legato in sostituzione o in conto di legittima artt. 551-552 c.c.) e dei legati atipici (di contratto, di opzione, obbligatori). Studio della devoluzione, della sostituzione ordinaria e fedecommissaria (art. 692 c.c.) e della clausola di diseredazione.",
    keyTopics: [
      "Istituzione di erede vs legato: l'institutio ex re certa (art. 588 comma 2 c.c.)",
      "I legati tipici: specie, genere, credito, debito, prelegato",
      "Legato in sostituzione di legittima (art. 551 c.c.) vs legato in conto (art. 552 c.c.)",
      "Legati atipici: di contratto, di opzione e legati ad effetti obbligatori",
      "Sostituzione ordinaria, accrescimento, rappresentazione e sostituzione fedecommissaria",
      "Clausola di diseredazione: validità negoziale e rapporti con la riserva"
    ],
    practicalWorkshop: "Calibrazione e drafting di clausole complesse contenenti condizioni sospensive e risolutive, oneri (modi), penale testamentaria e nomina dell'esecutore testamentario."
  },
  {
    id: 6,
    numberRoman: "VI",
    title: "Successione nel patrimonio digitale e protezione dell'identità della persona",
    cfu: 1,
    hours: 6,
    ssd: "GIUR-01/A (IUS/01)",
    instructors: ["Prof. Vincenzo Barba", "Prof. Salvatore Orlando"],
    description: "Si colloca alla frontiera più avanzata del diritto delle successioni, affrontando l'impatto delle tecnologie emergenti sui tradizionali schemi trasmissivi e sulla personalità. Distinzione tra patrimonio digitale strettamente patrimoniale (criptovalute, wallet, non-fungible token, account commerciali) e beni privi di valore economico diretto (social network, archivi email, identità online). Trasmissibilità delle chiavi private e conservazione credenziali. Successione nei dati personali e tutela post-mortem privacy ai sensi del Regolamento UE 2016/679 e dell'art. 2-terdecies del Codice Privacy. Studio dell'esecutore testamentario digitale e mandati post-mortem.",
    keyTopics: [
      "Eredità digitale: distinzione tra asset patrimoniali e beni personali",
      "Crypto-assets, wallet decentralizzati e trasmissibilità delle chiavi crittografiche private",
      "Post-mortem privacy e diritti sui dati personali ex art. 2-terdecies Codice Privacy",
      "Mandato post-mortem exequendo e limiti contrattuali dei Service Provider (cloud/social)",
      "La figura dell'esecutore testamentario digitale: poteri e responsabilità",
      "Clausole testamentarie per la gestione sicura delle credenziali di accesso"
    ],
    practicalWorkshop: "Redazione di schemi di clausole di nomina dell'esecutore testamentario digitale e disposizioni di destinazione per asset decentralizzati e privacy post-mortem."
  },
  {
    id: 7,
    numberRoman: "VII",
    title: "Comunione e divisione ereditaria (collazione, retratto successorio e contratti divisionali)",
    cfu: 1,
    hours: 6,
    ssd: "GIUR-01/A (IUS/01)",
    instructors: ["Prof. Vincenzo Barba", "Dott. Luigi Argan"],
    description: "Studio della gestione collettiva del patrimonio ereditario e delle tecniche volte al suo scioglimento. Struttura della comunione ereditaria e disciplina dei debiti ereditari tra coeredi (art. 752 c.c.). Prelazione ereditaria e retratto successorio (art. 732 c.c.), requisiti ed effetti reali verso terzi. Diverse tipologie divisionali: contrattuale, giudiziale e divisione fatta dal testatore (art. 734 c.c.) con conguaglio in denaro. Disciplina e operatività della collazione. Patologie divisionali: azione di annullamento per dolo o violenza (art. 761 c.c.) e rescissione per lesione oltre il quarto (art. 763 c.c.).",
    keyTopics: [
      "Comunione ereditaria e responsabilità per i debiti del de cuius (art. 752 c.c.)",
      "Prelazione ereditaria e retratto successorio (art. 732 c.c.) ad efficacia reale",
      "La divisione contrattuale e la divisione disposta dal testatore (art. 734 c.c.)",
      "La collazione dei beni donati e imputazione del conguaglio pecuniario",
      "Impugnazione della divisione: annullamento per violenza/dolo e rescissione ultra quartum",
      "Perizie di stima e contratti atipici con funzione divisoria"
    ],
    practicalWorkshop: "Redazione e disamina di un contratto di divisione ereditaria con imputazione di donazioni anteriori, stima di asse immobiliare e calcolo dei conguagli pecuniari."
  },
  {
    id: 8,
    numberRoman: "VIII",
    title: "Pianificazione successoria e strumenti di articolazione del patrimonio. Patti di famiglia, trust e successioni transfrontaliere",
    cfu: 1,
    hours: 6,
    ssd: "GIUR-01/A (IUS/01)",
    instructors: ["Avv. Vincenzo Miri"],
    description: "Strumenti di wealth planning e protezione patrimoniale nel passaggio generazionale dell'impresa e della famiglia. Patti di famiglia (artt. 768-bis ss. c.c.), atti di destinazione ex art. 2645-ter c.c., trust interno e vincoli di scopo rispetto al divieto dei patti successori e tutela dei legittimari. Fondo patrimoniale, polizze vita (natura dei premi e impignorabilità) e strumenti della Legge 'Dopo di Noi' (L. 112/2016 a tutela dei disabili gravi). Successioni transfrontaliere alla luce del Regolamento UE 650/2012: residenza abituale, professio iuris, ordinamenti plurilegislativi (diritto forale spagnolo), patti successori internazionali e rilascio del Certificato Successorio Europeo (CSE).",
    keyTopics: [
      "Patti di famiglia per il passaggio generazionale dell'impresa (artt. 768-bis ss. c.c.)",
      "Atto di destinazione ex art. 2645-ter c.c. e Trust interno di protezione",
      "Strumenti della Legge 112/2016 ('Dopo di Noi') a tutela dei soggetti deboli",
      "Polizze vita e fondi di previdenza: premi e tutela creditoria",
      "Regolamento UE n. 650/2012: legge applicabile, residenza abituale e professio iuris",
      "Il Certificato Successorio Europeo (artt. 62 ss.): efficacia probatoria e circolazione UE"
    ],
    practicalWorkshop: "Laboratorio su casistica transfrontaliera con professio iuris e redazione guidata del modello standard di Certificato Successorio Europeo."
  }
];

export const FINAL_PROJECT = {
  title: "Prova Finale (1 CFU)",
  description: "Elaborazione guidata e discussione orale di uno schema testamentario complesso ovvero di un articolato piano di asset protection e pianificazione successoria integrata (wealth planning).",
  coordinators: ["Prof. Antonio Musto", "Prof. Ettore di Mauro"],
  ssd: "GIUR-01/A (IUS/01)",
  typology: "Project work / Elaborato specialistico",
  defensePeriod: "Prima settimana di Maggio 2026",
  evaluation: "Valutazione e rilascio dell'Attestato Ufficiale di Frequenza e Perfezionamento Sapienza Università di Roma con attribuzione dei 9 CFU."
};

// Rigorous calendar schedule for March & April 2026 (starting 1 March 2026)
// Fridays: 09:00 - 13:00 (4h)
// Alternate Wednesdays: 14:00 - 18:00 (4h)
// Total 48 teaching front/lab hours
export const CALENDAR_SESSIONS: CalendarSession[] = [
  {
    id: "sess-1",
    date: "2026-03-04",
    formattedDate: "Mercoledì 4 Marzo 2026",
    dayOfWeek: "Mercoledì",
    time: "14:00 - 18:00",
    moduleId: 1,
    moduleTitle: "Modulo I - Principi generali della successione",
    instructors: "Prof. Vincenzo Barba, Prof. Daniele Imbruglia",
    type: "Lezione frontale",
    topic: "Inquadramento costituzionale, apertura della successione, vocazione e divieto dei patti successori (art. 458 c.c.)",
    location: "Aula Magna Dipartimento Economia / Streaming Teams"
  },
  {
    id: "sess-2",
    date: "2026-03-06",
    formattedDate: "Venerdì 6 Marzo 2026",
    dayOfWeek: "Venerdì",
    time: "09:00 - 13:00",
    moduleId: 1,
    moduleTitle: "Modulo I - Principi generali e acquisto eredità",
    instructors: "Prof. Vincenzo Barba, Prof. Daniele Imbruglia",
    type: "Laboratorio applicativo",
    topic: "Capacità, indegnità, accettazione beneficiata, rinunzia e tutela dei chiamati. Laboratorio pratico su casi controversi.",
    location: "Aula 3 Facoltà di Economia / Streaming Teams"
  },
  {
    id: "sess-3",
    date: "2026-03-13",
    formattedDate: "Venerdì 13 Marzo 2026",
    dayOfWeek: "Venerdì",
    time: "09:00 - 13:00",
    moduleId: 2,
    moduleTitle: "Modulo II - Successione dei legittimari",
    instructors: "Prof. Vincenzo Barba",
    type: "Lezione frontale",
    topic: "La tutela della riserva: quota di patrimonio vs quota di eredità, riunione fittizia (art. 556 c.c.) e calcolo dell'asse netto.",
    location: "Aula Magna Dipartimento Economia / Streaming Teams"
  },
  {
    id: "sess-4",
    date: "2026-03-18",
    formattedDate: "Mercoledì 18 Marzo 2026",
    dayOfWeek: "Mercoledì",
    time: "14:00 - 18:00",
    moduleId: 2,
    moduleTitle: "Modulo II - Esercitazioni di calcolo e azioni di riduzione",
    instructors: "Prof. Vincenzo Barba",
    type: "Laboratorio applicativo",
    topic: "Laboratorio matematico-giuridico di calcolo della lesione di legittima, drafting di accordi di reintegrazione e transazione.",
    location: "Aula 3 Facoltà di Economia / Streaming Teams"
  },
  {
    id: "sess-5",
    date: "2026-03-20",
    formattedDate: "Venerdì 20 Marzo 2026",
    dayOfWeek: "Venerdì",
    time: "09:00 - 13:00",
    moduleId: 3,
    moduleTitle: "Modulo III - Successione legittima e diritti del coniuge",
    instructors: "Prof. Vincenzo Barba",
    type: "Lezione frontale",
    topic: "Successione legittima, concorso tra coniuge ed altri successibili, unioni civili, convivenze di fatto e art. 540 c. 2 c.c.",
    location: "Aula Magna Dipartimento Economia / Streaming Teams"
  },
  {
    id: "sess-6",
    date: "2026-03-27",
    formattedDate: "Venerdì 27 Marzo 2026",
    dayOfWeek: "Venerdì",
    time: "09:00 - 13:00",
    moduleId: 4,
    moduleTitle: "Modulo IV - Il testamento e forme testamentarie",
    instructors: "Prof. Vincenzo Barba, Not. Giuseppe Trapani",
    type: "Laboratorio applicativo",
    topic: "Forme del testamento, revocabilità indefettibile, patologie formali e laboratorio di redazione di testamento olografo e pubblico.",
    location: "Aula Magna Dipartimento Economia / Streaming Teams"
  },
  {
    id: "sess-7",
    date: "2026-04-01",
    formattedDate: "Mercoledì 1 Aprile 2026",
    dayOfWeek: "Mercoledì",
    time: "14:00 - 18:00",
    moduleId: 5,
    moduleTitle: "Modulo V - Disposizioni a titolo universale e particolare",
    instructors: "Prof. Vincenzo Barba",
    type: "Lezione frontale",
    topic: "Institutio ex re certa, legati tipici e atipici, legato in sostituzione vs legato in conto, devoluzione e diseredazione.",
    location: "Aula 3 Facoltà di Economia / Streaming Teams"
  },
  {
    id: "sess-8",
    date: "2026-04-03",
    formattedDate: "Venerdì 3 Aprile 2026",
    dayOfWeek: "Venerdì",
    time: "09:00 - 13:00",
    moduleId: 5,
    moduleTitle: "Modulo V - Laboratorio di Drafting Testamentario",
    instructors: "Prof. Vincenzo Barba",
    type: "Laboratorio applicativo",
    topic: "Redazione guidata di schemi testamentari articolati: condizioni, oneri, penale testamentaria ed esecutore testamentario.",
    location: "Aula Magna Dipartimento Economia / Streaming Teams"
  },
  {
    id: "sess-9",
    date: "2026-04-10",
    formattedDate: "Venerdì 10 Aprile 2026",
    dayOfWeek: "Venerdì",
    time: "09:00 - 13:00",
    moduleId: 6,
    moduleTitle: "Modulo VI - Successione nel patrimonio digitale",
    instructors: "Prof. Vincenzo Barba, Prof. Salvatore Orlando",
    type: "Seminario specialistico",
    topic: "Eredità digitale, crypto-assets, chiavi private, tutela post-mortem privacy ex art. 2-terdecies Codice Privacy ed esecutore digitale.",
    location: "Aula Magna Dipartimento Economia / Streaming Teams"
  },
  {
    id: "sess-10",
    date: "2026-04-15",
    formattedDate: "Mercoledì 15 Aprile 2026",
    dayOfWeek: "Mercoledì",
    time: "14:00 - 18:00",
    moduleId: 7,
    moduleTitle: "Modulo VII - Comunione e divisione ereditaria",
    instructors: "Prof. Vincenzo Barba, Dott. Luigi Argan",
    type: "Lezione frontale",
    topic: "Comunione ereditaria, prelazione e retratto successorio (art. 732 c.c.), contratti divisionali, collazione e rescissione ultra quartum.",
    location: "Aula 3 Facoltà di Economia / Streaming Teams"
  },
  {
    id: "sess-11",
    date: "2026-04-17",
    formattedDate: "Venerdì 17 Aprile 2026",
    dayOfWeek: "Venerdì",
    time: "09:00 - 13:00",
    moduleId: 7,
    moduleTitle: "Modulo VII - Laboratorio su contratti divisionali e stime",
    instructors: "Prof. Vincenzo Barba, Dott. Luigi Argan",
    type: "Laboratorio applicativo",
    topic: "Laboratorio pratico di stesura di contratto divisionale con conguagli, perizia di stima e imputazione di donazioni dirette/indirette.",
    location: "Aula Magna Dipartimento Economia / Streaming Teams"
  },
  {
    id: "sess-12",
    date: "2026-04-24",
    formattedDate: "Venerdì 24 Aprile 2026",
    dayOfWeek: "Venerdì",
    time: "09:00 - 13:00",
    moduleId: 8,
    moduleTitle: "Modulo VIII - Patti di famiglia, Trust e Wealth Planning",
    instructors: "Avv. Vincenzo Miri",
    type: "Seminario specialistico",
    topic: "Patti di famiglia (artt. 768-bis ss.), art. 2645-ter c.c., Trust interno, Legge Dopo di Noi (L. 112/2016) e polizze vita.",
    location: "Aula Magna Dipartimento Economia / Streaming Teams"
  },
  {
    id: "sess-13",
    date: "2026-04-29",
    formattedDate: "Mercoledì 29 Aprile 2026",
    dayOfWeek: "Mercoledì",
    time: "14:00 - 18:00",
    moduleId: 8,
    moduleTitle: "Modulo VIII - Successioni transfrontaliere e Certificato Successorio",
    instructors: "Avv. Vincenzo Miri",
    type: "Laboratorio applicativo",
    topic: "Regolamento UE 650/2012, residenza abituale, professio iuris, ordinamenti forali spagnoli e compilazione del Certificato Successorio Europeo.",
    location: "Aula 3 Facoltà di Economia / Streaming Teams"
  },
  {
    id: "sess-14",
    date: "2026-05-08",
    formattedDate: "Venerdì 8 Maggio 2026",
    dayOfWeek: "Venerdì",
    time: "09:30 - 14:00",
    moduleId: 9,
    moduleTitle: "Prova Finale & Chiusura del Corso",
    instructors: "Prof. Vincenzo Barba, Prof. Antonio Musto, Prof. Ettore di Mauro",
    type: "Discussione Prova Finale",
    topic: "Discussione collegiale dei project work / schemi testamentari complessi e piani di asset protection. Proclamazione e rilascio attestati.",
    location: "Aula Magna Dipartimento Economia / Streaming Teams"
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    name: "Prof. Vincenzo Barba",
    role: "Direttore del Corso",
    institution: "Professore Ordinario di Diritto Privato - Sapienza Università di Roma",
    bio: "Ordinario presso il Dipartimento di Diritto ed Economia dell'Impresa della Sapienza. Autore di numerose monografie, trattati e saggi scientifici di riferimento nazionale e internazionale in materia di diritto successorio, famiglia, donazioni e tecniche negoziali di pianificazione patrimoniale.",
    specialization: "Diritto delle Successioni, Pianificazione Patrimoniale, Tutela dei Legittimari, Drafting Testamentario"
  },
  {
    name: "Prof. Salvatore Orlando",
    role: "Docente del Corso",
    institution: "Professore Ordinario di Diritto Privato - Sapienza Università di Roma",
    bio: "Ordinario presso il Dipartimento di Diritto ed Economia dell'Impresa della Sapienza Università di Roma. Insigne studioso dei rapporti obbligatori, delle nuove tecnologie e della circolazione dei beni e dei dati personali post mortem.",
    specialization: "Patrimonio Digitale, Diritti della Persona, Contratti e Responsabilità Civile"
  },
  {
    name: "Prof. Daniele Imbruglia",
    role: "Docente del Corso",
    institution: "Professore Associato di Diritto Privato - Sapienza Università di Roma",
    bio: "Associato di Diritto Privato presso il Dipartimento di Diritto ed Economia dell'Impresa della Sapienza. Specialista dei principi generali della delazione, delle invalidità negoziali e delle tutele del chiamato all'eredità.",
    specialization: "Principi Generali della Successione, Accettazione dell'Eredità, Delazione"
  },
  {
    name: "Not. Giuseppe Trapani",
    role: "Docente Esperto",
    institution: "Notaio in esercizio e Docente di Tecnica Notarile",
    bio: "Notaio di comprovata esperienza accademica e professionale. Docente nelle scuole di notariato, specializzato nelle forme testamentarie complesse, nella gestione delle clausole di diseredazione e nella prevenzione del contenzioso successorio.",
    specialization: "Tecnica Notarile, Redazione del Testamento, Nullità e Annullabilità"
  },
  {
    name: "Dott. Luigi Argan",
    role: "Docente Esperto",
    institution: "Magistrato / Esperto in Diritto delle Successioni e Divisioni",
    bio: "Esperto in materia di comunione e controversie divisorie ereditarie, collazione e perizie di stima dell'asse relitto, con pluriennale esperienza applicativa nella risoluzione dei conflitti ereditari complessi.",
    specialization: "Comunione Ereditaria, Divisioni Giudiziali e Contrattuali, Retratto Successorio"
  },
  {
    name: "Avv. Vincenzo Miri",
    role: "Docente Esperto",
    institution: "Avvocato Cassazionista e Cultore della Materia",
    bio: "Avvocato esperto in wealth planning, patti di famiglia, trust ed articolazione di patrimoni d'impresa. Vanta una specifica competenza nelle successioni internazionali e nel Regolamento UE 650/2012.",
    specialization: "Patti di Famiglia, Trust, Legge Dopo di Noi, Diritto Internazionale Privato"
  },
  {
    name: "Prof. Antonio Musto",
    role: "Coordinatore Tutoraggio Prova Finale",
    institution: "Docente Universitario ed Esperto Giuridico",
    bio: "Coordinatore, congiuntamente al Prof. Ettore di Mauro, delle attività di orientamento e tutoraggio specialistico per la redazione del project work e degli schemi testamentari della Prova Finale.",
    specialization: "Tutoraggio Project Work e Schemi Testamentari Complessi"
  },
  {
    name: "Prof. Ettore di Mauro",
    role: "Coordinatore Tutoraggio Prova Finale",
    institution: "Docente Universitario ed Esperto Giuridico",
    bio: "Supervisore delle prove finali e dei laboratori di applicazione di wealth planning ed asset protection.",
    specialization: "Asset Protection e Valutazione Prova Finale"
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: "Le lezioni si possono seguire interamente a distanza (online)?",
    answer: "Sì, la modalità di erogazione è mista: le lezioni si svolgono in presenza presso la Facoltà di Economia di Sapienza (Via del Castro Laurenziano 9, Roma) e vengono contestualmente trasmesse in streaming sincrono e registrate su piattaforma didattica di Ateneo, per agevolare notai, avvocati, magistrati e professionisti da tutta Italia.",
    category: "Didattica"
  },
  {
    question: "Qual è la frequenza minima richiesta per conseguire l'attestato e i 9 CFU?",
    answer: "Ai sensi dell'art. 4 dell'Avviso, è richiesta la frequenza di almeno il 75% delle 48 ore di didattica frontale e laboratoriale (pari ad almeno 36 ore). La presenza viene registrata sia in aula che tramite la piattaforma digitale.",
    category: "Didattica"
  },
  {
    question: "I 9 CFU acquisiti sono spendibili e riconoscibili in altri percorsi accademici?",
    answer: "Certamente. Ai sensi della L. 341/1990 e del Regolamento Didattico d'Ateneo Sapienza, i CFU acquisiti nei Corsi di Alta Formazione sono riconoscibili fino a un massimo di 12 CFU in un corso di laurea di I o II livello (Laurea Magistrale in Giurisprudenza o Economia) nonché nei corsi di Master Universitario di I o II livello.",
    category: "Riconoscimento CFU"
  },
  {
    question: "Quali titoli di studio danno diritto all'accesso?",
    answer: "Possono accedere i possessori di Laurea di secondo livello (Magistrale o Specialistica) ovvero Laurea di vecchio ordinamento ex D.M. 509/99 in Giurisprudenza, Economia o scienze equipollenti, nonché titoli rilasciati da università estere debitamente riconosciuti idonei.",
    category: "Iscrizione & Tasse"
  },
  {
    question: "Come si invia la domanda di ammissione e qual è la scadenza?",
    answer: "La domanda di ammissione (Allegato 1, compilabile anche direttamente tramite l'apposito generatore su questo sito) va firmata e inviata entro il 31 Gennaio 2026 via e-mail all'indirizzo caf.diritto.successioni@uniroma1.it e per conoscenza a vincenzo.barba@uniroma1.it, corredata dalla fotocopia di un documento di riconoscimento valido. L'oggetto della mail deve recare: 'Domanda di ammissione CAF Diritto delle successioni'.",
    category: "Iscrizione & Tasse"
  },
  {
    question: "È possibile rateizzare la quota di iscrizione?",
    answer: "Sì, è consentito versare la quota in due rate: 1ª rata di € 500,00 (+ bollo € 16) entro il 20 Febbraio 2026; 2ª rata di € 400,00 entro 15 giorni dall'inizio del corso e comunque non oltre il 15 Marzo 2026. In alternativa si può saldare in unica soluzione entro il 20 Febbraio 2026.",
    category: "Iscrizione & Tasse"
  },
  {
    question: "Quali riduzioni o agevolazioni sono applicabili?",
    answer: "È prevista una riduzione del 20% (€ 720 + bollo) per i Notai e praticanti notai; una riduzione del 15% (€ 765 + bollo) per assegnisti di ricerca e dottorandi Sapienza; e un esonero del 50% (€ 450 + bollo) per persone con invalidità ≥ 66% o con riconoscimento L. 104/1992. È consentito fruire di una sola agevolazione.",
    category: "Iscrizione & Tasse"
  },
  {
    question: "I docenti possono utilizzare la Carta del Docente?",
    answer: "Sì, i docenti di ruolo delle istituzioni scolastiche possono utilizzare la Carta del Docente. Una volta ammessi, basterà inviare il buono MIUR a altaformazione@uniroma1.it per ricevere le istruzioni sull'eventuale differenza.",
    category: "Iscrizione & Tasse"
  },
  {
    question: "È ammesso il pagamento da parte del proprio studio o azienda?",
    answer: "Sì. L'azienda o studio finanziatore può versare la quota seguendo la procedura di convenzione indicata all'art. 6 dell'Avviso (richiesta dati a altaformazione@uniroma1.it e successivo invio a settoreentrate@uniroma1.it con dati fiscali per emissione della quietanza universitaria).",
    category: "Iscrizione & Tasse"
  },
  {
    question: "Cosa occorre presentare in caso di titolo di studio conseguito all'estero?",
    answer: "I candidati con titolo estero devono presentare: Dichiarazione di Valore in Loco dell'autorità consolare italiana + transcript of records; oppure Attestato di Comparabilità CIMEA con Attestato di Verifica CIMEA; oppure Diploma Supplement legalizzato.",
    category: "Titoli Esteri"
  }
];
