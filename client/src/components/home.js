import React, { Component } from 'react';
import { Button } from 'antd';
import timeout from '../helpers/timeout';
import api from '../api';

export default class Home extends Component {

    state = {}

    componentDidMount() {
        this.init()
    }

    async init() {
        const id = 'wedwefr';
        const data = {
            name: 'egg',
            value: [1,2,3,4,4],
            data: {
                a: 2,
                b: 3
            }
        }
        const r = await api.test(id, data);
        console.log('request', r)
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.time)}
                <Button type="primary">确定</Button>
            </div>
        )
    }
}
