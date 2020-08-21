const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill, 
  create,
  delete: deleteSkill, 
  edit,
  update
};

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll() 
  });
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id), 
    skillNum: req.params.id
  });
}

function newSkill(req, res) {
  res.render('skills/new');
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {skill}) // not really being used but you never know
}

function update(req,res) {
  // check boxes is what?
  req.body.done = !!req.body.done;
  // Use Skill model to update the skill
  Skill.update(req.params.id, req.body);
  // Redirect because data has been updated
  res.redirect(`/skills/${req.params.id}`);
}