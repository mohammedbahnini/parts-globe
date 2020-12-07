import React, { Component } from 'react';
import Link from 'next/link';
import { notification } from 'antd';
import Menu from '../../elements/menu/Menu';

import menuData from '../../../public/static/data/menu';
import CurrencyDropdown from '../headers/modules/CurrencyDropdown';
import LanguageSwicher from '../headers/modules/LanguageSwicher';
import { connect } from 'react-redux';

class NavigationDefault extends Component {
    constructor(props) {
        super(props);
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    render() {
        const { langData } = this.props;
        return (
            <nav className="navigation">
                <div className="ps-container">

                    <div className="navigation__left">
                        <div className="menu--product-categories">

                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                                <span> Catalogs</span>
                            </div>
                            <div className="menu__content">
                                {<Menu
                                    data={langData.product_categories}
                                    className="menu--dropdown"
                                />}
                            </div>
                        </div>
                    </div>

                    <div className="navigation__right">
                        {<Menu
                            data={langData.menuPrimary}
                            className="menu"
                        />}
                        <ul className="navigation__extra">
                            <li>
                                <LanguageSwicher />
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state =>{
    return state.lang;
}

export default connect(mapStateToProps)(NavigationDefault);
