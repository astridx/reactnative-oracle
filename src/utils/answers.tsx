const answers = [
  {
    title: 'Eher nicht!',
  },
  {
    title: 'Es könnte sein.',
  },
  {
    title: 'Nimm das Tempo ein bisschen zurück.',
  },
  {
    title: 'Schlage einen anderen Weg ein.',
  },
  {
    title: 'Bist du sicher?',
  },
  {
    title: 'Ja, definitiv!',
  },
  {
    title: 'Nein, auf keinen Fall!',
  },
  {
    title: 'Schlaf noch einmal eine Nacht darüber!',
  },
  {
    title: 'Bist du wahnsinnig?',
  },
  {
    title: 'Kühlen Kopf bewahren.',
  },
  {
    title: 'Augen zu und durch.',
  },
  {
    title: 'Frage jemand anderen um Rat.',
  },
  {
    title: 'Neuer Versuch.',
  },
  {
    title: 'Manchmal dauert es ein bisschen länger.',
  },
  {
    title: 'Trenn dich lieber von dem Gedanken.',
  },
  {
    title: 'Lass laufen!',
  },
  {
    title: 'Vielleicht.',
  },
  {
    title: 'Was sagt deine Intuition?',
  },
  {
    title: 'Wer weiß?',
  },
  {
    title: 'Zerbrich dir nicht den Kopf darüber.',
  },
  {
    title: 'Du brauchst ein bisschen Geduld.',
  },
  {
    title: 'Dran bleiben lohnt sich.',
  },
  {
    title: 'Nein, nein und nochmal nein!',
  },
  {
    title: 'Die Wogen müssen sich erst noch glätten.',
  },
  {
    title: 'Das ist es nicht wert.',
  },
  {
    title: 'Natürlich nicht!',
  },
  {
    title: 'Das ist egal.',
  },
  {
    title: 'Definitiv!',
  },
  {
    title: 'Weiter so.',
  },
  {
    title: 'Nimm eher Abstand davon.',
  },
  {
    title: 'Du kennst die Antwort schon selbst!',
  },
  {
    title: 'Gut Ding will Weile haben.',
  },
  {
    title: 'Gib nicht auf!',
  },
  {
    title: 'Freu dich nicht zu früh!',
  },
  {
    title: 'Mit Biss schaffst du alles.',
  },
  {
    title: 'Die Sonne scheint bald wieder für dich.',
  },
  {
    title: 'Lass dich überraschen.',
  },
  {
    title: 'Entscheide dich selbst!',
  },
  {
    title: 'Hör auf dein Herz.',
  },
  {
    title: 'Du bekommst bald Post.',
  },
  {
    title: 'Alles wird sich wieder einrenken.',
  },
  {
    title: 'Liebeskummer lohnt sich nicht.',
  },
  {
    title: 'Schalte einen Gang runter.',
  },
  {
    title: 'Morgen wirst du es wissen.',
  },
  {
    title: 'Sprich es an!',
  },
  {
    title: 'Finger weg, du verbrennst dich.',
  },
  {
    title: 'Nur Mut!',
  },
  {
    title: 'Lass deinen Charme spielen.',
  },
  {
    title: 'Du wickelst jeden um den Finger.',
  },
  {
    title: 'Deine Erwartungen sind zu hoch.',
  },
  {
    title: 'Es sieht fast danach aus.',
  },
  {
    title: 'Hör auf, ich verrückt zu machen.',
  },
  {
    title: 'Nicht ausweichen, anpacken.',
  },
  {
    title: 'Ehrlichkeit hilft immer!',
  },
  {
    title: 'Lass dein Bauchgefühl entscheiden.',
  },
  {
    title: 'Zeig mehr Gefühl.',
  },
  {
    title: 'Nicht in diesem Leben.',
  },
  {
    title: 'In Wirklichkeit ist es ganz anders.',
  },
  {
    title: 'Beeil dich.',
  },
  {
    title: 'Jetzt oder nie!',
  },
  {
    title: 'Was möchtest du genau wissen?',
  },
  {
    title: 'Nimm die Herausforderung an.',
  },
  {
    title: 'Du schaffst das!',
  },
  {
    title: 'Kopf hoch.',
  },
  {
    title: 'Alles wird gut.',
  },
  {
    title: 'Nimm dir Zeit zum Nachdenken.',
  },
  {
    title: 'Sei nicht so ungeduldig.',
  },
  {
    title: 'Ja klar!',
  },
  {
    title: 'Die Zukunft wird es zeigen.',
  },
  {
    title: 'Gib die Hoffnung nicht auf.',
  },
  {
    title: 'Es ist aussichtslos.',
  },
  {
    title: 'Deine Geduld wird belohnt.',
  },
  {
    title: 'Du wirst bald klarer sehen.',
  },
  {
    title: 'Vertraue auf dich.',
  },
  {
    title: 'Gib ein bisschen mehr Gas.',
  },
  {
    title: 'Es kommt wie es kommt.',
  },
  {
    title: 'Zappeln lassen.',
  },
  {
    title: 'Hände weg.',
  },
  {
    title: 'Ruhe bewahren.',
  },
  {
    title: 'Überlege es dir noch einmal.',
  },
  {
    title: 'Einen Ausweg gibt es immer.',
  },
  {
    title: 'Nichts ist für immer.',
  },
  {
    title: 'Nichts ist unmöglich.',
  },
  {
    title: 'Ein Traum weist dir den Weg.',
  },
  {
    title: 'Folge deinem Herzen.',
  },
  {
    title: 'Vielleicht doch?',
  },
  {
    title: 'Nein!!',
  },
  {
    title: 'Ja!!',
  },
  {
    title: 'Nicht nachdenken, handeln.',
  },
  {
    title: 'Du kannst es nicht ändern.',
  },
  {
    title: 'Die Zeit ist noch nicht reif, sich zu entscheiden.',
  },
  {
    title: 'Geh es gelassen an.',
  },
  {
    title: 'Nur die Ruhe.',
  },
  {
    title: 'Das ist die richtige Gelegenheit.',
  },
  {
    title: 'Sei beruhigt.',
  },
  {
    title: 'Beobachte es noch ein bisschen.',
  },
  {
    title: 'Dein Wunsch geht in Erfüllung.',
  },
  {
    title: 'Träume sind Schäume.',
  },
  {
    title: 'Mach den Kopf frei.',
  },
  {
    title: 'Hundertprozentig!',
  },
  {
    title: 'Ganz sicher nicht!',
  },
  {
    title: 'Fang noch einmal neu an.',
  },
  {
    title: 'Eine kleine Sache wird sich ändern.',
  },
  {
    title: 'Trau dich.',
  },
  {
    title: 'Suche dein eigenes Glück.',
  },
  {
    title: 'Eventuell',
  },
  {
    title: 'Mache es dir nicht zu bequem.',
  },
  {
    title: 'Renne nicht vor der Sache weg.',
  },
  {
    title: 'Sei nicht dumm.',
  },
  {
    title: 'Du musst auch lassen können.',
  },
  {
    title: 'Bist du wirklich bereit dazu?',
  },
  {
    title: 'Es ist zu deinem Besten.',
  },
  {
    title: 'Du weißt es einfach noch nicht.',
  },
  {
    title: 'Frag deine Mutter.',
  },
  {
    title: 'Betrachte es einmal von einer anderen Seite.',
  },
  {
    title: 'Du machst Fortschritte.',
  },
  {
    title: 'Kläre es sofort.',
  },
  {
    title: 'Unbedingt!',
  },
  {
    title: 'Wechsele schnell die Richtung.',
  },
  {
    title: 'Teile dein Glück.',
  },
  {
    title: 'Nicht jetzt.',
  },
  {
    title: 'Akzeptiere es einfach.',
  },
  {
    title: 'Laufe nicht der Vergangenheit nach.',
  },
  {
    title: 'Leider ja.',
  },
  {
    title: 'Bringe es schnell in Ordnung.',
  },
  {
    title: 'Hab vertrauen.',
  },
  {
    title: 'Bestimmt nicht.',
  },
  {
    title: 'Es wird sich glücklich fügen.',
  },
  {
    title: 'Lass es zu.',
  },
  {
    title: 'Sei ehrlich zu dir selbst.',
  },
  {
    title: 'Nur nicht nervös werden!',
  },
  {
    title: 'Warum nicht?',
  },
  {
    title: 'Warum nicht?',
  },
  {
    title: 'Stell dir die Frage einmal anders.',
  },
  {
    title: 'Nichts ist unmöglich.',
  },
  {
    title: 'Sei nicht zögerlich.',
  },
  {
    title: 'Es ist eine Chance.',
  },
  {
    title: 'Erwarte nicht zu viel',
  },
  {
    title: 'Handle weise.',
  },
  {
    title: 'Sieh dich vor.',
  },
  {
    title: 'Willst du das wirklich?',
  },
  {
    title: 'Die Antwort weiß nur das Universum.',
  },
  {
    title: 'Es kommt ganz unverhofft.',
  },
  {
    title: 'Die Zeit wird es zeigen.',
  },
  {
    title: 'Riskier es!',
  },
  {
    title: 'Interessiert es dich wirklich?',
  },
  {
    title: 'Alles hat seinen Sinn.',
  },
  {
    title: 'Es ist Zeit für einen Perspektivenwechsel.',
  },
  {
    title: 'Die Dinge werden sich ändern.',
  },
  {
    title: 'Bleib du selbst.',
  },
  {
    title: 'Nutze die Chance.',
  },
  {
    title: 'Irgendwann wirst du darüber lachen.',
  },
  {
    title: 'Zieh dich ein bisschen zurück.',
  },
  {
    title: 'Das Leben ist kein Ponyhof.',
  },
  {
    title: 'Was hält dich davon ab?',
  },
  {
    title: 'Offenbar dich.',
  },
  {
    title: 'Es ist wirklich sinnlos.',
  },
  {
    title: 'Das tut dir nicht gut!',
  },
  {
    title: 'Tut dir das gut?',
  },
  {
    title: 'Denk positiv.',
  },
  {
    title: 'Es ist nie zu spät.',
  },
  {
    title: 'Kämpfe darum!',
  },
  {
    title: 'Du kannst es schaffen.',
  },
  {
    title: 'Leider nein.',
  },
  {
    title: 'Lass lieber die Finger davon!',
  },
  {
    title: 'Nimm es mit Humor.',
  },
  {
    title: 'Es liegt in deiner Hand.',
  },
  {
    title: 'Sei nicht töricht.',
  },
  {
    title: 'Es ist in Ordnung so wie es ist.',
  },
  {
    title: 'Wende dich dem Positiven zu.',
  },
  {
    title: 'Das klappt so nie!',
  },
  {
    title: 'Du musst warten können.',
  },
  {
    title: 'Für den Moment ist es gut so.',
  },
  {
    title: 'Triff eine Entscheidung.',
  },
  {
    title: 'Das ist die falsche Frage.',
  },
  {
    title: 'Zieh einen Schlussstrich.',
  },
  {
    title: 'Es geht immer weiter.',
  },
  {
    title: 'Früher oder später.',
  },
  {
    title: 'Du bist zu negativ.',
  },
  {
    title: 'Im Augenblick ist es okay.',
  },
  {
    title: 'Abstand wir dir guttun.',
  },
  {
    title: 'Der richtige Zeitpunkt wird kommen.',
  },
  {
    title: 'Du musst den Blickwinkel ändern.',
  },
  {
    title: 'Tue es!',
  },
  {
    title: 'Alles ist möglich.',
  },
  {
    title: 'Denke nicht so viel darüber nach!',
  },
  {
    title: 'Es ist Zeit für einen Neubeginn.',
  },
  {
    title: 'Sei nicht verzagt.',
  },
];
export default answers;
