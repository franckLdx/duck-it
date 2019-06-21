var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { mapParameters } from './parameters';
const base_url = 'https://api.duckduckgo.com/';
export function duckIt(searchQuery, searchOption = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = makeQueryString(searchQuery, searchOption);
        return axios.get(base_url, {
            params: queryString
        });
    });
}
const defaultSearchOption = {
    appName: 'duck-it',
    format: 'json'
};
function makeQueryString(searchQuery, userOption) {
    const option = Object.assign({}, defaultSearchOption, userOption);
    return Object.entries(option).reduce((acc, [userKey, userValue]) => {
        const [actualKey, actualValue] = mapParameters(userKey, userValue);
        acc[actualKey] = actualValue;
        return acc;
    }, { q: searchQuery });
}
