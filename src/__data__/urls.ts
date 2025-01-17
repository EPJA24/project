import { getNavigations, getNavigationsValue } from '@ijl/cli';
import pkg from '../../package.json';

const baseUrl = getNavigationsValue(`${pkg.name}.main`);
const navs = getNavigations();
const makeUrl = (url) => baseUrl + url;

export const URLs = {
    baseUrl,
    auth: {
        url: makeUrl(navs[`link.${pkg.name}.auth`])
    }
};
