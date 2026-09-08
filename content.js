/* All lesson content lives here. To add a text, append to DATA[lang].articles.
   Shape: { id, t, tr?, lv, blurb, s:[[target, english, translit?]], g:{word:gloss}, n:[[title,html]] } */

const DATA = {
fr:{
  label:"French", voice:"fr-FR", dir:"ltr",
  vocab:[
    ["le pain","bread (m.)"],["la maison","house (f.)"],["l'eau","water (f.)"],
    ["le livre","book (m.)"],["la ville","town, city (f.)"],["le travail","work, job (m.)"],
    ["la gare","train station (f.)"],["le marché","market (m.)"],["la mère","mother (f.)"],
    ["le père","father (m.)"],["l'ami / l'amie","friend (m. / f.)"],["la lettre","letter (f.)"],
    ["être","to be"],["avoir","to have"],["aller","to go"],["faire","to do, to make"],
    ["prendre","to take, to have (food)"],["vouloir","to want"],["pouvoir","to be able to"],
    ["habiter","to live (somewhere)"],["parler","to speak"],["manger","to eat"],
    ["acheter","to buy"],["lire","to read"],["écrire","to write"],["comprendre","to understand"],
    ["grand / grande","big, tall"],["petit / petite","small"],["vieux / vieille","old"],
    ["cher / chère","expensive; dear"],["beau / belle","beautiful"],["fatigué / fatiguée","tired"],
    ["aujourd'hui","today"],["demain","tomorrow"],["toujours","always"],["souvent","often"],
    ["parce que","because"],["mais","but"],["beaucoup","a lot"],["presque","almost"]
  ],
  grammar:[
    {t:"Every noun has a gender", lv:"A1",
     b:"<p>French nouns are masculine or feminine, and the article changes with the gender. There is no reliable rule, so learn each noun <em>with</em> its article — store <b>la maison</b>, never <b>maison</b>.</p><p>Definite (the): <b>le</b> / <b>la</b> / <b>les</b>. Indefinite (a, some): <b>un</b> / <b>une</b> / <b>des</b>. Before a vowel, <b>le</b> and <b>la</b> both shrink to <b>l'</b>.</p>",
     ex:[["le livre → les livres","the book → the books"],["une amie","a friend (female)"],["l'eau, l'hôtel","the water, the hotel"]]},
    {t:"Present tense: the -er pattern", lv:"A1",
     b:"<p>Around 80% of French verbs end in <b>-er</b> and all take the same six endings. Drop <b>-er</b> and add: <b>-e, -es, -e, -ons, -ez, -ent</b>. The <b>-ent</b> ending is silent, so <i>il parle</i> and <i>ils parlent</i> sound identical.</p>",
     ex:[["je parle, tu parles, il parle","I speak, you speak, he speaks"],["nous parlons, vous parlez, ils parlent","we speak, you speak, they speak"]]},
    {t:"être and avoir", lv:"A1",
     b:"<p>The two most common verbs are irregular and worth memorising outright, because both are also used to build the past tense.</p><p><b>être</b>: suis, es, est, sommes, êtes, sont.<br><b>avoir</b>: ai, as, a, avons, avez, ont.</p><p>Note that French uses <b>avoir</b> where English uses <i>to be</i> for age and hunger.</p>",
     ex:[["J'ai vingt ans.","I am twenty. (lit. I have twenty years)"],["Nous sommes fatigués.","We are tired."]]},
    {t:"Negation wraps around the verb", lv:"A1",
     b:"<p>Negation takes two pieces: <b>ne</b> before the verb, <b>pas</b> after it. In speech the <b>ne</b> is very often dropped — <i>je sais pas</i> — but keep it in writing.</p><p>After a negative, <b>un/une/des/du</b> all collapse to <b>de</b>.</p>",
     ex:[["Je ne comprends pas.","I don't understand."],["Il ne veut pas de légumes.","He doesn't want any vegetables."]]},
    {t:"Adjectives agree, and usually follow", lv:"A2",
     b:"<p>Adjectives match their noun in gender and number — typically add <b>-e</b> for feminine and <b>-s</b> for plural. Most sit <em>after</em> the noun, unlike English.</p><p>A small, high-frequency set goes before: beau, joli, jeune, vieux, bon, mauvais, grand, petit, nouveau.</p>",
     ex:[["une voiture rouge","a red car"],["une vieille ville","an old town"]]},
    {t:"Passé composé: the everyday past", lv:"A2",
     b:"<p>Built from a helper verb in the present plus a past participle. Most verbs use <b>avoir</b>; verbs of movement and change of state use <b>être</b>.</p><p>With <b>être</b>, the participle agrees with the subject — <i>elle est allée</i>, <i>ils sont allés</i>.</p>",
     ex:[["J'ai mangé une pomme.","I ate an apple."],["Nous sommes allés à Lyon.","We went to Lyon."],["Elle est rentrée fatiguée.","She came home tired."]]}
  ],
  articles:[
    {id:"fr1", t:"Le matin de Léa", lv:"A1", blurb:"Present tense, daily routine. 46 words.",
     s:[
      ["Léa habite à Nantes.","Léa lives in Nantes."],
      ["Elle se réveille à sept heures.","She wakes up at seven."],
      ["Elle prend un café et du pain.","She has a coffee and some bread."],
      ["Ensuite, elle marche jusqu'à la gare.","Then she walks to the station."],
      ["Le train part à huit heures dix.","The train leaves at ten past eight."],
      ["Léa travaille dans une petite librairie.","Léa works in a small bookshop."],
      ["Elle aime beaucoup son travail.","She likes her job a lot."]
     ],
     g:{"léa":"a girl's name","habite":"lives — from habiter","à":"in, at, to","nantes":"a city in western France","elle":"she","se":"herself — part of a reflexive verb","réveille":"wakes — se réveiller, to wake up","sept":"seven","heures":"hours, o'clock","prend":"has, takes — from prendre","un":"a (masculine)","café":"coffee","et":"and","du":"some (masculine)","pain":"bread","ensuite":"then, next","marche":"walks","jusqu'à":"as far as, up to","la":"the (feminine)","gare":"train station","le":"the (masculine)","train":"train","part":"leaves — from partir","huit":"eight","dix":"ten","travaille":"works","dans":"in","une":"a (feminine)","petite":"small (feminine)","librairie":"bookshop — not a library","aime":"likes, loves","beaucoup":"a lot","son":"her, his","travail":"work, job"},
     n:[["se réveiller","A reflexive verb: the pronoun <b>se</b> points the action back at the subject. She wakes <i>herself</i> up."],["librairie","A false friend. A bookshop, not a library — that's <b>une bibliothèque</b>."]]},

    {id:"fr2", t:"Au marché", lv:"A1", blurb:"Negation and partitives at the market. 52 words.",
     s:[
      ["Le samedi, Karim va au marché avec sa mère.","On Saturdays, Karim goes to the market with his mother."],
      ["Il y a beaucoup de monde.","There are a lot of people."],
      ["Sa mère achète des tomates, du fromage et un poulet.","His mother buys tomatoes, cheese and a chicken."],
      ["Karim ne veut pas de légumes.","Karim doesn't want any vegetables."],
      ["Il préfère les fraises.","He prefers strawberries."],
      ["« Elles sont chères », dit sa mère.","\u201cThey're expensive,\u201d says his mother."],
      ["Mais elle en achète quand même.","But she buys some anyway."]
     ],
     g:{"le":"the (masculine)","samedi":"Saturday","karim":"a boy's name","va":"goes — from aller","au":"to the (masculine)","marché":"market","avec":"with","sa":"his, her (before a feminine noun)","mère":"mother","il":"he, it","y":"there","a":"has — from avoir","beaucoup":"a lot","de":"of","monde":"world; people","achète":"buys","des":"some (plural)","tomates":"tomatoes","du":"some (masculine)","fromage":"cheese","et":"and","un":"a (masculine)","poulet":"chicken","ne":"first half of the negative","veut":"wants — from vouloir","pas":"second half of the negative","légumes":"vegetables","préfère":"prefers","les":"the (plural)","fraises":"strawberries","elles":"they (feminine)","sont":"are — from être","chères":"expensive (feminine plural)","dit":"says — from dire","mais":"but","elle":"she","en":"some of it, of them","quand":"when","même":"even, same"},
     n:[["il y a","A fixed phrase meaning <i>there is</i> or <i>there are</i>. It never changes for plural."],["quand même","Two ordinary words that together mean <i>anyway</i> or <i>all the same</i>. Very common in speech."],["ne … pas de","After a negative, <b>des</b> becomes <b>de</b>: <i>des légumes</i> → <i>pas de légumes</i>."]]},

    {id:"fr3", t:"Dimanche à Lyon", lv:"A2", blurb:"A day trip, told in the passé composé. 55 words.",
     s:[
      ["Dimanche dernier, nous sommes allés à Lyon.","Last Sunday, we went to Lyon."],
      ["Nous avons pris le train de neuf heures.","We took the nine o'clock train."],
      ["À midi, j'ai mangé dans un vieux restaurant près du fleuve.","At noon, I ate in an old restaurant near the river."],
      ["Après le déjeuner, nous avons visité la vieille ville.","After lunch, we visited the old town."],
      ["Il a plu, mais ce n'était pas grave.","It rained, but it didn't matter."],
      ["Je suis rentrée fatiguée et heureuse.","I came home tired and happy."]
     ],
     g:{"dimanche":"Sunday","dernier":"last","nous":"we","sommes":"are — from être","allés":"gone — participle of aller","à":"to, at, in","lyon":"a city in central France","avons":"have — from avoir","pris":"taken — participle of prendre","le":"the (masculine)","train":"train","de":"of","neuf":"nine","heures":"hours, o'clock","midi":"noon","j'ai":"I have","mangé":"eaten","dans":"in","un":"a (masculine)","vieux":"old (masculine)","restaurant":"restaurant","près":"near","du":"of the (masculine)","fleuve":"river (one flowing to the sea)","après":"after","déjeuner":"lunch","visité":"visited","la":"the (feminine)","vieille":"old (feminine)","ville":"town, city","il":"it","a":"has","plu":"rained — participle of pleuvoir","mais":"but","ce":"it, that","n'était":"was not","pas":"not","grave":"serious","je":"I","suis":"am — from être","rentrée":"returned home (feminine participle)","fatiguée":"tired (feminine)","et":"and","heureuse":"happy (feminine)"},
     n:[["nous sommes allés","Verbs of movement build the past with <b>être</b>, not <b>avoir</b>, and the participle then agrees with the subject."],["rentrée, fatiguée, heureuse","The extra <b>-e</b> on all three tells you the narrator is a woman. French grammar leaks personal information English hides."],["ce n'était pas grave","Literally <i>it wasn't serious</i>; used the way English uses <i>never mind</i> or <i>it was fine</i>."]]},

    {id:"fr4", t:"Les lettres de ma grand-mère", lv:"B1", blurb:"Two past tenses side by side, and why they differ. 78 words.",
     s:[
      ["J'ai commencé le français parce que ma grand-mère le parlait.","I started French because my grandmother spoke it."],
      ["Elle est morte quand j'avais douze ans.","She died when I was twelve."],
      ["Pendant longtemps, je n'ai rien fait de cette langue.","For a long time, I did nothing with that language."],
      ["Puis, un jour, j'ai retrouvé ses lettres dans une boîte.","Then one day I found her letters again in a box."],
      ["Je ne comprenais presque rien, et cela m'a mis en colère.","I understood almost nothing, and that made me angry."],
      ["Aujourd'hui, je lis une page par jour.","Today I read one page a day."],
      ["Ce n'est pas rapide, mais je la comprends un peu mieux chaque mois.","It isn't fast, but I understand her a little better each month."]
     ],
     g:{"j'ai":"I have","commencé":"started","le":"the (masculine)","français":"French","parce":"because (with que)","que":"that","ma":"my (feminine)","grand-mère":"grandmother","parlait":"spoke, used to speak — imperfect","elle":"she","est":"is — from être","morte":"died (feminine participle)","quand":"when","j'avais":"I had","douze":"twelve","ans":"years","pendant":"during, for","longtemps":"a long time","je":"I","n'ai":"I have not","rien":"nothing","fait":"done — participle of faire","de":"of, with","cette":"this, that (feminine)","langue":"language; tongue","puis":"then","un":"a (masculine)","jour":"day","retrouvé":"found again","ses":"her, his (plural)","lettres":"letters","dans":"in","une":"a (feminine)","boîte":"box","ne":"first half of the negative","comprenais":"understood — imperfect","presque":"almost","et":"and","cela":"that","m'a":"has me","mis":"put — participle of mettre","en":"in, into","colère":"anger","aujourd'hui":"today","lis":"read — from lire","page":"page","par":"per","ce":"it, that","n'est":"is not","pas":"not","rapide":"fast","mais":"but","la":"her","comprends":"understand","peu":"little","mieux":"better","chaque":"each","mois":"month"},
     n:[["parlait, avais, comprenais","These are the <b>imparfait</b>: background states and habits, with no clear beginning or end. Compare <i>j'ai commencé</i> — a single finished event."],["mettre en colère","Literally <i>to put into anger</i>. French often builds emotions as things you are put into."],["ne … rien","Same two-part frame as <i>ne … pas</i>, but <b>rien</b> means <i>nothing</i>."]]}
  ]
},

ar:{
  label:"Arabic", voice:"ar-SA", dir:"rtl",
  vocab:[
    ["بَيْت","bayt — house"],["مَدْرَسَة","madrasa — school"],["كِتاب","kitāb — book"],
    ["مَكْتَب","maktab — office, desk"],["سُوق","sūq — market"],["مَدِينَة","madīna — city"],
    ["أُمّ","umm — mother"],["أَب","ab — father"],["أَخ","akh — brother"],["بِنْت","bint — girl, daughter"],
    ["رَجُل","rajul — man"],["مَاء","māʾ — water"],["خُبْز","khubz — bread"],["شاي","shāy — tea"],
    ["يَوْم","yawm — day"],["صَباح","ṣabāḥ — morning"],["مَساء","masāʾ — evening"],
    ["كَتَبَ","kataba — he wrote"],["قَرَأَ","qaraʾa — he read"],["ذَهَبَ","dhahaba — he went"],
    ["أَكَلَ","akala — he ate"],["شَرِبَ","shariba — he drank"],["عَمِلَ","ʿamila — he worked"],
    ["كَبِير","kabīr — big"],["صَغِير","ṣaghīr — small"],["جَمِيل","jamīl — beautiful"],
    ["طَيِّب","ṭayyib — kind, good"],["بَعِيد","baʿīd — far"],["قَرِيب","qarīb — near"],
    ["فِي","fī — in"],["عَلَى","ʿalā — on"],["مِنْ","min — from"],["إِلَى","ilā — to"],
    ["وَ","wa — and"],["هَذا","hādhā — this (m.)"],["أَنا","anā — I"],["هُوَ","huwa — he"],["هِيَ","hiya — she"]
  ],
  grammar:[
    {t:"There is no verb “to be” in the present", lv:"A1",
     b:"<p>Arabic simply places two things side by side. <b>الْبَيْتُ كَبِيرٌ</b> is literally <i>the-house big</i>, and means <i>the house is big</i>.</p><p>The trick is the article: the first part is definite (has <b>الـ</b>), the second is indefinite. Make them both definite and the meaning changes to <i>the big house</i> — a phrase, not a sentence.</p>",
     ex:[["أَنا مُعَلِّمٌ.","I am a teacher.",1],["الْوَلَدُ صَغِيرٌ.","The boy is small.",1],["الْوَلَدُ الصَّغِيرُ","the small boy — no longer a sentence",1]]},
    {t:"الـ and the sun letters", lv:"A1",
     b:"<p><b>الـ</b> is <i>the</i>, glued to the front of the word. It never changes in writing — but half the time it changes in sound.</p><p>Before the fourteen “sun letters” (ت ث د ذ ر ز س ش ص ض ط ظ ل ن), the <b>l</b> assimilates into the next letter, which doubles. Before the “moon letters” it is pronounced normally.</p>",
     ex:[["الْقَمَر — al-qamar","the moon (moon letter: you hear the l)",1],["الشَّمْس — ash-shams","the sun (sun letter: the l disappears)",1]]},
    {t:"Roots and patterns", lv:"A1",
     b:"<p>This is the engine of the language. Most words are built from a three-consonant root carrying a core meaning, poured into a pattern that gives it a job.</p><p>Take <b>ك ت ب</b> (k-t-b), the idea of writing. Recognising the root lets you guess a word you have never seen — and lets you file a dozen words in memory as one.</p>",
     ex:[["كَتَبَ kataba","he wrote",1],["كِتاب kitāb","book",1],["مَكْتَب maktab","office, desk — the place of writing",1],["مَكْتَبَة maktaba","library, bookshop",1],["كاتِب kātib","writer — the one who writes",1]]},
    {t:"Gender: the ة ending", lv:"A1",
     b:"<p>Nouns are masculine or feminine, and feminine words usually end in <b>ة</b> (tāʾ marbūṭa), pronounced as a short <i>-a</i>. Adjectives follow their noun and copy its gender.</p><p>Unlike French, the marker is regular enough to be worth trusting.</p>",
     ex:[["مُعَلِّم / مُعَلِّمَة","male teacher / female teacher",1],["بِنْتٌ صَغِيرَةٌ","a small girl — both words carry the ة",1]]},
    {t:"Possession by stacking (iḍāfa)", lv:"A2",
     b:"<p>To say <i>X of Y</i>, put the two nouns next to each other. No word for <i>of</i>. The first noun never takes <b>الـ</b>; the second one carries the definiteness for the whole phrase.</p>",
     ex:[["بابُ الْبَيْتِ","the door of the house",1],["مَكْتَبَةُ الْمَدْرَسَةِ","the school library",1],["كِتابُ طالِبٍ","a student's book",1]]},
    {t:"Attached pronouns", lv:"A2",
     b:"<p>Possessives are suffixes, not separate words: <b>ـي</b> my, <b>ـكَ</b> your (m.), <b>ـهُ</b> his, <b>ـها</b> her, <b>ـنا</b> our.</p><p>The same endings attach to prepositions and verbs, which is why Arabic words look long — several English words are often packed into one.</p>",
     ex:[["بَيْتِي","my house",1],["اِسْمُها","her name",1],["مَعَنا","with us",1]]}
  ],
  articles:[
    {id:"ar1", t:"بَيْتِي", tr:"Baytī — My house", lv:"A1", blurb:"Nominal sentences, no verbs at all. 26 words.",
     s:[
      ["هَذا بَيْتِي.","This is my house.","hādhā baytī."],
      ["الْبَيْتُ صَغِيرٌ وَجَمِيلٌ.","The house is small and beautiful.","al-baytu ṣaghīrun wa-jamīlun."],
      ["فِي الْبَيْتِ مَطْبَخٌ كَبِيرٌ.","In the house there is a big kitchen.","fī l-bayti maṭbakhun kabīrun."],
      ["أُمِّي فِي الْمَطْبَخِ.","My mother is in the kitchen.","ummī fī l-maṭbakhi."],
      ["أَبِي فِي الْحَدِيقَةِ.","My father is in the garden.","abī fī l-ḥadīqati."],
      ["وَأَنا؟ أَنا عَلَى السَّطْحِ.","And me? I'm on the roof.","wa-anā? anā ʿalā s-saṭḥi."]
     ],
     g:{"هذا":"this (masculine)","بيتي":"my house — بيت + ـي","البيت":"the house","صغير":"small","و":"and","جميل":"beautiful","في":"in","مطبخ":"kitchen","كبير":"big","أمي":"my mother","المطبخ":"the kitchen","أبي":"my father","الحديقة":"the garden","أنا":"I, me","على":"on","السطح":"the roof","وجميل":"and beautiful","وأنا":"and I"},
     n:[["Where is “is”?","Not one sentence here has a verb. Arabic joins the two halves and lets you supply <i>is</i> yourself."],["السَّطْح","Notice the doubled س after الـ — a sun letter, so you say <i>as-saṭḥ</i>, not <i>al-saṭḥ</i>."]]},

    {id:"ar2", t:"فِي السُّوقِ", tr:"Fī s-sūq — At the market", lv:"A1", blurb:"Past-tense verbs enter. 28 words.",
     s:[
      ["ذَهَبَ سامِي إِلَى السُّوقِ.","Sami went to the market.","dhahaba Sāmī ilā s-sūqi."],
      ["اِشْتَرَى خُبْزًا وَجُبْنًا وَتُفّاحًا.","He bought bread, cheese and apples.","ishtarā khubzan wa-jubnan wa-tuffāḥan."],
      ["السُّوقُ كَبِيرٌ وَمُزْدَحِمٌ.","The market is big and crowded.","as-sūqu kabīrun wa-muzdaḥimun."],
      ["سَأَلَ الْبائِعَ عَنِ السِّعْرِ.","He asked the seller about the price.","saʾala l-bāʾiʿa ʿani s-siʿri."],
      ["الْبائِعُ رَجُلٌ طَيِّبٌ.","The seller is a kind man.","al-bāʾiʿu rajulun ṭayyibun."],
      ["أَعْطاهُ تُفّاحَةً هَدِيَّةً.","He gave him an apple as a gift.","aʿṭāhu tuffāḥatan hadiyyatan."]
     ],
     g:{"ذهب":"he went","سامي":"Sami, a man's name","إلى":"to","السوق":"the market","اشترى":"he bought","خبزا":"bread","وجبنا":"and cheese","وتفاحا":"and apples","كبير":"big","ومزدحم":"and crowded","سأل":"he asked","البائع":"the seller","عن":"about","السعر":"the price","رجل":"man","طيب":"kind, good","أعطاه":"he gave him — أعطى + ـه","تفاحة":"an apple (single one)","هدية":"a gift"},
     n:[["The -an ending","<span class='rtl-word'>خُبْزًا</span> is just <span class='rtl-word'>خُبْز</span> as a direct object. That <i>-an</i> tail marks the thing the verb acts on."],["تُفّاح vs تُفّاحَة","<span class='rtl-word'>تُفّاح</span> is apples as a substance; add <b>ة</b> and you get one countable apple. Arabic does this with most foods."]]},

    {id:"ar3", t:"يَوْمِي", tr:"Yawmī — My day", lv:"A2", blurb:"Present-tense verbs and the k-t-b root in action. 34 words.",
     s:[
      ["أَسْتَيْقِظُ فِي السّاعَةِ السّادِسَةِ.","I wake up at six o'clock.","astayqiẓu fī s-sāʿati s-sādisati."],
      ["أَشْرَبُ الشّايَ وَأَقْرَأُ الْجَرِيدَةَ.","I drink tea and read the newspaper.","ashrabu sh-shāya wa-aqraʾu l-jarīdata."],
      ["ثُمَّ أَذْهَبُ إِلَى الْعَمَلِ بِالْحافِلَةِ.","Then I go to work by bus.","thumma adhhabu ilā l-ʿamali bi-l-ḥāfilati."],
      ["أَعْمَلُ فِي مَكْتَبٍ صَغِيرٍ قُرْبَ الْجامِعَةِ.","I work in a small office near the university.","aʿmalu fī maktabin ṣaghīrin qurba l-jāmiʿati."],
      ["فِي الْمَساءِ أَكْتُبُ رِسالَةً لِأَخِي.","In the evening I write a letter to my brother.","fī l-masāʾi aktubu risālatan li-akhī."],
      ["هُوَ يَعِيشُ بَعِيدًا.","He lives far away.","huwa yaʿīshu baʿīdan."]
     ],
     g:{"أستيقظ":"I wake up","في":"in, at","الساعة":"the hour, o'clock","السادسة":"the sixth","أشرب":"I drink","الشاي":"the tea","وأقرأ":"and I read","الجريدة":"the newspaper","ثم":"then","أذهب":"I go","إلى":"to","العمل":"the work","بالحافلة":"by the bus — بـ + الحافلة","أعمل":"I work","مكتب":"office","صغير":"small","قرب":"near","الجامعة":"the university","المساء":"the evening","أكتب":"I write","رسالة":"a letter","لأخي":"to my brother — لـ + أخ + ـي","هو":"he","يعيش":"he lives","بعيدا":"far away"},
     n:[["The أ- prefix","Present-tense verbs mark the subject with a prefix. <b>أ-</b> is <i>I</i>, <b>يـ</b> is <i>he</i>. Compare <span class='rtl-word'>أَذْهَبُ</span> (I go) with <span class='rtl-word'>ذَهَبَ</span> (he went) from the last text."],["k-t-b again","<span class='rtl-word'>مَكْتَب</span> (office) and <span class='rtl-word'>أَكْتُبُ</span> (I write) share a root. So does <span class='rtl-word'>كِتاب</span>. Three words, one thing to remember."]]}
  ]
}
};
