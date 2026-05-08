import React from 'react'
import { quitarAcentos } from '../../utils/constants';
import ReactHtmlParser from 'html-react-parser';
import Link from 'next/link';

export const CardsBlog = ({ blog }) => {
    var name = blog?.title;
    name = quitarAcentos(name);
    return (
        <Link href={`/blog/${name}`} >
            <div className="root-card-blog">
                <img loading="lazy" className="img-card-blog" src={`${blog?.img_card?.url}`} alt="Img Blog" />
                <div className="description-card-blog">
                    {ReactHtmlParser(blog?.description)}
                </div>
                <p className="title-card-blog">
                    {blog?.title}
                </p>
            </div>
        </Link>
    )
}
