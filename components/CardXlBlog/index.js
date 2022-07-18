import React from 'react';
import { Link } from 'react-router-dom';
import { quitarAcentos } from '../../utils/constants';
import './index.css';
import ReactHtmlParser from 'react-html-parser';

export const CardXlBlog = ({ blog }) => {
    var name = blog?.title;
    name = quitarAcentos(name);
    return (
        <Link to={`/blog/${name}`} className="root-card-xl-blog" >
            <img loading="lazy" className="img-card-xl-blog" src={`${blog?.img_card?.url}`} alt="Img Blog" />
            <h3 className="description-card-xl-blog">
                {ReactHtmlParser(blog?.description)}
            </h3>
            <h2 className="title-card-xl-blog">
                {blog?.title}
            </h2>
        </Link>
    )
}
