/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import BannerCarousel from '../components/bannerCarousel/BannerCarousel'
import styles from '../styles/Home.module.scss'
import clsx from 'clsx'
export default function Home() {
    return (
        <>
            <Head>
                <title>Manpower NSL - Home</title>
            </Head>

            <section>
                <BannerCarousel />
            </section>

            <SectionTwo />
            <section className="my-80">section three </section>
            <section className="my-80">section four </section>
        </>
    )
}

function SectionTwo() {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.autoContainer}>
                <div className="flex flex-col gap-4 lg:flex-row">
                    <div className="basis-1/2">
                        <div className={styles.imageBlock}>
                            <div className={styles.imageBox}>
                                <figure className={styles.imageOne}>
                                    <img
                                        style={{ width: '100%' }}
                                        src="/images/resource/about-1.jpg"
                                        alt=""
                                    />
                                </figure>
                                <figure className={styles.imageTwo}>
                                    <img
                                        style={{ width: '100%' }}
                                        src="/images/resource/about-2.jpg"
                                        alt=""
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <div className={styles.contentBox}>
                            <div className={styles.sectionTitle}>
                                <p className={styles.sectionTitleHint}>
                                    Welcome to Agency
                                </p>
                                <h2 className={styles.title}>
                                    Best Quality Recruitment Staffing Agency
                                </h2>
                            </div>
                            <div className={styles.text}>
                                <p>
                                    Lorem ipsum is simply free text dolor sit
                                    amet, consectetur notted adipisicing elit
                                    sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua lonm andhn.
                                </p>
                            </div>
                            <div className={clsx(styles.innerBox, 'flex')}>
                                <div className={styles.singleItem}>
                                    <h5 className={styles.itemTitle}>
                                        <span className={styles.titleIndex}>
                                            01
                                        </span>
                                        Strategic Partners
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sited is amet
                                        consectetur notted.
                                    </p>
                                </div>
                                <div className={styles.singleItem}>
                                    <h5 className={styles.itemTitle}>
                                        <span className={styles.titleIndex}>
                                            02
                                        </span>
                                        Sourcing the Best
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sited is amet
                                        consectetur notted.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-around">
                                <div
                                    className={clsx(
                                        styles.authorBox,
                                        'flex items-center gap-4'
                                    )}
                                >
                                    <figure className={styles.authorThumb}>
                                        <img
                                            className={styles.authorImage}
                                            src="/images/resource/author-1.png"
                                            alt="author-1"
                                        />
                                    </figure>
                                    <div>
                                        <figure className="mb-1">
                                            <img
                                                src="/images/resource/signature-1.png"
                                                alt="signature-1"
                                            />
                                        </figure>
                                        <span className={styles.designation}>
                                            CEO & CO Founder
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.experienceBox}>
                                    <div className={styles.inner}>
                                        <h2 className={styles.years}>38</h2>
                                        <p className={styles.yearText}>
                                            Years of Experience
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
