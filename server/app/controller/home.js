'use strict';

const Controller = require('egg').Controller;


module.exports = app => {

    class HomeController extends Controller {

        async index(ctx, next) {
            ctx.body = 'hi, eggs';
        }

        async testApi(ctx, next) {
            ctx.body = {
                masg: 'test'
            }
        }

    }

    return HomeController;
};
