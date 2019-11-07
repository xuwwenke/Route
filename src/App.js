import React, { Component} from 'react';
import {HashRouter as Router,Route} from 'react-router-dom'
import Header from './components/header'
import Home from './container/Home';
import Api from './container/Api';
import Start from './container/Start';
import About from './container/About';
import SatrtIn from './container/SatrtIn';
import StartUp from './container/StartUp';
import Detail from './components/Detail'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className="main">
                        <div className="content"> 
                            <Route path='/home' component={Home}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/start' component={Start}/>
                            <Route path='/about' component={About}/>
                            <Route path='/startup' component={StartUp}/>
                            <Route path='/startIn' component={SatrtIn}/>
                            <Route path='/topics' component={Detail}/>
                        </div>
                        <div className="sider"> 
                            <span className='spa'>请</span>
                            <span className='spa'>老</span>
                            <span className='spa'>师</span>
                            <span className='spa'>多</span>
                            <span className='spa'>给</span>
                            <span className='spa'>点</span>
                            <span className='spa'>分</span>
                            <span className='spa'>吧</span>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
