import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { faqData } from '../data/mockData';

const Manual = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (categoryIndex, itemIndex) => {
        const key = `${categoryIndex}-${itemIndex}`;
        setOpenItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    // Filter functionality
    const filteredData = faqData.map(category => {
        const filteredItems = category.items.filter(item =>
            item.q.includes(searchTerm) || item.a.includes(searchTerm)
        );
        return { ...category, items: filteredItems };
    }).filter(category => category.items.length > 0);

    return (
        <Layout>
            <div className="container">
                <h2 className="heading-primary">社内規定・マニュアル (FAQ)</h2>

                {/* Search Box */}
                <div style={styles.searchBox}>
                    <input
                        type="text"
                        placeholder="キーワードで検索（例：Wi-Fi、入会、プリンター）..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={styles.searchInput}
                    />
                </div>

                {/* FAQ List */}
                <div>
                    {filteredData.length > 0 ? (
                        filteredData.map((category, catIndex) => (
                            <div key={catIndex} style={styles.categorySection}>
                                <h3 className="heading-secondary">{category.category}</h3>
                                <div style={styles.list}>
                                    {category.items.map((item, itemIndex) => {
                                        const isOpen = openItems[`${catIndex}-${itemIndex}`];
                                        return (
                                            <div key={itemIndex} style={styles.accordionItem}>
                                                <button
                                                    onClick={() => toggleItem(catIndex, itemIndex)}
                                                    style={{
                                                        ...styles.questionButton,
                                                        backgroundColor: isOpen ? 'var(--color-main)' : 'white',
                                                        color: isOpen ? 'white' : 'var(--color-text)',
                                                    }}
                                                >
                                                    <span style={styles.qIcon}>Q.</span>
                                                    {item.q}
                                                    <span style={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
                                                </button>
                                                {isOpen && (
                                                    <div style={styles.answerBox}>
                                                        <span style={styles.aIcon}>A.</span>
                                                        <p>{item.a}</p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={styles.noResult}>該当する項目が見つかりませんでした。</p>
                    )}
                </div>
            </div>
        </Layout>
    );
};

const styles = {
    searchBox: {
        marginBottom: '40px',
        textAlign: 'center',
    },
    searchInput: {
        width: '100%',
        maxWidth: '600px',
        padding: '15px 20px',
        fontSize: '1.2rem',
        border: '2px solid var(--color-gray-border)',
        borderRadius: '4px',
        outline: 'none',
    },
    categorySection: {
        marginBottom: '40px',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    accordionItem: {
        border: '1px solid var(--color-gray-border)',
        borderRadius: '4px',
        overflow: 'hidden',
    },
    questionButton: {
        width: '100%',
        padding: '20px',
        textAlign: 'left',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background-color 0.2s',
    },
    qIcon: {
        marginRight: '15px',
        fontWeight: '900',
    },
    arrow: {
        fontSize: '0.8rem',
    },
    answerBox: {
        padding: '20px',
        backgroundColor: 'var(--color-gray-light)',
        fontSize: '1rem',
        lineHeight: '1.8',
        display: 'flex',
        gap: '15px',
    },
    aIcon: {
        fontWeight: 'bold',
        color: 'var(--color-main)',
        fontSize: '1.2rem',
    },
    noResult: {
        textAlign: 'center',
        fontSize: '1.2rem',
        color: '#666',
        marginTop: '40px',
    }
};

export default Manual;
