import React from 'react';
import { quitarAcentos } from '../../utils/constants';
import ReactHtmlParser from 'html-react-parser';
import Link from 'next/link';

export const CardXlBlog = ({ blog }) => {
    var name = blog?.title;
    name = quitarAcentos(name);
    return (
        <Link href={`/blog/${name}`}  >
            <div className="root-card-xl-blog">
                <img loading="lazy" className="img-card-xl-blog" src={`${blog?.img_card?.url}`} alt="Img Blog" />
                <div className="description-card-xl-blog">
                    {ReactHtmlParser(blog?.description)}
                </div>
                <h2 className="title-card-xl-blog">
                    {blog?.title}
                </h2>
            </div>
        </Link>
    )
}
