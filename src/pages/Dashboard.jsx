import React from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/mockData';
import Layout from '../components/Layout/Layout';

const Dashboard = () => {
    return (
        <Layout>
            <div className="container">
                {/* Mission / Vision Section */}
                <section style={styles.missionSection}>
                    <h2 style={styles.sectionTitle}>経営理念・VISION</h2>
                    <div style={styles.missionBox}>
                        <p style={styles.missionMain}>「働く」をもっと自由に、もっと楽しく。</p>
                        <p style={styles.missionSub}>
                            私たちは、場所にとらわれない柔軟な働き方を支援し、人と人が繋がることで新しい価値が生まれる空間を提供します。<br />
                            お客様一人ひとりの「挑戦」を全力でサポートすることが、私たちの使命です。
                        </p>
                    </div>
                </section>

                {/* Navigation Grid (Container Query) */}
                <section style={styles.navGridSection}>
                    <div className="nav-container-wrapper">
                        <div className="nav-grid">
                            {[
                                { title: '会社について', path: '/company', color: '#E53935' },
                                { title: 'ジブラボコミュニティー', path: '/community', color: '#D81B60' },
                                { title: 'CROSS BE', path: '/crosby', color: '#8E24AA' },
                                { title: 'ノハコ', path: '/nohako', color: '#5E35B1' },
                                { title: 'シェアオフィス甲州', path: '/koshu', color: '#3949AB' },
                                { title: 'べいまっくす', path: '/baymax', color: '#1E88E5' },
                            ].map((item) => (
                                <Link key={item.path} to={item.path} className="nav-card" style={{ '--card-color': item.color }}>
                                    <div className="nav-card-content">
                                        <h3 className="nav-card-title">{item.title}</h3>
                                        <span className="nav-card-arrow">→</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* News Section */}
                <section style={styles.newsSection}>
                    <h2 style={styles.sectionTitle}>最新のお知らせ</h2>
                    <div style={styles.newsList}>
                        {newsData.map((news) => (
                            <article key={news.id} style={{ ...styles.newsItem, borderLeft: news.important ? '5px solid var(--color-main)' : '5px solid #ccc' }}>
                                <div style={styles.newsHeader}>
                                    <time style={styles.newsDate}>{news.date}</time>
                                    {news.important && <span style={styles.badge}>重要</span>}
                                </div>
                                <h3 style={styles.newsTitle}>{news.title}</h3>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

const styles = {
    missionSection: {
        marginBottom: '80px',
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: '2rem',
        color: 'var(--color-main)',
        marginBottom: '20px',
        borderBottom: '2px solid var(--color-text)',
        display: 'inline-block',
        paddingBottom: '5px',
    },
    missionBox: {
        backgroundColor: 'var(--color-accent)',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    missionMain: {
        fontSize: '3.5rem', // Significantly larger for Full HD
        fontWeight: 'bold',
        marginBottom: '30px',
        color: 'var(--color-main-dark)',
    },
    missionSub: {
        fontSize: '1.2rem',
        lineHeight: '2',
    },
    newsSection: {
        marginBottom: '40px',
    },
    newsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    newsItem: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column', // Mobile first
        gap: '10px',
        transition: 'transform 0.2s',
    },
    newsHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    newsDate: {
        color: '#666',
        fontWeight: 'bold',
    },
    badge: {
        backgroundColor: 'var(--color-main)',
        color: 'white',
        padding: '2px 8px',
        fontSize: '0.8rem',
        borderRadius: '4px',
        fontWeight: 'bold',
    },
    newsTitle: {
        fontSize: '1.2rem',
        margin: 0,
    }
};

export default Dashboard;
