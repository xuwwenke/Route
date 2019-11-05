import React, { Component,useState,useEffect } from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom'
// import All from './All'
// import Good from './Good'
// import Share from './Share'
// import Job from './Jbo'
export default class Home extends Component {
    render() {
        let url=this.props.match.url//调到组件所控制的路径,可以通过路径拼接找到对应的组件
        return (
            <div>
                <div className='home'>
                    <Link to={url+'/all'}>全部</Link>
                    <Link to={url+'/good'}>精华</Link>
                    <Link to={url+'/ask'}>问答</Link>
                    <Link to={url+'/share'}>分享</Link>
                    <Link to={url+'/job'}>招聘</Link>
                    <Link to={url+'/test'}>客户端测试</Link>
                </div>
                <div>
                    <Route path={`${url}/all`} component={All}/>
                    <Route path={`${url}/good`} component={Good}/>
                    <Route path={`${url}/ask`} component={Ask}/>
                    <Route path={`${url}/share`} component={Share}/>
                    <Route path={`${url}/job`} component={Job}/>
                    <Route path={`${url}/test`} component={Test}/>
                </div>
            </div>
        )
    }
}

function useFetch(url){
    let [data,setData]=useState([]);
    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(res=>{
                setData(res.data)
            })
    })
    return data;
}
function All(){
    let [page,setPage]=useState(1);
    let data=useFetch('https://cnodejs.org/api/v1/topics?page='+page);
    return (
        <div className='all'>
            {
                data.map((item)=>
                <li key={item.id}>
                    <img src={item.author.avatar_url} style={{height:'40px',width:'40px',float:'left'}}/>
                    <li style={{width:'60px',height:'20px',border:'0',lineHeight:'20px',textAlign:'center',marginTop:'10px',marginLeft:'10px',fontSize:'12px'}}>{item.reply_count+'/'+item.visit_count}</li>
                    <button style={{background:'red',color:'white',lineHeight:'20px',textAlign:'center',marginTop:'10px',height:'20px',width:'40px',borderRadius:'5px',border:'red',marginLeft:'10px',marginRight:'10px'}}>{item.tab}</button>
                    <Link to={'/topics/'+item.id}>{item.title}</Link>
                </li>)
            }
            <button className='btn' onClick={()=>{setPage(page=1)}}>1</button>
            <button className='btn' onClick={()=>{setPage(page=2)}}>2</button>
            <button className='btn' onClick={()=>{setPage(page=3)}}>3</button>
            <button className='btn' onClick={()=>{setPage(page=4)}}>4</button>
            <button className='btn' onClick={()=>{setPage(page=5)}}>5</button>
            <button className='btn' onClick={()=>{setPage(page=6)}}>6</button>
            <button className='btn' onClick={()=>{setPage(page=7)}}>7</button>
            <button className='btn' onClick={()=>{setPage(page=8)}}>8</button>
            <button className='btn' onClick={()=>{setPage(page=9)}}>9</button>
            <button className='btn' onClick={()=>{setPage(page=10)}}>10</button>
        </div>
    )
    
}
function Good(){
    let [page,setPage]=useState(1);
    let data=useFetch('https://cnodejs.org/api/v1/topics?tab=good&page='+page);

    return (
        <div className='all'>
            {
                data.map((item)=>{
                    if(item.tab=='good'){
                        return (
                            <li key={item.id}>
                                <img src={item.author.avatar_url} style={{height:'40px',width:'40px',float:'left'}}/>
                                <li style={{width:'60px',height:'20px',border:'0',lineHeight:'20px',textAlign:'center',marginTop:'10px',marginLeft:'10px',fontSize:'12px'}}>{item.reply_count+'/'+item.visit_count}</li>
                                <button style={{background:'red',color:'white',lineHeight:'20px',textAlign:'center',marginTop:'10px',height:'20px',width:'40px',borderRadius:'5px',border:'red',marginLeft:'10px',marginRight:'10px'}}>{item.tab}</button>
                                <Link to={'/topics/'+item.id}>{item.title}</Link>
                            </li>
                        )
                    }
                })
            }
            <button className='btn' onClick={()=>{setPage(page=1)}}>1</button>
            <button className='btn' onClick={()=>{setPage(page=2)}}>2</button>
            <button className='btn' onClick={()=>{setPage(page=3)}}>3</button>
            <button className='btn' onClick={()=>{setPage(page=4)}}>4</button>
            <button className='btn' onClick={()=>{setPage(page=5)}}>5</button>
            <button className='btn' onClick={()=>{setPage(page=6)}}>6</button>
            <button className='btn' onClick={()=>{setPage(page=7)}}>7</button>
            <button className='btn' onClick={()=>{setPage(page=8)}}>8</button>
            <button className='btn' onClick={()=>{setPage(page=9)}}>9</button>
            <button className='btn' onClick={()=>{setPage(page=10)}}>10</button>
        </div>
    )
}

