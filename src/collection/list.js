import Constant from '../Constant';
import Immutable, {List} from 'immutable';

export default class ListPractice {
    static createList() {
        console.log('List([1, 2, 3, 4, 5]) : %s', List([1, 2, 3, 4, 5]));
        console.log('List.of(1, 2, 3, 4, 5) : %s', List.of(1, 2, 3, 4, 5));

        let list = List([1, 2, 3, 4, 5]);
        console.log('list.set(5, 6) : %s', list.set(5, 6));
        console.log('list.set(-2, 6) : %s', list.set(-2, 6));
        console.log('list.push(6) : %s', list.push(6));
        console.log('list.pop() : %s', list.pop());
        console.log('list.unshift(0) : %s', list.unshift(0));
        console.log('list.shift() : %s', list.shift());
    }

    static setList() {
        let list = List(Constant.simpleList);
        
        console.log('origin list : \t\t%s', list);
        console.log('list.set(5, 6) : \t%s', list.set(5, 6));
        console.log('list.set(0, 0) : \t%s', list.set(0, 0));
        console.log('list.set(-1, -1) : \t%s', list.set(-1, -1));
        console.log('list.set(-2, -2) : \t%s', list.set(-2, -2));
    }

    static popAndShiftList() {
        let list = List(Constant.simpleList);

        console.log('origin list : \t\t%s', list);
        console.log('list.push(6) : \t\t%s', list.push(6));
        console.log('list.pop() : \t\t%s', list.pop());
        console.log('list.unshift(0) : \t%s', list.unshift(0));
        console.log('list.shift() : \t\t%s', list.shift());
    }
}
