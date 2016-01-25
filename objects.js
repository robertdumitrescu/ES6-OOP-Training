"use strict";

var Calculus = Calculus || {};

/**
 * Sub - namespace
 * @namespace trigonometry
 * */
Calculus.trigonometry = {};

/**
 *
 */
class triangle {
    /**
     * @param perimeter
     * @param sideSize
     */
    constructor (perimeter, sideSize) {
        this._perimeter = perimeter;
        this._sideSize = sideSize;
        console.log("Instance created");
    }

    /**
     * @returns {*}
     */
    get perimeter() {
        return this._perimeter;
    }

    /**
     * @param newPerimeterValue
     */
    set perimeter(newPerimeterValue) {
        this._perimeter = newPerimeterValue;
    }

    /**
     * @returns {*}
     */
    get sideSize() {
        return this._sideSize;
    }

    /**
     * @param newSideSizeValue
     */
    set sideSize(newSideSizeValue) {
        this._sideSize = newSideSizeValue;
    }

    /**
     * @returns {number}
     */
    calcRelativeArea(){
        return this._sideSize * 3;
    }

    calcSum(){
        return this._sideSize * 9;
    }

    /**
     * @description
     * @param newSideSize
     * @returns {number}
     */
    static staticCalcAbsoluteArea(newSideSize){
        return newSideSize * 3;
    }

    calcAbsoluteArea(newSideSize){
        return newSideSize * 3;
    }
}

class specialTriangle extends triangle {
    /**
     * @param perimeter
     * @param sideSize
     * @param name
     */
    constructor (perimeter, sideSize, name) {
        super();
        super.perimeter = perimeter;
        super.sideSize = sideSize;
        this._name = name;
        console.log("Child instance created");
    }

    /**
     * @returns {*}
     */
    get name() {
        return this._name;
    }

    /**
     * @param newSideSizeValue
     */
    set name(newNameValue) {
        this._name = newNameValue;
    }

    /**
     * @description A method with child relative data
     * @returns {*}
     */
    sayMyName () {
        return this._name;
    }

    /**
     * Getter for a property from parent
     * @returns {*}
     */
    getPerimeter () {
        return super.perimeter;
    }

    /**
     * @description Overwritten method from parent
     * @returns {string}
     */
    calcSum() {
        return "No need for that";
    }

    /**
     * @description Method defined to be available on class instances but without relative data
     * @param motherName
     * @returns {*}
     */
    sayMyMotherName(motherName){
        return motherName;
    }

    /**
     * @description static method that is available just on class without the instantiation
     * @param motherName
     * @returns {*}
     */
    static staticSayMyMotherName(motherName){
        return motherName;
    }
}

/**
 * @description The class that verify if the child classes implements the right methods
 * @class AbstractForm
 * @abstract
 */
class AbstractForm {
    constructor () {
        if(this.constructor === AbstractForm) {
            throw new TypeError("Cannot construct Abstract Class");
        } else {
            console.log("Abstract class called");
        }

        /**
         * The implementation process is available just for methods
         */
        if (this.calcArea === undefined) {
            throw new TypeError("You must implement the method. You must override method");
        }
    }

}

/**
 * @description The class that implements the AbstractClass
 * @class Square
 * @extends AbstractForm
 */
class Square extends AbstractForm {
    constructor(sideSize) {
        super();
        this._sideSize = sideSize;
    }

    /**
     * @description The getter for _sideSize private property
     * @returns {*}
     */
    get sideSize() {
        return this._sideSize;
    }

    /**
     * @description The setter for _sideSize private property
     * @param newSideSizeValue
     */
    set sideSize(newSideSizeValue) {
        this._sideSize = newSideSizeValue;
    }

    /**
     * @description The method that must be implemented from Abstract class (AbstractForm)
     * @returns {number}
     */
    calcArea(){
        return this._sideSize * this._sideSize;
    }
}


/**
 * Instantiations
 * @type {triangle}
 */
var triangle1 = new triangle(10, 20);
console.log(triangle1._perimeter);
console.log(triangle1._sideSize);
console.log(triangle1.calcRelativeArea());
console.log(triangle1.calcSum());
console.log(triangle1.calcAbsoluteArea(30));
console.log(triangle.staticCalcAbsoluteArea(60));

/**
 * @type {specialTriangle}
 */
var triangleTommy = new specialTriangle(10, 20, "Tommy");
console.log(triangleTommy._perimeter);
console.log(triangleTommy._sideSize);
console.log(triangleTommy._name);
console.log(triangleTommy.calcRelativeArea());
console.log(triangleTommy.calcSum());
console.log(triangleTommy.sayMyName());
console.log(triangleTommy.getPerimeter());
console.log(triangleTommy.sayMyMotherName("Elizabeth"));
console.log(specialTriangle.staticSayMyMotherName("Elizabeth"));

/**
 * @type {Square}
 */
var square1 = new Square(10);
console.log(square1._sideSize);
console.log(square1.calcArea());

//var abstractInstance = new AbstractForm(); // It will give you an error