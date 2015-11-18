import Immutable, {Map} from 'immutable';

export default class MapPractice {

    static simpleObj = {a: 1, b: 2, c: 3, d: 4};

    static nestObj = { 
                        a: {
                            a1: 11, 
                            a2: 12,
                            a3: {
                                a31: 131
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
        let map2 = Immutable.fromJS(this.nestObj);

        console.log('map1 : %s', map1);
        console.log('map2 : %s', map2);
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

        console.log('map1 : %s', map1);
        console.log(map1.setIn(['a', 'a3', 'a33'], 133));
    }

    static setInMapInWrongWay() {

        try {
            let map1 = Map(this.nestObj);
            console.log('map1 : %s', map1);
            console.log(map1.setIn(['a', 'a3', 'a33'], 133));
        } catch(e) {
            console.error(e);
        }
    }

    static deleteMap() {

        let map1 = Immutable.fromJS(this.nestObj);

        console.log('map1 : %s', map1);
        console.log(map1.delete('c'));
    }

    static deleteInMap() {

        let map1 = Immutable.fromJS(this.nestObj);

        console.log('map1 : %s', map1);
        console.log(map1.deleteIn(['a', 'a3']));
    }

    static deleteInMapInWrongWay() {

        try {
            let map1 = Map(this.nestObj);

            console.log('map1 : %s', map1);
            console.log(map1.deleteIn(['a', 'a3']));
        } catch(e) {
            console.error(e);
        }
    }

    static clearMap() {

        let map1 = Immutable.fromJS(this.nestObj);

        console.log('map1 : %s', map1);
        console.log(map1.clear());
    }

    static updateMap() {

        let map1 = Map(this.simpleObj);

        let map2 = map1.update('d', value => {
            return value * 2;
        });

        let map3 = map1.update('d', value => {
            return value;
        });

        let map4 = map1.update('e', value => {
            return value * 2;
        });

        let map5 = map1.update('e', 5, value => {
            return value * 2;
        });

        let map6 = map1.update('e', 5, value => {
            return value;
        });

        console.log('map1 : %s', map1);
        console.log('map2 : %s', map2);
        console.log('map3 : %s', map3);
        console.log('is map1 equal map3 ? %s', map1 === map3);
        console.log('map4 : %s', map4);
        console.log('map5 : %s', map5);
        console.log('map6 : %s', map6);
    }

    static updateInMap() {
        let map1 = Immutable.fromJS(this.nestObj);
        let map2 = map1.updateIn(['a', 'a3', 'a31'], value => {
            return value * 2;
        });
        let map3 = map1.updateIn(['d', 'd1'], value => {
            return value * 2;
        });
        let map4 = map1.updateIn(['d', 'd1'], 4, value => {
            return value * 2;
        });
        let map5 = map1.updateIn(['d', 'd1'], 4, value => {
            return value;
        });

        console.log('map1 : %s', map1);
        console.log('map2 : %s', map2);
        console.log('map3 : %s', map3);
        console.log('map4 : %s', map4);
        console.log('map5 : %s', map5);
        console.log('is map1 equal map5 ? %s', map1 === map5);
    }

    static mergeMap() {

        let map1 = Map(this.simpleObj);
        let map2 = {b: 40, a: 50, d: 60, e: 70};
        let map3 = Map(map2);
        let map4 = map1.merge(map2);
        let map5 = map1.merge(map3);
        let map6 = map1.merge(this.simpleObj);

        console.log('map1 : %s', map1);
        console.log('map2 : %s', map2);
        console.log('map4 : %s', map4);
        console.log('map5 : %s', map5);
        console.log('is map4 equal map5 ? %s', map4 === map5);
        console.log('is map4 equal map5 ? %s', Immutable.is(map4, map5));
        console.log('is map1 equal map6 ? %s', map1 === map6);
    }

    static mergeWithMap() {

        let map1 = Map(this.simpleObj);
        let map2 = Map({b: 40, a: 50, d: 60, e: 70});
        let map3 = map1.mergeWith((prev, next, key) => {
            // console.log('\t(%s, %s, %s)', prev, next, key);
            return prev + next;
        }, map2);

        console.log('map1 : %s', map1);
        console.log('map2 : %s', map2);
        console.log('map3 : %s', map3);

    }

    static mergeDeepMap() {
        let map1 = Immutable.fromJS({a: { x: 10, y: 10 }, b: { x: 20, y: 50 } });
        let map2 = {a: { x: 2 }, b: { y: 5 }, c: { z: 3 } };
        let map3 = Immutable.fromJS(map2);
        let map4 = map1.mergeDeep(map2);
        let map5 = map1.mergeDeep(map3);
        let map6 = map1.mergeDeep(map1);

        console.log('map1 : %s', map1);
        console.log('map3 : %s', map3);
        console.log('map4 : %s', map4);
        console.log('map5 : %s', map5);
        console.log('is map4 equal map5 ? %s', map4 === map5);
        console.log('is map4 equal map5 ? %s', Immutable.is(map4, map5));
        console.log('is map1 equal map6 ? %s', map1 === map6);
        console.log(map1.merge(map3));
        console.log(map1.mergeDeep(map3));
    }

    static mergeDeepWithMap() {
        let map1 = Immutable.fromJS({a: { x: 10, y: 10 }, b: { x: 20, y: 50 } });
        let map2 = Immutable.fromJS({a: { x: 2 }, b: { y: 5 }, c: { z: 3 } });
        let map3 = map1.mergeDeepWith((prev, next, key) => prev + next, map2);

        console.log('map1 : %s', map1);
        console.log('map2 : %s', map2);
        console.log('map3 : %s', map3);
    }
}
