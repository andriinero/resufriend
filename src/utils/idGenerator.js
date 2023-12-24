export default class idGenerator {
    static #id = 0;
    
    static getNewId() {
        return this.#id++;
    } 

    static reset() {
        this.#id = 0;
    }
}