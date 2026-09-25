/* Parcours 7 — Start a Business (B1-B2) : créer sa société, consultant, local commercial.
   Format : voir parcours/README.md */
(window.EXPATIA = window.EXPATIA || {}).business = [
  {id:'biz-words',emoji:'🏢',kind:'vocab',title:'Le vocabulaire de l’entreprise',desc:'Licence, free zone, mainland, actionnaires.',
    intro:'À Dubaï, on peut créer sa société en « free zone » (zone franche, dédiée à certaines activités) ou sur le « mainland » (pour travailler avec des clients partout aux Émirats). Dans les deux cas, il faut une licence commerciale (trade licence).',
    words:[
      ['Company','Société','شركة','🏢','KAMM-peu-ni'],
      ['Trade licence','Licence commerciale','رخصة تجارية','📜','TRÉÏD LAÏ-seuns'],
      ['Free zone','Zone franche','منطقة حرة','🆓','FRI ZONN'],
      ['Mainland','Mainland (hors zone franche)','البر الرئيسي','🗺️','MÉÏN-leund'],
      ['Shareholder','Actionnaire','مساهم','👥','CHÈR-hol-deur'],
      ['Business activity','Activité de l’entreprise','النشاط التجاري','⚙️','BIZ-nis ak-TI-vi-ti'],
      ['Business setup consultant','Consultant en création d’entreprise','مستشار تأسيس الشركات','🧑‍💼','BIZ-nis SÈT-ap keun-SAL-teunt'],
      ['Office space','Espace de bureau','مساحة مكتبية','🖥️','O-fis SPÉÏS'],
      ['Visa quota','Quota de visas','حصة التأشيرات','🎫','VI-za KOUO-ta'],
      ['Corporate bank account','Compte bancaire professionnel','حساب مصرفي للشركة','🏦','KOR-peu-reut BANNK eu-KAOUNT']
    ],
    dialogue:[
      {scene:'Salon des entrepreneurs'},
      {who:'Consultant',en:'Hello! Are you thinking of starting a business in Dubai?',fr:'Bonjour ! Vous pensez créer une entreprise à Dubaï ?',ar:'مرحبًا! هل تفكر في تأسيس شركة في دبي؟',ph:'hè-LO ! ar you þINN-kinng ov STAR-tinng eu BIZ-nis inn dou-BAÏ'},
      {me:true,choices:['Yes, I’d like to open a trading company.','Yes, I’d like to open a window.','Yes, I’d like a late check-out.'],fr:'Oui, je voudrais créer une société de négoce.',ar:'نعم، أريد تأسيس شركة تجارية.',ph:'YÈS, aïd LAÏK tou O-peun eu TRÉÏ-dinng KAMM-peu-ni'},
      {who:'Consultant',en:'Free zone or mainland?',fr:'Zone franche ou mainland ?',ar:'منطقة حرة أم البر الرئيسي؟',ph:'FRI ZONN or MÉÏN-leund'},
      {me:true,choices:['What is the difference?','What is the deadline?','What is your emergency?'],fr:'Quelle est la différence ?',ar:'ما الفرق؟',ph:'OUOT iz ðeu DI-freuns'},
      {who:'Consultant',en:'With a mainland licence, you can work with clients everywhere in the UAE.',fr:'Avec une licence mainland, vous pouvez travailler avec des clients partout aux Émirats.',ar:'برخصة البر الرئيسي، يمكنك العمل مع العملاء في كل أنحاء الإمارات.',ph:'ouið eu MÉÏN-leund LAÏ-seuns, you kann WEURK ouið KLAÏ-eunts ÈV-ri-ouèr inn ði you-éï-I'},
      {me:true,choices:['I see. How many visas can I get?','I see. How many cheques?','I see. How many times a day?'],fr:'Je vois. Combien de visas puis-je obtenir ?',ar:'فهمت. كم عدد التأشيرات التي يمكنني الحصول عليها؟',ph:'aï SI. haou MÈ-ni VI-zaz kann aï GUÈT'},
      {who:'Consultant',en:'It depends on the size of your office.',fr:'Ça dépend de la taille de votre bureau.',ar:'يعتمد ذلك على مساحة مكتبك.',ph:'it di-PÈNDZ onn ðeu SAÏZ ov yor O-fis'}
    ]},
  {id:'biz-consultant',emoji:'🧑‍💼',kind:'phrases',title:'Parler avec un consultant',desc:'Étapes, coûts détaillés, frais cachés, délais.',
    words:[
      ['I’d like to set up a company in Dubai.','Je voudrais créer une société à Dubaï.','أريد تأسيس شركة في دبي.','🚀','aïd LAÏK tou SÈT AP eu KAMM-peu-ni inn dou-BAÏ'],
      ['What are the steps?','Quelles sont les étapes ?','ما هي الخطوات؟','🪜','OUOT ar ðeu STÈPS'],
      ['What are the total costs?','Quels sont les coûts totaux ?','ما هي التكاليف الإجمالية؟','🧮','OUOT ar ðeu TO-teul KOSTS'],
      ['Could you give me a breakdown of the costs?','Pourriez-vous me détailler les coûts ?','هل يمكنك أن تعطيني تفصيلًا للتكاليف؟','📊','koud you GUIV mi eu BRÉÏK-daoun ov ðeu KOSTS'],
      ['Are there any hidden fees?','Y a-t-il des frais cachés ?','هل توجد رسوم خفية؟','🕵️','ar ðèr È-ni HI-deun FIZ'],
      ['How long does it take to get the licence?','Combien de temps faut-il pour obtenir la licence ?','كم من الوقت يستغرق الحصول على الرخصة؟','⏳','haou LONNG deuz it TÉÏK tou guèt ðeu LAÏ-seuns'],
      ['Can I have a business partner?','Puis-je avoir un associé ?','هل يمكنني أن يكون لي شريك؟','🤝','kann aï HAV eu BIZ-nis PART-neur'],
      ['Do I need a local sponsor?','Ai-je besoin d’un sponsor local ?','هل أحتاج إلى كفيل محلي؟','❔','dou aï NID eu LO-keul SPONN-seur']
    ],
    dialogue:[
      {scene:'Rendez-vous avec le consultant'},
      {who:'Consultant',en:'So, what kind of business do you want to start?',fr:'Alors, quel type d’entreprise voulez-vous créer ?',ar:'إذن، ما نوع النشاط الذي تريد تأسيسه؟',ph:'SO, OUOT KAÏND ov BIZ-nis dou you OUONT tou START'},
      {me:true,choices:['A consulting company. What are the steps?','A consulting company. What are the tyres like?','A consulting company. What time is breakfast?'],fr:'Une société de conseil. Quelles sont les étapes ?',ar:'شركة استشارات. ما هي الخطوات؟',ph:'eu keun-SAL-tinng KAMM-peu-ni. OUOT ar ðeu STÈPS'},
      {who:'Consultant',en:'First the trade name, then the licence, then the visas.',fr:'D’abord le nom commercial, puis la licence, puis les visas.',ar:'أولًا الاسم التجاري، ثم الرخصة، ثم التأشيرات.',ph:'FEURST ðeu TRÉÏD NÉÏM, ðèn ðeu LAÏ-seuns, ðèn ðeu VI-zaz'},
      {me:true,choices:['Could you give me a breakdown of the costs?','Could you give me the menu?','Could you give me a receipt for the taxi?'],fr:'Pourriez-vous me détailler les coûts ?',ar:'هل يمكنك أن تعطيني تفصيلًا للتكاليف؟'},
      {who:'Consultant',en:'Of course. The licence, the office and two visas come to about thirty thousand dirhams.',fr:'Bien sûr. La licence, le bureau et deux visas reviennent à environ trente mille dirhams.',ar:'بالتأكيد. الرخصة والمكتب وتأشيرتان تكلف حوالي ثلاثين ألف درهم.',ph:'ov KORS. ðeu LAÏ-seuns, ði O-fis annd TOU VI-zaz KAM tou eu-BAOUT ÞEUR-ti þAOU-zeund DIR-hamz'},
      {me:true,choices:['Are there any hidden fees?','Are there any nuts?','Are there any toilets?'],fr:'Y a-t-il des frais cachés ?',ar:'هل توجد رسوم خفية؟'},
      {who:'Consultant',en:'No, but you must renew the licence every year.',fr:'Non, mais vous devez renouveler la licence chaque année.',ar:'لا، لكن يجب تجديد الرخصة كل سنة.',ph:'NO, bat you MAST ri-NIOU ðeu LAÏ-seuns ÈV-ri YIR'},
      {me:true,choices:['How long does it take to get the licence?','How long does it take to the airport?','How long is the rent?'],fr:'Combien de temps faut-il pour obtenir la licence ?',ar:'كم من الوقت يستغرق الحصول على الرخصة؟'},
      {who:'Consultant',en:'Usually two to three weeks.',fr:'En général deux à trois semaines.',ar:'عادةً من أسبوعين إلى ثلاثة أسابيع.',ph:'YOU-jou-eu-li TOU tou þRI OUIKS'}
    ]},
  {id:'biz-space',emoji:'🏬',kind:'phrases',title:'Louer un local commercial',desc:'Surface, loyer au pied carré, charges, bail.',
    intro:'Les surfaces commerciales sont annoncées en pieds carrés (1 m² ≈ 10,8 sq ft). Pour un local vide, négociez une période sans loyer (rent-free period) le temps de l’aménager (fit-out).',
    words:[
      ['I’m looking for a commercial property.','Je cherche un local commercial.','أبحث عن عقار تجاري.','🏬','aïm LOU-kinng for eu keu-MEUR-cheul PRO-peur-ti'],
      ['What is the size in square feet?','Quelle est la surface en pieds carrés ?','ما المساحة بالقدم المربع؟','📐','OUOT iz ðeu SAÏZ inn SKOUÈR FIT'],
      ['What is the rent per square foot?','Quel est le loyer au pied carré ?','ما الإيجار لكل قدم مربع؟','💲','OUOT iz ðeu RÈNT peur SKOUÈR FOUT'],
      ['What are the service charges?','Quelles sont les charges de service ?','ما هي رسوم الخدمات؟','🧾','OUOT ar ðeu SEUR-vis TCHAR-djiz'],
      ['How long is the lease?','Quelle est la durée du bail ?','ما مدة عقد الإيجار؟','📜','haou LONNG iz ðeu LIS'],
      ['Can we have a rent-free period for the fit-out?','Pouvons-nous avoir une période sans loyer pour l’aménagement ?','هل يمكن الحصول على فترة بدون إيجار لأعمال التجهيز؟','🛠️','kann oui HAV eu RÈNT-FRI PI-ri-eud for ðeu FIT-aout'],
      ['Is parking included?','Le parking est-il inclus ?','هل الموقف مشمول؟','🅿️','iz PAR-kinng inn-KLOU-did'],
      ['Can we renew the lease?','Pouvons-nous renouveler le bail ?','هل يمكننا تجديد عقد الإيجار؟','🔁','kann oui ri-NIOU ðeu LIS']
    ],
    dialogue:[
      {scene:'Visite d’un bureau à Business Bay'},
      {who:'Agent',en:'This office is on the fifteenth floor, with a view of the Burj Khalifa.',fr:'Ce bureau est au quinzième étage, avec vue sur la Burj Khalifa.',ar:'هذا المكتب في الطابق الخامس عشر، مع إطلالة على برج خليفة.',ph:'ðis O-fis iz onn ðeu fif-TINþ FLOR, ouið eu VIOU ov ðeu BEURDJ ka-LI-fa'},
      {me:true,choices:['Very nice. What is the size in square feet?','Very nice. What is your emergency?','Very nice. What do you recommend for dessert?'],fr:'Très joli. Quelle est la surface en pieds carrés ?',ar:'جميل جدًا. ما المساحة بالقدم المربع؟',ph:'VÈ-ri NAÏS. OUOT iz ðeu SAÏZ inn SKOUÈR FIT'},
      {who:'Agent',en:'One thousand two hundred square feet.',fr:'Mille deux cents pieds carrés.',ar:'ألف ومئتا قدم مربع.',ph:'OUANN þAOU-zeund TOU HAN-dreud SKOUÈR FIT'},
      {me:true,choices:['What is the rent per square foot?','What is the rent per night?','What is the rent for my luggage?'],fr:'Quel est le loyer au pied carré ?',ar:'ما الإيجار لكل قدم مربع؟'},
      {who:'Agent',en:'One hundred and ten dirhams per square foot per year.',fr:'Cent dix dirhams le pied carré par an.',ar:'مئة وعشرة دراهم للقدم المربع سنويًا.',ph:'OUANN HAN-dreud annd TÈN DIR-hamz peur SKOUÈR FOUT peur YIR'},
      {me:true,choices:['What are the service charges?','What are the working hours?','What are your strengths?'],fr:'Quelles sont les charges de service ?',ar:'ما هي رسوم الخدمات؟'},
      {who:'Agent',en:'Fifteen dirhams per square foot.',fr:'Quinze dirhams le pied carré.',ar:'خمسة عشر درهمًا للقدم المربع.',ph:'fif-TIN DIR-hamz peur SKOUÈR FOUT'},
      {me:true,choices:['Can we have a rent-free period for the fit-out?','Can we have a table by the window?','Can we have a late check-out?'],fr:'Pouvons-nous avoir une période sans loyer pour l’aménagement ?',ar:'هل يمكن الحصول على فترة بدون إيجار لأعمال التجهيز؟'},
      {who:'Agent',en:'I think the landlord can offer two months.',fr:'Je pense que le propriétaire peut accorder deux mois.',ar:'أعتقد أن المالك يمكنه منح شهرين.',ph:'aï þINNK ðeu LANND-lord kann O-feur TOU MANþS'}
    ]},
  {id:'biz-mission',emoji:'🎯',kind:'mission',title:'Mission 07 — Rent a commercial space',desc:'Trouver et négocier le bureau de votre société.',
    brief:'Votre licence est en cours. Il vous faut maintenant un bureau pour votre société de conseil. Visitez un bureau à Business Bay, posez les questions essentielles et négociez les conditions du bail.',
    objectives:['Décrire le local recherché','Demander la surface, le loyer et les charges','Négocier une période sans loyer','Vérifier le renouvellement du bail'],
    dialogue:[
      {scene:'1 · Premier contact'},
      {who:'Agent',en:'Good morning. What kind of property are you looking for?',fr:'Bonjour. Quel type de bien cherchez-vous ?',ar:'صباح الخير. ما نوع العقار الذي تبحث عنه؟',ph:'goud MOR-ninng. OUOT KAÏND ov PRO-peur-ti ar you LOU-kinng for'},
      {me:true,choices:['I’m looking for a commercial property, an office for five people.','I’m looking for a doctor, it’s an emergency.','I’m looking for the rice.'],fr:'Je cherche un local commercial, un bureau pour cinq personnes.',ar:'أبحث عن عقار تجاري، مكتب لخمسة أشخاص.',ph:'aïm LOU-kinng for eu keu-MEUR-cheul PRO-peur-ti, ann O-fis for FAÏV PI-peul'},
      {who:'Agent',en:'I have a good one in Business Bay. Would you like to see it?',fr:'J’en ai un bien à Business Bay. Voulez-vous le visiter ?',ar:'لدي مكتب جيد في الخليج التجاري. هل تريد رؤيته؟',ph:'aï HAV eu GOUD OUANN inn BIZ-nis BÉÏ. woud you LAÏK tou SI it'},
      {me:true,choices:['Yes. Can I arrange a viewing this week?','Yes. Can I pay in cash at the pump?','Yes. Can I have the menu?'],fr:'Oui. Puis-je organiser une visite cette semaine ?',ar:'نعم. هل يمكنني ترتيب موعد للمعاينة هذا الأسبوع؟',ph:'YÈS. kann aï eu-RÉÏNDJ eu VIOU-inng ðis OUIK'},
      {scene:'2 · La visite'},
      {who:'Agent',en:'Here it is. What do you think?',fr:'Le voici. Qu’en pensez-vous ?',ar:'ها هو. ما رأيك؟',ph:'HIR it IZ. OUOT dou you þINNK'},
      {me:true,choices:['It’s nice. What is the size in square feet?','It’s nice. What is the salary range?','It’s nice. What is the next stop?'],fr:'Il est bien. Quelle est la surface en pieds carrés ?',ar:'إنه جيد. ما المساحة بالقدم المربع؟',ph:'its NAÏS. OUOT iz ðeu SAÏZ inn SKOUÈR FIT'},
      {who:'Agent',en:'Nine hundred square feet, at one hundred dirhams per square foot.',fr:'Neuf cents pieds carrés, à cent dirhams le pied carré.',ar:'تسعمئة قدم مربع، بمئة درهم للقدم المربع.',ph:'NAÏN HAN-dreud SKOUÈR FIT, at OUANN HAN-dreud DIR-hamz peur SKOUÈR FOUT'},
      {me:true,choices:['And what are the service charges?','And what are your strengths?','And what are the symptoms?'],fr:'Et quelles sont les charges de service ?',ar:'وما هي رسوم الخدمات؟',ph:'annd OUOT ar ðeu SEUR-vis TCHAR-djiz'},
      {who:'Agent',en:'Twelve dirhams per square foot.',fr:'Douze dirhams le pied carré.',ar:'اثنا عشر درهمًا للقدم المربع.',ph:'TOUÈLV DIR-hamz peur SKOUÈR FOUT'},
      {scene:'3 · La négociation'},
      {who:'Agent',en:'So, are you interested?',fr:'Alors, ça vous intéresse ?',ar:'إذن، هل أنت مهتم؟',ph:'SO, ar you INN-treus-tid'},
      {me:true,choices:['Yes, if we can have a rent-free period for the fit-out.','Yes, if we can have the grilled chicken.','Yes, if we can have a Nol card.'],fr:'Oui, si nous pouvons avoir une période sans loyer pour l’aménagement.',ar:'نعم، إذا حصلنا على فترة بدون إيجار لأعمال التجهيز.',ph:'YÈS, if oui kann HAV eu RÈNT-FRI PI-ri-eud for ðeu FIT-aout'},
      {who:'Agent',en:'The landlord can offer one month.',fr:'Le propriétaire peut accorder un mois.',ar:'يمكن للمالك منح شهر واحد.',ph:'ðeu LANND-lord kann O-feur OUANN MANþ'},
      {me:true,choices:['Could it be two months if we sign for three years?','Could it be two dirhams if we fill it up?','Could it be two bedrooms with a sea view?'],fr:'Serait-il possible d’avoir deux mois si nous signons pour trois ans ?',ar:'هل يمكن أن تكون شهرين إذا وقّعنا لثلاث سنوات؟',ph:'koud it bi TOU MANþS if oui SAÏN for þRI YIRZ'},
      {who:'Agent',en:'I’ll ask him. I think it’s possible.',fr:'Je vais lui demander. Je pense que c’est possible.',ar:'سأسأله. أعتقد أن ذلك ممكن.',ph:'aïl ASK him. aï þINNK its PO-si-beul'},
      {me:true,choices:['Great. Can we renew the lease after three years?','Great. Can we see the kitchen after three years?','Great. Can we call an ambulance?'],fr:'Parfait. Pourrons-nous renouveler le bail après trois ans ?',ar:'رائع. هل يمكننا تجديد عقد الإيجار بعد ثلاث سنوات؟',ph:'GRÉÏT. kann oui ri-NIOU ðeu LIS AF-teur þRI YIRZ'},
      {who:'Agent',en:'Yes, the renewal is in the contract.',fr:'Oui, le renouvellement est prévu dans le contrat.',ar:'نعم، التجديد منصوص عليه في العقد.',ph:'YÈS, ðeu ri-NIOU-eul iz inn ðeu KONN-trakt'}
    ]}
];
