import React from 'react';
import './breadcrums.css';
import breadcrum_arrow from '../../assets/breadcrum_arrow.png';

const Breadcrums = ({ product }) => {
    if (!product) {
        return (
            <div>
                <h1>Product not found</h1>
            </div>
        );
    }

    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Shop', link: '/shop' },
        { label: product.category, link: `/shop/${product.category}` },
        { label: product.name, link: null }
    ];

    return (
        <nav className='breadcrums'>
            {breadcrumbs.map((crumb, index) => (
                <span key={index}>
                    {crumb.link ? (
                        <a href={crumb.link}>{crumb.label}</a>
                    ) : (
                        <span>{crumb.label}</span>
                    )}
                    {index < breadcrumbs.length - 1 && (
                        <img src={breadcrum_arrow} alt="breadcrumb arrow icon" />
                    )}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrums;
