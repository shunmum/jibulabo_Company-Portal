import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const GenericPage = () => {
    const location = useLocation();

    // Map paths to titles
    const titles = {
        '/company': '会社について',
        '/community': 'ジブラボコミュニティー',
        '/crosby': 'CROSS BE',
        '/nohako': 'ノハコ',
        '/koshu': 'シェアオフィス甲州',
        '/baymax': 'べいまっくす'
    };

    const title = titles[location.pathname] || 'ページ';

    return (
        <Layout>
            <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
                <h2 className="heading-primary">{title}</h2>
                <div style={{
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '8px',
                    marginTop: '40px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}>
                    <p>このページは現在準備中です。</p>
                    <p style={{ marginTop: '20px', color: '#888' }}>
                        Route: {location.pathname}
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default GenericPage;
