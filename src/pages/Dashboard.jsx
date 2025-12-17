import React from 'react';
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
        marginBottom: '60px',
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
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '20px',
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
