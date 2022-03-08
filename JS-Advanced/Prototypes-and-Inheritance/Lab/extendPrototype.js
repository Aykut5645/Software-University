function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Alien';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}