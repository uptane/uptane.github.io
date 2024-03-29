import React from 'react';
import styles from './styles.module.css';
import data from '@site/static/data/latestBlogs/data.js';

const BlogGrid = () => {
    return (
        <div className={[styles.features, styles.section_padding].join(' ')}>
            <h1>Read latest from Uptane</h1>
            <ul className={styles.cards}>
                {data.blogs.slice(0, 3).map((blog, index) => (
                    <li key={index} className={styles.cards_item}>
                        <div className={styles.card}>
                            <div >
                                <img className={styles.blog_img} src={blog.img} alt="Card Image" />
                            </div>
                            <div className={styles.card_content}>
                                <h2 className={styles.card_title}>{blog.title}</h2>
                                <p className={styles.card_text} onClick={() => (window.location.href = blog.link)}>
                                    Read More
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogGrid;
