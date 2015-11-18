import Immutable, {Seq} from 'immutable';

export default class SeqPractice {

    static createSeq() {
        console.log('Seq([1, 2, 3, 4, 5] : %s', Seq([1, 2, 3, 4, 5]));
        console.log('Seq([1, 2, 3, 4, 5] : %s', Seq({a: 1, b: 2, c: 3, d: 4}));
        console.log('Seq.of(1, 2, 3, 4, 5) : %s', Seq.of(1, 2, 3, 4, 5));
    }

    static lazyFilterTest() {
        let seq = Seq([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

        let oddSeq = seq.filter((value, index) => {
            console.log('value % 2 !== 0 : %s', value % 2 !== 0);
            return value % 2 !== 0;
        });

        console.log('finish filter');
        console.log(oddSeq.toJS());
    }
}
