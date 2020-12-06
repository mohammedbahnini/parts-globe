import React, { Component } from 'react';
import { notification } from 'antd';
import { connect } from 'react-redux';
import { changeLang } from '../../../../store/lang/action';



class LanguageSwicher extends Component {
    constructor(props) {
        super(props);
    }

    changeLangague = (e,lang)=>{
        e.preventDefault();
        this.props.dispatch( changeLang(lang) );
    }
    render() {
        console.log(this.props);
        const { currentLang , langs } = this.props;
        const menuLangs = langs.filter( lang => lang.id !== currentLang.id);
        return (
            <div className="ps-dropdown language">
                <a href='#'  onClick={(e)=>this.changeLangague(e,currentLang.id)}>
                    <img src={`/static/img/flag/${currentLang.id}.png`} alt="" />
                    {currentLang.name}
                </a>
                <ul className="ps-dropdown-menu">
                    {menuLangs.map(lang =>{
                        return (
                            <li>
                                <a href='#'  onClick={(e)=>this.changeLangague(e,lang.id)}>
                                <img src={`/static/img/flag/${lang.id}.png`} alt="" />
                                    {lang.name}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return state.lang;
}

export default connect(mapStateToProps)(LanguageSwicher);
