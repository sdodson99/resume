function UMLClassFunction(name, returnType, route) {
  this.name = name;
  this.returnType = returnType;
  this.route = route;

  this.clone = () => ({ ...this });
}

export default UMLClassFunction;
