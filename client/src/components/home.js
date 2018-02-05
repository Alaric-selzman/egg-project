import React, { Component } from 'react';
import { Button } from 'antd';
import timeout from '../helpers/timeout';

export default class Home extends Component {

    state = {}

    componentDidMount() {
        this.init()
    }

    async init() {
        await timeout(3000);
        this.setState({ time: new Date() })
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
