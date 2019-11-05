import React, { Component } from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom';
export default class About extends Component {
    render() {
        return (
            <div>
                <div style={{background:'white',width:'1100px'}}>
                    <div style={{background:'gray',width:'1100px',height:'40px',lineHeight:'40px'}}>
                        <Link to='/home'>主页</Link>/关于
                    </div>
                    <div>
                        <h1>关于</h1>
                        <hr/>
                        <ul className='about'>
                            <li>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</li>
                            <li>CNode 社区由热爱 Node.js 的工程师发起，目前已吸引了互联网各公司的专业技术人员，我们非常欢迎更多对 Node.js 感兴趣的朋友。</li>
                            <li>CNode 的 SLA 保证是，一个9，即 90.000000%。</li>
                            <li>社区目前由 @alsotang 在维护，有问题请联系：https://github.com/alsotang</li>
                            <li>请关注我们的官方微博：http://weibo.com/cnodejs</li>
                        </ul>
                        <h1>移动客户端</h1>
                        <ul className='about'>
                            <li>客户端由 @soliury 开发维护。</li>
                            <li>源码地址： https://github.com/soliury/noder-react-native 。</li>
                            <li>立即体验 CNode 客户端，直接扫描页面右侧二维码。</li>
                            <li>另，安卓用户同时可选择：https://github.com/TakWolf/CNode-Material-Design ，这是 Java 原生开发的安卓客户端。</li>
                        </ul>
                        <h1>友情链接</h1>
                        <h1>LOGO</h1>
                        <ul className='about'>
                            <li>白底： /public/images/cnodejs.svg</li>
                            <li>黑底： /public/images/cnodejs_light.svg</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
