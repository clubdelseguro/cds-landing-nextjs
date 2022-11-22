import React from 'react'
import { quitarAcentos } from '../../utils/constants';
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';

export const CardsBlog = ({ blog }) => {
    var name = blog?.title;
    name = quitarAcentos(name);
    return (
        <Link href={`/blog/${name}`} >
            <div className="root-card-blog">
                <img loading="lazy" className="img-card-blog" src={`${blog?.img_card?.url}`} alt="Img Blog" />
                <p className="description-card-blog">
                    {ReactHtmlParser(blog?.description)}
                </p>
                <p className="title-card-blog">
                    {blog?.title}
                </p>
            </div>
        </Link>
    )
}
