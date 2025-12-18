import React from 'react';
import Layout from '../components/Layout/Layout';

const Koshu = () => {
    return (
        <Layout>
            <div className="container">
                {/* 1. Page Title Area */}
                <header style={styles.headerArea}>
                    <h2 className="heading-primary" style={{ borderBottom: 'none', marginBottom: '10px' }}>シェアオフィス甲州（勝沼）</h2>
                    <p style={styles.subTitle}>甲州市指定管理施設 / 24時間365日利用可能</p>
                    <div style={styles.headerLine}></div>
                </header>

                {/* 2. Facility Concept */}
                <section style={styles.section}>
                    <div style={styles.conceptBox}>
                        <div style={styles.conceptItem}>
                            <span style={styles.conceptIcon}>🏛️</span>
                            <div>
                                <h3 style={styles.conceptTitle}>甲州市指定管理</h3>
                                <p style={styles.conceptText}>株式会社ジブラボが甲州市より指定管理を受けて運営する公的な信頼のある施設です。</p>
                            </div>
                        </div>
                        <div style={styles.conceptItem}>
                            <span style={styles.conceptIcon}>🕒</span>
                            <div>
                                <h3 style={styles.conceptTitle}>24時間365日</h3>
                                <p style={styles.conceptText}>早朝や深夜、土日祝日を問わず、いつでも好きな時間に利用可能です。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Facility Gallery */}
                <section style={styles.section}>
                    <h3 className="heading-secondary">館内ギャラリー</h3>
                    <div style={styles.galleryGrid}>
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} style={styles.galleryItem}>
                                <div style={styles.galleryPlaceholder}>
                                    <span style={{ fontSize: '2rem', color: '#ccc' }}>Photo {item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Price List (Renumbered) */}
                <section style={styles.section}>
                    <h3 className="heading-secondary">料金プラン</h3>
                    <div style={styles.tableWrapper}>
                        <table style={styles.table}>
                            <thead>
                                <tr>
                                    <th style={styles.th}>プラン名</th>
                                    <th style={styles.th}>料金 (税込)</th>
                                    <th style={styles.th}>入会金</th>
                                    <th style={styles.th}>利用時間</th>
                                    <th style={styles.th}>特徴</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={styles.tr}>
                                    <td style={styles.tdBold}>月額会員</td>
                                    <td style={styles.tdPrice}>3,050円</td>
                                    <td style={styles.td}>1,010円</td>
                                    <td style={styles.td}>24時間 (毎日)</td>
                                    <td style={styles.td}>時間を気にせず使い放題</td>
                                </tr>
                                <tr style={styles.tr}>
                                    <td style={styles.tdBold}>ドロップイン<br /><span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>(回数チャージ)</span></td>
                                    <td style={styles.tdPrice}>200円 / 回</td>
                                    <td style={styles.td}>なし</td>
                                    <td style={styles.td}>24時間 (1回分)</td>
                                    <td style={styles.td}>使いたい時だけ気軽に利用</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 4. Options & Cooperation */}
                <section style={styles.section}>
                    <h3 className="heading-secondary">オプション・連携サービス</h3>
                    <ul style={styles.optionList}>
                        <li style={styles.optionItem}>
                            <span style={styles.optionLabel}>コミュニティー参加</span>
                            <span style={styles.optionValue}>＋2,200円/月</span>
                            <span style={styles.optionDesc}>（会員同士の交流が可能）</span>
                        </li>
                        <li style={styles.optionItem}>
                            <span style={styles.optionLabel}>姉妹店連携</span>
                            <span style={styles.optionDesc}>CrossBe（甲府）、ノハコを利用する場合は別途オプションまたは付帯条件あり。詳細は料金表ページへ。</span>
                        </li>
                    </ul>
                </section>

                {/* 5. Staff Note */}
                <section style={styles.staffNoteSection}>
                    <h4 style={styles.staffNoteTitle}>⚠️ スタッフ向け注記（問い合わせ時の注意点）</h4>
                    <p style={styles.staffNoteText}>
                        指定管理施設のため、市民の方からの問い合わせには丁寧かつ公的な立場を意識して対応すること。
                    </p>
                </section>

            </div>
        </Layout>
    );
};

const styles = {
    headerArea: {
        marginBottom: '40px',
        marginTop: '20px',
    },
    subTitle: {
        fontSize: '1.2rem',
        color: '#666',
        fontWeight: 'bold',
    },
    headerLine: {
        width: '100%',
        height: '4px',
        backgroundColor: 'var(--color-main)',
        marginTop: '15px',
    },
    section: {
        marginBottom: '50px',
    },
    conceptBox: {
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
    },
    conceptItem: {
        flex: 1,
        minWidth: '300px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '15px',
    },
    conceptIcon: {
        fontSize: '3rem',
    },
    conceptTitle: {
        fontSize: '1.3rem',
        fontWeight: 'bold',
        color: 'var(--color-main-dark)',
        marginBottom: '10px',
        marginTop: '5px',
    },
    conceptText: {
        lineHeight: '1.6',
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    table: {
        width: '100%',
        minWidth: '700px',
        borderCollapse: 'collapse',
        backgroundColor: 'white',
    },
    th: {
        backgroundColor: 'var(--color-gray-light)',
        padding: '15px',
        border: '1px solid var(--color-gray-border)',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    tr: {
        borderBottom: '1px solid var(--color-gray-border)',
    },
    td: {
        padding: '15px',
        border: '1px solid var(--color-gray-border)',
    },
    tdBold: {
        padding: '15px',
        border: '1px solid var(--color-gray-border)',
        fontWeight: 'bold',
    },
    tdPrice: {
        padding: '15px',
        border: '1px solid var(--color-gray-border)',
        color: 'var(--color-main-dark)',
        fontWeight: 'bold',
        fontSize: '1.2rem',
    },
    optionList: {
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #eee',
    },
    optionItem: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: '15px',
        borderBottom: '1px solid #f0f0f0',
        paddingBottom: '15px',
    },
    optionLabel: {
        fontWeight: 'bold',
        marginRight: '15px',
        minWidth: '150px',
        color: '#333',
    },
    optionValue: {
        fontWeight: 'bold',
        color: 'var(--color-main)',
        marginRight: '10px',
        fontSize: '1.1rem',
    },
    optionDesc: {
        color: '#666',
    },
    staffNoteSection: {
        backgroundColor: '#FFF9C4', // Light Yellow
        padding: '20px',
        borderRadius: '8px',
        border: '2px solid #FBC02D',
    },
    staffNoteTitle: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: '#F57F17',
        marginBottom: '10px',
    },
    staffNoteText: {
        fontWeight: 'bold',
        color: '#3E2723',
    },
    galleryGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
    },
    galleryItem: {
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: '#f0f0f0',
    },
    galleryPlaceholder: {
        width: '100%',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
    },
};

export default Koshu;
