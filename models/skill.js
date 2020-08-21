const skills = [
  {id: 1, skill: 'Can Overthink Simple Tasks', aquired: true},
  {id: 2, skill: 'Can Shoot From the Hip', aquired: false},
  {id: 3, skill: 'Sass and Bourbon', aquired: 'most days'},
  {id: 4, skill: 'Remembers to Add "Defer" to script tags', aquired: false},
  {id: 5, skill: 'Can make Neon CSS', aquired: true},
  {id: 6, skill: 'Can successfully route HTTP Requests', aquired: false},
  {id: 7, skill: 'Can obsess over VS Code Themes', aquired: true}
];

module.exports = {
  getAll,
  getOne, 
  create,
  deleteOne,
  update
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find(skill => skill.id === parseInt(id));``
}

function create(skill) {
  skill.id = Date.now() % 10000000;
  skill.aquired = false;
  skills.push(skill);
}

function deleteOne(id) {
  const i = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(i, 1);
}

function update(id, updateSkill) {
  const skill = skills.find( skill => skill.id === parseInt(id));
  // Object.assign(targetObj, mergeObj1, mergeObj2, ... and so on)
  Object.assign(skill, updateSkill);
}