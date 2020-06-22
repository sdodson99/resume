function UMLClassFunction(name, returnType, link) {
  this.name = name;
  this.returnType = returnType;
  this.link = link;

  this.clone = () => ({ ...this });
}

export default UMLClassFunction;
