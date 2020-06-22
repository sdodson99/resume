function Skill(name, imageUri, subSkills) {
  this.name = name;
  this.imageUri = imageUri;
  this.subSkills = subSkills;
}

Skill.fromJSON = function (json) {
  return new Skill(json.name, json.image, json.subSkills);
};

export default Skill;
