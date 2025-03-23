const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

// Mock questions data
const questions = [
  {
    id: '1',
    text: 'Kada se Zakon o upravi u Federaciji Bosne i Hercegovine smatra donesenim?',
    answers: [
      { id: 'a', text: 'Da se donese Zakon o upravi u Federaciji Bosne i Hercegovine dovoljno je da ga usvoji samo Zastupnički dom Parlamenta BiH', isCorrect: false },
      { id: 'b', text: 'Da se donese Zakon o upravi u Federaciji Bosne i Hercegovine dovoljno je da ga usvoji samo Dom naroda Parlamenta BiH', isCorrect: false },
      { id: 'c', text: 'Da se donese Zakon o upravi u Federaciji Bosne i Hercegovine nije nužno da je usvojen u identičnom tekstu u oba doma Parlamenta Federacije BiH', isCorrect: false },
      { id: 'd', text: 'Zakon o upravi u Federaciji BiH smatra se donesenim kada ga u identičnom tekstu usvoje oba doma Parlamenta Federacije BiH i kada ga proglasi Parlament Federacije BiH', isCorrect: true },
    ],
  },
  {
    id: '2',
    text: 'Zakon o upravi proglašava se:',
    answers: [
      { id: 'a', text: 'Zakon o upravi proglašava se Odlukom Parlamenta Federacije BiH', isCorrect: false },
      { id: 'b', text: 'Zakon o upravi proglašava se Ukazom o proglašenju Zakona o upravi u Federaciji BiH', isCorrect: true },
      { id: 'c', text: 'Zakon o upravi proglašava se Rješenjem koje donosi Parlament Federacije BiH', isCorrect: false },
      { id: 'd', text: 'Zakon o upravi proglašava se Rješenjem koje donosi ministar Federalnog ministarstva pravde', isCorrect: false },
    ],
  },
  {
    id: '3',
    text: 'Poslove uprave iz okvira nadležnosti Federacije obavljaju:',
    answers: [
      { id: 'a', text: 'Poslove uprave iz okvira nadležnosti Federacije obavljaju organi uprave kantona', isCorrect: false },
      { id: 'b', text: 'Poslove uprave iz okvira nadležnosti Federacije obavljaju organi uprave Federacije', isCorrect: true },
      { id: 'c', text: 'Poslove uprave iz okvira nadležnosti Federacije obavljaju organi grada', isCorrect: false },
      { id: 'd', text: 'Poslove uprave iz okvira nadležnosti Federacije obavljaju općinske službe', isCorrect: false },
    ],
  },
  {
    id: '4',
    text: 'Kako se nazivaju organi uprave grada?',
    answers: [
      { id: 'a', text: 'Organi uprave grada nazivaju se sekretarijati', isCorrect: false },
      { id: 'b', text: 'Organi uprave grada nazivaju se uprave', isCorrect: false },
      { id: 'c', text: 'Organi uprave grada nazivaju se gradske službe za upravu', isCorrect: true },
      { id: 'd', text: 'Organi uprave grada nazivaju se ustanove', isCorrect: false },
    ],
  },
  {
    id: '5',
    text: 'Kako se nazivaju organi uprave općine?',
    answers: [
      { id: 'a', text: 'Organi uprave općine nazivaju se sekretarijati', isCorrect: false },
      { id: 'b', text: 'Organi uprave općine nazivaju se uprave', isCorrect: false },
      { id: 'c', text: 'Organi uprave općine nazivaju se općinske službe za upravu', isCorrect: true },
      { id: 'd', text: 'Organi uprave općine nazivaju se ustanove', isCorrect: false },
    ],
  },
  {
    id: '6',
    text: 'Ko vrši poslove uprave i samouprave iz nadležnosti grada?',
    answers: [
      { id: 'a', text: 'Poslove uprave i samouprave iz nadležnosti grada vrši gradonačelnik putem Sekretarijata', isCorrect: false },
      { id: 'b', text: 'Poslove uprave i samouprave iz nadležnosti grada vrši gradonačelnik putem uprava', isCorrect: false },
      { id: 'c', text: 'Poslove uprave i samouprave iz nadležnosti grada vrši gradonačelnik putem gradskih službi za upravu', isCorrect: true },
      { id: 'd', text: 'Poslove uprave i samouprave iz nadležnosti grada vrši gradonačelnik putem ustanova', isCorrect: false },
    ],
  },
  {
    id: '7',
    text: 'Ko vrši poslove uprave i samouprave iz nadležnosti općina?',
    answers: [
      { id: 'a', text: 'Poslove uprave i samouprave iz nadležnosti općina vrši općinski načelnik putem općinskih službi za upravu', isCorrect: true },
      { id: 'b', text: 'Poslove uprave i samouprave iz nadležnosti općina vrši općinski načelnik putem Sekretarijata', isCorrect: false },
      { id: 'c', text: 'Poslove uprave i samouprave iz nadležnosti općina vrši općinski načelnik putem uprava', isCorrect: false },
      { id: 'd', text: 'Poslove uprave i samouprave iz nadležnosti općina vrši općinski načelnik putem ustanova', isCorrect: false },
    ],
  },
  {
    id: '8',
    text: 'Po čijim uputama federalni organi uprave obavljaju poslove iz svoje nadležnosti?',
    answers: [
      { id: 'a', text: 'Organi uprave obavljaju poslove iz svoje nadležnosti po uputama Parlamenta Federacije BiH', isCorrect: false },
      { id: 'b', text: 'Organi uprave obavljaju poslove iz svoje nadležnosti po uputama Vlade Federacije BiH', isCorrect: false },
      { id: 'c', text: 'Organi uprave obavljaju poslove iz svoje nadležnosti po nalogu rukovoditelja organa uprave', isCorrect: false },
      { id: 'd', text: 'Organi uprave obavljaju poslove iz svoje nadležnosti samostalno, u skladu sa Ustavom, zakonom i drugim propisima', isCorrect: true },
    ],
  },
  {
    id: '9',
    text: 'Ko osniva federalne organe uprave?',
    answers: [
      { id: 'a', text: 'Federalni organi uprave Zakonom osniva Parlament Federacije BiH na prijedlog Vlade Federacije BiH', isCorrect: true },
      { id: 'b', text: 'Federalni organi uprave Zakonom osniva Parlament Federacije BiH na prijedlog predsjedavajućeg Zastupničkog doma', isCorrect: false },
      { id: 'c', text: 'Federalni organi uprave Zakonom osniva Parlament Federacije BiH na prijedlog predsjedavajućeg Doma naroda', isCorrect: false },
      { id: 'd', text: 'Federalni organi uprave Zakonom osniva Parlament Federacije BiH na prijedlog Ustavnog suda Federacije Bosne i Hercegovine', isCorrect: false },
    ],
  },
  {
    id: '10',
    text: 'Organi uprave u okviru svojih nadležnosti provode politiku koju je utvrdio:',
    answers: [
      { id: 'a', text: 'Organi uprave u okviru svojih nadležnosti provode politiku koju je utvrdio organ sudske vlasti', isCorrect: false },
      { id: 'b', text: 'Organi uprave u okviru svojih nadležnosti provode politiku koju je utvrdio organ zakonodavne vlasti', isCorrect: true },
      { id: 'c', text: 'Organi uprave u okviru svojih nadležnosti provode politiku koju je utvrdio organ izvršne vlasti', isCorrect: false },
      { id: 'd', text: 'Organi uprave u okviru svojih nadležnosti provode politiku koju je utvrdila Vlada Federacije BiH', isCorrect: false },
    ],
  },
  {
    id: '11',
    text: 'Šta obuhvata kompletan upravni nadzor?',
    answers: [
      { id: 'a', text: 'Nadzor nad zakonitošću akata kojima se rješava u upravnim stvarima', isCorrect: false },
      { id: 'b', text: 'Nadzor nad zakonitošću rada institucija koje imaju javna ovlaštenja', isCorrect: false },
      { id: 'c', text: 'Nadzor nad zakonitošću akata kojima se rješava u upravnim stvarima; nadzor nad zakonitošću rada institucija koje imaju javna ovlaštenja; inspekcijski nadzor', isCorrect: true },
      { id: 'd', text: 'Nadzor nad zakonitošću rada institucija koje imaju javna ovlaštenja i inspekcijski nadzor', isCorrect: false },
    ],
  },
  {
    id: '12',
    text: 'Preduzećima (društvima), ustanovama i drugim pravnim licima može se povjeriti vršenje određenih upravnih i stručnih poslova iz djelokruga organa uprave:',
    answers: [
      { id: 'a', text: 'Samo ako je to Zakonom određeno, odnosno povjereno', isCorrect: true },
      { id: 'b', text: 'Po odluci Vlade Federacije BiH', isCorrect: false },
      { id: 'c', text: 'Po odluci Federalnog ministarstva pravde', isCorrect: false },
      { id: 'd', text: 'Podzakonskim aktima federalnih organa', isCorrect: false },
    ],
  },
  {
    id: '13',
    text: 'Da li se institucijama koje imaju javna ovlaštenja mogu povjeravati poslovi inspekcijskog nadzora?',
    answers: [
      { id: 'a', text: 'Ne - u pravilu', isCorrect: true },
      { id: 'b', text: 'U zavisnosti od konkretnog slučaja', isCorrect: false },
      { id: 'c', text: 'Da', isCorrect: false },
      { id: 'd', text: 'Da - po ovlaštenju rukovoditelja organa uprave', isCorrect: false },
    ],
  },
  {
    id: '14',
    text: 'Koji poslovi inspekcijskog nadzora i pod kojim uslovima se ipak mogu povjeriti institucijama koje imaju javna ovlaštenja?',
    answers: [
      { id: 'a', text: 'Stručni poslovi', isCorrect: false },
      { id: 'b', text: 'Tehnički poslovi', isCorrect: false },
      { id: 'c', text: 'Upravni poslovi', isCorrect: false },
      { id: 'd', text: 'Stručni poslovi koji su od značaja za vršenje inspekcijskog nadzora (ekspertize, tehnička ispitivanja i sl.), ako za vršenje tih poslova organi uprave nemaju tehničke i druge uslove', isCorrect: true },
    ],
  },
  {
    id: '15',
    text: 'Ko vrši upravni nadzor nad radom institucija koje imaju javna ovlaštenja?',
    answers: [
      { id: 'a', text: 'Ma koja inspekcijska služba', isCorrect: false },
      { id: 'b', text: 'Organi uprave iz čije nadležnosti su povjerena javna ovlaštenja', isCorrect: true },
      { id: 'c', text: 'Organi uprave koje odredi glavni upravni inspektor', isCorrect: false },
      { id: 'd', text: 'Organi uprave koje odredi Federalno ministarstvo pravde', isCorrect: false },
    ],
  },
  {
    id: '16',
    text: 'Da li postoji obaveza institucija koje imaju javna ovlaštenja da nadležnom organu uprave koji vrši nadzor nad njihovim radom podnosi izvještaj o vršenju javnih ovlaštenja i kada?',
    answers: [
      { id: 'a', text: 'Da - najmanje jedanput godišnje', isCorrect: true },
      { id: 'b', text: 'Ne', isCorrect: false },
      { id: 'c', text: 'Ukoliko hoće institucija koja ima javna ovlaštenja', isCorrect: false },
      { id: 'd', text: 'Ukoliko je predviđeno aktom o unutrašnjoj organizaciji i sistematizaciji institucije koja ima javna ovlaštenja', isCorrect: false },
    ],
  },
  {
    id: '17',
    text: 'Da li postoji obaveza institucija koje imaju javna ovlaštenja da nadležnom organu uprave koji vrši nadzor nad njihovim radom dostavljaju određene podatke i dokumenta i kada?',
    answers: [
      { id: 'a', text: 'Ne', isCorrect: false },
      { id: 'b', text: 'Ukoliko hoće institucija koja ima javna ovlaštenja', isCorrect: false },
      { id: 'c', text: 'Da - na traženje tih organa uprave', isCorrect: true },
      { id: 'd', text: 'Ukoliko je predviđeno aktom o unutrašnjoj organizaciji i sistematizaciji institucije koja ima javna ovlaštenja', isCorrect: false },
    ],
  },
  {
    id: '18',
    text: 'Odnos organa uprave prema organu zakonodavne vlasti zasniva se:',
    answers: [
      { id: 'a', text: 'Na principu njihove odgovornosti organu zakonodavne vlasti za zakonito, potpuno i efikasno obavljanje poslova iz svoje nadležnosti', isCorrect: true },
      { id: 'b', text: 'Organi uprave odgovaraju organu zakonodavne vlasti samo u oblasti preduzimanja kadrovskih i drugih mjera', isCorrect: false },
      { id: 'c', text: 'Organi uprave odgovorni su organu zakonodavne vlasti samo u pogledu efikasnog izvršavanja poslova', isCorrect: false },
      { id: 'd', text: 'Organi uprave odgovorni su organu zakonodavne vlasti samo u organizovanom smislu', isCorrect: false },
    ],
  },
  {
    id: '19',
    text: 'Na kojem principu odgovornosti se zasniva odnos organa uprave prema organu zakonodavne vlasti?',
    answers: [
      { id: 'a', text: 'Na principu povremene odgovornosti', isCorrect: false },
      { id: 'b', text: 'Na principu stalne odgovornosti', isCorrect: true },
      { id: 'c', text: 'Na principu odgovornosti samo za neka pitanja iz domena djelatnosti organa uprave', isCorrect: false },
      { id: 'd', text: 'Na principu odgovornosti samo za organizaciona pitanja organa uprave', isCorrect: false },
    ],
  },
];

app.get('/', (req, res) => {
  res.send('Quiz API is running');
});
// API endpoint to get questions
app.get('/api/questions', (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});