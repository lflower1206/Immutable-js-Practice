import Constant from '../Constant';
import Immutable, {Map} from 'immutable';

export default class MapPractice {
    static setMap() {
        let map1 = Map({});

        map1.set('a', 1);
        map1.set('b', 2);
        map1.set('c', 3);

        console.log(map1);
    }

    static setMap2() {
        let map1 = Map({});

        map1 = map1.set('a', 1);
        map1 = map1.set('b', 2);
        map1 = map1.set('c', 3);

        console.log(map1);
    }

    static setMap3() {
        let map1 = Map({a: 1, b: 2, c: 3, d: 4});
        let map2 = map1.set('b', 4);

        console.log(map1);
        console.log(map2);
        console.log('is map1 equal map2 ? %s', map1 === map2);
    }

    static setMap4() {
        let map1 = Map({a: 1, b: 2, c: 3, d: 4});
        let map2 = map1.set('b', 2);

        console.log(map1);
        console.log(map2);
        console.log('is map1 equal map2 ? %s', map1 === map2);
    }

    static setInMap() {

        let map1 = Immutable.fromJS(Constant.nestObj);
        console.log(map1);
        console.log(map1.setIn(['a', 'a3', 'a33'], 133));
    }

    static setInMapOnWrongWay() {

        try {
            let map1 = Map(Constant.nestObj);
            console.log(map1);
            console.log(map1.setIn(['a', 'a3', 'a33'], 133));
        } catch(e) {
            throw e;
        }
    }
}
