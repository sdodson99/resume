function UMLClassFunction(name, returnType, onClick) {
    this.name = name
    this.returnType = returnType
    this.onClick = onClick

    this.clone = function() {
        return Object.assign({}, this);
    }
}

export default UMLClassFunction