/* Parcours 3 — Move Around Dubai (A1-A2) : métro, station-service, garage.
   Format : voir parcours/README.md */
(window.EXPATIA = window.EXPATIA || {}).move = [
  {id:'move-metro',emoji:'🚇',kind:'mixed',title:'Métro et carte Nol',desc:'Recharger sa carte, trouver sa ligne, savoir où descendre.',
    intro:'Dans le métro de Dubaï, on paie avec une carte Nol, que l’on recharge aux guichets ou aux machines. Il y a deux lignes : la rouge (Red Line) et la verte (Green Line).',
    words:[
      ['Nol card','Carte Nol (carte de transport)','بطاقة نول','💳','NOL KÂD'],
      ['Station','Station','محطة','🚉','STÉÏ-cheun'],
      ['Red Line','Ligne rouge','الخط الأحمر','🔴','RÈD LAÏN'],
      ['Platform','Quai','رصيف','🛤️','PLAT-fôm'],
      ['Next stop','Prochain arrêt','المحطة التالية','➡️','NÈKST STOP'],
      ['I’d like to top up my Nol card.','Je voudrais recharger ma carte Nol.','أريد شحن بطاقة نول.','🔋','aïd LAÏK tou TOP AP maï NOL KÂD'],
      ['Which line goes to the Mall of the Emirates?','Quelle ligne va au Mall of the Emirates ?','أي خط يذهب إلى مول الإمارات؟','🗺️','OUITCH LAÏN goz tou ðeu MOL ov ði È-mi-reuts'],
      ['Where do I change?','Où dois-je changer de ligne ?','أين أغيّر الخط؟','🔄','OUÈ dou aï TCHÉÏNDJ'],
      ['Which stop do I get off at?','À quel arrêt dois-je descendre ?','في أي محطة أنزل؟','🚏','OUITCH STOP dou aï guèt OF at']
    ],
    dialogue:[
      {scene:'Au guichet du métro'},
      {who:'Staff',en:'Hello, how can I help you?',fr:'Bonjour, comment puis-je vous aider ?',ar:'مرحبًا، كيف يمكنني مساعدتك؟',ph:'hè-LO, haou kann aï HÈLP you'},
      {me:true,choices:['I’d like to top up my Nol card.','I’d like to change 500 euros.','I’d like a table for two.'],fr:'Je voudrais recharger ma carte Nol.',ar:'أريد شحن بطاقة نول.'},
      {who:'Staff',en:'How much would you like to add?',fr:'Combien voulez-vous ajouter ?',ar:'كم تريد أن تضيف؟',ph:'haou MATCH woud you LAÏK tou AD'},
      {me:true,choices:['Fifty dirhams, please.','Fifty minutes, please.','Five bedrooms, please.'],fr:'Cinquante dirhams, s’il vous plaît.',ar:'خمسون درهمًا من فضلك.',ph:'FIF-ti DIR-hamz, PLIZ'},
      {who:'Staff',en:'Done. Anything else?',fr:'C’est fait. Autre chose ?',ar:'تم. هل تحتاج شيئًا آخر؟',ph:'DANN. È-ni-þinng ÈLS'},
      {me:true,choices:['Yes. Which line goes to the Mall of the Emirates?','Yes. Is the rent negotiable?','Yes. Can I see the kitchen?'],fr:'Oui. Quelle ligne va au Mall of the Emirates ?',ar:'نعم. أي خط يذهب إلى مول الإمارات؟',ph:'YÈS. OUITCH LAÏN goz tou ðeu MOL ov ði È-mi-reuts'},
      {who:'Staff',en:'The Red Line. It’s six stops from here.',fr:'La ligne rouge. C’est à six arrêts d’ici.',ar:'الخط الأحمر. على بعد ست محطات من هنا.',ph:'ðeu RÈD LAÏN. its SIKS STOPS from HIEU'},
      {me:true,choices:['Thank you. Do I need to change?','Thank you. Do I need a visa?','Thank you. Do you have the address?'],fr:'Merci. Dois-je changer de ligne ?',ar:'شكرًا. هل أحتاج إلى تغيير الخط؟',ph:'þANK you. dou aï NID tou TCHÉÏNDJ'},
      {who:'Staff',en:'No, it’s direct.',fr:'Non, c’est direct.',ar:'لا، إنه مباشر.',ph:'NO, its daï-RÈKT'}
    ]},
  {id:'move-petrol',emoji:'⛽',kind:'mixed',title:'À la station-service',desc:'Faire le plein, choisir le carburant, payer.',
    intro:'Dans la plupart des stations de Dubaï, un employé fait le plein pour vous : vous restez dans la voiture et vous lui dites ce que vous voulez.',
    words:[
      ['Petrol station','Station-service','محطة بنزين','⛽','PÈ-treul STÉÏ-cheun'],
      ['Petrol','Essence','بنزين','🛢️','PÈ-treul'],
      ['Diesel','Diesel (gazole)','ديزل','🚚','DI-zeul'],
      ['Fill it up, please.','Le plein, s’il vous plaît.','املأ الخزان من فضلك.','⛽','FIL it AP, PLIZ'],
      ['Special 95, please.','Du Super 95, s’il vous plaît.','سوبر 95 من فضلك.','9️⃣','SPÈ-cheul NAÏN-ti-FAÏV, PLIZ'],
      ['Fifty dirhams of petrol, please.','Pour cinquante dirhams d’essence, s’il vous plaît.','بنزين بخمسين درهمًا من فضلك.','💵','FIF-ti DIR-hamz ov PÈ-treul, PLIZ'],
      ['Can you check the tyre pressure?','Pouvez-vous vérifier la pression des pneus ?','هل يمكنك فحص ضغط الإطارات؟','🛞','kann you TCHÈK ðeu TAÏ-eu PRÈ-cheu'],
      ['Car wash','Lavage auto','غسيل السيارات','🧽','KÂ OUOCH']
    ],
    dialogue:[
      {scene:'À la pompe'},
      {who:'Attendant',en:'Good evening. Which fuel?',fr:'Bonsoir. Quel carburant ?',ar:'مساء الخير. أي نوع من الوقود؟',ph:'goud IV-ninng. OUITCH FIOU-eul'},
      {me:true,choices:['Special 95, please.','Special menu, please.','Two bedrooms, please.'],fr:'Du Super 95, s’il vous plaît.',ar:'سوبر 95 من فضلك.'},
      {who:'Attendant',en:'How much?',fr:'Combien ?',ar:'كم؟',ph:'haou MATCH'},
      {me:true,choices:['Fill it up, please.','Fill in the form, please.','Follow the signs, please.'],fr:'Le plein, s’il vous plaît.',ar:'املأ الخزان من فضلك.'},
      {who:'Attendant',en:'Anything else?',fr:'Autre chose ?',ar:'هل تريد شيئًا آخر؟',ph:'È-ni-þinng ÈLS'},
      {me:true,choices:['Yes, can you check the tyre pressure?','Yes, can you lower the rent?','Yes, can you send me some photos?'],fr:'Oui, pouvez-vous vérifier la pression des pneus ?',ar:'نعم، هل يمكنك فحص ضغط الإطارات؟',ph:'YÈS, kann you TCHÈK ðeu TAÏ-eu PRÈ-cheu'},
      {who:'Attendant',en:'No problem. That’s one hundred and twenty dirhams.',fr:'Pas de problème. Ça fait cent vingt dirhams.',ar:'لا مشكلة. المبلغ مئة وعشرون درهمًا.',ph:'NO PRO-bleum. ðats OUANN HAN-dreud annd TOUÈN-ti DIR-hamz'},
      {me:true,choices:['Can I pay by card?','Can I see the kitchen?','Can I arrange a viewing?'],fr:'Puis-je payer par carte ?',ar:'هل يمكنني الدفع بالبطاقة؟'},
      {who:'Attendant',en:'Yes, of course.',fr:'Oui, bien sûr.',ar:'نعم، بالتأكيد.',ph:'YÈS, ov KÔS'},
      {me:true,choices:['Thank you. Can I have a receipt?','Thank you. Can I have a sea view?','Thank you. Can I have a visa?'],fr:'Merci. Puis-je avoir un reçu ?',ar:'شكرًا. هل يمكنني الحصول على إيصال؟'}
    ]},
  {id:'move-garage',emoji:'🔧',kind:'phrases',title:'Au garage',desc:'Décrire une panne, demander un devis et un délai.',
    words:[
      ['I’d like to book an appointment.','Je voudrais prendre rendez-vous.','أريد حجز موعد.','📅','aïd LAÏK tou BOUK ann eu-POÏNT-meunt'],
      ['My car is making a strange noise.','Ma voiture fait un bruit bizarre.','سيارتي تصدر صوتًا غريبًا.','🔊','maï KAR iz MÉÏ-kinng eu STRÉÏNDJ NOÏZ'],
      ['The engine light is on.','Le voyant moteur est allumé.','ضوء المحرك مضاء.','⚠️','ði ÈN-djinn LAÏT iz ONN'],
      ['The brakes are not working well.','Les freins ne marchent pas bien.','الفرامل لا تعمل جيدًا.','🛑','ðeu BRÉÏKS â NOT WEU-kinng OUÈL'],
      ['Can you give me a quote?','Pouvez-vous me faire un devis ?','هل يمكنك أن تعطيني عرض سعر؟','🧾','kann you GUIV mi eu KOUOT'],
      ['How long will it take?','Combien de temps ça va prendre ?','كم من الوقت سيستغرق؟','⏱️','haou LONNG ouil it TÉÏK'],
      ['When can I pick up the car?','Quand puis-je récupérer la voiture ?','متى يمكنني استلام السيارة؟','🚗','OUÈN kann aï PIK AP ðeu KÂ'],
      ['Is it under warranty?','Est-ce sous garantie ?','هل هي تحت الضمان؟','🛡️','iz it ANN-deu OUO-reun-ti']
    ],
    dialogue:[
      {scene:'Au garage'},
      {who:'Mechanic',en:'Hello, what’s the problem with the car?',fr:'Bonjour, quel est le problème avec la voiture ?',ar:'مرحبًا، ما مشكلة السيارة؟',ph:'hè-LO, OUOTS ðeu PRO-bleum ouið ðeu KÂ'},
      {me:true,choices:['It’s making a strange noise when I brake.','It’s making a reservation for two.','It’s on the first floor.'],fr:'Elle fait un bruit bizarre quand je freine.',ar:'تصدر صوتًا غريبًا عندما أضغط على الفرامل.',ph:'its MÉÏ-kinng eu STRÉÏNDJ NOÏZ OUÈN aï BRÉÏK'},
      {who:'Mechanic',en:'I need to check the brakes.',fr:'Je dois vérifier les freins.',ar:'يجب أن أفحص الفرامل.',ph:'aï NID tou TCHÈK ðeu BRÉÏKS'},
      {me:true,choices:['OK. Can you give me a quote?','OK. Can you give me the menu?','OK. Can you give me a SIM card?'],fr:'D’accord. Pouvez-vous me faire un devis ?',ar:'حسنًا. هل يمكنك أن تعطيني عرض سعر؟',ph:'o-KÉÏ. kann you GUIV mi eu KOUOT'},
      {who:'Mechanic',en:'About six hundred dirhams, with the parts.',fr:'Environ six cents dirhams, avec les pièces.',ar:'حوالي ستمئة درهم، مع قطع الغيار.',ph:'eu-BAOUT SIKS HAN-dreud DIR-hamz, ouið ðeu PÂTS'},
      {me:true,choices:['How long will it take?','How long are you staying?','How old is the building?'],fr:'Combien de temps ça va prendre ?',ar:'كم من الوقت سيستغرق؟'},
      {who:'Mechanic',en:'Two hours.',fr:'Deux heures.',ar:'ساعتان.',ph:'TOU AOU-euz'},
      {me:true,choices:['Perfect. I’ll wait here.','Perfect. I’ll take the flat.','Perfect. Welcome to Dubai.'],fr:'Parfait. J’attends ici.',ar:'ممتاز. سأنتظر هنا.',ph:'PEU-fikt. aïl OUÉÏT HIEU'}
    ]},
  {id:'move-mission',emoji:'🎯',kind:'mission',title:'Mission 03 — Fill up your car',desc:'Faire le plein puis passer au garage.',
    brief:'Vous avez loué une voiture. Le réservoir est presque vide et un voyant vient de s’allumer. Faites le plein, faites vérifier les pneus, puis passez au garage le plus proche.',
    objectives:['Choisir le carburant et faire le plein','Payer et faire vérifier la pression des pneus','Expliquer le problème au garagiste','Obtenir un devis et un délai'],
    dialogue:[
      {scene:'1 · Station-service'},
      {who:'Attendant',en:'Hello! Petrol or diesel?',fr:'Bonjour ! Essence ou diesel ?',ar:'مرحبًا! بنزين أم ديزل؟',ph:'hè-LO ! PÈ-treul ô DI-zeul'},
      {me:true,choices:['Petrol, Special 95, please.','Petrol, one bedroom, please.','Diesel, sea view, please.'],fr:'De l’essence, du Super 95, s’il vous plaît.',ar:'بنزين، سوبر 95 من فضلك.',ph:'PÈ-treul, SPÈ-cheul NAÏN-ti-FAÏV, PLIZ'},
      {who:'Attendant',en:'Fill it up?',fr:'Le plein ?',ar:'أملأ الخزان؟',ph:'FIL it AP'},
      {me:true,choices:['Yes, fill it up, please.','Yes, follow the signs.','Yes, I’m from Morocco.'],fr:'Oui, le plein, s’il vous plaît.',ar:'نعم، املأ الخزان من فضلك.',ph:'YÈS, FIL it AP, PLIZ'},
      {who:'Attendant',en:'Done. One hundred and forty dirhams.',fr:'C’est fait. Cent quarante dirhams.',ar:'تم. مئة وأربعون درهمًا.',ph:'DANN. OUANN HAN-dreud annd FÔ-ti DIR-hamz'},
      {me:true,choices:['Here’s my card. Can you check the tyre pressure too?','Here’s my passport. Can I see the kitchen?','Here’s my address. Where is the gate?'],fr:'Voici ma carte. Pouvez-vous aussi vérifier la pression des pneus ?',ar:'هذه بطاقتي. هل يمكنك أيضًا فحص ضغط الإطارات؟',ph:'HIEUZ maï KÂD. kann you TCHÈK ðeu TAÏ-eu PRÈ-cheu TOU'},
      {who:'Attendant',en:'Sure. The tyres are fine.',fr:'Bien sûr. Les pneus sont bons.',ar:'بالتأكيد. الإطارات جيدة.',ph:'CHÔ. ðeu TAÏ-euz â FAÏN'},
      {me:true,choices:['Thank you!','You’re welcome!','Nice to meet you too!'],fr:'Merci !',ar:'شكرًا!'},
      {scene:'2 · Au garage'},
      {who:'Mechanic',en:'Good afternoon. How can I help you?',fr:'Bon après-midi. Comment puis-je vous aider ?',ar:'مساء الخير. كيف يمكنني مساعدتك؟'},
      {me:true,choices:['The engine light is on.','The rent is negotiable.','The metro is direct.'],fr:'Le voyant moteur est allumé.',ar:'ضوء المحرك مضاء.'},
      {who:'Mechanic',en:'Let me check. … It’s a small problem with a sensor.',fr:'Je vais regarder. … C’est un petit problème de capteur.',ar:'دعني أفحص. … إنها مشكلة صغيرة في أحد الحساسات.',ph:'lèt mi TCHÈK. its eu SMOL PRO-bleum ouið eu SÈN-seu'},
      {me:true,choices:['Can you give me a quote?','Can you give me a table?','Can you give me a Nol card?'],fr:'Pouvez-vous me faire un devis ?',ar:'هل يمكنك أن تعطيني عرض سعر؟'},
      {who:'Mechanic',en:'Three hundred dirhams.',fr:'Trois cents dirhams.',ar:'ثلاثمئة درهم.',ph:'þRI HAN-dreud DIR-hamz'},
      {me:true,choices:['OK. How long will it take?','OK. How long is the flight?','OK. How many cheques?'],fr:'D’accord. Combien de temps ça va prendre ?',ar:'حسنًا. كم من الوقت سيستغرق؟',ph:'o-KÉÏ. haou LONNG ouil it TÉÏK'},
      {who:'Mechanic',en:'One hour. You can wait in our café.',fr:'Une heure. Vous pouvez attendre dans notre café.',ar:'ساعة واحدة. يمكنك الانتظار في المقهى لدينا.',ph:'OUANN AOU-eu. you kann OUÉÏT inn AOU-eu ka-FÉÏ'},
      {me:true,choices:['Perfect. I’ll wait here.','Perfect. I’ll take the flat.','Perfect. Welcome to Dubai.'],fr:'Parfait. J’attends ici.',ar:'ممتاز. سأنتظر هنا.'}
    ]}
];
