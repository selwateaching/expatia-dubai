/* Parcours 9 — Investment English (B1-B2) : financement, calculs, contrats.
   Format : voir parcours/README.md */
(window.EXPATIA = window.EXPATIA || {}).invest = [
  {id:'inv-finance',emoji:'🏦',kind:'mixed',title:'Financement immobilier',desc:'Prêt, apport, taux, durée.',
    intro:'Les banques des Émirats prêtent aux expatriés résidents, et certaines aussi aux non-résidents, avec un apport minimum qui dépend de votre statut et du prix du bien. Demandez un accord de principe (pre-approval) avant de faire une offre.',
    words:[
      ['Mortgage','Prêt immobilier','رهن عقاري','🏦','MÔ-gueudj'],
      ['Interest rate','Taux d’intérêt','سعر الفائدة','📊','INN-treust RÉÏT'],
      ['Down payment','Apport personnel','الدفعة الأولى','💵','DAOUN PÉÏ-meunt'],
      ['Monthly payment','Mensualité','القسط الشهري','📅','MANþ-li PÉÏ-meunt'],
      ['Loan','Prêt','قرض','💳','LONN'],
      ['Pre-approval','Accord de principe','موافقة مبدئية','✅','PRI-eu-PROU-veul'],
      ['Am I eligible for a mortgage?','Suis-je éligible à un prêt immobilier ?','هل أنا مؤهل للحصول على رهن عقاري؟','❓','am aï È-li-dji-beul for eu MÔ-gueudj'],
      ['Is the rate fixed or variable?','Le taux est-il fixe ou variable ?','هل سعر الفائدة ثابت أم متغير؟','⚖️','iz ðeu RÉÏT FIKST ô VÈ-ri-eu-beul'],
      ['What is the maximum loan term?','Quelle est la durée maximale du prêt ?','ما هي أقصى مدة للقرض؟','⏳','OUOT iz ðeu MAK-si-meum LONN TEUM']
    ],
    dialogue:[
      {scene:'Rendez-vous à la banque'},
      {who:'Adviser',en:'How can I help you with your property project?',fr:'Comment puis-je vous aider pour votre projet immobilier ?',ar:'كيف يمكنني مساعدتك في مشروعك العقاري؟',ph:'haou kann aï HÈLP you ouið yô PRO-peu-ti PRO-djèkt'},
      {me:true,choices:['I’d like to know if I’m eligible for a mortgage.','I’d like to know if breakfast is included.','I’d like to know where the toilets are.'],fr:'J’aimerais savoir si je suis éligible à un prêt immobilier.',ar:'أود أن أعرف إذا كنت مؤهلًا للحصول على رهن عقاري.',ph:'aïd LAÏK tou NO if aïm È-li-dji-beul for eu MÔ-gueudj'},
      {who:'Adviser',en:'What is your monthly salary?',fr:'Quel est votre salaire mensuel ?',ar:'كم راتبك الشهري؟',ph:'OUOT iz yô MANþ-li SA-leu-ri'},
      {me:true,choices:['Twenty-five thousand dirhams.','Twenty-five square feet.','Twenty-five minutes by taxi.'],fr:'Vingt-cinq mille dirhams.',ar:'خمسة وعشرون ألف درهم.',ph:'touèn-ti-FAÏV þAOU-zeund DIR-hamz'},
      {who:'Adviser',en:'Good. You can borrow up to eighty percent of the price.',fr:'Bien. Vous pouvez emprunter jusqu’à quatre-vingts pour cent du prix.',ar:'جيد. يمكنك اقتراض ما يصل إلى ثمانين بالمئة من السعر.',ph:'GOUD. you kann BO-ro AP tou ÉÏ-ti peu-SÈNT ov ðeu PRAÏS'},
      {me:true,choices:['What is the interest rate?','What is the exchange rate?','What is the deadline?'],fr:'Quel est le taux d’intérêt ?',ar:'ما هو سعر الفائدة؟',ph:'OUOT iz ði INN-treust RÉÏT'},
      {who:'Adviser',en:'Around four percent at the moment.',fr:'Environ quatre pour cent en ce moment.',ar:'حوالي أربعة بالمئة حاليًا.',ph:'eu-RAOUND FÔ peu-SÈNT at ðeu MO-meunt'},
      {me:true,choices:['Is the rate fixed or variable?','Is the rent per year or per month?','Is the metro direct?'],fr:'Le taux est-il fixe ou variable ?',ar:'هل سعر الفائدة ثابت أم متغير؟'},
      {who:'Adviser',en:'Fixed for three years, then variable.',fr:'Fixe pendant trois ans, puis variable.',ar:'ثابت لمدة ثلاث سنوات، ثم متغير.',ph:'FIKST fô þRI YIEUZ, ðèn VÈ-ri-eu-beul'}
    ]},
  {id:'inv-calc',emoji:'🧮',kind:'vocab',title:'Calculer un investissement',desc:'Rendement brut et net, plus-value, cash-flow.',
    intro:'Rendement brut = loyer annuel ÷ prix d’achat. Rendement net = (loyer − charges et frais) ÷ prix d’achat. C’est le rendement net qui compte vraiment.',
    words:[
      ['Purchase price','Prix d’achat','سعر الشراء','🏷️','PEU-tcheus PRAÏS'],
      ['Rental income','Revenu locatif','الدخل الإيجاري','💵','RÈN-teul INN-kam'],
      ['Gross yield','Rendement brut','العائد الإجمالي','📈','GROS YILD'],
      ['Net yield','Rendement net','العائد الصافي','📉','NÈT YILD'],
      ['Capital gain','Plus-value','الربح الرأسمالي','💹','KA-pi-teul GUÉÏN'],
      ['Cash flow','Flux de trésorerie (cash-flow)','التدفق النقدي','🔄','KACH FLO'],
      ['Running costs','Frais courants','التكاليف الجارية','🧾','RA-ninng KOSTS'],
      ['Return on investment','Retour sur investissement','العائد على الاستثمار','🎯','ri-TEUN onn inn-VÈST-meunt'],
      ['Vacancy','Vacance locative','فترة الشغور','🚪','VÉÏ-keun-si']
    ],
    dialogue:[
      {scene:'Avec un ami investisseur'},
      {who:'Friend',en:'So, is the apartment a good investment?',fr:'Alors, l’appartement est-il un bon investissement ?',ar:'إذن، هل الشقة استثمار جيد؟',ph:'SO, iz ði eu-PÂT-meunt eu GOUD inn-VÈST-meunt'},
      {me:true,choices:['The gross yield is seven percent.','The gross yield is on the first floor.','The gross yield is grilled chicken.'],fr:'Le rendement brut est de sept pour cent.',ar:'العائد الإجمالي سبعة بالمئة.',ph:'ðeu GROS YILD iz SÈ-veun peu-SÈNT'},
      {who:'Friend',en:'And the net yield, after the running costs?',fr:'Et le rendement net, après les frais courants ?',ar:'والعائد الصافي بعد التكاليف الجارية؟',ph:'annd ðeu NÈT YILD, ÂF-teu ðeu RA-ninng KOSTS'},
      {me:true,choices:['About five and a half percent.','About five and a half kilos.','About five and a half stops.'],fr:'Environ cinq et demi pour cent.',ar:'حوالي خمسة ونصف بالمئة.',ph:'eu-BAOUT FAÏV annd eu HÂF peu-SÈNT'},
      {who:'Friend',en:'Not bad. What about capital gain?',fr:'Pas mal. Et la plus-value ?',ar:'ليس سيئًا. وماذا عن الربح الرأسمالي؟',ph:'NOT BAD. OUOT eu-BAOUT KA-pi-teul GUÉÏN'},
      {me:true,choices:['Prices in this area went up last year.','Prices in this area are allergic to nuts.','Prices in this area have a fever.'],fr:'Les prix dans ce quartier ont augmenté l’an dernier.',ar:'ارتفعت الأسعار في هذه المنطقة العام الماضي.',ph:'PRAÏ-siz inn ðis È-ri-a OUÈNT AP LÂST YIEU'},
      {who:'Friend',en:'Just remember the vacancy between two tenants.',fr:'N’oublie pas la vacance entre deux locataires.',ar:'فقط تذكّر فترة الشغور بين مستأجرَين.',ph:'DJAST ri-MÈM-beu ðeu VÉÏ-keun-si bi-TOUIN TOU TÈ-neunts'},
      {me:true,choices:['You’re right. The cash flow must stay positive.','You’re right. The Wi-Fi must stay positive.','You’re right. The pool must stay open.'],fr:'Tu as raison. Le cash-flow doit rester positif.',ar:'معك حق. يجب أن يبقى التدفق النقدي إيجابيًا.',ph:'yô RAÏT. ðeu KACH FLO MAST STÉÏ PO-zi-tiv'}
    ]},
  {id:'inv-contract',emoji:'📜',kind:'phrases',title:'Comprendre un contrat',desc:'Clauses, annulation, pénalités, renouvellement.',
    words:[
      ['Terms and conditions','Conditions générales','الشروط والأحكام','📜','TEUMZ annd keun-DI-cheunz'],
      ['Could you explain this clause?','Pourriez-vous m’expliquer cette clause ?','هل يمكنك أن تشرح هذا البند؟','🔎','koud you iks-PLÉÏN ðis KLOZ'],
      ['What happens if I cancel?','Que se passe-t-il si j’annule ?','ماذا يحدث إذا ألغيت؟','❌','OUOT HA-peunz if aï KANN-seul'],
      ['Is there a penalty?','Y a-t-il une pénalité ?','هل توجد غرامة؟','⚠️','iz ðèr eu PÈ-neul-ti'],
      ['Who is responsible for maintenance?','Qui est responsable de l’entretien ?','من المسؤول عن الصيانة؟','🔧','HOU iz ri-SPONN-si-beul fô MÉÏN-teu-neuns'],
      ['Is the contract renewable?','Le contrat est-il renouvelable ?','هل العقد قابل للتجديد؟','🔁','iz ðeu KONN-trakt ri-NIOU-eu-beul'],
      ['I need time to read it.','J’ai besoin de temps pour le lire.','أحتاج إلى وقت لقراءته.','⏳','aï NID TAÏM tou RID it'],
      ['I’d like my lawyer to check it.','Je voudrais que mon avocat le vérifie.','أود أن يراجعه محاميّ.','⚖️','aïd LAÏK maï LO-yeu tou TCHÈK it']
    ],
    dialogue:[
      {scene:'Avant la signature'},
      {who:'Agent',en:'Here is the contract. You can sign on the last page.',fr:'Voici le contrat. Vous pouvez signer à la dernière page.',ar:'هذا هو العقد. يمكنك التوقيع في الصفحة الأخيرة.',ph:'HIR iz ðeu KONN-trakt. you kann SAÏN onn ðeu LÂST PÉÏDJ'},
      {me:true,choices:['Thank you, but I need time to read it.','Thank you, but I need a table for two.','Thank you, but I need petrol.'],fr:'Merci, mais j’ai besoin de temps pour le lire.',ar:'شكرًا، لكني أحتاج إلى وقت لقراءته.',ph:'þANK you, bat aï NID TAÏM tou RID it'},
      {who:'Agent',en:'Of course. Do you have any questions?',fr:'Bien sûr. Avez-vous des questions ?',ar:'بالتأكيد. هل لديك أي أسئلة؟',ph:'ov KÔS. dou you HAV È-ni KOUÈS-tcheunz'},
      {me:true,choices:['Yes. Could you explain this clause?','Yes. Could you warm it up?','Yes. Could you call a taxi?'],fr:'Oui. Pourriez-vous m’expliquer cette clause ?',ar:'نعم. هل يمكنك أن تشرح هذا البند؟',ph:'YÈS. koud you iks-PLÉÏN ðis KLOZ'},
      {who:'Agent',en:'It says the deposit is not refundable.',fr:'Elle dit que le dépôt n’est pas remboursable.',ar:'ينص على أن مبلغ التأمين غير قابل للاسترداد.',ph:'it SÈZ ðeu di-PO-zit iz NOT ri-FANN-deu-beul'},
      {me:true,choices:['What happens if I cancel?','What happens if I top up?','What happens at the gate?'],fr:'Que se passe-t-il si j’annule ?',ar:'ماذا يحدث إذا ألغيت؟'},
      {who:'Agent',en:'You lose the deposit, and there is a penalty of two percent.',fr:'Vous perdez le dépôt, et il y a une pénalité de deux pour cent.',ar:'تخسر مبلغ التأمين، وتوجد غرامة بنسبة اثنين بالمئة.',ph:'you LOUZ ðeu di-PO-zit, annd ðèr iz eu PÈ-neul-ti ov TOU peu-SÈNT'},
      {me:true,choices:['I see. I’d like my lawyer to check it.','I see. I’d like the grilled chicken.','I see. I’d like a sea view.'],fr:'Je vois. Je voudrais que mon avocat le vérifie.',ar:'فهمت. أود أن يراجعه محاميّ.',ph:'aï SI. aïd LAÏK maï LO-yeu tou TCHÈK it'},
      {who:'Agent',en:'No problem. Take your time.',fr:'Pas de problème. Prenez votre temps.',ar:'لا مشكلة. خذ وقتك.',ph:'NO PRO-bleum. TÉÏK yô TAÏM'}
    ]},
  {id:'inv-mission',emoji:'🎯',kind:'mission',title:'Mission 09 — Finance your investment',desc:'Obtenir le financement de votre achat.',
    brief:'Vous avez trouvé l’appartement dans lequel investir. Rencontrez un conseiller bancaire pour financer l’achat : présentez votre situation, comprenez les conditions du prêt et obtenez un accord de principe.',
    objectives:['Présenter votre projet et votre situation','Comprendre l’apport, le taux et la durée','Poser des questions sur les pénalités','Obtenir un accord de principe'],
    dialogue:[
      {scene:'1 · Votre situation'},
      {who:'Adviser',en:'Good morning. Tell me about your project.',fr:'Bonjour. Parlez-moi de votre projet.',ar:'صباح الخير. حدثني عن مشروعك.',ph:'goud MÔ-ninng. TÈL mi eu-BAOUT yô PRO-djèkt'},
      {me:true,choices:['I want to buy an apartment to rent it out.','I want to buy a Nol card.','I want to buy some rice.'],fr:'Je veux acheter un appartement pour le louer.',ar:'أريد شراء شقة لتأجيرها.',ph:'aï OUONT tou BAÏ ann eu-PÂT-meunt tou RÈNT it AOUT'},
      {who:'Adviser',en:'What is the purchase price?',fr:'Quel est le prix d’achat ?',ar:'ما هو سعر الشراء؟',ph:'OUOT iz ðeu PEU-tcheus PRAÏS'},
      {me:true,choices:['Nine hundred and twenty thousand dirhams.','Nine hundred square feet.','Nine o’clock tonight.'],fr:'Neuf cent vingt mille dirhams.',ar:'تسعمئة وعشرون ألف درهم.',ph:'NAÏN HAN-dreud annd TOUÈN-ti þAOU-zeund DIR-hamz'},
      {who:'Adviser',en:'And your monthly salary?',fr:'Et votre salaire mensuel ?',ar:'وراتبك الشهري؟',ph:'annd yô MANþ-li SA-leu-ri'},
      {me:true,choices:['Twenty-five thousand dirhams.','Twenty-five square feet.','Twenty-five minutes by taxi.'],fr:'Vingt-cinq mille dirhams.',ar:'خمسة وعشرون ألف درهم.'},
      {scene:'2 · Les conditions'},
      {who:'Adviser',en:'You need a down payment of twenty percent.',fr:'Il vous faut un apport de vingt pour cent.',ar:'تحتاج إلى دفعة أولى بنسبة عشرين بالمئة.',ph:'you NID eu DAOUN PÉÏ-meunt ov TOUÈN-ti peu-SÈNT'},
      {me:true,choices:['OK. What is the interest rate?','OK. What is the exchange rate?','OK. What is the deadline?'],fr:'D’accord. Quel est le taux d’intérêt ?',ar:'حسنًا. ما هو سعر الفائدة؟',ph:'o-KÉÏ. OUOT iz ði INN-treust RÉÏT'},
      {who:'Adviser',en:'Four percent, fixed for three years.',fr:'Quatre pour cent, fixe pendant trois ans.',ar:'أربعة بالمئة، ثابت لمدة ثلاث سنوات.',ph:'FÔ peu-SÈNT, FIKST fô þRI YIEUZ'},
      {me:true,choices:['What is the maximum loan term?','What is the maximum speed?','What is the menu?'],fr:'Quelle est la durée maximale du prêt ?',ar:'ما هي أقصى مدة للقرض؟'},
      {who:'Adviser',en:'Twenty-five years.',fr:'Vingt-cinq ans.',ar:'خمسة وعشرون عامًا.',ph:'touèn-ti-FAÏV YIEUZ'},
      {me:true,choices:['Is there a penalty if I repay early?','Is there a pool if I repay early?','Is there a gym in the bank?'],fr:'Y a-t-il une pénalité si je rembourse par anticipation ?',ar:'هل توجد غرامة إذا سددت مبكرًا؟',ph:'iz ðèr eu PÈ-neul-ti if aï ri-PÉÏ EU-li'},
      {who:'Adviser',en:'Yes, one percent of the amount repaid.',fr:'Oui, un pour cent du montant remboursé.',ar:'نعم، واحد بالمئة من المبلغ المسدد.',ph:'YÈS, OUANN peu-SÈNT ov ði eu-MAOUNT ri-PÉÏD'},
      {me:true,choices:['I see. Can I get a pre-approval today?','I see. Can I get a late check-out today?','I see. Can I get a car wash today?'],fr:'Je vois. Puis-je obtenir un accord de principe aujourd’hui ?',ar:'فهمت. هل يمكنني الحصول على موافقة مبدئية اليوم؟',ph:'aï SI. kann aï guèt eu PRI-eu-PROU-veul teu-DÉÏ'},
      {who:'Adviser',en:'Yes. Please send me your salary certificate and bank statements.',fr:'Oui. Envoyez-moi votre attestation de salaire et vos relevés bancaires.',ar:'نعم. أرسل لي شهادة الراتب وكشوف الحساب المصرفي.',ph:'YÈS. PLIZ SÈND mi yô SA-leu-ri seu-TI-fi-keut annd BANNK STÉÏT-meunts'}
    ]}
];
