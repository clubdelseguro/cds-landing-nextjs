import { CardsBlog } from '../../components/CardsBlog'
import Carousel from 'react-elastic-carousel';
import Link from 'next/link';
import styles from '../../styles/components/CarouselBlogs.module.css';

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


export const CarouselBlogs = ({ blogs }) => {
    return (
        <div className={styles.cardsBeneficio}>
            <Carousel breakPoints={breakPoints} showArrows={false} enableAutoPlay={true} autoPlaySpeed={5000}>
                {
                    blogs?.map((blog, i) => i < 4 ? <CardsBlog key={blog.id} blog={blog} /> : null)
                }
            </Carousel>
            <Link href="/blog">
                <div className={styles.bottom}>
                    <p className={styles.button}>Ver más blogs</p>
                </div>
            </Link>
        </div>
    )
}
