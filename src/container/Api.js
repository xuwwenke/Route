import React, { Component } from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom';
export default class Home extends Component {
    render() {
        return (
            <div>
                <div style={{background:'white',width:'1100px'}}>
                    <div style={{background:'gray',width:'1100px',height:'40px',lineHeight:'40px'}}>
                        <Link to='/home/all'>主页</Link>/API
                    </div>
                    <ul className='about'>
                        <li>以下 api 路径均以 https://cnodejs.org/api/v1 为前缀</li>
                        <li>update 2019-03-21: 涉及发帖和发评论的接口都已经下线了，太多人为了测试客户端乱发帖了。</li>
                    </ul>
                    <h1 style={{marginLeft:'20px'}}>主题</h1>
                    <hr/>
                    <h3 style={{marginTop:'20px',marginLeft:'20px'}}>get /topics 主题首页</h3><hr/>
                    <span style={{marginTop:'10px',fontSize:'15px',marginLeft:'20px'}}>接收 get 参数</span>
                    
                    <h3 style={{marginTop:'20px',marginLeft:'20px'}}>get /topic/:id 主题详情</h3><hr/>
                    <span style={{marginTop:'10px',fontSize:'15px',marginLeft:'20px'}}>接收 get 参数</span>

                    <h1 style={{marginLeft:'20px'}}>主题收藏</h1>
                    <h3 style={{marginTop:'20px',marginLeft:'20px'}}>post /topic_collect/collect 收藏主题</h3><hr/>
                    <span style={{marginTop:'10px',fontSize:'15px',marginLeft:'20px'}}>接收 post 参数</span>
                    <h3 style={{marginTop:'20px',marginLeft:'20px'}}>post /topic_collect/de_collect 取消主题</h3><hr/>
                    <span style={{marginTop:'10px',fontSize:'15px',marginLeft:'20px'}}>接收 post 参数</span>

                    <h3 style={{marginTop:'20px',marginLeft:'20px'}}>get /topic_collect/:loginname 用户所收藏的主题</h3><hr/>
                    <span style={{marginTop:'10px',fontSize:'15px',marginLeft:'20px'}}>示例：<a>/api/v1/topic_collect/alsotang</a></span>

                    <h1 style={{marginLeft:'20px'}}>用户</h1>
                    <h3 style={{marginTop:'20px',marginLeft:'20px'}}>get /user/:loginname 用户详情</h3><hr/>
                    <span style={{marginTop:'10px',fontSize:'15px',marginLeft:'20px'}}>示例：<a>/api/v1/user/alsotang</a></span>

                    <h3 style={{marginTop:'20px',marginLeft:'20px'}}>post /accesstoken 验证 accessToken 的正确性</h3><hr/>
                    <span style={{marginTop:'10px',fontSize:'15px',marginLeft:'20px'}}>接收 post 参数</span>

                    <h1 style={{marginLeft:'20px'}}>消息通知</h1>
                    <h3 style={{marginTop:'20px',marginLeft:'20px'}}>get /message/count 获取未读消息数</h3><hr/>
                    <span style={{marginTop:'10px',fontSize:'15px',marginLeft:'20px'}}>接收 get 参数</span>

                    <h3 style={{marginTop:'20px',marginLeft:'20px'}}>get /messages 获取已读和未读消息</h3><hr/>
                    <span style={{marginTop:'10px',fontSize:'15px',marginLeft:'20px'}}>接收 get 参数</span>

                    <h3 style={{marginTop:'20px',marginLeft:'20px'}}>post /message/mark_all 标记全部已读</h3><hr/>
                    <span style={{marginTop:'10px',fontSize:'15px',marginLeft:'20px'}}>接收 post 参数</span>

                    <h3 style={{marginTop:'20px',marginLeft:'20px'}}>post /message/mark_one/:msg_id 标记单个消息为已读</h3><hr/>
                    <span style={{marginTop:'10px',fontSize:'15px',marginLeft:'20px'}}>请求示例：<a>/message/mark_one/58ec7d39da8344a81eee0c14</a></span><hr/>
                    <span style={{marginTop:'10px',fontSize:'15px',marginLeft:'20px'}}>接收 post 参数</span>

                    <h1 style={{marginLeft:'20px'}}>知识点</h1>
                    <span style={{marginTop:'10px',fontSize:'15px',marginLeft:'20px'}}>如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。 建议各移动端应用使用手机扫码的形式登录，验证使用 /accesstoken 接口，登录后长期保存 accessToken。</span>
                </div>
            </div>
        )
    }
}