import _ from 'lodash';
import i18n from '../../assets/localization/en.json'

const t = (stringPath) => {
    const paths = stringPath.split('.'),
        translate = _.get(i18n, stringPath, paths[paths.length - 1]);

    return translate;
};

export default t;