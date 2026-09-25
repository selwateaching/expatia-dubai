/* Parcours 6 — Work in Dubai (A2-B1) : chercher un emploi, entretien, vie au bureau.
   Format : voir parcours/README.md */
(window.EXPATIA = window.EXPATIA || {}).work = [
  {id:'work-search',emoji:'🔎',kind:'mixed',title:'Chercher un emploi',desc:'Offre, CV, candidature, appeler l’entreprise.',
    words:[
      ['Job offer','Offre d’emploi','عرض عمل','📢','DJOB O-feur'],
      ['CV','CV','سيرة ذاتية','📄','si-VI'],
      ['Cover letter','Lettre de motivation','رسالة تحفيزية','✉️','KA-veur LÈ-teur'],
      ['Salary','Salaire','راتب','💰','SA-leu-ri'],
      ['Full-time','Temps plein','دوام كامل','🕘','FOUL-TAÏM'],
      ['I’m applying for the sales manager position.','Je postule pour le poste de responsable commercial.','أتقدم لوظيفة مدير المبيعات.','🙋','aïm eu-PLAÏ-inng for ðeu SÉÏLZ MA-ni-djeur peu-ZI-cheun'],
      ['I’ve attached my CV.','Vous trouverez mon CV en pièce jointe.','أرفقت سيرتي الذاتية.','📎','aïv eu-TATCHT maï si-VI'],
      ['Is the position still available?','Le poste est-il toujours disponible ?','هل الوظيفة ما زالت متاحة؟','❓','iz ðeu peu-ZI-cheun STIL eu-VÉÏ-leu-beul'],
      ['I look forward to hearing from you.','Dans l’attente de votre réponse.','أتطلع إلى ردكم.','🤝','aï LOUK FOR-oueurd tou HI-rinng from you']
    ],
    dialogue:[
      {scene:'Appel à une entreprise'},
      {who:'HR',en:'Good morning, Al Noor Trading, human resources.',fr:'Bonjour, Al Noor Trading, ressources humaines.',ar:'صباح الخير، النور للتجارة، قسم الموارد البشرية.',ph:'goud MOR-ninng, al NOUR TRÉÏ-dinng, HIOU-meun ri-ZOR-siz'},
      {me:true,choices:['Hello, I’m calling about the sales manager job offer.','Hello, I’m calling about my luggage.','Hello, I’m calling about the grilled chicken.'],fr:'Bonjour, j’appelle au sujet de l’offre de responsable commercial.',ar:'مرحبًا، أتصل بخصوص عرض وظيفة مدير المبيعات.',ph:'hè-LO, aïm KO-linng eu-BAOUT ðeu SÉÏLZ MA-ni-djeur DJOB O-feur'},
      {who:'HR',en:'Yes, how can I help?',fr:'Oui, que puis-je faire pour vous ?',ar:'نعم، كيف يمكنني المساعدة؟',ph:'YÈS, haou kann aï HÈLP'},
      {me:true,choices:['Is the position still available?','Is the rent still negotiable?','Is breakfast still included?'],fr:'Le poste est-il toujours disponible ?',ar:'هل الوظيفة ما زالت متاحة؟'},
      {who:'HR',en:'Yes. Please send your CV and a cover letter by email.',fr:'Oui. Envoyez votre CV et une lettre de motivation par email.',ar:'نعم. أرسل سيرتك الذاتية ورسالة تحفيزية بالبريد الإلكتروني.',ph:'YÈS. PLIZ SÈND yor si-VI annd eu KA-veur LÈ-teur baï I-méïl'},
      {me:true,choices:['Of course. Is it full-time?','Of course. Is it furnished?','Of course. Is it direct?'],fr:'Bien sûr. Est-ce à temps plein ?',ar:'بالتأكيد. هل هي بدوام كامل؟',ph:'ov KORS. iz it FOUL-TAÏM'},
      {who:'HR',en:'Yes, from Monday to Friday.',fr:'Oui, du lundi au vendredi.',ar:'نعم، من الاثنين إلى الجمعة.',ph:'YÈS, from MANN-déï tou FRAÏ-déï'},
      {me:true,choices:['Thank you. I’ll send it today.','Thank you. I’ll take it.','Thank you. I’ll wait here.'],fr:'Merci. Je l’envoie aujourd’hui.',ar:'شكرًا. سأرسلها اليوم.',ph:'þANK you. aïl SÈND it teu-DÉÏ'}
    ]},
  {id:'work-interview',emoji:'💼',kind:'phrases',title:'L’entretien d’embauche',desc:'Vous présenter, parler de votre expérience, poser vos questions.',
    intro:'Aux Émirats, la semaine de travail va du lundi au vendredi. Beaucoup d’offres ajoutent au salaire une indemnité de logement (housing allowance) : pensez à la demander.',
    words:[
      ['Tell me about yourself.','Parlez-moi de vous.','حدثني عن نفسك.','🗣️','TÈL mi eu-BAOUT yor-SÈLF'],
      ['I have ten years of experience in sales.','J’ai dix ans d’expérience dans la vente.','لدي عشر سنوات من الخبرة في المبيعات.','📈','aï HAV TÈN YIRZ ov iks-PI-ri-euns inn SÉÏLZ'],
      ['My strengths are organisation and teamwork.','Mes points forts sont l’organisation et le travail en équipe.','نقاط قوتي هي التنظيم والعمل الجماعي.','💪','maï STRÈNGþS ar or-geu-naï-ZÉÏ-cheun annd TIM-weurk'],
      ['I speak French, Arabic and English.','Je parle français, arabe et anglais.','أتحدث الفرنسية والعربية والإنجليزية.','🌐','aï SPIK FRÈNNTCH, A-reu-bik annd INN-glich'],
      ['What are the working hours?','Quels sont les horaires de travail ?','ما هي ساعات العمل؟','🕘','OUOT ar ðeu WEUR-kinng AOU-eurz'],
      ['What is the salary range?','Quelle est la fourchette de salaire ?','ما هو نطاق الراتب؟','💰','OUOT iz ðeu SA-leu-ri RÉÏNDJ'],
      ['Is housing allowance included?','L’indemnité de logement est-elle incluse ?','هل بدل السكن مشمول؟','🏠','iz HAOU-zinng eu-LAOU-euns inn-KLOU-did'],
      ['When can I expect an answer?','Quand puis-je espérer une réponse ?','متى يمكنني أن أتوقع ردًا؟','⏳','OUÈN kann aï iks-PÈKT ann ANN-seur']
    ],
    dialogue:[
      {scene:'L’entretien'},
      {who:'Manager',en:'Thank you for coming. Tell me about yourself.',fr:'Merci d’être venu. Parlez-moi de vous.',ar:'شكرًا على حضورك. حدثني عن نفسك.',ph:'þANK you for KA-minng. TÈL mi eu-BAOUT yor-SÈLF'},
      {me:true,choices:['I have ten years of experience in sales.','I have a fever and a headache.','I have a reservation.'],fr:'J’ai dix ans d’expérience dans la vente.',ar:'لدي عشر سنوات من الخبرة في المبيعات.'},
      {who:'Manager',en:'Interesting. What are your strengths?',fr:'Intéressant. Quels sont vos points forts ?',ar:'مثير للاهتمام. ما هي نقاط قوتك؟',ph:'INN-treus-tinng. OUOT ar yor STRÈNGþS'},
      {me:true,choices:['My strengths are organisation and teamwork.','My strengths are the pool and the gym.','My strengths are Special 95.'],fr:'Mes points forts sont l’organisation et le travail en équipe.',ar:'نقاط قوتي هي التنظيم والعمل الجماعي.'},
      {who:'Manager',en:'Do you speak other languages?',fr:'Parlez-vous d’autres langues ?',ar:'هل تتحدث لغات أخرى؟',ph:'dou you SPIK A-ðeur LANN-gouidj-iz'},
      {me:true,choices:['I speak French, Arabic and English.','I speak with the landlord.','I speak by card.'],fr:'Je parle français, arabe et anglais.',ar:'أتحدث الفرنسية والعربية والإنجليزية.'},
      {who:'Manager',en:'Very good. Do you have any questions?',fr:'Très bien. Avez-vous des questions ?',ar:'جيد جدًا. هل لديك أي أسئلة؟',ph:'VÈ-ri GOUD. dou you HAV È-ni KOUÈS-tcheunz'},
      {me:true,choices:['Yes. What is the salary range?','Yes. What is the exchange rate?','Yes. What is your apartment number?'],fr:'Oui. Quelle est la fourchette de salaire ?',ar:'نعم. ما هو نطاق الراتب؟',ph:'YÈS. OUOT iz ðeu SA-leu-ri RÉÏNDJ'},
      {who:'Manager',en:'Between twenty and twenty-five thousand dirhams a month, plus housing allowance.',fr:'Entre vingt et vingt-cinq mille dirhams par mois, plus l’indemnité de logement.',ar:'بين عشرين وخمسة وعشرين ألف درهم شهريًا، بالإضافة إلى بدل السكن.',ph:'bi-TOUIN TOUÈN-ti annd touèn-ti-FAÏV þAOU-zeund DIR-hamz eu MANþ, PLAS HAOU-zinng eu-LAOU-euns'},
      {me:true,choices:['That sounds good. When can I expect an answer?','That sounds good. When is check-out?','That sounds good. When is the next stop?'],fr:'Ça me convient. Quand puis-je espérer une réponse ?',ar:'هذا جيد. متى يمكنني أن أتوقع ردًا؟',ph:'ðat SAOUNDZ GOUD. OUÈN kann aï iks-PÈKT ann ANN-seur'},
      {who:'Manager',en:'By the end of next week.',fr:'D’ici la fin de la semaine prochaine.',ar:'بحلول نهاية الأسبوع القادم.',ph:'baï ði ÈND ov NÈKST OUIK'}
    ]},
  {id:'work-office',emoji:'🖥️',kind:'phrases',title:'Au bureau',desc:'Premier jour, réunions, emails, délais.',
    words:[
      ['Nice to meet you, I’m the new sales manager.','Enchanté(e), je suis le nouveau responsable commercial.','تشرفت بمعرفتك، أنا مدير المبيعات الجديد.','👋','NAÏS tou MIT you, aïm ðeu NIOU SÉÏLZ MA-ni-djeur'],
      ['Could you help me, please?','Pourriez-vous m’aider, s’il vous plaît ?','هل يمكنك مساعدتي من فضلك؟','🙏','koud you HÈLP mi, PLIZ'],
      ['What time is the meeting?','À quelle heure est la réunion ?','متى موعد الاجتماع؟','🗓️','OUOT TAÏM iz ðeu MI-tinng'],
      ['I’ll send you an email.','Je vous envoie un email.','سأرسل لك بريدًا إلكترونيًا.','📧','aïl SÈND you ann I-méïl'],
      ['What is the deadline?','Quelle est la date limite ?','ما هو الموعد النهائي؟','⏰','OUOT iz ðeu DÈD-laïn'],
      ['Could you repeat that more slowly?','Pourriez-vous répéter plus lentement ?','هل يمكنك تكرار ذلك ببطء أكثر؟','🐢','koud you ri-PIT ðat MOR SLO-li'],
      ['I’m working from home today.','Je télétravaille aujourd’hui.','أعمل من المنزل اليوم.','🏠','aïm WEUR-kinng from HOM teu-DÉÏ'],
      ['I’ll be late for the meeting.','Je serai en retard à la réunion.','سأتأخر عن الاجتماع.','🏃','aïl bi LÉÏT for ðeu MI-tinng']
    ],
    dialogue:[
      {scene:'Premier jour'},
      {who:'Colleague',en:'Hi! You must be the new sales manager.',fr:'Salut ! Vous devez être le nouveau responsable commercial.',ar:'مرحبًا! لا بد أنك مدير المبيعات الجديد.',ph:'HAÏ ! you MAST bi ðeu NIOU SÉÏLZ MA-ni-djeur'},
      {me:true,choices:['Yes, nice to meet you. I’m Karim.','Yes, fill it up, please.','Yes, a table for two.'],fr:'Oui, enchanté. Je suis Karim.',ar:'نعم، تشرفت بمعرفتك. أنا كريم.',ph:'YÈS, NAÏS tou MIT you. aïm ka-RIM'},
      {who:'Colleague',en:'I’m Priya, from the marketing team. Welcome!',fr:'Je suis Priya, de l’équipe marketing. Bienvenue !',ar:'أنا بريا، من فريق التسويق. أهلًا بك!',ph:'aïm PRI-ya, from ðeu MAR-ki-tinng TIM. OUÈL-keum'},
      {me:true,choices:['Thank you! What time is the meeting?','Thank you! What time is check-out?','Thank you! What time is the flight?'],fr:'Merci ! À quelle heure est la réunion ?',ar:'شكرًا! متى موعد الاجتماع؟',ph:'þANK you ! OUOT TAÏM iz ðeu MI-tinng'},
      {who:'Colleague',en:'At ten, in room B. We’ll discuss the quarterly targets.',fr:'À dix heures, en salle B. Nous parlerons des objectifs trimestriels.',ar:'في العاشرة، في القاعة B. سنناقش الأهداف الفصلية.',ph:'at TÈN, inn ROUM BI. ouil dis-KAS ðeu KOUOR-teur-li TAR-guits'},
      {me:true,choices:['Could you repeat that more slowly?','Could you call a taxi for me?','Could you warm it up?'],fr:'Pourriez-vous répéter plus lentement ?',ar:'هل يمكنك تكرار ذلك ببطء أكثر؟'},
      {who:'Colleague',en:'Sure. The meeting is at ten o’clock, in room B.',fr:'Bien sûr. La réunion est à dix heures, en salle B.',ar:'بالتأكيد. الاجتماع في الساعة العاشرة، في القاعة B.',ph:'CHOR. ðeu MI-tinng iz at TÈN eu-KLOK, inn ROUM BI'},
      {me:true,choices:['Thank you. What is the deadline for the report?','Thank you. What is the exchange rate for the report?','Thank you. What is your apartment number?'],fr:'Merci. Quelle est la date limite pour le rapport ?',ar:'شكرًا. ما هو الموعد النهائي للتقرير؟',ph:'þANK you. OUOT iz ðeu DÈD-laïn for ðeu ri-PORT'},
      {who:'Colleague',en:'Thursday. I’ll send you an email with the details.',fr:'Jeudi. Je vous envoie un email avec les détails.',ar:'الخميس. سأرسل لك بريدًا إلكترونيًا بالتفاصيل.',ph:'þEURZ-déï. aïl SÈND you ann I-méïl ouið ðeu DI-téïlz'}
    ]},
  {id:'work-mission',emoji:'🎯',kind:'mission',title:'Mission 06 — Get the job',desc:'Réussir votre entretien d’embauche.',
    brief:'Une entreprise de Dubaï vous convoque pour un entretien au poste de responsable commercial. Présentez-vous, mettez en valeur votre expérience, puis posez vos questions sur les horaires et les avantages.',
    objectives:['Vous annoncer à l’accueil','Parler de votre expérience et de votre motivation','Poser vos questions sur les horaires et le logement','Conclure poliment'],
    dialogue:[
      {scene:'1 · À l’accueil'},
      {who:'Receptionist',en:'Good morning. Can I help you?',fr:'Bonjour. Je peux vous aider ?',ar:'صباح الخير. هل يمكنني مساعدتك؟',ph:'goud MOR-ninng. kann aï HÈLP you'},
      {me:true,choices:['Yes, I have an interview with Mr Ahmed at ten.','Yes, I have a fever and a headache.','Yes, I have a table for two.'],fr:'Oui, j’ai un entretien avec M. Ahmed à dix heures.',ar:'نعم، لدي مقابلة مع السيد أحمد في الساعة العاشرة.',ph:'YÈS, aï HAV ann INN-teur-viou ouið MIS-teur a-MÈD at TÈN'},
      {who:'Receptionist',en:'Please take a seat. He’ll be with you shortly.',fr:'Asseyez-vous, il arrive tout de suite.',ar:'تفضل بالجلوس. سيكون معك بعد قليل.',ph:'PLIZ TÉÏK eu SIT. hil bi ouið you CHORT-li'},
      {me:true,choices:['Thank you!','Keep the change!','Enjoy your stay!'],fr:'Merci !',ar:'شكرًا!'},
      {scene:'2 · L’entretien'},
      {who:'Manager',en:'Thank you for coming. Tell me about yourself.',fr:'Merci d’être venu. Parlez-moi de vous.',ar:'شكرًا على حضورك. حدثني عن نفسك.'},
      {me:true,choices:['I’m Karim. I have ten years of experience in sales.','I’m Karim. I have a work visa for two weeks.','I’m Karim. I have a water leak.'],fr:'Je suis Karim. J’ai dix ans d’expérience dans la vente.',ar:'أنا كريم. لدي عشر سنوات من الخبرة في المبيعات.',ph:'aïm ka-RIM. aï HAV TÈN YIRZ ov iks-PI-ri-euns inn SÉÏLZ'},
      {who:'Manager',en:'Why do you want to work in Dubai?',fr:'Pourquoi voulez-vous travailler à Dubaï ?',ar:'لماذا تريد العمل في دبي؟',ph:'OUAÏ dou you OUONT tou WEURK inn dou-BAÏ'},
      {me:true,choices:['Because it’s an international city with many opportunities.','Because it’s on the twelfth floor.','Because it’s buy one, get one free.'],fr:'Parce que c’est une ville internationale avec beaucoup d’opportunités.',ar:'لأنها مدينة دولية فيها الكثير من الفرص.',ph:'bi-KOZ its ann inn-teur-NA-cheu-neul SI-ti ouið MÈ-ni o-peur-TIOU-ni-tiz'},
      {who:'Manager',en:'Do you speak other languages?',fr:'Parlez-vous d’autres langues ?',ar:'هل تتحدث لغات أخرى؟'},
      {me:true,choices:['I speak French, Arabic and English.','I speak with the landlord.','I speak by card.'],fr:'Je parle français, arabe et anglais.',ar:'أتحدث الفرنسية والعربية والإنجليزية.'},
      {who:'Manager',en:'Great. Any questions for me?',fr:'Parfait. Avez-vous des questions ?',ar:'رائع. هل لديك أسئلة لي؟',ph:'GRÉÏT. È-ni KOUÈS-tcheunz for MI'},
      {me:true,choices:['Yes. What are the working hours?','Yes. What are the tyres like?','Yes. What are your allergies?'],fr:'Oui. Quels sont les horaires de travail ?',ar:'نعم. ما هي ساعات العمل؟',ph:'YÈS. OUOT ar ðeu WEUR-kinng AOU-eurz'},
      {who:'Manager',en:'Nine to six, Monday to Friday.',fr:'De neuf heures à dix-huit heures, du lundi au vendredi.',ar:'من التاسعة إلى السادسة، من الاثنين إلى الجمعة.',ph:'NAÏN tou SIKS, MANN-déï tou FRAÏ-déï'},
      {me:true,choices:['And is housing allowance included?','And is breakfast included?','And is the air conditioning included?'],fr:'Et l’indemnité de logement est-elle incluse ?',ar:'وهل بدل السكن مشمول؟',ph:'annd iz HAOU-zinng eu-LAOU-euns inn-KLOU-did'},
      {who:'Manager',en:'Yes, it is. We’ll call you next week.',fr:'Oui. Nous vous appellerons la semaine prochaine.',ar:'نعم. سنتصل بك الأسبوع القادم.',ph:'YÈS, it IZ. ouil KOL you NÈKST OUIK'},
      {me:true,choices:['Thank you for your time. I look forward to hearing from you.','Thank you for your time. Keep the change.','Thank you for your time. Stop here, please.'],fr:'Merci pour votre temps. J’attends votre réponse avec intérêt.',ar:'شكرًا على وقتك. أتطلع إلى ردكم.',ph:'þANK you for yor TAÏM. aï LOUK FOR-oueurd tou HI-rinng from you'}
    ]}
];
