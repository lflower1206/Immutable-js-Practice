import Immutable, {List, Map} from 'immutable';
import util from 'util';

export function listTest() {

    console.log('***** List Performance Test *****');

    let times = 10000;

    let originalArray = [];
    let copiedArray = [];
    let immutableArray = List([]);

    console.time('originalArray');

    for (let index = 0 ; index < times ; index++) {
        originalArray.push(index);
    }

    console.timeEnd('originalArray');



    console.time('copiedArray');

    for (let index = 0 ; index < times ; index++) {
        copiedArray = cloneArray(copiedArray);
        copiedArray.push(index);
    }

    console.timeEnd('copiedArray');



    console.time('immutableArray');

    for (let index = 0 ; index < times ; index++) {
        immutableArray.push(index);
    }

    console.timeEnd('immutableArray');

};

export function objectTest() {

    console.log('***** Object Performance Test *****');

    let times = 10000;

    let originalObject = [];
    let copiedObject = [];
    let immutableObject = Map({});

    console.time('originalObject');

    for (let index = 0 ; index < times ; index++) {
        originalObject[index] = index;
    }

    console.timeEnd('originalObject');



    console.time('copiedObject');

    for (let index = 0 ; index < times ; index++) {
        copiedObject = cloneObject(copiedObject);
        copiedObject[index] = index;
    }

    console.timeEnd('copiedObject');



    console.time('immutableObject');

    for (let index = 0 ; index < times ; index++) {
        immutableObject.set(index, index);
    }

    console.timeEnd('immutableObject');
}

function cloneArray(input) {
    return input.slice();
}

function cloneObject(obj) {
    return util._extend({}, obj);
}
