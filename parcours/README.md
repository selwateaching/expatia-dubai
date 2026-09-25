# Contenu des parcours 2 à 10

Un fichier par parcours. Le parcours 1 (« Arrive in Dubai ») est directement dans `index.html`.

| Fichier | Parcours | Niveau |
|---|---|---|
| `live.js` | 2. Live in Dubai | A1-A2 |
| `move.js` | 3. Move Around Dubai | A1-A2 |
| `everyday.js` | 4. Everyday Life | A1-A2 |
| `admin.js` | 5. Health & Administration | A2-B1 |
| `work.js` | 6. Work in Dubai | A2-B1 |
| `business.js` | 7. Start a Business | B1-B2 |
| `realestate.js` | 8. Real Estate | B1-B2 |
| `invest.js` | 9. Investment English | B1-B2 |
| `social.js` | 10. Professional & Social English | B1-B2 |

## Format

```js
(window.EXPATIA = window.EXPATIA || {}).live = [   // clé du parcours (voir PATHS dans index.html)
  {id:'live-search', emoji:'🏢', kind:'vocab',        // vocab | phrases | mixed | mission
   title:'…', desc:'…', intro:'… (facultatif)',
   words:[ ['English','Français','العربية','emoji','phonétique'], … ],   // au moins 4
   dialogue:[                                                           // facultatif (obligatoire pour une mission)
     {scene:'Intertitre'},
     {who:'Agent', en:'…', fr:'…', ar:'…', ph:'phonétique'},
     {me:true, choices:['bonne réponse','fausse','fausse'], fr:'…', ar:'…', ph:'phonétique de la bonne réponse'}
   ]},
  {id:'live-mission', kind:'mission', brief:'…', objectives:['…'], dialogue:[…]}
];
```

- La **première** proposition de `choices` est la bonne ; elles sont mélangées à l'écran.
- `ph` peut être omis si la même phrase anglaise a déjà une phonétique ailleurs.
- **Phonétique** : syllabe accentuée en MAJUSCULES ; `þ` / `ð` pour le « th » (affichés s / z soulignés) ;
  le « u » de *cup* s'écrit « a » (MATCH), le son de *work* s'écrit « eu » (WEURK).
