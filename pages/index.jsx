/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import BannerCarousel from '../components/bannerCarousel/BannerCarousel'
import styles from '../styles/Home.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import PrimaryBtn from '../components/primaryBtn/PrimaryBtn'

export default function Home() {
    return (
        <>
            <Head>
                <title>Manpower NSL - Home</title>
            </Head>

            <section>
                <BannerCarousel />
            </section>

            <SectionAbout />
            <SectionService />
            <SectionWorkingProcess />
            <CtaSection />
        </>
    )
}

function SectionAbout() {
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
                                <p className={styles.titleHint}>
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

function SectionService() {
    return (
        <section className={styles.serviceSection}>
            <div className={styles.autoContainer}>
                <div className={styles.titleWrapper}>
                    <p className={styles.titleHint}>Our All Services List</p>
                    <h2 className={styles.title}>Outsourced HR Services</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-7 lg:flex-row">
                    <div className={clsx('basis-1/3', styles.card)}>
                        <figure className={styles.imageBox}>
                            <img
                                className={styles.image}
                                src="/images/service/service-1.jpg"
                                alt=""
                            />
                            <span className={styles.category}>Management</span>
                            <i
                                className={clsx(
                                    'flaticon-consulting',
                                    styles.cateogryIcon
                                )}
                            ></i>
                        </figure>
                        <div className={styles.lowerContent}>
                            <h3 className={styles.h3}>
                                <Link href="/hr-consulting">
                                    <a>HR Consulting</a>
                                </Link>
                            </h3>
                            <p className={styles.cardText}>
                                Lorem ipsum dolor sit amet, consectetur notted
                                adipisicing elit sed do eiusmod.
                            </p>
                            <div>
                                <Link href="/hr-consulting">
                                    <a className={styles.link}>Read More</a>
                                </Link>
                            </div>
                            <div className={styles.lightIcon}>
                                <i className="flaticon-consulting"></i>
                            </div>
                        </div>
                    </div>

                    <div className={clsx('basis-1/3', styles.card)}>
                        <figure className={styles.imageBox}>
                            <img
                                className={styles.image}
                                src="/images/service/service-2.jpg"
                                alt=""
                            />
                            <span className={styles.category}>Resources</span>
                            <i
                                className={clsx(
                                    'flaticon-controller',
                                    styles.cateogryIcon
                                )}
                            ></i>
                        </figure>
                        <div className={styles.lowerContent}>
                            <h3 className={styles.h3}>
                                <Link href="/technology-resource">
                                    <a>Technology Resource</a>
                                </Link>
                            </h3>
                            <p className={styles.cardText}>
                                Lorem ipsum dolor sit amet, consectetur notted
                                adipisicing elit sed do eiusmod.
                            </p>
                            <div>
                                <Link href="/technology-resource">
                                    <a className={styles.link}>Read More</a>
                                </Link>
                            </div>
                            <div className={styles.lightIcon}>
                                <i className="flaticon-controller"></i>
                            </div>
                        </div>
                    </div>
                    <div className={clsx('basis-1/3', styles.card)}>
                        <figure className={styles.imageBox}>
                            <img
                                className={styles.image}
                                src="/images/service/service-3.jpg"
                                alt=""
                            />
                            <span className={styles.category}>Solutions</span>
                            <i
                                className={clsx(
                                    'flaticon-policy',
                                    styles.cateogryIcon
                                )}
                            ></i>
                        </figure>
                        <div className={styles.lowerContent}>
                            <h3 className={styles.h3}>
                                <Link href="/staffing-solutions">
                                    <a>Staffing Solutions</a>
                                </Link>
                            </h3>
                            <p className={styles.cardText}>
                                Lorem ipsum dolor sit amet, consectetur notted
                                adipisicing elit sed do eiusmod.
                            </p>
                            <div>
                                <Link href="/staffing-solutions">
                                    <a className={styles.link}>Read More</a>
                                </Link>
                            </div>
                            <div className={styles.lightIcon}>
                                <i className="flaticon-policy"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function SectionWorkingProcess() {
    return (
        <section className={styles.workingProcessSection}>
            <div className={styles.autoContainer}>
                <div className={styles.titleWrapper}>
                    <p className={styles.titleHint}>
                        Staffing Recent Closed Projects
                    </p>
                    <h2 className={styles.title}>We Choose a Recvite</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-7 lg:flex-row">
                    <div className={clsx('basis-1/3', styles.card)}>
                        <div className={styles.iconBox}>
                            <i className="flaticon-investment"></i>
                            <span className={styles.index}>01</span>
                            <div className={styles.iconOutline}></div>
                        </div>
                        <h3 className={styles.cardTitle}>Consult with Team</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur notted
                            adipisicing elit sed do eiusmod.
                        </p>
                    </div>

                    <div className={clsx('basis-1/3', styles.card)}>
                        <div className={styles.iconBox}>
                            <i className="flaticon-checklist"></i>
                            <span className={styles.index}>02</span>
                            <div className={styles.iconOutline}></div>
                        </div>
                        <h3 className={styles.cardTitle}>Make a Schedule</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur notted
                            adipisicing elit sed do eiusmod.
                        </p>
                    </div>

                    <div className={clsx('basis-1/3', styles.card)}>
                        <div className={styles.iconBox}>
                            <i className="flaticon-outsourcing"></i>
                            <span className={styles.index}>03</span>
                            <div className={styles.iconOutline}></div>
                        </div>
                        <h3 className={styles.cardTitle}>Hire & Enjoy</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur notted
                            adipisicing elit sed do eiusmod.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function CtaSection() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.autoContainer}>
                <div className="flex flex-col justify-between lg:flex-row lg:items-center">
                    <div className="align-left">
                        <h2 className={styles.title}>
                            Hire Your Next Candidate On Recvite
                        </h2>
                    </div>
                    <div>
                        <Link href="/">
                            <a>
                                <PrimaryBtn
                                    hoverBgColor="white"
                                    bgColor="black"
                                    style={{
                                        padding: '22px 60px',
                                        fontSize: ' 14px',
                                    }}
                                >
                                    Discover More
                                </PrimaryBtn>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
