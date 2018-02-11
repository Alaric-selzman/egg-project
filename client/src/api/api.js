
const config = {
    baseUrl: 'http://127.0.0.1:7001/api',
    allowResponseStatus: /^\d\d\d$/,
}

const ERROR_MESSAGE = '网路错误';

export default class BaseApi {
    constructor() {
        this.config = config;
    }

    get(url, params, opts) {
        return this.requestWithoutBody('GET', url, params, opts);
    }

    async fetch(...args) {
        try {
            return await fetch(...args);
        } catch(e) {
            throw new Error(ERROR_MESSAGE);
        }
    }

    async getResponseData(resp) {
        const r = await resp.json();
    }

    async requestWithoutBody(method, api, query, opts = {}) {
        const url = this.url(api, query);
        const headers = this.setHeaders();
        const resp = await this.fetch(url, {
            method, ...opts, headers,
            credentials: 'include',
        });
        if(!this.config.allowResponseStatus.test(resp.status)) {
            const e = new Error(ERROR_MESSAGE);
            e.status = resp.status;
            throw e;
        }
        const data = await this.getResponseData(resp);
    }

    setHeaders() {
        return {};
    }

    url(baseUrl, query) {
        const apiBase = this.config.baseUrl || '';
        const qs = query && this.queryString(query);
        const url = qs ? `${baseUrl}?${qs}` : `${baseUrl}`;
        return `${apiBase}${url}`;
    }

    queryString(query) {
        const str = new URLSearchParams();
        for(const key in query) {
            if(query[key] !== undefined && query[key] !== null) {
                let val;
                if(typeof query[key] === 'object') {
                    val = JSON.stringify(query[key]);
                } else {
                    val = `${query[key]}`;
                }
                str.append(key, val)
            }
        }
        return str.toString();
    }

}
