import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import FooterLink from './FooterLink';
import footerImage from "../../../static/img/uptane_logo.png"

const Footer = () => {
  const { siteConfig } = useDocusaurusContext();
  const { copyright, links = [] } = siteConfig.themeConfig.footer;
  const hasFooter = !!siteConfig.themeConfig.footer;

  if (!hasFooter) {
    return null;
  }

  return (
    <footer className={clsx('footer', styles.Container)}>
      <div className={styles.InnerContainer}>
        <div className={styles.ContentContainer}>
          {/*Footer Left */}
          <div className={styles.FooterLeft}>
            <div className={styles.BrandContainer}>
              <img
                className={styles.BrandImage}
                alt="Uptane Logo"
                width={200}
                src={footerImage}
                title={siteConfig.tagline}
              />
            </div>
            <div className={styles.Tagline}>{siteConfig.tagline}</div>
          </div>

          <div className={styles.FooterRight}>
            {links.map((linkItem, i) => (
              <div className={styles.SectionContainer} key={i}>
                {linkItem.title != null && (
                  <li className={styles.LinkItemTitle}>{linkItem.title}</li>
                )}
                {linkItem.items?.map((item) => (
                  <ul
                    className={styles.LinkItemContainer}
                    key={item.href ?? item.to}>
                    <FooterLink {...item} />
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.BottomContainer}>
          <div
            className={styles.CopyrightText}
            dangerouslySetInnerHTML={{ __html: copyright }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
