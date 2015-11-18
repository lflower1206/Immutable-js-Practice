import Immutable, {Record} from 'immutable';

export default class RecordPractice {

    static nestObj = { a: {
                        a1: 11, 
                        a2: 12,
                        a3: {
                            a31: 131,
                            a32: 132,
                        } 
                    },
                    b: 2,
                    c: 3};

    static createRecord() {
        var TestRecord = Record({a: 1, b: 2, c: 3, d: 4});

        var testRecord = new TestRecord({a: 2, b: 4, c: 6, d: 8});

        console.log(testRecord);

        testRecord = testRecord.set('b', 5);

        console.log('Record.set(\'b\', 5) : %s', testRecord);
        console.log('Record.get(\'b\') : %s', testRecord.get('b'));

        testRecord = testRecord.remove('b');

        console.log('Record.get(\'b\') : %s', testRecord.get('b'));

        console.log('Record.get(\'e\') : %s', testRecord.get('e'));

        try {
            testRecord = testRecord.set('e', 4);
        } catch (e) {
            console.error(e);
        }

        testRecord = testRecord.set('a', 9);
        testRecord = testRecord.set('b', 8);

        console.log(testRecord);
        console.log(testRecord.clear());
    }

    static createRecord2() {
        var TestRecord = Record(this.nestObj);

        var testRecord = new TestRecord();

        console.log(testRecord);

        testRecord = testRecord.set('a', 4);

        console.log('testRecord.get(\'a\') : %s', testRecord.get('a'));

        testRecord = testRecord.set('a', {a2: 2});

        console.log('testRecord.get(\'a\') : %s', testRecord.get('a'));
    }
}
