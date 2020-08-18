const skills = [
  {id: 1, skill: 'Overthink simple tasks', aquired: true},
  {id: 2, skill: 'XHTML', aquired: false},
  {id: 3, skill: 'Can Shoot From the Hip', aquired: false},
  {id: 4, skill: 'Bourbon and Sass', aquired: 'some days'},
  {id: 5, skill: 'Remembers to Add "Defer" to script tags', aquired: false},
  {id: 6, skill: 'Obsess over minor details of keyboards and VS Code themes', aquired: true}
];

module.exports = {
  getAll
};

function getAll() {
  return todos;
}
