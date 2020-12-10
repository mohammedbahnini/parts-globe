import React from 'react';

import DefaultLayout from '../components/layouts/DefaultLayout';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import BreadCrumb from '../components/elements/BreadCrumb';
import Register from '../components/Register';
import { connect } from 'react-redux';


const RegisterPage = (props) => {
    const { breadcrumb } = props;
    console.log(breadcrumb);
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />

            <main id="homepage-1">
                <BreadCrumb breacrumb={breadcrumb} />
                <Register />
            </main>
            <FooterFullwidth />
        </div>
    )
}
function mapStateToProps(state) {
    return state.lang.langData.register_page;
}

export default connect(mapStateToProps)(RegisterPage);
