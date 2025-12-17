export const pricingData = {
    crosby: {
        name: 'クロスビー',
        items: [
            {
                plan: 'デイタイム',
                price: '8,800',
                admission: '20,000',
                hours: '平日10時～17時',
                facilities: 'クロスビー',
                options: {
                    enzan_katsunuma: '+2200',
                    guest: '〇',
                    post: '+1100',
                    locker: '+2200',
                    address: '+1100',
                    registration: '+3300',
                    residence: '+22000',
                    group_share: '+3300',
                    community: '+1100'
                }
            },
            {
                plan: 'スタンダード',
                price: '12,100',
                admission: '20,000',
                hours: '平日10時～22時',
                facilities: 'クロスビー',
                options: {
                    enzan_katsunuma: '+2200',
                    guest: '〇',
                    post: '+1100',
                    locker: '+2200',
                    address: '+1100',
                    registration: '+3300',
                    residence: '+22000',
                    group_share: '+3300',
                    community: '+1100'
                }
            },
            {
                plan: 'ホリデイ',
                price: '8,800',
                admission: '20,000',
                hours: '土日祝日10時～22時',
                facilities: 'クロスビー',
                options: {
                    enzan_katsunuma: '+2200',
                    guest: '〇',
                    post: '+1100',
                    locker: '+2200',
                    address: '+1100',
                    registration: '+3300',
                    residence: '+22000',
                    group_share: '+3300',
                    community: '+1100'
                }
            },
            {
                plan: 'サードプレイス',
                price: '12,100',
                admission: '20,000',
                hours: '平日17時～22時+土日祝',
                facilities: 'クロスビー',
                options: {
                    enzan_katsunuma: '+2200',
                    guest: '〇',
                    post: '+1100',
                    locker: '+2200',
                    address: '+1100',
                    registration: '+3300',
                    residence: '+22000',
                    group_share: '+3300',
                    community: '+1100'
                }
            },
            {
                plan: 'フルタイム',
                price: '16,500',
                admission: '20,000',
                hours: '全日10時～22時',
                facilities: 'クロスビー、ノハコ（レギュラー）、勝沼',
                options: {
                    enzan_katsunuma: '付帯',
                    guest: '〇',
                    post: '+1100',
                    locker: '+2200',
                    address: '+1100',
                    registration: '+3300',
                    residence: '+22000',
                    group_share: '+3300',
                    community: '付帯'
                }
            },
            {
                plan: 'ライト',
                price: '2,520',
                admission: '10,000',
                hours: '月に1回無料、その他割引',
                facilities: 'クロスビー',
                options: {
                    enzan_katsunuma: '✕',
                    guest: '✕',
                    post: '✕',
                    locker: '✕',
                    address: '✕',
                    registration: '✕',
                    residence: '✕',
                    group_share: '',
                    community: '+2200'
                }
            },
            {
                plan: 'ブレイクタイム',
                price: '3,300',
                admission: '10,000',
                hours: '毎日1時間無料、延長1時間330円',
                facilities: 'クロスビー',
                options: {
                    enzan_katsunuma: '✕',
                    guest: '✕',
                    post: '✕',
                    locker: '✕',
                    address: '✕',
                    registration: '✕',
                    residence: '✕',
                    group_share: '',
                    community: '+2200'
                }
            },
            {
                plan: 'ドロップイン/１Ｄ',
                price: '1,980',
                admission: '0',
                hours: '全日',
                facilities: 'クロスビー',
                options: {
                    enzan_katsunuma: '✕',
                    guest: '✕',
                    post: '✕',
                    locker: '✕',
                    address: '✕',
                    registration: '✕',
                    residence: '✕',
                    group_share: '',
                    community: '+2200'
                }
            },
            {
                plan: 'ドロップイン/3ｈ',
                price: '1,100',
                admission: '0',
                hours: '全日',
                facilities: 'クロスビー',
                options: {
                    enzan_katsunuma: '✕',
                    guest: '✕',
                    post: '✕',
                    locker: '✕',
                    address: '✕',
                    registration: '✕',
                    residence: '✕',
                    group_share: '',
                    community: '+2200'
                }
            },
            {
                plan: '法人',
                price: '49,500',
                admission: '50,000',
                hours: '全日10時～22時',
                facilities: 'クロスビー、ノハコ（レギュラー）、勝沼',
                options: {
                    enzan_katsunuma: '付帯',
                    guest: '〇',
                    post: '+1100',
                    locker: '+2200',
                    address: '+1100',
                    registration: '+3300',
                    residence: '+22000',
                    group_share: '付帯',
                    community: '要相談'
                }
            }
        ]
    },
    nohako: {
        name: 'ノハコ',
        items: [
            {
                plan: '専用デスク',
                price: '16,500',
                admission: '20,000',
                hours: '平日10時～18時',
                facilities: 'ノハコ、勝沼、クロスビー（フルタイム）',
                options: {
                    enzan_katsunuma: '付帯',
                    guest: '〇',
                    post: '✕',
                    locker: '付帯',
                    address: '付帯',
                    registration: '+3300',
                    residence: '✕',
                    group_share: '',
                    community: '付帯'
                }
            },
            {
                plan: 'レギュラー',
                price: '5,500',
                admission: '1,010（共通）',
                hours: '平日10時～18時',
                facilities: 'ノハコ、勝沼、クロスビー（ライト）',
                options: {
                    enzan_katsunuma: '付帯',
                    guest: '〇',
                    post: '✕',
                    locker: '+2200',
                    address: '+1100',
                    registration: '+3300',
                    residence: '✕',
                    group_share: '',
                    community: '付帯'
                }
            },
            {
                plan: 'ブレイクタイム',
                price: '3,300',
                admission: '1,010（共通）',
                hours: '毎日1時間無料、延長1時間220円',
                facilities: 'ノハコ',
                options: {
                    enzan_katsunuma: '✕',
                    guest: '✕',
                    post: '✕',
                    locker: '✕',
                    address: '✕',
                    registration: '✕',
                    residence: '✕',
                    group_share: '',
                    community: '+2200'
                }
            },
            {
                plan: 'ドロップイン',
                price: '550',
                admission: '0',
                hours: '平日10時～18時',
                facilities: 'ノハコ',
                options: {
                    enzan_katsunuma: '✕',
                    guest: '✕',
                    post: '✕',
                    locker: '✕',
                    address: '✕',
                    registration: '✕',
                    residence: '✕',
                    group_share: '',
                    community: '+2200'
                }
            }
        ]
    },
    katsunuma: {
        name: '勝沼',
        items: [
            {
                plan: '月額',
                price: '3,050',
                admission: '1,010（共通）',
                hours: '毎日0時～23時59分',
                facilities: '勝沼',
                options: {
                    enzan_katsunuma: '✕',
                    guest: '✕',
                    post: '✕',
                    locker: '✕',
                    address: '✕',
                    registration: '✕',
                    residence: '✕',
                    group_share: '',
                    community: '+2200'
                }
            },
            {
                plan: 'ドロップイン（回数チャージ）',
                price: '200',
                admission: '0',
                hours: '毎日0時～23時59分',
                facilities: '勝沼',
                options: {
                    enzan_katsunuma: '✕',
                    guest: '✕',
                    post: '✕',
                    locker: '✕',
                    address: '✕',
                    registration: '✕',
                    residence: '✕',
                    group_share: '',
                    community: '+2200'
                }
            }
        ]
    },
    other: {
        one_box_shop: [
            {
                plan: '１区画（施設利用なし）',
                price: '2,200',
                note: '物販してないと判断したらデイタイムプランを適用する'
            },
            {
                plan: '１区画（ライトプラン料金）',
                price: '4,400',
                note: '物販してないと判断したらデイタイムプランを適用する'
            },
            {
                plan: '住所利用',
                price: '1,100',
                note: ''
            },
            {
                plan: 'ポスト（店舗管理）',
                price: '1,100',
                note: ''
            },
            {
                plan: '入会金',
                price: '10,000',
                note: ''
            }
        ],
        seminar_room: {
            crosby: {
                room_a: [
                    { plan: '会員（Ｒ/Ｌ/Ｂ）', price: '2,200' },
                    { plan: '一般', price: '4,400' }
                ],
                room_b: [
                    { plan: '会員（Ｒ/Ｌ/Ｂ）', price: '2,200' },
                    { plan: '一般', price: '4,400' }
                ]
            }
        },
        parking: [
            { plan: 'レギュラー会員', price: '150' },
            { plan: 'その他', price: '200' }
        ]
    }
};
