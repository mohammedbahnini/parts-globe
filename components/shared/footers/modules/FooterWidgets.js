import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (

    <div className="ps-footer__widgets">

        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Contact us</h4>
            <div className="widget_content">
                <p className="call-us">
                Weekdays : 10 a.m. - 7 p.m. <br/>
                Sat .:  10 a.m. - 4 p.m.
                </p>
                <h3 className="company-number">+7 (987) 254-17-18</h3>
                <p className="company-adress">
                    г. Уфа, ул.Рихарда Зорге, 8 <br />
                    <a href="mailto:info@era-auto.ru">info@era-auto.ru</a>
                </p>
               
            </div>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Quick links</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/blank">
                        <a>Policy</a>
                    </Link>
                </li>

                <li>
                    <Link href="/page/blank">
                        <a>Term & Condition</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Term & Condition</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Shipping</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Return</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/faqs">
                        <a>FAQs</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Company</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/about-us">
                        <a>About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Affilate</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Career</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/contact-us">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Bussiness</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/page/about-us">
                        <a>Our Press</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/checkout">
                        <a>Checkout</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/user-information">
                        <a>My account</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                        <a>Shop</a>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
);

export default FooterWidgets;
