import React, { Component } from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom';
export default class SatrtIn extends Component {
    render() {
        return (
            <div>
                <div style={{background:'white',width:'1100px',height:'300px'}}>
                    <div style={{background:'gray',width:'1100px',height:'40px',lineHeight:'40px'}}>
                        <Link to='/home/all'>主页</Link>/登录
                    </div>
                    <div style={{width:'900px',height:'60px',marginTop:'50px'}}>
                        <span style={{marginLeft:'200px'}}>用户名<input type='text' style={{width:'250px',height:'30px',marginLeft:'10px',border:'1px solid black',borderRadius:'5px'}}/></span>
                    </div>
                    {/* <br/> */}
                    <div style={{width:'900px',height:'60px'}}>
                        <span style={{marginLeft:'200px'}}>密码<input type='password' style={{width:'250px',height:'30px',marginLeft:'10px',border:'1px solid black',borderRadius:'5px'}}/></span>
                    </div>
                    <div style={{width:'900px',height:'60px'}}>
                        <Link to='/home/all'><button style={{background:'blue',color:'white',width:'60px',height:'40px',marginLeft:'200px',border:'blue'}}>登录</button></Link>
                        <Link><button style={{background:'blue',color:'white',width:'120px',height:'40px',marginLeft:'20px',border:'blue'}}>通过GitHub登录</button></Link>
                        <span style={{marginLeft:'20px'}}>忘记密码？</span>
                    </div>
                </div>
            </div>
        )
    }
}
