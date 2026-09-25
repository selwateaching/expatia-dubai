# English for Life in Dubai

Une application à part (distincte d'InglisIA, qui reste dédiée aux enfants) : l'anglais
pour les adultes francophones et arabophones qui s'installent à Dubaï pour vivre,
travailler ou investir.

Nom de travail provisoire, à remplacer quand l'identité sera choisie.

## Contenu actuel

10 parcours, du A1 au B2 : 46 étapes (leçons + une mission par parcours), environ 300 mots et expressions,
chacun en anglais, français et arabe, avec phonétique et audio.

| # | Parcours | Niveau | Étapes |
|---|---|---|---|
| 1 | Arrive in Dubai | A1 | 7 leçons + Mission 01 |
| 2 | Live in Dubai | A1-A2 | 4 leçons + Mission 02 |
| 3 | Move Around Dubai | A1-A2 | 3 leçons + Mission 03 |
| 4 | Everyday Life | A1-A2 | 3 leçons + Mission 04 |
| 5 | Health & Administration | A2-B1 | 4 leçons + Mission 05 |
| 6 | Work in Dubai | A2-B1 | 3 leçons + Mission 06 |
| 7 | Start a Business | B1-B2 | 3 leçons + Mission 07 |
| 8 | Real Estate | B1-B2 | 3 leçons + Mission 08 |
| 9 | Investment English | B1-B2 | 3 leçons + Mission 09 |
| 10 | Professional & Social English | B1-B2 | 3 leçons + Mission 10 |

Le parcours 1 est dans `index.html` ; les parcours 2 à 10 sont dans `parcours/` (un fichier chacun,
format décrit dans `parcours/README.md`). Les modules transversaux (Phone Calls, Appointments,
Ask the Price, Emergency English) renvoient vers les leçons correspondantes.

## Fonctionnement

- Chaque mot / expression existe en **anglais → français → arabe**, avec audio.
  Un sélecteur en haut de page choisit la langue d'appui : français, arabe ou les deux.
- **Phonétique à la française** sous chaque mot et chaque réplique (ex. *Thank you → <u>S</u>ANK you*),
  affichable ou masquable par un bouton « 🗣️ Phonétique ». Syllabe en MAJUSCULES = syllabe
  accentuée ; s / z soulignés = « th » anglais. Les transcriptions sont dans le dictionnaire `PH`
  de `index.html` : toute nouvelle phrase anglaise doit y être ajoutée.
- Même moteur que les leçons InglisIA (traduction, écoute, reconstitution), plus une
  nouvelle étape **dialogue** : l'interlocuteur (agent, chauffeur, vendeur…) parle,
  l'apprenant choisit sa réponse ; indice en cas d'erreur, traduction à la demande.
- Les interlocuteurs utilisent, si le navigateur en propose, une autre voix anglaise
  (britannique, indienne…) que celle de l'apprenant.
- Progression en pourcentage de réponses justes du premier coup
  (« Maîtrisé » à partir de 80 %), enregistrée dans le navigateur (`localStorage`).

Aucun serveur ni clé API : `index.html` et les fichiers de `parcours/` suffisent.

## Ajouter ou corriger une leçon

Parcours 2 à 10 : modifier le fichier correspondant dans `parcours/` (format dans `parcours/README.md`).
Parcours 1 : tableau `PATHS` dans `index.html` (phonétique dans le dictionnaire `PH`).

## Mise en ligne (Render, gratuit)

**New → Static Site**, dépôt `expatia-dubai`, branche `main`, puis :
- Root Directory : *(vide)*
- Build Command : `echo ok`
- Publish Directory : `.`

Si le service a été créé en **Web Service** (Python) plutôt qu'en Static Site :
- Build Command : `pip install -r requirements.txt`
- Start Command : `python server.py`
