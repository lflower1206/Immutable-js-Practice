import Immutable, {List} from 'immutable';

export default class ListPractice {

    static simpleList = [1, 2, 3, 4, 5];

    static createList() {
        console.log('List([1, 2, 3, 4, 5]) : %s', List(this.simpleList));
        console.log('Immutable.fromJS([1, 2, 3, 4, 5]) : %s', Immutable.fromJS(this.simpleList));
        console.log('List.of(1, 2, 3, 4, 5) : %s', List.of(1, 2, 3, 4, 5));
    }

    static setList() {
        let list = List(this.simpleList);
        
        console.log('origin list : \t\t%s', list);
        console.log('list.set(5, 6) : \t%s', list.set(5, 6));
        console.log('list.set(0, 0) : \t%s', list.set(0, 0));
        console.log('list.set(-1, -1) : \t%s', list.set(-1, -1));
        console.log('list.set(-2, -2) : \t%s', list.set(-2, -2));
    }

    static popList() {
        let list = List(this.simpleList);

        console.log('origin list : \t\t%s', list);
        console.log('list.push(6) : \t\t%s', list.push(6));
        console.log('list.pop() : \t\t%s', list.pop());
    }

    static shiftList() {
        let list = List(this.simpleList);

        console.log('origin list : \t\t%s', list);
        console.log('list.unshift(0) : \t%s', list.unshift(0));
        console.log('list.shift() : \t\t%s', list.shift());
    }

    static deleteList() {
        let list1 = List(this.simpleList);
        let list2 = list1.delete(2);

        console.log(list1);
        console.log(list2);
    }

    static updatList() {
        let list1 = List(this.simpleList);
        let list2 = list1.update(2, value => {
            return value * 2;
        });
        let list3 = list1.update(2, value => {
            return value;
        });

        console.log(list1);
        console.log(list2);
        console.log('is list1 equal list3 ? %s', list1 === list3);
    }

    static mergeList() {
        let list1 = List(this.simpleList);
        let list2 = List([1, 3, 5]);
        let list3 = list1.merge(list2);

        console.log(list1);
        console.log(list2);
        console.log(list3);
    }

    static mergeWithList() {
        let list1 = List(this.simpleList);
        let list2 = List([1, 3, 5]);
        let list3 = list1.mergeWith((prev, next, index) => {
            return prev + next;
        }, list2);

        console.log(list1);
        console.log(list2);
        console.log(list3);
    }

    static setSize() {
        let list1 = List(this.simpleList);
        let list2 = list1.setSize(7);
        let list3 = list1.setSize(3);

        console.log(list1);
        console.log(list2);
        console.log(list3);
    }
}
