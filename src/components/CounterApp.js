import {mobx,observable,computed} from 'mobx';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import DevTool from 'mobx-react-devtools';
import './style.less';

@observer
export default class Counter extends Component{
	constructor(props) {
		super(props);
	}
	render(){
		const {todoStore} = this.props;
		return (
			<div>
				<DevTool />
				<div className="container">
					<span onClick={()=>todoStore.changeNum('minu')} className="span l">-</span>
					{todoStore.count}
					<span onClick={()=>todoStore.changeNum('plus')} className="span r">+</span>
				</div>
			</div>
		)	
	}
}