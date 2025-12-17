import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { serviceData } from '../data/mockData';

const ServiceGuide = () => {
    // Use the first key as default
    const [activeTab, setActiveTab] = useState(Object.keys(serviceData)[0]);

    const activeData = serviceData[activeTab];

    return (
        <Layout>
            <div className="container">
                <h2 className="heading-primary">事業ガイド</h2>

                {/* Scrollable Tabs Container */}
                <div style={styles.tabsContainer}>
                    <div style={styles.tabs}>
                        {Object.keys(serviceData).map((key) => (
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
                                {serviceData[key].name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div style={styles.contentArea}>
                    <h3 className="heading-secondary">{activeData.name}</h3>

                    {/* 1. Inquiry Summary (FAQ Style) */}
                    <div style={styles.section}>
                        <h4 style={styles.subTitle}>よくあるお問い合わせ</h4>
                        <div style={styles.summaryGrid}>
                            {activeData.summary.map((item, index) => (
                                <div key={index} style={styles.summaryCard}>
                                    <div style={styles.summaryLabel}>{item.label}</div>
                                    <div style={styles.summaryText}>{item.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. Detailed Info Table */}
                    <div style={styles.section}>
                        <h4 style={styles.subTitle}>詳細情報</h4>
                        <table style={styles.table}>
                            <tbody>
                                {activeData.details.map((row, index) => (
                                    <tr key={index} style={styles.tr}>
                                        <th style={styles.th}>{row.key}</th>
                                        <td style={styles.td}>{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

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
        padding: '12px 20px',
        fontSize: '1rem',
        border: 'none',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        flexShrink: 0,
    },
    contentArea: {
        backgroundColor: 'white',
        padding: '40px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
    },
    section: {
        marginBottom: '40px',
    },
    subTitle: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#555',
        borderLeft: '4px solid #ccc',
        paddingLeft: '10px',
        marginBottom: '20px',
    },
    summaryGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
    },
    summaryCard: {
        backgroundColor: 'var(--color-accent)',
        padding: '20px',
        borderRadius: '6px',
        border: '1px solid #ffd5d5',
    },
    summaryLabel: {
        fontWeight: 'bold',
        color: 'var(--color-main-dark)',
        marginBottom: '5px',
        fontSize: '1.1rem',
    },
    summaryText: {
        fontSize: '1rem',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    tr: {
        borderBottom: '1px solid var(--color-gray-border)',
    },
    th: {
        width: '30%',
        backgroundColor: 'var(--color-gray-light)',
        padding: '15px',
        border: '1px solid var(--color-gray-border)',
        textAlign: 'left',
        fontWeight: 'bold',
    },
    td: {
        padding: '15px',
        border: '1px solid var(--color-gray-border)',
    }
};

export default ServiceGuide;
