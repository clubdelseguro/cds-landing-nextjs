import React from 'react'
import { CardsBlog } from '../CardsBlog';
import { CardXlBlog } from '../CardXlBlog';
import { CotizaAhoraConNosotros } from '../CotizaAhoraConNosotros';

export const GridBlogs = ({data}) => {
    return (
        <>
        {
            data.map((blog, i) => {
                let respuesta = null;
                if ((i + 1) % 5 === 0) {
                    respuesta = (<div className="ocultar-card-blog"><CardXlBlog key={blog.id} blog={blog} /></div>);
                } else
                    if ((i + 1) % 8 === 0) {
                        respuesta = (<><CotizaAhoraConNosotros /> <CardsBlog key={blog.id} blog={blog} /></>);
                    } else {
                        respuesta = (<CardsBlog key={blog.id} blog={blog} />);
                    }
                return respuesta;
            })
        }
        </>
    )
}
