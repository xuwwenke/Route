import React, { Component } from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom';
export default class Start extends Component {
    render() {
        return (
            <div>
                <div style={{background:'white',width:'1100px'}}>
                    <div style={{background:'gray',width:'1100px',height:'40px',lineHeight:'40px'}}>
                        <Link to='/home/all'>主页</Link>/Node.js新手入门
                    </div>
                    <h1 style={{marginLeft:'20px'}}>Node.js 入门</h1>
                    <hr/>
                    <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:'bolder'}}>《快速搭建 Node.js 开发环境以及加速 npm》</p><hr/>
                    <a style={{fontSize:'15px',marginLeft:'20px'}}>http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a>

                    <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:'bolder'}}>《Node.js 包教不包会》</p>
                    <a style={{fontSize:'15px',marginLeft:'20px'}}>https://github.com/alsotang/node-lessons</a>

                    <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:'bolder'}}>《ECMAScript 6入门》</p>
                    <a style={{fontSize:'15px',marginLeft:'20px'}}>http://es6.ruanyifeng.com/</a>

                    <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:'bolder'}}>《七天学会NodeJS》</p>
                    <a style={{fontSize:'15px',marginLeft:'20px'}}>https://github.com/nqdeng/7-days-nodejs</a>

                    <h1 style={{marginLeft:'20px'}}>Node.js 资源</h1>
                    <hr/>
                    <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:'bolder'}}>《前端资源教程》</p><hr/>
                    <a style={{fontSize:'15px',marginLeft:'20px'}}>https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a>

                    <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:'bolder'}}>《国内的npm镜像源》</p>
                    <a style={{fontSize:'15px',marginLeft:'20px'}}>http://cnpmjs.org/</a>

                    <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:'bolder'}}>《node weekly》</p>
                    <a style={{fontSize:'15px',marginLeft:'20px'}}>http://nodeweekly.com/issues</a>

                    <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:'bolder'}}>《node123-node.js中文资源导航》</p>
                    <a style={{fontSize:'15px',marginLeft:'20px'}}>https://github.com/youyudehexie/node123</a>

                    <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:'bolder'}}>《A curated list of delightful Node.js packages and resources》</p>
                    <a style={{fontSize:'15px',marginLeft:'20px'}}>https://github.com/sindresorhus/awesome-nodejs</a>

                    <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:'bolder'}}>《Node.js Books》</p>
                    <a style={{fontSize:'15px',marginLeft:'20px'}}>https://github.com/pana/node-books</a>

                    <h1 style={{marginLeft:'20px'}}>Node.js 名人</h1>
                    <p style={{marginTop:'20px',marginLeft:'20px',fontWeight:'bolder'}}>《名人堂》</p>
                    <a style={{fontSize:'15px',marginLeft:'20px'}}>https://github.com/cnodejs/nodeclub/wiki/名人堂</a>

                    <h1 style={{marginLeft:'20px'}}>Node.js 服务器</h1>
                    <span style={{fontSize:'15px',marginLeft:'20px'}}>新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean(https://www.digitalocean.com/)</span>
                </div>
            </div>
        )
    }
}