function Ask(){
    let [page,setPage]=useState(1);
    let data=useFetch('https://cnodejs.org/api/v1/topics?tab=ask&page='+page);
    return (
        <div className='all'>
            {
                data.map((item)=>{
                    if(item.tab=='ask'){
                        return (
                            <li key={item.id}>
                                <img src={item.author.avatar_url} style={{height:'40px',width:'40px',float:'left'}}/>
                                <li style={{width:'60px',height:'20px',border:'0',lineHeight:'20px',textAlign:'center',marginTop:'10px',marginLeft:'10px',fontSize:'12px'}}>{item.reply_count+'/'+item.visit_count}</li>
                                <button style={{background:'red',color:'white',lineHeight:'20px',textAlign:'center',marginTop:'10px',height:'20px',width:'40px',borderRadius:'5px',border:'red',marginLeft:'10px',marginRight:'10px'}}>{item.tab}</button>
                                <Link to={'/topics/'+item.id}>{item.title}</Link>
                            </li>
                        )
                    }
                })
            }
            <button className='btn' onClick={()=>{setPage(page=1)}}>1</button>
            <button className='btn' onClick={()=>{setPage(page=2)}}>2</button>
            <button className='btn' onClick={()=>{setPage(page=3)}}>3</button>
            <button className='btn' onClick={()=>{setPage(page=4)}}>4</button>
            <button className='btn' onClick={()=>{setPage(page=5)}}>5</button>
            <button className='btn' onClick={()=>{setPage(page=6)}}>6</button>
            <button className='btn' onClick={()=>{setPage(page=7)}}>7</button>
            <button className='btn' onClick={()=>{setPage(page=8)}}>8</button>
            <button className='btn' onClick={()=>{setPage(page=9)}}>9</button>
            <button className='btn' onClick={()=>{setPage(page=10)}}>10</button>
        </div>
    )
}

function Share(){
    let [page,setPage]=useState(1);
    let data=useFetch('https://cnodejs.org/api/v1/topics?tab=share&page='+page);
    return (
        <div className='all'>
            {
                data.map((item)=>{
                    if(item.tab=='share'){
                        return (
                            <li key={item.id}>
                                <img src={item.author.avatar_url} style={{height:'40px',width:'40px',float:'left'}}/>
                                <li style={{width:'60px',height:'20px',border:'0',lineHeight:'20px',textAlign:'center',marginTop:'10px',marginLeft:'10px',fontSize:'12px'}}>{item.reply_count+'/'+item.visit_count}</li>
                                <button style={{background:'red',color:'white',lineHeight:'20px',textAlign:'center',marginTop:'10px',height:'20px',width:'40px',borderRadius:'5px',border:'red',marginLeft:'10px',marginRight:'10px'}}>{item.tab}</button>
                                <Link to={'/topics/'+item.id}>{item.title}</Link>
                            </li>
                        )
                    }
                })
            }
            <button className='btn' onClick={()=>{setPage(page=1)}}>1</button>
            <button className='btn' onClick={()=>{setPage(page=2)}}>2</button>
            <button className='btn' onClick={()=>{setPage(page=3)}}>3</button>
            <button className='btn' onClick={()=>{setPage(page=4)}}>4</button>
            <button className='btn' onClick={()=>{setPage(page=5)}}>5</button>
            <button className='btn' onClick={()=>{setPage(page=6)}}>6</button>
            <button className='btn' onClick={()=>{setPage(page=7)}}>7</button>
            <button className='btn' onClick={()=>{setPage(page=8)}}>8</button>
            <button className='btn' onClick={()=>{setPage(page=9)}}>9</button>
            <button className='btn' onClick={()=>{setPage(page=10)}}>10</button>
        </div>
    )
}

