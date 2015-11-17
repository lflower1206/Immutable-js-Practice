import Constant from '../Constant';
import Immutable, {Map} from 'immutable';

export default class MapPractice {

    static simpleObj = {a: 1, b: 2, c: 3, d: 4};

    static nestObj = { 
                        a: {
                            a1: 11, 
                            a2: 12,
                            a3: {
                                a31: 131,
                                a32: 132,
                            } 
                        },
                        b: 2,
                        c: 3
                    };

    static initMap() {
        let map1 = Map(this.simpleObj);

        console.log('map1 : %s', map1);
    }

    static initMap2() {
        let map1 = Map(this.nestObj);

        console.log('map1 : %s', map1);
    }

    static initMap3() {
        let map1 = Immutable.fromJS(this.nestObj);

        console.log('map1 : %s', map1);
    }

    static setMap() {
        let map1 = Map({});

        map1.set('a', 1);
        map1.set('b', 2);
        map1.set('c', 3);

        console.log('map1 : %s', map1);
    }

    static setMap2() {
        let map1 = Map({});

        map1 = map1.set('a', 1);
        map1 = map1.set('b', 2);
        map1 = map1.set('c', 3);

        console.log('map1 : %s', map1);
    }

    static setMap3() {
        let map1 = Map(this.simpleObj);
        let map2 = map1.set('b', 4);

        console.log('map1 : %s', map1);
        console.log('map2 : %s', map2);
        console.log('is map1 equal map2 ? %s', map1 === map2);
    }

    static setMap4() {
        let map1 = Map(this.simpleObj);
        let map2 = map1.set('b', 2);

        console.log('map1 : %s', map1);
        console.log('map2 : %s', map2);
        console.log('is map1 equal map2 ? %s', map1 === map2);
    }

    static setInMap() {

        let map1 = Immutable.fromJS(this.nestObj);

        console.log(map1);
        console.log(map1.setIn(['a', 'a3', 'a33'], 133));
    }

    static setInMapInWrongWay() {

        try {
            let map1 = Map(this.nestObj);
            console.log(map1);
            console.log(map1.setIn(['a', 'a3', 'a33'], 133));
        } catch(e) {
            console.error(e);
        }
    }

    static deleteMap() {

        let map1 = Immutable.fromJS(this.nestObj);

        console.log(map1);
        console.log(map1.delete('c'));
    }

    static deleteInMap() {

        let map1 = Immutable.fromJS(this.nestObj);

        console.log(map1);
        console.log(map1.deleteIn(['a', 'a3']));
    }

    static deleteInMapInWrongWay() {

        try {
            let map1 = Map(this.nestObj);

            console.log(map1);
            console.log(map1.deleteIn(['a', 'a3']));
        } catch(e) {
            console.error(e);
        }
    }

    static clearMap() {

        let map1 = Immutable.fromJS(this.nestObj);

        console.log(map1);
        console.log(map1.clear());
    }

    static updateMap() {

        // update(updater: (value: Map<K, V>) => Map<K, V>): Map<K, V>
        // update(key: K, updater: (value: V) => V): Map<K, V>

        let map1 = Map(this.simpleObj);
        let map2 = map1.update(map1.findKey((value, key) => {
            return value === 3;
        }), (item) => {
            return item * 2;
        });

        let map3 = map1.update('d', value => {
            return value * 2;
        });

        console.log(map1);
        console.log(map2);
        console.log(map3);

    }
}
