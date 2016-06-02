/*
 * 使用react处理简单的事件。
 * input , click
 * */

var TestClickComponent = React.createClass({
    handle: function (event) {
        //获取tip
        var tip = this.refs.tip;
        
        tip.style.display === 'none' ?
            tip.style.display = 'inline' :
            tip.style.display = 'none';
        
        event.stopPropagation();
        event.preventDefault();
    },
    render: function () {
        return (
            <div>
                <button onClick={this.handle}>隐藏|显示</button>
                <span ref="tip">测试点击</span>
            </div>
        )
    }
});

var TestInputComponent = React.createClass({
    getInitialState: function () {
        return {
            inputComponent: 'hello world'
        }
    },
    changeHandle: function (event) {
        this.setState({
            inputComponent: event.target.value
        });
        
        event.preventDefault();
        event.stopPropagation();
    },
    render: function () {
        return (
            <div>
                <input type="text" onChange={this.changeHandle}/><span>{this.state.inputComponent}</span>
            </div>
        )
    }
});


ReactDOM.render(
    <div>
        <TestClickComponent/>
        <TestInputComponent/>
    </div>, document.getElementById('example'));