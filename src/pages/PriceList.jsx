import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { pricingData } from '../data/pricingData';

const PriceList = () => {
    const [activeTab, setActiveTab] = useState('crosby');

    const renderMainTable = (data) => {
        if (!data || !data.items) return null;
        return (
            <div style={styles.tableWrapper}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={{ ...styles.th, width: '15%' }}>プラン</th>
                            <th style={{ ...styles.th, width: '12%' }}>料金 (税込)</th>
                            <th style={{ ...styles.th, width: '10%' }}>入会金</th>
                            <th style={{ ...styles.th, width: '15%' }}>利用可能時間</th>
                            <th style={{ ...styles.th, width: '20%' }}>利用可能施設</th>
                            <th style={{ ...styles.th, width: '8%' }}>ゲスト招待</th>
                            <th style={{ ...styles.th, width: '8%' }}>住所利用</th>
                            <th style={{ ...styles.th, width: '8%' }}>登記</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.items.map((item, index) => (
                            <tr key={index} style={styles.tr}>
                                <td style={{ ...styles.td, fontWeight: 'bold' }}>{item.plan}</td>
                                <td style={{ ...styles.td, color: 'var(--color-main-dark)', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                    {item.price}<span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>円</span>
                                </td>
                                <td style={styles.td}>{item.admission}</td>
                                <td style={styles.td}>{item.hours}</td>
                                <td style={styles.td}>{item.facilities}</td>
                                <td style={styles.td}>{item.options.guest}</td>
                                <td style={styles.td}>{item.options.address}</td>
                                <td style={styles.td}>{item.options.registration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const renderOtherTable = () => {
        return (
            <div style={{ marginTop: '40px' }}>
                <h3 className="heading-secondary">その他サービス</h3>

                <h4 style={styles.subTitle}>1箱ショップ</h4>
                <table style={styles.simpleTable}>
                    <tbody>
                        {pricingData.other.one_box_shop.map((item, index) => (
                            <tr key={index}>
                                <td style={styles.simpleTd}>{item.plan}</td>
                                <td style={styles.simpleTdPrice}>{item.price}円</td>
                                <td style={styles.simpleTdNote}>{item.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h4 style={styles.subTitle}>セミナールーム (クロスビー)</h4>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h5 style={styles.miniTitle}>Room A</h5>
                        <table style={styles.simpleTable}>
                            <tbody>
                                {pricingData.other.seminar_room.crosby.room_a.map((item, index) => (
                                    <tr key={index}>
                                        <td style={styles.simpleTd}>{item.plan}</td>
                                        <td style={styles.simpleTdPrice}>{item.price}円</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h5 style={styles.miniTitle}>Room B</h5>
                        <table style={styles.simpleTable}>
                            <tbody>
                                {pricingData.other.seminar_room.crosby.room_b.map((item, index) => (
                                    <tr key={index}>
                                        <td style={styles.simpleTd}>{item.plan}</td>
                                        <td style={styles.simpleTdPrice}>{item.price}円</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Layout>
            <div className="container">
                <h2 className="heading-primary">サービス・料金表</h2>

                {/* Tabs */}
                <div style={styles.tabsContainer}>
                    <div style={styles.tabs}>
                        {['crosby', 'nohako', 'katsunuma', 'other'].map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                style={{
                                    ...styles.tabButton,
                                    backgroundColor: activeTab === key ? 'var(--color-main)' : '#f0f0f0',
                                    color: activeTab === key ? 'white' : '#666',
                                    fontWeight: activeTab === key ? 'bold' : 'normal',
                                }}
                            >
                                {key === 'other' ? 'その他オプション' : pricingData[key].name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div style={styles.tabContent}>
                    {activeTab === 'other' ? (
                        renderOtherTable()
                    ) : (
                        <>
                            <h3 className="heading-secondary">{pricingData[activeTab].name} 料金一覧</h3>
                            {renderMainTable(pricingData[activeTab])}
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
};

const styles = {
    tabsContainer: {
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        marginBottom: '0',
        borderBottom: '4px solid var(--color-main)',
        paddingBottom: '0',
    },
    tabs: {
        display: 'flex',
        gap: '5px',
    },
    tabButton: {
        padding: '12px 25px',
        fontSize: '1rem',
        border: 'none',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        flexShrink: 0,
    },
    tabContent: {
        backgroundColor: 'white',
        padding: '30px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
        overflowX: 'auto', // Horizontal scroll for small screens
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    table: {
        width: '100%',
        minWidth: '1000px', // Increased minWidth
        borderCollapse: 'collapse',
        marginBottom: '20px',
        tableLayout: 'fixed', // Enforce column widths
    },
    th: {
        backgroundColor: 'var(--color-gray-light)',
        padding: '12px',
        border: '1px solid var(--color-gray-border)',
        textAlign: 'left',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
    },
    tr: {
        borderBottom: '1px solid var(--color-gray-border)',
    },
    td: {
        padding: '12px',
        border: '1px solid var(--color-gray-border)',
        fontSize: '0.95rem',
    },
    subTitle: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: '#555',
        borderLeft: '4px solid #ccc',
        paddingLeft: '10px',
        marginBottom: '15px',
        marginTop: '20px',
    },
    miniTitle: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#666',
    },
    simpleTable: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
    },
    simpleTd: {
        padding: '10px',
        borderBottom: '1px solid #eee',
        fontWeight: 'bold',
    },
    simpleTdPrice: {
        padding: '10px',
        borderBottom: '1px solid #eee',
        textAlign: 'right',
        color: 'var(--color-main-dark)',
        fontWeight: 'bold',
    },
    simpleTdNote: {
        padding: '10px',
        borderBottom: '1px solid #eee',
        color: '#888',
        fontSize: '0.9rem',
    }
};

export default PriceList;
