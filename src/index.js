import {mobx,observable,computed} from 'mobx';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import Counter from './components/CounterApp';
import CounterStore from './stores/CounterStore';
let store = new CounterStore();
ReactDOM.render(
	<Counter todoStore={store} />,
	document.querySelector('#mount')
);
