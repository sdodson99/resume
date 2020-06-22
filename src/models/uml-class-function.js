function UMLClassFunction(name, returnType, link) {
  this.name = name;
  this.returnType = returnType;
  this.link = link;

  this.clone = function () {
    return Object.assign({}, this);
  };
}

export default UMLClassFunction;