function Job(){
    let [page,setPage]=useState(1);
    let data=useFetch('https://cnodejs.org/api/v1/topics?tab=job&page='+page);
    return (
        <div className='all'>
            {
                data.map((item)=>{
                    if(item.tab=='job'){
                        return (
                            <li key={item.id}>
                                <img src={item.author.avatar_url} style={{height:'40px',width:'40px',float:'left'}}/>
                                <li style={{width:'60px',height:'20px',border:'0',lineHeight:'20px',textAlign:'center',marginTop:'10px',marginLeft:'10px',fontSize:'12px'}}>{item.reply_count+'/'+item.visit_count}</li>
                                <button style={{background:'red',color:'white',lineHeight:'20px',textAlign:'center',marginTop:'10px',height:'20px',width:'40px',borderRadius:'5px',border:'red',marginLeft:'10px',marginRight:'10px'}}>{item.tab}</button>
                                <Link to={'/topics/'+item.id}>{item.title}</Link>
                            </li>
                        )
                    }
                })
            }
            <button className='btn' onClick={()=>{setPage(page=1)}}>1</button>
            <button className='btn' onClick={()=>{setPage(page=2)}}>2</button>
            <button className='btn' onClick={()=>{setPage(page=3)}}>3</button>
            <button className='btn' onClick={()=>{setPage(page=4)}}>4</button>
            <button className='btn' onClick={()=>{setPage(page=5)}}>5</button>
            <button className='btn' onClick={()=>{setPage(page=6)}}>6</button>
            <button className='btn' onClick={()=>{setPage(page=7)}}>7</button>
            <button className='btn' onClick={()=>{setPage(page=8)}}>8</button>
            <button className='btn' onClick={()=>{setPage(page=9)}}>9</button>
            <button className='btn' onClick={()=>{setPage(page=10)}}>10</button>
        </div>
    )
}

function Test(){
    let [page,setPage]=useState(1);
    let data=useFetch('https://cnodejs.org/api/v1/topics?tab=dev&page='+page);
    return (
        <div className='all'>
            {
                data.map((item)=>{
                    if(item.tab=='dev'){
                        return (
                            <li key={item.id}>
                                <img src={item.author.avatar_url} style={{height:'40px',width:'40px',float:'left'}}/>
                                <li style={{width:'60px',height:'20px',border:'0',lineHeight:'20px',textAlign:'center',marginTop:'10px',marginLeft:'10px',fontSize:'12px'}}>{item.reply_count+'/'+item.visit_count}</li>
                                <button style={{background:'red',color:'white',lineHeight:'20px',textAlign:'center',marginTop:'10px',height:'20px',width:'40px',borderRadius:'5px',border:'red',marginLeft:'10px',marginRight:'10px'}}>{item.tab}</button>
                                <Link to={'/topics/'+item.id}>{item.title}</Link>
                            </li>
                        )
                    }
                })
            }
            <button className='btn' onClick={()=>{setPage(page=1)}}>1</button>
            <button className='btn' onClick={()=>{setPage(page=2)}}>2</button>
            <button className='btn' onClick={()=>{setPage(page=3)}}>3</button>
            <button className='btn' onClick={()=>{setPage(page=4)}}>4</button>
            <button className='btn' onClick={()=>{setPage(page=5)}}>5</button>
            <button className='btn' onClick={()=>{setPage(page=6)}}>6</button>
            <button className='btn' onClick={()=>{setPage(page=7)}}>7</button>
            <button className='btn' onClick={()=>{setPage(page=8)}}>8</button>
            <button className='btn' onClick={()=>{setPage(page=9)}}>9</button>
            <button className='btn' onClick={()=>{setPage(page=10)}}>10</button>
        </div>
    )
}
