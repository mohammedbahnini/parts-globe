import React from 'react';
import menuData from '../../../../public/static/data/menu';
import Menu from '../../../elements/menu/Menu';
import { connect } from 'react-redux';

const MenuCategories = (props) => {
    const { langData } = props;
    return (
        <Menu data={langData.product_categories} className="menu--dropdown" />
    )
}

const mapStateToProps = state => {
    return state.lang;
}

export default connect(mapStateToProps)(MenuCategories);
