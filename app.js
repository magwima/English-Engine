window.EXTRA_SRC="extra.js?v=dd0969dfae";

/* SITE_MODE is true only in the GitHub Pages copy: there, YouTube videos can play inside the page. */
const SITE_MODE = true;
const ALLW = [
  { id:"inevitable", word:"inevitable", ipa:"/ɪˈnev.ɪ.tə.bəl/", syl:["in","ev","i","ta","ble"], stress:1, pos:"adjective",
    def:"Certain to happen; impossible to avoid or prevent.",
    family:["inevitably (adverb)","inevitability (noun)"],
    coll:["it is inevitable that …","almost / largely inevitable","the inevitable result","accept the inevitable"],
    syn:["unavoidable","certain","bound to happen"], opp:["avoidable","preventable"],
    ex:"Some disagreement is inevitable when ten people work on one project.",
    watch:"Use 'it is inevitable that + clause', not 'it is inevitable to + verb'.",
    prompt:"Say something that will certainly happen in your town or your life in the next ten years, and why.",
    model:"It is inevitable that the city will get more crowded, because thousands of students move here every year." },
  { id:"inherent", word:"inherent", ipa:"/ɪnˈhɪə.rənt/", syl:["in","her","ent"], stress:1, pos:"adjective",
    def:"Existing as a natural, permanent part of something, so it can't be removed.",
    family:["inherently (adverb)"],
    coll:["an inherent risk / danger / weakness","inherent in something","inherently difficult"],
    syn:["intrinsic","built-in","natural"], opp:["external","added","acquired"],
    ex:"There is an inherent risk in every kind of investment.",
    watch:"The preposition is 'inherent in': 'the risks inherent in the job', not 'inherent of'.",
    prompt:"Name a risk or problem that is a natural part of a job, sport or hobby.",
    model:"Being tired all the time seems to be inherent in working night shifts." },
  { id:"arbitrary", word:"arbitrary", ipa:"/ˈɑː.bɪ.trə.ri/", syl:["ar","bi","tra","ry"], stress:0, pos:"adjective",
    def:"Decided by someone's personal choice or by chance, with no clear reason or rule behind it.",
    family:["arbitrarily (adverb)","arbitrariness (noun)"],
    coll:["an arbitrary decision / rule / number","seem arbitrary","completely arbitrary"],
    syn:["random","unreasoned","personal"], opp:["reasoned","principled","objective"],
    ex:"The deadline felt arbitrary; nobody could explain why it had to be Friday.",
    watch:"Arbitrary is stronger than 'random'. It suggests one person decided, and had no good reason.",
    prompt:"Describe a rule at school, at work or in a game that seems to have no good reason behind it.",
    model:"Our office has an arbitrary rule that nobody can book a meeting room for more than one hour." },
  { id:"plausible", word:"plausible", ipa:"/ˈplɔː.zə.bəl/", syl:["plau","si","ble"], stress:0, pos:"adjective",
    def:"Seeming reasonable or probably true, although you can't be certain.",
    family:["plausibly (adverb)","plausibility (noun)","implausible (adjective, opposite)"],
    coll:["a plausible explanation / excuse / story","sound plausible","perfectly plausible"],
    syn:["believable","credible","convincing"], opp:["implausible","unbelievable","far-fetched"],
    ex:"His excuse sounded plausible until we checked the train times.",
    watch:"Plausible means something seems true, not that it is true. If you are certain, say 'true' or 'proven'.",
    prompt:"Think of a story or an excuse that sounded believable at first. What was it?",
    model:"He gave a plausible excuse for missing the lesson, but it turned out that he had overslept." },
  { id:"coherent", word:"coherent", ipa:"/kəʊˈhɪə.rənt/", syl:["co","her","ent"], stress:1, pos:"adjective",
    def:"Clear, well organised and logically connected, so it is easy to follow.",
    family:["coherently (adverb)","coherence (noun)","incoherent (adjective, opposite)"],
    coll:["a coherent argument / plan / strategy","a coherent whole","perfectly coherent"],
    syn:["logical","clear","well-structured"], opp:["incoherent","confused","disjointed"],
    ex:"Her essay was coherent: every paragraph led naturally to the next.",
    watch:"Coherent is about how ideas hold together. For one easy sentence, say 'clear' instead.",
    prompt:"Describe a lesson, talk or film that was easy (or hard) to follow, and say why.",
    model:"The lecture was coherent because the speaker linked every example back to one main idea." },
  { id:"prevalent", word:"prevalent", ipa:"/ˈprev.ə.lənt/", syl:["prev","a","lent"], stress:0, pos:"adjective",
    def:"Common or widespread in a particular place, time or group of people.",
    family:["prevalence (noun)","prevail (verb, related)"],
    coll:["prevalent among young people","prevalent in a region","increasingly prevalent","become prevalent"],
    syn:["widespread","common","frequent"], opp:["rare","uncommon","isolated"],
    ex:"Smartphones became prevalent in classrooms within a few years.",
    watch:"Prevalent describes how common something is in a group, so it usually goes with 'among' or 'in'.",
    prompt:"Name a habit, app or problem that has become common among people your age.",
    model:"Short video apps have become prevalent among my students over the last two years." },
  { id:"vulnerable", word:"vulnerable", ipa:"/ˈvʌl.nər.ə.bəl/", syl:["vul","ner","a","ble"], stress:0, pos:"adjective",
    def:"Easily harmed, hurt or attacked, either physically or emotionally.",
    family:["vulnerability / vulnerabilities (noun)","invulnerable (adjective, opposite)"],
    coll:["vulnerable to attack / criticism","vulnerable groups","feel vulnerable","highly vulnerable"],
    syn:["exposed","at risk","defenceless"], opp:["protected","secure","resilient"],
    ex:"An old password leaves your account vulnerable to attack.",
    watch:"The preposition is 'vulnerable to something', not 'vulnerable for' or 'vulnerable of'.",
    prompt:"Describe a person, place or system that needs extra protection, and say what the danger is.",
    model:"Small shops are vulnerable to sudden rises in rent." },
  { id:"deliberate", word:"deliberate", ipa:"/dɪˈlɪb.ər.ət/", syl:["de","lib","er","ate"], stress:1, pos:"adjective",
    def:"Done on purpose, after thinking about it, rather than by accident.",
    family:["deliberately (adverb)","deliberation (noun)","to deliberate /dɪˈlɪb.ər.eɪt/ (verb: to discuss carefully)"],
    coll:["a deliberate choice / attempt / attack","slow and deliberate","quite deliberate"],
    syn:["intentional","planned","conscious"], opp:["accidental","unintentional","unplanned"],
    ex:"Leaving his name off the list was deliberate, not a mistake.",
    watch:"The adjective ends /-rət/; the verb 'to deliberate' (discuss carefully) ends /-reɪt/.",
    prompt:"Describe something you did on purpose that other people thought was an accident, or the opposite.",
    model:"Her long pause was deliberate; she wanted everyone to think about the question." }
];
const QUIZ = [
  {w:"inevitable",k:"Definition",q:"Which word means 'certain to happen; impossible to avoid'?",a:"inevitable",o:null,why:"If something is inevitable, nothing can stop it."},
  {w:"inherent",k:"Definition",q:"Which word means 'a natural, permanent part of something'?",a:"inherent",o:null,why:"Inherent qualities are built in and can't be removed."},
  {w:"arbitrary",k:"Definition",q:"Which word means 'decided by personal choice or chance, with no clear reason'?",a:"arbitrary",o:null,why:"An arbitrary rule has no reasoning behind it."},
  {w:"plausible",k:"Definition",q:"Which word means 'seeming reasonable or probably true'?",a:"plausible",o:null,why:"Plausible describes something that sounds believable."},
  {w:"coherent",k:"Definition",q:"Which word means 'clear and logically connected, easy to follow'?",a:"coherent",o:null,why:"Coherent ideas hold together."},
  {w:"prevalent",k:"Definition",q:"Which word means 'common or widespread in a place or group'?",a:"prevalent",o:null,why:"Prevalent is about how widespread something is."},
  {w:"vulnerable",k:"Definition",q:"Which word means 'easily harmed or attacked'?",a:"vulnerable",o:null,why:"Vulnerable people, places and systems need protection."},
  {w:"deliberate",k:"Definition",q:"Which word means 'done on purpose, not by accident'?",a:"deliberate",o:null,why:"A deliberate act is intentional."},

  {w:"inevitable",k:"Opposites",q:"Which word is the opposite of 'preventable'?",a:"inevitable",o:null,why:"Preventable things can be stopped; inevitable things can't."},
  {w:"inherent",k:"Synonyms",q:"Which word is closest in meaning to 'intrinsic'?",a:"inherent",o:null,why:"Intrinsic and inherent both mean 'part of the basic nature of something'."},
  {w:"arbitrary",k:"Opposites",q:"Which word is the opposite of 'carefully reasoned'?",a:"arbitrary",o:null,why:"An arbitrary choice has no reasoning behind it."},
  {w:"plausible",k:"Synonyms",q:"Which word is closest in meaning to 'credible' and 'believable'?",a:"plausible",o:null,why:"All three describe something that sounds likely to be true."},
  {w:"coherent",k:"Opposites",q:"Which word is the opposite of 'disjointed and confusing'?",a:"coherent",o:null,why:"Coherent writing flows logically from point to point."},
  {w:"prevalent",k:"Synonyms",q:"Which word is closest in meaning to 'widespread'?",a:"prevalent",o:null,why:"Prevalent and widespread both describe something very common."},
  {w:"vulnerable",k:"Synonyms",q:"Which word is closest in meaning to 'exposed' and 'at risk'?",a:"vulnerable",o:null,why:"Vulnerable means easily harmed."},
  {w:"deliberate",k:"Opposites",q:"Which word is the opposite of 'accidental'?",a:"deliberate",o:null,why:"Accidental acts are unplanned; deliberate acts are intentional."},

  {w:"inevitable",k:"In context",q:"Once the storm closed the airport, delays were ____.",a:"inevitable",o:null,why:"Nothing could stop the delays after the airport closed."},
  {w:"inherent",k:"In context",q:"There are risks ____ in any kind of investment.",a:"inherent",o:null,why:"Notice the collocation 'inherent in'."},
  {w:"arbitrary",k:"In context",q:"The prices seem completely ____: two identical rooms cost different amounts.",a:"arbitrary",o:null,why:"There is no clear reason for the difference."},
  {w:"plausible",k:"In context",q:"His story sounded ____ until we checked the train times.",a:"plausible",o:null,why:"It seemed true at first, but wasn't."},
  {w:"coherent",k:"In context",q:"Her essay was ____: every paragraph led naturally to the next.",a:"coherent",o:null,why:"The ideas were logically connected."},
  {w:"prevalent",k:"In context",q:"Working from home has become far more ____ since 2020.",a:"prevalent",o:null,why:"It describes something that is now widespread."},
  {w:"vulnerable",k:"In context",q:"An old password leaves your account ____ to attack.",a:"vulnerable",o:null,why:"Notice the collocation 'vulnerable to'."},
  {w:"deliberate",k:"In context",q:"Leaving his name off the list was ____, not a mistake.",a:"deliberate",o:null,why:"'Not a mistake' tells you it was done on purpose."},

  {w:"inherent",k:"Is it correct?",q:"'The risk is inherent of the job.' Is this correct?",a:"No, it's wrong",o:["Yes, it's correct","No, it's wrong"],why:"The preposition is 'in': the risk is inherent in the job."},
  {w:"inevitable",k:"Is it correct?",q:"'It is inevitable that prices will rise.' Is this correct?",a:"Yes, it's correct",o:["Yes, it's correct","No, it's wrong"],why:"'It is inevitable that + clause' is the natural pattern."},
  {w:"vulnerable",k:"Is it correct?",q:"'The coast is vulnerable for flooding.' Is this correct?",a:"No, it's wrong",o:["Yes, it's correct","No, it's wrong"],why:"It should be 'vulnerable to flooding'."},
  {w:"deliberate",k:"Is it correct?",q:"'She deliberate ignored the question.' Is this correct?",a:"No, it's wrong",o:["Yes, it's correct","No, it's wrong"],why:"Before a verb you need the adverb: she deliberately ignored the question."},
  {w:"plausible",k:"Is it correct?",q:"'We have the evidence, so we know it is plausible that he was there.' Is this correct?",a:"No, it's wrong",o:["Yes, it's correct","No, it's wrong"],why:"Plausible means it seems likely. With evidence you would say 'we know he was there' or 'it is proven'."},
  {w:"coherent",k:"Is it correct?",q:"'His explanation was incoherent; I couldn't follow it at all.' Is this correct?",a:"Yes, it's correct",o:["Yes, it's correct","No, it's wrong"],why:"Incoherent is the opposite of coherent, and it fits the second part perfectly."},
  {w:"prevalent",k:"Is it correct?",q:"'The illness is prevalent among older patients.' Is this correct?",a:"Yes, it's correct",o:["Yes, it's correct","No, it's wrong"],why:"'Prevalent among + group' is the standard pattern."},
  {w:"arbitrary",k:"Is it correct?",q:"'The judges' decision was arbitrary; they gave no reasons at all.' Is this correct?",a:"Yes, it's correct",o:["Yes, it's correct","No, it's wrong"],why:"No reasons given, so 'arbitrary' is exactly right."}
];

const FORMS = [
  {w:"inevitable",s:"Traffic in the city centre ____ gets worse on Fridays.",base:"inevitable",a:["inevitably"]},
  {w:"inherent",s:"Some jobs are ____ dangerous.",base:"inherent",a:["inherently"]},
  {w:"arbitrary",s:"The exam numbers were chosen ____, with no system at all.",base:"arbitrary",a:["arbitrarily"]},
  {w:"plausible",s:"Nobody questioned the ____ of his story at the time.",base:"plausible",a:["plausibility"]},
  {w:"plausible",s:"The ending of the film was completely ____; nobody could believe it.",base:"plausible",a:["implausible"]},
  {w:"coherent",s:"The report lacked ____, jumping from topic to topic.",base:"coherent",a:["coherence"]},
  {w:"coherent",s:"He was too tired to speak ____.",base:"coherent",a:["coherently"]},
  {w:"prevalent",s:"The ____ of smartphones in schools has risen sharply.",base:"prevalent",a:["prevalence"]},
  {w:"vulnerable",s:"The security team found three serious ____ in the system.",base:"vulnerable",a:["vulnerabilities"]},
  {w:"deliberate",s:"She ____ left her phone at home so she could concentrate.",base:"deliberate",a:["deliberately"]},
  {w:"inevitable",s:"They accepted the ____ of change and adapted quickly.",base:"inevitable",a:["inevitability"]}
];

const SCRAMBLE = [
  {w:"inevitable",t:"some mistakes are inevitable when you learn a language",p:".",alt:["when you learn a language some mistakes are inevitable"]},
  {w:"inherent",t:"every sport carries some inherent risk",p:".",alt:[]},
  {w:"arbitrary",t:"the committee made a completely arbitrary decision",p:".",alt:[]},
  {w:"plausible",t:"she gave a plausible explanation for the delay",p:".",alt:[]},
  {w:"coherent",t:"the speaker presented a clear and coherent argument",p:".",alt:[]},
  {w:"prevalent",t:"online shopping has become prevalent among older customers",p:".",alt:[]},
  {w:"vulnerable",t:"small shops are vulnerable to sudden rent increases",p:".",alt:[]},
  {w:"deliberate",t:"his silence was a deliberate attempt to avoid the question",p:".",alt:[]}
];

const LADDERS = {
  inevitable:[
    {t:"Present simple",m:"general truth",s:"In long projects, delays usually ____ (become) inevitable.",a:["become"],tip:"Routine or general truth with a plural subject → base form."},
    {t:"Past simple",m:"after the storm",s:"After the storm, delays ____ (become) inevitable.",a:["became"],tip:"Irregular: become → became → become."},
    {t:"Present perfect",m:"now that",s:"Now that two workers have left, delays ____ (become) inevitable.",a:["have become"],tip:"A past change with a result now → have + past participle."},
    {t:"Past perfect",m:"by the time",s:"By the time the manager noticed, delays ____ (already / become) inevitable.",a:["had already become"],tip:"Earlier than another past event → had + past participle. 'Already' goes after 'had'."},
    {t:"Future simple",m:"if nothing changes",s:"If nothing changes, delays ____ (become) inevitable.",a:["will become"],tip:"Prediction → will + base form."}
  ],
  inherent:[
    {t:"Present simple",m:"general truth",s:"Climbing ____ (involve) inherent risks.",a:["involves"],tip:"An activity as subject is singular → involves."},
    {t:"Past simple",m:"the old design",s:"The old design ____ (have) an inherent flaw.",a:["had"],tip:"Irregular: have → had."},
    {t:"Present perfect",m:"so far",s:"So far, scientists ____ (identify) three risks inherent in the new drug.",a:["have identified"],tip:"'So far' → present perfect."},
    {t:"Past continuous",m:"when …",s:"When the bridge collapsed, engineers ____ (investigate) its inherent weaknesses.",a:["were investigating"],tip:"Action in progress when something else happened → was/were + -ing."},
    {t:"Future simple",m:"any new system",s:"Any new system ____ (have) some inherent problems.",a:["will have"],tip:"Prediction → will + base form."}
  ],
  arbitrary:[
    {t:"Present simple",m:"often",s:"The website often ____ (give) new users arbitrary numbers.",a:["gives"],tip:"He / she / it in present simple → add -s."},
    {t:"Past simple",m:"last year",s:"Last year, the committee ____ (choose) an arbitrary deadline.",a:["chose"],tip:"Irregular: choose → chose → chosen."},
    {t:"Present perfect",m:"so far",s:"So far, nobody ____ (explain) why the rule is so arbitrary.",a:["has explained"],tip:"'Nobody' takes a singular verb: has explained."},
    {t:"Past perfect",m:"by the time",s:"By the time we complained, the prices ____ (already / change) in an arbitrary way.",a:["had already changed"],tip:"Earlier than another past event → had + past participle."},
    {t:"Future simple",m:"without clear rules",s:"Without clear rules, the decision ____ (look) arbitrary.",a:["will look"],tip:"Prediction → will + base form."}
  ],
  plausible:[
    {t:"Present simple",m:"usually",s:"His stories usually ____ (sound) plausible.",a:["sound"],tip:"Plural subject ('his stories') → base form."},
    {t:"Past simple",m:"at first",s:"At first, the excuse ____ (seem) plausible.",a:["seemed"],tip:"Finished past moment → past simple."},
    {t:"Present perfect",m:"since the interview",s:"Since the interview, her account ____ (become) less plausible.",a:["has become"],tip:"Since + point in time → has/have + past participle."},
    {t:"Present continuous",m:"at the moment",s:"At the moment, the police ____ (test) a plausible theory.",a:["are testing"],tip:"'The police' takes a plural verb → are testing."},
    {t:"Future simple",m:"if he adds details",s:"If he adds a few details, the story ____ (sound) more plausible.",a:["will sound"],tip:"First conditional: if + present simple, will + base form."}
  ],
  coherent:[
    {t:"Present simple",m:"general truth",s:"A good essay ____ (need) a coherent structure.",a:["needs"],tip:"Singular subject → needs."},
    {t:"Past simple negative",m:"yesterday",s:"Yesterday's talk ____ (not / be) very coherent.",a:["was not"],tip:"'Be' makes the negative directly: was not / wasn't."},
    {t:"Present perfect",m:"since the training",s:"Since the training, the team ____ (write) more coherent reports.",a:["has written","have written"],tip:"'The team' can take has or have in British English. Written is the participle."},
    {t:"Past continuous",m:"when the teacher arrived",s:"When the teacher arrived, the students ____ (discuss) the topic in a surprisingly coherent way.",a:["were discussing"],tip:"Background action in progress → were + -ing."},
    {t:"Future simple",m:"with one more draft",s:"With one more draft, the chapter ____ (be) completely coherent.",a:["will be"],tip:"Prediction → will be."}
  ],
  prevalent:[
    {t:"Present simple",m:"general truth",s:"Remote work ____ (be) prevalent in the tech industry.",a:["is"],tip:"Uncountable singular subject → is."},
    {t:"Past simple",m:"in the 1990s",s:"In the 1990s, home computers ____ (become) prevalent.",a:["became"],tip:"Finished time period → past simple."},
    {t:"Present perfect",m:"since 2020",s:"Since 2020, video calls ____ (become) prevalent in schools.",a:["have become"],tip:"Since + year → have + past participle."},
    {t:"Present continuous",m:"these days",s:"These days, the habit ____ (become) more prevalent among teenagers.",a:["is becoming"],tip:"A changing situation now → is + -ing."},
    {t:"Future perfect",m:"by 2030",s:"By 2030, electric cars ____ (become) prevalent in most cities.",a:["will have become"],tip:"'By + future time' → will have + past participle."}
  ],
  vulnerable:[
    {t:"Present simple",m:"general truth",s:"Old software ____ (leave) computers vulnerable to attack.",a:["leaves"],tip:"Singular subject → leaves."},
    {t:"Past simple",m:"last winter",s:"Last winter, the storm ____ (make) the coast vulnerable to flooding.",a:["made"],tip:"Irregular: make → made."},
    {t:"Present perfect",m:"since the leak",s:"Since the leak, many users ____ (feel) vulnerable.",a:["have felt"],tip:"Irregular participle: feel → felt."},
    {t:"Past perfect",m:"before the update",s:"Before the update, the system ____ (be) vulnerable for months.",a:["had been"],tip:"A state before another past point → had been."},
    {t:"Future simple",m:"without a backup",s:"Without a backup, your data ____ (stay) vulnerable.",a:["will stay"],tip:"Prediction → will + base form."}
  ],
  deliberate:[
    {t:"Present simple",m:"always",s:"She always ____ (make) deliberate choices about her words.",a:["makes"],tip:"He / she / it in present simple → add -s."},
    {t:"Past simple",m:"last week",s:"Last week, his rudeness ____ (be) completely deliberate.",a:["was"],tip:"Singular subject in the past → was."},
    {t:"Present continuous",m:"this month",s:"This month, the manager ____ (take) a deliberate approach to hiring.",a:["is taking"],tip:"Temporary situation now → is + -ing."},
    {t:"Present perfect",m:"already",s:"The company ____ (already / make) a deliberate change to the design.",a:["has already made"],tip:"Has + already + past participle."},
    {t:"Past perfect",m:"by the time",s:"By the time we noticed, they ____ (plan) a deliberate campaign.",a:["had planned"],tip:"Earlier than another past event → had + past participle."}
  ]
};



const PITFALLS = {
  inevitable:[{re:/\binevitable\s+to\s+\w+/i,msg:"Use 'it is inevitable that …' rather than 'inevitable to + verb'."}],
  inherent:[{re:/\binherent\s+(of|to)\b/i,msg:"Use 'inherent in', not 'inherent of/to'."}],
  arbitrary:[{re:/\barbitary\b/i,msg:"Spelling: arbitrary (ar-bi-tra-ry)."}],
  plausible:[{re:/\bplausable\b/i,msg:"Spelling: plausible, with -ible."},{re:/\b(definitely|certainly|100%|proven)\b[^.]*\bplausible\b/i,msg:"Plausible means something seems true. It doesn't go with 'definitely' or 'proven'."}],
  coherent:[{re:/\bcoherant\b/i,msg:"Spelling: coherent, with -ent."}],
  prevalent:[{re:/\bprevalent\s+(to|for)\b/i,msg:"Use 'prevalent among' (a group) or 'prevalent in' (a place)."},{re:/\bprevelant\b/i,msg:"Spelling: prevalent."}],
  vulnerable:[{re:/\bvulnerable\s+(for|of)\b/i,msg:"The preposition is 'vulnerable to'."},{re:/\bvunerable\b/i,msg:"Spelling: vulnerable (vul-ner-a-ble)."}],
  deliberate:[{re:/\b(he|she|they|it|i|we|you|who)\s+deliberate\s+\w+/i,msg:"Before a verb, use the adverb 'deliberately'."}]
};


/* ---------- Three new words (same level) ---------- */
const NEW_IDS = ["ambiguous","feasible","reluctant"];
ALLW.push(
  { id:"ambiguous", word:"ambiguous", ipa:"/æmˈbɪɡ.ju.əs/", syl:["am","big","u","ous"], stress:1, pos:"adjective",
    def:"Having more than one possible meaning, so it is not clear which one is intended.",
    family:["ambiguity (noun)","ambiguously (adverb)","unambiguous (adjective, opposite)"],
    coll:["an ambiguous answer / message / statement","deliberately ambiguous","highly ambiguous","remain ambiguous"],
    syn:["unclear","open to interpretation","equivocal"], opp:["clear","unambiguous","explicit"],
    ex:"Her reply was ambiguous: 'maybe later' could mean yes or no.",
    watch:"Ambiguous means two or more meanings are possible. If something has no clear meaning at all, 'vague' is often the better word.",
    prompt:"Describe a message, sign or instruction that could be understood in two ways.",
    model:"The sign 'Fine for parking' is ambiguous: it could mean parking is allowed or that you will pay a fine." },
  { id:"feasible", word:"feasible", ipa:"/ˈfiː.zə.bəl/", syl:["fea","si","ble"], stress:0, pos:"adjective",
    def:"Possible to do or achieve in practice, with the time, money and people you have.",
    family:["feasibility (noun)","unfeasible / infeasible (adjective, opposite)"],
    coll:["economically / technically feasible","a feasible plan / option","it is feasible to + verb","a feasibility study"],
    syn:["practical","achievable","workable"], opp:["impractical","unrealistic","impossible"],
    ex:"With only two weeks left, a full redesign isn't feasible.",
    watch:"Feasible is about whether something can really be done, not whether it is likely. 'It's feasible that it will rain' is wrong; say 'it's possible that …'.",
    prompt:"Describe a plan or idea you had, and say whether it was feasible and why.",
    model:"Cycling to work is feasible for me because I live only four kilometres from the office." },
  { id:"reluctant", word:"reluctant", ipa:"/rɪˈlʌk.tənt/", syl:["re","luc","tant"], stress:1, pos:"adjective",
    def:"Not wanting to do something, so you do it slowly or only because you have to.",
    family:["reluctantly (adverb)","reluctance (noun)"],
    coll:["reluctant to + verb","a reluctant hero / participant","somewhat / increasingly reluctant","reluctance to change"],
    syn:["unwilling","hesitant","unenthusiastic"], opp:["willing","eager","keen"],
    ex:"Many people are reluctant to change their passwords.",
    watch:"Use 'reluctant to + base verb': 'reluctant to speak', not 'reluctant for speaking' or 'reluctant of'.",
    prompt:"Talk about something you were reluctant to do at first but are glad you did.",
    model:"I was reluctant to join the gym at first, but now I go three times a week." }
);

/* Extra fields for every word: spelling pattern, a second example for listening, more questions to answer */
const EXTRA = {
  inevitable:{ stem:/\binevitab(le|ly|ility)\b/i, ex2:"With so many cars on one road, traffic jams are inevitable every morning.",
    qs:["What is one inevitable part of starting a new job or school?","Which changes in technology do you think are inevitable in the next twenty years?"] },
  inherent:{ stem:/\binherent(ly)?\b/i, ex2:"Some stress is inherent in any important exam.",
    qs:["What risk is a natural part of a job you know well?","Is there a weakness inherent in social media? What is it?"] },
  arbitrary:{ stem:/\barbitrar(y|ily|iness)\b/i, ex2:"The teacher's seating plan seemed arbitrary to the students.",
    qs:["Have you ever been given a grade or a decision that felt arbitrary? What happened?","Which rule in your country seems arbitrary to you?"] },
  plausible:{ stem:/\b(im)?plausib(le|ly|ility)\b/i, ex2:"It is plausible that the meeting will move to Thursday.",
    qs:["What is a plausible reason for a friend to cancel plans at the last minute?","Which prediction about the future do you find plausible?"] },
  coherent:{ stem:/\b(in)?coheren(t|tly|ce)\b/i, ex2:"After a long night, he could hardly give a coherent answer.",
    qs:["What makes a presentation coherent?","Think of a film whose story wasn't coherent. What went wrong?"] },
  prevalent:{ stem:/\bprevalen(t|ce)\b/i, ex2:"Back pain is prevalent among people who sit all day.",
    qs:["Which habit is prevalent among people in your country?","What kind of job is becoming more prevalent among young people?"] },
  vulnerable:{ stem:/\b(in)?vulnerab(le|ility|ilities)\b/i, ex2:"Young plants are vulnerable to frost in early spring.",
    qs:["Which people in your city are most vulnerable in winter?","How can you make your phone less vulnerable to hackers?"] },
  deliberate:{ stem:/\bdeliberate(ly|d)?\b|\bdeliberation\b/i, ex2:"The company made a deliberate decision to keep prices low.",
    qs:["Describe a deliberate choice you made about your studies or career.","Have you ever made a mistake that someone thought was deliberate?"] },
  ambiguous:{ stem:/\b(un)?ambigu(ous|ously|ity|ities)\b/i, ex2:"The ending of the novel is deliberately ambiguous.",
    qs:["Have you ever received an ambiguous text message? What did it say?","Why do politicians sometimes give deliberately ambiguous answers?"] },
  feasible:{ stem:/\b(un|in)?feasib(le|ly|ility)\b/i, ex2:"Is it feasible to finish the report before lunch?",
    qs:["Is it feasible for you to learn a new language in one year? Why or why not?","What is one change that would be feasible for your school or company to make?"] },
  reluctant:{ stem:/\breluctan(t|tly|ce)\b/i, ex2:"She was reluctant to leave her old team.",
    qs:["What were you reluctant to do as a child?","Why are some people reluctant to use online banking?"] }
};
ALLW.forEach(w=>Object.assign(w, EXTRA[w.id]));

QUIZ.push(
  {w:"ambiguous",k:"Definition",q:"Which word means 'having more than one possible meaning'?",a:"ambiguous",o:null,why:"An ambiguous message can be read in two or more ways."},
  {w:"feasible",k:"Definition",q:"Which word means 'possible to do in practice'?",a:"feasible",o:null,why:"A feasible plan can really be carried out."},
  {w:"reluctant",k:"Definition",q:"Which word means 'not wanting to do something'?",a:"reluctant",o:null,why:"If you are reluctant, you do it slowly or because you have to."},
  {w:"ambiguous",k:"Synonyms",q:"Which word is closest in meaning to 'open to interpretation'?",a:"ambiguous",o:null,why:"Both describe words or situations that can be understood in different ways."},
  {w:"feasible",k:"Opposites",q:"Which word is the opposite of 'unrealistic and impractical'?",a:"feasible",o:null,why:"Feasible plans are realistic and practical."},
  {w:"reluctant",k:"Opposites",q:"Which word is the opposite of 'eager' and 'willing'?",a:"reluctant",o:null,why:"Eager people want to act; reluctant people don't."},
  {w:"ambiguous",k:"In context",q:"The instructions were ____: half the class did one thing and half did another.",a:"ambiguous",o:null,why:"Two groups understood them in two different ways."},
  {w:"feasible",k:"In context",q:"With our small budget, a second office just isn't ____.",a:"feasible",o:null,why:"There isn't enough money to do it in practice."},
  {w:"reluctant",k:"In context",q:"Many patients are ____ to ask the doctor questions.",a:"reluctant",o:null,why:"Notice the pattern 'reluctant to + verb'."},
  {w:"ambiguous",k:"Is it correct?",q:"'The message was so ambiguous that everyone understood it the same way.' Is this correct?",a:"No, it's wrong",o:["Yes, it's correct","No, it's wrong"],why:"If it were ambiguous, people would understand it in different ways."},
  {w:"feasible",k:"Is it correct?",q:"'It is feasible to build the bridge in two years.' Is this correct?",a:"Yes, it's correct",o:["Yes, it's correct","No, it's wrong"],why:"'It is feasible to + verb' is the natural pattern."},
  {w:"reluctant",k:"Is it correct?",q:"'She was reluctant for signing the contract.' Is this correct?",a:"No, it's wrong",o:["Yes, it's correct","No, it's wrong"],why:"It should be 'reluctant to sign the contract'."}
);

FORMS.push(
  {w:"ambiguous",s:"There is some ____ in the second rule; it can be read two ways.",base:"ambiguous",a:["ambiguity"]},
  {w:"ambiguous",s:"The question was ____ worded, so nobody knew what to write.",base:"ambiguous",a:["ambiguously"]},
  {w:"feasible",s:"The team is still checking the ____ of the plan.",base:"feasible",a:["feasibility"]},
  {w:"reluctant",s:"He ____ agreed to work on Saturday.",base:"reluctant",a:["reluctantly"]},
  {w:"reluctant",s:"Her ____ to speak in public is easy to understand.",base:"reluctant",a:["reluctance"]}
);

SCRAMBLE.push(
  {w:"ambiguous",t:"the wording of the contract was ambiguous",p:".",alt:[]},
  {w:"feasible",t:"the plan is not feasible without more money",p:".",alt:["without more money the plan is not feasible"]},
  {w:"reluctant",t:"many students are reluctant to ask questions in class",p:".",alt:["in class many students are reluctant to ask questions"]}
);

Object.assign(LADDERS, {
  ambiguous:[
    {t:"Present simple",m:"general truth",s:"The new rule ____ (sound) ambiguous to most people.",a:["sounds"],tip:"Singular subject → add -s."},
    {t:"Past simple",m:"yesterday",s:"Yesterday, the minister ____ (give) a deliberately ambiguous answer.",a:["gave"],tip:"Irregular: give → gave → given."},
    {t:"Present perfect",m:"so far",s:"So far, the results ____ (remain) ambiguous.",a:["have remained"],tip:"'So far' → have / has + past participle."},
    {t:"Past continuous",m:"while …",s:"While we ____ (read) the ambiguous email, our boss called.",a:["were reading"],tip:"Action in progress when something else happened → were + -ing."},
    {t:"Future simple",m:"without examples",s:"Without examples, the instructions ____ (be) ambiguous.",a:["will be"],tip:"Prediction → will + base form."}
  ],
  feasible:[
    {t:"Present simple",m:"on paper",s:"The plan ____ (look) feasible on paper.",a:["looks"],tip:"Singular subject → add -s."},
    {t:"Past simple negative",m:"last year",s:"Last year, a new stadium ____ (not / be) feasible.",a:["was not"],tip:"'Be' makes the negative directly: was not / wasn't."},
    {t:"Present perfect",m:"since prices fell",s:"Since prices fell, solar power ____ (become) more feasible.",a:["has become"],tip:"Since + past event → has + past participle."},
    {t:"Past perfect",m:"by the time",s:"By the time the money arrived, the project ____ (already / stop) being feasible.",a:["had already stopped"],tip:"Earlier than another past event → had + past participle."},
    {t:"Future simple",m:"with two more engineers",s:"With two more engineers, the deadline ____ (be) feasible.",a:["will be"],tip:"Prediction → will be."}
  ],
  reluctant:[
    {t:"Present simple",m:"usually",s:"My brother usually ____ (seem) reluctant to talk about work.",a:["seems"],tip:"He / she / it → add -s."},
    {t:"Past simple",m:"at first",s:"At first, the manager ____ (feel) reluctant to hire him.",a:["felt"],tip:"Irregular: feel → felt → felt."},
    {t:"Present continuous",m:"these days",s:"These days, more people ____ (become) reluctant to share their data.",a:["are becoming"],tip:"A changing situation now → are + -ing."},
    {t:"Present perfect",m:"since the crisis",s:"Since the crisis, investors ____ (be) reluctant to take risks.",a:["have been"],tip:"Since + event → have been."},
    {t:"Future simple",m:"if you shout",s:"If you shout, the children ____ (be) even more reluctant to help.",a:["will be"],tip:"First conditional: if + present, will + base form."}
  ]
});

Object.assign(PITFALLS, {
  ambiguous:[{re:/\bambigious\b/i,msg:"Spelling: ambiguous (am-big-u-ous)."}],
  feasible:[{re:/\bfeasable\b/i,msg:"Spelling: feasible, with -ible."},{re:/\bfeasible\s+that\b/i,msg:"Use 'it is feasible to + verb'. For chance, say 'it is possible that …'."}],
  reluctant:[{re:/\breluctant\s+(for|of)\b/i,msg:"Use 'reluctant to + verb'."},{re:/\breluctant\s+to\s+\w+ing\b/i,msg:"After 'reluctant to', use the base verb: reluctant to go, not reluctant to going."}]
});

/* ---------- New exercise content ---------- */
/* Collocations: which partner word fits? */
const COLL = [
  {w:"inevitable",s:"It is inevitable ____ prices will go up next year.",a:"that",o:["that","to","for"],why:"The pattern is 'it is inevitable that + clause'."},
  {w:"inevitable",s:"After two bad years, closing the shop was ____ inevitable.",a:"almost",o:["almost","very","too"],why:"We say 'almost inevitable' or 'largely inevitable'. 'Very inevitable' sounds wrong because inevitable is already absolute."},
  {w:"inherent",s:"There are risks inherent ____ every sport.",a:"in",o:["in","of","to"],why:"The preposition is always 'inherent in'."},
  {w:"inherent",s:"Every old building has some inherent ____.",a:"weaknesses",o:["weaknesses","holidays","colours"],why:"'Inherent weakness / risk / danger' are the most common partners."},
  {w:"arbitrary",s:"The rule may ____ arbitrary, but there is a reason for it.",a:"seem",o:["seem","make","do"],why:"'Seem arbitrary' is a very common pair."},
  {w:"arbitrary",s:"The judges' choice was ____ arbitrary; they gave no reason at all.",a:"completely",o:["completely","deeply","heavily"],why:"'Completely arbitrary' and 'somewhat arbitrary' are natural. 'Deeply' and 'heavily' don't go with it."},
  {w:"plausible",s:"At first, his story ____ plausible.",a:"sounded",o:["sounded","listened","spoke"],why:"Stories and explanations 'sound plausible'."},
  {w:"plausible",s:"That's a perfectly plausible ____ for being late.",a:"excuse",o:["excuse","furniture","weather"],why:"'A plausible excuse / explanation / story' are the usual partners."},
  {w:"coherent",s:"The speaker built a coherent ____ around one simple idea.",a:"argument",o:["argument","temperature","journey"],why:"'A coherent argument / plan / strategy' are common."},
  {w:"coherent",s:"The ten chapters fit together to form a coherent ____.",a:"whole",o:["whole","total","full"],why:"'A coherent whole' is a fixed phrase."},
  {w:"prevalent",s:"Short videos are prevalent ____ teenagers.",a:"among",o:["among","between","for"],why:"Use 'prevalent among' for a group of people."},
  {w:"prevalent",s:"The disease is still prevalent ____ some parts of Africa.",a:"in",o:["in","on","at"],why:"Use 'prevalent in' for a place."},
  {w:"vulnerable",s:"An old password leaves you vulnerable ____ attack.",a:"to",o:["to","for","of"],why:"The preposition is always 'vulnerable to'."},
  {w:"vulnerable",s:"The new law protects children and other vulnerable ____.",a:"groups",o:["groups","teams","crowds"],why:"'Vulnerable groups' is the standard phrase in the news and in policy."},
  {w:"deliberate",s:"It was a deliberate ____ to mislead the public.",a:"attempt",o:["attempt","trial","test"],why:"'A deliberate attempt' is one of the most common partners."},
  {w:"deliberate",s:"Keeping the logo small was a deliberate design ____.",a:"choice",o:["choice","luck","accident"],why:"'A deliberate choice / decision' means it was planned."},
  {w:"ambiguous",s:"The politician's answer was ____ ambiguous, so nobody could quote him.",a:"deliberately",o:["deliberately","inevitably","reluctantly"],why:"'Deliberately ambiguous' means unclear on purpose."},
  {w:"ambiguous",s:"Even after the vote, the result ____ ambiguous.",a:"remains",o:["remains","keeps","holds"],why:"'Remain ambiguous' is a common pair."},
  {w:"feasible",s:"Is it feasible ____ finish by Friday?",a:"to",o:["to","for","of"],why:"The pattern is 'it is feasible to + verb'."},
  {w:"feasible",s:"Before building anything, they paid for a ____ study.",a:"feasibility",o:["feasibility","feasible","feasibly"],why:"A 'feasibility study' checks if a plan can really work."},
  {w:"reluctant",s:"He was reluctant ____ the offer.",a:"to accept",o:["to accept","accepting","for accepting"],why:"Reluctant + to + base verb."},
  {w:"reluctant",s:"There is a lot of ____ to change in big companies.",a:"reluctance",o:["reluctance","reluctant","reluctantly"],why:"'Reluctance to change' is a common noun phrase."}
];

/* Upgrade: say the same thing with the target word */




/* ---------- Vocabulary levels: 10 formal + 10 informal words at every level ---------- */
const OLDLV={inevitable:[3,"formal"],plausible:[3,"formal"],prevalent:[3,"formal"],vulnerable:[3,"formal"],deliberate:[3,"formal"],reluctant:[3,"formal"],
  inherent:[4,"formal"],arbitrary:[4,"formal"],coherent:[4,"formal"],ambiguous:[4,"formal"],feasible:[4,"formal"]};
ALLW.forEach(w=>{ if(OLDLV[w.id]){ w.lv=OLDLV[w.id][0]; w.reg=OLDLV[w.id][1]; } });
const NEWV=[
  /* ---- A1 formal ---- */
  {id:"good-morning",word:"good morning",lv:0,reg:"formal",ipa:"/ɡʊd ˈmɔː.nɪŋ/",pos:"greeting",
   def:"A polite greeting you use before about 12 o'clock.",family:["good afternoon (after 12)","good evening (after about 6 pm)"],
   coll:["good morning, everyone","good morning, sir","say good morning"],syn:["hello","good day"],opp:["good night","goodbye"],
   ex:"Good morning, Mrs Smith. How are you today?",ex2:"The teacher said good morning to the class.",
   watch:"Use good morning to say hello, not goodbye. To say goodbye at night, say good night.",
   prompt:"How do you greet your teacher or your boss when you arrive in the morning?",model:"I say good morning to my boss when I arrive at work.",
   qs:["Who do you say good morning to every day?","What time do you stop saying good morning?"],stem:/\bgood morning\b/i,up:{plain:"Hi, Mr Brown!",model:"Good morning, Mr Brown!"}},
  {id:"thank-you",word:"thank you",lv:0,reg:"formal",ipa:"/ˈθæŋk juː/",pos:"phrase",
   def:"A polite way to show you are happy that someone helped you or gave you something.",family:["thank (verb)","thankful (adjective)"],
   coll:["thank you very much","thank you for your help","thank you so much"],syn:["many thanks","thanks"],opp:[],
   ex:"Thank you for your email, Mr Jones.",ex2:"Thank you very much for your help.",
   watch:"Thank you is two words. Thankyou as one word is a spelling mistake.",
   prompt:"Write one polite sentence to thank someone who helped you this week.",model:"Thank you for helping me with my homework yesterday.",
   qs:["How do you thank a shop assistant in English?","Who was the last person you said thank you to?"],stem:/\bthank you\b/i,up:{plain:"Thanks for the email.",model:"Thank you for your email."}},
  {id:"excuse-me",word:"excuse me",lv:0,reg:"formal",ipa:"/ɪkˈskjuːz miː/",pos:"phrase",
   def:"A polite phrase to get someone's attention or to ask them to move.",family:["excuse (verb and noun)"],
   coll:["excuse me, please","excuse me, where is the station?","excuse me for a moment"],syn:["pardon me"],opp:[],
   ex:"Excuse me, where is the train station?",ex2:"Excuse me, can I sit here?",
   watch:"Say excuse me before you interrupt or ask a stranger something. Say sorry after you make a mistake.",
   prompt:"You are lost in a new city. What do you say to a stranger?",model:"Excuse me, can you tell me where the museum is?",
   qs:["When do you say excuse me on a bus or a train?","How do you get a waiter's attention politely?"],stem:/\bexcuse me\b/i,up:{plain:"Hey, where's the bank?",model:"Excuse me, where is the bank?"}},
  {id:"would-like",word:"would like",lv:0,reg:"formal",ipa:"/wʊd ˈlaɪk/",pos:"phrase (verb)",
   def:"A polite way to say what you want.",family:["I'd like (short form)","would you like …? (an offer)"],
   coll:["I would like a coffee","I would like to book a room","would like some help"],syn:["want (less polite)"],opp:["don't want"],
   ex:"I would like a table for two, please.",ex2:"I would like to book a room for Friday.",
   watch:"After would like, use a noun or to + verb: I would like to book a room, not I would like book a room.",
   prompt:"You are in a café. Order your favourite drink politely.",model:"I would like a large cappuccino, please.",
   qs:["What would you like to do this weekend?","Where would you like to travel next year?"],stem:/\b(would|'d) like\b/i,up:{plain:"I want a coffee.",model:"I would like a coffee, please."}},
  {id:"please",word:"please",lv:0,reg:"formal",ipa:"/pliːz/",pos:"adverb",
   def:"A small word you add to make a request polite.",family:["pleased (adjective: happy)","pleasant (adjective: nice)"],
   coll:["yes, please","please sit down","could you please help me?"],syn:["kindly (very formal)"],opp:[],
   ex:"Could you open the window, please?",ex2:"Please sit down and wait.",
   watch:"Put please at the start or the end of a request: Please close the door, or Close the door, please.",
   prompt:"Ask a classmate for something you need, politely.",model:"Could you lend me a pen, please?",
   qs:["How many times do you say please in a normal day?","Is it rude to forget please in your language?"],stem:/\bplease\b/i,up:{plain:"Give me the menu.",model:"Could you give me the menu, please?"}},
  {id:"goodbye",word:"goodbye",lv:0,reg:"formal",ipa:"/ɡʊdˈbaɪ/",syl:["good","bye"],stress:1,pos:"exclamation",
   def:"What you say when you leave someone or end a phone call.",family:["say goodbye (verb phrase)"],
   coll:["say goodbye to someone","goodbye and thank you","wave goodbye"],syn:["farewell (very formal)"],opp:["hello","good morning"],
   ex:"Goodbye, and thank you for coming.",ex2:"We said goodbye at the airport.",
   watch:"Goodbye sounds a little formal with friends. With friends, bye or see you is more natural.",
   prompt:"How do you end a phone call with your doctor or your boss?",model:"Thank you for your help. Goodbye.",
   qs:["Who did you say goodbye to today?","Is it hard for you to say goodbye at airports?"],stem:/\bgood-?bye\b/i,up:{plain:"Bye! See ya!",model:"Goodbye, and have a nice day."}},
  /* ---- A1 informal ---- */
  {id:"hi",word:"hi",lv:0,reg:"informal",ipa:"/haɪ/",pos:"exclamation",
   def:"A short, friendly way to say hello.",family:["hiya (very informal)"],
   coll:["hi there","say hi to someone","hi, everyone"],syn:["hey"],opp:["bye"],
   ex:"Hi, Tom! How are you?",ex2:"Say hi to your sister for me.",
   watch:"Hi is for friends, family and classmates. In a job interview or an email to a stranger, use hello or good morning.",
   prompt:"Write a short message to a friend you haven't seen for a week.",model:"Hi Anna! How was your week?",
   qs:["Who do you say hi to every day?","Do you say hi to your teacher, or something more formal?"],stem:/\bhi\b/i,up:{plain:"Good morning, Tom.",model:"Hi, Tom!"}},
  {id:"thanks",word:"thanks",lv:0,reg:"informal",ipa:"/θæŋks/",pos:"exclamation",
   def:"An informal way to say thank you.",family:["thanks a lot","thanks to (= because of)"],
   coll:["thanks a lot","thanks for the pizza","thanks again"],syn:["cheers (British)"],opp:[],
   ex:"Thanks for the pizza!",ex2:"Thanks a lot, see you tomorrow.",
   watch:"Thanks is always plural: thanks, not thank. Thank needs you: thank you.",
   prompt:"Your friend sent you a funny video. Reply with one short message.",model:"Thanks for the video, it was so funny!",
   qs:["What is the last thing you said thanks for?","Do you say thanks to bus drivers in your town?"],stem:/\bthanks\b/i,up:{plain:"Thank you for your help.",model:"Thanks for your help!"}},
  {id:"yeah",word:"yeah",lv:0,reg:"informal",ipa:"/jeə/",pos:"adverb (spoken)",
   def:"An informal way to say yes.",family:["yep (very informal)","yeah, right (when you don't believe something)"],
   coll:["yeah, sure","oh yeah","yeah, I know"],syn:["yes","yep","sure"],opp:["no","nope"],
   ex:"Yeah, I can come to the party.",ex2:"Are you hungry? Yeah, a bit.",
   watch:"Yeah is fine when you speak with friends. In a formal email or an exam essay, write yes.",
   prompt:"Your friend asks if you want to watch a film tonight. Answer informally.",model:"Yeah, sure! What time does it start?",
   qs:["Do you say yeah or yes more often?","When is yeah not polite enough?"],stem:/\byeah\b/i,up:{plain:"Yes, I can come.",model:"Yeah, I can come!"}},
  {id:"bye",word:"bye",lv:0,reg:"informal",ipa:"/baɪ/",pos:"exclamation",
   def:"A short, friendly way to say goodbye.",family:["bye-bye (to children)","bye for now"],
   coll:["bye for now","say bye","bye, see you later"],syn:["see you"],opp:["hi"],
   ex:"Bye! See you tomorrow.",ex2:"She said bye and got on the bus.",
   watch:"Bye is for friends and family. To a customer or in a formal email, use goodbye or kind regards.",
   prompt:"End a phone call with your best friend.",model:"OK, bye! Talk to you later.",
   qs:["How do you say bye in your language when you're in a hurry?","Do you say bye or goodbye to your teacher?"],stem:/\bbye\b/i,up:{plain:"Goodbye, Mr Jones.",model:"Bye, Tom! See you!"}},
  {id:"cool",word:"cool",lv:0,reg:"informal",ipa:"/kuːl/",pos:"adjective",
   def:"Very good, fashionable or great.",family:["coolness (noun)"],
   coll:["that's cool","a cool idea","really cool"],syn:["great","awesome"],opp:["boring","uncool"],
   ex:"Your new phone is really cool.",ex2:"That's a cool idea! Let's do it.",
   watch:"Cool also means a bit cold: a cool evening. The informal meaning is 'great'.",
   prompt:"Tell a friend about something cool you saw this week.",model:"I saw a really cool bike in town yesterday.",
   qs:["What is the coolest place in your town?","Which app do you think is really cool right now?"],stem:/\bcool(er|est)?\b/i,up:{plain:"That is an excellent idea.",model:"That's a cool idea!"}},
  {id:"ok",word:"OK",lv:0,reg:"informal",ipa:"/əʊˈkeɪ/",syl:["O","K"],stress:1,pos:"exclamation / adjective",
   def:"An informal way to say yes, all right or fine.",family:["okay (other spelling)"],
   coll:["OK, let's go","is it OK if I sit here?","I'm OK"],syn:["all right","fine"],opp:["not OK"],
   ex:"OK, let's meet at six.",ex2:"Is it OK if I open the window?",
   watch:"OK and okay are both correct. In formal writing, use all right, acceptable or I agree.",
   prompt:"Your friend wants to change the meeting time. Agree informally.",model:"OK, no problem. Let's meet at seven.",
   qs:["What do you do when you're not feeling OK?","Is OK a word in your language too?"],stem:/\b(ok|okay)\b/i,up:{plain:"I agree with the new time.",model:"OK, the new time is fine."}},
  /* ---- A2 formal ---- */
  {id:"receive",word:"receive",lv:1,reg:"formal",ipa:"/rɪˈsiːv/",syl:["re","ceive"],stress:1,pos:"verb",
   def:"To get something that someone gives or sends to you.",family:["receipt (noun: paper from a shop)","reception (noun)"],
   coll:["receive an email","receive a reply","receive a prize"],syn:["get","be given"],opp:["send"],
   ex:"I received your email this morning.",ex2:"She will receive a prize for her work.",
   watch:"Spelling: i before e except after c. Receive, not recieve.",
   prompt:"Write one formal sentence about a letter or parcel you got.",model:"I received a parcel from my aunt last week.",
   qs:["What is the best present you have ever received?","How many emails do you receive in a day?"],stem:/\breceiv(e|es|ed|ing)\b/i,up:{plain:"I got your email.",model:"I received your email."}},
  {id:"reply",word:"reply",lv:1,reg:"formal",ipa:"/rɪˈplaɪ/",syl:["re","ply"],stress:1,pos:"verb / noun",
   def:"To answer someone, especially in writing.",family:["reply (noun)","replied (past)"],
   coll:["reply to an email","a quick reply","reply as soon as possible"],syn:["answer","respond"],opp:["ignore"],
   ex:"Please reply to this email by Friday.",ex2:"I'm still waiting for a reply.",
   watch:"We reply to someone or something: reply to my message, not reply my message.",
   prompt:"Write the last line of a formal email asking for an answer.",model:"Please reply to me as soon as possible.",
   qs:["How quickly do you reply to messages?","Who never replies to your emails?"],stem:/\brepl(y|ies|ied|ying)\b/i,up:{plain:"Answer me soon.",model:"Please reply as soon as possible."}},
  {id:"inform",word:"inform",lv:1,reg:"formal",ipa:"/ɪnˈfɔːm/",syl:["in","form"],stress:1,pos:"verb",
   def:"To tell someone facts, often in an official way.",family:["information (noun)","informative (adjective)"],
   coll:["inform the police","inform someone about a change","keep someone informed"],syn:["tell","notify"],opp:["keep secret"],
   ex:"Please inform the teacher if you are ill.",ex2:"We will inform you about the new timetable.",
   watch:"Inform needs a person: inform someone of or about something. Information is uncountable: some information, not an information.",
   prompt:"Write a formal sentence telling a manager you will be late.",model:"I am writing to inform you that I will be late tomorrow.",
   qs:["How does your school inform students about changes?","Who should you inform if you lose your passport?"],stem:/\binform(s|ed|ing)?\b/i,up:{plain:"I'm telling you that the shop is closed.",model:"We would like to inform you that the shop is closed."}},
  {id:"assist",word:"assist",lv:1,reg:"formal",ipa:"/əˈsɪst/",syl:["as","sist"],stress:1,pos:"verb",
   def:"To help someone, especially at work.",family:["assistant (noun: a person)","assistance (noun)"],
   coll:["assist customers","assist someone with something","how can I assist you?"],syn:["help","support"],opp:["hinder"],
   ex:"How can I assist you today?",ex2:"Two nurses assisted the doctor.",
   watch:"Assist is more formal than help. Assistance is uncountable: some assistance, not assistances.",
   prompt:"You work in a hotel. Greet a guest and offer help formally.",model:"Good evening. How may I assist you?",
   qs:["Who assists you most at school or work?","Have you ever assisted a tourist in your town?"],stem:/\bassist(s|ed|ing|ance)?\b/i,up:{plain:"Can I help you?",model:"How may I assist you?"}},
  {id:"attend",word:"attend",lv:1,reg:"formal",ipa:"/əˈtend/",syl:["at","tend"],stress:1,pos:"verb",
   def:"To go to an event, a meeting or a school.",family:["attendance (noun)","attendee (noun)"],
   coll:["attend a meeting","attend school","attend a wedding"],syn:["go to","be present at"],opp:["miss","skip"],
   ex:"All students must attend the meeting.",ex2:"She attended a small school in the mountains.",
   watch:"No to after attend: attend the meeting, not attend to the meeting. Attend to means deal with.",
   prompt:"Write a formal sentence about an event you went to recently.",model:"Last month I attended my cousin's wedding in Gdańsk.",
   qs:["What was the last wedding or party you attended?","Is it important to attend every class?"],stem:/\battend(s|ed|ing|ance)?\b/i,up:{plain:"I went to the meeting.",model:"I attended the meeting."}},
  {id:"request",word:"request",lv:1,reg:"formal",ipa:"/rɪˈkwest/",syl:["re","quest"],stress:1,pos:"verb / noun",
   def:"To ask for something politely or officially.",family:["request (noun)","on request (phrase)"],
   coll:["request information","make a request","request a refund"],syn:["ask for","apply for"],opp:["refuse"],
   ex:"I would like to request a new password.",ex2:"We received your request yesterday.",
   watch:"The verb has no for: request a room, not request for a room. The noun can take for: a request for help.",
   prompt:"Write a formal sentence asking a school for some information.",model:"I would like to request information about your evening courses.",
   qs:["What was the last thing you requested from a company?","How do you request a day off at work or school?"],stem:/\brequest(s|ed|ing)?\b/i,up:{plain:"Can I have a new card?",model:"I would like to request a new card."}},
  /* ---- A2 informal ---- */
  {id:"kid",word:"kid",lv:1,reg:"informal",ipa:"/kɪd/",pos:"noun",
   def:"An informal word for a child.",family:["kids (plural)","kid (verb: to joke)","no kidding (phrase)"],
   coll:["have kids","when I was a kid","the kid next door"],syn:["child","youngster"],opp:["adult","grown-up"],
   ex:"When I was a kid, I loved football.",ex2:"The kid next door plays the drums.",
   watch:"Kid as a verb means joke: Are you kidding? = Are you joking?",
   prompt:"Tell a friend about something you loved when you were small.",model:"When I was a kid, I played outside every day.",
   qs:["What did you want to be when you were a kid?","Are kids today happier than kids in the past?"],stem:/\bkid(s|ding)?\b/i,up:{plain:"Do you have children?",model:"Have you got kids?"}},
  {id:"guy",word:"guy",lv:1,reg:"informal",ipa:"/ɡaɪ/",pos:"noun",
   def:"An informal word for a man. Guys can mean a group of any people.",family:["guys (plural, for anyone)"],
   coll:["a nice guy","you guys","hi guys"],syn:["man","bloke (British)"],opp:["woman"],
   ex:"He's a really nice guy.",ex2:"The guy in the shop was very helpful.",
   watch:"Guys (plural) is often used for a mixed group of men and women: Hi guys! But a guy (singular) is a man.",
   prompt:"Describe a nice person you met recently, informally.",model:"I met a really friendly guy at the gym yesterday.",
   qs:["Who is the funniest guy you know?","Do you say you guys when you talk to friends?"],stem:/\bguys?\b/i,up:{plain:"Good morning, everyone.",model:"Hi guys!"}},
  {id:"stuff",word:"stuff",lv:1,reg:"informal",ipa:"/stʌf/",pos:"noun (uncountable)",
   def:"An informal word for things, when you don't need to name them.",family:["stuffed (adjective: full)","stuff (verb: fill)"],
   coll:["lots of stuff","my stuff","and stuff (= and similar things)"],syn:["things","belongings"],opp:[],
   ex:"Can I leave my stuff here?",ex2:"I've got loads of stuff to do today.",
   watch:"Stuff is uncountable: a lot of stuff, not a lot of stuffs.",
   prompt:"Tell a friend what's in your bag right now.",model:"My bag is full of stuff: books, keys and snacks.",
   qs:["Do you have too much stuff in your room?","What stuff do you always take on holiday?"],stem:/\bstuff\b/i,up:{plain:"Please take your belongings with you.",model:"Don't forget your stuff!"}},
  {id:"awesome",word:"awesome",lv:1,reg:"informal",ipa:"/ˈɔː.səm/",syl:["awe","some"],stress:0,pos:"adjective",
   def:"Very good; great.",family:["awesomely (adverb)"],
   coll:["that's awesome","an awesome time","totally awesome"],syn:["amazing","great"],opp:["awful","terrible"],
   ex:"We had an awesome time at the beach.",ex2:"Your new haircut looks awesome!",
   watch:"In older or formal English, awesome means 'very impressive and a little frightening'. In everyday speech it just means 'great'.",
   prompt:"Tell a friend about an awesome day you had.",model:"Last Saturday was awesome. We went kayaking on the river.",
   qs:["What was the most awesome concert or match you've seen?","What awesome thing would you like to try?"],stem:/\bawesome\b/i,up:{plain:"The concert was excellent.",model:"The concert was awesome!"}},
  {id:"hang-out",word:"hang out",lv:1,reg:"informal",ipa:"/ˌhæŋ ˈaʊt/",pos:"phrasal verb",
   def:"To spend time with friends in a relaxed way.",family:["hung out (past)","a hangout (noun: a favourite place)"],
   coll:["hang out with friends","hang out at the park","hang out together"],syn:["spend time"],opp:["work"],
   ex:"We often hang out at the shopping centre.",ex2:"Do you want to hang out on Saturday?",
   watch:"The past is hung out: Yesterday we hung out at the beach.",
   prompt:"Tell a friend where you like to spend free time.",model:"I usually hang out with my friends at the skate park.",
   qs:["Where do young people hang out in your town?","Who do you hang out with most?"],stem:/\b(hang|hangs|hung|hanging) out\b/i,up:{plain:"I spend time with my friends.",model:"I hang out with my friends."}},
  {id:"grab",word:"grab",lv:1,reg:"informal",ipa:"/ɡræb/",pos:"verb",
   def:"To get or take something quickly, often food or drink.",family:["grabbed (past)","up for grabs (phrase: available)"],
   coll:["grab a coffee","grab a seat","grab a bite"],syn:["get","pick up"],opp:["drop"],
   ex:"Let's grab a coffee after class.",ex2:"I'll grab some sandwiches for lunch.",
   watch:"Grab also means take something suddenly and roughly: He grabbed my arm. Double the b: grabbed.",
   prompt:"Invite a friend for a quick drink or snack.",model:"Do you want to grab a pizza after work?",
   qs:["Where do you grab lunch on a busy day?","What do you grab before you leave the house?"],stem:/\bgrab(s|bed|bing)?\b/i,up:{plain:"Shall we have a quick coffee?",model:"Let's grab a coffee!"}},
  /* ---- B1 formal ---- */
  {id:"purchase",word:"purchase",lv:2,reg:"formal",ipa:"/ˈpɜː.tʃəs/",syl:["pur","chase"],stress:0,pos:"verb / noun",
   def:"To buy something; something you buy.",family:["purchaser (noun)","purchasing (adjective)"],
   coll:["purchase a ticket","make a purchase","proof of purchase"],syn:["buy","acquire"],opp:["sell"],
   ex:"Tickets can be purchased online.",ex2:"Please keep your receipt as proof of purchase.",
   watch:"Purchase sounds like 'per-chus', not like chase.",
   prompt:"Write a formal sentence about something expensive you bought.",model:"I purchased a new laptop last month.",
   qs:["What was your best purchase this year?","Do you prefer to purchase things online or in shops?"],stem:/\bpurchas(e|es|ed|ing)\b/i,up:{plain:"You can buy tickets online.",model:"Tickets may be purchased online."}},
  {id:"require",word:"require",lv:2,reg:"formal",ipa:"/rɪˈkwaɪə/",syl:["re","quire"],stress:1,pos:"verb",
   def:"To need something; to make something necessary.",family:["requirement (noun)","required (adjective)"],
   coll:["require help","be required to show ID","if required"],syn:["need","demand"],opp:["not need"],
   ex:"This job requires good English.",ex2:"Passengers are required to show their passport.",
   watch:"Be required to + verb is a formal way to say must: You are required to wear a helmet.",
   prompt:"Write a formal sentence about what your job or course needs.",model:"My course requires two hours of homework a day.",
   qs:["What skills does your dream job require?","What documents are required to travel abroad?"],stem:/\brequir(e|es|ed|ing|ement)\b/i,up:{plain:"You need a passport.",model:"A passport is required."}},
  {id:"provide",word:"provide",lv:2,reg:"formal",ipa:"/prəˈvaɪd/",syl:["pro","vide"],stress:1,pos:"verb",
   def:"To give someone something they need.",family:["provider (noun)","provided (that) (conjunction: if)"],
   coll:["provide information","provide someone with something","provide support"],syn:["supply","give"],opp:["withhold"],
   ex:"The hotel provides free breakfast.",ex2:"Please provide your full name and address.",
   watch:"Provide someone with something, or provide something for someone. Not provide someone something.",
   prompt:"Write a formal sentence about what your school or company gives people.",model:"My company provides free coffee for all workers.",
   qs:["What does your town provide for young people?","Which apps provide the best news?"],stem:/\bprovid(e|es|ed|ing|er)\b/i,up:{plain:"We give you free Wi-Fi.",model:"We provide free Wi-Fi for all guests."}},
  {id:"approximately",word:"approximately",lv:2,reg:"formal",ipa:"/əˈprɒk.sɪ.mət.li/",syl:["ap","prox","i","mate","ly"],stress:1,pos:"adverb",
   def:"Close to an exact number, but not exactly.",family:["approximate (adjective)","approximation (noun)"],
   coll:["approximately 20 minutes","approximately half","at approximately 6 pm"],syn:["about","roughly","around"],opp:["exactly","precisely"],
   ex:"The journey takes approximately two hours.",ex2:"Approximately half of the students passed.",
   watch:"Use about or around when you speak. Approximately sounds formal, like a report or an announcement.",
   prompt:"Write a formal sentence about how long your journey to school or work takes.",model:"My journey to work takes approximately forty minutes.",
   qs:["Approximately how many people live in your town?","Approximately how many hours a week do you study English?"],stem:/\bapproximate(ly)?\b/i,up:{plain:"It takes about an hour.",model:"It takes approximately one hour."}},
  {id:"regarding",word:"regarding",lv:2,reg:"formal",ipa:"/rɪˈɡɑː.dɪŋ/",syl:["re","gard","ing"],stress:1,pos:"preposition",
   def:"About; on the subject of. Used in emails and letters.",family:["with regard to (phrase)","regards (best regards, in emails)"],
   coll:["regarding your email","regarding the meeting","questions regarding the course"],syn:["about","concerning","with regard to"],opp:[],
   ex:"I am writing regarding your advertisement.",ex2:"Do you have any questions regarding the course?",
   watch:"Regarding often starts a formal email: Regarding your order, … Don't use it in a chat with friends.",
   prompt:"Write the first line of a formal email about a job advert.",model:"I am writing regarding the job advertised on your website.",
   qs:["What would you write in an email regarding a late delivery?","Who would you contact regarding a problem with your bill?"],stem:/\bregarding\b/i,up:{plain:"This is about your order.",model:"I am writing regarding your order."}},
  {id:"apologise",word:"apologise",lv:2,reg:"formal",ipa:"/əˈpɒl.ə.dʒaɪz/",syl:["a","pol","o","gise"],stress:1,pos:"verb",
   def:"To say that you are sorry for something.",family:["apology (noun)","apologetic (adjective)"],
   coll:["apologise for the delay","apologise to someone","we apologise for any inconvenience"],syn:["say sorry"],opp:["blame"],
   ex:"We apologise for the delay.",ex2:"He apologised to his teacher for being late.",
   watch:"Apologise to a person, for a thing: I apologise to you for the mistake. American spelling: apologize.",
   prompt:"Write a formal sentence saying sorry for a late reply.",model:"I apologise for my late reply to your email.",
   qs:["When did you last apologise to someone?","Is it easy for you to apologise?"],stem:/\bapologi(s|z)(e|es|ed|ing)\b/i,up:{plain:"Sorry I'm late.",model:"I apologise for being late."}},
  /* ---- B1 informal ---- */
  {id:"chill",word:"chill",lv:2,reg:"informal",ipa:"/tʃɪl/",pos:"verb",
   def:"To relax and do nothing much.",family:["chill out (phrasal verb)","chilled (adjective: relaxed)"],
   coll:["chill at home","chill out","just chill"],syn:["relax","take it easy"],opp:["stress"],
   ex:"I just want to chill at home tonight.",ex2:"We spent Sunday chilling by the lake.",
   watch:"A chill is also a slight cold or a cold feeling: There's a chill in the air.",
   prompt:"Tell a friend your plans for a lazy weekend.",model:"This weekend I'm going to chill and watch films.",
   qs:["How do you like to chill after a busy day?","Where is the best place to chill in your town?"],stem:/\bchill(s|ed|ing)?\b/i,up:{plain:"I am going to relax at home.",model:"I'm just going to chill at home."}},
  {id:"broke",word:"broke",lv:2,reg:"informal",ipa:"/brəʊk/",pos:"adjective",
   def:"Having no money.",family:["flat broke (completely)","go broke (lose all your money)"],
   coll:["totally broke","be broke","go broke"],syn:["penniless","skint (British)"],opp:["rich","loaded (informal)"],
   ex:"I can't come out tonight. I'm broke.",ex2:"After the holiday we were completely broke.",
   watch:"This broke is an adjective. Don't confuse it with broke, the past of break: I broke my phone.",
   prompt:"Explain to a friend why you can't go shopping this weekend.",model:"Sorry, I can't come. I'm totally broke until payday.",
   qs:["When were you last completely broke?","What do students do when they're broke?"],stem:/\bbroke\b/i,up:{plain:"I do not have any money at the moment.",model:"I'm broke at the moment."}},
  {id:"a-bit",word:"a bit",lv:2,reg:"informal",ipa:"/ə ˈbɪt/",pos:"phrase (adverb)",
   def:"A little; slightly.",family:["a bit of (+ noun)","not a bit (= not at all)"],
   coll:["a bit tired","a bit of time","wait a bit"],syn:["a little","slightly"],opp:["a lot","very"],
   ex:"I'm a bit tired today.",ex2:"Can you wait a bit? I'm nearly ready.",
   watch:"A bit + adjective (a bit cold) or a bit of + noun (a bit of help). It's softer and more informal than slightly.",
   prompt:"Tell a friend how you feel today, using a soft word.",model:"I'm a bit stressed about my exam tomorrow.",
   qs:["What makes you a bit nervous?","Is your English a bit better than last year?"],stem:/\ba bit\b/i,up:{plain:"I am slightly tired.",model:"I'm a bit tired."}},
  {id:"loads-of",word:"loads of",lv:2,reg:"informal",ipa:"/ˈləʊdz əv/",pos:"phrase",
   def:"A lot of; a large amount or number of.",family:["loads (adverb: thanks loads)","a load of (= a lot of)"],
   coll:["loads of time","loads of fun","loads of people"],syn:["lots of","a lot of","tons of"],opp:["a few","a little"],
   ex:"There were loads of people at the concert.",ex2:"Don't worry, we've got loads of time.",
   watch:"Loads of works with countable and uncountable nouns: loads of friends, loads of money. In formal writing use many, much or a large number of.",
   prompt:"Tell a friend about a busy place you visited.",model:"There were loads of tourists in the old town.",
   qs:["What do you have loads of at home?","Where can you find loads of good food in your town?"],stem:/\bloads of\b/i,up:{plain:"There were many people there.",model:"There were loads of people there."}},
  {id:"fancy",word:"fancy",lv:2,reg:"informal",ipa:"/ˈfæn.si/",syl:["fan","cy"],stress:0,pos:"verb",
   def:"To want or feel like having or doing something.",family:["fancy (adjective: expensive and special)","fancy someone (= be attracted to)"],
   coll:["fancy a coffee?","fancy going out?","I don't fancy it"],syn:["feel like","want"],opp:[],
   ex:"Do you fancy a coffee?",ex2:"I don't fancy going out in the rain.",
   watch:"Fancy + noun or fancy + -ing: Fancy a walk? Fancy going for a walk? Not fancy to go.",
   prompt:"Invite a friend to do something this evening, the British way.",model:"Do you fancy going to the cinema tonight?",
   qs:["What do you fancy doing this weekend?","What do you fancy for dinner tonight?"],stem:/\bfanc(y|ies|ied|ying)\b/i,up:{plain:"Would you like to go to the cinema?",model:"Do you fancy going to the cinema?"}},
  {id:"mate",word:"mate",lv:2,reg:"informal",ipa:"/meɪt/",pos:"noun",
   def:"An informal word for a friend.",family:["best mate","classmate / flatmate (compounds)"],
   coll:["my best mate","a mate from work","alright, mate?"],syn:["friend","buddy (American)","pal"],opp:["enemy","stranger"],
   ex:"I'm going to the match with my mates.",ex2:"Tom is my best mate from school.",
   watch:"Mate is very common in British and Australian English. Americans say buddy or dude.",
   prompt:"Tell someone about your best friend, informally.",model:"My best mate Kuba lives just round the corner.",
   qs:["How did you meet your best mate?","What do you and your mates do at weekends?"],stem:/\bmates?\b/i,up:{plain:"He is my closest friend.",model:"He's my best mate."}},
  /* ---- B2 informal ---- */
  {id:"hassle",word:"hassle",lv:3,reg:"informal",ipa:"/ˈhæs.əl/",syl:["has","sle"],stress:0,pos:"noun / verb",
   def:"Something annoying that takes time or effort.",family:["hassle someone (verb: keep asking, annoy)","hassle-free (adjective)"],
   coll:["a real hassle","not worth the hassle","no hassle"],syn:["bother","nuisance"],opp:["a breeze"],
   ex:"Getting a visa was a real hassle.",ex2:"It's no hassle, I can drive you.",
   watch:"Hassle-free (= easy, with no problems) is common in adverts: hassle-free booking.",
   prompt:"Tell a friend about something annoying you had to do recently.",model:"Changing my bank account was such a hassle.",
   qs:["What is the biggest hassle in your daily life?","Is online shopping worth the hassle of returns?"],stem:/\bhassle(s|d)?\b/i,up:{plain:"Renewing my passport was very inconvenient.",model:"Renewing my passport was a real hassle."}},
  {id:"sort-out",word:"sort out",lv:3,reg:"informal",ipa:"/ˌsɔːt ˈaʊt/",pos:"phrasal verb",
   def:"To deal with a problem or organise something.",family:["sorted (informal: done, solved)"],
   coll:["sort out a problem","sort out the tickets","get it sorted"],syn:["fix","deal with","resolve"],opp:["mess up"],
   ex:"Don't worry, I'll sort out the tickets.",ex2:"We need to sort out this problem today.",
   watch:"With it or them, the word goes in the middle: sort it out, not sort out it.",
   prompt:"Your friend has a problem with a booking. Offer to help.",model:"Leave it with me, I'll sort it out tonight.",
   qs:["What problem did you have to sort out recently?","Who sorts out the bills in your house?"],stem:/\bsort(s|ed|ing)?\b[^.?!]{0,25}\bout\b/i,up:{plain:"I will resolve the issue.",model:"I'll sort out the problem."}},
  {id:"rip-off",word:"rip-off",lv:3,reg:"informal",ipa:"/ˈrɪp.ɒf/",syl:["rip","off"],stress:0,pos:"noun",
   def:"Something that costs much more than it should.",family:["rip someone off (phrasal verb: cheat)","ripped off (adjective)"],
   coll:["a total rip-off","a tourist rip-off","what a rip-off"],syn:["overpriced","con"],opp:["a bargain","good value"],
   ex:"Twelve euros for a coffee? What a rip-off!",ex2:"That restaurant is a total rip-off.",
   watch:"The noun has a hyphen (a rip-off). The verb has no hyphen: They ripped us off.",
   prompt:"Complain to a friend about something that was too expensive.",model:"The parking at the airport was a complete rip-off.",
   qs:["What is the biggest rip-off in your country?","Have you ever felt ripped off on holiday?"],stem:/\brip(ped)?[- ]off\b/i,up:{plain:"The tickets were far too expensive.",model:"The tickets were a total rip-off."}},
  {id:"gutted",word:"gutted",lv:3,reg:"informal",ipa:"/ˈɡʌt.ɪd/",syl:["gut","ted"],stress:0,pos:"adjective (British)",
   def:"Very disappointed and sad.",family:["gut (noun: stomach; feeling)"],
   coll:["absolutely gutted","gutted about the result","gutted for someone"],syn:["devastated","really disappointed"],opp:["over the moon","thrilled"],
   ex:"I was gutted when we lost the final.",ex2:"She's gutted about missing the concert.",
   watch:"Gutted is very British. Don't use it in a formal letter; say very disappointed.",
   prompt:"Tell a friend about a time you were very disappointed.",model:"I was absolutely gutted when my flight was cancelled.",
   qs:["When were you last gutted about something?","Were you gutted about any exam result?"],stem:/\bgutted\b/i,up:{plain:"I was extremely disappointed by the result.",model:"I was gutted about the result."}},
  {id:"piece-of-cake",word:"a piece of cake",lv:3,reg:"informal",ipa:"/ə ˌpiːs əv ˈkeɪk/",pos:"idiom",
   def:"Something very easy to do.",family:["easy-peasy (very informal)"],
   coll:["it's a piece of cake","the test was a piece of cake","make it look like a piece of cake"],syn:["very easy"],opp:["a nightmare","really hard"],
   ex:"Don't worry, the driving test is a piece of cake.",ex2:"For her, fixing computers is a piece of cake.",
   watch:"This idiom is about how easy something is, not about food.",
   prompt:"Tell a friend about a task that was much easier than you expected.",model:"The exam was a piece of cake, so I finished early.",
   qs:["What is a piece of cake for you but hard for others?","Was learning to ride a bike a piece of cake?"],stem:/\ba piece of cake\b/i,up:{plain:"The task was very easy.",model:"The task was a piece of cake."}},
  {id:"on-the-fence",word:"on the fence",lv:3,reg:"informal",ipa:"/ɒn ðə ˈfens/",pos:"idiom",
   def:"Not able to decide between two choices.",family:["sit on the fence (= avoid choosing)"],
   coll:["on the fence about the job","still on the fence","sit on the fence"],syn:["undecided","in two minds"],opp:["decided","sure"],
   ex:"I'm still on the fence about the new job.",ex2:"Many voters are on the fence about the plan.",
   watch:"Sit on the fence can sound critical: someone who sits on the fence avoids giving an opinion.",
   prompt:"Tell a friend about a decision you can't make yet.",model:"I'm on the fence about buying a car this year.",
   qs:["What are you on the fence about right now?","Do politicians sit on the fence too often?"],stem:/\bon the fence\b/i,up:{plain:"I have not decided yet.",model:"I'm still on the fence."}},
  /* ---- C1 formal (one new) ---- */
  {id:"pragmatic",word:"pragmatic",lv:4,reg:"formal",ipa:"/præɡˈmæt.ɪk/",syl:["prag","mat","ic"],stress:1,pos:"adjective",
   def:"Dealing with problems in a sensible, practical way rather than following ideals or theory.",family:["pragmatically (adverb)","pragmatism (noun)","pragmatist (noun)"],
   coll:["a pragmatic approach","a pragmatic solution","take a pragmatic view"],syn:["practical","realistic","sensible"],opp:["idealistic","impractical"],
   ex:"We need a pragmatic solution, not a perfect one.",ex2:"She took a pragmatic view of the budget cuts.",
   watch:"Pragmatic describes people and approaches that focus on what works. For objects, say practical: a practical bag, not a pragmatic bag.",
   prompt:"Describe a problem you solved in a practical, sensible way.",model:"We took a pragmatic approach and shared one car instead of buying two.",
   qs:["Are you more pragmatic or idealistic when you make plans?","What is a pragmatic way to learn vocabulary quickly?"],stem:/\bpragmati(c|cally|sm|st)\b/i,up:{plain:"We chose a sensible, practical solution.",model:"We chose a pragmatic solution."}},
  /* ---- C1 informal ---- */
  {id:"cut-corners",word:"cut corners",lv:4,reg:"informal",ipa:"/kʌt ˈkɔː.nəz/",pos:"idiom",
   def:"To do something badly or cheaply to save time or money.",family:["corner-cutting (noun)"],
   coll:["cut corners on safety","never cut corners","be tempted to cut corners"],syn:["skimp","do a rush job"],opp:["go the extra mile","be thorough"],
   ex:"The builders cut corners and the roof leaked.",ex2:"Never cut corners when safety is involved.",
   watch:"The past is also cut: Last year they cut corners on the design.",
   prompt:"Describe a job that went wrong because someone did it too quickly or cheaply.",model:"The company cut corners on testing, so the app kept crashing.",
   qs:["When is it OK to cut corners?","Have you ever cut corners on homework and regretted it?"],stem:/\bcut(s|ting)? corners\b/i,up:{plain:"They reduced quality to save money.",model:"They cut corners to save money."}},
  {id:"bottom-line",word:"the bottom line",lv:4,reg:"informal",ipa:"/ðə ˌbɒt.əm ˈlaɪn/",pos:"idiom",
   def:"The most important fact in a situation; also a company's final profit.",family:["bottom-line (adjective: basic)"],
   coll:["the bottom line is that we need help","affect the bottom line","hit the bottom line"],syn:["the main point","the crux"],opp:["a side issue","a detail"],
   ex:"The bottom line is that we can't afford it.",ex2:"Higher costs will hit the bottom line.",
   watch:"The bottom line is … is usually followed by a clause: The bottom line is (that) we need more time.",
   prompt:"Summarise a long argument with friends in one sentence.",model:"The bottom line is that nobody wants to cook, so let's order pizza.",
   qs:["What is the bottom line when choosing a job?","What is the bottom line in learning a language fast?"],stem:/\bthe bottom line\b/i,up:{plain:"The most important point is that we need more staff.",model:"The bottom line is that we need more staff."}},
  {id:"long-shot",word:"a long shot",lv:4,reg:"informal",ipa:"/ə ˌlɒŋ ˈʃɒt/",pos:"idiom",
   def:"Something that has only a small chance of success.",family:["not by a long shot (= not at all)"],
   coll:["it's a long shot, but …","a bit of a long shot","worth a try, even if it's a long shot"],syn:["an outside chance","unlikely"],opp:["a sure thing","a safe bet"],
   ex:"It's a long shot, but maybe the shop is still open.",ex2:"Getting tickets now is a long shot.",
   watch:"Not by a long shot means not at all: It isn't finished, not by a long shot.",
   prompt:"Tell a friend about a plan that probably won't work but is worth trying.",model:"Applying to that company is a long shot, but I'll try anyway.",
   qs:["What long shot would you like to try this year?","Have you ever succeeded with a long shot?"],stem:/\ba long shot\b/i,up:{plain:"This plan is unlikely to succeed, but let's try.",model:"It's a long shot, but let's try."}},
  {id:"ballpark-figure",word:"ballpark figure",lv:4,reg:"informal",ipa:"/ˈbɔːl.pɑːk ˌfɪɡ.ə/",pos:"noun",
   def:"A rough estimate of a number or price.",family:["in the ballpark (= roughly right)"],
   coll:["give me a ballpark figure","a rough ballpark figure","in the right ballpark"],syn:["rough estimate"],opp:["exact figure"],
   ex:"Can you give me a ballpark figure for the repairs?",ex2:"As a ballpark figure, we need about fifty people.",
   watch:"From American baseball. In formal reports, write approximate cost or estimate.",
   prompt:"Ask a builder or mechanic for a rough price, informally.",model:"Could you give me a ballpark figure before you start?",
   qs:["What's a ballpark figure for a month's rent in your city?","Can you give a ballpark figure for how many books you own?"],stem:/\bballpark( figure)?\b/i,up:{plain:"Please provide an approximate cost.",model:"Can you give me a ballpark figure?"}},
  {id:"get-the-hang-of",word:"get the hang of",lv:4,reg:"informal",ipa:"/ɡet ðə ˈhæŋ əv/",pos:"idiom",
   def:"To learn how to do something, especially after practice.",family:["got the hang of it (past)"],
   coll:["get the hang of it","get the hang of driving","soon get the hang of things"],syn:["master","pick up"],opp:["struggle with","give up"],
   ex:"Driving is hard at first, but you'll get the hang of it.",ex2:"I finally got the hang of the new software.",
   watch:"Usually followed by it or a noun or -ing: get the hang of cooking. The past is got: I got the hang of it.",
   prompt:"Tell a friend about a skill that was difficult at first.",model:"It took me a month to get the hang of skiing.",
   qs:["What skill took you longest to get the hang of?","How long does it take to get the hang of a new phone?"],stem:/\b(get|gets|got|getting) the hang of\b/i,up:{plain:"I finally learned how to use it.",model:"I finally got the hang of it."}},
  {id:"up-in-the-air",word:"up in the air",lv:4,reg:"informal",ipa:"/ʌp ɪn ði ˈeə/",pos:"idiom",
   def:"Not decided or certain yet.",family:[],
   coll:["still up in the air","everything is up in the air","leave plans up in the air"],syn:["undecided","uncertain"],opp:["settled","confirmed"],
   ex:"Our holiday plans are still up in the air.",ex2:"With the strike, everything is up in the air.",
   watch:"Up in the air is about plans and decisions, not people. For a person who can't decide, say on the fence.",
   prompt:"Tell a friend about a plan that isn't decided yet.",model:"My move to Kraków is still up in the air.",
   qs:["What plans of yours are up in the air at the moment?","How do you feel when things are up in the air?"],stem:/\bup in the air\b/i,up:{plain:"The date has not been confirmed.",model:"The date is still up in the air."}},
  /* ---- C2 formal ---- */
  {id:"ubiquitous",word:"ubiquitous",lv:5,reg:"formal",ipa:"/juːˈbɪk.wɪ.təs/",syl:["u","biq","ui","tous"],stress:1,pos:"adjective",
   def:"Seeming to be everywhere at the same time.",family:["ubiquity (noun)","ubiquitously (adverb)"],
   coll:["ubiquitous smartphones","become ubiquitous","almost ubiquitous"],syn:["omnipresent","pervasive"],opp:["rare","scarce"],
   ex:"Smartphones have become ubiquitous in schools.",ex2:"Coffee chains are now ubiquitous in city centres.",
   watch:"Ubiquitous is stronger than common: it means you see it almost everywhere you look.",
   prompt:"Describe something you see everywhere in your city today.",model:"Electric scooters have become ubiquitous in Warsaw.",
   qs:["What technology is ubiquitous today but was rare ten years ago?","Is anything ubiquitous in your country but rare abroad?"],stem:/\bubiquit(ous|ously|y)\b/i,up:{plain:"Plastic bags are found everywhere.",model:"Plastic bags are ubiquitous."}},
  {id:"exacerbate",word:"exacerbate",lv:5,reg:"formal",ipa:"/ɪɡˈzæs.ə.beɪt/",syl:["ex","ac","er","bate"],stress:1,pos:"verb",
   def:"To make a problem, a bad situation or a pain worse.",family:["exacerbation (noun)"],
   coll:["exacerbate the problem","exacerbate tensions","further exacerbate"],syn:["worsen","aggravate"],opp:["alleviate","ease"],
   ex:"Cutting the budget will only exacerbate the problem.",ex2:"His back pain was exacerbated by long flights.",
   watch:"Exacerbate is for things that are already bad. You can't exacerbate a good situation.",
   prompt:"Describe a decision that made a difficult situation even worse.",model:"Closing the bridge exacerbated the traffic problems in the city.",
   qs:["What can exacerbate stress during exams?","Does social media exacerbate loneliness?"],stem:/\bexacerbat(e|es|ed|ing|ion)\b/i,up:{plain:"The new rules made the situation worse.",model:"The new rules exacerbated the situation."}},
  {id:"ostensibly",word:"ostensibly",lv:5,reg:"formal",ipa:"/ɒˈsten.sə.bli/",syl:["os","ten","si","bly"],stress:1,pos:"adverb",
   def:"In a way that seems true, but probably hides a different real reason.",family:["ostensible (adjective)"],
   coll:["ostensibly about safety","ostensibly to save money","ostensibly because of the weather"],syn:["supposedly","seemingly"],opp:["genuinely","actually"],
   ex:"He left early, ostensibly to catch a train.",ex2:"The meeting was ostensibly about safety, but it was really about money.",
   watch:"Ostensibly suggests doubt: the speaker thinks the stated reason is not the real one.",
   prompt:"Describe a situation where someone's stated reason was probably not the real one.",model:"She called me, ostensibly to ask about homework, but really to gossip.",
   qs:["What do companies do ostensibly for customers but really for profit?","Have you ever done something ostensibly for one reason but really for another?"],stem:/\bostensib(le|ly)\b/i,up:{plain:"The trip was supposedly for work, but it was really a holiday.",model:"The trip was ostensibly for work, but it was really a holiday."}},
  {id:"nuanced",word:"nuanced",lv:5,reg:"formal",ipa:"/ˈnjuː.ɑːnst/",syl:["nu","anced"],stress:0,pos:"adjective",
   def:"Showing small but important differences in meaning, feeling or opinion.",family:["nuance (noun)"],
   coll:["a nuanced view","a nuanced argument","highly nuanced"],syn:["subtle","sophisticated"],opp:["simplistic","black-and-white"],
   ex:"The report gives a nuanced view of the problem.",ex2:"Her performance was beautifully nuanced.",
   watch:"A nuanced opinion sees both sides. Black-and-white thinking is the opposite.",
   prompt:"Describe a topic where you have a mixed, not black-and-white, opinion.",model:"My view on remote work is nuanced: it saves time but can be lonely.",
   qs:["Which news source gives the most nuanced coverage?","Why are nuanced opinions rare on social media?"],stem:/\bnuance(d|s)?\b/i,up:{plain:"His opinion was detailed and not simple.",model:"His opinion was nuanced."}},
  {id:"conundrum",word:"conundrum",lv:5,reg:"formal",ipa:"/kəˈnʌn.drəm/",syl:["co","nun","drum"],stress:1,pos:"noun",
   def:"A confusing and difficult problem or question.",family:["conundrums (plural)"],
   coll:["face a conundrum","a real conundrum","the conundrum of how to pay"],syn:["dilemma","puzzle","riddle"],opp:["solution","answer"],
   ex:"Finding cheap housing in the city is a real conundrum.",ex2:"Teachers face the conundrum of how to motivate every student.",
   watch:"A conundrum is hard to solve. A dilemma is a choice between two difficult options.",
   prompt:"Describe a difficult problem that has no easy answer.",model:"How to protect the environment and keep jobs is a real conundrum.",
   qs:["What conundrum does your city face?","What is the biggest conundrum in learning a language?"],stem:/\bconundrums?\b/i,up:{plain:"This is a very puzzling problem.",model:"This is a real conundrum."}},
  {id:"quintessential",word:"quintessential",lv:5,reg:"formal",ipa:"/ˌkwɪn.tɪˈsen.ʃəl/",syl:["quin","tes","sen","tial"],stress:2,pos:"adjective",
   def:"Being the most typical example of something.",family:["quintessentially (adverb)","quintessence (noun)"],
   coll:["the quintessential example","quintessentially British","a quintessential summer"],syn:["typical","classic","archetypal"],opp:["atypical","unusual"],
   ex:"Afternoon tea is quintessentially British.",ex2:"It was the quintessential small-town café.",
   watch:"Quintessential is strong: the best and most typical example of something.",
   prompt:"Describe the most typical food or place in your country.",model:"Pierogi are the quintessential Polish comfort food.",
   qs:["What is the quintessential holiday in your country?","Who is the quintessential teacher in films?"],stem:/\bquintessen(tial|tially|ce)\b/i,up:{plain:"This is a very typical British pub.",model:"This is the quintessential British pub."}},
  /* ---- C2 informal ---- */
  {id:"can-of-worms",word:"a can of worms",lv:5,reg:"informal",ipa:"/ə ˌkæn əv ˈwɜːmz/",pos:"idiom",
   def:"A situation that will cause many new problems if you start dealing with it.",family:["open a can of worms (verb phrase)"],
   coll:["open a can of worms","a real can of worms","that's a whole can of worms"],syn:["a hornets' nest"],opp:[],
   ex:"Asking about his salary opened a can of worms.",ex2:"Changing the rules now would open a can of worms.",
   watch:"Usually with open: open (up) a can of worms.",
   prompt:"Describe a question or topic that caused lots of new problems.",model:"Mentioning politics at dinner opened a real can of worms.",
   qs:["What topic opens a can of worms in your family?","Is it ever worth opening a can of worms?"],stem:/\bcan of worms\b/i,up:{plain:"This will create many new problems.",model:"This will open a can of worms."}},
  {id:"off-the-rails",word:"go off the rails",lv:5,reg:"informal",ipa:"/ɡəʊ ɒf ðə ˈreɪlz/",pos:"idiom",
   def:"To start behaving in a wild way, or for a plan to go badly wrong.",family:["went off the rails (past)"],
   coll:["go completely off the rails","the project went off the rails","stop someone going off the rails"],syn:["go wrong","lose control"],opp:["stay on track"],
   ex:"The project went off the rails after the manager left.",ex2:"He went off the rails at university.",
   watch:"The past is went off the rails. For plans, the opposite is be back on track.",
   prompt:"Describe a plan or event that went badly wrong.",model:"Our camping trip went off the rails when the tent broke.",
   qs:["What can make a project go off the rails?","Did any party you went to go off the rails?"],stem:/\b(go|goes|went|gone|going)( completely)? off the rails\b/i,up:{plain:"The meeting became chaotic.",model:"The meeting went completely off the rails."}},
  {id:"jump-the-gun",word:"jump the gun",lv:5,reg:"informal",ipa:"/dʒʌmp ðə ˈɡʌn/",pos:"idiom",
   def:"To do something too early, before the right time.",family:["jumped the gun (past)"],
   coll:["jump the gun on a decision","don't jump the gun","jump the gun and book early"],syn:["act too soon","be hasty"],opp:["wait"],
   ex:"Let's not jump the gun; we don't have the results yet.",ex2:"He jumped the gun and booked the hotel before we agreed.",
   watch:"It comes from running races: starting before the gun is fired.",
   prompt:"Describe a time someone did something too early.",model:"I jumped the gun and bought a dress before checking the dress code.",
   qs:["Have you ever jumped the gun on a decision?","Why do people jump the gun with big news?"],stem:/\bjump(s|ed|ing)? the gun\b/i,up:{plain:"Don't act too early.",model:"Don't jump the gun."}},
  {id:"elephant-in-the-room",word:"the elephant in the room",lv:5,reg:"informal",ipa:"/ði ˈel.ɪ.fənt ɪn ðə ˈruːm/",pos:"idiom",
   def:"An obvious, important problem that everyone avoids talking about.",family:[],
   coll:["address the elephant in the room","ignore the elephant in the room","the elephant in the room is money"],syn:["unspoken problem"],opp:[],
   ex:"Money was the elephant in the room at the meeting.",ex2:"Let's address the elephant in the room: we're behind schedule.",
   watch:"Address the elephant in the room means to finally talk about it.",
   prompt:"Describe a problem everyone in a group knew about but nobody mentioned.",model:"The elephant in the room was that nobody had read the report.",
   qs:["What is the elephant in the room in your workplace or school?","Why do people avoid the elephant in the room?"],stem:/\belephant in the room\b/i,up:{plain:"Nobody discusses the obvious problem.",model:"Nobody mentions the elephant in the room."}},
  {id:"under-the-bus",word:"throw someone under the bus",lv:5,reg:"informal",ipa:"/θrəʊ ˈsʌm.wʌn ˌʌn.də ðə ˈbʌs/",pos:"idiom",
   def:"To blame or sacrifice someone else to protect yourself.",family:["threw … under the bus (past)"],
   coll:["throw a colleague under the bus","get thrown under the bus","feel thrown under the bus"],syn:["betray","scapegoat"],opp:["stand by someone","back someone up"],
   ex:"When the project failed, he threw his team under the bus.",ex2:"I felt thrown under the bus by my manager.",
   watch:"Put the person in the middle: throw your boss under the bus. The past is threw.",
   prompt:"Describe a time someone blamed another person to save themselves.",model:"She threw me under the bus to avoid getting into trouble.",
   qs:["Have you ever been thrown under the bus?","Why do politicians throw advisers under the bus?"],stem:/\b(throw|throws|threw|thrown|throwing)\b[^.?!]{0,30}\bunder the bus\b/i,up:{plain:"He blamed his colleague to protect himself.",model:"He threw his colleague under the bus."}},
  {id:"tall-order",word:"a tall order",lv:5,reg:"informal",ipa:"/ə ˌtɔːl ˈɔː.də/",pos:"idiom",
   def:"A task that is very difficult or unreasonable to ask for.",family:[],
   coll:["quite a tall order","that's a tall order","a bit of a tall order"],syn:["a big ask","a challenge"],opp:[],
   ex:"Finishing the report by tomorrow is a tall order.",ex2:"Learning a language in a month is quite a tall order.",
   watch:"A big ask means the same and is just as informal.",
   prompt:"Describe a task someone asked you to do that was nearly impossible.",model:"Cooking for thirty people alone was a tall order.",
   qs:["What is a tall order for you at work or school?","Is fluent English in a year a tall order?"],stem:/\ba tall order\b/i,up:{plain:"This task is extremely difficult.",model:"That's a tall order!"}}
];
NEWV.push(
  /* ---- A1 formal (+4) ---- */
  {id:"sorry",word:"sorry",lv:0,reg:"formal",ipa:"/ˈsɒr.i/",pos:"adjective / phrase",
   def:"A word you say when you have made a small mistake or caused a problem for someone.",family:["sorrow (noun)"],
   coll:["I'm sorry","sorry for being late","I'm very sorry","sorry about that"],syn:["I apologise","excuse me"],opp:[],
   ex:"I'm sorry, I don't understand the question.",ex2:"Sorry for being late, Mr Green.",
   watch:"Say sorry for + -ing: sorry for being late, not sorry for be late.",
   prompt:"Write a polite sentence to say sorry to a teacher or a boss.",model:"I'm sorry, but I can't come to the meeting on Friday.",
   qs:["When did you last say sorry to someone?","What do you say if you step on someone's foot?"],stem:/\bsorry\b/i,up:{plain:"My bad, I'm late.",model:"I'm sorry I'm late."}},
  {id:"pardon",word:"pardon",lv:0,reg:"formal",ipa:"/ˈpɑː.dən/",pos:"phrase",
   def:"A polite word you say when you did not hear what someone said and want them to say it again.",family:["pardon me","I beg your pardon"],
   coll:["pardon?","pardon me","I beg your pardon"],syn:["sorry?","excuse me?"],opp:[],
   ex:"Pardon? Can you say that again, please?",ex2:"Pardon, I didn't hear your name.",
   watch:"Pardon? with a rising voice is polite. What? is not polite in formal situations.",
   prompt:"You didn't hear a question at the doctor's. What do you say?",model:"Pardon? Could you repeat the question, please?",
   qs:["What do you say when you can't hear someone on the phone?","Is it polite to say What? to a teacher?"],stem:/\bpardon\b/i,up:{plain:"What? I can't hear you.",model:"Pardon? I can't hear you."}},
  {id:"youre-welcome",word:"you're welcome",lv:0,reg:"formal",ipa:"/jɔː ˈwel.kəm/",pos:"phrase",
   def:"A polite answer when someone says thank you.",family:["welcome (adjective and verb)"],
   coll:["you're very welcome","you're welcome, any time","oh, you're welcome"],syn:["my pleasure","not at all"],opp:[],
   ex:"Thank you for the coffee. You're welcome.",ex2:"You're very welcome, Mrs Lee.",
   watch:"Write you're (you are) with an apostrophe, not your.",
   prompt:"A customer says thank you to you. How do you answer politely?",model:"You're welcome. Have a nice day.",
   qs:["What do you say when someone thanks you?","What other polite answers to thank you do you know?"],stem:/\byou'?re (very )?welcome\b/i,up:{plain:"No worries!",model:"You're welcome!"}},
  {id:"nice-to-meet-you",word:"nice to meet you",lv:0,reg:"formal",ipa:"/naɪs tə ˈmiːt juː/",pos:"phrase",
   def:"A polite thing to say when you meet someone for the first time.",family:["meet (verb)","meeting (noun)"],
   coll:["nice to meet you too","it's nice to meet you","very nice to meet you"],syn:["pleased to meet you"],opp:[],
   ex:"Hello, I'm Anna. Nice to meet you.",ex2:"It was very nice to meet you, Mr Brown.",
   watch:"Say nice to meet you the first time only. Next time, say nice to see you.",
   prompt:"Introduce yourself to a new colleague in two sentences.",model:"Hello, my name is Tom. Nice to meet you.",
   qs:["Who was the last new person you met?","What do you say after someone says nice to meet you?"],stem:/\bnice to meet you\b/i,up:{plain:"Hey, I'm Tom.",model:"Hello, I'm Tom. Nice to meet you."}},
  /* ---- A1 informal (+4) ---- */
  {id:"see-you",word:"see you",lv:0,reg:"informal",ipa:"/ˈsiː juː/",pos:"phrase",
   def:"A friendly way to say goodbye to someone you will meet again.",family:["see you later","see you soon","see you tomorrow"],
   coll:["see you later","see you tomorrow","see you soon","see you on Monday"],syn:["bye","goodbye"],opp:["hi","hello"],
   ex:"See you tomorrow at school!",ex2:"OK, see you later!",
   watch:"See you is friendly. In a formal email, write Kind regards, not See you.",
   prompt:"Write a short message to a friend after a party.",model:"Thanks for tonight. See you on Saturday!",
   qs:["When will you see your best friend next?","What do you say to friends when you leave?"],stem:/\bsee (you|ya)\b/i,up:{plain:"Goodbye. I will meet you tomorrow.",model:"See you tomorrow!"}},
  {id:"great",word:"great",lv:0,reg:"informal",ipa:"/ɡreɪt/",pos:"adjective",
   def:"Very good; a friendly word to show you are happy about something.",family:["greatly (adverb)"],
   coll:["great idea","that's great","great to see you","feel great"],syn:["cool","awesome","brilliant"],opp:["terrible","awful"],
   ex:"Pizza tonight? Great idea!",ex2:"That's great news!",
   watch:"Great is very common in chat. In formal writing, try excellent.",
   prompt:"Tell a friend about something good that happened today.",model:"I passed my driving test today. I feel great!",
   qs:["What was great about your weekend?","What is a great film you saw?"],stem:/\bgreat\b/i,up:{plain:"That is an excellent idea.",model:"Great idea!"}},
  {id:"no-problem",word:"no problem",lv:0,reg:"informal",ipa:"/nəʊ ˈprɒb.ləm/",pos:"phrase",
   def:"A friendly way to say that it is easy for you to help, or to answer thank you.",family:["problem (noun)"],
   coll:["no problem at all","oh, no problem","no problem, any time"],syn:["no worries","sure"],opp:[],
   ex:"Can you help me? No problem!",ex2:"Thanks for the lift. No problem at all.",
   watch:"With friends, no problem answers thank you. With a customer, you're welcome is more polite.",
   prompt:"Your friend says thank you for your help. What do you say?",model:"No problem! Call me if you need anything.",
   qs:["What do you say when a friend asks for a small favour?","When is no problem not polite enough?"],stem:/\bno problem\b/i,up:{plain:"You're welcome, it was a pleasure.",model:"No problem!"}},
  {id:"whats-up",word:"what's up",lv:0,reg:"informal",ipa:"/wɒts ˈʌp/",pos:"phrase",
   def:"A friendly way to say hello or to ask a friend how they are.",family:["up (adverb)"],
   coll:["hey, what's up?","what's up with you?","not much, what's up?"],syn:["how are you?","how's it going?"],opp:[],
   ex:"Hey Sam, what's up?",ex2:"What's up? You look sad.",
   watch:"Answer what's up with not much, not with I'm fine thank you.",
   prompt:"Write the first message you send a friend in a chat.",model:"Hey Leo, what's up? Do you want to play football later?",
   qs:["How do you answer when a friend says what's up?","Who do you say what's up to?"],stem:/\bwhat'?s up\b/i,up:{plain:"Hello. How are you today?",model:"Hey, what's up?"}},
  /* ---- A2 formal (+4) ---- */
  {id:"contact",word:"contact",lv:1,reg:"formal",ipa:"/ˈkɒn.tækt/",pos:"verb",
   def:"To write to, phone or email someone.",family:["contact (noun)","contact details (noun)"],
   coll:["contact us","contact me by email","please contact","contact the office"],syn:["get in touch with","call","email"],opp:[],
   ex:"Please contact us if you have any questions.",ex2:"You can contact me by email.",
   watch:"Contact has no preposition: contact the hotel, not contact to the hotel.",
   prompt:"Write the last line of a formal email asking someone to reply.",model:"Please contact me if you need more information.",
   qs:["How do you usually contact your teacher?","How can customers contact a shop?"],stem:/\bcontact(s|ed|ing)?\b/i,up:{plain:"Text me if you need anything.",model:"Please contact me if you need anything."}},
  {id:"prefer",word:"prefer",lv:1,reg:"formal",ipa:"/prɪˈfɜː/",pos:"verb",
   def:"To like one thing more than another.",family:["preference (noun)","preferable (adjective)"],
   coll:["prefer tea to coffee","prefer to stay","would prefer","I prefer"],syn:["like better","would rather"],opp:["dislike"],
   ex:"I prefer tea to coffee.",ex2:"Would you prefer a window seat?",
   watch:"Say prefer A to B: I prefer trains to buses. Not prefer A than B.",
   prompt:"Do you prefer summer or winter? Give one reason.",model:"I prefer summer to winter because I love swimming.",
   qs:["Do you prefer books or films?","Would you prefer to work at home or in an office?"],stem:/\bprefer(s|red|ring)?\b/i,up:{plain:"I like tea more than coffee.",model:"I prefer tea to coffee."}},
  {id:"depart",word:"depart",lv:1,reg:"formal",ipa:"/dɪˈpɑːt/",pos:"verb",
   def:"To leave, especially at the start of a journey by train, bus or plane.",family:["departure (noun)"],
   coll:["depart from platform 2","depart at 9.15","the train departs","depart on time"],syn:["leave","set off"],opp:["arrive"],
   ex:"The train departs from platform 4 at 9.15.",ex2:"Our flight will depart on time.",
   watch:"Depart is formal and used on tickets and timetables. In chat, say leave.",
   prompt:"Write a short announcement for a bus or train.",model:"The bus to Kraków will depart at 10 o'clock from stop B.",
   qs:["What time does your bus or train usually depart?","Where do flights to London depart from in your city?"],stem:/\bdepart(s|ed|ing)?\b/i,up:{plain:"The train leaves at six.",model:"The train departs at six."}},
  {id:"permit",word:"permit",lv:1,reg:"formal",ipa:"/pəˈmɪt/",pos:"verb",
   def:"To officially allow someone to do something.",family:["permission (noun)","permit (noun, a document)"],
   coll:["is not permitted","permit someone to do","smoking is not permitted","if time permits"],syn:["allow","let"],opp:["forbid","ban"],
   ex:"Smoking is not permitted in the hotel.",ex2:"Students are not permitted to use phones in exams.",
   watch:"Permit is common on signs. In conversation, say allow or let.",
   prompt:"Write a sign for a library or a swimming pool.",model:"Food and drink are not permitted in the library.",
   qs:["What is not permitted in your school or office?","Are dogs permitted in shops in your country?"],stem:/\bpermit(s|ted|ting)?\b/i,up:{plain:"You can't eat in here.",model:"Eating is not permitted here."}},
  /* ---- A2 informal (+4) ---- */
  {id:"telly",word:"telly",lv:1,reg:"informal",ipa:"/ˈtel.i/",pos:"noun",
   def:"A British informal word for television.",family:["TV (short form)"],
   coll:["watch telly","on the telly","what's on telly?"],syn:["TV","the box"],opp:[],
   ex:"There's nothing good on the telly tonight.",ex2:"We watched telly all evening.",
   watch:"Telly is British English. Americans say TV.",
   prompt:"What did you watch on telly this week?",model:"I watched a football match on the telly last night.",
   qs:["How much telly do you watch?","What's your favourite thing on telly?"],stem:/\btell(y|ies)\b/i,up:{plain:"I watched television.",model:"I watched telly."}},
  {id:"loo",word:"loo",lv:1,reg:"informal",ipa:"/luː/",pos:"noun",
   def:"A British informal word for toilet.",family:[],
   coll:["go to the loo","where's the loo?","the ladies' loo"],syn:["toilet","bathroom"],opp:[],
   ex:"Sorry, where's the loo?",ex2:"I need to go to the loo before we leave.",
   watch:"Loo is friendly British English. In a restaurant you can also ask for the toilets.",
   prompt:"You are at a friend's house. Ask where the toilet is.",model:"Sorry, can I use your loo?",
   qs:["How do you ask for the toilet politely in English?","Is loo British or American English?"],stem:/\bloos?\b/i,up:{plain:"Excuse me, where is the toilet?",model:"Where's the loo?"}},
  {id:"gonna",word:"gonna",lv:1,reg:"informal",ipa:"/ˈɡɒn.ə/",pos:"spoken form",
   def:"The spoken, informal way to say going to.",family:["going to (full form)","wanna (want to)"],
   coll:["I'm gonna","are you gonna?","it's gonna rain"],syn:["going to"],opp:[],
   ex:"I'm gonna call you later.",ex2:"It's gonna rain this afternoon.",
   watch:"Gonna is for speaking and texts only. Never write gonna in an essay or a formal email.",
   prompt:"Text a friend about your plans for tonight.",model:"I'm gonna watch the match at Tom's. Wanna come?",
   qs:["What are you gonna do this weekend?","When should you not write gonna?"],stem:/\bgonna\b/i,up:{plain:"I am going to call you later.",model:"I'm gonna call you later."}},
  {id:"no-way",word:"no way",lv:1,reg:"informal",ipa:"/nəʊ ˈweɪ/",pos:"phrase",
   def:"A strong, friendly way to say no, or to show you are very surprised.",family:[],
   coll:["no way!","there's no way","no way, really?"],syn:["definitely not","really?"],opp:["of course","sure"],
   ex:"You won the lottery? No way!",ex2:"There's no way I'm getting up at five.",
   watch:"No way can mean surprise (Really?) or a strong no. Your voice shows which one.",
   prompt:"A friend tells you surprising news. Reply in one line.",model:"No way! You're moving to Australia?",
   qs:["What news made you say no way recently?","What would you say no way to doing?"],stem:/\bno way\b/i,up:{plain:"I will definitely not do that.",model:"No way!"}},
  /* ---- B1 formal (+4) ---- */
  {id:"additional",word:"additional",lv:2,reg:"formal",ipa:"/əˈdɪʃ.ən.əl/",pos:"adjective",
   def:"Extra; more than was first planned or included.",family:["addition (noun)","additionally (adverb)","add (verb)"],
   coll:["additional information","an additional charge / cost","additional time","at no additional cost"],syn:["extra","further"],opp:["fewer"],
   ex:"There is an additional charge for breakfast.",ex2:"Please send any additional information by Friday.",
   watch:"Additional comes before a noun: additional costs. In chat, extra is more natural.",
   prompt:"Write a sentence for a hotel website about extra costs.",model:"Parking is available at an additional cost of 20 złoty a night.",
   qs:["Have you ever paid an additional charge you didn't expect?","What additional help would make learning English easier?"],stem:/\badditional(ly)?\b/i,up:{plain:"There's an extra fee for bags.",model:"There is an additional fee for luggage."}},
  {id:"sufficient",word:"sufficient",lv:2,reg:"formal",ipa:"/səˈfɪʃ.ənt/",pos:"adjective",
   def:"Enough for a particular purpose.",family:["sufficiently (adverb)","insufficient (adjective, opposite)"],
   coll:["sufficient time / money / evidence","sufficient for","more than sufficient"],syn:["enough","adequate"],opp:["insufficient","not enough"],
   ex:"Two hours should be sufficient time for the exam.",ex2:"There was not sufficient evidence to prove it.",
   watch:"Sufficient is formal. Don't write very sufficient: something is sufficient or it isn't.",
   prompt:"Is one week's holiday sufficient? Give your opinion.",model:"One week is not sufficient for me; I need at least two to relax.",
   qs:["Do you get sufficient sleep during the week?","Is one hour a week sufficient to learn a language?"],stem:/\b(in)?sufficien(t|tly|cy)\b/i,up:{plain:"We have enough money.",model:"We have sufficient funds."}},
  {id:"commence",word:"commence",lv:2,reg:"formal",ipa:"/kəˈmens/",pos:"verb",
   def:"To begin, used in very formal or official language.",family:["commencement (noun)"],
   coll:["commence on Monday","work will commence","commence the meeting","commence training"],syn:["begin","start"],opp:["finish","end"],
   ex:"The course will commence on 3 March.",ex2:"Building work will commence next month.",
   watch:"Commence sounds official. In everyday speech, say start or begin.",
   prompt:"Write a formal notice about when an event starts.",model:"The conference will commence at 9 a.m. in the main hall.",
   qs:["When does the school year commence in your country?","What kind of documents use commence instead of start?"],stem:/\bcommenc(e|es|ed|ing|ement)\b/i,up:{plain:"The meeting starts at ten.",model:"The meeting will commence at ten."}},
  {id:"obtain",word:"obtain",lv:2,reg:"formal",ipa:"/əbˈteɪn/",pos:"verb",
   def:"To get something, especially by asking for it or working for it.",family:["obtainable (adjective)"],
   coll:["obtain a visa / permit","obtain information","obtain permission","difficult to obtain"],syn:["get","acquire"],opp:["lose"],
   ex:"You must obtain a visa before you travel.",ex2:"Tickets can be obtained at the box office.",
   watch:"Obtain is formal. In a chat with friends, say get.",
   prompt:"Explain how to get a document or ticket in your country.",model:"You can obtain a parking permit from the town hall.",
   qs:["What documents did you need to obtain for a trip?","Where can you obtain information about courses?"],stem:/\bobtain(s|ed|ing)?\b/i,up:{plain:"Where can I get a form?",model:"Where can I obtain a form?"}},
  /* ---- B1 informal (+4) ---- */
  {id:"knackered",word:"knackered",lv:2,reg:"informal",ipa:"/ˈnæk.əd/",pos:"adjective",
   def:"A British informal word for very tired.",family:[],
   coll:["absolutely knackered","feel knackered","I'm knackered"],syn:["exhausted","shattered","worn out"],opp:["full of energy"],
   ex:"I'm knackered after that run.",ex2:"She was absolutely knackered after the night shift.",
   watch:"Knackered is British and informal. At work, say exhausted or very tired.",
   prompt:"Tell a friend why you're so tired today.",model:"I'm knackered because I worked twelve hours yesterday.",
   qs:["What makes you knackered?","How do you relax when you're knackered?"],stem:/\bknackered\b/i,up:{plain:"I am extremely tired.",model:"I'm knackered!"}},
  {id:"quid",word:"quid",lv:2,reg:"informal",ipa:"/kwɪd/",pos:"noun",
   def:"A British informal word for a pound (£1).",family:[],
   coll:["five quid","a few quid","it cost me ten quid"],syn:["pound","£1"],opp:[],
   ex:"Can you lend me ten quid?",ex2:"The tickets were only five quid each.",
   watch:"Quid has no plural s: twenty quid, not twenty quids.",
   prompt:"Tell a friend how much something cost you.",model:"These trainers only cost me thirty quid in the sale.",
   qs:["What can you buy for five quid?","What informal words for money do you know?"],stem:/\bquid\b/i,up:{plain:"It costs ten pounds.",model:"It's ten quid."}},
  {id:"cheers",word:"cheers",lv:2,reg:"informal",ipa:"/tʃɪəz/",pos:"exclamation",
   def:"A British informal way to say thank you or goodbye, or what you say before you drink together.",family:["cheerful (adjective)"],
   coll:["cheers, mate","cheers for that","cheers!"],syn:["thanks","bye"],opp:[],
   ex:"Cheers for the coffee, mate.",ex2:"Cheers! Happy birthday!",
   watch:"Cheers means thanks in British English. Don't use it in a formal email.",
   prompt:"Thank a friend for something small in a text.",model:"Cheers for the lift home last night!",
   qs:["When do people say cheers in your country?","What else can cheers mean?"],stem:/\bcheers\b/i,up:{plain:"Thank you very much for the lift.",model:"Cheers for the lift!"}},
  {id:"hang-on",word:"hang on",lv:2,reg:"informal",ipa:"/hæŋ ˈɒn/",pos:"phrasal verb",
   def:"To wait for a short time.",family:["hang on a minute / second"],
   coll:["hang on a minute","hang on a sec","hang on, I'm coming"],syn:["wait","hold on"],opp:["hurry up"],
   ex:"Hang on, I'll get my coat.",ex2:"Can you hang on a minute? I'm on the phone.",
   watch:"Hang on is informal. In a formal call, say could you wait a moment, please?",
   prompt:"A friend is waiting for you outside. Text them.",model:"Hang on a sec, I'm just finding my keys.",
   qs:["When do you ask someone to hang on?","What's a more formal way to say hang on?"],stem:/\b(hang|hangs|hung|hanging) on\b/i,up:{plain:"Please wait a moment.",model:"Hang on a sec."}},
  /* ---- B2 formal (+4) ---- */
  {id:"substantial",word:"substantial",lv:3,reg:"formal",ipa:"/səbˈstæn.ʃəl/",pos:"adjective",
   def:"Large in amount, size or importance.",family:["substantially (adverb)","substance (noun)"],
   coll:["a substantial amount / increase","substantial evidence","substantially higher"],syn:["considerable","significant","large"],opp:["small","minor","negligible"],
   ex:"The company made a substantial profit last year.",ex2:"Prices have risen substantially since 2020.",
   watch:"Substantial is about size or amount, not about being solid. A substantial meal is a big one.",
   prompt:"Describe a big change in your town, school or company.",model:"There has been a substantial increase in the number of cyclists in my city.",
   qs:["What would you do with a substantial amount of money?","What has changed substantially in your life recently?"],stem:/\bsubstantial(ly)?\b/i,up:{plain:"Prices went up a lot.",model:"Prices rose substantially."}},
  {id:"comprehensive",word:"comprehensive",lv:3,reg:"formal",ipa:"/ˌkɒm.prɪˈhen.sɪv/",pos:"adjective",
   def:"Including everything or nearly everything that is needed.",family:["comprehensively (adverb)"],
   coll:["a comprehensive guide / review / list","comprehensive insurance","fairly comprehensive"],syn:["complete","thorough","full"],opp:["partial","limited","incomplete"],
   ex:"The guide gives a comprehensive list of museums in the city.",ex2:"We need a comprehensive review of our safety rules.",
   watch:"Comprehensive means complete. It doesn't mean easy to understand; that is comprehensible.",
   prompt:"Recommend a book, website or course that covers a subject completely.",model:"This website offers a comprehensive guide to English grammar.",
   qs:["Where can you find comprehensive information about your city?","Is your phone insurance comprehensive?"],stem:/\bcomprehensive(ly)?\b/i,up:{plain:"It's a full list of everything.",model:"It is a comprehensive list."}},
  {id:"subsequent",word:"subsequent",lv:3,reg:"formal",ipa:"/ˈsʌb.sɪ.kwənt/",pos:"adjective",
   def:"Happening after something else.",family:["subsequently (adverb)"],
   coll:["subsequent years / events","in subsequent weeks","subsequent to","subsequently"],syn:["later","following","next"],opp:["previous","earlier","prior"],
   ex:"The first meeting was difficult, but subsequent meetings went well.",ex2:"He was subsequently offered a full-time job.",
   watch:"Subsequent is formal. In speech, say later or after that.",
   prompt:"Describe something that happened and what happened later.",model:"I failed my first driving test, but I passed on the subsequent attempt.",
   qs:["What did you learn in the first lesson that helped in subsequent ones?","What happened subsequently after you moved house?"],stem:/\bsubsequent(ly)?\b/i,up:{plain:"Later, he got a job.",model:"He was subsequently offered a job."}},
  {id:"adequate",word:"adequate",lv:3,reg:"formal",ipa:"/ˈæd.ə.kwət/",pos:"adjective",
   def:"Good enough or large enough for a need, but not excellent.",family:["adequately (adverb)","inadequate (adjective, opposite)"],
   coll:["adequate time / funding / support","perfectly adequate","more than adequate"],syn:["sufficient","acceptable","enough"],opp:["inadequate","insufficient"],
   ex:"The hotel room was adequate, but nothing special.",ex2:"Many schools lack adequate funding.",
   watch:"Adequate often sounds slightly negative: only good enough. Excellent is much stronger.",
   prompt:"Describe a place or service that was OK but not great.",model:"The food at the conference was adequate, but the coffee was terrible.",
   qs:["Does your city have adequate public transport?","Is your home office adequate for working?"],stem:/\b(in)?adequate(ly)?\b/i,up:{plain:"The room was OK.",model:"The room was adequate."}},
  /* ---- B2 informal (+4) ---- */
  {id:"no-brainer",word:"a no-brainer",lv:3,reg:"informal",ipa:"/ə ˌnəʊˈbreɪ.nə/",pos:"idiom",
   def:"A decision that is very easy because the right choice is obvious.",family:[],
   coll:["it's a no-brainer","a total no-brainer","a bit of a no-brainer"],syn:["an easy decision","obvious"],opp:["a tough call","a dilemma"],
   ex:"A free upgrade? That's a no-brainer.",ex2:"Taking the job was a no-brainer.",
   watch:"Write it with a hyphen: a no-brainer. It's too informal for an essay.",
   prompt:"Describe a decision that was very easy for you.",model:"Moving closer to work was a no-brainer: I saved two hours a day.",
   qs:["What was a no-brainer decision for you this year?","Is learning English a no-brainer for your career?"],stem:/\ba no-?brainer\b/i,up:{plain:"The decision was very easy.",model:"It was a no-brainer."}},
  {id:"call-it-a-day",word:"call it a day",lv:3,reg:"informal",ipa:"/ˌkɔːl ɪt ə ˈdeɪ/",pos:"idiom",
   def:"To stop working on something, usually because you are tired or have done enough.",family:[],
   coll:["let's call it a day","decided to call it a day","time to call it a day"],syn:["stop for today","finish"],opp:["carry on","keep going"],
   ex:"It's eight o'clock. Let's call it a day.",ex2:"After ten years, the band decided to call it a day.",
   watch:"The verb changes: we called it a day yesterday.",
   prompt:"Suggest stopping work to your colleagues.",model:"We've done enough for today. Shall we call it a day?",
   qs:["When do you usually call it a day at work or school?","When should a sports star call it a day?"],stem:/\b(call|calls|called|calling) it a day\b/i,up:{plain:"Let's stop working now.",model:"Let's call it a day."}},
  {id:"go-the-extra-mile",word:"go the extra mile",lv:3,reg:"informal",ipa:"/ɡəʊ ði ˌek.strə ˈmaɪl/",pos:"idiom",
   def:"To do more than people expect of you.",family:[],
   coll:["always goes the extra mile","willing to go the extra mile","went the extra mile"],syn:["make an extra effort"],opp:["do the bare minimum"],
   ex:"Our teacher always goes the extra mile for her students.",ex2:"The hotel staff went the extra mile to help us.",
   watch:"The verb changes: she went the extra mile. Common in job interviews and reviews.",
   prompt:"Describe a person who did more than you expected.",model:"The waiter went the extra mile and brought my son a birthday cake.",
   qs:["Who in your life always goes the extra mile?","When did you go the extra mile at work or school?"],stem:/\b(go|goes|went|gone|going) the extra mile\b/i,up:{plain:"She does more than she has to.",model:"She always goes the extra mile."}},
  {id:"touch-base",word:"touch base",lv:3,reg:"informal",ipa:"/ˌtʌtʃ ˈbeɪs/",pos:"idiom",
   def:"To talk to someone briefly to share news or check how things are going.",family:[],
   coll:["touch base with someone","let's touch base next week","just touching base"],syn:["catch up","check in"],opp:["lose touch"],
   ex:"Let's touch base on Friday about the project.",ex2:"I'm just touching base to see if you got my email.",
   watch:"Touch base is common in office English, usually with with: touch base with the team.",
   prompt:"Write a short message to a colleague suggesting a quick chat.",model:"Can we touch base tomorrow morning about the budget?",
   qs:["Who do you touch base with every week?","Is touch base used in your workplace?"],stem:/\b(touch|touches|touched|touching) base\b/i,up:{plain:"Let's talk briefly next week.",model:"Let's touch base next week."}},
  /* ---- C1 formal (+4) ---- */
  {id:"meticulous",word:"meticulous",lv:4,reg:"formal",ipa:"/məˈtɪk.jə.ləs/",pos:"adjective",
   def:"Very careful about every small detail.",family:["meticulously (adverb)"],
   coll:["meticulous attention to detail","meticulous planning / research","meticulously prepared"],syn:["thorough","painstaking","careful"],opp:["careless","sloppy"],
   ex:"She keeps meticulous records of every payment.",ex2:"The trip was meticulously planned.",
   watch:"Meticulous is positive. If someone is too careful, say pedantic or fussy.",
   prompt:"Describe a person you know who pays great attention to detail.",model:"My accountant is meticulous; she checks every receipt twice.",
   qs:["In which jobs is meticulous work essential?","Are you meticulous when you write emails?"],stem:/\bmeticulous(ly|ness)?\b/i,up:{plain:"He's really careful with details.",model:"He is meticulous."}},
  {id:"detrimental",word:"detrimental",lv:4,reg:"formal",ipa:"/ˌdet.rɪˈmen.təl/",pos:"adjective",
   def:"Causing harm or damage.",family:["detriment (noun)","detrimentally (adverb)"],
   coll:["detrimental to health","a detrimental effect / impact","potentially detrimental"],syn:["harmful","damaging"],opp:["beneficial","advantageous"],
   ex:"Too much screen time can be detrimental to sleep.",ex2:"The new road had a detrimental effect on local wildlife.",
   watch:"Use detrimental to: detrimental to your health, not detrimental for.",
   prompt:"Name a habit that harms people's health or work, and explain why.",model:"Skipping breakfast can be detrimental to concentration at school.",
   qs:["What habits are detrimental to your productivity?","Is social media detrimental to teenagers?"],stem:/\bdetriment(al|ally)?\b/i,up:{plain:"Smoking is bad for you.",model:"Smoking is detrimental to your health."}},
  {id:"tentative",word:"tentative",lv:4,reg:"formal",ipa:"/ˈten.tə.tɪv/",pos:"adjective",
   def:"Not certain or final; done carefully because you are not sure.",family:["tentatively (adverb)"],
   coll:["a tentative agreement / plan / date","tentative steps","tentatively scheduled"],syn:["provisional","uncertain","hesitant"],opp:["definite","firm","confident"],
   ex:"We have a tentative date for the meeting: 12 May.",ex2:"The talks are tentatively scheduled for next week.",
   watch:"A tentative plan may still change. A firm plan is fixed.",
   prompt:"Describe a plan that is not fixed yet.",model:"We've made tentative plans to visit Lisbon in the spring.",
   qs:["What tentative plans do you have for next year?","When did you take tentative steps into something new?"],stem:/\btentative(ly)?\b/i,up:{plain:"The date might change.",model:"The date is tentative."}},
  {id:"salient",word:"salient",lv:4,reg:"formal",ipa:"/ˈseɪ.li.ənt/",pos:"adjective",
   def:"Most important or most noticeable.",family:["salience (noun)"],
   coll:["the salient points / features / facts","most salient"],syn:["main","key","prominent"],opp:["minor","trivial"],
   ex:"Let me summarise the salient points of the report.",ex2:"The most salient feature of the design is its simplicity.",
   watch:"Salient almost always goes with points, features or facts.",
   prompt:"Summarise the main points of a news story you read.",model:"The salient point of the article was that rents rose by 15 percent.",
   qs:["What are the salient features of a good CV?","What is the most salient problem in your city?"],stem:/\bsalien(t|ce)\b/i,up:{plain:"Here are the main points.",model:"Here are the salient points."}},
  /* ---- C1 informal (+4) ---- */
  {id:"move-the-goalposts",word:"move the goalposts",lv:4,reg:"informal",ipa:"/ˌmuːv ðə ˈɡəʊl.pəʊsts/",pos:"idiom",
   def:"To change the rules or targets unfairly while someone is trying to achieve them.",family:[],
   coll:["keep moving the goalposts","moved the goalposts","stop moving the goalposts"],syn:["change the rules"],opp:["play fair"],
   ex:"Every time we finish, the client moves the goalposts.",ex2:"It's unfair to move the goalposts halfway through the project.",
   watch:"The verb changes: they moved the goalposts. It is a complaint, so it sounds critical.",
   prompt:"Describe a situation where the rules changed unfairly.",model:"Our manager moved the goalposts by raising the sales target in the last week.",
   qs:["Has anyone moved the goalposts on you?","Why do companies sometimes move the goalposts?"],stem:/\b(move|moves|moved|moving) the goalposts\b/i,up:{plain:"They changed the targets unfairly.",model:"They moved the goalposts."}},
  {id:"back-to-square-one",word:"back to square one",lv:4,reg:"informal",ipa:"/ˌbæk tə ˌskweə ˈwʌn/",pos:"idiom",
   def:"Back at the beginning because an attempt has failed.",family:[],
   coll:["we're back to square one","go back to square one","right back to square one"],syn:["back to the start","start again"],opp:["make progress"],
   ex:"The deal fell through, so we're back to square one.",ex2:"If the test fails, we'll go back to square one.",
   watch:"Square one comes from board games. Use it when work is lost, not just started.",
   prompt:"Describe a time a plan failed and you had to start again.",model:"The computer crashed and I lost my essay, so I was back to square one.",
   qs:["When were you last back to square one?","How do you stay positive when you're back to square one?"],stem:/\bback to square one\b/i,up:{plain:"We must start from the beginning again.",model:"We're back to square one."}},
  {id:"get-the-ball-rolling",word:"get the ball rolling",lv:4,reg:"informal",ipa:"/ɡet ðə ˌbɔːl ˈrəʊ.lɪŋ/",pos:"idiom",
   def:"To start an activity or process.",family:["start the ball rolling (variant)"],
   coll:["let's get the ball rolling","to get the ball rolling","got the ball rolling"],syn:["get started","kick off"],opp:["put on hold"],
   ex:"Let's get the ball rolling with a quick introduction.",ex2:"Her email got the ball rolling on the new project.",
   watch:"Common at the start of meetings. Start the ball rolling means the same.",
   prompt:"Open a meeting or a class in one sentence.",model:"To get the ball rolling, could everyone share one goal for this month?",
   qs:["How do you get the ball rolling in a new class?","What project would you like to get the ball rolling on?"],stem:/\b(get|gets|got|getting|start|started|starting) the ball rolling\b/i,up:{plain:"Let's start the meeting.",model:"Let's get the ball rolling."}},
  {id:"a-grey-area",word:"a grey area",lv:4,reg:"informal",ipa:"/ə ˌɡreɪ ˈeə.ri.ə/",pos:"idiom",
   def:"A situation where the rules are not clear, so it is hard to say what is right.",family:[],
   coll:["a bit of a grey area","a legal grey area","fall into a grey area"],syn:["unclear","ambiguous"],opp:["black and white","clear-cut"],
   ex:"Working from abroad is still a grey area in my contract.",ex2:"Using AI for homework is a bit of a grey area.",
   watch:"British spelling is grey; American is gray.",
   prompt:"Describe a rule or situation that is not clearly right or wrong.",model:"Downloading old films is a grey area in many countries.",
   qs:["What is a grey area at your work or school?","Is sharing streaming passwords a grey area?"],stem:/\ba gr[ae]y area\b/i,up:{plain:"The rules aren't clear about this.",model:"This is a grey area."}},
  /* ---- C2 formal (+4) ---- */
  {id:"esoteric",word:"esoteric",lv:5,reg:"formal",ipa:"/ˌes.əˈter.ɪk/",pos:"adjective",
   def:"Understood or enjoyed by only a small number of people with special knowledge.",family:["esoterically (adverb)"],
   coll:["esoteric knowledge / interests","highly esoteric","rather esoteric"],syn:["obscure","specialised","arcane"],opp:["mainstream","popular","accessible"],
   ex:"The lecture was too esoteric for most first-year students.",ex2:"He has a rather esoteric interest in medieval maps.",
   watch:"Esoteric can sound slightly critical: too specialised for ordinary people.",
   prompt:"Describe a hobby or topic that only a few people understand.",model:"My uncle collects esoteric facts about Polish railway history.",
   qs:["Do you have any esoteric interests?","Why do some academic texts feel esoteric?"],stem:/\besoteric(ally)?\b/i,up:{plain:"Only experts understand this.",model:"This is rather esoteric."}},
  {id:"pernicious",word:"pernicious",lv:5,reg:"formal",ipa:"/pəˈnɪʃ.əs/",pos:"adjective",
   def:"Having a harmful effect, especially slowly and in a way that is hard to notice.",family:["perniciously (adverb)"],
   coll:["a pernicious influence / effect","pernicious myths","particularly pernicious"],syn:["harmful","insidious","damaging"],opp:["harmless","beneficial"],
   ex:"Misinformation has a pernicious effect on public trust.",ex2:"The idea that girls are bad at maths is a pernicious myth.",
   watch:"Pernicious suggests hidden, gradual harm. For sudden harm, say damaging or devastating.",
   prompt:"Describe an idea or habit that slowly causes harm.",model:"Constant comparison on social media has a pernicious effect on self-esteem.",
   qs:["What pernicious myths exist about learning languages?","Is gambling advertising pernicious?"],stem:/\bpernicious(ly)?\b/i,up:{plain:"This idea slowly causes harm.",model:"This idea is pernicious."}},
  {id:"obfuscate",word:"obfuscate",lv:5,reg:"formal",ipa:"/ˈɒb.fʌs.keɪt/",pos:"verb",
   def:"To make something deliberately unclear or difficult to understand.",family:["obfuscation (noun)"],
   coll:["obfuscate the truth / issue","deliberately obfuscate","legal obfuscation"],syn:["obscure","confuse","cloud"],opp:["clarify","elucidate"],
   ex:"The report seems designed to obfuscate the real costs.",ex2:"Politicians sometimes obfuscate rather than answer directly.",
   watch:"Obfuscate implies intention. If something is unclear by accident, say confusing.",
   prompt:"Describe a document or speech that hid the truth with complicated language.",model:"The contract obfuscated the cancellation fees in tiny print.",
   qs:["Why do companies obfuscate their terms and conditions?","How can you tell when someone is obfuscating?"],stem:/\bobfuscat(e|es|ed|ing|ion)\b/i,up:{plain:"They made it confusing on purpose.",model:"They deliberately obfuscated the issue."}},
  {id:"perfunctory",word:"perfunctory",lv:5,reg:"formal",ipa:"/pəˈfʌŋk.tər.i/",pos:"adjective",
   def:"Done quickly and without real care or interest, only because it has to be done.",family:["perfunctorily (adverb)"],
   coll:["a perfunctory glance / nod / apology","rather perfunctory"],syn:["cursory","superficial","half-hearted"],opp:["thorough","careful","heartfelt"],
   ex:"He gave the report a perfunctory glance and signed it.",ex2:"Her apology sounded perfunctory.",
   watch:"Perfunctory describes actions, not people: a perfunctory check, not a perfunctory person.",
   prompt:"Describe something someone did quickly without caring.",model:"The doctor gave me a perfunctory examination and sent me home.",
   qs:["Have you ever received a perfunctory apology?","Why are some job interviews perfunctory?"],stem:/\bperfunctor(y|ily)\b/i,up:{plain:"He looked at it very quickly without caring.",model:"He gave it a perfunctory glance."}},
  /* ---- C2 informal (+4) ---- */
  {id:"bite-the-bullet",word:"bite the bullet",lv:5,reg:"informal",ipa:"/ˌbaɪt ðə ˈbʊl.ɪt/",pos:"idiom",
   def:"To accept something unpleasant that you can no longer avoid.",family:[],
   coll:["finally bit the bullet","decide to bite the bullet","just bite the bullet"],syn:["face the music","grit your teeth"],opp:["put it off"],
   ex:"I finally bit the bullet and booked the dentist.",ex2:"We'll have to bite the bullet and raise prices.",
   watch:"The past is bit: I bit the bullet yesterday.",
   prompt:"Describe something unpleasant you finally decided to do.",model:"I bit the bullet and told my boss I was leaving.",
   qs:["What have you been putting off that you should bite the bullet on?","When did you last bite the bullet?"],stem:/\b(bite|bites|bit|bitten|biting) the bullet\b/i,up:{plain:"I accepted it and did it.",model:"I bit the bullet."}},
  {id:"a-red-herring",word:"a red herring",lv:5,reg:"informal",ipa:"/ə ˌred ˈher.ɪŋ/",pos:"idiom",
   def:"Something that takes attention away from the real issue, sometimes on purpose.",family:[],
   coll:["just a red herring","turn out to be a red herring","a complete red herring"],syn:["a distraction","a false lead"],opp:["the real issue"],
   ex:"The missing key was a red herring; the thief came through the window.",ex2:"Talk of the budget is a red herring: the real problem is staff.",
   watch:"Common in detective stories and debates.",
   prompt:"Describe something in a film, book or debate that distracted from the real issue.",model:"The butler in the film was a red herring; the real killer was the gardener.",
   qs:["Can you think of a red herring in a crime story?","Why do debaters use red herrings?"],stem:/\ba red herring\b/i,up:{plain:"That's not the real issue; it's a distraction.",model:"That's a red herring."}},
  {id:"beat-around-the-bush",word:"beat around the bush",lv:5,reg:"informal",ipa:"/ˌbiːt əˌraʊnd ðə ˈbʊʃ/",pos:"idiom",
   def:"To avoid saying something directly, usually because it is uncomfortable.",family:["beat about the bush (British variant)"],
   coll:["stop beating around the bush","don't beat around the bush","without beating around the bush"],syn:["avoid the issue","hedge"],opp:["get to the point","cut to the chase"],
   ex:"Stop beating around the bush and tell me what happened.",ex2:"She didn't beat around the bush: she said the plan wouldn't work.",
   watch:"British English often says beat about the bush.",
   prompt:"Ask someone to say something directly.",model:"Don't beat around the bush; just tell me if I got the job.",
   qs:["Do people in your culture beat around the bush?","When is it kinder to beat around the bush?"],stem:/\b(beat|beats|beaten|beating) (around|about) the bush\b/i,up:{plain:"Please say it directly.",model:"Don't beat around the bush."}},
  {id:"cut-to-the-chase",word:"cut to the chase",lv:5,reg:"informal",ipa:"/ˌkʌt tə ðə ˈtʃeɪs/",pos:"idiom",
   def:"To talk about the most important thing immediately, without unnecessary details.",family:[],
   coll:["let's cut to the chase","to cut to the chase","cut straight to the chase"],syn:["get to the point"],opp:["beat around the bush"],
   ex:"Let's cut to the chase: how much will it cost?",ex2:"I'll cut to the chase. We need more money.",
   watch:"Cut to the chase comes from old films that skipped to the car chase.",
   prompt:"Start an important conversation directly in one sentence.",model:"To cut to the chase, we need two more people on the team.",
   qs:["When do you prefer people to cut to the chase?","Is it rude to cut to the chase in your language?"],stem:/\b(cut|cuts|cutting) (straight )?to the chase\b/i,up:{plain:"Let's talk about the main point now.",model:"Let's cut to the chase."}}
);

NEWV.forEach(w=>{ if(!w.syl){ w.syl=[w.word]; w.stress=0; } });
ALLW.push(...NEWV);
Object.assign(PITFALLS, {
  receive:[{re:/\brecie?v/i,msg:"Spelling: receive, with e before i after c."}],
  "thank-you":[{re:/\bthankyou\b/i,msg:"Thank you is two words."}],
  stuff:[{re:/\bstuffs\b/i,msg:"Stuff is uncountable: no -s."}],
  attend:[{re:/\battend(s|ed)? to the (meeting|class|wedding|lesson)/i,msg:"No to after attend: attend the meeting."}],
  inform:[{re:/\ban information\b/i,msg:"Information is uncountable: some information, not an information."}],
  fancy:[{re:/\bfancy to\b/i,msg:"Use fancy + noun or -ing: fancy going, not fancy to go."}],
  provide:[{re:/\bprovid(e|es|ed) (me|you|him|her|us|them) (a|an|the|some|free)\b/i,msg:"Use provide someone with something."}]
});
/* ---------- New words every 48 hours ----------
   The set's word list is shown in "batches": each batch brings 2 formal + 2 informal new words per level, in file order.
   VSET.plan lists how long batches last from a date on (October 2026 had 1-day batches from 22 Oct, then 2-day batches from 26 Oct).
   Without a plan, batches last 2 days from VSET.daily (or VSET.start). When a batch ends, its words move to Previous vocabulary. */
const DAILY_NEW = 2, BATCH_DAYS = 2;
const pDate = s => { const [y,m,d]=String(s).split("-").map(Number); return new Date(y,m-1,d); };
function vPlan(){ const V=typeof VSET!=="undefined"?VSET:null; if(V && Array.isArray(V.plan) && V.plan.length) return V.plan;
  return [{from:(V && (V.daily||V.start)) || "2026-10-22", days:BATCH_DAYS}]; }
function batchList(){ const plan=vPlan(), out=[], today=new Date(); today.setHours(0,0,0,0);
  for(let s=0;s<plan.length;s++){ let d=pDate(plan[s].from); const stop=s+1<plan.length?pDate(plan[s+1].from):null, len=Math.max(1,plan[s].days||BATCH_DAYS);
    while(d<=today && (!stop || d<stop) && out.length<400){ const e=new Date(d); e.setDate(e.getDate()+len-1); if(stop && e>=stop) e.setTime(stop.getTime()-864e5);
      out.push({i:out.length, start:new Date(d), end:e}); d=new Date(d); d.setDate(d.getDate()+len); } }
  return out.length ? out : [{i:0,start:today,end:today}]; }
const curBatch = () => { const l=batchList(); return l[l.length-1]; };
const fmtD = d => d.toLocaleDateString("en-GB",{day:"numeric",month:"short"});
const batchLabel = b => +b.start===+b.end ? fmtD(b.start) : b.start.getMonth()===b.end.getMonth() ? `${b.start.getDate()}–${fmtD(b.end)}` : `${fmtD(b.start)} – ${fmtD(b.end)}`;
function dayNum(){ return curBatch().i; } /* the number of the current batch (the name is kept from the daily version) */
function dayIds(L, p){ const out=[]; if(p<0) return out;
  ["formal","informal"].forEach(reg=>{ const P=ALLW.filter(w=>w.lv===L && w.reg===reg); const n=P.length; if(!n) return;
    const last=Math.max(0, Math.floor(n/DAILY_NEW)-1), q=Math.min(p,last); /* a set that runs out keeps its last batch */
    for(let k=0;k<Math.min(DAILY_NEW,n);k++) out.push(P[(q*DAILY_NEW+k)%n].id); }); return [...new Set(out)]; }
const todayIds = (L=state.vlv) => dayIds(L, dayNum());
const practisedId = id => { const s=state.stats[id]; return (s && s.a>0) || !!state.srs[id] || (state.uses[id]||0)>0 || !!state.known[id]; };
/* Previous batches of this set, newest first */
function pastBatchIds(L){ const cur=dayNum(), t=new Set(dayIds(L,cur)), out=[];
  for(let i=cur-1;i>=0;i--) dayIds(L,i).forEach(id=>{ if(!t.has(id) && !out.includes(id)) out.push(id); }); return out; }
const recentIds = (L=state.vlv) => pastBatchIds(L);
/* Practice uses the new batch plus this student's own previous words (newest first), topped up with the latest previous batches */
const PRACTICE_MIN = 10, PRACTICE_MAX = 16;
function levelWords(L){
  if(typeof VSET!=="undefined" && VSET.archived) return ALLW.filter(w=>w.lv===L).sort((a,b)=>(a.reg==="formal"?0:1)-(b.reg==="formal"?0:1));
  const now=dayIds(L,dayNum()), past=pastBatchIds(L);
  const mine=[...past.filter(practisedId), ...ALLW.filter(w=>w.lv===L && !now.includes(w.id) && !past.includes(w.id) && practisedId(w.id)).map(w=>w.id)];
  const pool=[...now]; mine.forEach(id=>{ if(pool.length<PRACTICE_MAX && !pool.includes(id)) pool.push(id); });
  past.forEach(id=>{ if(pool.length<PRACTICE_MIN && !pool.includes(id)) pool.push(id); });
  return pool.map(id=>ALLW.find(w=>w.id===id)).filter(Boolean); }
let VDESC=["Starter: polite phrases and friendly everyday words.","Everyday formal verbs and casual chat.","Formal email language and relaxed British English.","Academic adjectives and common informal expressions.","Advanced formal words and business idioms.","Rare formal vocabulary and expressive idioms."];

const W = Object.fromEntries(ALLW.map(w=>[w.id,w]));
let WORDS = ALLW, ALL = [];

/* ---------- State (same storage key as before, so saved progress carries over) ---------- */
const STORE = "vocab5-progress-v1";
let state = { cur:"inevitable", tab:"learn", stats:{}, known:{} };
try { const s = JSON.parse(localStorage.getItem(STORE)||"null"); if (s && typeof s==="object") state = Object.assign(state, s); } catch(e){}
if(!state.stats || typeof state.stats!=="object") state.stats={};
if(!state.known || typeof state.known!=="object") state.known={};
state.srs = state.srs && typeof state.srs==="object" ? state.srs : {};
state.uses = state.uses && typeof state.uses==="object" ? state.uses : {};
state.days = state.days && typeof state.days==="object" ? state.days : {};
ALLW.forEach(w=>{ if(!state.stats[w.id]) state.stats[w.id]={c:0,a:0}; if(typeof state.uses[w.id]!=="number") state.uses[w.id]=0; });
if(![0,1,2,3,4,5].includes(state.vlv)) state.vlv=3;
WORDS=levelWords(state.vlv); ALL=WORDS.map(w=>w.word);
if(!WORDS.some(w=>w.id===state.cur)) state.cur = WORDS[0].id;
function setVocabLevel(L){ state.vlv=L; WORDS=levelWords(L); ALL=WORDS.map(w=>w.word); if(!WORDS.some(w=>w.id===state.cur)) state.cur=WORDS[0].id;
  round=null; flash=null; askState=null; story=null; up.order=null; spk.w=null; studio.w=null; scr={i:0,built:[],bank:[],solved:{}}; scrCache=null; save(); }
function save(){ try{ localStorage.setItem(STORE, JSON.stringify(state)); }catch(e){} }
let shownDay = null;
document.addEventListener("visibilitychange",()=>{ if(document.visibilityState!=="visible") return; const d=dayNum(); if(shownDay!==null && d!==shownDay){ shownDay=d; setVocabLevel(state.vlv); if(typeof prevSync==="function") prevSync(); if(typeof render==="function") render(); } });

/* ---------- Monthly word sets ----------
   The words above are the built-in copy of the set below. Each month a new set is published as vocab.json;
   old sets move to vocab-archive/<set>.json and are listed in vocab-archive/index.json ("Previous vocabulary"). */
var VSET_INLINE = {set:"2026-10", label:"October 2026", start:"2026-10-01", end:"2026-10-31", daily:"2026-10-22", plan:[{from:"2026-10-22",days:1},{from:"2026-10-26",days:2}]};
var VSET = VSET_INLINE; let VCURRENT = {meta:VSET_INLINE, words:null}, VARCH = null;
const INLINE_WORDS = ALLW.slice(), INLINE_VDESC = VDESC.slice();
function normWord(o){
  const w = {...o};
  if(w.stem && !(w.stem instanceof RegExp)){ try{ w.stem = typeof w.stem==="string" ? new RegExp(w.stem,"i") : new RegExp(w.stem.src, w.stem.fl||"i"); }catch(e){ w.stem=null; } }
  if(!w.stem) w.stem = new RegExp("\\b"+w.word.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b","i");
  ["family","coll","syn","opp","qs"].forEach(k=>{ if(!Array.isArray(w[k])) w[k]=[]; });
  if(!w.ex2) w.ex2 = w.ex; if(!w.syl){ w.syl=[w.word]; w.stress=0; }
  return w;
}
function applySet(meta, words, desc){
  ALLW.length = 0; ALLW.push(...words);
  Object.keys(W).forEach(k=>delete W[k]); ALLW.forEach(w=>{ W[w.id]=w; });
  ALLW.forEach(w=>{ if(!state.stats[w.id]) state.stats[w.id]={c:0,a:0}; if(typeof state.uses[w.id]!=="number") state.uses[w.id]=0; });
  VDESC = (Array.isArray(desc) && desc.length===6) ? desc.slice() : INLINE_VDESC.slice();
  VSET = meta; mergeBank(); setVocabLevel(state.vlv); prevSync();
}
/* Word bank: every word a student has reviewed is kept here, so it can come back in review after its month ends. */
const BANK="vocab5-bank-v1"; let bank={};
try{ const b=JSON.parse(localStorage.getItem(BANK)||"{}"); if(b && typeof b==="object") bank=b; }catch(e){}
function bankWord(id){ const w=W[id]; if(!w || w.old) return;
  bank[id]={id, word:w.word, def:w.def, ex:w.ex, ex2:w.ex2, ipa:w.ipa, pos:w.pos, lv:w.lv, reg:w.reg, syl:w.syl, stress:w.stress,
    tr:w.tr || (typeof L1W!=="undefined" ? L1W[id] : undefined), stem:{src:w.stem.source, fl:"i"}, set:VSET.label};
  try{ localStorage.setItem(BANK, JSON.stringify(bank)); }catch(e){} }
function mergeBank(){ Object.values(bank).forEach(b=>{ if(b && b.id && !W[b.id]){ const w=normWord(b); w.old=true; W[b.id]=w; } }); }
function oldDue(){ const cur=new Set(ALLW.map(w=>w.id)); const now=Date.now();
  return Object.keys(bank).filter(id=>!cur.has(id) && W[id] && state.srs[id] && state.srs[id].d<=now).sort((a,b)=>state.srs[a].d-state.srs[b].d).slice(0,5); }
mergeBank();
/* Each student's previous vocabulary: every word they have practised that is no longer in the new batch.
   Saved with the batch (or month) it came from, so it stays listed after the month changes. */
const PREV="psotek-prev-v1"; let prevW={};
try{ const p=JSON.parse(localStorage.getItem(PREV)||"{}"); if(p && typeof p==="object") prevW=p; }catch(e){}
function prevSync(){ if(typeof VSET==="undefined" || VSET.archived) return; let changed=false;
  const list=batchList(), cur=list[list.length-1], when={};
  for(let L=0;L<6;L++) list.slice(0,-1).forEach(b=>dayIds(L,b.i).forEach(id=>{ if(!(id in when)) when[id]=b; }));
  const nowIds=new Set([0,1,2,3,4,5].flatMap(L=>dayIds(L,cur.i)));
  ALLW.forEach(w=>{ const id=w.id; if(nowIds.has(id) || !practisedId(id)) return; const b=when[id];
    const label = b ? batchLabel(b) : "Before "+fmtD(list[0].start), k = b ? b.i : -1;
    const e=prevW[id]; if(!e || e.set!==VSET.set || e.k!==k){ prevW[id]={set:VSET.set, month:VSET.label, k, p:label, lv:w.lv, reg:w.reg, word:w.word}; changed=true; }
    if(typeof bankWord==="function" && !bank[id]) bankWord(id); });
  if(changed) try{ localStorage.setItem(PREV, JSON.stringify(prevW)); }catch(e){} }
prevSync();
function useCurrentSet(){ state.vset=null; save();
  if(VCURRENT.words) applySet(VCURRENT.meta, VCURRENT.words, VCURRENT.desc); else applySet(VSET_INLINE, INLINE_WORDS, INLINE_VDESC); }

async function useArchivedSet(key){
  try{ const r=await fetch(`vocab-archive/${encodeURIComponent(key)}.json`,{cache:"no-cache"}); if(!r.ok) throw 0; const j=await r.json();
    if(!Array.isArray(j.words)||!j.words.length) throw 0;
    applySet({set:j.set,label:j.label,start:j.start,end:j.end,archived:true}, j.words.map(normWord), j.desc); state.vset=key; save(); return true; }
  catch(e){ return false; }
}
(async function bootSets(){
  try{ const r=await fetch("vocab.json",{cache:"no-cache"}); if(r.ok){ const j=await r.json();
      if(j && j.set && Array.isArray(j.words) && j.words.length && (j.set!==VSET_INLINE.set || j.words.length!==INLINE_WORDS.length || j.daily)){
        VCURRENT={meta:{set:j.set,label:j.label,start:j.start,end:j.end,daily:j.daily,plan:j.plan}, words:j.words.map(normWord), desc:j.desc};
        if(!state.vset) { applySet(VCURRENT.meta, VCURRENT.words, VCURRENT.desc); if(typeof render==="function") render(); } } } }catch(e){}
  if(state.vset && state.vset!==VCURRENT.meta.set){ const ok=await useArchivedSet(state.vset); if(!ok){ state.vset=null; save(); } if(typeof render==="function") render(); }
  else if(state.vset){ state.vset=null; save(); }
})();
function setNote(){
  if(!VSET.archived) return `<p class="setnote">New words every 48 hours. <button class="linkbtn" type="button" data-go="archive">Previous vocabulary</button></p>`;
  return `<div class="setbanner"><span>You're practising <b>previous vocabulary: ${esc(VSET.label)}</b>.</span><button class="btn ghost" type="button" data-setnow>Back to this month's words</button></div>`;
}
document.addEventListener("click",e=>{ if(!e.target.closest("[data-setnow]")) return; useCurrentSet(); render(); });

const DAY = 864e5;
function dayKey(d=new Date()){ return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function dayStart(offset=0){ const d=new Date(); d.setHours(0,0,0,0); d.setDate(d.getDate()+offset); return d.getTime(); }
function markDay(){ state.days[dayKey()]=1; const ks=Object.keys(state.days).sort(); ks.slice(0,Math.max(0,ks.length-120)).forEach(k=>delete state.days[k]); }
function streak(){ let n=0; const d=new Date(); if(!state.days[dayKey(d)]) d.setDate(d.getDate()-1);
  while(state.days[dayKey(d)]){ n++; d.setDate(d.getDate()-1); } return n; }
const dayNo = () => Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5); /* local day number, for "when was this word last practised" */
function touchWord(id){ const s=state.stats[id]; if(s) s.t=dayNo(); }
function record(id, ok){ const s=state.stats[id]; if(!s) return; s.a++; if(ok) s.c++; s.t=dayNo(); markDay(); save(); track(ok); }

function planDone(step){ const k=dayKey(); if(!state.plan || state.plan.d!==k) state.plan={d:k}; state.plan[step]=1; save(); }
function isPlanDone(step){ return state.plan && state.plan.d===dayKey() && !!state.plan[step]; }

/* Spaced review boxes: 0 = new, 5 = long-term */
const GAPS=[0,1,2,4,8,16];
const box = id => (state.srs[id] && state.srs[id].b) || 0;
const isDue = id => !state.srs[id] || state.srs[id].d <= Date.now();
function srsAnswer(id, ok){ touchWord(id); const b = ok ? Math.min(5, box(id)+1) : 1; state.srs[id] = {b, d: ok ? dayStart(GAPS[b]) : Date.now()}; save(); if(typeof bankWord==='function') bankWord(id); }
function nextDue(){ const t = WORDS.map(w=>state.srs[w.id]?state.srs[w.id].d:0).filter(x=>x>Date.now()); return t.length? Math.min(...t) : null; }
const acc = id => { const s=state.stats[id]; return s.a? Math.round(s.c/s.a*100) : null; };
const USE_GOAL = 10;

/* ---------- Nickname, practice time and progress code ---------- */
const ACT_STORE="vocab5-activity-v1";
let act={id:"", nick:"", weeks:{}};
try{ const a=JSON.parse(localStorage.getItem(ACT_STORE)||"null"); if(a) act=Object.assign(act,a); }catch(e){}
if(!act.id) act.id="s"+Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4);
function isoWeek(d){ const t=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())); const day=t.getUTCDay()||7; t.setUTCDate(t.getUTCDate()+4-day);
  const y=t.getUTCFullYear(); const w=Math.ceil(((t-Date.UTC(y,0,1))/864e5+1)/7); return y+"-W"+String(w).padStart(2,"0"); }
function wk(){ const k=isoWeek(new Date()); if(!act.weeks[k]) act.weeks[k]={sec:0,ans:0,cor:0}; return act.weeks[k]; }
function saveAct(){ const keys=Object.keys(act.weeks).sort(); keys.slice(0,Math.max(0,keys.length-12)).forEach(k=>delete act.weeks[k]);
  try{ localStorage.setItem(ACT_STORE, JSON.stringify(act)); }catch(e){} }
function track(ok){ const w=wk(); w.ans++; if(ok) w.cor++; saveAct(); if(typeof psoReact==="function") psoReact(ok); if(typeof bgNote==="function") bgNote(ok); }
let lastInput=Date.now();
["pointerdown","keydown","wheel","touchstart"].forEach(ev=>document.addEventListener(ev,()=>{ lastInput=Date.now(); },{passive:true,capture:true}));
setInterval(()=>{ if(document.visibilityState==="visible" && Date.now()-lastInput<90000 && act.nick && route!=="game"){ wk().sec+=15; saveAct(); } },15000);

function openGate(){ $("#gatePso").innerHTML=psotek("happy")+`<p class="psobub">Cześć! I'm Psotek. Let's practise.</p>`; $("#gateLang").innerHTML=langSeg(); $("#gate").hidden=false; $("#nickIn").value=act.nick||""; $("#nickErr").hidden=true; setTimeout(()=>$("#nickIn").focus(),30); }
function wireMoveIn(){ const b=$("#moveBtn"); if(!b) return; b.onclick=()=>{ $("#moveErr").hidden=true;
    try{ const n=moveApply(moveUnpack($("#moveCode").value)); if(!n) throw new Error("empty"); location.reload(); }catch(e){ $("#moveErr").hidden=false; $("#moveCode").focus(); } }; }
function moveBar(){
  if(ON_NEW || !MOVE_LIVE || !act.nick) return "";
  return `<section class="movebar" aria-labelledby="moveT"><div><b id="moveT">Psotek has a new home: psotnyjez.com</b><p>Take your streak, words, XP and badges with you. It takes one tap.</p></div>
    <div class="row"><button class="btn" type="button" id="moveGo">Move my progress</button><button class="btn ghost" type="button" id="moveCopy">Copy moving code</button></div>
    <textarea id="moveOut" class="tin" rows="3" readonly hidden aria-label="Your moving code"></textarea></section>`;
}
function wireMoveBar(){ const g=$("#moveGo"); if(!g) return;
  g.onclick=()=>{ const url=NEW_HOME+"#move="+movePack(); let w=null; try{ w=window.open(url,"_blank","noopener"); }catch(e){} if(!w){ try{ window.top.location.href=url; }catch(e){ $("#moveCopy").click(); } } };
  $("#moveCopy").onclick=async()=>{ const code=movePack(), out=$("#moveOut"); out.value=code; out.hidden=false; out.select();
    let ok=false; try{ await navigator.clipboard.writeText(code); ok=true; }catch(e){ try{ ok=document.execCommand("copy"); }catch(_){} }
    $("#moveCopy").textContent= ok ? "Copied! Paste it on psotnyjez.com" : "Select the code below and copy it"; };
}
function wireGate(){ wireMoveIn(); $("#gateForm").addEventListener("submit",e=>{ e.preventDefault();
  const v=$("#nickIn").value.replace(/\s+/g," ").trim();
  if(v.length<2||v.length>24){ $("#nickErr").hidden=false; $("#nickIn").focus(); return; }
  const isNewStudent = !act.nick && answersSoFar()===0; act.nick=v; saveAct(); paintWho();
  if(isNewStudent){ startSet({lv:0,words:0,round:0,done:0,at:Date.now()}); showLevelStep(); return; }
  $("#gate").hidden=true; if(state.tab==="progress"||["today","progress"].includes(route)) render(); }); }
/* ---------- First visit: choose a level, meet the words, play one round ---------- */
const START_KEY="psotek-start-v1";
const startGet = () => { try{ return JSON.parse(localStorage.getItem(START_KEY)||"null"); }catch(e){ return null; } };
function startSet(o){ try{ localStorage.setItem(START_KEY, JSON.stringify(o)); }catch(e){} }
function startMark(k){ const o=startGet(); if(!o || o.done || o[k]) return; o[k]=1; if(o.lv&&o.words&&o.round){ o.done=1; setTimeout(()=>{ if(typeof psoSay==="function") psoSay("champ","You're all set. See you tomorrow!"); },300); } startSet(o); }
const LV_NAMES=[["A1","Beginner","I know a few words and phrases."],["A2","Elementary","I can talk about everyday things simply."],["B1","Intermediate","I can manage most everyday situations."],["B2","Upper intermediate","I can discuss many topics and follow films."],["C1","Advanced","I use English easily for work or study."],["C2","Proficient","I want rare words and polished style."]];
function showLevelStep(){
  $("#gateForm").querySelectorAll(":scope > :not(#gateLv)").forEach(el=>el.hidden=true);
  const box=$("#gateLv"); box.hidden=false;
  box.innerHTML=`<div class="gatepso">${psotek("happy")}<p class="psobub">Miło cię poznać, ${esc(act.nick)}! One question.</p></div>
    <h2 class="h3" id="lvQ">What's your English level?</h2><p>Words, tenses, videos and sounds will start here. You can change it any time.</p>
    <div class="lvpick" role="group" aria-labelledby="lvQ">${LV_NAMES.map(([c,n,d],i)=>`<button class="lvcard" type="button" data-startlv="${i}"><b>${c}</b><span><strong>${n}</strong><small>${d}</small></span></button>`).join("")}</div>
    <p class="hintline" style="margin:10px 0 0">Not sure? Choose <b>B1</b>. Psotek will tell you if it's too easy.</p>`;
  $$("[data-startlv]").forEach(b=>b.onclick=()=>{ const L=+b.dataset.startlv; setVocabLevel(L); if(typeof lab!=="undefined"){ lab.level=L; saveLab(); }
    startMark("lv"); $("#gate").hidden=true; box.hidden=true; box.innerHTML=""; $("#gateForm").querySelectorAll(":scope > *").forEach(el=>{ if(el.id!=="gateLv" && !el.classList.contains("err")) el.hidden=false; });
    go("today"); });
  const first=box.querySelector("[data-startlv='2']"); if(first) first.focus(); }
function startCardHTML(){ const o=startGet(); if(!o || o.done || o.skip) return "";
  const step=(k,n,t,d,btn,attr)=>`<li class="${o[k]?"done":""}"><span class="snum" aria-hidden="true">${o[k]?"✓":n}</span><span class="stxt"><b>${t}</b><small>${d}</small></span>${o[k]?`<span class="tag">Done</span>`:btn?`<button class="btn" type="button" ${attr}>${btn}</button>`:""}</li>`;
  const w=todayIds()[0];
  return `<section class="startcard panel" aria-labelledby="startH"><div class="starttop"><div><p class="eyebrow">Welcome to Psotek</p><h2 id="startH" class="h3" style="margin:0">Three steps to get started</h2></div>
      <button class="linkbtn" type="button" id="startSkip">Hide this</button></div>
    <ol class="ssteps">
      ${step("lv",1,`Choose your level: ${LV[state.vlv]}`,"Change it any time on the Words page.",o.lv?"":"Choose","data-go='words'")}
      ${step("words",2,"Meet your 4 new words","Tap a word to hear it and see examples. New ones come every 48 hours.",w?"Meet the words":"","data-go='word' data-w='"+(w||"")+"'")}
      ${step("round",3,"Play your first round","Ten quick questions with the new words.","Start a round","id='startRound'")}
    </ol></section>`; }
function wireStart(){ const sk=$("#startSkip"); if(sk) sk.onclick=()=>{ const o=startGet()||{}; o.skip=1; startSet(o); render(); };
  const r=$("#startRound"); if(r) r.onclick=()=>startRound("quiz"); }

function b64url(str){ const bytes=new TextEncoder().encode(str); let bin=""; bytes.forEach(b=>bin+=String.fromCharCode(b));
  return btoa(bin).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""); }
function sum36(str){ let h=5381; for(let i=0;i<str.length;i++) h=((h*33)^str.charCodeAt(i))>>>0; return h.toString(36); }
function progressSummary(x){ return {v:1,id:act.id,n:act.nick,ts:Date.now(),xp:x.L.xp||0,lv:+x.L.level||0,vl:state.vlv,k:Object.values(state.known).filter(Boolean).length,c:x.c,a:x.a,w:x.w,vid:x.vid,b:(typeof bg!=="undefined"?bg.got:{}),pw:x.pw}; }
function progressData(){ const code=progressCode(); try{ const m=code.match(/^EW1\.([A-Za-z0-9_-]+)\./); const b=atob(m[1].replace(/-/g,"+").replace(/_/g,"/")); return JSON.parse(new TextDecoder().decode(Uint8Array.from(b,ch=>ch.charCodeAt(0)))); }catch(e){ return null; } }
function progressCode(){
  let c=0,a=0; ALLW.forEach(w=>{ c+=state.stats[w.id].c; a+=state.stats[w.id].a; });
  const w={}; Object.keys(act.weeks).sort().forEach(k=>{ const x=act.weeks[k]; w[k]=[x.sec,x.ans,x.cor]; });
  const L=typeof lab!=="undefined"?lab:{xp:0,level:2};
  const vid=typeof vidForCode==="function"?vidForCode():{};
  /* the words this student has practised: [word, level, right, tries, times used, last day practised (0 = before tracking)] */
  const pw=Object.keys(state.stats).filter(id=>W[id] && practisedId(id)).map(id=>{ const s=state.stats[id]||{c:0,a:0}; return [W[id].word.slice(0,40), W[id].lv|0, s.c|0, s.a|0, state.uses[id]|0, s.t|0]; })
    .sort((x,y)=>y[5]-x[5]||y[3]-x[3]).slice(0,300);
  const json=JSON.stringify(progressSummary({c,a,w,L,vid,pw}));
  return "EW1."+b64url(json)+"."+sum36(json+"|eight-words");
}

/* ---------- Helpers ---------- */
const $ = (s,el=document)=>el.querySelector(s);
const esc = s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const shuffle = a=>{ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
function norm(s){
  return s.toLowerCase().replace(/[’‘]/g,"'").replace(/[.!?,]+$/,"").replace(/\s+/g," ").trim()
    .replace(/\bdidn't\b/g,"did not").replace(/\bdon't\b/g,"do not").replace(/\bdoesn't\b/g,"does not")
    .replace(/\bwon't\b/g,"will not").replace(/\bhasn't\b/g,"has not").replace(/\bhaven't\b/g,"have not")
    .replace(/\bhadn't\b/g,"had not").replace(/\bisn't\b/g,"is not").replace(/\baren't\b/g,"are not")
    .replace(/\bwasn't\b/g,"was not").replace(/\bweren't\b/g,"were not");
}
const matches = (v,list)=>list.some(a=>norm(a)===norm(v));
function speak(text){
  try{ if(!("speechSynthesis" in window)) return; speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text); u.lang="en-GB"; u.rate=.85; speechSynthesis.speak(u);}catch(e){}
}
function sylHTML(w){
  if(w.syl.length===1) return `<span class="syl" aria-label="${esc(w.word)}"><span class="stress">${esc(w.word)}</span></span>`;
  return `<span class="syl" aria-label="${esc(w.word)}">${w.syl.map((p,i)=>`${i?'<b aria-hidden="true">·</b>':''}<span class="${i===w.stress?'stress':''}">${esc(p)}</span>`).join("")}</span>`;
}

/* Claude feedback (optional) */
let sample = null;
(async()=>{ try{ if(window.claude && claude.use){ sample = await claude.use("sample"); if(sample) document.querySelectorAll(".needs-ai").forEach(b=>b.hidden=false);} }catch(e){ sample=null; } })();



/* ---------- Small helpers ---------- */
const $$ = (s,el=document)=>[...el.querySelectorAll(s)];
const canSpeak = (()=>{ try{ return "speechSynthesis" in window; }catch(e){ return false; } })();
function speakSlow(text){ try{ if(!canSpeak) return; speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.lang="en-GB"; u.rate=.6; speechSynthesis.speak(u);}catch(e){} }
const listJoin = a => a.length<2 ? a.join("") : a.slice(0,-1).join(", ")+" and "+a[a.length-1];
const ICON = {
  today:'<path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z"/>',
  words:'<path d="M3 5.5h6a3 3 0 013 3V20a2.5 2.5 0 00-2.5-2.5H3zM21 5.5h-6a3 3 0 00-3 3V20a2.5 2.5 0 012.5-2.5H21z"/>',
  practise:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8"/>',
  use:'<path d="M4 20h4L19.5 8.5l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
  progress:'<path d="M5 20v-7M12 20V5M19 20v-10"/>',
  display:'<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
  lab:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  grammar:'<path d="M9.5 3.5h5M10.5 3.5v5.5L5.2 18a2 2 0 001.7 3h10.2a2 2 0 001.7-3l-5.3-9V3.5"/><path d="M7.6 15h8.8"/>',
  video:'<rect x="3" y="5.5" width="18" height="13" rx="3"/><path d="M10.5 9.5v5l4-2.5z" fill="currentColor"/>',
  verbs:'<path d="M4 8h12M12.5 4.5L16 8l-3.5 3.5"/><path d="M20 16H8M11.5 12.5L8 16l3.5 3.5"/>',
  back:'<path d="M15 5l-7 7 7 7"/>',
  more:'<circle cx="5.5" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="18.5" cy="12" r="1.3" fill="currentColor"/>',
  chev:'<path d="M6 9l6 6 6-6"/>',
  sounds:'<path d="M3 10v4M7 7v10M11 4v16M15 8v8M19 11v2"/>',
  archive:'<rect x="3.5" y="4" width="17" height="4.5" rx="1.2"/><path d="M5 8.5v10a1.5 1.5 0 001.5 1.5h11a1.5 1.5 0 001.5-1.5v-10M10 12.5h4"/>',
  game:'<path d="M4.5 9.5h11v4.5a5 5 0 01-5 5h-1a5 5 0 01-5-5z"/><path d="M15.5 11h1.25a2.5 2.5 0 010 5H15"/><path d="M3.5 21h13"/><path d="M8 3.5c-.7.9-.7 1.8 0 2.7M11.5 3.5c-.7.9-.7 1.8 0 2.7"/>',
  exam:'<path d="M2.5 9.5L12 5l9.5 4.5L12 14z"/><path d="M6.5 11.5v4.5c3 2.5 8 2.5 11 0v-4.5M21.5 9.5v5"/>',
  badges:'<circle cx="12" cy="9" r="5.5"/><path d="M8.5 13.5L7 21l5-2.5 5 2.5-1.5-7.5"/><path d="M12 6.5l.8 1.6 1.7.3-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.3z" fill="currentColor" stroke="none"/>',
  sound:'<path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M15.5 9a4 4 0 010 6M18 6.5a7.5 7.5 0 010 11"/>'
};
const ico = (k,cls="") => `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICON[k]}</svg>`;
const segs = (n,max=5,label="") => `<span class="seg" role="img" aria-label="${label||n+" of "+max}">${Array.from({length:max},(_,i)=>`<i class="${i<n?"on":""}"></i>`).join("")}</span>`;
const blankOut = (s, w) => { const m = s.match(w.stem); return m ? {txt:s.replace(m[0],"____"), ans:m[0]} : null; };

/* ---------- Navigation ---------- */
const TENSE_ROOMS = ["table","map","machine","hunt","detective","time"];
const NAV_FULL = [["today","Today"],["words","Words"],["lab","Tenses","Tenses"],["grammar","Grammar","Grammar"],["video","Video","Video"],["sounds","Pronunciation","Sounds"],["use","Use it"]];
const MORE_FULL = [["practise","Practise"],["exam","Exam corner"],["progress","Progress"],["archive","Previous vocabulary"],["badges","Badges"],["game","Game"]];
/* New students see a short menu (Today, Words, Tenses, Video). Everything else waits under More until they have
   answered START_UNLOCK questions, or until they choose the full menu in Display. */
const START_UNLOCK = 30, MENU_KEY = "psotek-menu";
const answersSoFar = () => { try{ return Object.values(act.weeks||{}).reduce((n,w)=>n+(w.ans||0),0); }catch(e){ return 0; } };
const menuPref = () => { try{ return localStorage.getItem(MENU_KEY)||""; }catch(e){ return ""; } };
const simpleMenu = () => menuPref()==="simple" || (menuPref()!=="full" && answersSoFar()<START_UNLOCK);
let NAV = NAV_FULL, MORE = MORE_FULL;
function pickMenu(){ const was=NAV.length; if(simpleMenu()){ NAV=NAV_FULL.filter(([id])=>["today","words","lab","video"].includes(id)); MORE=[...NAV_FULL.filter(([id])=>!NAV.some(n=>n[0]===id)), ...MORE_FULL]; } else { NAV=NAV_FULL; MORE=MORE_FULL; }
  if(was && was<NAV.length && menuPref()==="" && typeof psoSay==="function"){ try{ localStorage.setItem(MENU_KEY,"full"); }catch(e){} setTimeout(()=>psoSay("champ","New rooms open: Grammar, Pronunciation and Use it!"),400); } }
const moreNames = () => MORE.map(([,l])=>l).join(", ");
let navMore = (()=>{ try{ return localStorage.getItem("ee-navmore")==="1"; }catch(e){ return false; } })();
let morePop = false, forceClosed = false;
let route = ["lab","verbs","grammar"].includes(state.route) ? "lab" : ["today","words","video","practise","use","progress","game","archive","sounds","exam","badges"].includes(state.route) ? state.route : "today";
const section = r => r==="word" ? "words" : r==="lab" ? (typeof lab!=="undefined" && !TENSE_ROOMS.includes(lab.room) ? "grammar" : "lab") : (r==="flash"||r==="round"||r==="order") ? "practise" : r.startsWith("use:") ? "use" : r;
function go(r){
  morePop=false; forceClosed=false; if(r==="word" && typeof startMark==="function") startMark("words");
  if(r==="verbs"){ lab.room="verbs"; lab.groom="verbs"; saveLab(); r="lab"; }
  else if(r==="grammar"){ lab.room=lab.groom||"articles"; saveLab(); r="lab"; }
  else if(r==="lab" && !TENSE_ROOMS.includes(lab.room)){ lab.room=TENSE_ROOMS.includes(lab.troom)?lab.troom:"table"; saveLab(); }
  route=r; state.route=section(r); save(); render(); }
function paintNav(){
  pickMenu(); const sec=section(route), inMore=MORE.some(([id])=>id===sec), open=navMore||(inMore&&!forceClosed);
  const item=([id,l])=>`<li><button class="nav" type="button" data-go="${id}" ${sec===id?'aria-current="page"':""}>${ico(id)}<span>${navLabel(id,l)}</span></button></li>`;
  $("#railNav").innerHTML = NAV.map(item).join("") +
    `<li><button class="nav" type="button" data-more aria-expanded="${open}" aria-controls="navSub" aria-label="More: ${esc(moreNames())}">${ico("more")}<span>${navLabel("more","More")}</span>${ico("chev","chev")}</button>
      ${open?`<ul class="navsub" id="navSub">${MORE.map(item).join("")}</ul>`:""}</li>`;
  $("#tabbar").innerHTML = NAV.map(([id,l,sh])=>`<button class="tbtn" type="button" data-go="${id}" ${sec===id?'aria-current="page"':""}><span class="ic">${ico(id)}</span>${navLabel(id,sh||l,true)}</button>`).join("") +
    `<button class="tbtn" type="button" data-more aria-expanded="${morePop}" aria-label="More: ${esc(moreNames())}" ${inMore?'aria-current="page"':""}><span class="ic">${ico("more")}</span>${navLabel("more","More",true)}</button>`;
  let pop=$("#morePop");
  if(morePop){ if(!pop){ pop=document.createElement("div"); pop.id="morePop"; pop.className="morepop"; pop.setAttribute("role","menu"); document.body.appendChild(pop); }
    pop.innerHTML=MORE.map(([id,l])=>`<button class="nav" type="button" role="menuitem" data-go="${id}" ${sec===id?'aria-current="page"':""}>${ico(id)}<span>${navLabel(id,l)}</span></button>`).join(""); }
  else if(pop) pop.remove();
}
document.addEventListener("click",e=>{
  const m=e.target.closest("[data-more]");
  if(m){ if(m.closest(".tabbar")) morePop=!morePop; else { const sec=section(route); const inM=MORE.some(([id])=>id===sec); const open=navMore||(inM&&!forceClosed);
      navMore=!open; forceClosed=open&&inM; try{ localStorage.setItem("ee-navmore",navMore?"1":"0"); }catch(_){} }
    paintNav(); return; }
  if(morePop && !e.target.closest("#morePop")){ morePop=false; paintNav(); }
},true);
document.addEventListener("keydown",e=>{ if(e.key==="Escape"&&morePop){ morePop=false; paintNav(); } });
document.addEventListener("click",e=>{ const b=e.target.closest("[data-go]"); if(!b) return; const r=b.dataset.go;
  if(b.dataset.w) state.cur=b.dataset.w; go(r); });
const backBtn = (to,label) => `<button class="back" type="button" data-go="${to}">${ico("back")}<span>${label}</span></button>`;

/* extra.js: the rooms that aren't needed for the first screen (EXTRA_SRC is set only in the split build) */
let extraP=null;
function loadExtra(){ if(!window.EXTRA_SRC || window.__extraReady) return Promise.resolve();
  if(!extraP) extraP=new Promise(res=>{ const sc=document.createElement("script"); sc.src=window.EXTRA_SRC; sc.onload=()=>res(); sc.onerror=()=>{ extraP=null; res(); }; document.body.appendChild(sc); });
  return extraP; }
function render(){
  paintNav();
  /* Views are looked up by name: on psotnyjez.com the less-used rooms (Tenses, Grammar, Use it, Exam, Sounds, Game, Badges,
     Previous vocabulary) live in extra.js, which loads just after the first screen. */
  const V = {today:"viewToday", words:"viewWords", word:"viewWord", practise:"viewPractise", flash:"viewFlash", round:"viewRound", order:"viewOrder", lab:"viewLab", progress:"viewProgress", use:"viewUse",
    video:"viewVideo", game:"viewGame", archive:"viewArchive", sounds:"viewSounds", badges:"viewBadges", exam:"viewExam", "use:conv":"viewConv", "use:write":"viewWrite", "use:ask":"viewAsk", "use:studio":"viewStudio", "use:upgrade":"viewUpgrade", "use:story":"viewStory", "use:speak":"viewSpeak"};
  const fn = window[V[route]];
  if(typeof fn!=="function" && V[route]){ $("#view").innerHTML=`<div class="panel loadingroom"><p class="hintline" style="margin:0">Loading…</p></div>`; loadExtra().then(()=>{ if(typeof window[V[route]]==="function") render(); }); return; }
  (fn||viewToday)();
  if(VSET.archived && ["today","practise","use","word","flash","round","order"].includes(route) && !$("#view .setbanner")) $("#view").insertAdjacentHTML("afterbegin", setNote());
  if(route==="today" && typeof wireStart==="function") wireStart();
  if(["today","progress"].includes(route) && typeof moveBar==="function"){ const mb=moveBar(); if(mb){ $("#view").insertAdjacentHTML("afterbegin",mb); wireMoveBar(); } }
  if(typeof bgCheck==="function") bgCheck();
  window.scrollTo({top:0});
  const h=$("#view h1"); if(h){ h.setAttribute("tabindex","-1"); h.focus({preventScroll:true}); }
}


/* ---------- Pronunciation (Sounds) ---------- */




const snd = { mode:"hear", lv:null, cat:"all", q:null, done:false, right:0, seen:0, streak:0, sel:new Set(), queue:{} };
try{ const s=JSON.parse(localStorage.getItem("vocab5-sounds")||"null"); if(s){ snd.lv=s.lv; snd.cat=s.cat||"all"; snd.mode=s.mode||"hear"; } }catch(e){}


let enVoice=null;
function pickVoice(){ try{ const vs=speechSynthesis.getVoices(); enVoice = vs.find(v=>/en-GB/i.test(v.lang)) || vs.find(v=>/^en/i.test(v.lang)) || null; }catch(e){} }
if(canSpeak){ pickVoice(); try{ speechSynthesis.onvoiceschanged=pickVoice; }catch(e){} }
function sayEn(text, rate=0.85){ try{ if(!canSpeak) return; speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.lang="en-GB"; if(enVoice) u.voice=enVoice; u.rate=rate; speechSynthesis.speak(u); }catch(e){} }










/* Listen and type (dictation): sentences come from the example sentences of words at the chosen level */















/* ---------- Previous vocabulary ---------- */



/* Previous vocabulary page: this student's own words, then this month's earlier batches */





/* ---------- Game (coffee break) ---------- */





/* ---------- Today wallpaper: a landscape painted in code; the sky follows the time of day ---------- */
function heroArt(tod){
  const stars = tod==="night" ? Array.from({length:38},(_,i)=>{ const x=(i*317)%1200, y=18+((i*131)%170), r=i%5===0?1.8:1.1; return `<circle cx="${x}" cy="${y}" r="${r}" class="hstar" style="animation-delay:${(i%7)*.6}s"/>`; }).join("") : "";
  const clouds = tod!=="night" ? `<g class="hclouds"><path d="M120 92a26 26 0 0150-8 20 20 0 0136 10 16 16 0 01-2 32H128a20 20 0 01-8-34z"/><path d="M700 58a20 20 0 0138-6 15 15 0 0128 8 12 12 0 01-2 24h-58a15 15 0 01-6-26z"/><path d="M1240 110a24 24 0 0146-7 18 18 0 0132 9 14 14 0 01-2 29h-70a18 18 0 01-6-31z"/></g>` : "";
  const sunY = {morning:150,day:86,evening:196,night:96}[tod], sunX = {morning:880,day:980,evening:1040,night:1010}[tod];
  const tree = (x,y,h)=>`<path d="M${x} ${y}l${-h*.32} ${h*.62}h${h*.2}l${-h*.16} ${h*.3}h${h*.56}l${-h*.16} ${-h*.3}h${h*.2}z"/><rect x="${x-2.5}" y="${y+h*.9}" width="5" height="${h*.22}"/>`;
  const round = (x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}"/><rect x="${x-2.5}" y="${y+r*.6}" width="5" height="${r*.9}"/>`;
  return `<svg class="heroart" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
    <defs><linearGradient id="hsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" class="hs1"/><stop offset="1" class="hs2"/></linearGradient>
      <radialGradient id="hglow"><stop offset="0" class="hg1"/><stop offset="1" class="hg2"/></radialGradient></defs>
    <rect width="1200" height="420" fill="url(#hsky)"/>
    ${stars}
    <circle cx="${sunX}" cy="${sunY}" r="120" fill="url(#hglow)"/>
    <circle cx="${sunX}" cy="${sunY}" r="${tod==="night"?30:40}" class="hsun"/>
    ${tod==="night"?`<circle cx="${sunX+13}" cy="${sunY-9}" r="27" class="hmooncut"/>`:""}
    ${clouds}
    ${tod!=="night"?`<g class="hbirds"><path d="M800 150q8-8 16 0q8-8 16 0"/><path d="M842 136q6-6 12 0q6-6 12 0"/><path d="M876 158q5-5 10 0q5-5 10 0"/></g>`:""}
    <path class="hh1" d="M0 280C140 230 260 250 380 236S620 196 760 222s300 6 440-30V420H0z"/>
    <path class="hh2" d="M0 318c160-40 300-28 430-50s260 2 400 20 260-28 370-40V420H0z"/>
    <g class="htree2">${tree(352,232,46)}${tree(388,240,36)}${round(820,250,16)}${tree(1080,236,40)}${tree(1110,246,30)}</g>
    <path class="hh3" d="M0 356c120-26 260-30 400-14s300 30 460 8 250-30 340-24V420H0z"/>
    <g class="htree">${tree(150,300,58)}${tree(196,314,44)}${round(640,330,20)}${round(674,338,14)}${tree(960,316,52)}</g>
    <path class="hh4" d="M0 392c200-22 420-18 620-6s400 10 580-8V420H0z"/>
  </svg>`;
}

/* ---------- Today ---------- */
function pickWeakest(){
  const tried = WORDS.filter(w=>state.stats[w.id].a>=3).sort((a,b)=>acc(a.id)-acc(b.id));
  const fresh = WORDS.filter(w=>state.stats[w.id].a===0);
  if(fresh.length) return fresh[0]; /* WORDS lists today's words first */
  return tried[0] && acc(tried[0].id)<85 ? tried[0] : WORDS.slice().sort((a,b)=>box(a.id)-box(b.id))[0];
}
const leastUsed = () => WORDS.slice().sort((a,b)=>state.uses[a.id]-state.uses[b.id] || box(a.id)-box(b.id))[0];
/* Today's plan: three steps. "Start" runs them one after another, and each step's end screen hands over to the next. */
function planSteps(){
  const oldN = oldDue().length; const due = [...WORDS.filter(w=>isDue(w.id)), ...oldDue().map(id=>W[id])]; const weak = pickWeakest(); const useW = leastUsed(); const nd = nextDue();
  return [
    {k:"r", t:"Review your word cards", d: due.length ? `${due.length} ${due.length===1?"word is":"words are"} ready to review${oldN?`, including ${oldN} from previous months`:""}. Quick recall is the best way to remember.` : `All caught up.${nd?` Next review ${new Date(nd).toLocaleDateString("en-GB",{weekday:"long"})}.`:""}`, b: due.length?"Start review":"Review anyway", go:"flash"},
    {k:"p", t:`Practise “${weak.word}”`, d:"A short mixed round: meaning, partners, listening and forms.", b:"Start round", fn:()=>startRound("word", weak.id, "p")},
    {k:"u", t:`Use “${useW.word}” in your own words`, d:`Answer one real question with the word. You've used it ${state.uses[useW.id]} of ${USE_GOAL} times.`, b:"Write an answer", fn:()=>{ state.cur=useW.id; askState=null; askFocus=useW.id; askPlan=true; go("use:ask"); }}
  ]; }
let planRun=false;
function runStep(s){ if(s.fn) s.fn(); else { flash=null; flashPlan=true; go(s.go); } }
function runNextStep(){ const st=planSteps(), i=st.findIndex(s=>!isPlanDone(s.k)); if(i<0){ planRun=false; go("today"); return; } planRun=true; runStep(st[i]); }
/* the card at the end of a step: what's next, or "all done" */
function planNextHTML(){ if(!planRun) return "";
  const st=planSteps(), i=st.findIndex(s=>!isPlanDone(s.k));
  if(i<0){ planRun=false; return `<div class="plannext done">${psoOn()?`<div class="pnpso" aria-hidden="true">${psotek("champ")}</div>`:""}<div><p class="eyebrow">Today's plan</p><h2>All three steps done. Brawo!</h2><p>That's your ten minutes. Anything else today is a bonus.</p></div><button class="btn" type="button" data-go="today">Back to Today</button></div>`; }
  return `<div class="plannext"><div><p class="eyebrow">Today's plan · step ${i+1} of 3</p><h2>Next: ${esc(st[i].t)}</h2></div><button class="btn" type="button" data-plannext="1">Go to step ${i+1} →</button></div>`; }
document.addEventListener("click",e=>{ if(e.target.closest("[data-plannext]")) runNextStep(); });
/* this week's goals: a few practice days, your level's video and the reading */
function weekGoals(){
  const mon=new Date(); mon.setHours(0,0,0,0); mon.setDate(mon.getDate()-((mon.getDay()+6)%7));
  let days=0; for(let d=new Date(mon); d<=new Date(); d.setDate(d.getDate()+1)) if(state.days[dayKey(d)]) days++;
  const g=[{t:"Practise on 4 days", n:Math.min(days,4), of:4, b:"", go:""}];
  if(typeof vidS!=="undefined" && typeof VIDEO!=="undefined" && VIDEO.questions){ const w=vidS.weeks[vidKey()]||{mc:{}}; const tot=VIDEO.questions.length;
    g.push({t:`Watch your video${VIDEOS?` (${LV[curVidLv()]})`:""} and answer the questions`, n:Math.min(tot,Object.keys(w.mc||{}).length), of:tot, b:"Watch", tab:"watch"}); }
  if(typeof rds!=="undefined" && typeof READING!=="undefined" && READING.tfng){ const r=rds[READING.week]||{tf:{},mc:{}}; const tot=READING.tfng.length+(READING.mc||[]).length;
    g.push({t:"Read the Reading of the week", n:Math.min(tot,Object.keys(r.tf||{}).length+Object.keys(r.mc||{}).length), of:tot, b:"Read", tab:"read"}); }
  return g; }
function weekGoalsHTML(){ const g=weekGoals(); const done=g.filter(x=>x.n>=x.of).length;
  return `<section class="weekgoals" aria-labelledby="wgH"><h2 id="wgH" class="mini">This week <span class="dim">· ${done} of ${g.length} done</span></h2><ul>
    ${g.map(x=>{ const ok=x.n>=x.of; return `<li class="${ok?"ok":""}"><span class="wgtick" aria-hidden="true">${ok?"✓":""}</span><span class="wgt">${esc(x.t)}${ok?' <span class="sr">done</span>':""}</span><span class="wgn">${x.n}/${x.of}</span>${x.tab&&!ok?`<button class="btn ghost sm" type="button" data-wg="${x.tab}">${x.b}</button>`:"<span></span>"}</li>`; }).join("")}
  </ul></section>`; }
document.addEventListener("click",e=>{ const b=e.target.closest("[data-wg]"); if(!b) return; vidTab=b.dataset.wg; try{ localStorage.setItem("vocab5-vidtab",vidTab); }catch(err){} go("video"); });
function viewToday(){
  planRun=false;
  const oldN = oldDue().length; const due = [...WORDS.filter(w=>isDue(w.id)), ...oldDue().map(id=>W[id])]; const weak = pickWeakest(); const useW = leastUsed();
  shownDay = dayNum(); const newOnes = (VSET.archived ? NEW_IDS : todayIds()).filter(id=>W[id] && state.stats[id] && state.stats[id].a===0 && !state.known[id] && WORDS.some(w=>w.id===id));
  const st = streak(); const wkx = act.weeks[isoWeek(new Date())] || {sec:0,ans:0};
  const dateTxt = new Date().toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long"});
  const nd = nextDue();
  const steps = planSteps();
  const doneN = steps.filter(s=>isPlanDone(s.k)).length;
  const nextI = steps.findIndex(s=>!isPlanDone(s.k));
  const hr=new Date().getHours(), tod = hr>=5&&hr<11?"morning":hr<17&&hr>=11?"day":hr>=17&&hr<21?"evening":"night";
  const greet = {morning:"Good morning",day:"Good afternoon",evening:"Good evening",night:"Hello, night owl"}[tod];
  const hadDays = Object.keys(state.days).length>0;
  const [pm,pl] = doneN===3 ? ["champ","Mistrz dnia! All done."] : st>=3 ? ["happy",`${st} days in a row. Not bad… for a human.`] : (hadDays && st===0) ? ["cheeky","Missed me? Let's go."] : tod==="night" ? ["cheeky","Up late? Ten minutes, then bed."] : ["cheeky","Ten minutes. I'm timing you."];
  const sc = startCardHTML(), first = !!sc;   /* first visit: the welcome steps are the plan, so the daily plan waits */
  $("#view").innerHTML = `${sc}
  <section class="todayhero" data-tod="${tod}">${heroArt(tod)}<div class="herobody">
  <header class="pagehead">
    <p class="eyebrow">${esc(dateTxt)}</p>
    <h1>${act.nick?`${greet}, ${esc(act.nick)}`:greet}</h1>
    <p class="lede">${first?"Finish the welcome steps above. Tomorrow your daily ten-minute plan starts here.":doneN===3?"You've finished today's plan. Anything extra is a bonus.":"Your plan for today takes about ten minutes. Press start and Psotek takes you through the three steps."}</p>
    ${doneN<3&&!first?`<button class="btn big" type="button" id="planGo">${doneN===0?"Start today's 10 minutes":`Continue: step ${nextI+1} of 3`} →</button>`:""}
  </header>
  <div class="chips-row">
    <span class="pill"><b>${st}</b> ${st===1?"day":"days"} in a row</span>
    <span class="pill"><b>${Math.round(wkx.sec/60)}</b> min this week</span>
    <span class="pill"><b>${doneN}/3</b> steps today</span>
    <span class="pill"><b>${LV[state.vlv]}</b> words · <button class="linkbtn" type="button" data-go="words">change level</button></span>
    <button class="pill bgpill" type="button" data-go="badges"><b>${typeof bgEarned==="function"?bgEarned():0}</b> badges</button>
  </div></div>${psoOn()?`<div class="herpso" aria-hidden="true"><p class="psobub">${esc(pl)}</p>${psotek(pm)}</div>`:""}</section>
  ${first?"":`<ol class="plan" aria-label="Today's plan">
    ${steps.map((s,i)=>`<li class="step ${isPlanDone(s.k)?"done":""}">
      <span class="num" aria-hidden="true">${isPlanDone(s.k)?"✓":i+1}</span>
      <div><h2>${esc(s.t)}${isPlanDone(s.k)?' <span class="sr">done</span>':""}</h2><p>${esc(s.d)}</p></div>
      <button class="btn ${isPlanDone(s.k)?"ghost":""}" type="button" data-step="${i}">${isPlanDone(s.k)?"Do it again":s.b}</button>
    </li>`).join("")}
  </ol>`}
  ${newOnes.length&&!first?`<section class="newbanner">
    <div><p class="tag">New words</p><h2>${newOnes.length} new ${newOnes.length===1?"word":"words"}: ${esc(listJoin(newOnes.map(id=>W[id].word)))}</h2>
    <p>Fresh ${LV[state.vlv]} words for ${esc(batchLabel(curBatch()))}. ${(()=>{ const d=new Date(curBatch().end); d.setDate(d.getDate()+1); return "The next ones arrive on "+d.toLocaleDateString("en-GB",{weekday:"long"})+"."; })()}</p></div>
    <button class="btn" type="button" data-go="word" data-w="${newOnes[0]}">Meet the new words</button>
  </section>`:""}
  ${first?"":weekGoalsHTML()}
`;
  $$("[data-step]").forEach(b=>b.onclick=()=>{ planRun=true; runStep(steps[+b.dataset.step]); });
  const pg=$("#planGo"); if(pg) pg.onclick=runNextStep;
}

/* ---------- Words ---------- */
function viewWords(){
  const L=state.vlv;
  const cardHTML=w=>{ const a=acc(w.id); return `<button class="card wcard" type="button" data-go="word" data-w="${w.id}">
      <span class="wtop"><span class="ww">${esc(w.word)}</span>${state.known[w.id]?'<span class="tag soft">Known</span>':""}</span>
      <span class="wdef">${esc(w.def)}</span>
      <span class="wstats">
        <span><small>Memory</small>${segs(box(w.id),5,"Memory "+box(w.id)+" of 5")}</span>
        <span><small>Used</small><b>${Math.min(state.uses[w.id],99)}</b>/${USE_GOAL}</span>
        <span><small>Right</small><b>${a===null?"–":a+"%"}</b></span>
      </span></button>`; };
  const sec=(reg,title,sub)=>`<section class="regsec"><h2 class="regh"><span class="tag ${reg==="formal"?"reg-f":"reg-i"}">${title}</span><span>${sub}</span></h2>
    <div class="cards words">${WORDS.filter(w=>w.reg===reg).map(cardHTML).join("")}</div></section>`;
  const tIds=new Set(todayIds(L)), tw=WORDS.filter(w=>tIds.has(w.id)), rw=WORDS.filter(w=>!tIds.has(w.id));
  const regTag=w=>`<span class="tag ${w.reg==="formal"?"reg-f":"reg-i"}">${cap(w.reg)}</span>`;
  const cb=curBatch(), nx=new Date(cb.end); nx.setDate(nx.getDate()+1);
  const dailyHTML = `<section class="regsec"><h2 class="regh"><span class="tag">New words</span><span>${tw.length} words for ${esc(batchLabel(cb))} · the next ones arrive on ${esc(nx.toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long"}))}</span></h2>
      <div class="cards words">${tw.map(w=>cardHTML(w).replace('<span class="ww">',regTag(w)+' <span class="ww">')).join("")}</div></section>
    ${rw.length?`<section class="regsec"><h2 class="regh"><span class="tag soft">Previous vocabulary</span><span>Mixed into your practice rounds · <button class="linkbtn" type="button" data-go="archive">see all</button></span></h2>
      <div class="cards words">${rw.map(w=>cardHTML(w).replace('<span class="ww">',regTag(w)+' <span class="ww">')).join("")}</div></section>`:""}`;
  $("#view").innerHTML = `
  <header class="pagehead"><h1>Vocabulary</h1>
    <p class="lede">Choose a level. Every 48 hours you get four new words at your level: two formal and two informal. When they change, the old ones move to Previous vocabulary and keep coming back in your practice rounds and reviews.</p></header>
  ${setNote()}
  <div class="levels"><span class="lvlabel">Level</span>
    <div class="lvbtns" role="radiogroup" aria-label="Vocabulary level">${LV.map((l,i)=>`<button class="lvb" type="button" role="radio" data-vl="${i}" aria-checked="${i===L}">${l}</button>`).join("")}</div>
    <span class="lvdesc">${esc(VDESC[L])}</span></div>
  ${VSET.archived ? sec("formal","Formal","Emails, essays, work and official situations")+sec("informal","Informal","Friends, messages and relaxed conversation") : dailyHTML}
  <p class="hintline">Tap a word to study it. <b>Memory</b> grows when you remember it in review. <b>Used</b> counts sentences you've written or said with it.</p>`;
  $$("[data-vl]").forEach(b=>b.onclick=()=>{ const n=+b.dataset.vl; if(n===state.vlv) return; setVocabLevel(n); viewWords(); burst($(`[data-vl="${n}"]`),6); });
}
let recall = false;
function viewWord(){
  const w=W[state.cur]; const i=WORDS.indexOf(w);
  $("#view").innerHTML = `
  ${backBtn("words","Vocabulary")}
  <article class="panel learn">
    <div class="head">
      <h1 class="headword">${sylHTML(w)}</h1>
      <button class="iconbtn" type="button" id="say">${ico("sound")}<span>Hear it</span></button>
    </div>
    <p class="wtags"><span class="tag ${w.reg==="formal"?"reg-f":"reg-i"}">${cap(w.reg)}</span><span class="tag soft">${LV[w.lv]}</span></p>
    <div class="meta">${esc(w.pos)} · ${esc(w.ipa)}${w.syl.length>1?" · the bold part is stressed":""}</div>
    <p class="def ${recall?'hidden':''}" id="def">${esc(w.def)}</p>
    <button class="linkbtn" type="button" id="recall">${recall?"Show the meaning":"Hide the meaning to test yourself"}</button>
    ${l1WordBlock(w)}
    <div class="grid2">
      <div class="field"><h2>Word family</h2><ul>${w.family.map(f=>`<li>${esc(f)}</li>`).join("")}</ul></div>
      <div class="field"><h2>Common partners</h2><ul>${w.coll.map(f=>`<li>${esc(f)}</li>`).join("")}</ul></div>
      <div class="field"><h2>Similar</h2><p>${w.syn.map(esc).join(", ")}</p><h2 style="margin-top:12px">Opposite</h2><p>${w.opp.map(esc).join(", ")}</p></div>
    </div>
    <p class="example">${esc(w.ex)}</p>
    <p class="example">${esc(w.ex2)}</p>
    <div class="watch"><strong>Watch out.</strong> ${esc(w.watch)}</div>
    <div class="wordmeters">
      <span><small>Memory</small>${segs(box(w.id))}</span>
      <span><small>Used in your sentences</small><b>${state.uses[w.id]}</b> of ${USE_GOAL}</span>
      <span><small>Right first time</small><b>${acc(w.id)===null?"–":acc(w.id)+"%"}</b></span>
    </div>
  </article>
  <div class="actions">
    <button class="btn" type="button" id="pw">Practise this word</button>
    <button class="btn" type="button" id="uw">Use it in a sentence</button>
    <button class="btn ghost" type="button" id="known" aria-pressed="${!!state.known[w.id]}">${state.known[w.id]?"✓ Marked as known":"I know this word"}</button>
  </div>
  <div class="pager">
    <button class="btn ghost" type="button" id="prev" ${i<=0?"disabled":""}>← ${i>0?esc(WORDS[i-1].word):"Previous"}</button>
    <span class="counter">${i+1} of ${WORDS.length}</span>
    <button class="btn ghost" type="button" id="next" ${i<0||i===WORDS.length-1?"disabled":""}>${i>=0&&i<WORDS.length-1?esc(WORDS[i+1].word):"Next"} →</button>
  </div>`;
  $("#say").onclick=()=>speak(w.word+". "+w.ex);
  $("#recall").onclick=()=>{ recall=!recall; viewWord(); };
  $("#known").onclick=()=>{ state.known[w.id]=!state.known[w.id]; save(); viewWord(); };
  $("#pw").onclick=()=>startRound("word", w.id);
  $("#uw").onclick=()=>{ studio.w=w.id; studio.p=0; go("use:studio"); };
  $("#prev").onclick=()=>{ state.cur=WORDS[i-1].id; save(); viewWord(); };
  $("#next").onclick=()=>{ state.cur=WORDS[i+1].id; save(); viewWord(); };
}

/* ---------- Practise hub ---------- */
const EX = {
  quiz:{t:"Meaning quiz", d:"Pick the word that fits a definition, an opposite or a sentence.", min:4},
  coll:{t:"Word partners", d:"Choose the preposition or word that naturally goes with each word.", min:4},
  listen:{t:"Listen and type", d:"Hear a sentence and type the missing word. Trains sound and spelling.", min:4},
  simopp:{t:"Similar or opposite?", d:"Sort related words fast. Builds a web of meaning around each word.", min:2},
  forms:{t:"Word forms", d:"Turn each word into a noun or adverb so it fits the sentence.", min:4},
  ladder:{t:"Tense ladder", d:"Put the verb next to the word in the right tense.", min:5},
  mixed:{t:"Mixed review", d:"A bit of everything, shuffled together. The best way to finish a session.", min:6},
  word:{t:"Word round", d:"", min:4}
};
function viewPractise(){
  const due=WORDS.filter(w=>isDue(w.id)).length;
  const ids=WORDS.map(w=>w.id);
  const card = k => GEN[k](ids).length ? `<button class="card" type="button" data-ex="${k}"><h3>${EX[k].t}</h3><p>${EX[k].d}</p><span class="meta2"><span>About ${EX[k].min} min</span></span></button>`
    : `<button class="card" type="button" disabled aria-disabled="true"><h3>${EX[k].t}</h3><p>${EX[k].d}</p><span class="meta2"><span>Not available at ${LV[state.vlv]} yet</span></span></button>`;
  $("#view").innerHTML = `
  <header class="pagehead"><h1>Practise</h1>
    <p class="lede">Short rounds that check what you remember. Every round uses your ${WORDS.length} ${LV[state.vlv]} words, formal and informal, and anything you miss comes back at the end. <button class="linkbtn" type="button" data-go="words">Change level</button></p></header>
  <button class="hero-card" type="button" data-go="flash">
    <span><span class="tag">${due?due+" due now":"Up to date"}</span><h2>Word cards</h2><p>Spaced review: each word comes back just before you'd forget it. Start here every day.</p></span>
    <span class="btn">${due?"Review "+due+(due===1?" card":" cards"):"Review anyway"}</span>
  </button>
  <h2 class="sec">Remember the meaning</h2>
  <div class="cards">${card("quiz")}${card("listen")}${card("simopp")}</div>
  <h2 class="sec">Use the word correctly</h2>
  <div class="cards">${card("coll")}${card("forms")}${card("ladder")}
    <button class="card" type="button" data-go="order"><h3>Put words in order</h3><p>Rebuild a sentence word by word to see how the word sits in it.</p><span class="meta2"><span>About 4 min</span></span></button></div>
  <h2 class="sec">Bring it together</h2>
  <div class="cards">${card("mixed")}
    <button class="card labcard" type="button" data-go="lab"><h3>Tenses</h3><p>Explore all 12 tenses, build sentences and play do / does games. Shares XP with Grammar.</p><span class="meta2"><span>${lab.xp} XP</span><span>${esc(level().name)}</span></span></button>
    <button class="card labcard" type="button" id="toVerbs"><h3>Irregular verbs</h3><p>Over 160 verbs from A1 to C2 and eight ways to practise them: sort, spot, match, fill, fix and a 60-second blitz.</p><span class="meta2"><span>Levels A1–C2</span><span>${Object.values(lab.vstat||{}).filter(x=>x[0]>=3&&x[0]/x[1]>=.8).length} mastered</span></span></button></div>`;
  $$("[data-ex]").forEach(b=>b.onclick=()=>startRound(b.dataset.ex));
  $("#toVerbs").onclick=()=>go("verbs");
}

/* ---------- Round engine (shared by all auto-checked exercises) ---------- */
const distract = (a,n=3) => shuffle(ALL.filter(x=>x!==a)).slice(0,n);
const GEN = {
  quiz: ids => QUIZ.filter(q=>ids.includes(q.w)).map(q=>({type:"mc",w:q.w,k:q.k,q:q.q,a:q.a,opts:q.o?q.o.slice():shuffle([q.a,...distract(q.a)]),why:q.why})),
  coll: ids => COLL.filter(c=>ids.includes(c.w)).map(c=>({type:"mc",w:c.w,k:"Word partners",q:c.s,a:c.a,opts:shuffle(c.o),why:c.why})),
  listen: ids => ids.flatMap(id=>{ const w=W[id]; return [w.ex,w.ex2].map(s=>{ const b=blankOut(s,w); return b && {type:"type",w:id,k:"Listen and type",q:b.txt,a:[b.ans],say:s,why:s,hint:w.def}; }).filter(Boolean); }),
  simopp: ids => ids.flatMap(id=>{ const w=W[id]; return [...w.syn.map(x=>[x,"Similar"]),...w.opp.map(x=>[x,"Opposite"])].map(([x,r])=>({type:"mc",w:id,k:"Similar or opposite?",q:`Is “${x}” similar or opposite in meaning to “${w.word}”?`,a:r,opts:["Similar","Opposite"],fixed:true,why:`${cap(x)} is ${r==="Similar"?"close in meaning to":"the opposite of"} ${w.word}.`})); }),
  forms: ids => FORMS.filter(f=>ids.includes(f.w)).map(f=>({type:"type",w:f.w,k:"Word forms",q:f.s,a:f.a,hint:`Change <em>${esc(f.base)}</em> so it fits the gap.`,hintHTML:true,why:`The answer is “${f.a[0]}”.`})),
  ladder: ids => ids.flatMap(id=>(LADDERS[id]||[]).map(r=>({type:"type",w:id,k:"Tense ladder · "+r.t,q:r.s,a:r.a,hint:`Time clue: <b>${esc(r.m)}</b>`,hintHTML:true,tip:r.tip,why:r.tip})))
};
GEN.mixed = ids => { const parts=["quiz","coll","simopp","forms",...(canSpeak?["listen"]:[]),"ladder"]; return shuffle(parts.flatMap(p=>shuffle(GEN[p](ids)).slice(0,3))); };
GEN.word = ids => { const parts=["quiz","coll","simopp","forms",...(canSpeak?["listen"]:[]),"ladder"]; return shuffle(parts.flatMap(p=>shuffle(GEN[p](ids)).slice(0,2))); };
const LIMIT = {quiz:12,coll:10,listen:8,simopp:12,forms:10,ladder:8,mixed:12,word:10};
const hasQ=new Set(QUIZ.map(q=>q.w)), hasC=new Set(COLL.map(c=>c.w));
const defTxt=w=>{ const t=w.def.replace(/\.$/,""); return t.charAt(0).toLowerCase()+t.slice(1); };
const isLevelWord=x=>ALL.some(a=>a.toLowerCase()===x.toLowerCase());
function distractFor(w,n=3){ const bad=new Set([w.word,...w.syn,...w.opp].map(x=>x.toLowerCase())); return shuffle(ALL.filter(x=>!bad.has(x.toLowerCase()))).slice(0,n); }
const REGWHY={formal:"Use it in emails, essays, at work and in official situations.",informal:"Use it with friends, in messages and in relaxed conversation."};
function autoQuiz(id){ const w=W[id]; const out=[]; const mc=(k,q,why)=>({type:"mc",w:id,k,q,a:w.word,opts:shuffle([w.word,...distractFor(w)]),why});
  out.push({type:"mc",w:id,k:"Formal or informal?",q:`Is “${w.word}” formal or informal?`,a:cap(w.reg),opts:["Formal","Informal"],fixed:true,why:`${cap(w.word)} is ${w.reg}. ${REGWHY[w.reg]}`});
  if(hasQ.has(id)) return out;
  out.push(mc("Definition",`Which ${w.reg} word or phrase means “${defTxt(w)}”?`,`${cap(w.word)}: ${w.def}`));
  const sy=w.syn.find(x=>!isLevelWord(x)); if(sy) out.push(mc("Synonyms",`Which word or phrase is closest in meaning to “${sy}”?`,`${cap(w.word)} and ${sy} mean nearly the same.`));
  const op=w.opp.find(x=>!isLevelWord(x)); if(op) out.push(mc("Opposites",`Which word or phrase is the opposite of “${op}”?`,`${cap(op)} is the opposite of ${w.word}.`));
  const bl=blankOut(w.ex2,w); if(bl && bl.ans.toLowerCase()===w.word.toLowerCase()) out.push(mc("In context",bl.txt,w.ex2));
  return out; }
function autoColl(id){ const w=W[id]; return w.coll.map(c=>{ const m=c.match(w.stem); if(!m||m[0].toLowerCase()!==w.word.toLowerCase()) return null;
  return {type:"mc",w:id,k:"Word partners",q:c.replace(m[0],"____"),a:w.word,opts:shuffle([w.word,...distractFor(w)]),why:`The usual pattern is “${c}”.`}; }).filter(Boolean); }
const _quiz=GEN.quiz, _coll=GEN.coll;
GEN.quiz = ids => [..._quiz(ids), ...ids.flatMap(autoQuiz)];
GEN.coll = ids => [..._coll(ids), ...ids.filter(id=>!hasC.has(id)).flatMap(autoColl)];

/* Take items round-robin across words (least practised first), so no word repeats more than twice in one round */
function spreadItems(all, limit){
  const by={}; shuffle(all).forEach(it=>{ (by[it.w]=by[it.w]||[]).push(it); });
  const words=shuffle(Object.keys(by)).sort((a,b)=>((state.stats[a]||{a:0}).a)-((state.stats[b]||{a:0}).a));
  const out=[]; for(let pass=0; pass<2 && out.length<limit; pass++){ const layer=[]; words.forEach(w=>{ if(by[w][pass]) layer.push(by[w][pass]); }); out.push(...shuffle(layer).slice(0,limit-out.length)); }
  return out; }
let round = null;
function startRound(kind, focus, planStep){
  const ids = focus ? [focus] : WORDS.map(w=>w.id);
  const items = focus ? shuffle(GEN[kind](ids)).slice(0, LIMIT[kind]||10) : spreadItems(GEN[kind](ids), LIMIT[kind]||10);
  round = {kind, focus, items, i:0, score:0, missed:[], tries:0, answered:false, planStep: planStep || (kind==="word"?"p":null)};
  if(focus) state.cur=focus;
  go("round");
}
function viewRound(){
  if(!round){ go("practise"); return; }
  if(round.i>=round.items.length) return roundEnd();
  const it=round.items[round.i]; const n=round.items.length;
  const title = round.kind==="word" ? `Practise “${W[round.focus].word}”` : EX[round.kind].t;
  $("#view").innerHTML = `
  ${backBtn(round.kind==="word"?"word":"practise", round.kind==="word"?W[round.focus].word:"Practise")}
  <header class="pagehead tight"><h1>${esc(title)}</h1></header>
  <div class="panel" id="rpanel">
    <div class="qtop"><span>Question ${round.i+1} of ${n}</span><span>${round.score} right</span></div>
    <div class="bar" role="progressbar" aria-label="Round progress" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${round.i}"><i style="width:${round.i/n*100}%"></i></div>
    <p class="qkind">${esc(it.k)}</p>
    ${it.say?`<div class="row" style="margin:0 0 14px"><button class="btn" type="button" id="play">${ico("sound")} Play sentence</button><button class="btn ghost" type="button" id="slow">Play slowly</button></div>`:""}
    <p class="qtext">${esc(it.q).replace("____",'<span class="gap" aria-label="blank">_____</span>')}</p>
    ${it.type==="mc"
      ? `<div class="opts ${it.opts.length===2?"two":""}">${it.opts.map((o,j)=>`<button class="opt" type="button" data-o="${esc(o)}"><kbd>${j+1}</kbd>${esc(o)}</button>`).join("")}</div>`
      : `<div class="inrow"><label class="sr" for="rin">Your answer</label><input class="tin" id="rin" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type your answer"><button class="btn" type="button" id="rchk">Check</button></div>
         ${it.hint?`<p class="hintline">${it.hintHTML?it.hint:`<button class="linkbtn" type="button" id="hintb">Need a hint?</button> <span id="hintt" hidden>${esc(it.hint)}</span>`}</p>`:""}`}
    <div id="fb" aria-live="polite"></div>
  </div>`;
  round.answered=false; round.tries=0;
  if(it.say){ $("#play").onclick=()=>speak(it.say); $("#slow").onclick=()=>speakSlow(it.say); }
  if(it.type==="mc") $$(".opt").forEach(b=>b.onclick=()=>answerMC(b.dataset.o));
  else { const inp=$("#rin"); inp.focus({preventScroll:true}); $("#rchk").onclick=answerTyped; inp.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); answerTyped(); } });
    const hb=$("#hintb"); if(hb) hb.onclick=()=>{ $("#hintt").hidden=false; hb.hidden=true; }; }
}
function feedback(ok, html, last){
  $("#fb").innerHTML = `<div class="feedback ${ok?"ok":"no"}"><strong>${ok?"✓ Right.":"✕ Not quite."}</strong> ${html}</div>
    ${last?`<div class="row"><button class="btn" type="button" id="nextQ">${round.i===round.items.length-1?"See results":"Next question"} →</button></div>`:""}`;
  if(last){ $("#nextQ").onclick=()=>{ round.i++; viewRound(); }; $("#nextQ").focus({preventScroll:true}); }
}
function answerMC(choice){
  if(round.answered) return; round.answered=true;
  const it=round.items[round.i]; const ok=choice===it.a;
  if(ok) round.score++; else round.missed.push(it);
  record(it.w, ok); if(round.kind!=="word") srsTouch(it.w, ok);
  $$(".opt").forEach(b=>{ b.disabled=true; if(b.dataset.o===it.a) b.classList.add("right"); else if(b.dataset.o===choice) b.classList.add("wrong"); });
  if(ok) burst($(".opt.right"),5);
  feedback(ok, esc(it.why), true);
}
function answerTyped(){
  const it=round.items[round.i]; const inp=$("#rin"); if(round.answered||!inp.value.trim()) return;
  const ok=matches(inp.value, it.a); round.tries++;
  inp.classList.toggle("right",ok); inp.classList.toggle("wrong",!ok);
  if(round.tries===1) record(it.w, ok);
  if(ok){ round.answered=true; inp.readOnly=true; if(round.tries===1) round.score++; else round.missed.push(it); burst(inp,5);
    feedback(true, it.say? `You heard: <em>${esc(it.say)}</em>` : esc(it.why), true); return; }
  if(round.tries===1){ feedback(false, `Try once more.${it.say?" Play it again slowly.":""}${it.tip?" "+esc(it.tip):""}`, false); inp.select(); return; }
  round.answered=true; round.missed.push(it); inp.readOnly=true;
  feedback(false, `The answer is <b>${esc(it.a[0])}</b>. ${it.say?`<em>${esc(it.say)}</em>`:esc(it.why)}`, true);
}
function roundEnd(){ if(typeof startMark==="function") startMark("round");
  const m=round.missed; const n=round.items.length; const words=[...new Set(m.map(q=>W[q.w].word))];
  if(round.planStep) planDone(round.planStep);
  const pn = round.planStep ? planNextHTML() : "";
  $("#view").innerHTML = `
  ${backBtn("practise","Practise")}
  <header class="pagehead tight"><h1>Round finished</h1></header>
  ${pn}
  <div class="panel endpanel">
    ${bgPerfect(round, n>0&&round.score===n)}${psoOn()?psoEnd(n?round.score/n*100:0):""}
    <p class="score">${round.score} <span>/ ${n}</span></p>
    <p class="lede">${m.length? `Look again at ${esc(listJoin(words))}. Retrying straight away helps it stick.` : "Every answer right first time."}</p>
    <div class="row">
      ${m.length?`<button class="btn" type="button" id="retry">Retry the ${m.length} I missed</button>`:""}
      <button class="btn ${m.length?"ghost":""}" type="button" id="again">New round</button>
      <button class="btn ghost" type="button" data-go="use">Now use the words</button>
    </div>
  </div>`;
  if(m.length) $("#retry").onclick=()=>{ round={...round, items:shuffle(m), i:0, score:0, missed:[], planStep:null}; viewRound(); };
  $("#again").onclick=()=>startRound(round.kind, round.focus);
  if(!m.length) burst($(".score"),10);
}
/* A right answer in a round also nudges a word toward its next review a little */
function srsTouch(id, ok){ if(!ok && box(id)>1){ state.srs[id]={b:box(id)-1, d:Date.now()}; save(); } }
document.addEventListener("keydown",e=>{
  if(route!=="round"||!round||e.target.matches("input,textarea")) return;
  if(round.answered && e.key==="Enter"){ const n=$("#nextQ"); if(n){ e.preventDefault(); n.click(); } return; }
  const k=parseInt(e.key,10); const btns=$$(".opt"); if(!round.answered && k>=1&&k<=btns.length) btns[k-1].click();
});

/* ---------- Word cards (spaced review) ---------- */
let flash=null, flashPlan=false;
function newFlash(){ let q=WORDS.filter(w=>isDue(w.id)).map(w=>w.id).concat(oldDue()); const extra=!q.length; if(extra) q=WORDS.map(w=>w.id);
  flash={q:shuffle(q), i:0, shown:false, right:0, total:0, again:{}, extra}; }
function viewFlash(){
  if(!flash) newFlash();
  if(flash.i>=flash.q.length) return flashEnd();
  const id=flash.q[flash.i]; const w=W[id]; const recallMode = box(id)>=2;
  const n=flash.q.length;
  $("#view").innerHTML = `
  ${backBtn("practise","Practise")}
  <header class="pagehead tight"><h1>Word cards</h1>
    <p class="lede">${recallMode?"Read the meaning and type the word.":"Look at the word and say its meaning in your head. Then turn the card."}</p></header>
  ${w.old?`<p class="oldtag">Back for review · from ${esc(w.set||"a previous month")}</p>`:""}
  <div class="qtop"><span>Card ${flash.i+1} of ${n}</span><span>${segs(box(id),5,"Memory "+box(id)+" of 5")}</span></div>
  <div class="bar"><i style="width:${flash.i/n*100}%"></i></div>
  <div class="fcard ${flash.shown?"back":""}" id="fcard">
    ${recallMode ? `
      <p class="qkind">What's the word?</p>
      <p class="fdef">${esc(w.def)}</p>
      <p class="hintline">${esc(w.pos)} · ${w.word.includes(" ")?w.word.split(" ").length+" words":w.syl.length+(w.syl.length===1?" syllable":" syllables")} · <button class="linkbtn" type="button" id="fl">Show first letter</button> <b id="flt" hidden>${esc(w.word[0])}…</b></p>
      <div class="inrow"><label class="sr" for="fin">The word</label><input class="tin" id="fin" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type the word"><button class="btn" type="button" id="fchk">Check</button></div>
      <div id="ffb" aria-live="polite"></div>`
    : `
      <p class="qkind">Do you know what it means?</p>
      <p class="fword">${sylHTML(w)}</p>
      <div class="row" style="margin-top:4px"><button class="iconbtn" type="button" id="fsay">${ico("sound")}<span>Hear it</span></button></div>
      ${flash.shown?`<div class="fback"><p class="fdef">${esc(w.def)}</p><p class="example">${esc(w.ex)}</p>
        <p class="lede" style="margin:14px 0 8px">Did you know it?</p>
        <div class="row" style="margin:0"><button class="btn" type="button" id="yes">✓ I knew it</button><button class="btn ghost" type="button" id="no">✕ Not yet</button></div></div>`
      : `<div class="row"><button class="btn" type="button" id="turn">Turn the card</button></div>`}`}
  </div>`;
  const next=ok=>{ flash.total++; if(ok) flash.right++; srsAnswer(id, ok); if(!ok && !flash.again[id]){ flash.again[id]=1; flash.q.push(id); } flash.i++; flash.shown=false; viewFlash(); };
  if(recallMode){
    const inp=$("#fin"); inp.focus({preventScroll:true});
    $("#fl").onclick=()=>{ $("#flt").hidden=false; $("#fl").hidden=true; };
    let checked=false;
    const chk=()=>{ if(checked){ next(inp.dataset.ok==="1"); return; } if(!inp.value.trim()) return; checked=true;
      const ok=norm(inp.value)===w.word.toLowerCase(); inp.dataset.ok=ok?"1":"0"; record(id, ok); inp.readOnly=true; inp.classList.add(ok?"right":"wrong");
      $("#ffb").innerHTML=`<div class="feedback ${ok?"ok":"no"}"><strong>${ok?"✓ Right.":"✕ Not quite."}</strong> It's <b>${esc(w.word)}</b>. <em>${esc(w.ex)}</em></div><div class="row"><button class="btn" type="button" id="fnext">Next card →</button></div>`;
      if(ok) burst(inp,6); $("#fnext").onclick=()=>next(ok); $("#fnext").focus({preventScroll:true}); speak(w.word); };
    $("#fchk").onclick=chk; inp.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); chk(); } });
  } else {
    $("#fsay").onclick=()=>speak(w.word);
    if(flash.shown){ $("#yes").onclick=()=>{ burst($("#yes"),5); next(true); }; $("#no").onclick=()=>next(false); $("#yes").focus({preventScroll:true}); }
    else { $("#turn").onclick=()=>{ flash.shown=true; viewFlash(); }; }
  }
}
function flashEnd(){
  const nd=nextDue(); const f=flash; flash=null; planDone("r"); const pn=planNextHTML();
  $("#view").innerHTML = `
  ${backBtn("practise","Practise")}
  <header class="pagehead tight"><h1>Cards done</h1></header>
  ${pn}
  <div class="panel endpanel">
    ${bgPerfect(f, f.total>0&&f.right===f.total)}${psoOn()?psoEnd(f.total?f.right/f.total*100:100):""}
    <p class="score">${f.right} <span>/ ${f.total}</span></p>
    <p class="lede">${nd?`Your next card is due ${new Date(nd).toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long"})}. Words you remember come back less often.`:"Come back tomorrow for your next review."}</p>
    <div class="row"><button class="btn${pn?" ghost":""}" type="button" data-go="today">Back to today</button><button class="btn ghost" type="button" id="toMix">Do a mixed review</button></div>
  </div>`;
  $("#toMix").onclick=()=>startRound("mixed");
  burst($(".score"),10);
}

/* ---------- Put words in order ---------- */
let scr = { i:0, built:[], bank:[], solved:{} }, scrCache=null;
function SCR(){ if(scrCache&&scrCache.lv===state.vlv) return scrCache.list;
  const list=WORDS.map(w=>SCRAMBLE.find(x=>x.w===w.id) || (()=>{ const m=w.ex.match(/^(.*?)([.!?])$/); if(!m) return null; let t=m[1];
    if(/^[A-Z][a-z]/.test(t) && !/^I\b/.test(t)) t=t.charAt(0).toLowerCase()+t.slice(1); return {w:w.id,t,p:m[2],alt:[]}; })()).filter(Boolean);
  scrCache={lv:state.vlv,list}; return list; }
function loadScramble(i){ const s=SCR()[i]; scr.i=i; scr.built=[]; scr.bank = shuffle(s.t.split(" ").map((t,k)=>({t,k}))); }
function viewOrder(){
  if(!scr.bank.length && !scr.built.length) loadScramble(Math.max(0,SCR().findIndex(x=>x.w===state.cur)));
  const s=SCR()[scr.i];
  $("#view").innerHTML = `
  ${backBtn("practise","Practise")}
  <header class="pagehead tight"><h1>Put words in order</h1><p class="lede">Tap the words in the right order. Tap a word in your sentence to send it back. The highlighted word is the one you're learning.</p></header>
  <div class="panel">
    <div class="steps" role="group" aria-label="Choose a sentence">${SCR().map((x,k)=>`<button type="button" data-k="${k}" class="${scr.solved[k]?'done':''}" aria-current="${k===scr.i}" aria-label="Sentence ${k+1}, ${x.w}${scr.solved[k]?", solved":""}">${scr.solved[k]?"✓":k+1}</button>`).join("")}</div>
    <div class="slot" id="slot" aria-label="Your sentence">${scr.built.length? scr.built.map((c,k)=>`<button class="chip ${c.t===s.w?'target':''}" type="button" data-b="${k}">${esc(k===0?c.t[0].toUpperCase()+c.t.slice(1):c.t)}</button>`).join("")+`<span class="punct">${s.p}</span>` : '<span class="slothint">Your sentence appears here.</span>'}</div>
    <div class="bank" id="bank">${scr.bank.map((c,k)=>`<button class="chip ${c.t===s.w?'target':''}" type="button" data-k="${k}">${esc(c.t)}</button>`).join("")}</div>
    <div class="row">
      <button class="btn" type="button" id="scrCheck" ${scr.bank.length?"disabled":""}>Check order</button>
      <button class="btn ghost" type="button" id="scrReset">Start again</button>
      <span class="mark" id="scrMark" aria-live="polite"></span>
    </div>
  </div>`;
  $$(".steps button").forEach(b=>b.onclick=()=>{ loadScramble(+b.dataset.k); state.cur=SCR()[+b.dataset.k].w; save(); viewOrder(); });
  $("#bank").onclick=e=>{ const b=e.target.closest(".chip"); if(!b) return; scr.built.push(scr.bank.splice(+b.dataset.k,1)[0]); viewOrder(); };
  $("#slot").onclick=e=>{ const b=e.target.closest(".chip"); if(!b) return; scr.bank.push(scr.built.splice(+b.dataset.b,1)[0]); viewOrder(); };
  $("#scrReset").onclick=()=>{ loadScramble(scr.i); viewOrder(); };
  $("#scrCheck").onclick=()=>{
    const got=scr.built.map(c=>c.t).join(" "); const ok=[s.t,...s.alt].includes(got);
    $("#slot").classList.add(ok?"right":"wrong");
    $("#scrMark").className="mark "+(ok?"ok":"no");
    $("#scrMark").textContent = ok? "✓ Correct order." : "✕ Not yet. Tap a word in your sentence to send it back.";
    record(s.w, ok);
    if(ok){ scr.solved[scr.i]=true; burst($("#slot"),8); const nxt=SCR().findIndex((x,k)=>!scr.solved[k]);
      if(nxt>-1){ const b=document.createElement("button"); b.className="btn"; b.type="button"; b.textContent="Next sentence →"; b.onclick=()=>{ loadScramble(nxt); state.cur=SCR()[nxt].w; save(); viewOrder(); }; $("#scrMark").after(b); b.focus({preventScroll:true}); } }
  };
}

/* ---------- Use it ---------- */


const aiBtn = id => `<button class="btn ghost needs-ai" type="button" id="${id}" ${sample?"":"hidden"}>Ask Claude for feedback</button>`;


/* Answer questions */
let askState=null, askFocus=null, askPlan=false;



/* Sentence studio */
let studio={w:null,p:0,tense:""};


/* Upgrade the sentence */
let up={order:null,i:0};


/* Story builder */
let story=null;



/* Speak for a minute */
let spk={w:null,p:0,left:60,timer:null,done:false};



/* ---------- Sentence checks ---------- */


/* ---------- Progress ---------- */
let resetAsk=false;
function viewProgress(){
  const tSet=new Set(VSET.archived?[]:todayIds()), L=state.vlv;
  const practised = id => { const s=state.stats[id]; return (s && s.a>0) || !!state.srs[id] || (state.uses[id]||0)>0 || !!state.known[id]; };
  const pw = Object.values(W).filter(w=>w.lv===L && (tSet.has(w.id) || practised(w.id)))
    .sort((a,b)=>(tSet.has(b.id)-tSet.has(a.id)) || ((state.stats[b.id]||{a:0}).a-(state.stats[a.id]||{a:0}).a));
  pw.forEach(w=>{ if(!state.stats[w.id]) state.stats[w.id]={c:0,a:0}; if(typeof state.uses[w.id]!=="number") state.uses[w.id]=0; });
  const rows = pw.map(w=>{ const s=state.stats[w.id]; const pct = acc(w.id);
    const advice = s.a<3? "Practise more to get a score" : pct>=80? (state.uses[w.id]<USE_GOAL?"Strong. Now use it more":"Strong") : pct>=50? "Getting there" : "Study the word card again";
    return {w,s,pct,advice}; });
  const weakest = rows.filter(r=>r.s.a>=3).sort((a,b)=>a.pct-b.pct)[0];
  const thisW=isoWeek(new Date()); const cur=act.weeks[thisW]||{sec:0,ans:0,cor:0};
  const last4=[3,2,1,0].map(n=>{ const d=new Date(); d.setDate(d.getDate()-7*n); const k=isoWeek(d); return {k, x:act.weeks[k]||{sec:0}}; });
  const maxSec=Math.max(60,...last4.map(o=>o.x.sec));
  $("#view").innerHTML = `
  <header class="pagehead"><h1>Progress</h1>
    <p class="lede">Everything is saved in this browser. First tries count; answers you reveal don't.</p></header>
  <div class="panel">
    <h2 class="h3">${act.nick?`${esc(act.nick)}, this week`:"This week"}</h2>
    <div class="stats">
      <div class="stat"><b>${Math.round(cur.sec/60)}</b><span>minutes practised</span></div>
      <div class="stat"><b>${cur.ans}</b><span>answers</span></div>
      <div class="stat"><b>${cur.ans?Math.round(cur.cor/cur.ans*100)+"%":"–"}</b><span>right first time</span></div>
      <div class="stat"><b>${streak()}</b><span>days in a row</span></div>
      <div class="stat"><b>${lab.xp}</b><span>Grammar XP</span></div>
    </div>
    <div class="weeks" role="img" aria-label="Minutes practised in the last four weeks: ${last4.map(o=>Math.round(o.x.sec/60)).join(", ")}">${last4.map((o,i)=>`<div><span>${Math.round(o.x.sec/60)}</span><i style="height:${Math.max(3,o.x.sec/maxSec*60)}px"></i><span>${i===3?"This week":o.k.slice(-3)}</span></div>`).join("")}</div>
  </div>
  ${typeof AUTH!=="undefined" && AUTH && me ? `<div class="panel"><h2 class="h3">Your teacher sees your progress</h2><p style="margin:0;max-width:62ch">You're signed in as <b>${esc(me.email||me.nick)}</b>, so your progress, words, video answers and writing are saved to your account and your teacher sees them automatically. No code needed.</p></div>` : ""}
  <div class="panel" ${typeof AUTH!=="undefined" && AUTH && me ? "hidden" : ""}>
    <h2 class="h3">Send your progress to your teacher</h2>
    <p style="margin:0 0 12px;max-width:62ch">Make a code, copy it, and send it to your teacher by message or email. A new code always includes everything so far, including your video answers and writing, so you can send one every week.</p>
    <div class="row" style="margin-top:0"><button class="btn" type="button" id="mkCode">Make my progress code</button></div>
    <div id="codeOut" hidden style="margin-top:14px">
      <label class="sr" for="codeTxt">Your progress code</label>
      <textarea class="codebox" id="codeTxt" readonly></textarea>
      <div class="row" style="margin-top:10px"><button class="btn" type="button" id="cpCode">Copy code</button><span class="mark" id="cpMark" aria-live="polite"></span></div>
    </div>
  </div>
  <div class="panel">
    <h2 class="h3">Word by word · ${LV[state.vlv]}</h2>
    <p style="margin:-4px 0 10px;color:var(--muted)">Today's words and every ${LV[state.vlv]} word you've practised.</p>
    <div class="tablewrap"><table>
      <thead><tr><th>Word</th><th>Memory</th><th>Right first time</th><th>Used</th><th>Next step</th></tr></thead>
      <tbody>${rows.map(r=>`<tr><td class="w"><button class="linkbtn wl" type="button" data-go="word" data-w="${r.w.id}">${esc(r.w.word)}</button>${tSet.has(r.w.id)?' <span class="tag">today</span>':''}${state.known[r.w.id]?' <span class="tag soft">known</span>':''}</td>
        <td>${segs(box(r.w.id))}</td>
        <td><span class="meter"><i style="width:${r.pct||0}%"></i></span>${r.pct===null?"–":r.pct+"%"} <small class="dim">(${r.s.c}/${r.s.a})</small></td>
        <td>${state.uses[r.w.id]}/${USE_GOAL}</td><td>${esc(r.advice)}</td></tr>`).join("")}</tbody>
    </table></div>
    <div class="row">
      ${weakest?`<button class="btn" type="button" id="practiseWeak">Practise “${esc(weakest.w.word)}”</button>`:""}
      ${resetAsk?`<span class="confirm">Delete all word progress on this device? <button class="btn danger" type="button" id="resetYes">Yes, reset</button><button class="btn ghost" type="button" id="resetNo">Keep it</button></span>`
        :`<button class="btn ghost" type="button" id="reset">Reset word progress</button>`}
    </div>
  </div>`;
  $("#mkCode").onclick=()=>{ if(!act.nick){ openGate(); return; } $("#codeTxt").value=progressCode(); $("#codeOut").hidden=false; $("#cpMark").textContent=""; };
  $("#cpCode").onclick=()=>{ const t=$("#codeTxt"); const done=()=>{ $("#cpMark").className="mark ok"; $("#cpMark").textContent="✓ Copied. Now paste it in a message to your teacher."; };
    const manual=()=>{ t.select(); $("#cpMark").className="mark"; $("#cpMark").textContent="Press Ctrl+C (or long-press) to copy."; };
    try{ navigator.clipboard.writeText(t.value).then(done,manual); }catch(e){ manual(); } };
  if(weakest) $("#practiseWeak").onclick=()=>startRound("word", weakest.w.id);
  if(resetAsk){ $("#resetYes").onclick=()=>{ ALLW.forEach(w=>{ state.stats[w.id]={c:0,a:0}; state.uses[w.id]=0; }); state.known={}; state.srs={}; scr.solved={}; round=null; flash=null; resetAsk=false; save(); viewProgress(); };
    $("#resetNo").onclick=()=>{ resetAsk=false; viewProgress(); }; }
  else $("#reset").onclick=()=>{ resetAsk=true; viewProgress(); };
}

/* ---------- Display settings ---------- */
const DISP="vocab5-display";
let disp={theme:"",size:0};
try{ const d=JSON.parse(localStorage.getItem(DISP)||"null"); if(d) disp=Object.assign(disp,d); }catch(e){}
function applyDisp(){ const r=document.documentElement; if(disp.theme) r.dataset.theme=disp.theme; else delete r.dataset.theme;
  r.style.setProperty("--fs", ["100%","112.5%","125%"][disp.size]||"100%"); }
function paintDisp(){
  $("#dispBody").innerHTML = `
    <h2 class="mini">Colours</h2>
    <div class="seg3" role="radiogroup" aria-label="Colours">${[["","Match device"],["light","Light"],["dark","Dark"]].map(([v,l])=>`<button type="button" role="radio" data-th="${v}" aria-checked="${disp.theme===v}">${l}</button>`).join("")}</div>
    <h2 class="mini">Text size</h2>
    <div class="seg3" role="radiogroup" aria-label="Text size">${["Standard","Large","Larger"].map((l,i)=>`<button type="button" role="radio" data-sz="${i}" aria-checked="${disp.size===i}" style="font-size:${[1,1.12,1.25][i]}rem">${l}</button>`).join("")}</div>
    <h2 class="mini">Help language · Język pomocy · Limba de ajutor</h2>
    ${langSeg()}
    <p class="hintline" style="margin:6px 0 0">Menus and short how-to notes appear in this language. Exercises stay in English.</p>
    <h2 class="mini">Psotek's comments</h2>
    <div class="seg3" role="radiogroup" aria-label="Psotek's comments">${[[true,"On"],[false,"Off"]].map(([v,l])=>`<button type="button" role="radio" data-pso="${v}" aria-checked="${psoOn()===v}">${l}</button>`).join("")}</div>
    <h2 class="mini">Menu</h2>
    <div class="seg3" role="radiogroup" aria-label="Menu">${[["simple","Simple"],["full","Full"]].map(([v,l])=>`<button type="button" role="radio" data-menu="${v}" aria-checked="${(simpleMenu()?"simple":"full")===v}">${l}</button>`).join("")}</div>
    <p class="hintline" style="margin:6px 0 0">Simple shows Today, Words, Tenses and Video; the rest is under More.</p>
    ${typeof AUTH!=="undefined" && AUTH && me ? accountHTML() : ""}
    <h2 class="mini">Name</h2>
    <p class="whoami" style="margin:0">${act.nick?`Practising as <b>${esc(act.nick)}</b>`:"No nickname yet."} <button class="linkbtn" type="button" id="dNick">Change</button></p>`;
  $$("[data-th]").forEach(b=>b.onclick=()=>{ disp.theme=b.dataset.th; try{ localStorage.setItem(DISP,JSON.stringify(disp)); }catch(e){} applyDisp(); paintDisp(); });
  $$("[data-sz]").forEach(b=>b.onclick=()=>{ disp.size=+b.dataset.sz; try{ localStorage.setItem(DISP,JSON.stringify(disp)); }catch(e){} applyDisp(); paintDisp(); });
  $$("[data-pso]").forEach(b=>b.onclick=()=>{ disp.pso=b.dataset.pso==="true"; try{ localStorage.setItem(DISP,JSON.stringify(disp)); }catch(e){} paintDisp(); if(route==="today") render(); });
  $$("[data-menu]").forEach(b=>b.onclick=()=>{ try{ localStorage.setItem(MENU_KEY,b.dataset.menu); }catch(e){} paintDisp(); paintNav(); });
  $("#dNick").onclick=()=>{ $("#disp").hidden=true; openGate(); };
  if(typeof wireAccount==="function") wireAccount();
}
function openDisp(){ paintDisp(); $("#disp").hidden=false; setTimeout(()=>{ const b=$("#disp [aria-checked=true]"); if(b) b.focus(); },30); }
$$("[data-disp]").forEach(b=>b.addEventListener("click",openDisp));
$("#dispClose").addEventListener("click",()=>{ $("#disp").hidden=true; });
$("#disp").addEventListener("click",e=>{ if(e.target.id==="disp") $("#disp").hidden=true; });
document.addEventListener("keydown",e=>{ if(e.key==="Escape" && !$("#disp").hidden) $("#disp").hidden=true; });
/* ---------- Help language (Polski / Română) ----------
   Menus and short how-to boxes in the student's language; word meanings behind a tap; exercises stay in English. */
const L1 = {
  pl: {
    name:"Polski", flag:"PL",
    nav:{today:"Dziś",sounds:"Wymowa",words:"Słówka",lab:"Czasy",grammar:"Gramatyka",exam:"Egzaminy",verbs:"Czasowniki nieregularne",video:"Wideo",practise:"Ćwiczenia",use:"Użyj słów",progress:"Postępy",archive:"Poprzednie słówka",badges:"Odznaki",game:"Gra",more:"Więcej"},
    short:{today:"Dziś",sounds:"Wymowa",words:"Słówka",lab:"Czasy",grammar:"Gramat.",verbs:"Czasown.",video:"Wideo",practise:"Ćwicz",use:"Użyj",more:"Więcej"},
    ui:{help:"Po polsku: jak to działa",show:"Pokaż po polsku",hide:"Ukryj tłumaczenie",ff:"Fałszywy przyjaciel",tip:"Najpierw spróbuj zrozumieć angielską definicję. Tłumaczenie to pomoc, nie skrót."},
    help:{
      today:"To twój plan na dziś: trzy krótkie kroki, około 10 minut. Rób je po kolei. Powtórka kart, krótka runda ćwiczeń i jedno własne zdanie z nowym słowem.",
      words:"Wybierz poziom (A1–C2). Na każdym poziomie jest 10 słów formalnych i 10 nieformalnych. Kliknij słowo, żeby zobaczyć znaczenie, przykłady i tłumaczenie.",
      word:"Tu poznajesz jedno słowo: znaczenie, wymowę, typowe połączenia i przykłady. Kliknij „Pokaż po polsku”, jeśli angielska definicja jest niejasna.",
      practise:"Wybierz rodzaj ćwiczenia. Każda runda używa słów z twojego poziomu, a błędne odpowiedzi wracają na końcu.",
      flash:"Karty do powtórki. Spójrz na słowo, przypomnij sobie znaczenie, odkryj kartę i uczciwie oceń, czy pamiętałeś. Trudne słowa wrócą szybciej.",
      order:"Ułóż wyrazy we właściwej kolejności, żeby powstało poprawne angielskie zdanie. Klikaj wyrazy po kolei.",
      "round:quiz":"Wybierz słowo, które pasuje do definicji, przeciwieństwa albo zdania.",
      "round:coll":"Wybierz słowo lub przyimek, który naturalnie łączy się z danym słowem (np. depend on).",
      "round:listen":"Posłuchaj zdania i wpisz brakujące słowo. Ćwiczysz słuch i pisownię.",
      "round:simopp":"Zdecyduj szybko: czy to słowo ma podobne, czy przeciwne znaczenie?",
      "round:forms":"Zmień słowo w inną formę (np. rzeczownik lub przysłówek), żeby pasowało do zdania.",
      "round:ladder":"Wstaw czasownik w odpowiednim czasie gramatycznym.",
      "round:mixed":"Wszystkiego po trochu, w losowej kolejności. Najlepszy sposób na zakończenie nauki.",
      "round:word":"Krótka runda z jednym słowem: znaczenie, połączenia, słuchanie i formy.",
      use:"Tu używasz słów sam: odpowiadasz na pytania, piszesz zdania, krótkie historie albo mówisz na głos. Prawdziwa nauka dzieje się, gdy sam tworzysz zdania.",
      "use:ask":"Odpowiedz na pytanie pełnym zdaniem i użyj podanego słowa. Sprawdzimy, czy słowo jest użyte, i podpowiemy, co poprawić.",
      "use:studio":"Napisz zdanie ze słowem w wybranym czasie gramatycznym. Lista kontrolna pokaże, co już jest dobrze.",
      "use:upgrade":"Zmień styl zdania: z nieformalnego na formalny albo odwrotnie, używając podanego słowa.",
      "use:story":"Napisz krótką historię (co najmniej 3 zdania) z trzema podanymi słowami.",
      "use:speak":"Powiedz odpowiedź na głos, a potem ją zapisz. Mówienie pomaga zapamiętać słowa.",
      "lab:map":"Mapa wszystkich 12 czasów. Kliknij czas, żeby zobaczyć, kiedy go używamy, i przykłady.",
      "lab:machine":"Zbuduj dowolne zdanie: wybierz osobę, czas i typ zdania (twierdzące, przeczące, pytające) i zobacz, jak się zmienia.",
      "lab:hunt":"Gra w 10 rund: wybierz do, does, don't albo doesn't.",
      "lab:detective":"Przeczytaj zdanie i nazwij czas gramatyczny.",
      "lab:time":"Przenieś zdanie w czasie: zmień je na inny czas gramatyczny.",
      "lab:articles":"Przedimki a, an, the – albo brak przedimka. Po polsku ich nie ma, dlatego to najczęstszy błąd Polaków. Najpierw przeczytaj 7 zasad, potem ćwicz: wybierz przedimek, zdecyduj „a czy an” i popraw zdania z błędami.",
      "lab:modals":"Czasowniki modalne: must, have to, should, can, might… Każdy wyraża coś innego: obowiązek, radę, możliwość. Uwaga: mustn't = nie wolno, ale don't have to = nie trzeba.",
      "lab:cond":"Zdania warunkowe (if). Zero, pierwszy, drugi i trzeci tryb. Pamiętaj: po if nie używamy will ani would (If I have time…, nie If I will have…).",
      "lab:passive":"Strona bierna: be + trzecia forma czasownika (is made, was built). Używamy jej, gdy ważniejsze jest, co się stało, niż kto to zrobił.",
      "lab:questions":"Pytania po angielsku: szyk zdania i do/does/did. W polskim wystarczy intonacja, w angielskim potrzebny jest operator: Do you like…?, Where did you go?",
      "lab:patterns":"Po niektórych czasownikach jest -ing (enjoy doing), po innych to + bezokolicznik (decide to do). Trzeba się ich nauczyć – ćwicz tutaj.",
      "lab:preps":"Przyimki: in, on, at i inne. Często różnią się od polskich (na przystanku = at the bus stop). Ucz się ich w całych wyrażeniach.",
      "use:conv":"Rozmowy w prawdziwych sytuacjach. Przeczytaj, co mówi druga osoba, i wybierz najlepszą odpowiedź. Po każdym wyborze zobaczysz wyjaśnienie.",
      "use:write":"Pracownia pisania: e-mail, list formalny, rozprawka, artykuł – typy tekstów z matury. Najpierw plan i zwroty, potem pisz i sprawdź tekst.",
      "exam":"Zadania jak na maturze (słowotwórstwo, transformacje, jedno słowo do trzech zdań) i na Bacalaureat (mówienie). Sprawdzaj aktualne informacje na stronie CKE.",
      "video:read":"Tekst tygodnia. Przeczytaj artykuł, potem odpowiedz: prawda, fałsz czy brak informacji, pytania wyboru i słowa w kontekście. Na końcu napisz krótki tekst.",
      "verbs:table":"Tabela czasowników nieregularnych: forma podstawowa, Past Simple i Past Participle. Posłuchaj i powtarzaj.",
      "verbs:sort":"Zdecyduj, czy czasownik jest regularny (-ed), czy nieregularny.",
      "verbs:forms":"Wpisz trzy formy czasownika, np. go – went – gone.",
      "verbs:spot":"Znajdź w tekście wszystkie czasowniki nieregularne.",
      "verbs:fill":"Uzupełnij lukę właściwą formą czasownika.",
      "verbs:fix":"W zdaniu jest błąd w formie czasownika. Znajdź go i popraw.",
      "verbs:match":"Połącz pary: forma podstawowa i forma przeszła.",
      "verbs:blitz":"60 sekund: odpowiedz na jak najwięcej pytań o formy czasowników.",
      video:"Obejrzyj film tygodnia, odpowiedz na pytania, zapisz, co usłyszałeś, i napisz trzy krótkie streszczenia. Na końcu wyślij swój kod nauczycielowi.",
      progress:"Tu widzisz swoje postępy. Skopiuj kod postępów i wyślij go nauczycielowi, żeby zobaczył twoje wyniki i czas nauki.",
      badges:"Twoje odznaki. Ćwicz, a Psotek przyzna ci brąz, srebro i złoto. Jedna odznaka jest tajna.",archive:"Słówka z poprzednich miesięcy. Wybierz zestaw i kliknij „Practise these words”, żeby wszystkie ćwiczenia używały tych słów.",
      game:"Krótka przerwa: wybierz grę. Czas gry nie liczy się do czasu nauki.",
      sounds:"Wymowa: najpierw ucho, potem usta. „Which word?” – posłuchaj i wybierz słowo (ship czy sheep?). „Word stress” – wskaż akcentowaną sylabę. „Weak forms” – zaznacz słowa wymawiane słabo. „Say it” – powiedz słowo, a przeglądarka sprawdzi, co usłyszała."
    }
  },
  ro: {
    name:"Română", flag:"RO",
    nav:{today:"Astăzi",sounds:"Pronunție",words:"Vocabular",lab:"Timpuri",grammar:"Gramatică",exam:"Examene",verbs:"Verbe neregulate",video:"Video",practise:"Exerciții",use:"Folosește cuvintele",progress:"Progres",archive:"Vocabular anterior",badges:"Insigne",game:"Joc",more:"Mai mult"},
    short:{today:"Astăzi",sounds:"Sunete",words:"Cuvinte",lab:"Timpuri",grammar:"Gramatică",verbs:"Verbe",video:"Video",practise:"Exerciții",use:"Aplică",more:"Mai mult"},
    ui:{help:"În română: cum funcționează",show:"Arată în română",hide:"Ascunde traducerea",ff:"Prieten fals",tip:"Încearcă mai întâi să înțelegi definiția în engleză. Traducerea e un ajutor, nu o scurtătură."},
    help:{
      today:"Acesta este planul tău de azi: trei pași scurți, cam 10 minute. Fă-i în ordine: repetă cartonașele, o rundă scurtă de exerciții și o propoziție proprie cu un cuvânt nou.",
      words:"Alege nivelul (A1–C2). Fiecare nivel are 10 cuvinte formale și 10 informale. Apasă pe un cuvânt ca să vezi sensul, exemple și traducerea.",
      word:"Aici înveți un singur cuvânt: sensul, pronunția, combinații uzuale și exemple. Apasă „Arată în română” dacă definiția în engleză nu e clară.",
      practise:"Alege un tip de exercițiu. Fiecare rundă folosește cuvintele nivelului tău, iar răspunsurile greșite revin la final.",
      flash:"Cartonașe de recapitulare. Uită-te la cuvânt, amintește-ți sensul, întoarce cartonașul și spune sincer dacă l-ai știut. Cuvintele grele revin mai repede.",
      order:"Pune cuvintele în ordinea corectă ca să formezi o propoziție corectă în engleză. Apasă pe cuvinte pe rând.",
      "round:quiz":"Alege cuvântul potrivit pentru o definiție, un antonim sau o propoziție.",
      "round:coll":"Alege cuvântul sau prepoziția care se potrivește natural cu cuvântul dat (de ex. depend on).",
      "round:listen":"Ascultă propoziția și scrie cuvântul care lipsește. Exersezi auzul și ortografia.",
      "round:simopp":"Decide repede: cuvântul are sens asemănător sau opus?",
      "round:forms":"Transformă cuvântul (de ex. în substantiv sau adverb) ca să se potrivească în propoziție.",
      "round:ladder":"Pune verbul la timpul potrivit.",
      "round:mixed":"Câte puțin din toate, în ordine amestecată. Cel mai bun mod de a încheia o sesiune.",
      "round:word":"O rundă scurtă cu un singur cuvânt: sens, combinații, ascultare și forme.",
      use:"Aici folosești singur cuvintele: răspunzi la întrebări, scrii propoziții și povești scurte sau vorbești cu voce tare. Înveți cel mai bine când creezi propriile propoziții.",
      "use:ask":"Răspunde la întrebare cu o propoziție completă și folosește cuvântul dat. Verificăm dacă ai folosit cuvântul și îți dăm sfaturi.",
      "use:studio":"Scrie o propoziție cu cuvântul la timpul ales. Lista de verificare îți arată ce e deja corect.",
      "use:upgrade":"Schimbă stilul propoziției: din informal în formal sau invers, folosind cuvântul dat.",
      "use:story":"Scrie o poveste scurtă (cel puțin 3 propoziții) cu cele trei cuvinte date.",
      "use:speak":"Spune răspunsul cu voce tare, apoi scrie-l. Vorbitul te ajută să ții minte cuvintele.",
      "lab:map":"Harta celor 12 timpuri. Apasă pe un timp ca să vezi când îl folosim și exemple.",
      "lab:machine":"Construiește orice propoziție: alege persoana, timpul și tipul (afirmativă, negativă, interogativă) și vezi cum se schimbă.",
      "lab:hunt":"Un joc de 10 runde: alege do, does, don't sau doesn't.",
      "lab:detective":"Citește propoziția și spune la ce timp este.",
      "lab:time":"Mută propoziția în timp: treci-o la alt timp gramatical.",
      "lab:articles":"Articolele a, an, the sau lipsa articolului. În română articolul hotărât se lipește de cuvânt (băiatul), iar în engleză se pune înainte (the boy) și uneori lipsește complet (Life is short). Citește cele 7 reguli, apoi exersează.",
      "lab:modals":"Verbele modale: must, have to, should, can, might… Fiecare exprimă altceva: obligație, sfat, posibilitate. Atenție: mustn't = nu ai voie, dar don't have to = nu e nevoie.",
      "lab:cond":"Propozițiile condiționale (if): tipurile zero, 1, 2 și 3. Reține: după if nu folosim will sau would (If I have time…, nu If I will have…).",
      "lab:passive":"Diateza pasivă: be + participiul trecut (is made, was built). O folosim când contează ce s-a întâmplat, nu cine a făcut acțiunea.",
      "lab:questions":"Întrebările în engleză: ordinea cuvintelor și do/does/did. În română ajunge intonația; în engleză e nevoie de auxiliar: Do you like…?, Where did you go?",
      "lab:patterns":"După unele verbe urmează -ing (enjoy doing), după altele to + infinitiv (decide to do). Trebuie învățate – exersează aici.",
      "lab:preps":"Prepozițiile in, on, at și altele. Adesea diferă de română (în stație = at the bus stop). Învață-le în expresii întregi.",
      "use:conv":"Conversații în situații reale. Citește ce spune cealaltă persoană și alege cel mai bun răspuns. După fiecare alegere vezi o explicație.",
      "use:write":"Atelierul de scriere: e-mail, scrisoare formală, eseu, articol – tipurile de text de la examen. Întâi planul și expresiile, apoi scrie și verifică.",
      "exam":"Exerciții de tip matura poloneză și Bacalaureat (proba C): formarea cuvintelor, transformări, vorbire cu cronometru. Verifică informațiile oficiale actuale ale Ministerului Educației.",
      "video:read":"Textul săptămânii. Citește articolul, apoi răspunde: adevărat, fals sau nu se spune, întrebări cu variante și cuvinte în context. La final scrie un text scurt.",
      "verbs:table":"Tabelul verbelor neregulate: forma de bază, Past Simple și Past Participle. Ascultă și repetă.",
      "verbs:sort":"Decide dacă verbul este regulat (-ed) sau neregulat.",
      "verbs:forms":"Scrie cele trei forme ale verbului, de ex. go – went – gone.",
      "verbs:spot":"Găsește în text toate verbele neregulate.",
      "verbs:fill":"Completează spațiul cu forma corectă a verbului.",
      "verbs:fix":"În propoziție e o greșeală la forma verbului. Găsește-o și corecteaz-o.",
      "verbs:match":"Potrivește perechile: forma de bază și forma de trecut.",
      "verbs:blitz":"60 de secunde: răspunde la cât mai multe întrebări despre formele verbelor.",
      video:"Urmărește filmul săptămânii, răspunde la întrebări, notează ce ai auzit și scrie trei rezumate scurte. La final, trimite-i profesorului codul tău.",
      progress:"Aici îți vezi progresul. Copiază codul de progres și trimite-l profesorului, ca să-ți vadă rezultatele și timpul de studiu.",
      badges:"Insignele tale. Exersează și Psotek îți dă bronz, argint și aur. O insignă e secretă.",archive:"Cuvintele din lunile trecute. Alege un set și apasă „Practise these words”, ca toate exercițiile să folosească acele cuvinte.",
      game:"O pauză scurtă: alege un joc. Timpul de joc nu se adaugă la timpul de studiu.",
      sounds:"Pronunție: întâi urechea, apoi gura. „Which word?” – ascultă și alege cuvântul (ship sau sheep?). „Word stress” – alege silaba accentuată. „Weak forms” – marchează cuvintele pronunțate slab. „Say it” – spune cuvântul, iar browserul verifică ce a auzit."
    }
  }
};
const L1W = {"inevitable": {"pl": ["nieunikniony", "Taki, który na pewno się wydarzy; nie da się go uniknąć."], "ro": ["inevitabil", "Sigur că se va întâmpla; nu poate fi evitat."]}, "inherent": {"pl": ["nieodłączny, wrodzony", "Będący naturalną, stałą częścią czegoś."], "ro": ["inerent", "Care face parte, în mod natural și permanent, din ceva."]}, "arbitrary": {"pl": ["arbitralny, przypadkowy", "Ustalony według czyjegoś widzimisię lub przypadkiem, bez jasnego powodu."], "ro": ["arbitrar", "Decis după bunul plac al cuiva sau la întâmplare, fără un motiv clar."]}, "plausible": {"pl": ["wiarygodny, prawdopodobny", "Brzmiący rozsądnie i prawdopodobnie prawdziwy, choć nie ma pewności."], "ro": ["plauzibil", "Care pare rezonabil sau probabil adevărat, deși nu e sigur."]}, "coherent": {"pl": ["spójny, logiczny", "Jasny, dobrze uporządkowany i logicznie połączony."], "ro": ["coerent", "Clar, bine organizat și legat logic."]}, "prevalent": {"pl": ["powszechny, rozpowszechniony", "Częsty w danym miejscu, czasie lub grupie ludzi."], "ro": ["răspândit, predominant", "Frecvent într-un anumit loc, timp sau grup de oameni."]}, "vulnerable": {"pl": ["podatny na zranienie, bezbronny", "Łatwy do skrzywdzenia lub zaatakowania, fizycznie lub emocjonalnie."], "ro": ["vulnerabil", "Ușor de rănit sau de atacat, fizic sau emoțional."]}, "deliberate": {"pl": ["celowy, zamierzony", "Zrobiony specjalnie, po zastanowieniu, a nie przez przypadek."], "ro": ["deliberat, intenționat", "Făcut intenționat, după ce te-ai gândit, nu din greșeală."], "ffpl": "Uwaga: deliberate to „celowy”. Nie myl z „deliberować” (długo się naradzać), które po angielsku to deliberate jako czasownik, wymawiany inaczej."}, "ambiguous": {"pl": ["dwuznaczny, niejednoznaczny", "Mający więcej niż jedno możliwe znaczenie."], "ro": ["ambiguu", "Care are mai multe sensuri posibile."]}, "feasible": {"pl": ["wykonalny, realny", "Możliwy do zrobienia w praktyce, przy czasie, pieniądzach i ludziach, którymi dysponujesz."], "ro": ["fezabil, realizabil", "Posibil de făcut în practică, cu timpul, banii și oamenii pe care îi ai."]}, "reluctant": {"pl": ["niechętny", "Taki, który nie chce czegoś robić i robi to powoli albo z musu."], "ro": ["reticent, fără tragere de inimă", "Care nu vrea să facă ceva și îl face încet sau doar pentru că trebuie."]}, "good-morning": {"pl": ["dzień dobry (rano)", "Grzeczne powitanie używane mniej więcej do godziny 12."], "ro": ["bună dimineața", "Salut politicos folosit până pe la ora 12."]}, "thank-you": {"pl": ["dziękuję", "Grzeczny sposób, by okazać wdzięczność za pomoc lub prezent."], "ro": ["mulțumesc", "Mod politicos de a arăta că ești recunoscător pentru ajutor sau pentru ceva primit."]}, "excuse-me": {"pl": ["przepraszam (zaczepiając kogoś)", "Grzeczny zwrot, by zwrócić czyjąś uwagę albo poprosić, żeby ktoś się przesunął."], "ro": ["scuzați-mă", "Expresie politicoasă pentru a atrage atenția cuiva sau a-l ruga să se mute."]}, "would-like": {"pl": ["chciałbym / chciałabym", "Grzeczny sposób, by powiedzieć, czego chcesz."], "ro": ["aș dori", "Mod politicos de a spune ce vrei."]}, "please": {"pl": ["proszę", "Krótkie słowo, które sprawia, że prośba brzmi grzecznie."], "ro": ["vă rog / te rog", "Un cuvânt mic care face o cerere politicoasă."]}, "goodbye": {"pl": ["do widzenia", "To, co mówisz, gdy się z kimś żegnasz lub kończysz rozmowę telefoniczną."], "ro": ["la revedere", "Ce spui când pleci sau închei o convorbire telefonică."]}, "hi": {"pl": ["cześć", "Krótki, przyjazny sposób, by się przywitać."], "ro": ["salut, bună", "Un mod scurt și prietenos de a saluta."]}, "thanks": {"pl": ["dzięki", "Potoczny sposób, by podziękować."], "ro": ["mersi", "Mod informal de a spune mulțumesc."]}, "yeah": {"pl": ["no, tak (potocznie)", "Potoczne „tak”."], "ro": ["da (familiar)", "Mod informal de a spune da."]}, "bye": {"pl": ["pa, na razie", "Krótki, przyjazny sposób, by się pożegnać."], "ro": ["pa", "Un mod scurt și prietenos de a-ți lua rămas-bun."]}, "cool": {"pl": ["super, fajny", "Bardzo dobry, modny albo świetny."], "ro": ["mișto, tare", "Foarte bun, la modă sau grozav."]}, "ok": {"pl": ["okej, dobrze", "Potoczne „tak”, „w porządku”."], "ro": ["ok, bine", "Mod informal de a spune da sau în regulă."]}, "receive": {"pl": ["otrzymywać, dostawać", "Dostać coś, co ktoś ci daje lub wysyła."], "ro": ["a primi", "A obține ceva ce cineva îți dă sau îți trimite."]}, "reply": {"pl": ["odpowiadać", "Odpowiedzieć komuś, zwłaszcza na piśmie."], "ro": ["a răspunde", "A-i răspunde cuiva, mai ales în scris."]}, "inform": {"pl": ["informować, powiadamiać", "Przekazać komuś fakty, często oficjalnie."], "ro": ["a informa", "A-i comunica cuiva fapte, adesea în mod oficial."]}, "assist": {"pl": ["pomagać, asystować", "Pomagać komuś, zwłaszcza w pracy."], "ro": ["a ajuta, a asista pe cineva", "A ajuta pe cineva, mai ales la muncă."], "ffro": "Atenție: în engleză assist înseamnă „a ajuta”. „A asista la un eveniment” (a fi prezent, a urmări) se spune attend sau watch, nu assist."}, "attend": {"pl": ["uczestniczyć, chodzić (do szkoły)", "Iść na wydarzenie, spotkanie albo do szkoły."], "ro": ["a participa la, a frecventa", "A merge la un eveniment, o ședință sau la școală."], "ffro": "Atenție: attend nu înseamnă „a atenta” (a ataca). Attend a meeting = a participa la o ședință."}, "request": {"pl": ["prosić o, wnioskować", "Poprosić o coś grzecznie lub oficjalnie."], "ro": ["a solicita", "A cere ceva politicos sau oficial."]}, "kid": {"pl": ["dzieciak", "Potoczne słowo na dziecko."], "ro": ["copil, puști", "Cuvânt informal pentru copil."]}, "guy": {"pl": ["facet, gość", "Potoczne słowo na mężczyznę. Guys może oznaczać grupę dowolnych osób."], "ro": ["tip", "Cuvânt informal pentru bărbat. Guys poate însemna un grup de oameni, de orice gen."]}, "stuff": {"pl": ["rzeczy, graty", "Potoczne słowo na rzeczy, gdy nie trzeba ich nazywać."], "ro": ["chestii, lucruri", "Cuvânt informal pentru lucruri, când nu e nevoie să le numești."]}, "awesome": {"pl": ["super, odlotowy", "Bardzo dobry; świetny."], "ro": ["super, grozav", "Foarte bun; grozav."]}, "hang-out": {"pl": ["spędzać czas, wychodzić ze znajomymi", "Spędzać czas z przyjaciółmi na luzie."], "ro": ["a ieși cu prietenii, a pierde vremea", "A petrece timp cu prietenii, relaxat."]}, "grab": {"pl": ["złapać, skoczyć po coś", "Szybko coś wziąć, często jedzenie lub picie."], "ro": ["a lua repede, a înșfăca", "A lua ceva repede, adesea mâncare sau băutură."]}, "purchase": {"pl": ["kupować, zakup", "Kupić coś; rzecz, którą kupujesz."], "ro": ["a achiziționa, achiziție", "A cumpăra ceva; un lucru pe care îl cumperi."]}, "require": {"pl": ["wymagać, potrzebować", "Potrzebować czegoś; sprawiać, że coś jest konieczne."], "ro": ["a necesita, a solicita", "A avea nevoie de ceva; a face ceva necesar."]}, "provide": {"pl": ["zapewniać, dostarczać", "Dać komuś coś, czego potrzebuje."], "ro": ["a furniza, a oferi", "A-i da cuiva ceva de care are nevoie."]}, "approximately": {"pl": ["około, w przybliżeniu", "Blisko dokładnej liczby, ale nie dokładnie."], "ro": ["aproximativ", "Aproape de un număr exact, dar nu exact."]}, "regarding": {"pl": ["odnośnie do, w sprawie", "O czymś; na temat. Używane w e-mailach i listach."], "ro": ["referitor la, în legătură cu", "Despre; pe tema. Folosit în e-mailuri și scrisori."]}, "apologise": {"pl": ["przepraszać", "Powiedzieć, że jest ci przykro z jakiegoś powodu."], "ro": ["a-și cere scuze", "A spune că îți pare rău pentru ceva."], "ffpl": "Uwaga: apologise to „przepraszać”. Nie myl z „apologią” ani „apologizować”, które oznaczają wychwalanie lub bronienie kogoś.", "ffro": "Atenție: apologise înseamnă „a-și cere scuze”, nu are legătură cu „apologie” (elogiu, laudă)."}, "chill": {"pl": ["chillować, wyluzować", "Relaksować się i nic specjalnego nie robić."], "ro": ["a se relaxa, a sta liniștit", "A te relaxa și a nu face mare lucru."]}, "broke": {"pl": ["spłukany", "Bez pieniędzy."], "ro": ["lefter", "Fără bani."]}, "a-bit": {"pl": ["trochę", "Odrobinę; lekko."], "ro": ["un pic, puțin", "Puțin; ușor."]}, "loads-of": {"pl": ["mnóstwo, kupa", "Dużo; wielka ilość lub liczba."], "ro": ["o grămadă de", "Mult; o cantitate sau un număr mare."]}, "fancy": {"pl": ["mieć ochotę na", "Chcieć czegoś lub mieć ochotę coś zrobić."], "ro": ["a avea chef de", "A vrea sau a avea chef de ceva."], "ffpl": "Uwaga: fancy jako czasownik to „mieć ochotę”. Fancy jako przymiotnik znaczy „wymyślny, elegancki”, a nie „fantazyjny” w sensie dziwny."}, "mate": {"pl": ["kumpel, stary", "Potoczne słowo na przyjaciela."], "ro": ["amic, frate", "Cuvânt informal pentru prieten."]}, "hassle": {"pl": ["kłopot, zawracanie głowy", "Coś irytującego, co zabiera czas lub wysiłek."], "ro": ["bătaie de cap", "Ceva enervant care cere timp sau efort."]}, "sort-out": {"pl": ["ogarnąć, załatwić", "Poradzić sobie z problemem albo coś uporządkować."], "ro": ["a rezolva, a aranja", "A rezolva o problemă sau a organiza ceva."]}, "rip-off": {"pl": ["zdzierstwo", "Coś, co kosztuje dużo więcej, niż powinno."], "ro": ["țeapă, jecmăneală", "Ceva care costă mult mai mult decât ar trebui."]}, "gutted": {"pl": ["załamany, zdruzgotany", "Bardzo rozczarowany i smutny."], "ro": ["dărâmat, foarte dezamăgit", "Foarte dezamăgit și trist."]}, "piece-of-cake": {"pl": ["bułka z masłem", "Coś bardzo łatwego."], "ro": ["floare la ureche", "Ceva foarte ușor de făcut."]}, "on-the-fence": {"pl": ["niezdecydowany", "Niezdolny wybrać między dwiema opcjami."], "ro": ["nehotărât", "Care nu se poate decide între două variante."]}, "pragmatic": {"pl": ["pragmatyczny", "Rozwiązujący problemy rozsądnie i praktycznie, a nie według ideałów czy teorii."], "ro": ["pragmatic", "Care rezolvă problemele practic și cu bun-simț, nu după idealuri sau teorie."]}, "cut-corners": {"pl": ["iść na skróty", "Robić coś byle jak lub tanio, żeby zaoszczędzić czas lub pieniądze."], "ro": ["a o face de mântuială", "A face ceva prost sau ieftin ca să economisești timp sau bani."]}, "bottom-line": {"pl": ["sedno sprawy; wynik finansowy", "Najważniejszy fakt w danej sytuacji; także końcowy zysk firmy."], "ro": ["concluzia, esențialul; profitul final", "Cel mai important fapt dintr-o situație; și profitul final al unei firme."]}, "long-shot": {"pl": ["mała szansa, strzał w ciemno", "Coś, co ma niewielkie szanse powodzenia."], "ro": ["o șansă mică", "Ceva care are puține șanse de reușită."]}, "ballpark-figure": {"pl": ["przybliżona kwota, szacunek", "Zgrubne oszacowanie liczby lub ceny."], "ro": ["o cifră aproximativă", "O estimare aproximativă a unui număr sau preț."]}, "get-the-hang-of": {"pl": ["załapać, wprawić się", "Nauczyć się coś robić, zwłaszcza po ćwiczeniach."], "ro": ["a prinde șmecheria", "A învăța cum să faci ceva, mai ales după exercițiu."]}, "up-in-the-air": {"pl": ["niepewny, nierozstrzygnięty", "Jeszcze nie zdecydowany ani pewny."], "ro": ["nehotărât, în aer", "Încă nedecis sau nesigur."]}, "ubiquitous": {"pl": ["wszechobecny", "Wydający się być wszędzie jednocześnie."], "ro": ["omniprezent", "Care pare să fie peste tot în același timp."]}, "exacerbate": {"pl": ["pogarszać, zaostrzać", "Sprawiać, że problem, zła sytuacja lub ból stają się gorsze."], "ro": ["a agrava, a exacerba", "A face o problemă, o situație rea sau o durere mai gravă."]}, "ostensibly": {"pl": ["rzekomo, pozornie", "Tak, jakby to była prawda, choć prawdopodobnie ukrywa inny prawdziwy powód."], "ro": ["aparent, chipurile", "Într-un mod care pare adevărat, dar probabil ascunde alt motiv real."], "ffpl": "Uwaga: ostensibly to „rzekomo”, a nie „ostentacyjnie” (po angielsku ostentatiously).", "ffro": "Atenție: ostensibly înseamnă „aparent, chipurile”, nu „ostentativ” (în engleză ostentatiously)."}, "nuanced": {"pl": ["zniuansowany, subtelny", "Pokazujący drobne, ale ważne różnice w znaczeniu, uczuciach lub opiniach."], "ro": ["nuanțat", "Care arată diferențe mici, dar importante, de sens, sentiment sau opinie."]}, "conundrum": {"pl": ["zagadka, dylemat", "Zagmatwany i trudny problem lub pytanie."], "ro": ["enigmă, dilemă", "O problemă sau o întrebare confuză și dificilă."]}, "quintessential": {"pl": ["klasyczny, typowy, kwintesencja", "Będący najbardziej typowym przykładem czegoś."], "ro": ["tipic, chintesența", "Care este cel mai tipic exemplu de ceva."]}, "can-of-worms": {"pl": ["puszka Pandory", "Sytuacja, która wywoła mnóstwo nowych problemów, jeśli się nią zajmiesz."], "ro": ["cutia Pandorei", "O situație care va crea multe probleme noi dacă începi să te ocupi de ea."]}, "off-the-rails": {"pl": ["wykoleić się, pójść w złą stronę", "Zacząć zachowywać się dziko albo (o planie) pójść bardzo źle."], "ro": ["a o lua razna, a deraia", "A începe să te porți sălbatic sau (un plan) a merge foarte prost."]}, "jump-the-gun": {"pl": ["wyrwać się przed szereg", "Zrobić coś za wcześnie, przed właściwym momentem."], "ro": ["a se grăbi, a sări peste etape", "A face ceva prea devreme, înainte de momentul potrivit."]}, "elephant-in-the-room": {"pl": ["temat tabu, słoń w pokoju", "Oczywisty, ważny problem, o którym wszyscy unikają rozmowy."], "ro": ["elefantul din cameră", "O problemă evidentă și importantă despre care toți evită să vorbească."]}, "under-the-bus": {"pl": ["zrzucić winę na kogoś, poświęcić kogoś", "Obwinić lub poświęcić kogoś innego, żeby chronić siebie."], "ro": ["a da pe cineva la o parte, a-l sacrifica", "A da vina pe altcineva sau a-l sacrifica pentru a te proteja."]}, "tall-order": {"pl": ["trudne zadanie, wygórowane wymaganie", "Zadanie bardzo trudne albo nierozsądne, by o nie prosić."], "ro": ["o sarcină grea", "O sarcină foarte grea sau nerezonabilă."]}, "sorry": {"pl": ["przepraszam, przykro mi", "Słowo, które mówisz po drobnym błędzie albo gdy komuś sprawiłeś kłopot."], "ro": ["îmi pare rău, scuze", "Cuvânt pe care îl spui când ai greșit puțin sau i-ai creat cuiva o problemă."]}, "pardon": {"pl": ["słucham? / przepraszam, nie dosłyszałem", "Grzeczne słowo, gdy nie usłyszałeś, co ktoś powiedział, i prosisz o powtórzenie."], "ro": ["poftim? / pardon", "Cuvânt politicos când n-ai auzit ce a spus cineva și vrei să repete."], "ffpl": "Uwaga: pardon? po angielsku to „słucham?”. Polskie „bez pardonu” (bez litości) nie ma z tym związku."}, "youre-welcome": {"pl": ["proszę bardzo, nie ma za co", "Grzeczna odpowiedź, gdy ktoś dziękuje."], "ro": ["cu plăcere", "Răspuns politicos când cineva îți mulțumește."]}, "nice-to-meet-you": {"pl": ["miło mi cię poznać", "Grzeczne zdanie przy pierwszym spotkaniu z kimś."], "ro": ["îmi pare bine de cunoștință", "Ce spui politicos când întâlnești pe cineva prima dată."]}, "see-you": {"pl": ["do zobaczenia, na razie", "Przyjazne pożegnanie z kimś, kogo jeszcze zobaczysz."], "ro": ["ne vedem", "Un mod prietenos de a-ți lua rămas-bun de la cineva pe care îl vei revedea."]}, "great": {"pl": ["świetnie, super", "Bardzo dobry; przyjazne słowo, gdy się z czegoś cieszysz."], "ro": ["grozav, super", "Foarte bun; un cuvânt prietenos când te bucuri de ceva."]}, "no-problem": {"pl": ["nie ma sprawy", "Przyjazny sposób, by powiedzieć, że chętnie pomożesz, albo odpowiedzieć na „dzięki”."], "ro": ["nicio problemă", "Un mod prietenos de a spune că ajuți cu plăcere sau de a răspunde la mulțumesc."]}, "whats-up": {"pl": ["co tam?, siema", "Przyjazne powitanie albo pytanie, co u kogoś słychać."], "ro": ["ce faci?, ce mai e nou?", "Un mod prietenos de a saluta sau de a întreba un prieten ce face."]}, "contact": {"pl": ["kontaktować się z", "Napisać, zadzwonić lub wysłać e-mail do kogoś."], "ro": ["a contacta", "A scrie, a suna sau a trimite un e-mail cuiva."]}, "prefer": {"pl": ["woleć", "Lubić jedną rzecz bardziej niż inną."], "ro": ["a prefera", "A-ți plăcea un lucru mai mult decât altul."]}, "depart": {"pl": ["odjeżdżać, odlatywać", "Wyruszać, zwłaszcza pociągiem, autobusem lub samolotem."], "ro": ["a pleca", "A pleca, mai ales la începutul unei călătorii cu trenul, autobuzul sau avionul."], "ffro": "Atenție: depart înseamnă „a pleca”, nu „departe” (în engleză far)."}, "permit": {"pl": ["zezwalać, pozwalać", "Oficjalnie pozwolić komuś coś zrobić."], "ro": ["a permite", "A permite oficial cuiva să facă ceva."]}, "telly": {"pl": ["telewizja (potocznie, brytyjskie)", "Brytyjskie potoczne słowo na telewizję."], "ro": ["televizor (familiar, britanic)", "Cuvânt britanic informal pentru televizor."]}, "loo": {"pl": ["toaleta (potocznie, brytyjskie)", "Brytyjskie potoczne słowo na toaletę."], "ro": ["toaletă (familiar, britanic)", "Cuvânt britanic informal pentru toaletă."]}, "gonna": {"pl": ["zamierzam (mówione „going to”)", "Mówiona, potoczna forma „going to”."], "ro": ["o să (forma vorbită de la going to)", "Forma vorbită, informală, pentru going to."]}, "no-way": {"pl": ["nie ma mowy!; niemożliwe!", "Mocne, przyjazne „nie” albo okrzyk dużego zaskoczenia."], "ro": ["nici gând!; nu se poate!", "Un „nu” hotărât, sau o exclamație de mare surpriză."]}, "additional": {"pl": ["dodatkowy", "Ekstra; więcej, niż początkowo planowano."], "ro": ["suplimentar", "În plus; mai mult decât s-a plănuit la început."]}, "sufficient": {"pl": ["wystarczający", "Wystarczający do danego celu."], "ro": ["suficient", "Destul pentru un anumit scop."]}, "commence": {"pl": ["rozpoczynać (się)", "Zaczynać; używane w bardzo formalnym lub urzędowym języku."], "ro": ["a începe (formal)", "A începe; folosit în limbaj foarte formal sau oficial."]}, "obtain": {"pl": ["uzyskać, otrzymać", "Zdobyć coś, zwłaszcza prosząc o to albo pracując na to."], "ro": ["a obține", "A obține ceva, mai ales cerând sau muncind pentru asta."]}, "knackered": {"pl": ["wykończony, padnięty", "Brytyjskie potoczne słowo na „bardzo zmęczony”."], "ro": ["frânt, terminat", "Cuvânt britanic informal pentru foarte obosit."]}, "quid": {"pl": ["funt (potocznie)", "Brytyjskie potoczne słowo na funta (1 £)."], "ro": ["liră (familiar)", "Cuvânt britanic informal pentru o liră (1 £)."]}, "cheers": {"pl": ["dzięki; na razie; na zdrowie", "Brytyjskie potoczne „dzięki” lub „cześć”, a także toast."], "ro": ["mersi; pa; noroc", "Mod britanic informal de a spune mulțumesc sau la revedere, și un toast."]}, "hang-on": {"pl": ["chwileczkę, poczekaj", "Zaczekać przez krótką chwilę."], "ro": ["stai puțin, așteaptă", "A aștepta puțin."]}, "substantial": {"pl": ["znaczny, pokaźny", "Duży pod względem ilości, rozmiaru lub znaczenia."], "ro": ["substanțial, considerabil", "Mare ca mărime, cantitate sau importanță."]}, "comprehensive": {"pl": ["kompleksowy, wyczerpujący", "Obejmujący wszystko lub prawie wszystko, co potrzebne."], "ro": ["cuprinzător, complet", "Care include tot sau aproape tot ce e necesar."]}, "subsequent": {"pl": ["późniejszy, następny", "Następujący po czymś innym."], "ro": ["ulterior, următor", "Care urmează după altceva."]}, "adequate": {"pl": ["wystarczający, dostateczny", "Wystarczająco dobry lub duży na daną potrzebę, ale nie znakomity."], "ro": ["suficient, satisfăcător", "Destul de bun sau de mare pentru o nevoie, dar nu excelent."], "ffpl": "Uwaga: adequate to „wystarczający”, często z lekkim minusem. Polskie „adekwatny” (odpowiedni, trafny) to po angielsku zwykle appropriate.", "ffro": "Atenție: adequate înseamnă mai ales „suficient, acceptabil”. „Adecvat” în sensul de potrivit se spune de obicei appropriate."}, "no-brainer": {"pl": ["oczywista decyzja", "Decyzja bardzo łatwa, bo właściwy wybór jest oczywisty."], "ro": ["o decizie evidentă", "O decizie foarte ușoară, pentru că alegerea corectă e evidentă."]}, "call-it-a-day": {"pl": ["skończyć na dziś", "Przestać nad czymś pracować, zwykle ze zmęczenia albo dlatego, że zrobiło się dość."], "ro": ["a încheia pe ziua de azi", "A te opri din lucru, de obicei pentru că ești obosit sau ai făcut destul."]}, "go-the-extra-mile": {"pl": ["dać z siebie więcej, niż trzeba", "Zrobić więcej, niż ludzie od ciebie oczekują."], "ro": ["a face un efort în plus", "A face mai mult decât se așteaptă oamenii de la tine."]}, "touch-base": {"pl": ["skontaktować się, krótko pogadać", "Krótko porozmawiać, żeby przekazać nowości lub sprawdzić, jak idzie."], "ro": ["a lua legătura, a ne auzi", "A vorbi pe scurt cu cineva pentru a da vești sau a verifica cum merg lucrurile."]}, "meticulous": {"pl": ["skrupulatny, drobiazgowy", "Bardzo dbający o każdy szczegół."], "ro": ["meticulos", "Foarte atent la fiecare detaliu."]}, "detrimental": {"pl": ["szkodliwy", "Powodujący szkodę lub zniszczenie."], "ro": ["dăunător, nociv", "Care produce rău sau pagube."]}, "tentative": {"pl": ["wstępny, niepewny", "Niepewny lub nieostateczny; robiony ostrożnie, bo nie masz pewności."], "ro": ["provizoriu, ezitant", "Nesigur sau nedefinitiv; făcut cu grijă pentru că nu ești sigur."]}, "salient": {"pl": ["najważniejszy, kluczowy", "Najistotniejszy lub najbardziej zauważalny."], "ro": ["principal, esențial", "Cel mai important sau cel mai vizibil."]}, "move-the-goalposts": {"pl": ["zmieniać reguły w trakcie gry", "Niesprawiedliwie zmieniać zasady lub cele, gdy ktoś próbuje je osiągnąć."], "ro": ["a schimba regulile din mers", "A schimba pe nedrept regulile sau obiectivele în timp ce cineva încearcă să le atingă."]}, "back-to-square-one": {"pl": ["z powrotem w punkcie wyjścia", "Znowu na początku, bo próba się nie udała."], "ro": ["înapoi de unde am pornit", "Din nou la început, pentru că o încercare a eșuat."]}, "get-the-ball-rolling": {"pl": ["zacząć, ruszyć z miejsca", "Rozpocząć działanie lub proces."], "ro": ["a pune lucrurile în mișcare", "A începe o activitate sau un proces."]}, "a-grey-area": {"pl": ["szara strefa, kwestia niejasna", "Sytuacja, w której zasady nie są jasne, więc trudno powiedzieć, co jest właściwe."], "ro": ["o zonă gri", "O situație în care regulile nu sunt clare, așa că e greu de spus ce e corect."]}, "esoteric": {"pl": ["hermetyczny, specjalistyczny", "Zrozumiały lub ciekawy tylko dla niewielu ludzi ze specjalną wiedzą."], "ro": ["ezoteric, de nișă", "Înțeles sau apreciat doar de puțini oameni cu cunoștințe speciale."], "ffpl": "Uwaga: esoteric to zwykle „hermetyczny, dla specjalistów”. Polskie „ezoteryczny” kojarzy się z magią i okultyzmem, a po angielsku to raczej occult lub mystical.", "ffro": "Atenție: esoteric înseamnă de obicei „pentru specialiști, de nișă”, nu neapărat mistic sau ocult."}, "pernicious": {"pl": ["zgubny, szkodliwy", "Szkodliwy, zwłaszcza powoli i w trudny do zauważenia sposób."], "ro": ["pernicios, nociv", "Dăunător, mai ales încet și greu de observat."]}, "obfuscate": {"pl": ["zaciemniać, gmatwać", "Celowo sprawić, by coś było niejasne lub trudne do zrozumienia."], "ro": ["a încâlci, a face neclar", "A face ceva intenționat neclar sau greu de înțeles."]}, "perfunctory": {"pl": ["zdawkowy, powierzchowny", "Zrobiony szybko i bez zaangażowania, tylko dlatego, że trzeba."], "ro": ["superficial, de formă", "Făcut repede, fără grijă sau interes, doar pentru că trebuie."]}, "bite-the-bullet": {"pl": ["zacisnąć zęby, przełknąć gorzką pigułkę", "Zaakceptować coś nieprzyjemnego, czego nie da się już uniknąć."], "ro": ["a strânge din dinți", "A accepta ceva neplăcut pe care nu-l mai poți evita."]}, "a-red-herring": {"pl": ["fałszywy trop", "Coś, co odciąga uwagę od prawdziwego problemu, czasem celowo."], "ro": ["o pistă falsă", "Ceva care distrage atenția de la problema reală, uneori intenționat."]}, "beat-around-the-bush": {"pl": ["owijać w bawełnę", "Unikać mówienia czegoś wprost, zwykle bo to niezręczne."], "ro": ["a o lua pe ocolite", "A evita să spui ceva direct, de obicei pentru că e incomod."]}, "cut-to-the-chase": {"pl": ["przejść do rzeczy", "Od razu mówić o najważniejszym, bez zbędnych szczegółów."], "ro": ["a trece la subiect", "A vorbi imediat despre lucrul cel mai important, fără detalii inutile."]}};
const helpLang = () => (disp && L1[disp.lang]) ? disp.lang : "";
function navLabel(id, en, short){ const L=L1[helpLang()]; if(!L) return en; return (short && L.short[id]) || L.nav[id] || en; }
function helpKey(){
  if(route==="video" && typeof vidTab!=="undefined" && vidTab==="read") return "video:read";
  if(route==="lab") return lab.room==="verbs" ? "verbs:"+(typeof vb!=="undefined" && vb.mode ? vb.mode : "table") : "lab:"+(lab.room||"map");
  if(route==="round") return "round:"+(typeof round!=="undefined" && round ? round.kind : "mixed");
  return route;
}
function paintHelp(){
  const L=L1[helpLang()], view=$("#view"); if(!view) return;
  const old=$("#l1help", view);
  if(!L){ if(old) old.remove(); return; }
  const key=helpKey(), txt=L.help[key]; if(!txt){ if(old) old.remove(); return; }
  if(old && old.dataset.k===key+helpLang()) return;
  if(old) old.remove();
  const open = state.vlv<=1;
  const el=document.createElement("details"); el.id="l1help"; el.className="l1help"; el.dataset.k=key+helpLang(); if(open) el.open=true;
  el.lang=helpLang(); el.innerHTML=`<summary><span class="l1flag">${L.flag}</span>${esc(L.ui.help)}</summary><p>${esc(txt)}</p>`;
  const head=$(".pagehead", view) || $(".back", view);
  if(head) head.after(el); else view.prepend(el);
}
let helpRaf=0; new MutationObserver(()=>{ cancelAnimationFrame(helpRaf); helpRaf=requestAnimationFrame(paintHelp); }).observe(document.getElementById("view"),{childList:true,subtree:true});
function l1WordBlock(w){
  const lg=helpLang(), L=L1[lg]; if(!L) return "";
  const t = w.tr && w.tr[lg] ? w.tr[lg] : (L1W[w.id] && L1W[w.id][lg]); const ff = (w.tr && w.tr["ff"+lg]) || (L1W[w.id] && L1W[w.id]["ff"+lg]);
  if(!t && !ff) return "";
  return `<div class="l1word" lang="${lg}">
    ${ff?`<p class="l1ff"><span class="tag">${esc(L.ui.ff)}</span> ${esc(ff)}</p>`:""}
    ${t?`<button class="linkbtn" type="button" data-l1show aria-expanded="false"><span class="l1flag">${L.flag}</span>${esc(L.ui.show)}</button>
    <div class="l1tr" hidden><p><b>${esc(t[0])}</b></p>${t[1]?`<p>${esc(t[1])}</p>`:""}<p class="l1tip">${esc(L.ui.tip)}</p></div>`:""}
  </div>`;
}
document.addEventListener("click",e=>{ const b=e.target.closest("[data-l1show]"); if(!b) return; const box=b.parentElement.querySelector(".l1tr"); const L=L1[helpLang()];
  const on=box.hidden; box.hidden=!on; b.setAttribute("aria-expanded",on); b.innerHTML=`<span class="l1flag">${L.flag}</span>${esc(on?L.ui.hide:L.ui.show)}`; });
function langSeg(){ return `<div class="seg3" role="radiogroup" aria-label="Help language">${[["","English"],["pl","Polski"],["ro","Română"]].map(([v,l])=>`<button type="button" role="radio" data-lg="${v}" aria-checked="${(disp.lang||"")===v}" ${v?`lang="${v}"`:""}>${l}</button>`).join("")}</div>`; }
function setLang(v){ disp.lang=v; try{ localStorage.setItem(DISP,JSON.stringify(disp)); }catch(e){} paintNav(); paintHelp(); if(route==="word") render(); }
document.addEventListener("click",e=>{ const b=e.target.closest("[data-lg]"); if(!b) return; setLang(b.dataset.lg); $$("[data-lg]").forEach(x=>x.setAttribute("aria-checked", x.dataset.lg===b.dataset.lg)); });

function paintWho(){ const el=$("#whoami"); if(el) el.innerHTML = act.nick ? `Practising as <b>${esc(act.nick)}</b>` : ""; }

/* ---------- Tense lab: moss mode ---------- */
let lastPoint = null;
document.addEventListener("pointerdown", e=>{ lastPoint = {x:e.clientX, y:e.clientY}; }, true);
const reducedMotion = ()=> matchMedia("(prefers-reduced-motion: reduce)").matches;
function setMoss(on, pt){
  const b=document.body;
  if(b.classList.contains("moss")===on) return;
  if(!pt || reducedMotion()){ b.classList.toggle("moss", on); return; }
  const r=document.createElement("div");
  r.className="ripple "+(on?"in":"out");
  r.style.setProperty("--x", pt.x+"px"); r.style.setProperty("--y", pt.y+"px");
  document.body.appendChild(r);
  setTimeout(()=>{ b.classList.toggle("moss", on); r.classList.add("fade"); }, 560);
  setTimeout(()=>r.remove(), 1100);
}

function burst(el, n=8){
  if(reducedMotion() || !el) return;
  const r=el.getBoundingClientRect(); const cx=r.left+r.width/2, cy=r.top+r.height/2;
  for(let i=0;i<n;i++){
    const l=document.createElement("span"); l.className="leaf"; l.style.background=["var(--sun)","var(--coral)","var(--sage)","var(--plum)","var(--ok)"][i%5];
    const a=Math.random()*Math.PI*2, d=50+Math.random()*70;
    l.style.left=cx+"px"; l.style.top=cy+"px";
    l.style.setProperty("--dx", Math.cos(a)*d+"px"); l.style.setProperty("--dy", (Math.sin(a)*d-30)+"px");
    l.style.setProperty("--r", (Math.random()*360-180)+"deg");
    document.body.appendChild(l); setTimeout(()=>l.remove(), 950);
  }
}


/* ---------- Psotek: the cheeky hedgehog mascot ---------- */
/* ---------- Psotek, drawn front-on: a round, fluffy, chibi hedgehog ----------
   Everything is in a 200 × 200 box. psotek(mood) draws the whole hedgehog; psoHead(art) draws him in a badge costume.
   Shared gradients live once in #psoDefs (in the page), so many Psoteks can be on screen at once. */
const PSO_INK="#3A1C0E";
const PSO_DEFS=`<svg id="psoDefs" width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
  <linearGradient id="psoSpA" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#5A2A14"/><stop offset=".5" stop-color="#7E4526"/><stop offset="1" stop-color="#9A603A"/></linearGradient>
  <linearGradient id="psoSpB" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#63301A"/><stop offset=".55" stop-color="#8C5230"/><stop offset="1" stop-color="#A86E46"/></linearGradient>
  <radialGradient id="psoCream" cx=".5" cy=".42" r=".62"><stop offset="0" stop-color="#FFF4E4"/><stop offset=".7" stop-color="#FBE3C6"/><stop offset="1" stop-color="#F2CFA8"/></radialGradient>
  <radialGradient id="psoEye" cx=".45" cy=".62" r=".6"><stop offset="0" stop-color="#9A5A30"/><stop offset=".55" stop-color="#5C2F16"/><stop offset="1" stop-color="#2A1308"/></radialGradient>
  <radialGradient id="psoPaw" cx=".45" cy=".35" r=".7"><stop offset="0" stop-color="#B9784D"/><stop offset="1" stop-color="#94562F"/></radialGradient>
  <radialGradient id="psoBlush" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFA7A0" stop-opacity=".95"/><stop offset="1" stop-color="#FFB7AA" stop-opacity="0"/></radialGradient>
</defs></svg>`;
function psoEnsureDefs(){ if(typeof document!=="undefined" && !document.getElementById("psoDefs")) document.body.insertAdjacentHTML("afterbegin",PSO_DEFS); }
/* A rounded spine, pointing up from (0,0) */
const psoSp=(len,w)=>`M${-w*.7} 0 C${-w*1.1} ${-len*.42} ${-w*.55} ${-len*.9} 0 ${-len} C${w*.55} ${-len*.9} ${w*1.1} ${-len*.42} ${w*.7} 0 Q0 ${w*.45} ${-w*.7} 0Z`;
function psoRing(n, rx, ry, cy, len, w, fill, from=-180, to=180, off=0, tilt=1){
  let out=""; const step=(to-from)/n;
  for(let i=0;i<n;i++){ const a=from+step*(i+.5)+off, r=a*Math.PI/180;
    const x=100+rx*Math.sin(r), y=cy-ry*Math.cos(r), L=len*(.9+.2*Math.max(0,Math.cos(r)));
    out+=`<path transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(a*tilt).toFixed(1)})" d="${psoSp(L,w)}" fill="${fill}" stroke="#4A200C" stroke-opacity=".55" stroke-width=".9"/><ellipse transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(a*tilt).toFixed(1)})" cx="${(-w*.18).toFixed(1)}" cy="${(-L*.62).toFixed(1)}" rx="${(w*.24).toFixed(1)}" ry="${(L*.2).toFixed(1)}" fill="#E0AC7E" opacity=".32"/>`; }
  return out; }
/* The spiky coat, cached because it never changes */
let PSO_COAT="";
function psoCoat(){ if(PSO_COAT) return PSO_COAT;
  let c=`<ellipse cx="100" cy="106" rx="66" ry="78" fill="#4A200C"/>`;
  const rows=[[1,28,"url(#psoSpA)"],[.87,26,"url(#psoSpB)"],[.74,22,"url(#psoSpA)"],[.6,18,"url(#psoSpB)"]];
  rows.forEach(([f,n,fill],k)=>{ c+=psoRing(n, 62*f, 72*f, 106-k*3, 27, 10, fill, -180, 180, k%2?6.5:0, .9-.08*k); });
  return PSO_COAT=c; }
/* Cream face and tummy with a fluffy fringe on the forehead */
function psoCream(){
  let tufts=""; for(let a=-70;a<=70;a+=7){ const r=a*Math.PI/180, r1=(a-4)*Math.PI/180, r2=(a+4)*Math.PI/180;
    const p=(rr,k)=>`${(100+53*k*Math.sin(rr)).toFixed(1)} ${(108-47*k*Math.cos(rr)).toFixed(1)}`;
    tufts+=`M${p(r1,.97)} L${p(r,1.09+(Math.abs(a)%14?0:.04))} L${p(r2,.97)}Z `; }
  return `<g fill="#FBE3C6"><ellipse cx="100" cy="152" rx="44" ry="36"/><ellipse cx="100" cy="108" rx="53" ry="47"/><path d="${tufts}" stroke="#FBE3C6" stroke-width="1.5" stroke-linejoin="round"/></g>
    <ellipse cx="100" cy="102" rx="38" ry="30" fill="#FFF5E8" opacity=".75"/><ellipse cx="100" cy="154" rx="27" ry="22" fill="#FFF5E8" opacity=".55"/>`; }
const psoEars=`<g><circle cx="53" cy="72" r="18" fill="#A86C45"/><circle cx="53" cy="72" r="18" fill="none" stroke="#7C4427" stroke-opacity=".4"/><ellipse cx="54" cy="73" rx="10.5" ry="11" fill="#F29C86"/>
  <circle cx="147" cy="72" r="18" fill="#A86C45"/><circle cx="147" cy="72" r="18" fill="none" stroke="#7C4427" stroke-opacity=".4"/><ellipse cx="146" cy="73" rx="10.5" ry="11" fill="#F29C86"/></g>`;
/* Eyes */
const psoEyeOpen=(x,y,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><ellipse rx="10" ry="11.5" fill="url(#psoEye)" stroke="${PSO_INK}" stroke-width="2.4"/><circle r="4.5" cy="1" fill="#1E0C04"/><circle cx="-3.8" cy="-4.4" r="3.9" fill="#fff"/><circle cx="3.6" cy="4.4" r="1.7" fill="#fff"/><path d="M-6 6 Q0 10 6 6" stroke="#C98B5C" stroke-width="1.4" fill="none" opacity=".8"/></g>`;
const psoEyeHappy=(x,y)=>`<path d="M${x-10} ${y+3} Q${x} ${y-10} ${x+10} ${y+3}" stroke="${PSO_INK}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
const psoEyeSleep=(x,y)=>`<path d="M${x-8} ${y-1} Q${x} ${y+7} ${x+8} ${y-1}" stroke="${PSO_INK}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
const psoBrows=(l=0,r=0)=>`<path d="M${70} ${86+l} Q${79} ${80+l} ${88} ${85+l}" stroke="#8E5432" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M${112} ${85+r} Q${121} ${80+r} ${130} ${86+r}" stroke="#8E5432" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
const psoBlush=`<ellipse cx="65" cy="126" rx="12" ry="7.5" fill="url(#psoBlush)"/><ellipse cx="135" cy="126" rx="12" ry="7.5" fill="url(#psoBlush)"/><path d="M61 127 l2 -3 M66 127 l2 -3 M131 127 l2 -3 M136 127 l2 -3" stroke="#fff" stroke-opacity=".75" stroke-width="1.3" stroke-linecap="round"/>`;
const psoNose=`<ellipse cx="100" cy="116" rx="6.5" ry="5" fill="#4A2414"/><ellipse cx="98" cy="114.3" rx="2.2" ry="1.3" fill="#fff" opacity=".7"/>`;
const PSO_MOUTH={
  smile:`<path d="M92 122 Q96 127 100 122 Q104 127 108 122" stroke="${PSO_INK}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  open:`<path d="M91 122 Q100 123 109 122 Q108 133 100 133 Q92 133 91 122Z" fill="#7A2A1C" stroke="${PSO_INK}" stroke-width="1.8" stroke-linejoin="round"/><path d="M94 129 Q100 125 106 129 Q103 132.5 100 132.5 Q97 132.5 94 129Z" fill="#F07C6E"/>`,
  smirk:`<path d="M93 123 Q101 128 109 120" stroke="${PSO_INK}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M102 125.5 Q105 131 108 126 Q106 124 103 125Z" fill="#F07C6E" stroke="${PSO_INK}" stroke-width="1.2"/>`,
  flat:`<path d="M94 124 Q100 126 106 124" stroke="${PSO_INK}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  o:`<ellipse cx="100" cy="126" rx="3.4" ry="4" fill="#7A2A1C" stroke="${PSO_INK}" stroke-width="1.6"/>`
};
function psoFace(kind){
  const E={
    happy:psoEyeOpen(79,107,1.05)+psoEyeOpen(121,107,1.05)+psoBrows(),
    joy:psoEyeHappy(79,106)+psoEyeHappy(121,106)+psoBrows(-1,-1),
    wink:psoEyeOpen(79,107,1.05)+psoEyeHappy(121,106)+psoBrows(-3,1),
    sleepy:psoEyeSleep(79,106)+psoEyeSleep(121,106)+psoBrows(2,2),
    focus:psoEyeOpen(79,107,1.05)+psoEyeOpen(121,107,1.05)+`<path d="M72 89 L89 93 M111 93 L128 89" stroke="#8E5432" stroke-width="2.8" stroke-linecap="round"/>`
  };
  const M={happy:"smile",joy:"open",wink:"smirk",sleepy:"flat",focus:"smile"};
  return (E[kind]||E.happy)+psoBlush+psoNose+PSO_MOUTH[M[kind]||"smile"]; }
const psoPaws=`<ellipse cx="80" cy="150" rx="11" ry="12.5" fill="url(#psoPaw)" transform="rotate(-12 80 150)"/><ellipse cx="120" cy="150" rx="11" ry="12.5" fill="url(#psoPaw)" transform="rotate(12 120 150)"/>
  <path d="M75 157 l1.5 -4 M80 158.5 l.5 -4 M85 157.5 l-.8 -4 M125 157 l-1.5 -4 M120 158.5 l-.5 -4 M115 157.5 l.8 -4" stroke="#6E391F" stroke-width="1.6" stroke-linecap="round"/>`;
const psoFeet=`<ellipse cx="76" cy="182" rx="16" ry="9" fill="url(#psoPaw)"/><ellipse cx="124" cy="182" rx="16" ry="9" fill="url(#psoPaw)"/>
  <path d="M68 187 l1 -5 M74 188.5 l0 -5 M80 188 l-1 -5 M132 187 l-1 -5 M126 188.5 l0 -5 M120 188 l1 -5" stroke="#6E391F" stroke-width="1.6" stroke-linecap="round"/>`;
/* the hedgehog without arms, shared by the full body and the badge head */
function psoCore(face){ psoEnsureDefs(); return psoCoat()+psoEars+psoCream()+psoFace(face); }
const PSO_TROPHY=`<g transform="translate(100 150)"><path d="M-16 -16 h32 v6 q0 20 -16 20 q-16 0 -16 -20z" fill="#F2B33D" stroke="#C98A12" stroke-width="2"/><path d="M-16 -12 q-10 0 -10 8 q0 8 11 8 M16 -12 q10 0 10 8 q0 8 -11 8" stroke="#C98A12" stroke-width="3" fill="none"/><rect x="-4" y="9" width="8" height="8" fill="#C98A12"/><rect x="-12" y="16" width="24" height="7" rx="2" fill="#B07A10"/><path d="M-9 -12 q-1 10 4 16" stroke="#FFE7A1" stroke-width="3" fill="none" stroke-linecap="round"/><text x="0" y="0" font-size="13" font-weight="800" font-family="Georgia,serif" fill="#fff" text-anchor="middle">1</text></g>
  <ellipse cx="80" cy="150" rx="10" ry="11" fill="url(#psoPaw)"/><ellipse cx="120" cy="150" rx="10" ry="11" fill="url(#psoPaw)"/>`;
const PSO_SPARK=(x,y,s=1,c="#F2B33D")=>`<path transform="translate(${x} ${y}) scale(${s})" d="M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z" fill="${c}"/>`;
const PSO_GOGGLES=`<path d="M48 98 Q100 86 152 98" stroke="#2B2B2B" stroke-width="6" fill="none"/><g stroke="${PSO_INK}" stroke-width="3"><circle cx="80" cy="96" r="14" fill="#A8DDF0" fill-opacity=".75"/><circle cx="120" cy="96" r="14" fill="#A8DDF0" fill-opacity=".75"/></g><path d="M94 96 h12" stroke="${PSO_INK}" stroke-width="3"/><path d="M72 90 q4 -4 9 -3 M112 90 q4 -4 9 -3" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`;
function psotek(mood="cheeky"){
  const face={cheeky:"wink",happy:"happy",champ:"joy",race:"focus"}[mood]||"happy";
  const lines = mood==="race" ? `<path d="M4 92 h22 M0 112 h20 M6 132 h18" stroke="#1A56E8" stroke-width="5" stroke-linecap="round" opacity=".7"/>` : "";
  const extra = mood==="champ" ? PSO_TROPHY + PSO_SPARK(28,40,1) + PSO_SPARK(176,34,.8) + PSO_SPARK(184,70,.55,"#FF8FA3") : mood==="race" ? PSO_GOGGLES : psoPaws;
  return `<svg class="pso" viewBox="-6 -6 212 212" aria-hidden="true" focusable="false">${lines}
    <ellipse cx="100" cy="194" rx="70" ry="7" fill="#1E2A18" opacity=".12"/>
    ${psoCore(face)}${psoFeet}${extra}</svg>`;
}
/* Badge costumes: behind, on top and in front of the head */

function psoHead(art){
  const face={flame:"focus", chef:"joy", cap:"happy", target:"focus", race:"focus", nightcap:"sleepy", sun:"joy", beret:"wink", quill:"happy", bubbles:"joy", hardhat:"focus", secret:"wink"}[art]||"happy";
  const back={
    sun:`<g transform="translate(160 18)"><g stroke="#F2B33D" stroke-width="5" stroke-linecap="round"><path d="M0 -30v9M0 21v9M-30 0h9M21 0h9M-21 -21l6 6M15 15l6 6M21 -21l-6 6M-15 15l-6 6"/></g><circle r="16" fill="#FFCE32" stroke="#E8A21A" stroke-width="2"/></g>`,
    quill:`<g transform="translate(160 -14) rotate(26) scale(1.1)"><path d="M0 92 C-16 60 -18 26 0 0 C18 26 16 60 4 92 Z" fill="#FFE08A" stroke="#C98A12" stroke-width="2"/><path d="M2 92 L0 8" stroke="#C98A12" stroke-width="2"/><path d="M-6 30 l6 6 M-8 46 l8 7 M8 34 l-7 6 M9 52 l-8 7" stroke="#C98A12" stroke-width="1.5"/></g>`,
    flame:`<g transform="translate(100 -4)"><path d="M0 40 C-26 30 -30 6 -14 -14 C-12 -2 -6 2 -2 2 C-6 -14 2 -30 14 -38 C12 -22 30 -12 28 10 C27 28 14 40 0 40Z" fill="#FF6B3D"/><path d="M0 38 C-12 32 -14 18 -6 6 C-4 14 2 16 4 12 C4 4 8 -2 12 -6 C14 6 20 14 16 26 C14 34 8 38 0 38Z" fill="#FFCE32"/></g>`
  }[art]||"";
  const top={
    chef:`<g transform="translate(100 18)"><path d="M-30 22 L-28 4 C-44 2 -46 -22 -26 -24 C-24 -42 2 -46 8 -30 C20 -42 44 -32 36 -12 C50 -8 46 12 28 8 L30 22Z" fill="#fff" stroke="#D6D9DE" stroke-width="2"/><path d="M-30 16 H30" stroke="#D6D9DE" stroke-width="2"/><text x="0" y="0" font-size="20" font-weight="800" font-family="Georgia,serif" fill="#1A56E8" text-anchor="middle">Aa</text></g>`,
    cap:`<g transform="translate(100 26)"><path d="M-26 6 L-24 -10 L24 -10 L26 6 Q0 14 -26 6Z" fill="#2B2F45"/><path d="M-50 -14 L0 -32 L50 -14 L0 4Z" fill="#3A3F5C" stroke="#2B2F45" stroke-width="2"/><circle cx="0" cy="-14" r="4" fill="#FFCE32"/><path d="M0 -14 L40 -10 L42 14" stroke="#FFCE32" stroke-width="3" fill="none"/><path d="M42 12 l-5 14 h10z" fill="#FFCE32"/></g>`,
    nightcap:`<g transform="translate(100 22)"><path d="M-40 14 C-38 -16 -10 -36 22 -36 C44 -36 60 -22 64 -4 C52 -12 40 -8 34 4 L38 14Z" fill="#5B6CFF"/><path d="M-42 14 Q0 4 40 14" stroke="#fff" stroke-width="10" stroke-linecap="round" fill="none"/><circle cx="64" cy="-4" r="9" fill="#fff"/><circle cx="-8" cy="-14" r="3" fill="#fff" opacity=".8"/><circle cx="16" cy="-24" r="2.5" fill="#fff" opacity=".8"/><circle cx="30" cy="-6" r="2.5" fill="#fff" opacity=".8"/></g>`,
    beret:`<g transform="translate(96 22) rotate(-12)"><ellipse rx="44" ry="15" fill="#E8452C"/><ellipse cx="0" cy="5" rx="40" ry="9" fill="#C93A22"/><path d="M2 -14 l2 -9" stroke="#E8452C" stroke-width="5" stroke-linecap="round"/></g>`,
    hardhat:`<g transform="translate(100 30)"><path d="M-40 6 C-40 -26 -20 -40 0 -40 C20 -40 40 -26 40 6Z" fill="#FFCE32" stroke="#E8A21A" stroke-width="2"/><path d="M-50 8 H50" stroke="#E8A21A" stroke-width="9" stroke-linecap="round"/><path d="M0 -40 V4" stroke="#E8A21A" stroke-width="6"/><path d="M-24 -26 q4 -6 10 -8" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7"/></g>`
  }[art]||"";
  const front={
    target:`<g transform="translate(166 122) scale(.85)"><circle r="22" fill="#fff" stroke="#E8452C" stroke-width="6"/><circle r="13" fill="none" stroke="#E8452C" stroke-width="6"/><circle r="4.5" fill="#E8452C"/><path d="M-34 -30 L-3 -3" stroke="#2B2F45" stroke-width="3.5"/><path d="M-40 -36 l9 2 l-2 9z" fill="#2B2F45"/></g>`,
    nightcap:`<text x="152" y="70" font-size="20" font-weight="800" fill="#5B6CFF" font-family="Georgia,serif">z</text><text x="166" y="52" font-size="15" font-weight="800" fill="#5B6CFF" font-family="Georgia,serif">z</text><text x="177" y="38" font-size="11" font-weight="800" fill="#5B6CFF" font-family="Georgia,serif">z</text>`,
    bubbles:`<g transform="translate(138 4)"><path d="M10 0 h40 a10 10 0 0 1 10 10 v18 a10 10 0 0 1 -10 10 h-24 l-12 10 l2 -10 h-6 a10 10 0 0 1 -10 -10 v-18 a10 10 0 0 1 10 -10z" fill="#fff" stroke="#1A56E8" stroke-width="3"/><g fill="#1A56E8"><circle cx="18" cy="19" r="3.5"/><circle cx="30" cy="19" r="3.5"/><circle cx="42" cy="19" r="3.5"/></g></g>`,
    secret:`<text x="164" y="58" font-size="58" font-weight="800" font-family="Georgia,serif" fill="#7C4DFF" text-anchor="middle" transform="rotate(12 164 40)">?</text>`,
    beret:`<g transform="translate(140 112) rotate(-10) scale(.85)"><rect width="50" height="34" rx="4" fill="#2B2F45"/><path d="M0 0 H50 V11 H0Z" fill="#fff"/><path d="M8 0 L15 11 M23 0 L30 11 M38 0 L45 11" stroke="#2B2F45" stroke-width="4.5"/></g>`,
    race:PSO_GOGGLES,
    flame:"", sun:PSO_SPARK(36,22,.9,"#FFCE32"), chef:PSO_SPARK(40,30,.8,"#FF8FA3")
  }[art]||"";
  return `${back}${psoCore(face)}${top}${front}`;
}
/* ---------- Badges: a scalloped medal with a ribbon, a pastel sky for each badge and stars for the tier ---------- */
const BG_SKY={flame:"#FFE4DC",chef:"#DDF6F8",cap:"#EEE8FF",target:"#FFE9E3",race:"#DDF6F8",nightcap:"#E3E6FF",sun:"#FFF3C4",beret:"#FFE4DC",quill:"#FFF3C4",bubbles:"#E3ECFF",hardhat:"#FFF3C4",secret:"#EEE8FF"};
const BG_RIM=[["#C98552","#E9B78C","#8F5528"],["#A9B6C2","#E6ECF1","#6F7E8B"],["#F2B33D","#FFE38E","#B9800E"]];
const bgScallop=(r,n=14,a=3.2)=>{ let d=""; for(let i=0;i<=n*8;i++){ const t=i/(n*8)*Math.PI*2, rr=r+a*Math.cos(t*n); d+=(i?"L":"M")+(60+rr*Math.sin(t)).toFixed(2)+" "+(58-rr*Math.cos(t)).toFixed(2); } return d+"Z"; };
const BG_SCALLOP=bgScallop(55), BG_STAR="M0 -6 L1.8 -1.9 L6 -1.8 L2.7 0.9 L3.7 5 L0 2.6 L-3.7 5 L-2.7 0.9 L-6 -1.8 L-1.8 -1.9Z";
let medalN=0;
function medal(b, t, cls="medal"){
  psoEnsureDefs();
  const ti = t<0 ? -1 : tierIdx(b,t); const R = ti<0 ? ["#C3C9CF","#E9ECEF","#8D959D"] : BG_RIM[ti]; const id="mc"+(medalN++);
  const lockedSecret = b.secret && t<0, stars = ti<0 ? 0 : (b.t.length===1 ? 1 : ti+1);
  const label = lockedSecret ? "Secret badge" : b.pl+(ti<0?" (locked)":", "+TIERS[ti][1]);
  return `<svg class="${cls}" viewBox="0 0 120 128" role="img" aria-label="${esc(label)}">
    <defs><clipPath id="${id}"><circle cx="60" cy="58" r="44"/></clipPath><linearGradient id="${id}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${R[1]}"/><stop offset=".55" stop-color="${R[0]}"/><stop offset="1" stop-color="${R[2]}"/></linearGradient></defs>
    <path d="M36 92 L26 124 L38 117 L46 127 L54 98Z M84 92 L94 124 L82 117 L74 127 L66 98Z" fill="${ti<0?"#B7BEC5":"#1A56E8"}"/><path d="M36 92 L26 124 L38 117 L41 121Z M84 92 L94 124 L82 117 L79 121Z" fill="#000" opacity=".15"/>
    <path d="${BG_SCALLOP}" fill="url(#${id}g)" stroke="${R[2]}" stroke-width="1.5"/>
    <circle cx="60" cy="58" r="47.5" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2" stroke-dasharray="1 4.2" stroke-linecap="round"/>
    <circle cx="60" cy="58" r="44" fill="${BG_SKY[b.art]||"#EEE8FF"}"/>
    <g clip-path="url(#${id})">${lockedSecret?`<text x="60" y="76" font-size="54" font-weight="800" font-family="Georgia,serif" fill="#8D959D" text-anchor="middle">?</text>`:`<svg x="14" y="12" width="92" height="92" viewBox="2 -34 196 196">${psoHead(b.art)}</svg>`}</g>
    <circle cx="60" cy="58" r="44" fill="none" stroke="${R[2]}" stroke-opacity=".5" stroke-width="1.5"/>
    <ellipse cx="44" cy="22" rx="16" ry="6" fill="#fff" opacity=".35" transform="rotate(-24 44 22)"/>
    ${stars?`<g transform="translate(60 103)"><rect x="${-9-stars*7}" y="-9" width="${18+stars*14}" height="18" rx="9" fill="${R[2]}" stroke="#fff" stroke-width="2"/>${Array.from({length:stars},(_,i)=>`<path transform="translate(${(i-(stars-1)/2)*14} 0)" d="${BG_STAR}" fill="#FFE38E" stroke="#fff" stroke-width=".8"/>`).join("")}</g>`
      : lockedSecret?"":`<g transform="translate(60 103)"><circle r="10" fill="#8D959D" stroke="#fff" stroke-width="2"/><rect x="-4.5" y="-2" width="9" height="7" rx="1.5" fill="#fff"/><path d="M-2.8 -2 v-2.5 a2.8 2.8 0 0 1 5.6 0 v2.5" stroke="#fff" stroke-width="1.8" fill="none"/></g>`}
  </svg>`;
}

document.querySelectorAll(".brand-mark").forEach(m=>{ if(!m.firstChild) m.innerHTML=psoHead("x"); });
const PSO_LINES = {
  ok:["Brawo!","Nice one!","See? Easy.","Look at you go!","Psotek approves.","Too easy for you?","That's the one!"],
  no:["Serio? Try again!","Hmm… not quite.","Oops! Read it once more.","Close, but not quite.","I saw that!","Even hedgehogs get it wrong."],
  streak:{3:"Three in a row!",5:"Five in a row! Gaz do dechy!",10:"Ten in a row! Who are you?!",20:"Twenty! I'm speechless."}
};
const psoOn = () => !(typeof disp!=="undefined" && disp.pso===false);
let psoLast=0, psoRun=0, psoHide=0;
function psoSay(mood, line){
  if(!psoOn()) return;
  let t=document.getElementById("psoToast");
  if(!t){ t=document.createElement("div"); t.id="psoToast"; t.className="psotoast"; t.setAttribute("aria-hidden","true"); document.body.appendChild(t); }
  t.innerHTML=`<p class="psobub">${esc(line)}</p>${psotek(mood)}`;
  requestAnimationFrame(()=>t.classList.add("on"));
  clearTimeout(psoHide); psoHide=setTimeout(()=>t.classList.remove("on"),2600);
  psoLast=Date.now();
}
function psoReact(ok){
  psoRun = ok ? psoRun+1 : 0;
  if(!psoOn() || route==="game" || (typeof rush!=="undefined" && rush) || (typeof blitz!=="undefined" && blitz)) return;
  const since=Date.now()-psoLast;
  if(ok && PSO_LINES.streak[psoRun]) return psoSay(psoRun>=10?"champ":"happy", PSO_LINES.streak[psoRun]);
  if(since<7000) return;
  if(ok){ if(Math.random()<.3) psoSay("happy", pick(PSO_LINES.ok)); }
  else if(Math.random()<.55) psoSay("cheeky", pick(PSO_LINES.no));
}
function psoEnd(pct){
  const [m,line] = pct>=90 ? ["champ","Mistrz! That was perfect."] : pct>=60 ? ["happy","Not bad at all. Again?"] : ["cheeky","Serio? We go again. Right now."];
  return `<div class="psoend">${psotek(m)}<p class="psobub">${esc(line)}</p></div>`;
}

/* ---------- Badges ----------
   Counters live in their own key so nothing else changes. Each badge has three tiers (bronze, silver, gold); the secret one has one. */
const BG_STORE="psotek-badges-v1";
let bg={got:{}, n:{night:{}, early:{}, ans:0, perfect:0, wr:{}, vid:{}, pokes:0, best:0}};
try{ const s=JSON.parse(localStorage.getItem(BG_STORE)||"null"); if(s){ bg.got=s.got||{}; Object.assign(bg.n,s.n||{}); } }catch(e){}
const saveBg=()=>{ try{ localStorage.setItem(BG_STORE,JSON.stringify(bg)); }catch(e){} };
const TIERS=[["Brąz","Bronze","#B87A45","#E7C39C"],["Srebro","Silver","#9AA7B1","#E3E9EE"],["Złoto","Gold","#D9A441","#F6E2A8"]];
const convGood=()=>{ try{ return Object.values(JSON.parse(localStorage.getItem("vocab5-conv")||"{}")).filter(x=>x>=85).length; }catch(e){ return 0; } };
const BADGES=[
  {id:"streak", pl:"Kolczasty Upór", en:"Spiky Stubbornness", d:n=>`${n} days in a row`, t:[7,30,100], v:()=>bg.n.best, art:"flame", line:"You just don't give up, do you?"},
  {id:"words", pl:"Słownikożerca", en:"Word Eater", d:n=>`${n} words learned`, t:[20,60,150], v:()=>ALLW.filter(w=>state.known[w.id]||box(w.id)>=4).length, art:"chef", line:"Mmm. Words. Delicious."},
  {id:"grammar", pl:"Mistrz Gramatyki", en:"Grammar Master", d:n=>`${n} XP in Tenses and Grammar`, t:[100,400,1000], v:()=>(typeof lab!=="undefined"?lab.xp:0), art:"cap", line:"Present perfect? Perfect."},
  {id:"perfect", pl:"Bez Pudła", en:"Bullseye", d:n=>n===1?"a perfect round (no mistakes)":`${n} perfect rounds`, t:[1,10,50], v:()=>bg.n.perfect, art:"target", line:"Not one mistake. Suspicious."},
  {id:"speed", pl:"Szybki Jeż", en:"Speedy Hedgehog", d:n=>`a score of ${n} in a 60-second game`, t:[10,20,30], v:()=>Math.max(lab.best.rush||0,lab.best.vblitz||0), art:"race", line:"Gaz do dechy!"},
  {id:"night", pl:"Nocny Marek", en:"Night Owl", d:n=>`${n} days practising after 10 pm`, t:[3,10,25], v:()=>Object.keys(bg.n.night).length, art:"nightcap", line:"Shh… go to bed after this one."},
  {id:"early", pl:"Ranny Ptaszek", en:"Early Bird", d:n=>`${n} days practising before 8 am`, t:[3,10,25], v:()=>Object.keys(bg.n.early).length, art:"sun", line:"Coffee first? Fine. Then English."},
  {id:"film", pl:"Kinoman", en:"Film Buff", d:n=>n===1?"one video of the week finished":`${n} videos of the week finished`, t:[1,4,12], v:()=>Object.keys(bg.n.vid).length, art:"beret", line:"Popcorn's on me."},
  {id:"pen", pl:"Złote Pióro", en:"Golden Pen", d:n=>n===1?"one writing task passed":`${n} writing tasks passed`, t:[1,5,15], v:()=>Object.keys(bg.n.wr).length, art:"quill", line:"Shakespeare is nervous."},
  {id:"chat", pl:"Gaduła", en:"Chatterbox", d:n=>`${n} conversations at 85% or more`, t:[2,5,8], v:convGood, art:"bubbles", line:"Bla bla bla… in perfect English."},
  {id:"work", pl:"Pracowity Jeż", en:"Hard-working Hedgehog", d:n=>`${n} answers`, t:[100,1000,5000], v:()=>bg.n.ans, art:"hardhat", line:"Hard hat on. Back to work."},
  {id:"secret", pl:"Psotny Sekret", en:"Cheeky Secret", d:()=>"", t:[10], v:()=>bg.n.pokes, art:"secret", secret:true, line:"Stop poking me! …Fine, have a badge."}
];
const BGI=Object.fromEntries(BADGES.map(b=>[b.id,b]));
const tierOf=b=>{ const v=b.v()||0; let t=-1; b.t.forEach((x,i)=>{ if(v>=x) t=i; }); return t; };
const tierIdx=(b,t)=>b.t.length===1?2:t; /* the one-tier badge is gold */



const bgEarned=()=>BADGES.reduce((n,b)=>n+(Math.max(-1,tierOf(b))+1),0);


/* Counting: called from track() and other places */
function bgNote(ok){
  const h=new Date().getHours(), k=dayKey();
  if(h>=22||h<4) bg.n.night[k]=1; else if(h>=4&&h<8) bg.n.early[k]=1;
  bg.n.ans=(bg.n.ans||0)+1; saveBg(); bgCheck();
}
const bgSeen=new WeakSet();
function bgPerfect(obj, ok){ if(!obj||bgSeen.has(obj)) return ""; bgSeen.add(obj); if(ok){ bg.n.perfect=(bg.n.perfect||0)+1; saveBg(); setTimeout(bgCheck,600); } return ""; }
function bgWrite(key){ if(bg.n.wr[key]) return; bg.n.wr[key]=1; saveBg(); bgCheck(); }

let bgQueue=[], bgTimer=0;
function bgCheck(){
  try{
    bg.n.best=Math.max(bg.n.best||0, streak());
    if(typeof vidS!=="undefined") Object.entries(vidS.weeks).forEach(([k,S])=>{ const n=Object.keys(S.mc||{}).length; if(n>=6 && (k!==vidKey() || n>=VIDEO.questions.length)) bg.n.vid[k]=1; });
    let changed=false;
    BADGES.forEach(b=>{ const t=tierOf(b), had=bg.got[b.id]??-1; if(t>had){ bg.got[b.id]=t; changed=true; bgQueue.push([b,t]); } });
    if(changed) saveBg();
    if(bgQueue.length){ clearTimeout(bgTimer); bgTimer=setTimeout(bgShow,700); }
  }catch(e){}
}
function bgShow(){
  if(!bgQueue.length || $("#bgPop")) return;
  if((typeof rush!=="undefined"&&rush) || (typeof blitz!=="undefined"&&blitz) || route==="game" || !$("#gate").hidden){ bgTimer=setTimeout(bgShow,4000); return; }
  const list=bgQueue.splice(0); const last=new Map(); list.forEach(([b,t])=>last.set(b.id,[b,t])); const items=[...last.values()];
  const pop=document.createElement("div"); pop.className="bgpop"; pop.id="bgPop"; pop.setAttribute("role","dialog"); pop.setAttribute("aria-modal","true"); pop.setAttribute("aria-labelledby","bgPopT");
  let body;
  if(items.length===1){ const [b,t]=items[0], T=TIERS[tierIdx(b,t)];
    body=`<p class="eyebrow">Nowa odznaka · New badge</p>${medal(b,t,"medal bigmedal")}
      <h2 id="bgPopT">${esc(b.pl)}</h2><p class="bgen">${esc(b.en)}</p>
      <span class="bgtierlbl" style="background:${T[3]}">${T[0]} · ${T[1]}</span>
      <p style="margin:0;color:var(--muted)">${b.secret?"You found Psotek's secret.":esc(cap(b.d(b.t[t])))+"."}</p>
      ${psoOn()?`<div class="bgpso">${psotek("happy")}<p class="psobub">${esc(b.line)}</p></div>`:""}`;
  } else {
    body=`<p class="eyebrow">Nowe odznaki · New badges</p><h2 id="bgPopT">${items.length} badges at once!</h2>
      <div class="bgmini">${items.map(([b,t])=>`<figure>${medal(b,t)}<figcaption><b>${esc(b.pl)}</b><br>${TIERS[tierIdx(b,t)][1]}</figcaption></figure>`).join("")}</div>
      ${psoOn()?`<div class="bgpso">${psotek("champ")}<p class="psobub">Look at you! A whole collection.</p></div>`:""}`;
  }
  pop.innerHTML=`<div class="bgpopcard">${body}<div class="row"><button class="btn" type="button" id="bgOk">Super!</button>${route!=="badges"?`<button class="btn ghost" type="button" id="bgAll">See all badges</button>`:""}</div></div>`;
  document.body.appendChild(pop);
  const close=()=>{ pop.remove(); document.removeEventListener("keydown",esc1); if(bgQueue.length) setTimeout(bgShow,300); };
  const esc1=e=>{ if(e.key==="Escape") close(); };
  document.addEventListener("keydown",esc1);
  pop.addEventListener("click",e=>{ if(e.target===pop) close(); });
  $("#bgOk").onclick=close; const a=$("#bgAll"); if(a) a.onclick=()=>{ close(); go("badges"); };
  $("#bgOk").focus({preventScroll:true});
  setTimeout(()=>burst(pop.querySelector(".medal"),18),250);
  if(route==="badges" && typeof viewBadges==="function") viewBadges();
}
/* The hidden one: poke Psotek on the Today page */
document.addEventListener("click",e=>{ if(!e.target.closest(".herpso .pso")) return; bg.n.pokes=(bg.n.pokes||0)+1; saveBg();
  const lines=["Hey!","Stop it.","That tickles!","I'm spiky, you know.","Seriously?","Ow.","Psst… keep going."];
  if(bg.n.pokes<10) psoSay("cheeky", lines[Math.min(lines.length-1,bg.n.pokes-1)]); bgCheck(); });



/* Lab progress */
const LAB_STORE = "vocab5-lab-v1";
let lab = { xp:0, room:"table", level:2, seen:{}, combos:{}, best:{hunt:0, rush:0} };
try{ const s=JSON.parse(localStorage.getItem(LAB_STORE)||"null"); if(s) lab=Object.assign(lab,s); }catch(e){}
function saveLab(){ try{ localStorage.setItem(LAB_STORE, JSON.stringify(lab)); }catch(e){} }
const LEVELS=[["Spore",0],["Sprout",40],["Moss patch",100],["Fern",180],["Grove",280],["Old forest",400]];
function level(){ let i=0; LEVELS.forEach((l,k)=>{ if(lab.xp>=l[1]) i=k; });
  const next=LEVELS[i+1]; const pct= next? Math.round((lab.xp-LEVELS[i][1])/(next[1]-LEVELS[i][1])*100) : 100;
  return {name:LEVELS[i][0], pct, next}; }
function addXP(n){ const before=level().name; lab.xp+=n; saveLab(); paintXP(); return level().name!==before; }
function paintXP(){ const el=$("#xp"); if(!el) return; const L=level();
  el.innerHTML=`<span class="lvl">${esc(L.name)}</span><span class="xpbar" aria-hidden="true"><i style="width:${L.pct}%"></i></span><span class="xpn">${lab.xp} XP${L.next?` · ${L.next[1]-lab.xp} to ${esc(L.next[0])}`:""}</span>`; }

/* Grammar engine */
const SUBJ=[
  {t:"I",k:"1",lv:0},{t:"you",k:"p",lv:0},{t:"he",k:"3",lv:0},{t:"she",k:"3",lv:0},{t:"we",k:"p",lv:0},{t:"they",k:"p",lv:0},
  {t:"Anna",k:"3",lv:1},{t:"my friends",k:"p",lv:1},
  {t:"the manager",k:"3",lv:3},{t:"my colleagues",k:"p",lv:3},
  {t:"one of my friends",k:"3",lv:4},{t:"the people next door",k:"p",lv:4}
];
const VERBS=[
  {b:"work",s:"works",p:"worked",pp:"worked",ing:"working",o:"from home",lv:0},
  {b:"play",s:"plays",p:"played",pp:"played",ing:"playing",o:"football",lv:0},
  {b:"eat",s:"eats",p:"ate",pp:"eaten",ing:"eating",o:"breakfast",lv:0},
  {b:"go",s:"goes",p:"went",pp:"gone",ing:"going",o:"to the gym",lv:0},
  {b:"watch",s:"watches",p:"watched",pp:"watched",ing:"watching",o:"the news",lv:0},
  {b:"read",s:"reads",p:"read",pp:"read",ing:"reading",o:"the instructions",lv:0},
  {b:"swim",s:"swims",p:"swam",pp:"swum",ing:"swimming",o:"in the lake",lv:0},
  {b:"have",s:"has",p:"had",pp:"had",ing:"having",o:"lunch",lv:0},
  {b:"write",s:"writes",p:"wrote",pp:"written",ing:"writing",o:"a report",lv:1},
  {b:"study",s:"studies",p:"studied",pp:"studied",ing:"studying",o:"English",lv:1},
  {b:"make",s:"makes",p:"made",pp:"made",ing:"making",o:"a plan",lv:1},
  {b:"take",s:"takes",p:"took",pp:"taken",ing:"taking",o:"the bus",lv:1},
  {b:"plan",s:"plans",p:"planned",pp:"planned",ing:"planning",o:"the trip",lv:2},
  {b:"organise",s:"organises",p:"organised",pp:"organised",ing:"organising",o:"a meeting",lv:2},
  {b:"negotiate",s:"negotiates",p:"negotiated",pp:"negotiated",ing:"negotiating",o:"a new contract",lv:3},
  {b:"analyse",s:"analyses",p:"analysed",pp:"analysed",ing:"analysing",o:"the results",lv:3},
  {b:"review",s:"reviews",p:"reviewed",pp:"reviewed",ing:"reviewing",o:"the budget",lv:3},
  {b:"scrutinise",s:"scrutinises",p:"scrutinised",pp:"scrutinised",ing:"scrutinising",o:"the evidence",lv:4},
  {b:"overhaul",s:"overhauls",p:"overhauled",pp:"overhauled",ing:"overhauling",o:"the system",lv:4},
  {b:"mitigate",s:"mitigates",p:"mitigated",pp:"mitigated",ing:"mitigating",o:"the risks",lv:4}
];


const TINFO={
  "present|simple":{name:"Present simple",use:"Habits, routines, facts and things that are generally true.",sig:["always","usually","every day","never"],form:"verb / verb + s (he, she, it) · do / does + verb in questions and negatives"},
  "present|continuous":{name:"Present continuous",use:"Actions happening now or around now, and temporary situations.",sig:["now","at the moment","this week","currently"],form:"am / is / are + verb-ing"},
  "present|perfect":{name:"Present perfect",use:"A past action with a result now, life experience, or a time period that isn't finished.",sig:["already","yet","just","ever","since","for"],form:"have / has + past participle"},
  "present|perfect continuous":{name:"Present perfect continuous",use:"An activity that started in the past and is still going on, or has just stopped. The focus is on how long.",sig:["for","since","all day","how long"],form:"have / has been + verb-ing"},
  "past|simple":{name:"Past simple",use:"A finished action at a specific time in the past.",sig:["yesterday","last week","in 2019","two days ago"],form:"verb + ed / irregular past · did + verb in questions and negatives"},
  "past|continuous":{name:"Past continuous",use:"An action in progress at a moment in the past, often interrupted by another action.",sig:["while","when","at 8 pm yesterday"],form:"was / were + verb-ing"},
  "past|perfect":{name:"Past perfect",use:"An action that happened before another action in the past.",sig:["before","after","already","by the time"],form:"had + past participle"},
  "past|perfect continuous":{name:"Past perfect continuous",use:"How long an activity had been going on before a moment in the past.",sig:["for","since","by the time","how long"],form:"had been + verb-ing"},
  "future|simple":{name:"Future simple",use:"Predictions, promises, offers and decisions made at the moment of speaking.",sig:["tomorrow","soon","I think","probably"],form:"will + verb"},
  "future|continuous":{name:"Future continuous",use:"An action that will be in progress at a moment in the future.",sig:["this time tomorrow","at 9 tonight","all evening"],form:"will be + verb-ing"},
  "future|perfect":{name:"Future perfect",use:"An action that will be finished before a moment in the future.",sig:["by Friday","by 2030","by the time"],form:"will have + past participle"},
  "future|perfect continuous":{name:"Future perfect continuous",use:"How long an activity will have been going on at a moment in the future.",sig:["by June … for","by then","for ten years"],form:"will have been + verb-ing"}
};

const LV=["A1","A2","B1","B2","C1","C2"];

const T12=Object.keys(TINFO);
const LVTENSES=(()=>{ const a1=["present|simple","present|continuous"];
  const a2=[...a1,"past|simple","past|continuous","future|simple","present|perfect"];
  const b1=[...a2,"present|perfect continuous","past|perfect"];
  const b2=[...b1,"future|continuous","future|perfect","past|perfect continuous"];
  return [a1,a2,b1,b2,T12,T12]; })();
const lvl=()=>{ const n=+lab.level; return n>=0&&n<=5 ? n : 2; };


const subjIdx=()=>SUBJ.map((x,i)=>i).filter(i=>SUBJ[i].lv<=lvl());
const verbIdx=()=>VERBS.map((x,i)=>i).filter(i=>VERBS[i].lv<=lvl());

const NEG={do:"don't",does:"doesn't",did:"didn't",is:"isn't",are:"aren't",was:"wasn't",were:"weren't",have:"haven't",has:"hasn't",had:"hadn't",will:"won't"};
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
function chain(time, asp, k){
  const be = time==="present" ? (k==="1"?"am":k==="3"?"is":"are") : (k==="p"?"were":"was");
  const have = k==="3"?"has":"have";
  return {
    "present|simple":{aux:[],main:k==="3"?"s":"b",doAux:k==="3"?"does":"do"},
    "present|continuous":{aux:[be],main:"ing"},
    "present|perfect":{aux:[have],main:"pp"},
    "present|perfect continuous":{aux:[have,"been"],main:"ing"},
    "past|simple":{aux:[],main:"p",doAux:"did"},
    "past|continuous":{aux:[be],main:"ing"},
    "past|perfect":{aux:["had"],main:"pp"},
    "past|perfect continuous":{aux:["had","been"],main:"ing"},
    "future|simple":{aux:["will"],main:"b"},
    "future|continuous":{aux:["will","be"],main:"ing"},
    "future|perfect":{aux:["will","have"],main:"pp"},
    "future|perfect continuous":{aux:["will","have","been"],main:"ing"}
  }[time+"|"+asp];
}
/* pol: "pos" | "neg" | "q". Returns coloured parts. */
function build(si, vi, time, asp, pol, full){
  const S=SUBJ[si], V=VERBS[vi], c=chain(time,asp,S.k);
  let aux=c.aux.slice(), main=V[c.main];
  if(pol!=="pos" && c.doAux){ aux=[c.doAux]; main=V.b; }
  const P=[];
  if(pol==="q" || pol==="negq"){
    P.push(pol==="negq" ? {t:cap(aux[0]==="am"?"aren't":NEG[aux[0]]),k:"auxneg"} : {t:cap(aux[0]),k:"aux"}); P.push({t:S.t,k:"subj"});
    aux.slice(1).forEach(a=>P.push({t:a,k:"aux"}));
    P.push({t:main,k:"main"}); P.push({t:V.o,k:"obj"}); P.push({t:"?",k:"end"});
  } else {
    P.push({t:cap(S.t),k:"subj"});
    if(pol==="neg"){
      if(aux[0]==="am" || full){ P.push({t:aux[0],k:"aux"}); P.push({t:"not",k:"neg"}); }
      else P.push({t:NEG[aux[0]],k:"auxneg"});
      aux.slice(1).forEach(a=>P.push({t:a,k:"aux"}));
    } else aux.forEach(a=>P.push({t:a,k:"aux"}));
    P.push({t:main,k:"main"}); P.push({t:V.o,k:"obj"}); P.push({t:".",k:"end"});
  }
  return P;
}
const plain = P => P.map(p=>p.t).join(" ").replace(/ ([.?])$/,"$1");


const rnd = n => Math.floor(Math.random()*n);
const pick = a => a[rnd(a.length)];


/* Timeline picture for a tense */
function timeline(time, asp){
  const ref={past:92,present:170,future:252}[time];
  let g="";
  if(asp==="simple"){
    g = time==="present" ? [70,120,170,220,270].map(x=>`<circle class="dot" cx="${x}" cy="42" r="5"/>`).join("")
                         : `<circle class="dot" cx="${ref}" cy="42" r="7"/>`;
  } else if(asp==="continuous"){
    let d=`M${ref-42} 42`; for(let x=ref-42;x<ref+42;x+=12) d+=` q3 -9 6 0 q3 9 6 0`;
    g=`<path class="act" d="${d}"/>`;
  } else if(asp==="perfect"){
    const s=ref-62; g=`<circle class="dot" cx="${s}" cy="42" r="6"/><path class="act" d="M${s+8} 42 Q${(s+ref)/2} 20 ${ref-6} 38"/><path class="act" d="M${ref-14} 34 L${ref-6} 38 L${ref-10} 46"/>`;
  } else {
    const s=ref-78; let d=`M${s} 42`; for(let x=s;x<ref-12;x+=12) d+=` q3 -9 6 0 q3 9 6 0`;
    g=`<path class="act" d="${d}"/><path class="act" d="M${ref-12} 42 L${ref-3} 42 M${ref-9} 37 L${ref-3} 42 L${ref-9} 47"/>`;
  }
  const refMark = time==="present" ? "" : `<line class="ref" x1="${ref}" y1="28" x2="${ref}" y2="56"/><text class="r" x="${ref}" y="18" text-anchor="middle">then</text>`;
  return `<svg class="tl" viewBox="0 0 340 74" role="img" aria-label="Timeline for the ${esc(TINFO[time+"|"+asp].name.toLowerCase())}">
    <line class="axis" x1="10" y1="42" x2="330" y2="42"/><path class="axis" d="M322 37 L330 42 L322 47" fill="none"/>
    <line class="now" x1="170" y1="22" x2="170" y2="62"/>
    <text x="22" y="68">past</text><text x="170" y="72" text-anchor="middle">now</text><text x="318" y="68" text-anchor="end">future</text>
    ${refMark}${g}</svg>`;
}

/* Polish and Romanian versions of the grammar rules, tense uses and tense-table notes (shown when a student asks for a translation) */
const TRX = {"intro.articles": {"pl": "Siedem zasad wyjaśnia prawie każde użycie a, an i the. Przeczytaj jedną, potem poćwicz.", "ro": "Șapte reguli acoperă aproape orice folosire a lui a, an și the. Citește una, apoi exersează."}, "articles.0": {"pl": ["a / an: jedna z wielu", "Używaj a lub an z JEDNĄ policzalną rzeczą, gdy mówisz o niej pierwszy raz albo gdy nie ma znaczenia, która to jest."], "ro": ["a / an: unul dintre multe", "Folosește a sau an cu UN singur lucru numărabil, când e nou în discuție sau când nu contează care anume."]}, "articles.1": {"pl": ["a czy an? Słuchaj dźwięku", "An stawiamy przed SAMOGŁOSKĄ w wymowie, a a przed SPÓŁGŁOSKĄ w wymowie. Decyduje pierwszy dźwięk, nie pierwsza litera."], "ro": ["a sau an? Ascultă sunetul", "Folosește an înaintea unui SUNET vocalic și a înaintea unui SUNET consonantic. Contează primul sunet, nu prima literă."]}, "articles.2": {"pl": ["the: obaj wiemy, o który chodzi", "Używaj the, gdy słuchacz wie dokładnie, o którą rzecz chodzi: już o niej mówiłeś, jest tylko jedna albo jest najlepsza, pierwsza lub ta sama."], "ro": ["the: amândoi știm care", "Folosește the când cel care ascultă știe exact la ce te referi: ai mai pomenit de el, există unul singur sau e cel mai bun, primul ori același."]}, "articles.3": {"pl": ["Bez przedimka: rzeczy ogólnie", "O rzeczach ogólnie mówimy w liczbie mnogiej albo z rzeczownikami niepoliczalnymi, BEZ przedimka. Wyjątek: the + przymiotnik oznacza grupę ludzi (the rich – bogaci, the elderly – osoby starsze)."], "ro": ["Fără articol: lucruri în general", "Când vorbești despre lucruri în general, folosești pluralul sau substantive nenumărabile, FĂRĂ articol. Excepție: the + adjectiv pentru un grup de oameni (the rich – bogații, the elderly – vârstnicii)."]}, "articles.4": {"pl": ["Zawody i opisy: a / an", "Mówiąc, kim ktoś jest albo co robi, używaj a / an: She's a doctor."], "ro": ["Meserii și descrieri: a / an", "Când spui ce este sau ce face cineva, folosește a / an: She's a doctor."]}, "articles.5": {"pl": ["Miejsca, codzienne czynności, czas", "Wiele stałych wyrażeń nie ma przedimka: go to school / work / bed, at home, by bus, have lunch, in prison. Inne zawsze go mają: in the morning, go to the cinema, twice a week. Ucz się ich jako gotowych zwrotów."], "ro": ["Locuri, rutine și expresii de timp", "Multe expresii fixe nu au articol: go to school / work / bed, at home, by bus, have lunch, in prison. Altele au mereu: in the morning, go to the cinema, twice a week. Învață-le ca expresii gata făcute."]}, "articles.6": {"pl": ["Nazwy: zwykle bez przedimka", "Większość nazw nie ma przedimka: ludzie, miasta, większość krajów, języki, sporty, posiłki. The używamy z rzekami, morzami, łańcuchami górskimi, krajami w liczbie mnogiej (the USA, the Netherlands) i instrumentami muzycznymi."], "ro": ["Nume: de obicei fără articol", "Majoritatea numelor nu au articol: persoane, orașe, majoritatea țărilor, limbi, sporturi, mese. Folosește the cu râuri, mări, lanțuri muntoase, țări la plural (the USA, the Netherlands) și instrumente muzicale."]}, "intro.modals": {"pl": "Must, have to, should, might, can: małe słowa, które zmieniają znaczenie całego zdania.", "ro": "Must, have to, should, might, can: cuvinte mici care schimbă sensul întregii propoziții."}, "modals.0": {"pl": ["must i have to: obowiązek", "Must – gdy sam czujesz, że trzeba, i na tabliczkach z nakazami; have to – gdy obowiązek przychodzi z zewnątrz albo to rutyna. Czas przeszły obu to had to."], "ro": ["must și have to: obligație", "Must pentru reguli pe care le simți tu sau care apar pe panouri; have to pentru reguli venite din afară și pentru rutine. Trecutul amândurora este had to."]}, "modals.1": {"pl": ["mustn't a don't have to", "Mustn't = nie wolno. Don't have to (albo needn't) = nie musisz, nie ma potrzeby."], "ro": ["mustn't și don't have to", "Mustn't = este interzis. Don't have to (sau needn't) = nu este necesar."]}, "modals.2": {"pl": ["Rady: should, ought to, had better", "Should i ought to służą do dawania rad (powinieneś). Had better jest mocniejsze, prawie jak ostrzeżenie (lepiej, żebyś…), i łączy się z czasownikiem bez to."], "ro": ["Sfaturi: should, ought to, had better", "Should și ought to dau sfaturi (ar trebui). Had better e mai puternic, aproape un avertisment (ai face bine să…), și e urmat de verbul la forma de bază, fără to."]}, "modals.3": {"pl": ["Możliwość i wnioskowanie", "Might / may / could = może, możliwe. Must = jestem pewien, że to prawda. Can't = jestem pewien, że to nieprawda."], "ro": ["Posibilitate și deducție", "Might / may / could = poate, e posibil. Must = sunt sigur că e adevărat. Can't = sunt sigur că nu e adevărat."]}, "modals.4": {"pl": ["Umiejętność i pozwolenie", "Can / could wyrażają umiejętność i pozwolenie. W innych czasach używaj be able to (will be able to, have been able to)."], "ro": ["Abilitate și permisiune", "Can / could exprimă abilitatea și permisiunea. La alte timpuri folosește be able to (will be able to, have been able to)."]}, "modals.5": {"pl": ["Czasowniki modalne o przeszłości", "Modal + have + III forma mówi o przeszłości: should have (żal: powinienem był), must have / can't have (wniosek: na pewno / na pewno nie), could have (stracona okazja: mogłeś…)."], "ro": ["Verbe modale despre trecut", "Modal + have + participiul trecut vorbește despre trecut: should have (regret: ar fi trebuit), must have / can't have (deducție: sigur / sigur nu), could have (ocazie ratată: ai fi putut)."]}, "intro.cond": {"pl": "Zdania z if: fakty, prawdopodobna przyszłość, sytuacje wyobrażone i żal za przeszłością.", "ro": "Propoziții cu if: fapte reale, un viitor probabil, situații imaginare și regrete."}, "cond.0": {"pl": ["Tryb zerowy: fakty", "If + czas teraźniejszy, czas teraźniejszy. Rzeczy, które są zawsze prawdziwe."], "ro": ["Tipul zero: fapte", "If + prezent, prezent. Lucruri care sunt mereu adevărate."]}, "cond.1": {"pl": ["Pierwszy: realna przyszłość", "If + czas teraźniejszy, will + czasownik. Nigdy nie stawiaj will po if, when ani as soon as, choć po polsku mówisz „jeśli będzie padać”."], "ro": ["Tipul unu: viitor real", "If + prezent, will + verb. Nu pune niciodată will după if, when sau as soon as, deși în română spui „dacă va ploua”."]}, "cond.2": {"pl": ["Drugi: wyobrażona teraźniejszość", "If + czas przeszły, would + czasownik. Sytuacje nierealne albo mało prawdopodobne teraz lub w przyszłości. If I were you (na twoim miejscu) to klasyczny sposób dawania rad."], "ro": ["Tipul doi: prezent imaginar", "If + trecut, would + verb. Situații ireale sau puțin probabile acum ori în viitor. If I were you (dacă aș fi în locul tău) e forma clasică pentru sfaturi."]}, "cond.3": {"pl": ["Trzeci: wyobrażona przeszłość", "If + Past Perfect (had + III forma), would have + III forma. Żal i rzeczy, które się nie wydarzyły."], "ro": ["Tipul trei: trecut imaginar", "If + mai-mult-ca-perfect (had + participiu), would have + participiu. Regrete și lucruri care nu s-au întâmplat."]}, "cond.4": {"pl": ["unless, in case, I wish, mieszane", "Unless = jeśli nie. In case = na wypadek, gdyby. I wish + czas przeszły (teraz) albo Past Perfect (przeszłość) = szkoda, że… Zdania mieszane: warunek w przeszłości, skutek teraz."], "ro": ["unless, in case, I wish, mixte", "Unless = dacă nu. In case = în caz că, ca să fii pregătit. I wish + trecut (acum) sau mai-mult-ca-perfect (trecut) = păcat că… / aș vrea să… Mixte: condiția în trecut, rezultatul în prezent."]}, "intro.passive": {"pl": "Gdy czynność jest ważniejsza niż to, kto ją wykonał.", "ro": "Când acțiunea contează mai mult decât cine a făcut-o."}, "passive.0": {"pl": ["Budowa i użycie", "Be + III forma. Używaj, gdy wykonawca jest nieznany, nieważny albo oczywisty."], "ro": ["Formă și folosire", "Be + participiul trecut. Folosește-l când cel care face acțiunea e necunoscut, neimportant sau evident."]}, "passive.1": {"pl": ["Strona bierna w każdym czasie", "Zmieniasz tylko be: is made, was made, has been made, will be made, is being made."], "ro": ["Pasivul la orice timp", "Schimbi doar be: is made, was made, has been made, will be made, is being made."]}, "passive.2": {"pl": ["by + wykonawca", "Dodaj by (przez) tylko wtedy, gdy wykonawca jest ważny albo ciekawy."], "ro": ["by + autorul acțiunii", "Adaugă by (de către) doar când cel care face acțiunea e important sau interesant."]}, "passive.3": {"pl": ["Czasowniki modalne w stronie biernej", "Modal + be + III forma; o przeszłości: modal + have been + III forma."], "ro": ["Verbe modale la pasiv", "Modal + be + participiu; pentru trecut: modal + have been + participiu."]}, "passive.4": {"pl": ["have something done; it is said", "Have / get something done = ktoś robi to dla ciebie (np. fryzjer, mechanik). It is said that… / He is believed to… to formalny sposób przekazywania opinii (mówi się, że…)."], "ro": ["have something done; it is said", "Have / get something done = altcineva face asta pentru tine (de exemplu frizerul, mecanicul). It is said that… / He is believed to… e un mod formal de a relata păreri (se spune că…)."]}, "intro.questions": {"pl": "Szyk zdania, do i does, pytania o podmiot i grzeczne pytania pośrednie.", "ro": "Ordinea cuvintelor, do și does, întrebări despre subiect și întrebări indirecte politicoase."}, "questions.0": {"pl": ["Szyk zdania", "(Słowo pytające) + czasownik posiłkowy + podmiot + czasownik główny."], "ro": ["Ordinea cuvintelor", "(Cuvânt interogativ) + verb auxiliar + subiect + verbul principal."]}, "questions.1": {"pl": ["do, does, did", "Gdy nie ma innego czasownika posiłkowego, dodaj do / does / did i użyj czasownika w formie podstawowej."], "ro": ["do, does, did", "Când nu există alt verb auxiliar, adaugă do / does / did și folosește verbul la forma de bază."]}, "questions.2": {"pl": ["Pytania o podmiot", "Gdy who albo what jest podmiotem (kto? co?), nie ma do: Who called you?"], "ro": ["Întrebări despre subiect", "Când who sau what este subiectul (cine? ce?), nu se folosește do: Who called you?"]}, "questions.3": {"pl": ["Pytania pośrednie", "Po Can you tell me… / Do you know… / I wonder… używaj zwykłego szyku zdania oznajmującego, bez do."], "ro": ["Întrebări indirecte", "După Can you tell me… / Do you know… / I wonder… folosește ordinea obișnuită a propoziției afirmative, fără do."]}, "questions.4": {"pl": ["Question tags i przyimki", "Question tags (…, prawda?) powtarzają czasownik posiłkowy (zdanie twierdzące → przeczący tag). Przyimki zwykle idą na koniec pytania: Who are you talking to?"], "ro": ["Question tags și prepoziții", "Question tags (…, nu-i așa?) repetă verbul auxiliar (propoziție afirmativă → tag negativ). Prepozițiile stau de obicei la sfârșitul întrebării: Who are you talking to?"]}, "intro.patterns": {"pl": "Doing czy to do? Niektóre czasowniki łączą się z -ing, inne z to, a kilka zmienia wtedy znaczenie.", "ro": "Doing sau to do? Unele verbe cer -ing, altele to, iar câteva își schimbă sensul."}, "patterns.0": {"pl": ["czasownik + -ing", "Te czasowniki łączą się z -ing: enjoy, finish, mind, avoid, suggest, keep, consider, can't stand, practise."], "ro": ["verb + -ing", "Aceste verbe sunt urmate de -ing: enjoy, finish, mind, avoid, suggest, keep, consider, can't stand, practise."]}, "patterns.1": {"pl": ["czasownik + to", "Te czasowniki łączą się z to + czasownik: want, decide, hope, plan, agree, refuse, promise, manage, would like, need."], "ro": ["verb + to", "Aceste verbe sunt urmate de to + verb: want, decide, hope, plan, agree, refuse, promise, manage, would like, need."]}, "patterns.2": {"pl": ["przyimek + -ing", "Po każdym przyimku używaj -ing: interested in learning, good at cooking, look forward to seeing, instead of going."], "ro": ["prepoziție + -ing", "După orice prepoziție folosește -ing: interested in learning, good at cooking, look forward to seeing, instead of going."]}, "patterns.3": {"pl": ["stop, remember, forget, try", "Obie konstrukcje są możliwe, ale znaczą co innego. Remember to do (pamiętać, żeby coś zrobić) i remember doing (pamiętać, że się coś zrobiło). Stop doing (przestać coś robić) i stop to do (zatrzymać się, żeby coś zrobić)."], "ro": ["stop, remember, forget, try", "Ambele construcții sunt posibile, dar au sensuri diferite. Remember to do (să nu uiți să faci ceva) și remember doing (îți amintești că ai făcut). Stop doing (a renunța la ceva) și stop to do (a te opri ca să faci ceva)."]}, "patterns.4": {"pl": ["czasownik + osoba + to; make / let + forma podstawowa", "Want / ask / tell someone to do (chcieć, prosić, kazać komuś coś zrobić). Make i let łączą się z czasownikiem bez to: make me laugh, let him go."], "ro": ["verb + persoană + to; make / let + forma de bază", "Want / ask / tell someone to do (a vrea, a ruga, a-i spune cuiva să facă ceva). Make și let sunt urmate de verb fără to: make me laugh, let him go."]}, "intro.preps": {"pl": "In, on, at w wyrażeniach czasu i miejsca oraz przyimki, które „należą” do konkretnych słów.", "ro": "In, on, at pentru timp și loc, plus prepozițiile care „merg” cu anumite cuvinte."}, "preps.0": {"pl": ["Czas: at, on, in", "At z godzinami oraz at night / at the weekend. On z dniami i datami. In z miesiącami, latami, porami roku i porami dnia (in the morning)."], "ro": ["Timp: at, on, in", "At cu orele, plus at night / at the weekend. On cu zilele și datele. In cu lunile, anii, anotimpurile și părțile zilei (in the morning)."]}, "preps.1": {"pl": ["Miejsce: in, on, at", "In – wewnątrz, w miastach i krajach. On – na powierzchni oraz on the bus / train. At – w punkcie albo w miejscu, gdzie się coś robi: at the bus stop, at work, at home."], "ro": ["Loc: in, on, at", "In – înăuntru, în orașe și țări. On – pe o suprafață, plus on the bus / train. At – într-un punct sau într-un loc de activitate: at the bus stop, at work, at home."]}, "preps.2": {"pl": ["Ruch: to, into, arrive in / at", "Go to – iść albo jechać do miejsca, get into – wsiąść do samochodu, get on / off – wsiąść do autobusu / wysiąść z niego. Arrive in – przyjechać do miasta lub kraju, arrive at – do budynku. Przed home nie ma to: go home."], "ro": ["Mișcare: to, into, arrive in / at", "Go to – a merge undeva, get into – a urca în mașină, get on / off – a urca în autobuz / a coborî din el. Arrive in – a ajunge într-un oraș sau o țară, arrive at – la o clădire. Înainte de home nu se pune to: go home."]}, "preps.3": {"pl": ["Przymiotnik + przyimek", "Ucz się ich parami: interested in, good at, afraid of, proud of, responsible for, married to, different from. Uwaga: po polsku przyimek bywa inny (dumny z = proud of)."], "ro": ["Adjectiv + prepoziție", "Învață-le în perechi: interested in, good at, afraid of, proud of, responsible for, married to, different from. Atenție: în română prepoziția e adesea alta (mândru de = proud of)."]}, "preps.4": {"pl": ["Czasownik + przyimek", "depend on, listen to, wait for, look at, agree with, apply for, consist of. Niektóre czasowniki nie mają przyimka: discuss something (nie „discuss about”), enter a room (nie „enter to”)."], "ro": ["Verb + prepoziție", "depend on, listen to, wait for, look at, agree with, apply for, consist of. Unele verbe nu au prepoziție: discuss something (nu „discuss about”), enter a room (nu „enter into”)."]}, "use.present|simple": {"pl": "Zwyczaje, rutyna, fakty i rzeczy ogólnie prawdziwe.", "ro": "Obiceiuri, rutine, fapte și lucruri adevărate în general."}, "use.present|continuous": {"pl": "Czynności, które dzieją się teraz albo w tym okresie, oraz sytuacje tymczasowe.", "ro": "Acțiuni care se petrec acum sau în perioada aceasta și situații temporare."}, "use.present|perfect": {"pl": "Czynność z przeszłości, której skutek widać teraz, doświadczenie życiowe albo okres, który jeszcze się nie skończył.", "ro": "O acțiune trecută cu rezultat în prezent, experiențe de viață sau o perioadă care nu s-a încheiat."}, "use.present|perfect continuous": {"pl": "Czynność, która zaczęła się w przeszłości i trwa nadal albo dopiero się skończyła. Ważne jest, jak długo.", "ro": "O activitate care a început în trecut și continuă sau tocmai s-a încheiat. Accentul e pe cât timp."}, "use.past|simple": {"pl": "Zakończona czynność w określonym momencie w przeszłości.", "ro": "O acțiune încheiată, într-un moment precis din trecut."}, "use.past|continuous": {"pl": "Czynność trwająca w danym momencie w przeszłości, często przerwana przez inną czynność.", "ro": "O acțiune în desfășurare într-un moment din trecut, adesea întreruptă de altă acțiune."}, "use.past|perfect": {"pl": "Czynność, która wydarzyła się przed inną czynnością w przeszłości.", "ro": "O acțiune petrecută înaintea altei acțiuni din trecut."}, "use.past|perfect continuous": {"pl": "Jak długo coś trwało przed danym momentem w przeszłości.", "ro": "Cât timp a durat o activitate până la un moment din trecut."}, "use.future|simple": {"pl": "Przewidywania, obietnice, propozycje i decyzje podejmowane w chwili mówienia.", "ro": "Predicții, promisiuni, oferte și decizii luate în momentul vorbirii."}, "use.future|continuous": {"pl": "Czynność, która będzie trwała w danym momencie w przyszłości.", "ro": "O acțiune care va fi în desfășurare la un moment din viitor."}, "use.future|perfect": {"pl": "Czynność, która zakończy się przed danym momentem w przyszłości.", "ro": "O acțiune care va fi încheiată înainte de un moment din viitor."}, "use.future|perfect continuous": {"pl": "Jak długo coś będzie trwało do danego momentu w przyszłości.", "ro": "Cât timp va fi durat o activitate până la un moment din viitor."}, "note.present|simple": {"pl": "Pytania i przeczenia potrzebują do / does + V1: Does she write? (Nie z be ani can: Is she…? Can you…?)", "ro": "Întrebările și negațiile au nevoie de do / does + V1: Does she write? (Nu cu be sau can: Is she…? Can you…?)"}, "note.present|continuous": {"pl": "Czasowniki stanu (know, like, want, need…) zwykle nie mają -ing: I know, a nie I'm knowing.", "ro": "Verbele de stare (know, like, want, need…) de obicei nu primesc -ing: I know, nu I'm knowing."}, "note.present|perfect": {"pl": "Nie z zakończonym czasem (yesterday, in 2020) – wtedy użyj Past Simple.", "ro": "Nu cu un timp încheiat (yesterday, in 2020): atunci folosește past simple."}, "note.present|perfect continuous": {"pl": "Z czasownikami stanu używaj Present Perfect: I've known her for years.", "ro": "Cu verbele de stare folosește present perfect: I've known her for years."}, "note.past|simple": {"pl": "Pytania i przeczenia potrzebują did + V1: Did you write? I didn't write. (Nie z be: Was it…?)", "ro": "Întrebările și negațiile au nevoie de did + V1: Did you write? I didn't write. (Nu cu be: Was it…?)"}, "note.past|continuous": {"pl": "Często przerywa ją czynność w Past Simple: was writing … called.", "ro": "Adesea e întreruptă de o acțiune la past simple: was writing … called."}, "note.past|perfect": {"pl": "Wcześniejsza z dwóch czynności w przeszłości.", "ro": "Prima dintre două acțiuni trecute (cea petrecută mai devreme)."}, "note.past|perfect continuous": {"pl": "Jak długo – aż do momentu w przeszłości. Czasowniki stanu: I had known her for years.", "ro": "Cât timp, până la un moment din trecut. Verbe de stare: I had known her for years."}, "note.future|simple": {"pl": "Po if, when, before, as soon as używaj Present Simple: When I finish, I'll call you.", "ro": "După if, when, before, as soon as folosește present simple: When I finish, I'll call you."}, "note.future|continuous": {"pl": "W trakcie, w danym momencie w przyszłości. Czasowniki stanu: I'll know, a nie I'll be knowing.", "ro": "În desfășurare la un moment din viitor. Verbe de stare: I'll know, nu I'll be knowing."}, "note.future|perfect": {"pl": "Zwykle z by (do, przed): by Friday, by the time you come.", "ro": "De obicei cu by (până la): by Friday, by the time you come."}, "note.future|perfect continuous": {"pl": "Jak długo – aż do momentu w przyszłości.", "ro": "Cât timp, până la un moment din viitor."}, "note.Present conditional": {"pl": "If + Past Simple, would + V1. Nigdy nie używaj would w części z if.", "ro": "If + past simple, would + V1. Niciodată would în partea cu if."}, "note.Perfect conditional": {"pl": "If + had + V3, would have + V3. Mówi o przeszłości, która się nie wydarzyła.", "ro": "If + had + V3, would have + V3. Vorbește despre un trecut care nu s-a întâmplat."}, "note.Imperative": {"pl": "Bez podmiotu: Write!, a nie You write! Przeczenie: Don't write.", "ro": "Fără subiect: Write!, nu You write! Negativ: Don't write."}, "note.stative": {"pl": "Te czasowniki opisują stany, nie czynności, więc w czasach Continuous zwykle nie mają -ing: I know the answer, a nie I'm knowing.", "ro": "Aceste verbe descriu stări, nu acțiuni, așa că la timpurile continue de obicei nu primesc -ing: I know the answer, nu I'm knowing."}};
/* Rule recipes, drawn with the same verb-form shapes as the tense table */


TRX["intro.verbs"]={pl:"Czasowniki, które łamią zasady. Ucz się ich trójkami: go, went, gone.",ro:"Verbele care încalcă regulile. Învață-le câte trei: go, went, gone."};





let trLang=(()=>{ try{ const v=localStorage.getItem("psotek-trlang"); return v==="pl"||v==="ro"?v:""; }catch(e){ return ""; } })();


function trBox(k,lg=trLang){ if(!lg) return ""; const v=TRX[k]&&TRX[k][lg]; if(!v) return "";
  return `<span class="trbox" lang="${lg}"><span class="l1flag">${lg.toUpperCase()}</span>${Array.isArray(v)?`<b>${esc(v[0])}.</b> ${esc(v[1])}`:esc(v)}</span>`; }

document.addEventListener("click",e=>{
  const t=e.target.closest&&e.target.closest("[data-trl]");
  if(t){ trLang=t.dataset.trl; try{ localStorage.setItem("psotek-trlang",trLang); }catch(err){} const y=window.scrollY; if(typeof viewLab==="function" && state.route && /lab|grammar/.test(state.route)) viewLab(); else render(); window.scrollTo(0,y); return; }
  const a=e.target.closest&&e.target.closest("[data-trask]");
  if(a){ const host=a.closest(".trhost,.feedback")||a.parentElement; host.querySelectorAll(".trbox").forEach(x=>x.remove()); host.insertAdjacentHTML("beforeend",trBox(a.dataset.trask,a.dataset.l)); }
});



/* ---------- Lab view ---------- */



/* Room: Articles (a / an / the / no article) — built for Polish speakers (no articles in Polish) and Romanian speakers (articles attached to the noun) */






const art = { mode:"rules", q:null, done:false, streak:0, right:0, seen:0, queue:{} };






/* ---------- Room: Tense table (all tenses on one page, colour-coded by time) ----------
   Verb-form shapes: box = V1 (base: write), triangle = V2 (past: wrote), oval = V3 (participle: written). */










/* Room 1: Tense map */



/* Room 2: Sentence machine */



/* Room 3: Do or does? */
const HELP=[
  ["____ your sister live near here?","does","Your sister = she, so the question uses does. The main verb stays in its base form: live.",0],
  ["I ____ like coffee, but I love tea.","don't","I → do / don't. The word 'but' tells you the first part is negative.",0],
  ["He ____ work on Fridays. It's his day off.","doesn't","He → doesn't. A day off means no work.",0],
  ["____ you usually take the bus to work?","do","You → do. Present simple questions start with do or does.",0],
  ["My parents ____ watch TV in the morning. They read instead.","don't","My parents = they → don't.",0],
  ["Where ____ she buy her books?","does","She → does. After a question word: does + subject + verb.",0],
  ["The shop ____ open until ten, so come before nine.","doesn't","The shop = it → doesn't.",0],
  ["What ____ they do at the weekend?","do","They → do. The second 'do' is the main verb, the action.",0],
  ["How often ____ your teacher give homework?","does","Your teacher = he or she → does.",0],
  ["____ the students understand the plan?","do","The students = they → do.",0],
  ["My cat ____ eat fish. She hates it.","doesn't","My cat = it (or she) → doesn't.",0],
  ["____ he speak Polish?","does","He → does, and 'speak' stays in its base form.",0],
  ["Who ____ you live with?","do","You → do.",0],
  ["It ____ matter. Forget about it.","doesn't","It → doesn't.",0],
  ["____ this rule seem arbitrary to you?","does","This rule = it → does, and 'seem' stays without -s.",1],
  ["Her excuse ____ sound plausible. Nobody believes her.","doesn't","Her excuse = it → doesn't, and 'sound' stays without -s.",1],
  ["We ____ make deliberate mistakes. They're accidents.","don't","We → don't.",1],
  ["You ____ have to come if you're busy.","don't","You → don't. 'Don't have to' means it isn't necessary.",1],
  ["The news ____ sound good, I'm afraid.","doesn't","'News' looks plural but it's uncountable and singular → doesn't.",1],
  ["The police ____ know who did it yet.","don't","'The police' is always plural → don't.",1],
  ["One of my friends ____ drive.","doesn't","The subject is 'one' (of my friends), so it's singular → doesn't.",1],
  ["The people next door ____ seem very friendly.","don't","'People' is plural → don't.",1],
  ["Physics ____ come easily to me.","doesn't","School subjects ending in -ics are singular → doesn't.",1],
  ["What ____ your boss expect from you?","does","Your boss = he or she → does, and 'expect' has no -s.",1],
  ["____ she know already? I thought you told her.","Doesn't","A negative question shows surprise: Doesn't she know…?",1],
  ["____ the risks inherent in the job ever worry you?","Do","The subject is 'the risks' (plural) → Do.",1],
  ["Not only ____ she speak Polish, she also writes it.","does","After 'not only' at the start, the order flips like a question: does she speak.",2],
  ["Rarely ____ they admit their mistakes.","do","Negative adverbs like 'rarely' at the start cause inversion: do they admit.",2],
  ["Only then ____ the plan start to look coherent.","does","'Only then' at the start → inversion with does (the plan = it).",2],
  ["She likes jazz, and so ____ I.","do","Agreeing with a positive present simple: so + do / does + subject. I → do.",2],
  ["He doesn't eat meat, and neither ____ his wife.","does","After 'neither' the verb is positive (neither is already negative). His wife = she → does.",2],
  ["I ____ appreciate your help. Really, I mean it.","do","Emphatic do: adding do/does before the verb makes a positive sentence stronger.",2],
  ["She ____ seem rather vulnerable at the moment.","does","Emphatic does: she does seem… The verb 'seem' loses its -s.",2],
  ["You know the rules, ____ you?","don't","Question tag: positive sentence → negative tag. You → don't you?",2],
  ["He works from home, ____ he?","doesn't","Question tag: positive sentence with 'works' → doesn't he?",2],
  ["They don't need any help, ____ they?","do","Question tag: negative sentence → positive tag. They → do they?",2]
];
const SPOT=[
  ["She don't like spicy food.",1,"doesn't","She → doesn't.",0],
  ["Does he works here?",2,"work","After does, the verb has no -s.",0],
  ["Do your brother play chess?",0,"Does","Your brother = he → Does.",0],
  ["They doesn't know the answer.",1,"don't","They → don't.",0],
  ["I doesn't understand the question.",1,"don't","I → don't. Only he, she and it take doesn't.",0],
  ["He don't have a car.",1,"doesn't","He → doesn't.",0],
  ["Does she likes the plan?",2,"like","After does, use the base verb.",0],
  ["We doesn't need any help.",1,"don't","We → don't.",0],
  ["Do Anna speak French?",0,"Does","Anna = she → Does.",0],
  ["My dog don't bark at night.",2,"doesn't","My dog = it → doesn't.",0],
  ["Why does they leave so early?",1,"do","They → do.",0],
  ["She doesn't goes out much.",2,"go","After doesn't, use the base verb.",0],
  ["The news don't sound good.",2,"doesn't","'News' is singular → doesn't.",1],
  ["One of my friends don't drive.",4,"doesn't","The subject is 'one' → doesn't.",1],
  ["The police doesn't know yet.",2,"don't","'The police' is plural → don't.",1],
  ["Physics don't come easily to me.",1,"doesn't","Physics is singular → doesn't.",1],
  ["What does your boss expects?",4,"expect","After does, the verb has no -s.",1],
  ["Doesn't she knows already?",2,"know","After doesn't, use the base verb.",1],
  ["Rarely does they admit mistakes.",1,"do","They → do. Inversion keeps normal agreement.",2],
  ["Not only do she speak Polish, she writes it too.",2,"does","She → does, even after 'not only'.",2],
  ["She likes jazz, and so does I.",5,"do","I → do: so do I.",2],
  ["He doesn't eat meat, and neither doesn't his wife.",6,"does","'Neither' is already negative, so use does.",2],
  ["You know the rules, doesn't you?",4,"don't","You → don't you?",2],
  ["Only then does the plan starts to work.",5,"start","After does, the verb has no -s.",2]
];
HELP.push(
  ["Never ____ I so much as glance at the answers.","did","'Never' at the start flips the order, and this is the past: Never did I…",3],
  ["So rarely ____ the two reports agree that I trust neither of them.","do","Inversion after 'so rarely'. The reports = they → do.",3],
  ["Not until the data came in ____ anyone realise how prevalent the problem was.","did","'Not until …' at the start causes inversion in the main clause: did anyone realise.",3],
  ["____ it not occur to you that the deadline was arbitrary?","Did","Formal negative question in the past: Did it not occur to you…?",3],
  ["Little ____ she suspect that his excuse was entirely plausible.","did","'Little' at the start means 'not at all' and causes inversion: little did she suspect.",3],
  ["He claims he never lies, and nor ____ his sister, apparently.","does","'Nor' + inversion. His sister = she → does.",3],
  ["The committee rarely meets, and when it ____, nothing gets decided.","does","Ellipsis: 'when it does (meet)'. The committee = it → does.",3],
  ["Only once ____ the manager admit the decision had been deliberate.","did","'Only once' at the start causes inversion, and the story is in the past: did the manager admit.",3]
);
/* Two mistakes per sentence, used from B2 upwards. [sentence, [word positions], [fixes], why, band] */
const SPOT2=[
  ["The news don't sound good, and the police doesn't know why.",[2,8],["doesn't","don't"],"'News' is singular → doesn't. 'The police' is always plural → don't.",1],
  ["One of my friends don't drive, and he don't want to learn.",[4,8],["doesn't","doesn't"],"The subject is 'one', and then 'he': both singular → doesn't.",1],
  ["Does your boss expects you to answer emails at weekends, and do she pay you for it?",[3,11],["expect","does"],"After does, the verb loses its -s: expect. She → does.",1],
  ["Physics don't come easily to me, but maths do.",[1,8],["doesn't","does"],"Physics and maths look plural but are singular subjects → doesn't / does.",1],
  ["Everybody in my class know the answer, but nobody want to say it.",[4,9],["knows","wants"],"Everybody and nobody take a singular verb: knows, wants.",1],
  ["My jeans is too tight, and the scissors doesn't cut.",[2,8],["are","don't"],"Jeans and scissors are always plural: are, don't.",1],
  ["Rarely does the committee agrees, and seldom do it explain why.",[4,7],["agree","does"],"After does, use the base verb: agree. The committee = it → does.",2],
  ["Not only do she speak Polish, she also write it fluently.",[2,8],["does","writes"],"She → does in the inverted part, and she → writes in the normal part.",2],
  ["He's lived here for years, doesn't he? And he never stop complaining.",[5,10],["hasn't","stops"],"'He's lived' = he has lived, so the tag is hasn't he. He → stops.",2],
  ["I have been knowing her since 2019, and she is working here since then.",[3,9],["known","has been"],"'Know' is a state verb, so no -ing: have known. With 'since', use the present perfect: has been working.",2],
  ["Hardly had we sat down when the alarm goes off, and nobody know why.",[8,12],["went","knew"],"The story is in the past: the alarm went off, nobody knew.",2],
  ["By the time we arrived, the meeting has already finished, so we doesn't hear the plan.",[7,12],["had","didn't"],"Earlier than another past event → had finished. In the past, use didn't.",2],
  ["Little did they knew that the plan, which seemed so plausible, has been doomed from the start.",[3,11],["know","had"],"After did, use the base verb: know. Before a past moment → had been doomed.",3],
  ["Only after the results had been published did the scale of the problem became clear, nor did anyone apologised.",[13,18],["become","apologise"],"After did, always the base verb: did … become, did anyone apologise.",3],
  ["So vulnerable were the old system that hackers have been getting in for years before anyone noticed.",[2,8],["was","had"],"The system is singular → was. Before a past moment → had been getting in.",3],
  ["By next June, she will be working here for a decade, and not once has she complain.",[5,16],["have been","complained"],"'By + future time' + duration → will have been working. After has, use the past participle: complained.",3],
  ["Scarcely had the ink dried than the minister announced the deal, and no sooner had he done so when the protests began.",[5,18],["when","than"],"The pairs are fixed: scarcely … when, no sooner … than.",3],
  ["It's high time the council does something about the bridge, which is closed since March.",[5,11],["did","has been"],"After 'it's high time', use the past form: did. With 'since', use the present perfect: has been closed.",3]
];
const BANDS=[[0],[0],[0,1],[1],[2],[3]];
const TRLABEL={neg:"Make it negative",q:"Make it a question",negq:"Make it a negative question"};
function transformRound(){
  const L=lvl(); const si=pick(subjIdx()), vi=pick(verbIdx()); const pol=pick(L>=4?["neg","q","negq"]:["neg","q"]);
  const time = L>=3 && Math.random()<.5 ? "past" : "present";
  const S=SUBJ[si], V=VERBS[vi], third=S.k==="3";
  const right=plain(build(si,vi,time,"simple",pol));
  const start=plain(build(si,vi,time,"simple","pos"));
  const F={neg:["doesn't","don't","didn't"],q:["Does","Do","Did"],negq:["Doesn't","Don't","Didn't"]}[pol];
  const mine = time==="past" ? F[2] : third ? F[0] : F[1];
  const other = time==="past" ? (third ? F[0] : F[1]) : (third ? F[1] : F[0]);
  const vre=new RegExp("\\b"+V.b+"\\b(?= "+V.o.split(" ")[0]+")");
  const wrongA = right.replace(new RegExp("\\b"+mine+"\\b"), other);
  const wrongB = right.replace(vre, time==="past" ? V.p : V.s);
  const wrongC = wrongA.replace(vre, time==="past" ? V.p : V.s);
  return {type:"tr", pol, start, a:right, o:shuffle([...new Set([right,wrongA,wrongB,...(L>=4?[wrongC]:[])])]),
    why: `${cap(S.t)} → ${mine.toLowerCase()}${time==="past"?" (it's the past, so did for everyone)":""}. After ${mine.toLowerCase()}, the main verb is the base form: ${V.b}.`};
}
let hunt=null;
function newHunt(){
  hunt={i:0,score:0,streak:0,done:false,answered:false,
    rounds:shuffle([
      ...shuffle(HELP.filter(h=>BANDS[lvl()].includes(h[3]))).slice(0,4).map(([s,a,why])=>({type:"gap",s,a,why})),
      ...(lvl()>=3
        ? shuffle(SPOT2.filter(h=>BANDS[lvl()].includes(h[4]))).slice(0,3).map(([s,w,fix,why])=>({type:"spot2",s,w,fix,why}))
        : shuffle(SPOT.filter(h=>BANDS[lvl()].includes(h[4]))).slice(0,3).map(([s,w,fix,why])=>({type:"spot",s,w,fix,why}))),
      transformRound(),transformRound(),transformRound()
    ])};
}
function roomHunt(){
  if(!hunt) newHunt();
  if(hunt.done) return huntEnd();
  const r=hunt.rounds[hunt.i];
  let body="";
  if(r.type==="gap"){
    const atStart=r.s.startsWith("____")||/^[A-Z]/.test(r.a);
    const opts=["do","does","don't","doesn't",...(lvl()>=3?["did","didn't"]:[])].map(o=>atStart?cap(o):o);
    body=`<p class="qkind">Fill the gap</p>
      <p class="gamebig">${esc(r.s).replace("____",`<span class="blank" id="blank">&nbsp;</span>`)}</p>
      <div class="bigopts">${opts.map((o,i)=>`<button class="opt" type="button" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div>`;
  } else if(r.type==="spot"){
    body=`<p class="qkind">Spot the mistake: tap the wrong word</p>
      <div class="tokens">${r.s.split(" ").map((t,i)=>`<button class="tok" type="button" data-i="${i}">${esc(t)}</button>`).join("")}</div>`;
  } else if(r.type==="spot2"){
    body=`<p class="qkind">Spot the mistakes: there are two. You get two taps.</p>
      <p class="counter" id="s2left">2 taps left</p>
      <div class="tokens">${r.s.split(" ").map((t,i)=>`<button class="tok" type="button" data-i="${i}">${esc(t)}</button>`).join("")}</div>`;
  } else {
    body=`<p class="qkind">${TRLABEL[r.pol]}</p>
      <p class="gamebig" style="margin-bottom:12px">${esc(r.start)}</p>
      <div class="opts">${r.o.map(o=>`<button class="opt" type="button" data-o="${esc(o)}">${esc(o)}</button>`).join("")}</div>`;
  }
  $("#room").innerHTML=`
  <div class="panel" id="huntPanel">
    <div class="hud"><span>Round ${hunt.i+1} of 10 · Score ${hunt.score}</span><span class="streak">${hunt.streak>=2?`Streak ${hunt.streak}`:""}</span></div>
    <div class="bar"><i style="width:${hunt.i*10}%"></i></div>
    ${body}
    <div id="hFb"></div>
  </div>`;
  if(r.type==="spot") document.querySelectorAll(".tok").forEach(b=>b.onclick=()=>{
    if(hunt.answered) return; const ok=+b.dataset.i===r.w;
    document.querySelectorAll(".tok").forEach(x=>{ x.disabled=true; if(+x.dataset.i===r.w) x.classList.add(ok?"right":"wrong"); });
    if(!ok) b.classList.add("wrong");
    const fixed=r.s.split(" ").map((t,i)=>i===r.w?`<mark>${esc(t.replace(/^[A-Za-z']+/,r.fix))}</mark>`:esc(t)).join(" ");
    huntAnswer(ok, b, `${r.why}<div class="fixed">${fixed}</div>`);
  });
  else if(r.type==="spot2"){ const tapped=[];
    document.querySelectorAll(".tok").forEach(b=>b.onclick=()=>{
      if(hunt.answered || tapped.includes(+b.dataset.i)) return; const i=+b.dataset.i; tapped.push(i);
      b.classList.add(r.w.includes(i)?"right":"wrong"); b.disabled=true;
      const left=2-tapped.length; $("#s2left").textContent = left ? "1 tap left" : "";
      if(left) return;
      const found=tapped.filter(x=>r.w.includes(x)).length, ok=found===2;
      document.querySelectorAll(".tok").forEach(x=>{ x.disabled=true; if(r.w.includes(+x.dataset.i) && !tapped.includes(+x.dataset.i)) x.classList.add("missed"); });
      const fixed=r.s.split(" ").map((t,k)=>{ const j=r.w.indexOf(k); return j>-1?`<mark>${esc(t.replace(/^[A-Za-z']+/,r.fix[j]))}</mark>`:esc(t); }).join(" ");
      huntAnswer(ok, b, `${ok?"":`You found ${found} of 2. `}${esc(r.why)}<div class="fixed">${fixed}</div>`);
    }); }
  else document.querySelectorAll("#huntPanel .opt").forEach(b=>b.onclick=()=>{
    if(hunt.answered) return; const ok=b.dataset.o.toLowerCase()===r.a.toLowerCase();
    document.querySelectorAll("#huntPanel .opt").forEach(x=>{ x.disabled=true; if(x.dataset.o.toLowerCase()===r.a.toLowerCase()) x.classList.add("right"); });
    if(!ok) b.classList.add("wrong");
    if(r.type==="gap"){ const bl=$("#blank"); bl.textContent=r.s.startsWith("____")?cap(r.a):r.a; bl.classList.add("filled"); }
    huntAnswer(ok, b, esc(r.why));
  });
}
function huntAnswer(ok, el, why){
  hunt.answered=true; track(ok);
  if(ok){ hunt.score++; hunt.streak++; let xp=3; if(hunt.streak%3===0) xp+=2; addXP(xp); burst(el, hunt.streak%3===0?14:8); }
  else { hunt.streak=0; $("#huntPanel").classList.add("flash-no"); }
  $("#hFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}">${ok?(hunt.streak%3===0?`Three in a row! Bonus XP. `:"Yes! "):"Not quite. "}${why}</div>
    <div class="row"><button class="btn" type="button" id="hNext">${hunt.i===9?"See my score":"Next round"}</button></div>`;
  $("#hNext").onclick=()=>{ hunt.i++; hunt.answered=false; if(hunt.i>=10) hunt.done=true; roomHunt(); };
  $("#hNext").focus({preventScroll:true});
}
function huntEnd(){
  const best=hunt.score>lab.best.hunt; if(best){ lab.best.hunt=hunt.score; saveLab(); }
  const msg = hunt.score===10?"Perfect. Do and does hold no secrets for you.":hunt.score>=7?"Strong work. A couple more rounds and it'll be automatic.":hunt.score>=4?"Getting there. Check who the subject is before you choose.":"Keep going. Remember: he, she, it → does / doesn't.";
  $("#room").innerHTML=`<div class="panel endcard">
    ${bgPerfect(hunt, hunt.score===10)}${psoOn()?psoEnd(hunt.score*10):""}
    <p class="score">${hunt.score} / 10</p>
    <p style="margin:4px 0 4px">${msg}</p>
    <p class="counter">${best?"New best score!":`Best: ${lab.best.hunt} / 10`}</p>
    <div class="callout" style="text-align:left;max-width:520px;margin:18px auto 0">
      <strong>The rule in one line:</strong> I, you, we, they → <em>do / don't</em> · he, she, it → <em>does / doesn't</em>. After do or does, the verb never takes -s.
    </div>
    <div class="row" style="justify-content:center"><button class="btn sage" type="button" id="hAgain">Play again</button></div>
  </div>`;
  if(best && hunt.score>0) burst($(".endcard .score"),16);
  $("#hAgain").onclick=()=>{ newHunt(); roomHunt(); };
}

/* Room 4: Tense detective */
const CASES=[
  ["present|simple","My brother lives in Kraków.",0],
  ["present|continuous","Look! It's raining again.",0],
  ["present|simple","We don't eat meat.",0],
  ["present|continuous","The children are playing in the garden.",0],
  ["present|simple","Does your sister work at the weekend?",0],
  ["present|continuous","I'm not watching TV right now.",0],
  ["past|simple","I visited my grandma last weekend.",1],
  ["past|continuous","We were watching TV when the lights went out.",1],
  ["future|simple","I'll call you tomorrow.",1],
  ["present|perfect","She has lost her keys again.",1],
  ["past|simple","Did you enjoy the film?",1],
  ["present|perfect","Have you ever been to Gdańsk?",1],
  ["present|simple","Accidents are inevitable when people drive this fast.",2],
  ["present|perfect continuous","Prices have been rising steadily since the spring.",2],
  ["past|perfect","She had made a deliberate choice before the meeting started.",2],
  ["past|continuous","The team was writing a coherent plan when the manager called.",2],
  ["past|simple","His excuse sounded plausible at first.",2],
  ["present|continuous","They are changing the arbitrary rules this month.",2],
  ["future|simple","Older buildings will be vulnerable in a big storm.",2],
  ["present|perfect","Have you ever felt vulnerable at work?",2],
  ["present|perfect","The risks inherent in the job haven't changed.",2],
  ["future|perfect","By 2030, remote work will have become prevalent in most offices.",3],
  ["future|continuous","This time next week, I will be studying for my exams.",3],
  ["past|perfect continuous","They had been waiting for an hour before the bus finally came.",3],
  ["future|perfect continuous","By June, she will have been working here for ten years.",4],
  ["past|perfect","Hardly had we sat down when the fire alarm went off.",5],
  ["present|perfect","Never have I seen such a coherent argument.",5],
  ["future|perfect","By the time the report is published, the risks will have become inevitable.",4],
  ["past|perfect continuous","She had been deliberately avoiding the question for weeks.",4],
  ["present|perfect continuous","Critics have been questioning how plausible the figures are.",4],
  ["future|perfect continuous","Next spring, the committee will have been reviewing these arbitrary rules for a decade.",5],
  ["past|continuous","While the markets were collapsing, few investors felt vulnerable.",4],
  ["present|simple","Seldom does such a prevalent problem receive so little attention.",5],
  ["present|simple","The train to Gdańsk leaves at 6:40 tomorrow morning.",3],
  ["present|continuous","I'm meeting the bank manager on Friday, so I can't come.",3],
  ["present|perfect","This is the first time I've ever felt so vulnerable at work.",3],
  ["past|perfect continuous","His eyes were red because he'd been staring at the screen all night.",3],
  ["future|continuous","Don't call at nine; we'll be having dinner.",3],
  ["present|perfect continuous","You look exhausted. Have you been running?",3],
  ["future|perfect","Don't worry, the paint will have dried by the time the guests arrive.",3],
  ["past|perfect","Once she had checked the figures twice, she signed the report.",3,"had checked"],
  ["present|perfect","Once you've signed the form, hand it to reception.",4,"'ve signed"],
  ["present|simple","I'll call you as soon as the plane lands.",4,"lands"],
  ["past|perfect","If I had known the rule was so arbitrary, I would have ignored it.",4,"had known"],
  ["future|perfect continuous","By the time she retires, she will have been teaching for forty years.",4,"will have been teaching"],
  ["past|perfect continuous","I had been meaning to call you for weeks.",4,"had been meaning"],
  ["present|continuous","He's always leaving his deliberate little notes on my desk.",4,"'s always leaving"],
  ["past|simple","It's high time we changed these arbitrary rules.",4,"changed"],
  ["future|continuous","Will you be using the car this evening? I need it.",4,"Will you be using"],
  ["past|simple","I wish I knew why the instructions were so ambiguous.",5,"knew"],
  ["past|perfect","Had the warning been clearer, nobody would have been hurt.",5,"Had the warning been"],
  ["future|perfect","Five years from now, this inevitable change will have transformed the industry.",5,"will have transformed"],
  ["present|perfect","No sooner have I fixed one problem than another appears.",5,"have I fixed"],
  ["past|continuous","I was wondering whether you might reconsider your decision.",5,"was wondering"],
  ["future|perfect continuous","When the clock strikes midnight, the protesters will have been marching for a full day.",5,"will have been marching"],
  ["present|simple","So the other day this guy walks into my office and says he's my new boss.",5,"walks"],
  ["past|perfect continuous","Little did we realise that the system had been quietly failing for months.",5,"had been quietly failing"],
  ["present|perfect continuous","Someone's been reading my emails; they're all marked as read.",5,"'s been reading"],
  ["past|continuous","She was being deliberately difficult all through the meeting.",5,"was being"]
];
const detSentence = q => { const e=esc(q.s); return q.h && q.s.includes(q.h) ? e.replace(esc(q.h), `<mark class="dmark">${esc(q.h)}</mark>`) : e; };
let det={q:null,streak:0,answered:false,mode:"relaxed"}, rush=null, rushTimer=null;
function detQuestion(){
  const L=lvl(), allowed=LVTENSES[L];
  const pool=CASES.filter(c=>allowed.includes(c[0]) && c[2]<=L && c[2]>=(L>=3?L-1:L-2));
  let k,s,h=null;
  if(pool.length && Math.random()<(L>=3?.85:.5)){ [k,s,,h]=pick(pool); }
  else { k=pick(allowed); const [t,a]=k.split("|"); s=plain(build(pick(subjIdx()),pick(verbIdx()),t,a,pick(L>=4?["pos","neg","q","negq","negq"]:["pos","pos","neg","q"]))); }
  const [t,a]=k.split("|");
  const n = L>=5?6:L>=4?5:4;
  const others=allowed.filter(x=>x!==k);
  const near=others.filter(x=>x.startsWith(t+"|")||x.endsWith("|"+a));
  const opts=new Set([k]); shuffle(near).slice(0, L>=3?n-1:2).forEach(x=>opts.add(x));
  for(const x of shuffle(others)){ if(opts.size>=n) break; opts.add(x); }
  return {k,s,h,o:shuffle([...opts])};
}
function stopRush(){ if(rushTimer){ clearInterval(rushTimer); rushTimer=null; } rush=null; stopBlitz(); }
function roomDetective(){
  const modeBar=`<div class="picks" style="margin-bottom:16px">
    <button class="pick" type="button" data-m="relaxed" aria-pressed="${det.mode==="relaxed"}">Relaxed</button>
    <button class="pick" type="button" data-m="rush" aria-pressed="${det.mode==="rush"}">60-second rush</button></div>`;
  if(det.mode==="rush") return rushView(modeBar);
  if(!det.q) det.q=detQuestion();
  const q=det.q;
  $("#room").innerHTML=`<div class="panel" id="detPanel">${modeBar}
    <div class="hud"><span>${q.h?"Which tense is the highlighted verb?":"Which tense is this?"}${lvl()>=3?" Watch out for traps.":""}</span><span class="streak">${det.streak>=2?`Streak ${det.streak}`:""}</span></div>
    <p class="gamebig">${detSentence(q)}</p>
    <div class="bigopts">${q.o.map(k=>`<button class="opt" type="button" data-k="${k}" style="font-family:var(--sans);font-size:1rem">${esc(TINFO[k].name)}</button>`).join("")}</div>
    <div id="dFb"></div></div>`;
  wireModes();
  document.querySelectorAll("#detPanel .opt").forEach(b=>b.onclick=()=>{
    if(det.answered) return; det.answered=true; const ok=b.dataset.k===q.k; track(ok); const [t,a]=q.k.split("|");
    document.querySelectorAll("#detPanel .opt").forEach(x=>{ x.disabled=true; if(x.dataset.k===q.k) x.classList.add("right"); });
    if(ok){ det.streak++; addXP(3); burst(b); } else { det.streak=0; b.classList.add("wrong"); }
    $("#dFb").innerHTML=`<div class="feedback ${ok?"ok":"no"}" style="max-width:620px">${ok?"Case closed! ":"Not this time. "}It's the <strong>${esc(TINFO[q.k].name.toLowerCase())}</strong>: ${esc(TINFO[q.k].form)}.${timeline(t,a)}</div>
      <div class="row"><button class="btn" type="button" id="dNext">Next case</button></div>`;
    $("#dNext").onclick=()=>{ det.q=null; det.answered=false; roomDetective(); };
    $("#dNext").focus({preventScroll:true});
  });
}
function wireModes(){ document.querySelectorAll("[data-m]").forEach(b=>b.onclick=()=>{ det.mode=b.dataset.m; stopRush(); roomDetective(); }); }
function rushView(modeBar){
  if(!rush){
    $("#room").innerHTML=`<div class="panel">${modeBar}
      <p class="gamebig" style="margin-top:0">How many tenses can you name in 60 seconds?</p>
      <p class="counter">Best so far: ${lab.best.rush}</p>
      <div class="row"><button class="btn sage" type="button" id="rGo">Start</button></div></div>`;
    wireModes();
    $("#rGo").onclick=()=>{ rush={left:60,score:0,q:detQuestion(),over:false}; rushTimer=setInterval(()=>{ if(!rush || !$("#rPanel")){ stopRush(); return; } rush.left--; const t=$("#rTimer"); if(t){ t.querySelector("i").style.width=(rush.left/60*100)+"%"; t.classList.toggle("low",rush.left<=10); $("#rLeft").textContent=rush.left+"s"; }
      if(rush.left<=0){ clearInterval(rushTimer); rushTimer=null; rush.over=true; rushView(modeBar); } },1000); rushView(modeBar); };
    return;
  }
  if(rush.over){
    const best=rush.score>lab.best.rush; if(best){ lab.best.rush=rush.score; saveLab(); }
    $("#room").innerHTML=`<div class="panel endcard">${modeBar}
      <p class="score">${rush.score}</p><p style="margin:4px 0">tenses named correctly</p>
      <p class="counter">${best?"New best!":`Best: ${lab.best.rush}`}</p>
      <div class="row" style="justify-content:center"><button class="btn sage" type="button" id="rAgain">Play again</button></div></div>`;
    wireModes(); if(best && rush.score>0) burst($(".endcard .score"),16);
    $("#rAgain").onclick=()=>{ rush=null; rushView(modeBar); };
    return;
  }
  const q=rush.q;
  $("#room").innerHTML=`<div class="panel" id="rPanel">${modeBar}
    <div class="hud"><span>Score ${rush.score}</span><span id="rLeft">${rush.left}s</span></div>
    <div class="timer${rush.left<=10?" low":""}" id="rTimer"><i style="width:${rush.left/60*100}%"></i></div>
    <p class="gamebig">${detSentence(q)}</p>
    <div class="bigopts">${q.o.map(k=>`<button class="opt" type="button" data-k="${k}" style="font-family:var(--sans);font-size:1rem">${esc(TINFO[k].name)}</button>`).join("")}</div></div>`;
  wireModes();
  document.querySelectorAll("#rPanel .opt").forEach(b=>b.onclick=()=>{
    const ok=b.dataset.k===q.k; track(ok);
    if(ok){ rush.score++; addXP(2); burst(b,5); } else { rush.left=Math.max(0,rush.left-3); }
    b.classList.add(ok?"right":"wrong");
    setTimeout(()=>{ if(!rush||rush.over) return; rush.q=detQuestion(); rushView(modeBar); }, ok?220:500);
  });
}

/* Room 5: Time machine */






/* ---------- Room 6: Irregular verbs ---------- */
/* [base, past simple, past participle, level 0=A1 … 5=C2, note, display name] — "/" separates accepted alternatives */
const IRR=[
  ["be","was/were","been",0,"Was with I, he, she and it; were with you, we and they."],
  ["have","had","had",0],["do","did","done",0],
  ["go","went","gone",0,"Gone means the person is still away. Been means they went and came back: I've been to Paris."],
  ["get","got","got/gotten",0,"Gotten is American English. British English uses got."],
  ["make","made","made",0],["say","said","said",0,"Said rhymes with red, not with paid."],
  ["see","saw","seen",0],["come","came","come",0],["take","took","taken",0],["give","gave","given",0],
  ["know","knew","known",0,"The k is silent in all three forms."],
  ["eat","ate","eaten",0],["drink","drank","drunk",0],["buy","bought","bought",0],["sleep","slept","slept",0],
  ["read","read","read",0,"Same spelling, different sound: read /riːd/ → read /red/ → read /red/."],
  ["write","wrote","written",0,"Written has a double t."],
  ["run","ran","run",0],["sit","sat","sat",0],["swim","swam","swum",0],["meet","met","met",0],
  ["find","found","found",0],["think","thought","thought",0],["tell","told","told",0],["speak","spoke","spoken",0],
  ["put","put","put",0],["cut","cut","cut",0],["sing","sang","sung",0],["leave","left","left",0],

  ["begin","began","begun",1],["bring","brought","brought",1,"Not brang or brung."],["build","built","built",1],
  ["catch","caught","caught",1],["choose","chose","chosen",1],["drive","drove","driven",1],["fall","fell","fallen",1],
  ["feel","felt","felt",1],["fly","flew","flown",1],["forget","forgot","forgotten",1],
  ["hear","heard","heard",1,"Heard rhymes with bird."],["hold","held","held",1],["keep","kept","kept",1],
  ["lose","lost","lost",1],["pay","paid","paid",1,"Not payed."],["ride","rode","ridden",1],["ring","rang","rung",1],
  ["sell","sold","sold",1],["send","sent","sent",1],["spend","spent","spent",1],["stand","stood","stood",1],
  ["teach","taught","taught",1],["understand","understood","understood",1],["wake","woke","woken",1],
  ["wear","wore","worn",1],["win","won","won",1,"Won sounds like one."],["break","broke","broken",1],
  ["cost","cost","cost",1],["draw","drew","drawn",1],["grow","grew","grown",1],["hit","hit","hit",1],
  ["let","let","let",1],["lend","lent","lent",1],
  ["show","showed","shown",1,"The past simple is regular (showed). Only the participle is irregular."],
  ["throw","threw","thrown",1],["hurt","hurt","hurt",1],["become","became","become",1],
  ["mean","meant","meant",1,"Meant is said /ment/."],
  ["learn","learnt/learned","learnt/learned",1,"Learned is more common in American English. Both are correct."],

  ["bite","bit","bitten",2],["blow","blew","blown",2],["dig","dug","dug",2],["feed","fed","fed",2],
  ["fight","fought","fought",2],["forgive","forgave","forgiven",2],["freeze","froze","frozen",2],
  ["hang","hung","hung",2,"When it means to kill someone with a rope, it's regular: hanged.","hang (= put on a hook)"],
  ["hide","hid","hidden",2],["lead","led","led",2,"Led rhymes with red."],
  ["lay","laid","laid",2,"Lay = put something down. Don't mix it up with lie → lay → lain.","lay (= put down)"],
  ["light","lit","lit",2],["set","set","set",2],["shake","shook","shaken",2],
  ["shine","shone","shone",2,"When it means polish, it's regular: he shined his shoes.","shine (= give light)"],
  ["shoot","shot","shot",2],["shut","shut","shut",2],["sink","sank","sunk",2],["steal","stole","stolen",2],
  ["stick","stuck","stuck",2],["tear","tore","torn",2,"Tear /teə/ means rip. A tear /tɪə/ from your eye is a noun.","tear (= rip)"],
  ["bend","bent","bent",2],["bet","bet","bet",2],["burn","burnt/burned","burnt/burned",2],
  ["dream","dreamt/dreamed","dreamt/dreamed",2],["deal","dealt","dealt",2,"Dealt is said /delt/."],
  ["rise","rose","risen",2,"Rise has no object (prices rise). Raise is regular and has one (they raised prices)."],
  ["spread","spread","spread",2],["quit","quit","quit",2],["upset","upset","upset",2],
  ["smell","smelt/smelled","smelt/smelled",2],["spell","spelt/spelled","spelt/spelled",2],

  ["bear","bore","borne",3,"For birth we say born: I was born in 1999."],["bleed","bled","bled",3],["breed","bred","bred",3],
  ["cling","clung","clung",3],["creep","crept","crept",3],["flee","fled","fled",3],["forbid","forbade","forbidden",3],
  ["grind","ground","ground",3],["kneel","knelt/kneeled","knelt/kneeled",3],["leap","leapt/leaped","leapt/leaped",3],
  ["overcome","overcame","overcome",3],["seek","sought","sought",3],["sew","sewed","sewn/sewed",3,"Sew sounds like so."],
  ["shrink","shrank","shrunk",3],["slide","slid","slid",3],["sting","stung","stung",3],["stink","stank","stunk",3],
  ["strike","struck","struck",3],["swear","swore","sworn",3],["sweep","swept","swept",3],["swing","swung","swung",3],
  ["undertake","undertook","undertaken",3],["withdraw","withdrew","withdrawn",3],["spin","spun","spun",3],
  ["split","split","split",3],["weep","wept","wept",3],["spring","sprang","sprung",3],["mistake","mistook","mistaken",3],

  ["arise","arose","arisen",4],["bind","bound","bound",4],["cast","cast","cast",4],["forecast","forecast","forecast",4],
  ["foresee","foresaw","foreseen",4],["mislead","misled","misled",4],["overtake","overtook","overtaken",4],
  ["uphold","upheld","upheld",4],["withhold","withheld","withheld",4],
  ["wind","wound","wound",4,"Wind /waɪnd/ (turn) → wound /waʊnd/. Not the wind that blows.","wind (= turn)"],
  ["lie","lay","lain",4,"When lie means say something untrue, it's regular: lied.","lie (= be lying down)"],
  ["strive","strove/strived","striven/strived",4],["sling","slung","slung",4],["stride","strode","stridden",4],
  ["tread","trod","trodden",4],["weave","wove","woven",4],["wring","wrung","wrung",4],["shed","shed","shed",4],
  ["thrust","thrust","thrust",4],["overthrow","overthrew","overthrown",4],

  ["abide","abode/abided","abode/abided",5,"Abide by (= obey) is usually regular: they abided by the rules."],
  ["beseech","besought/beseeched","besought/beseeched",5],["forsake","forsook","forsaken",5],["slay","slew","slain",5],
  ["smite","smote","smitten",5,"Smitten is common as an adjective: smitten with someone (in love)."],
  ["bid","bid","bid",5],["shear","sheared","shorn/sheared",5],["slink","slunk","slunk",5],
  ["strew","strewed","strewn/strewed",5],["wed","wed/wedded","wed/wedded",5],["beget","begot","begotten",5],
  ["behold","beheld","beheld",5],["outdo","outdid","outdone",5],["outgrow","outgrew","outgrown",5],
  ["override","overrode","overridden",5],["underlie","underlay","underlain",5]
];
const IV=IRR.map(([b,p,pp,lv,n,d])=>({b,p:p.split("/"),pp:pp.split("/"),lv,n:n||"",d:d||""}));


/* Regular verbs for the sorting game. Many rhyme with an irregular verb on purpose. [base, past, level, note, display] */


/* Gap sentences. [verb, sentence, "p" past simple | "pp" past participle, exact answer if needed] */


/* Short texts. *word* marks an irregular past form. [level, text, note] */





const FORMIDX={}; IV.forEach(v=>[...v.p,...v.pp].forEach(f=>{ (FORMIDX[f]=FORMIDX[f]||[]); if(!FORMIDX[f].includes(v.b)) FORMIDX[f].push(v.b); }));
















let vb={mode:lab.vmode||"table", streak:0, hide:false, q:null, search:"", fillType:null, dir:"base", lastPass:null};
let blitz=null, blitzTimer=null;
function stopBlitz(){ if(blitzTimer){ clearInterval(blitzTimer); blitzTimer=null; } blitz=null; }











/* 1. Verb table */


/* 2. Regular or irregular? */



/* 3. Three forms (and find the base) */



/* 4. Spot them */



/* 5. Fill the gap */


/* 6. Fix the mistake */



/* 7. Match pairs */



/* 8. 60-second blitz */


document.addEventListener("keydown",e=>{ if(route!=="lab"||lab.room!=="verbs"||e.key!=="Enter"||e.target.matches("input,textarea")) return; const n=$("#vNext"); if(n){ e.preventDefault(); n.click(); } });



/* ---------- Video of the week ---------- */
/* The weekly content lives in video.json, published next to this page. VIDEO below is a fallback copy. */
let VIDEO = {"week": "2026-W42", "title": "The benefits of a bilingual brain", "channel": "TED-Ed", "speaker": "Mia Nacamulli", "yt": "MMmOLN5zBLY", "length": "4:48", "level": "B1–B2", "intro": "A short animated lesson about what happens in your brain when you speak more than one language, and why it is never too late to start.", "summary": "The lesson explains that knowing more than one language can change how the brain is built and how it works. It describes how language skills are measured (active and passive skills), three types of bilingual people, and how children and adults process language differently. It then covers research on grey matter, attention and task switching, and the finding that bilingualism may delay Alzheimer's and dementia. It ends by noting that bilingualism was once wrongly seen as a problem for children, and that adults can still benefit from learning a language.", "vocab": [{"w": "bilingual", "m": "able to speak two languages well"}, {"w": "hemisphere", "m": "one of the two halves of the brain"}, {"w": "grey matter", "m": "the brain tissue full of nerve cells that processes information"}, {"w": "onset", "m": "the beginning of something unpleasant, such as an illness"}, {"w": "executive function", "m": "the brain skills you use to plan, focus and switch between tasks"}, {"w": "refute", "m": "to prove that an idea or claim is wrong"}], "questions": [{"q": "How does the video group language skills?", "a": "Active skills (speaking and writing) and passive skills (listening and reading)", "o": ["Active skills (speaking and writing) and passive skills (listening and reading)", "Spoken skills and written skills only", "Grammar skills and vocabulary skills", "Formal skills and informal skills"], "why": "Speaking and writing are active because you produce language; listening and reading are passive because you receive it."}, {"q": "How many types of bilingual people does the video describe?", "a": "Three", "o": ["Two", "Three", "Four", "Five"], "why": "The video names three types: compound, coordinate and subordinate bilinguals."}, {"q": "What decides which type of bilingual a person is?", "a": "How and when they learned their languages", "o": ["How and when they learned their languages", "How many languages their parents speak", "How well they can spell", "Which country they live in now"], "why": "The three types depend on how each language was acquired, for example together from birth or one after the other."}, {"q": "How do children and most adults differ when they process language?", "a": "Children use both hemispheres; most adults rely mainly on the left one", "o": ["Children use both hemispheres; most adults rely mainly on the left one", "Adults use both hemispheres; children use only the right one", "Both groups use only the right hemisphere", "There is no difference at all"], "why": "Brain imaging suggests language is spread across both sides in childhood but is mostly handled by the left side in adults."}, {"q": "Which advantage does the video connect with bilingualism?", "a": "Being better at switching tasks and ignoring distractions", "o": ["Being better at switching tasks and ignoring distractions", "Having better eyesight", "Always having a higher IQ", "Reading faster in your first language"], "why": "Bilingualism is linked to stronger executive function, such as task switching and filtering out distractions. It does not simply make people more intelligent."}, {"q": "What can bilingualism do for Alzheimer's and dementia?", "a": "Delay their onset by up to about five years", "o": ["Delay their onset by up to about five years", "Cure them completely", "Make them start earlier", "It has no effect"], "why": "Research mentioned in the video suggests the onset can be delayed by as much as five years."}, {"q": "What did people once wrongly believe about bilingual children?", "a": "That speaking two languages held them back", "o": ["That speaking two languages held them back", "That they were always top of the class", "That they could only learn one alphabet", "That they needed less sleep"], "why": "Bilingualism used to be seen as a handicap for children, based on flawed studies that later research refuted."}, {"q": "What is the video's message for adults?", "a": "It's never too late: adults can still benefit from learning a language", "o": ["It's never too late: adults can still benefit from learning a language", "Only children can benefit", "Adults should not learn more than one extra language", "Adults learn every part of a language faster than children"], "why": "The lesson ends by encouraging people of any age to start learning a language."}], "listen": [{"q": "Write what you heard about the three types of bilingual people. Name each type and add one detail.", "hint": "Name all three types.", "keys": [["compound"], ["coordinate"], ["subordinate"]], "model": "Compound bilinguals learn two languages at the same time as small children. Coordinate bilinguals use each language in a different setting, for example one at home and one at school. Subordinate bilinguals learn a second language through their first one."}, {"q": "Write what you heard about how children's and adults' brains deal with language.", "hint": "Mention both groups and the brain's halves.", "keys": [["child", "kid"], ["adult"], ["hemisphere", "left", "both sides", "both halves"]], "model": "Children seem to use both hemispheres for language, while most adults use mainly the left hemisphere. Children also pick up the social and emotional side of a language more easily."}, {"q": "Write what you heard about the benefits for older people's health.", "hint": "Which illnesses, and by how much?", "keys": [["alzheimer", "dementia"], ["delay", "later", "postpone"], ["five", "5"]], "model": "Being bilingual may delay the start of Alzheimer's disease and dementia by up to five years."}], "tasks": {"syn": {"title": "Summarise with synonyms", "prompt": "Write your own summary of the video in 70–120 words. Replace every underlined word with a synonym.", "text": "Research [shows] that a second language can [change] the brain in [important] ways. Bilingualism was once seen as a [problem] for children, but its [benefits] can last into [old age].", "words": [{"w": "shows", "syn": ["demonstrates", "reveals", "indicates", "suggests", "proves"]}, {"w": "change", "syn": ["alter", "transform", "reshape", "modify"]}, {"w": "important", "syn": ["significant", "crucial", "vital", "essential", "major"]}, {"w": "problem", "syn": ["drawback", "disadvantage", "handicap", "obstacle", "barrier"]}, {"w": "benefits", "syn": ["advantages", "gains", "rewards", "positive effects"]}, {"w": "old age", "syn": ["later life", "later years", "senior years", "retirement"]}], "min": 70, "model": "Studies demonstrate that learning a second language can alter the way the brain is built and works in significant ways. The video explains that language skills can be active or passive, and that there are three kinds of bilingual people. Bilingualism was once considered a handicap for young children, but this idea came from poor research. In fact, people who speak two languages often switch between tasks more easily and ignore distractions better. These advantages may continue into later life, because bilingualism can delay Alzheimer's and dementia by several years."}, "adv": {"title": "Use three adverbs", "prompt": "Summarise the video in 60–100 words. Use all three adverbs below.", "adverbs": ["remarkably", "gradually", "consequently"], "min": 60, "model": "The video explains that speaking two languages can remarkably change the brain. Children use both halves of the brain for language, but as they grow up, language gradually moves mainly to the left side. Bilingual people tend to have more grey matter and are better at switching between tasks; consequently, they may stay mentally sharp for longer. The lesson ends by reminding adults that it is never too late to start learning."}, "rep": {"title": "Formal account in reported speech", "prompt": "Imagine you are writing a short report for your manager. Give a formal account of what the narrator said, in reported speech (80–120 words). Use at least two different reporting verbs and no contractions.", "verbs": ["explained", "stated", "argued", "claimed", "pointed out", "suggested", "noted", "emphasised", "emphasized", "reported", "maintained", "added", "concluded", "mentioned", "observed", "described"], "min": 80, "model": "The narrator explained that knowing more than one language could change both the structure and the function of the brain. She pointed out that language ability was usually measured through active skills, such as speaking and writing, and passive skills, such as listening and reading. She described three types of bilingual speakers and noted that children used both hemispheres of the brain for language, whereas most adults relied mainly on the left one. Furthermore, she stated that bilingualism might delay the onset of Alzheimer's disease by up to five years. Finally, she concluded that it was never too late to learn a new language."}}, "past": [], "doc": ""};
/* video.json may hold one video for everyone, or "levels": six videos, one per level (A1…C2) */
let VIDEOS = null, VIDEO_ALL = VIDEO;
let vidLv = (()=>{ try{ const n=+localStorage.getItem("vocab5-vidlv"); return localStorage.getItem("vocab5-vidlv")!==null && n>=0 && n<=5 ? n : null; }catch(e){ return null; } })();
const curVidLv = () => vidLv===null ? state.vlv : vidLv;
function vidPick(){ if(VIDEOS){ const L=curVidLv(); VIDEO = Object.assign({week:VIDEO_ALL.week}, VIDEOS[L] || VIDEOS.find(Boolean)); } else VIDEO = VIDEO_ALL; }
const vidKey = () => VIDEO.week + (VIDEOS ? ":"+curVidLv() : "");
(async()=>{ try{ const r=await fetch("video.json",{cache:"no-cache"}); if(!r.ok) return; const v=await r.json();
  if(v && v.week && Array.isArray(v.levels) && v.levels.length===6 && v.levels.every(x=>x && (x.yt||x.file||x.source) && x.questions)){
    VIDEO_ALL=v; VIDEOS=v.levels; vidPick(); if(route==="video") render(); }
  else if(v && (v.yt||v.file) && v.week && v.questions){ const changed=v.week!==VIDEO.week||v.file!==VIDEO.file; VIDEO=VIDEO_ALL=v; VIDEOS=null; if(route==="video" && changed) render(); } }catch(e){} })();
const VSTORE="vocab5-video-v1";
let vidS={weeks:{}};
try{ const s=JSON.parse(localStorage.getItem(VSTORE)||"null"); if(s && s.weeks) vidS=s; }catch(e){}
function vwk(){ const k=vidKey(); const old=vidS.weeks[VIDEO.week];
  /* work saved before videos had levels moves to the level that kept the same video */
  if(!vidS.weeks[k] && k!==VIDEO.week && old && (VIDEO.carry || old.ti===VIDEO.title)){ vidS.weeks[k]=old; delete vidS.weeks[VIDEO.week]; saveVid(); }
  if(!vidS.weeks[k]) vidS.weeks[k]={mc:{},listen:{},texts:{},ok:{},at:0}; return vidS.weeks[k]; }
function saveVid(){ const ks=Object.keys(vidS.weeks).sort(); ks.slice(0,Math.max(0,ks.length-6)).forEach(k=>delete vidS.weeks[k]); try{ localStorage.setItem(VSTORE,JSON.stringify(vidS)); }catch(e){} }
function weekRange(key){ const [y,w]=key.split("-W").map(Number); const j4=new Date(Date.UTC(y,0,4)); const d=j4.getUTCDay()||7;
  const mon=new Date(j4); mon.setUTCDate(j4.getUTCDate()-d+1+(w-1)*7); const sun=new Date(mon); sun.setUTCDate(mon.getUTCDate()+6);
  const f=x=>x.toLocaleDateString("en-GB",{day:"numeric",month:"short",timeZone:"UTC"}); return `${f(mon)} – ${f(sun)}`; }
const wcount=t=>t.trim().split(/\s+/).filter(Boolean).length;
const hasWord=(t,w)=>new RegExp("\\b"+w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/ /g,"\\s+")+"\\b","i").test(t);
const reEsc=x=>x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
const hasForm=(t,w)=>{ if(w.includes(" ")) return hasWord(t,w); const r=w.length>5?w.replace(/(es|s|ed|ing)$/,""):w; return new RegExp("\\b"+reEsc(r)+"\\w*","i").test(t); };
function vidScore(S){ const V=VIDEO; const mcR=V.questions.filter((q,i)=>S.mc[i]===q.a).length;
  const lsR=V.listen.filter((l,i)=>(S.ok["l"+i])).length;
  return [mcR,V.questions.length,lsR,V.listen.length]; }
/* Checks for each writing task. Returns [{ok,txt,warn}] */
function vidChecks(kind,t){ const T=VIDEO.tasks[kind]; const type=T.type||kind; const n=wcount(t); const items=[];
  if(type==="sent"){ const used=(T.use||[]).filter(w=>hasForm(t,w)); const need=T.need||Math.min(2,(T.use||[]).length);
    items.push({ok:used.length>=need, txt:used.length>=need?`Words from the video: ${used.join(", ")}`:`Use at least ${need} of these words: ${(T.use||[]).join(", ")} (you have ${used.length})`});
    const sn=(t.match(/[.!?](\s|$)/g)||[]).length; if(T.sentences) items.push({ok:sn>=T.sentences, txt:`At least ${T.sentences} sentences, each with a full stop (you have ${sn})`});
    items.push({ok:n>=T.min,txt:`At least ${T.min} words (you have ${n})`}); return items; }
  if(type==="arg"){ const lk=(T.linkers||LINKERS).filter(l=>hasWord(t,l));
    items.push({ok:lk.length>=3,txt:lk.length>=3?`Linking words: ${lk.slice(0,6).join(", ")}`:`Use at least 3 linking words, e.g. however, moreover, therefore (you have ${lk.length})`});
    items.push({ok:/\b(however|on the other hand|although|admittedly|critics|opponents|while it is true|it could be argued|nevertheless)\b/i.test(t),txt:"Mentions the other side (however…, it could be argued…, critics say…)"});
    items.push({ok:/\b(in my (view|opinion)|i (believe|would argue|am convinced)|to my mind|personally)\b/i.test(t),txt:"Gives your own view (In my view…, I would argue…)"});
    if(/\b\w+(n't|'re|'ve|'ll|'m|'d)\b/i.test(t.replace(/’/g,"'"))) items.push({ok:false,warn:true,txt:"Formal style: write full forms (it is, do not), not contractions."});
    items.push({ok:n>=T.min,txt:`At least ${T.min} words (you have ${n})`}); return items; }
  if(type==="syn"){
    T.words.forEach(x=>{ const used=x.syn.find(s=>hasForm(t,s)); items.push({ok:!!used,txt:used?`“${x.w}” → ${used}`:`Use a synonym of “${x.w}” (for example ${x.syn.slice(0,2).join(" or ")})`});
      if(hasForm(t,x.w)) items.push({ok:false,warn:true,txt:`You used “${x.w}” itself. Replace it with a synonym.`}); });
  } else if(type==="adv"){
    T.adverbs.forEach(a=>items.push({ok:hasWord(t,a),txt:`Uses “${a}”`}));
  } else if(type==="rep"){
    const vs=[...new Set(T.verbs.filter(v=>hasWord(t,v)).map(v=>v.replace("emphasized","emphasised")))];
    items.push({ok:vs.length>=2,txt:vs.length>=2?`Reporting verbs: ${vs.join(", ")}`:`Use at least two reporting verbs, e.g. explained, pointed out, stated (you have ${vs.length})`});
    items.push({ok:/\bthat\b/i.test(t),txt:"Uses a that-clause (… explained that …)"});
    items.push({ok:/\b(had|would|could|might|was|were)\b/i.test(t),txt:"Moves tenses back (is → was, can → could, will → would)"});
    if(/["“”]/.test(t)) items.push({ok:false,warn:true,txt:"Reported speech doesn't use quotation marks. Report the ideas instead of quoting."});
    if(/\b\w+(n't|'re|'ve|'ll|'m|'d)\b/i.test(t.replace(/’/g,"'"))) items.push({ok:false,warn:true,txt:"Formal style: write full forms (it is, did not), not contractions."});
    if(/\b(I think|gonna|wanna|stuff|kind of|a bit)\b/i.test(t)) items.push({ok:false,warn:true,txt:"Some words are too informal for a report."});
  }
  items.push({ok:n>=T.min,txt:`At least ${T.min} words (you have ${n})`});
  return items; }
async function vidAI(kind,text,out,btn){
  if(!sample) return; const T=VIDEO.tasks[kind]; const type=T.type||kind;
  btn.disabled=true; out.hidden=false; out.textContent="Thinking…";
  const prompt=`You are a friendly English teacher. A learner (about ${VIDEO.level}) watched the video "${VIDEO.title}" (${VIDEO.channel}). Video content, in brief: ${VIDEO.summary}
Task: ${T.prompt}${type==="syn"?" Underlined words to replace: "+T.words.map(w=>w.w).join(", ")+".":""}${type==="adv"?" Adverbs to use: "+T.adverbs.join(", ")+".":""}${type==="sent"?" Words to use: "+(T.use||[]).join(", ")+". Be very encouraging and keep the language simple; the learner is a beginner.":""}
Learner's text: """${text}"""
Give short feedback. Reply ONLY with JSON: {"task":"one sentence on how well the task was done","content":"one sentence on accuracy about the video","language":"one or two sentences on grammar and vocabulary mistakes, with corrections","better":"one improved sentence from their text","tip":"one short tip"}`;
  try{ const r=await sample.json(prompt,{modelTier:"quick"});
    out.textContent=`Task: ${r.task||""}\nContent: ${r.content||""}\nLanguage: ${r.language||""}\nBetter: ${r.better||""}\nTip: ${r.tip||""}`;
  }catch(e){ out.textContent = e && e.code==="not_granted" ? "Claude feedback wasn't allowed, so only the automatic checks are available." : e && e.code==="rate_limited" ? "Too many requests at once. Wait a minute and try again." : "Feedback couldn't load this time. The automatic checks still work.";
    if(e && e.code==="not_granted"){ sample=null; $$(".needs-ai").forEach(b=>b.hidden=true); } }
  finally{ btn.disabled=false; } }
let vidTimer=null;
function viewVideo(){ if(vidTab==="read") return viewReading(); viewVideoWatch(); $("#view").insertAdjacentHTML("afterbegin", vidTabs()); wireVidTabs(); }
function viewVideoWatch(){
  vidPick(); const V=VIDEO, S=vwk(); const url=V.yt?`https://www.youtube.com/watch?v=${encodeURIComponent(V.yt)}`:(V.source||"");
  const meta=`${esc(V.channel)}${V.speaker?" · "+esc(V.speaker):""} · ${esc(V.length)} · ${esc(V.level)}`;
  const credit=V.license?`<p class="vcredit">Video: “${esc(V.title)}” by ${esc(V.channel)}${V.license.name?`, licensed under ${V.license.url?`<a href="${esc(V.license.url)}" target="_blank" rel="noopener">${esc(V.license.name)}</a>`:esc(V.license.name)}`:""}${V.source?` · <a href="${esc(V.source)}" target="_blank" rel="noopener">original</a>`:""}${V.changes?` · ${esc(V.changes)}`:""}.</p>`:"";
  const [mcR,mcN,lsR,lsN]=vidScore(S); const done=k=>!!S.ok[k];
  const TK=Object.keys(V.tasks||{});
  const under=!V.tasks.syn?"":V.tasks.syn.text.replace(/\[([^\]]+)\]/g,(m,w)=>`<u>${esc(w)}</u>`);
  const task=(k)=>{ const T=V.tasks[k]; const ty=T.type||k; return `<section class="panel vtask" data-task="${k}">
      <div class="usagehead"><h3>${esc(T.title)}</h3>${done("t_"+k)?'<span class="tag">✓ Done</span>':""}</div>
      <p class="vprompt">${esc(T.prompt)}</p>
      ${ty==="syn"?`<p class="plainline vunder">${under}</p>`:""}
      ${ty==="adv"?`<div class="sig">${T.adverbs.map(a=>`<span>${esc(a)}</span>`).join("")}</div>`:""}
      ${ty==="rep"?`<p class="hintline">Start like this: ${(T.starters||["The narrator explained that …","She pointed out that …"]).map(x=>`<em>${esc(x)}</em>`).join(" · ")}</p>`:""}
      ${ty==="sent"?`<div class="sig">${(T.use||[]).map(a=>`<span>${esc(a)}</span>`).join("")}</div>${T.starters?`<p class="hintline">You can start like this: ${T.starters.map(x=>`<em>${esc(x)}</em>`).join(" · ")}</p>`:""}`:""}
      ${ty==="arg"?`<p class="hintline">Plan: your view → two reasons with examples → the other side → conclusion.</p>${T.starters?`<p class="hintline">Useful openings: ${T.starters.map(x=>`<em>${esc(x)}</em>`).join(" · ")}</p>`:""}`:""}
      <label class="sr" for="vt_${k}">Your text</label>
      <textarea id="vt_${k}" class="tall" placeholder="Write here…">${esc(S.texts[k]||"")}</textarea>
      <p class="counter" id="vc_${k}">${wcount(S.texts[k]||"")} words</p>
      <div class="row" style="margin-top:8px"><button class="btn" type="button" data-vchk="${k}">Check</button>${aiBtn("vai_"+k)}<button class="linkbtn" type="button" data-vmod="${k}">See an example</button></div>
      <ul class="checks" id="vk_${k}" hidden></ul>
      <div class="ai" id="vo_${k}" hidden></div>
      <p class="model" id="vm_${k}" hidden>${esc(T.model)}</p>
    </section>`; };
  $("#view").innerHTML=`
  <header class="pagehead">
    <p class="eyebrow">Video of the week · ${esc(weekRange(V.week))}</p>
    <h1>${esc(V.title)}</h1>
    <p class="lede">${esc(V.intro)}</p></header>
  ${VIDEOS?`<div class="levels"><span class="lvlabel">Your video</span>
    <div class="lvbtns" role="radiogroup" aria-label="Video level">${LV.map((l,i)=>`<button class="lvb" type="button" role="radio" data-vlv="${i}" aria-checked="${i===curVidLv()}">${l}</button>`).join("")}</div>
    <small class="lvnote">Each level has its own video and tasks this week.</small></div>`:""}
  ${!V.file && SITE_MODE && V.yt ? `<figure class="vplayer"><iframe class="ytframe" src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(V.yt)}?rel=0" title="${esc(V.title)}" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>
    <figcaption><span>${meta}</span><a href="${esc(url)}" target="_blank" rel="noopener">Open on YouTube</a></figcaption></figure>${credit}` : ""}
  ${!V.file && SITE_MODE && V.yt ? "" : V.file?`<figure class="vplayer"><video controls playsinline preload="metadata" ${V.poster?`poster="${esc(V.poster)}"`:""} src="${esc(V.file)}"></video>
    <figcaption><span>${meta}</span>${url?`<a href="${esc(url)}" target="_blank" rel="noopener">Not playing? Open it in a new tab</a>`:""}</figcaption></figure>${credit}`
  :`<a class="watchcard" href="${esc(url)}" target="_blank" rel="noopener">
    <span class="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg></span>
    <span><b>Watch the video</b><small>${meta}</small><small>Opens YouTube in a new tab. Watch once for the main idea, then again while you do the tasks.</small></span>
  </a>${credit}`}
  <div class="chips-row" style="margin-top:14px">
    <span class="pill"><b>${mcR}/${mcN}</b> questions right</span>
    <span class="pill"><b>${lsR}/${lsN}</b> listening notes</span>
    <span class="pill"><b>${TK.filter(k=>done("t_"+k)).length}/${TK.length}</b> writing tasks</span>
  </div>
  <h2 class="sec">1 · Before you watch</h2>
  <div class="panel"><dl class="vvocab">${V.vocab.map(x=>`<div><dt>${esc(x.w)}</dt><dd>${esc(x.m)}</dd></div>`).join("")}</dl></div>
  <h2 class="sec">2 · Check your understanding</h2>
  <div class="panel" id="vq">${V.questions.map((q,i)=>{ const ch=S.mc[i]; const ans=ch!==undefined;
    return `<div class="vqi" data-q="${i}"><p class="qtext" style="font-size:1.12rem;margin:0 0 10px">${i+1}. ${esc(q.q)}</p>
      <div class="opts">${q.o.map(o=>`<button class="opt${ans&&o===q.a?" right":""}${ans&&o===ch&&o!==q.a?" wrong":""}" type="button" data-o="${esc(o)}" ${ans?"disabled":""}>${esc(o)}</button>`).join("")}</div>
      ${ans?`<div class="feedback ${ch===q.a?"ok":"no"}">${ch===q.a?"✓ Right.":"✕ Not quite."} ${esc(q.why)}</div>`:""}</div>`; }).join("")}
    ${Object.keys(S.mc).length?`<div class="row"><button class="linkbtn" type="button" id="vqReset">Try the questions again</button></div>`:""}</div>
  <h2 class="sec">3 · Write what you heard</h2>
  <div class="panel">${V.listen.map((l,i)=>`<div class="vli">
      <p class="qtext" style="font-size:1.08rem;margin:0 0 8px">${esc(l.q)}</p>
      <label class="sr" for="vl_${i}">Your notes</label>
      <textarea id="vl_${i}" placeholder="Write what you heard, in your own words…">${esc(S.listen[i]||"")}</textarea>
      <div class="row" style="margin-top:8px"><button class="btn ghost" type="button" data-lchk="${i}">Check my notes</button><span class="hintline" style="margin:0">${esc(l.hint)}</span></div>
      <ul class="checks" id="lk_${i}" hidden></ul><p class="model" id="lm_${i}" hidden>${esc(l.model)}</p></div>`).join("")}</div>
  <h2 class="sec">4 · Write about it</h2>
  ${TK.map(task).join("")}
  ${typeof AUTH!=="undefined" && AUTH && me ? `<div class="panel vsend"><div><h3>Your teacher sees this work</h3><p>Your answers and writing are saved to your account automatically.</p></div></div>` : `<div class="panel vsend"><div><h3>Send your work to your teacher</h3><p>Your progress code now includes this week's video answers and writing.</p></div>
    <button class="btn" type="button" data-go="progress">Make my progress code</button></div>`}`;
  $$("#vq .opt").forEach(b=>b.onclick=()=>{ const i=+b.closest(".vqi").dataset.q; if(S.mc[i]!==undefined) return; const q=V.questions[i]; const ok=b.dataset.o===q.a;
    S.mc[i]=b.dataset.o; S.at=Date.now(); saveVid(); track(ok); markDay(); save(); const y=window.scrollY; viewVideo(); window.scrollTo(0,y); if(ok) burst($(`.vqi[data-q="${i}"] .opt.right`),6); });
  const rs=$("#vqReset"); if(rs) rs.onclick=()=>{ S.mc={}; saveVid(); const y=window.scrollY; viewVideo(); window.scrollTo(0,y); };
  V.listen.forEach((l,i)=>{ const ta=$("#vl_"+i);
    ta.addEventListener("input",()=>{ S.listen[i]=ta.value; S.at=Date.now(); clearTimeout(vidTimer); vidTimer=setTimeout(saveVid,400); });
    $(`[data-lchk="${i}"]`).onclick=()=>{ const t=ta.value; if(!t.trim()){ ta.focus(); return; } const ul=$("#lk_"+i);
      const items=l.keys.map(g=>({ok:g.some(k=>t.toLowerCase().includes(k)),txt:`Mentions ${g[0]}`})); items.push({ok:wcount(t)>=(l.min||12),txt:`At least ${l.min||12} words (you have ${wcount(t)})`});
      const ok=items.every(x=>x.ok); ul.hidden=false; ul.innerHTML=items.map(x=>`<li class="${x.ok?"pass":"fail"}">${esc(x.txt)}</li>`).join("");
      if(ok && !S.ok["l"+i]){ S.ok["l"+i]=1; track(true); burst(ul,6); } else if(!ok) track(false);
      S.listen[i]=t; saveVid(); markDay(); save(); $("#lm_"+i).hidden=false; }; });
  TK.forEach(k=>{ const ta=$("#vt_"+k);
    ta.addEventListener("input",()=>{ S.texts[k]=ta.value; S.at=Date.now(); $("#vc_"+k).textContent=wcount(ta.value)+" words"; clearTimeout(vidTimer); vidTimer=setTimeout(saveVid,400); });
    $(`[data-vchk="${k}"]`).onclick=()=>{ const t=ta.value; if(!t.trim()){ ta.focus(); return; } const items=vidChecks(k,t); const ul=$("#vk_"+k);
      ul.hidden=false; ul.innerHTML=items.map(x=>`<li class="${x.warn?"warn":x.ok?"pass":"fail"}">${esc(x.txt)}</li>`).join("");
      const ok=items.every(x=>x.ok); S.texts[k]=t; S.at=Date.now();
      if(ok && !S.ok["t_"+k]){ S.ok["t_"+k]=1; bgWrite("v:"+vidKey()+":"+k); track(true); burst(ul,10); } else if(!ok) track(false);
      saveVid(); markDay(); save(); };
    $("#vai_"+k).onclick=()=>{ const t=ta.value.trim(); if(!t){ ta.focus(); return; } vidAI(k,t,$("#vo_"+k),$("#vai_"+k)); };
    $(`[data-vmod="${k}"]`).onclick=()=>{ $("#vm_"+k).hidden=!$("#vm_"+k).hidden; }; });
}
/* What goes into the progress code: the last two weeks of video work */
function vidForCode(){ const out={}; Object.keys(vidS.weeks).sort().slice(-2).forEach(k=>{ const S=vidS.weeks[k]; if(!S.at) return;
  const V=k===vidKey()?VIDEO:null; const sc=V?vidScore(S):(S.sc||null); if(V) S.sc=sc;
  const cut=x=>String(x||"").slice(0,1500);
  out[k]={at:S.at,s:sc,ti:V?V.title:(S.ti||""),q:[0,1,2].map(i=>cut(S.listen[i])),t:Object.fromEntries(Object.keys(S.texts||{}).map(x=>[x,cut(S.texts[x])])),lv:(k.split(":")[1]??null),ok:Object.keys(S.ok)};
  if(V) S.ti=V.title; }); saveVid(); return out; }

/* ---------- Grammar rooms: one engine, six topics ----------
   items: [lv, sentence with ___, answer (string or array of accepted answers), options (array = multiple choice, null = type it), why, rule index]
   fix:   [lv, wrong sentence, [accepted corrections], why, rule index] */
const GR = {
  modals: { t:"Modals", intro:"Must, have to, should, might, can: small words that change the meaning of the whole sentence.",
    rules:[
      {t:"must and have to: obligation", rule:"Must for rules you feel or write on signs; have to for rules from outside and routines. The past of both is had to.", ex:["I must call Mum tonight.","We have to wear a uniform.","Yesterday I had to work late."]},
      {t:"mustn't vs don't have to", rule:"Mustn't = it's not allowed. Don't have to (or needn't) = it isn't necessary.", ex:["You mustn't smoke here.","You don't have to come if you're busy."],
        pl:"„Nie wolno” = mustn't, a „nie musisz” = don't have to. To dwie różne rzeczy!", ro:"Atenție: „nu trebuie” în română poate însemna ambele. Interzis = mustn't; nu e necesar = don't have to.", en:"Romanian “nu trebuie” covers both meanings, so Romanian speakers mix them up most."},
      {t:"Advice: should, ought to, had better", rule:"Should and ought to give advice. Had better is stronger, almost a warning, and takes the base verb.", ex:["You should see a doctor.","You'd better not be late again."]},
      {t:"Possibility and deduction", rule:"Might / may / could = maybe. Must = I'm sure it's true. Can't = I'm sure it isn't.", ex:["It might rain later.","She's been working all day. She must be tired.","That can't be Tom. He's in Paris."]},
      {t:"Ability and permission", rule:"Can / could for ability and permission. Use be able to with other tenses (will be able to, have been able to).", ex:["I could swim when I was five.","Can I open the window?","Will you be able to come?"]},
      {t:"Past modals", rule:"Modal + have + past participle talks about the past: should have (regret), must have / can't have (deduction), could have (missed chance).", ex:["I should have studied more.","They must have gone to bed.","You could have told me!"],
        pl:"Nigdy nie pisz „should of”. To tylko wymowa „should've”: should have.", ro:"Nu scrie „should of”. Se pronunță „should've”, dar se scrie should have.", en:"Never write “should of”: it's how “should've” sounds."}
    ],
    items:[
      [0,"You ___ wear a seatbelt in a car. It's the law.","have to",["have to","should","might","can"],"An outside rule: have to.",0],
      [0,"I ___ swim when I was five.","could",["could","can","must","should"],"Ability in the past: could.",4],
      [0,"___ I open the window?","Can",["Can","Must","Do","Have"],"Asking for permission: can (or could).",4],
      [0,"You look tired. You ___ go to bed.","should",["should","mustn't","can't","have"],"Advice: should.",2],
      [1,"You ___ come to the party if you don't want to.","don't have to",["don't have to","mustn't"],"It isn't necessary: don't have to.",1],
      [1,"You ___ smoke in the hospital. It's forbidden.","mustn't",["mustn't","don't have to"],"Not allowed: mustn't.",1],
      [1,"Tomorrow is Sunday, so I ___ get up early.","don't have to",["don't have to","mustn't"],"Not necessary: don't have to.",1],
      [1,"Yesterday I ___ work until nine.","had to",["had to","must","have to","should"],"The past of must / have to is had to.",0],
      [1,"Take an umbrella. It ___ rain later.","might",["might","must","can't","has to"],"Maybe: might.",3],
      [1,"It's a secret. You ___ tell anyone! (it's not allowed)",["mustn't","must not","can't","cannot"],null,"Not allowed: mustn't.",1],
      [2,"She's been working for twelve hours. She ___ be exhausted.","must",["must","can't","might not","has to"],"I'm sure: must.",3],
      [2,"That ___ be Tom at the door. He's in Paris this week.","can't",["can't","mustn't","must","shouldn't"],"I'm sure it isn't true: can't.",3],
      [2,"You'd better ___ late again.","not be",["not be","not to be","don't be","to not be"],"Had better + base verb: had better not be.",2],
      [2,"Will you ___ come tomorrow?","be able to",["be able to","can","could","must"],"After will, use be able to.",4],
      [2,"Entry is free, so we ___ pay. (it isn't necessary)",["don't have to","do not have to","needn't","need not","don't need to"],null,"Not necessary: don't have to.",1],
      [3,"I ___ have studied more. I failed the test.","should",["should","must","can","would"],"Regret about the past: should have.",5],
      [3,"The lights are off. They ___ have gone to bed.","must",["must","should","can't","had to"],"I'm sure about the past: must have.",5],
      [3,"He ___ have seen me. I was hiding.","can't",["can't","mustn't","shouldn't","needn't"],"I'm sure it didn't happen: can't have.",5],
      [3,"You ___ bring food. There'll be plenty.","needn't",["needn't","mustn't","can't","shouldn't"],"Needn't = it isn't necessary.",1],
      [3,"I didn't go to the party. I really ___ (go). Everyone says it was great.",["should have gone","should've gone","ought to have gone"],null,"Regret: should have + past participle.",5],
      [4,"I'm not sure where Anna is. She ___ be at the gym.","may",["may","must","can't","has to"],"Maybe: may.",3],
      [4,"You ___ have told me it was a costume party! I look ridiculous.","could",["could","must","can","would"],"Criticism about the past: could have (or should have).",5],
      [4,"Passengers ___ not leave luggage unattended.","must",["must","need","might","would"],"Formal rules on signs: must not.",0],
      [5,"You ___ have worried. Everything was fine in the end.",["needn't","need not","didn't need to"],null,"Needn't have = you did it, but it wasn't necessary.",5]
    ],
    fix:[
      [0,"I must to go now.",["I must go now."],"No to after must.",0],
      [0,"She can sings very well.",["She can sing very well."],"Can + base verb, no -s.",4],
      [1,"You don't must smoke here.",["You mustn't smoke here.","You must not smoke here."],"Must has its own negative: mustn't.",1],
      [1,"Yesterday I must work late.",["Yesterday I had to work late."],"Must has no past form: had to.",0],
      [2,"He cans speak three languages.",["He can speak three languages."],"Can never takes -s.",4],
      [2,"You should to see a doctor.",["You should see a doctor."],"No to after should.",2],
      [3,"I should of called you.",["I should have called you.","I should've called you."],"Should have, not should of.",5],
      [4,"She must be at home yesterday.",["She must have been at home yesterday."],"For the past: must have been.",5]
    ]},
  cond: { t:"Conditionals", intro:"If sentences: real facts, likely futures, imaginary situations and regrets.",
    rules:[
      {t:"Zero: facts", rule:"If + present, present. Things that are always true.", ex:["If you heat ice, it melts.","If I drink coffee late, I can't sleep."]},
      {t:"First: real future", rule:"If + present, will + verb. Never put will after if, when or as soon as.", ex:["If it rains, we'll stay in.","I'll call you when I get home."],
        pl:"Po polsku „jeśli będzie padać”, ale po angielsku if it rains, nie if it will rain.", ro:"În română „dacă va ploua”, dar în engleză if it rains, nu if it will rain.", en:"Polish and Romanian use a future after if; English doesn't."},
      {t:"Second: imaginary now", rule:"If + past, would + verb. Unreal or unlikely situations now or in the future. If I were you is the classic advice form.", ex:["If I had more time, I'd learn Italian.","If I were you, I'd take the job."],
        pl:"„Gdybym miał” to if I had, nie if I would have. Would idzie tylko do drugiej części zdania.", ro:"„Dacă aș avea” se spune if I had, nu if I would have. Would apare doar în cealaltă parte.", en:"Would never goes in the if part."},
      {t:"Third: imaginary past", rule:"If + past perfect, would have + past participle. Regrets and things that didn't happen.", ex:["If we had left earlier, we would have caught the train."]},
      {t:"unless, in case, I wish, mixed", rule:"Unless = if not. In case = to be ready if. I wish + past (now) or past perfect (past). Mixed: past condition, present result.", ex:["You won't get in unless you have a ticket.","Take an umbrella in case it rains.","I wish I had more time.","If I had taken that job, I'd be in London now.","Had I known, I would have helped. (formal)"]}
    ],
    items:[
      [0,"If you heat water to 100°C, it ___.","boils",["boils","boiled","would boil","has boiled"],"A fact: present + present.",0],
      [0,"If it ___ tomorrow, we'll stay at home.","rains",["rains","will rain","would rain","rained"],"No will after if.",1],
      [1,"If you study, you ___ the exam.","will pass",["will pass","would pass","passed","had passed"],"Real future: will.",1],
      [1,"I'll call you when I ___ home.","get",["get","will get","got","would get"],"No will after when.",1],
      [1,"If you ___ (not hurry), you'll miss the bus.",["don't hurry","do not hurry"],null,"If + present: don't hurry.",1],
      [2,"If I ___ rich, I'd buy a house by the sea.","were",["were","am","will be","would be"],"Imaginary now: if + past (were).",2],
      [2,"If I were you, I ___ take the job.","would",["would","will","am","did"],"Advice: if I were you, I would…",2],
      [2,"What would you do if you ___ the lottery?","won",["won","win","will win","would win"],"Imaginary future: if + past.",2],
      [2,"If I ___ (have) a car, I would drive to work.",["had"],null,"If + past: had.",2],
      [3,"If we had left earlier, we ___ the train.","would have caught",["would have caught","would catch","will catch","had caught"],"Imaginary past: would have + past participle.",3],
      [3,"If she ___ harder, she would have passed.","had studied",["had studied","studied","would study","has studied"],"If + past perfect.",3],
      [3,"You won't get in ___ you have a ticket.","unless",["unless","if","when","so"],"Unless = if not.",4],
      [3,"If he had asked me, I ___ (help) him.",["would have helped","would've helped","'d have helped"],null,"Would have + past participle.",3],
      [4,"I wish I ___ more time.","had",["had","have","would have","will have"],"Wish about now: past simple.",4],
      [4,"If I had taken that job, I ___ in London now.","would be",["would be","would have been","will be","am"],"Mixed: past condition, present result.",4],
      [4,"Take an umbrella ___ it rains.","in case",["in case","unless","if not","so that"],"In case = to be ready if it happens.",4],
      [4,"I wish I ___ (not say) that.",["hadn't said","had not said"],null,"Wish about the past: past perfect.",4],
      [5,"___ I known, I would have helped.","Had",["Had","If","Would","Should"],"Formal inversion: Had I known = If I had known.",4]
    ],
    fix:[
      [0,"If it will rain, we stay home.",["If it rains, we'll stay home.","If it rains, we will stay home.","If it rains, we stay home."],"No will after if.",1],
      [1,"If I will see him, I'll tell him.",["If I see him, I'll tell him.","If I see him, I will tell him."],"No will after if.",1],
      [2,"If I would have money, I would travel.",["If I had money, I would travel.","If I had money, I'd travel."],"No would in the if part.",2],
      [2,"If I am you, I would apologise.",["If I were you, I would apologise.","If I were you, I'd apologise.","If I was you, I would apologise."],"Imaginary: if I were you.",2],
      [3,"If I would have known, I would have come.",["If I had known, I would have come.","If I'd known, I would have come.","If I had known, I'd have come.","If I'd known, I'd have come."],"If + past perfect: if I had known.",3],
      [4,"I wish I would have more free time.",["I wish I had more free time."],"Wish + past simple for now.",4],
      [4,"Unless you don't hurry, you'll be late.",["Unless you hurry, you'll be late.","If you don't hurry, you'll be late.","Unless you hurry, you will be late."],"Unless already means if not.",4]
    ]},
  passive: { t:"The passive", intro:"When the action matters more than who did it.",
    rules:[
      {t:"Form and use", rule:"Be + past participle. Use it when the doer is unknown, unimportant or obvious.", ex:["Paper is made from wood.","My phone was stolen."],
        pl:"Polskie „mówi się”, „robi się” często tłumaczymy stroną bierną: English is spoken here.", ro:"Construcția cu „se” din română devine adesea pasiv în engleză: Se vorbește engleza → English is spoken.", en:"Polish and Romanian often use impersonal forms (się / se) where English uses the passive."},
      {t:"Passive in every tense", rule:"Change only be: is made, was made, has been made, will be made, is being made.", ex:["The bridge was built in 1890.","The road is being repaired.","Your order hasn't been sent yet."]},
      {t:"by + the doer", rule:"Add by only when the doer is important or interesting.", ex:["Pan Tadeusz was written by Adam Mickiewicz."]},
      {t:"Modals in the passive", rule:"Modal + be + past participle; for the past, modal + have been + past participle.", ex:["This form must be completed in ink.","The report should have been finished last week."]},
      {t:"have something done; it is said", rule:"Have / get something done = someone does it for you. It is said that… / He is believed to… for reporting opinions formally.", ex:["I had my hair cut.","It is said that the castle is haunted.","He is believed to have left the country."]}
    ],
    items:[
      [1,"English ___ all over the world.","is spoken",["is spoken","speaks","is speaking","spoken"],"Present passive: is + past participle.",0],
      [1,"This bridge ___ in 1890.","was built",["was built","built","is built","was build"],"Past passive: was + built.",1],
      [1,"The windows ___ every week.","are cleaned",["are cleaned","clean","are cleaning","cleaned"],"Present passive, plural: are cleaned.",1],
      [1,"Cheese ___ (make) from milk.",["is made"],null,"Present passive: is made.",0],
      [2,"My bike ___! I can't find it anywhere.","has been stolen",["has been stolen","has stolen","was stealing","is stolen"],"Present perfect passive: has been stolen.",1],
      [2,"The results ___ next Monday.","will be announced",["will be announced","will announce","are announcing","announced"],"Future passive: will be + past participle.",1],
      [2,"Pan Tadeusz ___ by Adam Mickiewicz.","was written",["was written","wrote","has written","is writing"],"Past passive with by.",2],
      [2,"The thief ___ (catch) yesterday.",["was caught"],null,"Past passive: was caught.",1],
      [3,"The road ___ at the moment, so take the other route.","is being repaired",["is being repaired","is repairing","has repaired","repairs"],"Continuous passive: is being + past participle.",1],
      [3,"This form must ___ in black ink.","be completed",["be completed","complete","completed","be completing"],"Modal passive: must be completed.",3],
      [3,"Your order ___ yet.","hasn't been sent",["hasn't been sent","hasn't sent","didn't send","isn't sending"],"Present perfect passive, negative.",1],
      [3,"A new hospital ___ (build) next year.",["will be built","is going to be built"],null,"Future passive.",1],
      [4,"I'm going to ___ my hair cut tomorrow.","have",["have","make","do","be"],"Have something done.",4],
      [4,"It ___ that the castle is haunted.","is said",["is said","says","is saying","said"],"It is said that…",4],
      [4,"The report should ___ last week.","have been finished",["have been finished","be finished","have finished","been finished"],"Past modal passive: should have been + past participle.",3],
      [4,"We had our kitchen ___ (paint) last month.",["painted"],null,"Have something done: had our kitchen painted.",4],
      [5,"He is believed ___ the country.","to have left",["to have left","to leave","leaving","that he left"],"Is believed to have + past participle.",4]
    ],
    fix:[
      [1,"The house was build in 1920.",["The house was built in 1920."],"Past participle: built.",0],
      [1,"English is speak in many countries.",["English is spoken in many countries."],"Past participle: spoken.",0],
      [2,"The letter was wrote by my grandmother.",["The letter was written by my grandmother."],"Past participle: written.",2],
      [3,"The car is repairing now.",["The car is being repaired now."],"The car doesn't repair anything: is being repaired.",1],
      [3,"The work must finish by Friday.",["The work must be finished by Friday."],"Modal passive: must be finished.",3],
      [4,"I cut my hair at the hairdresser's.",["I had my hair cut at the hairdresser's.","I got my hair cut at the hairdresser's."],"Someone else did it: had my hair cut.",4],
      [4,"It says that he is very rich.",["It is said that he is very rich.","They say that he is very rich.","People say that he is very rich."],"It is said that…",4]
    ]},
  questions: { t:"Questions", intro:"Word order, do and does, who-questions and polite indirect questions.",
    rules:[
      {t:"Word order", rule:"(Question word) + helping verb + subject + main verb.", ex:["Where do you live?","How long have you been here?"],
        pl:"Po polsku pytanie robi się intonacją („Mieszkasz tu?”). Po angielsku potrzebne jest do / does / did: Do you live here?", ro:"În română întrebarea se face din intonație („Locuiești aici?”). În engleză ai nevoie de do / does / did: Do you live here?", en:"Polish and Romanian can make questions with intonation alone; English needs a helping verb."},
      {t:"do, does, did", rule:"When there is no other helping verb, add do / does / did and use the base verb.", ex:["Does she like coffee?","Did you see the match?"]},
      {t:"Subject questions", rule:"When who or what is the subject, there is no do.", ex:["Who called you?","What happened?"]},
      {t:"Indirect questions", rule:"After Can you tell me… / Do you know… / I wonder…, use normal word order and no do.", ex:["Can you tell me where the station is?","Do you know what time it starts?"]},
      {t:"Tags and prepositions", rule:"Question tags repeat the helping verb (positive → negative tag). Prepositions usually go at the end.", ex:["It's cold, isn't it?","You haven't eaten, have you?","Who are you talking to?"]}
    ],
    items:[
      [0,"Where ___ you live?","do",["do","does","are","is"],"You + do.",1],
      [0,"___ she like coffee?","Does",["Does","Do","Is","Has"],"She + does.",1],
      [0,"What ___ your name?","is",["is","do","does","are"],"Be questions need no do.",0],
      [1,"___ you see the match last night?","Did",["Did","Do","Were","Have"],"Past simple question: did.",1],
      [1,"Who ___ the window?","broke",["broke","did break","did broke","breaked"],"Who is the subject: no did.",2],
      [1,"What ___? You look upset.","happened",["happened","did happen","did it happen","happen"],"What is the subject: no did.",2],
      [1,"___ (you / like) pizza?",["do you like"],null,"Do + you + base verb.",1],
      [2,"How long ___ you been learning English?","have",["have","did","are","do"],"Present perfect: have + subject + been.",0],
      [2,"Can you tell me where ___?","the station is",["the station is","is the station","does the station","the station does"],"Indirect question: normal word order.",3],
      [2,"Who are you waiting ___?","for",["for","to","at","by"],"Wait for: the preposition goes at the end.",4],
      [2,"You're from Kraków, ___ you?","aren't",["aren't","don't","isn't","weren't"],"Positive sentence, negative tag: aren't you?",4],
      [2,"Where ___ (she / go) last summer?",["did she go"],null,"Did + subject + base verb.",1],
      [3,"Do you know what time ___?","the film starts",["the film starts","does the film start","starts the film","the film does start"],"Indirect question: no does, normal order.",3],
      [3,"She hasn't called yet, ___ she?","has",["has","hasn't","did","does"],"Negative sentence, positive tag.",4],
      [3,"Which bus ___ to the city centre?","goes",["goes","does go","does it go","go"],"Which bus is the subject: no does.",2],
      [3,"Could you tell me how much ___ (this / cost)?",["this costs"],null,"Indirect question: subject + verb.",3],
      [4,"I wonder why ___ so late.","he is",["he is","is he","does he","he does"],"Indirect question after I wonder.",3],
      [4,"Let's go, ___ we?","shall",["shall","will","don't","won't"],"Let's… shall we?",4]
    ],
    fix:[
      [0,"Where you live?",["Where do you live?"],"Add do.",0],
      [0,"You like coffee?",["Do you like coffee?"],"Start with do.",1],
      [1,"Did you saw my keys?",["Did you see my keys?"],"After did, use the base verb.",1],
      [1,"Where she works?",["Where does she work?"],"Does + base verb.",1],
      [2,"Who did call you?",["Who called you?"],"Subject question: no did.",2],
      [2,"Can you tell me where is the bank?",["Can you tell me where the bank is?"],"Indirect question: the bank is.",3],
      [3,"Do you know what time does the shop open?",["Do you know what time the shop opens?"],"Indirect question: no does.",3],
      [4,"I don't know what is his name.",["I don't know what his name is."],"Indirect: what his name is.",3]
    ]},
  patterns: { t:"Verb patterns", intro:"Doing or to do? Some verbs take -ing, some take to, and a few change meaning.",
    rules:[
      {t:"verb + -ing", rule:"enjoy, finish, mind, avoid, suggest, keep, consider, can't stand, practise", ex:["I enjoy reading.","Would you mind closing the door?"],
        pl:"Po polsku po większości czasowników jest bezokolicznik („skończyć czytać”), a po angielsku finish reading.", ro:"În română folosim „să” + verb („am terminat să citesc”), dar în engleză finish reading.", en:"Polish and Romanian use an infinitive or să-form where English needs -ing."},
      {t:"verb + to", rule:"want, decide, hope, plan, agree, refuse, promise, manage, would like, need", ex:["I want to go.","We managed to catch the train."]},
      {t:"preposition + -ing", rule:"After any preposition, use -ing: interested in learning, good at cooking, look forward to seeing, instead of going.", ex:["I look forward to hearing from you."],
        pl:"Uwaga: look forward TO seeing. To jest przyimek, więc -ing.", ro:"Atenție: look forward TO seeing. To e prepoziție aici, deci -ing.", en:"In look forward to, to is a preposition, so it takes -ing."},
      {t:"stop, remember, forget, try", rule:"Both patterns, different meanings. Remember to do (future duty) vs remember doing (memory). Stop doing (quit) vs stop to do (pause in order to).", ex:["Remember to lock the door.","I remember locking it.","He stopped smoking."]},
      {t:"verb + person + to; make / let + base", rule:"want / ask / tell someone to do. Make and let take the base verb.", ex:["I want you to come.","She made me laugh.","My parents let me stay out late."],
        pl:"Nie mów „I want that you come”. Poprawnie: I want you to come.", ro:"Nu spune „I want that you come”. Corect: I want you to come.", en:"Never “I want that you…”: I want you to…"}
    ],
    items:[
      [0,"I enjoy ___ films.","watching",["watching","to watch","watch","watched"],"Enjoy + -ing.",0],
      [0,"I want ___ a doctor.","to be",["to be","being","be","been"],"Want + to.",1],
      [1,"She decided ___ to Spain.","to move",["to move","moving","move","moved"],"Decide + to.",1],
      [1,"Have you finished ___ the report?","writing",["writing","to write","write","wrote"],"Finish + -ing.",0],
      [1,"I'm interested in ___ Japanese.","learning",["learning","to learn","learn","learned"],"Preposition + -ing.",2],
      [1,"I hope ___ (see) you soon.",["to see"],null,"Hope + to.",1],
      [2,"I look forward to ___ from you.","hearing",["hearing","hear","to hear","heard"],"Look forward to + -ing.",2],
      [2,"Would you mind ___ the door?","closing",["closing","to close","close","closed"],"Mind + -ing.",0],
      [2,"My parents let me ___ late.","stay",["stay","to stay","staying","stayed"],"Let + person + base verb.",4],
      [2,"She asked me ___ her.","to help",["to help","help","helping","that I help"],"Ask + person + to.",4],
      [2,"He avoided ___ (answer) the question.",["answering"],null,"Avoid + -ing.",0],
      [3,"Remember ___ the lights before you leave.","to turn off",["to turn off","turning off","turn off","turned off"],"Remember to = don't forget a duty.",3],
      [3,"I'll never forget ___ the Alps for the first time.","seeing",["seeing","to see","see","saw"],"Forget + -ing = a memory.",3],
      [3,"He stopped ___ ten years ago and feels much better.","smoking",["smoking","to smoke","smoke","smoked"],"Stop + -ing = quit.",3],
      [3,"We managed ___ the last train.","to catch",["to catch","catching","catch","caught"],"Manage + to.",1],
      [3,"Try ___ (restart) your computer. It might help.",["restarting","to restart"],null,"Try + -ing = try it as an experiment.",3],
      [4,"She suggested ___ a taxi.","taking",["taking","to take","us to take","take"],"Suggest + -ing.",0],
      [4,"The film made me ___.","cry",["cry","to cry","crying","cried"],"Make + person + base verb.",4],
      [4,"I'm used to ___ up early.","getting",["getting","get","to get","got"],"Be used to + -ing.",2],
      [4,"I'm thinking of ___ (change) jobs.",["changing"],null,"Preposition + -ing.",2],
      [5,"We regret ___ you that your application was unsuccessful.","to inform",["to inform","informing","inform","informed"],"Regret to inform = formal bad news now.",3]
    ],
    fix:[
      [0,"I want go home.",["I want to go home."],"Want + to.",1],
      [1,"I enjoy to swim.",["I enjoy swimming."],"Enjoy + -ing.",0],
      [1,"She is good in cooking.",["She is good at cooking.","She's good at cooking."],"Good at + -ing.",2],
      [2,"I look forward to see you.",["I look forward to seeing you."],"Look forward to + -ing.",2],
      [2,"He made me to wait for an hour.",["He made me wait for an hour."],"Make + person + base verb.",4],
      [3,"I want that you come.",["I want you to come."],"Want + person + to.",4],
      [3,"Would you mind to help me?",["Would you mind helping me?"],"Mind + -ing.",0],
      [4,"I suggest you going by train.",["I suggest going by train.","I suggest you go by train.","I suggest that you go by train."],"Suggest + -ing, or suggest (that) you go.",0]
    ]},
  preps: { t:"Prepositions", intro:"In, on, at for time and place, and the prepositions that belong to certain words.",
    rules:[
      {t:"Time: at, on, in", rule:"At for clock times and at night / at the weekend. On for days and dates. In for months, years, seasons and parts of the day.", ex:["at 9 o'clock","on Monday, on 5 May","in May, in 2026, in the morning"],
        pl:"„W weekend” to at the weekend (brytyjski) albo on the weekend (amerykański), nie in the weekend.", ro:"„În weekend” se spune at the weekend (britanic) sau on the weekend (american). „La ora 5” = at 5.", en:"Both languages say “in the weekend”; English says at (or on) the weekend."},
      {t:"Place: in, on, at", rule:"In for inside spaces, cities and countries. On for surfaces, and on the bus / train. At for points and places of activity: at the bus stop, at work, at home.", ex:["in Warsaw","on the table","at the station"],
        pl:"„Na zdjęciu” to in the photo, nie on the photo.", ro:"„În poză” = in the photo, la fel ca în română.", en:"Polish says “on the photo”; English says in the photo."},
      {t:"Movement: to, into, arrive in / at", rule:"Go to a place, get into a car, get on / off a bus. Arrive in a city or country, arrive at a building. No to before home.", ex:["We arrived in London.","He arrived at the airport.","I'm going home."]},
      {t:"Adjective + preposition", rule:"Learn them as pairs: interested in, good at, afraid of, proud of, responsible for, married to, different from.", ex:["She's afraid of spiders.","He's married to a doctor."]},
      {t:"Verb + preposition", rule:"depend on, listen to, wait for, look at, agree with, apply for, consist of. Some verbs take no preposition at all: discuss something, enter a room.", ex:["It depends on the weather.","I'm waiting for the bus.","We discussed the plan."],
        pl:"Uwaga: zależeć OD = depend ON, słuchać (bez przyimka) = listen TO, czekać NA = wait FOR.", ro:"Atenție: a depinde DE = depend ON, a asculta = listen TO, a aștepta = wait FOR.", en:"Translating straight from Polish or Romanian gives depend of, listen music, wait the bus."}
    ],
    items:[
      [0,"See you ___ Monday!","on",["on","in","at","to"],"Days: on.",0],
      [0,"The class starts ___ nine o'clock.","at",["at","on","in","by"],"Clock times: at.",0],
      [0,"My birthday is ___ May.","in",["in","on","at","by"],"Months: in.",0],
      [0,"She lives ___ Warsaw.","in",["in","on","at","to"],"Cities: in.",1],
      [0,"The book is ___ the table.","on",["on","in","at","of"],"Surfaces: on.",1],
      [0,"I'm ___ home tonight.","at",["at","in","on","to"],"At home.",1],
      [1,"What did you do ___ the weekend?",["at","on"],["at","in","on","by"],"British English: at the weekend. American English: on the weekend.",0],
      [1,"I'll see you ___ the morning.","in",["in","on","at","by"],"Parts of the day: in the morning.",0],
      [1,"We arrived ___ London at midnight.","in",["in","at","to","on"],"Arrive in a city.",2],
      [1,"Get ___ the bus at the next stop.","off",["off","out","down","from"],"Get on / off a bus.",2],
      [1,"Who's the woman ___ this photo?","in",["in","on","at","of"],"In the photo.",1],
      [1,"I usually go to bed ___ eleven.",["at"],null,"Clock times: at.",0],
      [2,"It depends ___ the weather.","on",["on","of","from","at"],"Depend on.",4],
      [2,"I'm waiting ___ my sister.","for",["for","on","to","at"],"Wait for.",4],
      [2,"Listen ___ me!","to",["to","at","for","with"],"Listen to.",4],
      [2,"She's afraid ___ spiders.","of",["of","from","for","about"],"Afraid of.",3],
      [2,"He's very good ___ maths.","at",["at","in","on","with"],"Good at.",3],
      [2,"We met ___ 2019.",["in"],null,"Years: in.",0],
      [3,"I'm interested ___ photography.","in",["in","on","about","for"],"Interested in.",3],
      [3,"She was proud ___ her son.","of",["of","on","for","with"],"Proud of.",3],
      [3,"I agree ___ you completely.","with",["with","to","on","for"],"Agree with a person.",4],
      [3,"He applied ___ a job in Berlin.","for",["for","to","on","at"],"Apply for a job.",4],
      [3,"This is very different ___ what I expected.",["from","to"],["from","than","of","to"],"Different from (also different to in British English).",3],
      [3,"Are you good ___ cooking?",["at"],null,"Good at.",3],
      [4,"The team consists ___ eleven players.","of",["of","from","in","with"],"Consist of.",4],
      [4,"Who is responsible ___ this mess?","for",["for","of","about","to"],"Responsible for.",3],
      [4,"I congratulated her ___ her promotion.","on",["on","for","about","with"],"Congratulate someone on something.",4],
      [4,"It's up ___ you.",["to"],null,"It's up to you = you decide.",4],
      [5,"She insisted ___ paying for dinner.","on",["on","to","for","in"],"Insist on + -ing.",4]
    ],
    fix:[
      [0,"I was born in 5 May.",["I was born on 5 May.","I was born on the 5th of May.","I was born on May 5."],"Dates: on.",0],
      [1,"See you in the weekend.",["See you at the weekend.","See you on the weekend."],"At (or on) the weekend.",0],
      [1,"I'm listening music.",["I'm listening to music.","I am listening to music."],"Listen to.",4],
      [2,"It depends of the price.",["It depends on the price."],"Depend on.",4],
      [2,"I'm waiting the bus.",["I'm waiting for the bus.","I am waiting for the bus."],"Wait for.",4],
      [2,"He arrived to the airport late.",["He arrived at the airport late."],"Arrive at a building.",2],
      [3,"She's married with a doctor.",["She's married to a doctor.","She is married to a doctor."],"Married to.",3],
      [3,"I'm interested about history.",["I'm interested in history.","I am interested in history."],"Interested in.",3],
      [4,"We discussed about the problem.",["We discussed the problem."],"Discuss has no preposition.",4]
    ]}
};
Object.values(GR).forEach(g=>{
  g.items=g.items.map(([lv,s,a,o,why,r])=>({lv,s,a:Array.isArray(a)?a:[a],o,why,r}));
  g.fix=g.fix.map(([lv,s,ok,why,r])=>({lv,s,ok,why,r}));
});





/* ---------- Conversations (role-play) ----------
   Each turn: what they say, then three replies: [text, points (2 best, 1 OK, 0 wrong), why]. */




/* ---------- Shared: Claude feedback on a piece of writing (only where the sample capability exists) ---------- */
async function writeAI(task, text, out, btn){
  if(!sample) return; btn.disabled=true; out.hidden=false; out.textContent="Thinking…";
  const prompt=`You are a friendly, honest English teacher. The learner is at about ${LV[state.vlv]} level. Task: ${task}
Learner's text: """${text}"""
Reply ONLY with JSON: {"task":"one sentence on how well the task was done","language":"one or two sentences on the main grammar and vocabulary mistakes, with corrections","better":"one improved sentence from their text","tip":"one short tip for next time"}`;
  try{ const r=await sample.json(prompt,{modelTier:"quick"}); out.textContent=`Task: ${r.task||""}\nLanguage: ${r.language||""}\nBetter: ${r.better||""}\nTip: ${r.tip||""}`; }
  catch(e){ out.textContent = e && e.code==="not_granted" ? "Claude feedback wasn't allowed, so only the automatic checks are available." : e && e.code==="rate_limited" ? "Too many requests at once. Wait a minute and try again." : "Feedback couldn't load this time. The automatic checks still work.";
    if(e && e.code==="not_granted"){ sample=null; $$(".needs-ai").forEach(b=>b.hidden=true); } }
  finally{ btn.disabled=false; }
}
const wcountT = t => (t.trim().match(/[A-Za-zÀ-ž'’-]+/g)||[]).length;

/* ---------- Reading of the week (a tab inside Video) ---------- */
let READING = {"week": "2026-W42", "title": "Ten minutes a day", "level": "B1–B2", "minutes": 6, "intro": "A short magazine-style article about a woman who learned Spanish in small steps. It was written for Psotek English; Marta is a made-up example.", "paras": ["When Marta, a nurse from Gdańsk, decided to learn Spanish at the age of forty-two, her friends were not exactly encouraging. \"You work night shifts,\" one of them reminded her. \"When exactly are you going to study?\" Marta didn't have an answer. She only knew that she had always wanted to read Spanish novels in the original, and that she was tired of waiting for the perfect moment.", "Her solution was almost embarrassingly simple: ten minutes a day, every day, no matter what. On busy days she listened to a short podcast on the bus. On quiet days she wrote three sentences in a notebook about what she had done. She never allowed herself to skip a day, but she also never forced herself to do more than ten minutes. \"If I felt like continuing, I continued,\" she says. \"But the promise was only ten minutes. That made it impossible to say no.\"", "At first, progress was slow. After three months she could order food and ask for directions, but she still froze whenever someone answered her quickly. The turning point came in the second year, when she found an online conversation partner in Valencia who wanted to practise Polish. They met on video twice a week, spending half an hour in each language. Mistakes, she discovered, were not a disaster. \"My partner made as many mistakes in Polish as I did in Spanish. We laughed a lot, and that took the fear away.\"", "Three years later, Marta is reading her fourth Spanish novel. She admits that she still uses a dictionary and that her grammar is far from perfect. However, she believes the small daily habit taught her something more valuable than any language rule. \"Big goals scare us,\" she says. \"Small ones don't. Ten minutes doesn't sound like much, but ten minutes every day for three years is more than a hundred and eighty hours.\"", "Her advice to other adult learners is simple: choose a time that is so small you cannot fail, attach it to something you already do every day, and find someone to talk to as soon as possible. \"Don't wait until you are ready,\" she says. \"Nobody ever feels ready.\""], "gloss": [{"w": "night shift", "m": "work that happens at night, for example in a hospital"}, {"w": "embarrassingly simple", "m": "so simple that it seems almost silly"}, {"w": "freeze (froze)", "m": "suddenly stop and be unable to speak or move, often from fear"}, {"w": "turning point", "m": "the moment when a situation starts to change"}, {"w": "far from perfect", "m": "not perfect at all"}], "tfng": [{"s": "Marta's friends thought her plan was a great idea.", "a": "F", "why": "They were \"not exactly encouraging\"."}, {"s": "Marta sometimes studied for longer than ten minutes.", "a": "T", "why": "\"If I felt like continuing, I continued.\""}, {"s": "Marta took a Spanish course at a language school.", "a": "NG", "why": "The text mentions a podcast, a notebook and a conversation partner, but not a school."}, {"s": "After three months, Marta could understand fast speakers easily.", "a": "F", "why": "She \"still froze whenever someone answered her quickly\"."}, {"s": "Her conversation partner was learning Polish.", "a": "T", "why": "The partner \"wanted to practise Polish\"."}, {"s": "Marta now reads Spanish without a dictionary.", "a": "F", "why": "\"She still uses a dictionary.\""}], "mc": [{"q": "Why did Marta choose only ten minutes a day?", "a": "Because such a small promise was easy to keep", "o": ["Because such a small promise was easy to keep", "Because her teacher told her to", "Because she was only free for ten minutes", "Because longer study is less effective"], "why": "\"The promise was only ten minutes. That made it impossible to say no.\""}, {"q": "What was the turning point in her learning?", "a": "Starting regular conversations with a partner", "o": ["Starting regular conversations with a partner", "Moving to Valencia", "Reading her first novel", "Passing an exam"], "why": "The turning point came when she found an online conversation partner."}, {"q": "How did the conversation partner help her with mistakes?", "a": "They both made mistakes and laughed about them", "o": ["They both made mistakes and laughed about them", "The partner corrected every mistake", "The partner never noticed her mistakes", "They agreed to speak only Spanish"], "why": "\"My partner made as many mistakes in Polish as I did in Spanish. We laughed a lot.\""}, {"q": "What is the main message of the article?", "a": "Small, regular habits can lead to big results", "o": ["Small, regular habits can lead to big results", "Adults cannot learn languages well", "Grammar is the most important part of learning", "You should wait until you feel ready"], "why": "The whole article shows how ten minutes a day added up over three years."}], "words": [{"q": "In paragraph 1, \"not exactly encouraging\" means…", "a": "rather negative", "o": ["rather negative", "very excited", "completely silent", "a little jealous"]}, {"q": "In paragraph 2, \"no matter what\" means…", "a": "in every situation", "o": ["in every situation", "only when it is easy", "if she remembered", "for no reason"]}, {"q": "In paragraph 4, \"admits\" means…", "a": "agrees that something is true, even if it's not positive", "o": ["agrees that something is true, even if it's not positive", "complains loudly", "forgets", "pretends"]}, {"q": "In paragraph 5, \"attach it to something you already do\" means…", "a": "link it to a daily routine", "o": ["link it to a daily routine", "write it on a piece of paper", "do it instead of your routine", "ask a friend to do it"]}], "respond": {"prompt": "Write 60–100 words: Which small daily habit could help you with your English? When and where would you do it?", "min": 60, "max": 100}};
(async()=>{ try{ const r=await fetch("reading.json",{cache:"no-cache"}); if(!r.ok) return; const j=await r.json(); if(j && j.paras && j.week){ const ch=j.week!==READING.week; READING=j; if(ch && route==="video" && vidTab==="read") render(); } }catch(e){} })();
let vidTab = (()=>{ try{ return localStorage.getItem("vocab5-vidtab")||"watch"; }catch(e){ return "watch"; } })();
const RDS_KEY="vocab5-reading-v1"; let rds={};
try{ rds=JSON.parse(localStorage.getItem(RDS_KEY)||"{}")||{}; }catch(e){}
const rdw = () => (rds[READING.week] ||= {tf:{}, mc:{}, wd:{}, text:""});
const saveRds = () => { try{ localStorage.setItem(RDS_KEY, JSON.stringify(rds)); }catch(e){} };
function vidTabs(){ return `<div class="picks" role="group" aria-label="This week" style="margin:0 0 18px"><button class="pick" type="button" data-vt="watch" aria-pressed="${vidTab==="watch"}">${ico("video")} Watch</button><button class="pick" type="button" data-vt="read" aria-pressed="${vidTab==="read"}">${ico("words")} Read</button></div>`; }
function wireVidTabs(){ $$("[data-vlv]").forEach(b=>b.onclick=()=>{ vidLv=+b.dataset.vlv; try{ localStorage.setItem("vocab5-vidlv",vidLv); }catch(e){} render(); window.scrollTo(0,0); });
  $$("[data-vt]").forEach(b=>b.onclick=()=>{ if(vidTab===b.dataset.vt) return; vidTab=b.dataset.vt; try{ localStorage.setItem("vocab5-vidtab",vidTab); }catch(e){} render(); }); }
function viewReading(){
  const R=READING, S=rdw();
  const tfDone=Object.keys(S.tf).length, mcDone=Object.keys(S.mc).length, wdDone=Object.keys(S.wd).length;
  const right = R.tfng.filter((q,i)=>S.tf[i]===q.a).length + R.mc.filter((q,i)=>S.mc[i]===q.a).length + R.words.filter((q,i)=>S.wd[i]===q.a).length;
  const tot = R.tfng.length+R.mc.length+R.words.length;
  const TF={T:"True",F:"False",NG:"Doesn't say"};
  $("#view").innerHTML=`${vidTabs()}
  <header class="pagehead"><p class="eyebrow">Reading of the week · ${esc(R.level)} · about ${R.minutes} min</p><h1>${esc(R.title)}</h1><p class="lede">${esc(R.intro)}</p></header>
  <div class="chips-row" style="margin:0 0 16px"><span class="pill"><b>${right}/${tot}</b> answers right</span>${canSpeak?`<button class="btn ghost" type="button" id="rdHear">${ico("sound")} Listen to the text</button>`:""}</div>
  <article class="panel readtext">${R.paras.map((p,i)=>`<p><span class="pnum">${i+1}</span>${esc(p)}</p>`).join("")}</article>
  <details class="panel" style="margin-top:12px"><summary><b>Key words</b></summary><dl class="vvocab">${R.gloss.map(g=>`<div><dt>${esc(g.w)}</dt><dd>${esc(g.m)}</dd></div>`).join("")}</dl></details>
  <h2 class="sec">1 · True, false or doesn't say?</h2>
  <div class="panel">${R.tfng.map((q,i)=>{ const ch=S.tf[i]; return `<div class="vqi"><p class="qtext" style="margin:0 0 8px">${i+1}. ${esc(q.s)}</p>
    <div class="opts">${["T","F","NG"].map(k=>`<button class="opt${ch!==undefined&&k===q.a?" right":""}${ch===k&&k!==q.a?" wrong":""}" type="button" data-tf="${i}" data-k="${k}" ${ch!==undefined?"disabled":""}>${TF[k]}</button>`).join("")}</div>
    ${ch!==undefined?`<div class="feedback ${ch===q.a?"ok":"no"}">${ch===q.a?"✓ ":"✕ It's “"+TF[q.a]+"”. "}${esc(q.why)}</div>`:""}</div>`; }).join("")}</div>
  <h2 class="sec">2 · Understanding</h2>
  <div class="panel">${R.mc.map((q,i)=>{ const ch=S.mc[i]; const os=(S["o"+i] ||= shuffle(q.o.slice())); return `<div class="vqi"><p class="qtext" style="margin:0 0 8px">${i+1}. ${esc(q.q)}</p>
    <div class="opts">${os.map(o=>`<button class="opt${ch!==undefined&&o===q.a?" right":""}${ch===o&&o!==q.a?" wrong":""}" type="button" data-mc="${i}" data-o="${esc(o)}" ${ch!==undefined?"disabled":""}>${esc(o)}</button>`).join("")}</div>
    ${ch!==undefined?`<div class="feedback ${ch===q.a?"ok":"no"}">${ch===q.a?"✓ ":"✕ "}${esc(q.why)}</div>`:""}</div>`; }).join("")}</div>
  <h2 class="sec">3 · Words in context</h2>
  <div class="panel">${R.words.map((q,i)=>{ const ch=S.wd[i]; const os=(S["w"+i] ||= shuffle(q.o.slice())); return `<div class="vqi"><p class="qtext" style="margin:0 0 8px">${i+1}. ${esc(q.q)}</p>
    <div class="opts">${os.map(o=>`<button class="opt${ch!==undefined&&o===q.a?" right":""}${ch===o&&o!==q.a?" wrong":""}" type="button" data-wd="${i}" data-o="${esc(o)}" ${ch!==undefined?"disabled":""}>${esc(o)}</button>`).join("")}</div></div>`; }).join("")}</div>
  <h2 class="sec">4 · Your turn</h2>
  <section class="panel"><p class="qtext" style="margin:0 0 10px">${esc(R.respond.prompt)}</p>
    <label class="sr" for="rdText">Your text</label><textarea id="rdText" class="tall" placeholder="Write here…">${esc(S.text||"")}</textarea>
    <p class="counter" id="rdCount">${wcountT(S.text||"")} words</p>
    <div class="row" style="margin-top:8px">${aiBtn("rdAI")}</div><div class="ai" id="rdOut" hidden></div></section>`;
  wireVidTabs();
  const h=$("#rdHear"); if(h) h.onclick=()=>sayEn(R.paras.join(" "),0.95);
  const pick=(kind,i,v,ok,btn)=>{ S[kind][i]=v; saveRds(); track(ok); if(ok) burst(btn,5); const y=window.scrollY; viewReading(); window.scrollTo({top:y}); };
  $$("[data-tf]").forEach(b=>b.onclick=()=>{ const i=+b.dataset.tf; pick("tf",i,b.dataset.k,b.dataset.k===R.tfng[i].a,b); });
  $$("[data-mc]").forEach(b=>b.onclick=()=>{ const i=+b.dataset.mc; pick("mc",i,b.dataset.o,b.dataset.o===R.mc[i].a,b); });
  $$("[data-wd]").forEach(b=>b.onclick=()=>{ const i=+b.dataset.wd; pick("wd",i,b.dataset.o,b.dataset.o===R.words[i].a,b); });
  const ta=$("#rdText"); ta.addEventListener("input",()=>{ S.text=ta.value; saveRds(); $("#rdCount").textContent=`${wcountT(ta.value)} words${wcountT(ta.value)<R.respond.min?` · aim for ${R.respond.min}–${R.respond.max}`:""}`; });
  const ab=$("#rdAI"); if(ab) ab.onclick=()=>{ if(wcountT(ta.value)<10) return; writeAI(`After reading the article "${R.title}", answer: ${R.respond.prompt}`, ta.value, $("#rdOut"), ab); };
}

/* ---------- Writing studio ---------- */
const LINKERS=["however","although","though","even though","despite","in spite of","whereas","while","therefore","as a result","consequently","so","because","since","as well as","in addition","moreover","furthermore","what is more","on the other hand","firstly","secondly","finally","in conclusion","to sum up","but","also","by the way","at first","later","because of","in fact","this way","what is more","alternatively","as soon as","after that","for example","for instance","such as","in my opinion","personally","overall","nevertheless","besides","on the one hand","to begin with","last but not least"];


const wst = { g:"email", tab:"write", lq:null, ldone:false, right:0, seen:0 };
try{ const s=JSON.parse(localStorage.getItem("vocab5-write")||"null"); if(s){ wst.g=s.g||"email"; wst.texts=s.texts||{}; } }catch(e){}
wst.texts ||= {};





/* ---------- Exam corner (matura and Bacalaureat task types) ---------- */









/* ---------- Accounts: Google sign-in on psotnyjez.com ----------
   Progress still lives in this browser (so the app is fast and works offline), and a copy is saved to the student's
   account every few seconds. Signing in on a new device downloads it; two devices are merged, keeping the best of each. */
const AUTH = (typeof ON_NEW!=="undefined" && ON_NEW) || (location.hostname==="localhost" && location.port==="8787");
const SYNC_HASH="psotek-sync-hash", SYNC_REV="psotek-sync-rev", NO_SYNC=new Set([SYNC_HASH,SYNC_REV,"psotek-showlv"]);
let me=null, syncTimer=0, syncBusy=false;
const apiFetch=(path,opt={})=>fetch(path,{credentials:"same-origin",...opt,headers:{"x-psotek":"1","content-type":"application/json",...(opt.headers||{})}});
function localSnapshot(){ const o={}; try{ for(let i=0;i<localStorage.length;i++){ const k=localStorage.key(i); if(MOVE_KEY(k) && !NO_SYNC.has(k)) o[k]=localStorage.getItem(k); } }catch(e){} return o; }
const hashStr=s=>sum36(String(s))+":"+String(s).length;
function getHashes(){ try{ return JSON.parse(localStorage.getItem(SYNC_HASH)||"{}")||{}; }catch(e){ return {}; } }
function setHashes(h){ try{ localStorage.setItem(SYNC_HASH,JSON.stringify(h)); }catch(e){} }
/* merging two saved copies: numbers keep the higher value, lists are joined, true wins, and a word's stats come from the copy with more answers */
function mergeVal(a,b){
  if(a===undefined) return b; if(b===undefined) return a;
  if(typeof a==="number" && typeof b==="number") return Math.max(a,b);
  if(typeof a==="boolean" || typeof b==="boolean") return !!a || !!b;
  if(Array.isArray(a) && Array.isArray(b)){ const seen=new Set(a.map(x=>JSON.stringify(x))); return a.concat(b.filter(x=>!seen.has(JSON.stringify(x)))); }
  if(a && b && typeof a==="object" && typeof b==="object"){
    if(typeof a.a==="number" && typeof b.a==="number" && "c" in a && "c" in b) return a.a>=b.a ? {...b,...a,t:Math.max(a.t||0,b.t||0)} : {...a,...b,t:Math.max(a.t||0,b.t||0)};
    const o={}; new Set([...Object.keys(a),...Object.keys(b)]).forEach(k=>{ o[k]=mergeVal(a[k],b[k]); }); return o; }
  return a; }
function mergeSnapshots(local, server){ const out={...server};
  Object.entries(local).forEach(([k,v])=>{ if(!(k in server)){ out[k]=v; return; } let A,B; try{ A=JSON.parse(v); B=JSON.parse(server[k]); }catch(e){ out[k]=v; return; }
    const m=mergeVal(A,B); if(k===ACT_STORE && B && B.id){ m.id=B.id; m.nick=(A&&A.nick)||B.nick; } out[k]=JSON.stringify(m); });
  return out; }
function writeSnapshot(snap){ try{ Object.entries(snap).forEach(([k,v])=>localStorage.setItem(k,v)); }catch(e){} }
async function pushNow(force){
  if(!me || syncBusy) return; syncBusy=true;
  try{ const snap=localSnapshot(), h=getHashes(), items={};
    Object.entries(snap).forEach(([k,v])=>{ const hv=hashStr(v); if(force || h[k]!==hv) items[k]=v; });
    const sum=progressData(); if(sum){ delete sum.ts; } const sh=hashStr(JSON.stringify(sum));
    if(!Object.keys(items).length && h.__summary===sh){ syncBusy=false; return; }
    const r=await apiFetch("/api/progress",{method:"PUT",body:JSON.stringify({items,summary:sum,nick:act.nick})});
    if(r.status===401){ me=null; showSignIn(); return; }
    if(r.ok){ const j=await r.json(); Object.keys(items).forEach(k=>h[k]=hashStr(items[k])); h.__summary=sh; setHashes(h); try{ localStorage.setItem(SYNC_REV,String(j.rev)); }catch(e){} }
  }catch(e){} finally{ syncBusy=false; } }
function startSync(){ clearInterval(syncTimer); syncTimer=setInterval(()=>pushNow(false),20000);
  document.addEventListener("visibilitychange",()=>{ if(document.visibilityState==="hidden") pushNow(false); }); }
async function authBoot(){
  /* sign-in is only required once the Google key is set on the server; until then Psotek works as before */
  try{ const c=await (await apiFetch("/api/config")).json(); if(!c.clientId){ if(!act.nick) openGate(); return; } }catch(e){ if(!act.nick && !localStorage.getItem(SYNC_REV)) openGate(); return; }
  let r; try{ r=await apiFetch("/api/me"); }catch(e){ return; } /* offline: keep practising, it saves later */
  if(r.status===401){ showSignIn(); return; } if(!r.ok) return;
  me=(await r.json()).user;
  const localRev=+(localStorage.getItem(SYNC_REV)||0);
  if(me.rev>localRev){ /* another device saved newer progress: bring it here */
    try{ const pr=await apiFetch("/api/progress"); if(pr.ok){ const {progress,rev}=await pr.json(); const merged=mergeSnapshots(localSnapshot(),progress||{});
      writeSnapshot(merged); localStorage.setItem(SYNC_REV,String(rev||me.rev)); const h={}; Object.entries(progress||{}).forEach(([k,v])=>h[k]=hashStr(v)); setHashes(h); location.reload(); return; } }catch(e){} }
  if(!act.nick && me.nick){ act.nick=me.nick; saveAct(); paintWho(); }
  if(localStorage.getItem("psotek-showlv")){ localStorage.removeItem("psotek-showlv"); $("#gate").hidden=false; showLevelStep(); }
  startSync(); pushNow(false);
  if(route==="progress") render(); }
let gisP=null;
function loadGis(){ if(!gisP) gisP=new Promise((res,rej)=>{ const sc=document.createElement("script"); sc.src="https://accounts.google.com/gsi/client"; sc.async=true; sc.onload=res; sc.onerror=rej; document.head.appendChild(sc); }); return gisP; }
async function showSignIn(){
  const g=$("#gate"), f=$("#gateForm"); g.hidden=false;
  f.querySelectorAll(":scope > *").forEach(el=>el.hidden=true);
  let box=$("#gateSign"); if(!box){ box=document.createElement("div"); box.id="gateSign"; f.appendChild(box); } box.hidden=false;
  const lg=(typeof helpLang==="function"?helpLang():"")||"";
  box.innerHTML=`<div class="gatepso">${psotek("happy")}<p class="psobub">Cześć! Bună! Hi! Sign in and let's practise.</p></div>
    <h2 class="h3" id="signH">Sign in to Psotek</h2>
    <p>Use your Google account. Your progress is saved to your account, so it follows you to any phone or computer, and your teacher can see how you're doing.</p>
    <div id="gBtn" class="gbtn" aria-live="polite"><p class="hintline">Loading Google sign-in…</p></div>
    <p class="err" id="signErr" hidden></p>
    <details class="keybox" id="keyBox"><summary>No Google account? Use your personal key</summary>
      <p class="hintline" style="margin:8px 0">Your teacher can give you a personal key. It looks like <b>PSO-ABCDE-12345</b>. Keep it private: it opens your account.</p>
      <div class="inrow"><label class="sr" for="keyIn">Your personal key</label><input class="tin" id="keyIn" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="PSO-XXXXX-XXXXX" maxlength="24"><button class="btn" type="button" id="keyGo">Sign in</button></div>
      <p class="err" id="keyErr" hidden></p></details>
    <p class="hintline" style="margin:12px 0 0">With Google we only get your name and email; with a personal key, only the name your teacher typed. Read the <a href="/privacy" target="_blank" rel="noopener">privacy notice</a> · <a href="/privacy#pl" target="_blank" rel="noopener" lang="pl">Prywatność</a> · <a href="/privacy#ro" target="_blank" rel="noopener" lang="ro">Confidențialitate</a>.</p>`;
  const ki=$("#keyIn"), kgo=$("#keyGo"), kerr=$("#keyErr");
  const keyLogin=async()=>{ const v=ki.value.trim(); if(v.replace(/[^a-z0-9]/gi,"").length<10){ kerr.textContent="Type the whole key, for example PSO-ABCDE-12345."; kerr.hidden=false; ki.focus(); return; }
    kerr.hidden=true; kgo.disabled=true;
    try{ const r=await apiFetch("/api/key-login",{method:"POST",body:JSON.stringify({key:v})});
      if(r.status===429){ kerr.textContent="Too many wrong keys. Wait 15 minutes and try again."; kerr.hidden=false; return; }
      if(!r.ok){ kerr.textContent="That key didn't work. Check it with your teacher."; kerr.hidden=false; return; }
      await finishLogin(r); }
    catch(e){ kerr.textContent="Couldn't sign in. Check your internet connection."; kerr.hidden=false; }
    finally{ kgo.disabled=false; } };
  kgo.onclick=keyLogin; ki.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); keyLogin(); } });
  try{ const [cfg]=await Promise.all([apiFetch("/api/config").then(r=>r.json()), loadGis()]);
    if(!cfg.clientId){ $("#gBtn").innerHTML=`<p class="hintline">Sign-in isn't switched on yet. Try again later.</p>`; return; }
    google.accounts.id.initialize({client_id:cfg.clientId, callback:onGoogle, ux_mode:"popup", auto_select:false, use_fedcm_for_prompt:true});
    $("#gBtn").innerHTML=""; google.accounts.id.renderButton($("#gBtn"),{theme:"filled_blue",size:"large",shape:"pill",text:"continue_with",width:280,locale:lg||"en"});
  }catch(e){ $("#gBtn").innerHTML=`<p class="hintline">Google sign-in couldn't load. Check your internet connection and reload the page.</p>`; } }
async function onGoogle(resp){ const err=$("#signErr"); err.hidden=true;
  try{ const r=await apiFetch("/api/login",{method:"POST",body:JSON.stringify({credential:resp.credential})});
    if(!r.ok) throw new Error("login");
    await finishLogin(r);
  }catch(e){ err.textContent="Sign-in didn't work. Please try again."; err.hidden=false; } }
/* after Google or a personal key: bring this device's progress and the account's together, save, reload */
async function finishLogin(r){
    const {user,progress}=await r.json(); me=user;
    const local=localSnapshot(), merged=mergeSnapshots(local,progress||{});
    writeSnapshot(merged);
    const a=JSON.parse(localStorage.getItem(ACT_STORE)||"{}"); if(!a.nick){ a.nick=user.nick||"Student"; localStorage.setItem(ACT_STORE,JSON.stringify(a)); }
    const fresh=!Object.keys(progress||{}).length && answersSoFar()===0 && !Object.values(JSON.parse(localStorage.getItem(ACT_STORE)||"{}").weeks||{}).some(w=>w.ans);
    if(fresh){ startSet({lv:0,words:0,round:0,done:0,at:Date.now()}); localStorage.setItem("psotek-showlv","1"); }
    localStorage.removeItem(SYNC_HASH); localStorage.setItem(SYNC_REV,"0");
    /* save the merged copy before reloading, so the account has everything from this device */
    const items=localSnapshot(); const pr=await apiFetch("/api/progress",{method:"PUT",body:JSON.stringify({items,nick:a.nick})});
    if(pr.ok){ const j=await pr.json(); const h={}; Object.entries(items).forEach(([k,v])=>h[k]=hashStr(v)); setHashes(h); localStorage.setItem(SYNC_REV,String(j.rev)); }
    location.reload(); }
function accountHTML(){ return `<h2 class="mini">Your account</h2>
    <p class="whoami" style="margin:0 0 8px">Signed in as <b>${esc(me.email||me.nick)}</b>${me.viaKey?" with your personal key":""}. Your progress saves automatically.${me.viaKey?" Keep your key safe: you need it to sign in on another device or after signing out. If you lose it, ask your teacher for a new one.":""}</p>
    ${me.role==="teacher"?`<p style="margin:0 0 8px"><a class="btn" href="/teacher" target="_blank" rel="noopener">Open the teacher dashboard</a></p>`:""}
    <div class="row" style="margin:0 0 8px;flex-wrap:wrap"><button class="btn ghost" type="button" id="aOut">Sign out</button><a class="btn ghost" href="/api/export" download>Download my data</a><button class="btn ghost" type="button" id="aDel">Delete my account</button></div>
    <div id="aDelBox" hidden class="panel" style="margin:0 0 10px;padding:12px"><p style="margin:0 0 8px"><b>Delete your account?</b> Your saved progress, words, video work and messages are removed from Psotek for good. This can't be undone.</p>
      <label style="display:flex;gap:8px;align-items:center;margin:0 0 10px"><input type="checkbox" id="aDelLocal" checked> Also remove the progress saved on this device</label>
      <div class="row" style="margin:0"><button class="btn" type="button" id="aDelYes" style="background:var(--coral-deep)">Yes, delete everything</button><button class="btn ghost" type="button" id="aDelNo">Keep my account</button></div></div>
    <h2 class="mini">Contact your teacher</h2>
    <label class="sr" for="aMsg">Message to your teacher</label><textarea id="aMsg" class="tin" rows="3" maxlength="2000" placeholder="A question, a problem, or a privacy request…"></textarea>
    <div class="row" style="margin:6px 0 0"><button class="btn ghost" type="button" id="aSend">Send</button><span class="hintline" id="aSent" aria-live="polite" style="margin:0"></span></div>
    <p class="hintline" style="margin:6px 0 0"><a href="/privacy" target="_blank" rel="noopener">Privacy notice</a></p>`; }
function wireAccount(){ if(!$("#aOut")) return;
  $("#aOut").onclick=async()=>{ await pushNow(false); try{ await apiFetch("/api/logout",{method:"POST",body:"{}"}); }catch(e){} try{ if(window.google) google.accounts.id.disableAutoSelect(); }catch(e){} location.reload(); };
  $("#aDel").onclick=()=>{ $("#aDelBox").hidden=false; $("#aDelNo").focus(); };
  $("#aDelNo").onclick=()=>{ $("#aDelBox").hidden=true; };
  $("#aDelYes").onclick=async()=>{ const b=$("#aDelYes"); b.disabled=true; try{ const r=await apiFetch("/api/account",{method:"DELETE"}); if(!r.ok) throw 0;
      if($("#aDelLocal").checked){ Object.keys(localSnapshot()).forEach(k=>localStorage.removeItem(k)); } [SYNC_HASH,SYNC_REV].forEach(k=>localStorage.removeItem(k)); location.reload(); }
    catch(e){ b.disabled=false; b.textContent="Couldn't delete. Try again"; } };
  $("#aSend").onclick=async()=>{ const t=$("#aMsg").value.trim(); if(t.length<2){ $("#aMsg").focus(); return; } $("#aSend").disabled=true;
    try{ const r=await apiFetch("/api/contact",{method:"POST",body:JSON.stringify({body:t})}); if(!r.ok) throw 0; $("#aMsg").value=""; $("#aSent").textContent="Sent. Your teacher will see it in the dashboard."; }
    catch(e){ $("#aSent").textContent="Couldn't send. Try again later."; } finally{ $("#aSend").disabled=false; } }; }

/* ---------- Start ---------- */
applyDisp();
wireGate(); saveAct(); paintWho(); if(!AUTH && !act.nick) openGate();
render();
if(AUTH) authBoot();
setTimeout(()=>loadExtra(), 1200); /* fetch the other rooms quietly once the first screen is up */
if(MOVED) setTimeout(()=>{ psoSay("happy", act.nick ? `Welcome to the new home, ${act.nick}!` : "Welcome to the new home!"); },800);

