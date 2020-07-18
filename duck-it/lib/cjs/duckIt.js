"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.duckIt = void 0;
const axios_1 = require("axios");
const parameters_1 = require("./parameters");
const base_url = 'https://api.duckduckgo.com/';
function duckIt(searchQuery, searchOption = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryString = makeQueryString(searchQuery, searchOption);
        return axios_1.default.get(base_url, {
            params: queryString
        });
    });
}
exports.duckIt = duckIt;
const defaultSearchOption = {
    appName: 'duck-it',
    format: 'json'
};
function makeQueryString(searchQuery, userOption) {
    const option = Object.assign(Object.assign({}, defaultSearchOption), userOption);
    return Object.entries(option).reduce((acc, [userKey, userValue]) => {
        const [actualKey, actualValue] = parameters_1.mapParameters(userKey, userValue);
        acc[actualKey] = actualValue;
        return acc;
    }, { q: searchQuery });
}
