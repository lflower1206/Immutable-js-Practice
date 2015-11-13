import Constant from '../Constant';
import Immutable, {Seq} from 'immutable';

export default class SeqPractice {
    static createSeq() {
        console.log('Seq([1, 2, 3, 4, 5] : %s', Seq([1, 2, 3, 4, 5]));
        console.log('Seq([1, 2, 3, 4, 5] : %s', Seq(Constant.simpleObj));
        console.log('Seq.of(1, 2, 3, 4, 5) : %s', Seq.of(1, 2, 3, 4, 5));
    }
}
