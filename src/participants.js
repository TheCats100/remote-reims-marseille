const studentsMarseille = [
  "Anais Reau",
  "Anthony Lasbleiz",
  "David Ruben",
  "Hélène Morel",
  "Jean-Baptiste Bouillat",
  "Jean-Francois Uccelli",
  "Johanna Cas",
  "Olivier Baveux",
  "Sabrina Bartoli",
  "Christophe Turpin",
  "Kenny Phiri",
  "Nadir Abdelouahab"
];
const studentsReims = [
  "Angélique Mora",
  "Anthony Lucci",
  "Auxietre-Fontes Victor",
  "Brian Thellier",
  "Brian Lagaude",
  "Cécyl Lang",
  "Fabrice Roger",
  "Joel Rodier",
  "Julien Nicaise",
  "Lucas Perrin",
  "Malik Himeur",
  "Martin Gilbert",
  "Stephaine Pantiez",
  "Victor Veyrier"
];

const listParticipants = students =>
  students.map(studentName => ({
    name: studentName,
    hasToken: true
  }));

const allStudents = [...studentsMarseille, ...studentsReims];
const participants = listParticipants(allStudents);

export default participants;
