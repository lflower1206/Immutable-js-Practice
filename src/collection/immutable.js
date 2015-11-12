import Constant from '../Constant';
import Immutable from 'immutable';

export default class ImmutablePractice {

    static fromJS() {
        let map1 = Immutable.fromJS(Constant.nestObj);
        console.log(map1);
    }

    static initMap() {
        let map1 = Map(Constant.nestObj);
        console.log(map1);
    }
}
