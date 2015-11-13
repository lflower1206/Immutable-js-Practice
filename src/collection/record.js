import Immutable, {Record} from 'immutable';
import Constant from '../Constant';

export default class RecordPractice {
    static createRecord() {
        var ABRecord = Record(Constant.simpleObj);

        var testRecord = new ABRecord();

        console.log('Record : %j', testRecord);

        testRecord = testRecord.set('b', 5);

        console.log('Record : %j', testRecord);
        console.log('Record.get(\'b\') : %j', testRecord.get('b'));

        testRecord = testRecord.remove('b');

        console.log('Record.get(\'b\') : %j', testRecord.get('b'));
        console.log('Record.get(\'d\') : %j', testRecord.get('d'));

        try {
            testRecord = testRecord.set('d', 4);
        } catch (e) {
            console.error(e);
        }
    }

    static createRecord2() {
        var ABRecord = Record(Constant.nestObj);

        var testRecord = new ABRecord();

        console.log('Record : %j', testRecord);

        testRecord = testRecord.set('a', 4);

        console.log('testRecord.get(\'a\') : %j', testRecord.get('a'));

        testRecord = testRecord.set('a', {a2: 2});

        console.log('testRecord.get(\'a\') : %j', testRecord.get('a'));
    }
}
