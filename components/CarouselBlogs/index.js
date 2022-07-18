import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { CardsBlog } from '../../components/CardsBlog'
import Carousel from 'react-elastic-carousel';
import Link from 'next/link';

const breakPoints = [
    {
        width: 1,
        itemsToShow: 1
    },
    {
        width: 640,
        itemsToShow: 2
    },
    {
        width: 960,
        itemsToShow: 3
    },
]

const useStyles = makeStyles(theme => ({
    cardsBeneficio: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: '2% 0%'
    },
    button: {
        backgroundColor: '#000000',
        borderRadius: '20px',
        textDecoration: 'none',
        color: '#FFFFFF',
        width: '228px',
        height: '46px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '18px',
        lineHeight: '21px',
        fontWeight: 'bold'
    },
    bottom: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '20px 0px',
    }
}));


export const CarouselBlogs = ({ blogs }) => {

    const classes = useStyles();
    return (
        <div className={classes.cardsBeneficio}>
            <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay={true} autoPlaySpeed={5000}>
                {
                    blogs?.map((blog, i) => i < 4 ? <CardsBlog key={blog.id} blog={blog} /> : null)
                }
            </Carousel>
            <div className={classes.bottom}>
                <Link href="/blog" style={{ textDecoration: 'none' }}>
                    <div className={classes.button}>Ver más blogs</div>
                </Link>
            </div>
        </div>
    )
}
