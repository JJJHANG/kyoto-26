import { DailyPlan } from "./types";

// Note: Flight info is now embedded in Day 1 and Day 10 activities

export const ITINERARY: DailyPlan[] = [
    {
        date: "3/5",
        day: "Day 1",
        title: "啟程京都",
        location: "台北 > 關西機場 > 京都",
        imageUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kansai_International_Airport_(1).jpg",
        activities: [
            {
                time: "06:00",
                title: "機場接送",
                type: "transport",
                description: "前往桃園國際機場",
                guideNotes:
                    "預約好的機場接送將於 06:00 準時抵達。請再次確認護照、日幣及 Visit Japan Web QR Code 是否已準備妥當。",
            },
            {
                time: "06:45",
                title: "抵達桃園機場",
                type: "info",
                description: "第二航廈報到",
                guideNotes:
                    "預計於 06:45 抵達桃園機場第二航廈。請前往航空公司櫃檯辦理登機手續及行李託運。",
            },
            {
                time: "09:45",
                title: "桃園機場起飛",
                type: "transport",
                description: "台北 → 大阪 關西機場",
                guideNotes: "搭乘航班前往大阪關西機場。飛行時間約 2.5 小時。",
                bookingInfo: [
                    { label: "航班", value: "CI132" },
                    { label: "航廈", value: "T2" },
                ],
            },
            {
                time: "13:20",
                title: "抵達關西機場",
                type: "info",
                description: "第一航廈入境",
                guideNotes:
                    "抵達關西機場第一航廈。完成入境審查與行李領取後，請前往 JR 關西機場站。",
            },
            {
                time: "14:30",
                title: "前往京都",
                type: "transport",
                description: "搭乘特急 HARUKA 號",
                guideNotes:
                    "HARUKA 特急列車直達京都車站，車程約 80 分鐘。停靠第 4 月台，所有的車身皆有 Hello Kiity 彩繪",
                link: "https://www.westjr.co.jp/global/tc/ticket/icoca-haruka/",
                tags: ["已提前預約", "QR Code 乘車"],
            },
            {
                time: "16:30",
                title: "抵達飯店",
                type: "stay",
                description: "THE BLOSSOM 京都",
                guideNotes:
                    "搭乘「烏丸線」從京都站至五条站，車程約兩分鐘，再步行至飯店。",
                link: "https://www.jrk-hotels.co.jp/Kyoto/",
                tags: ["五条站旁", "已提前付款"],
            },
            {
                time: "17:30",
                title: "錦市場晚餐",
                type: "food",
                description: "京都的廚房",
                guideNotes: "散步至錦市場享用晚餐，腳程約 15 分鐘。",
                spotCards: [
                    {
                        name: "富美家",
                        subtitle: "鍋燒烏龍麵",
                    },
                    {
                        name: "三木鶏卵",
                        subtitle: "日式高湯蛋捲",
                    },
                    {
                        name: "錦 魚力",
                        subtitle: "海鮮串燒",
                    },
                    {
                        name: "カリカリ博士",
                        subtitle: "章魚燒",
                    },
                    {
                        name: "新潟カツ丼 タレカツ",
                        subtitle: "豬排丼",
                    },
                    {
                        name: "麺匠 たか松",
                        subtitle: "沾麵",
                    },
                ],
            },
        ],
    },
    {
        date: "3/6",
        day: "Day 2",
        title: "和服體驗與洛東",
        location: "清水寺 > 祇園",
        imageUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kiyomizu.jpg",
        activities: [
            {
                time: "07:00",
                title: "和服體驗",
                type: "info",
                description: "身穿和服準備走到鐵腿",
                guideNotes:
                    "目前首選未來颯和服，位於八坂神社附近。可以從飯店搭乘公車抵達。",
                tags: ["需預約"],
            },
            {
                time: "08:00",
                title: "洛東名勝巡禮",
                type: "sightseeing",
                description:
                    "清水寺、二年坂、石坪小路、高台寺、八坂塔、八坂神社",
                guideNotes:
                    "從八坂神社開始，經過石坪小路、高台寺與八坂塔，沿著產寧坂（三年坂）、二年坂漫步走到清水寺。",
                tags: ["世界遺產"],
            },
            {
                time: "14:30",
                title: "祇園風情",
                type: "sightseeing",
                description: "祇園白川、花見小路、建仁寺",
                guideNotes: "下午漫步於祇園區域，結束之後歸還和服。",
                tags: ["拍照聖地"],
            },
            {
                time: "16:30",
                title: "福壽園買茶葉",
                type: "food",
                description: "京都老牌茶舖",
                guideNotes: "挑選京都茶葉作為伴手禮。",
                link: "https://www.fukujuen.com/",
            },
        ],
    },
    {
        date: "3/7",
        day: "Day 3",
        title: "嵐山嵯峨野",
        location: "嵐山 > 渡月橋",
        imageUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Arashiyama_013.jpg",
        activities: [
            {
                time: "08:00",
                title: "前往嵐山",
                type: "transport",
                description: "JR 嵯峨野線",
                guideNotes: "從京都車站搭乘 JR 「嵯峨野線」前往嵯峨嵐山站。",
                tags: ["JR Pass 可用"],
            },
            {
                time: "09:45",
                title: "嵐山漫步",
                type: "sightseeing",
                description: "竹林之道、野宮神社",
                guideNotes:
                    "從車站步行至竹林之道，腳程約 15 分鐘，沿途走訪野宮神社、龜岡公園",
                tags: ["自然景觀"],
            },
            {
                time: "13:20",
                title: "嵐山老街",
                type: "food",
                description: "美食與伴手禮",
                guideNotes:
                    "在嵐山老街享用午餐，這裡有許多湯豆腐料理、蕎麥麵以及各式特色小吃。",
                tags: ["午餐時段"],
            },
            {
                time: "16:30",
                title: "嵐山地標",
                type: "sightseeing",
                description: "天龍寺與渡月橋",
                guideNotes:
                    "下午參觀世界遺產天龍寺及其美麗的曹源池庭園，最後在渡月橋欣賞嵐山的山光水色。",
                tags: ["世界遺產"],
            },
        ],
    },
    {
        date: "3/8",
        day: "Day 4",
        title: "洛北與伏見",
        location: "金閣寺 > 伏見稻荷",
        imageUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine,_Kyoto,_Japan.jpg",
        activities: [
            {
                time: "08:00",
                title: "洛北名剎",
                type: "sightseeing",
                description: "金閣寺、仁和寺、北野天滿宮",
                tags: ["世界遺產"],
            },
            {
                time: "13:20",
                title: "京都站",
                type: "info",
                description: "交通樞紐與購物",
                guideNotes:
                    "回到京都車站，可以在此享用午餐，或在伊勢丹百貨、地下街進行購物。",
            },
            {
                time: "16:30",
                title: "伏見稻荷大社",
                type: "sightseeing",
                description: "千本鳥居",
                guideNotes:
                    "傍晚前往伏見稻荷大社，穿梭在壯觀的千本鳥居之間，感受神祕的氛圍。",
                tags: ["必訪"],
            },
        ],
    },
    {
        date: "3/9",
        day: "Day 5",
        title: "宇治茶香",
        location: "宇治",
        imageUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Byodo-in_Uji01pbs2640.jpg",
        activities: [
            {
                time: "08:00",
                title: "前往宇治",
                type: "transport",
                description: "抹茶之鄉宇治",
                guideNotes: "搭乘 JR 「奈良線」前往宇治。",
                tags: ["抹茶之旅"],
            },
            {
                time: "09:45",
                title: "宇治神社巡禮",
                type: "sightseeing",
                description: "宇治上神社、宇治神社",
                guideNotes:
                    "參訪日本最古老的神社建築宇治上神社，以及鄰近的宇治神社。",
                tags: ["世界遺產"],
            },
            {
                time: "14:30",
                title: "平等院與宇治公園",
                type: "sightseeing",
                description: "鳳凰堂與川畔散策",
                tags: ["世界遺產", "國寶"],
            },
        ],
    },
    {
        date: "3/10",
        day: "Day 6",
        title: "前進大阪",
        location: "京都 > 大阪",
        imageUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_Castle_02bs3200.jpg",
        activities: [
            {
                time: "00:00",
                title: "李豬豬生日",
                type: "info",
                description: "慶祝邁入 33 歲的豬豬",
                guideNotes: "🎂🎉",
            },
            {
                time: "09:00",
                title: "前往大阪",
                type: "transport",
                description: "京都 → 大阪",
                guideNotes: "搭乘 JR 「京都線」前往大阪，車程約 25 分鐘。",
            },
            {
                time: "10:00",
                title: "抵達飯店",
                type: "stay",
                description: "Hotel Intergate Osaka Umeda",
                guideNotes: "提前抵達寄放行李開始大阪觀光行程。",
            },
            {
                time: "14:00",
                title: "大阪城公園",
                type: "sightseeing",
                description: "大阪城天守閣",
                guideNotes:
                    "參觀大阪城公園，欣賞壯麗的天守閣外觀。這裡是大阪的地標，也是歷史的見證。",
                tags: ["歷史地標"],
            },
            {
                time: "18:00",
                title: "心齋橋與道頓堀",
                type: "sightseeing",
                description: "購物與美食天堂",
                guideNotes:
                    "晚上在心齋橋筋購物，並在道頓堀與固力果跑跑人合照，享用大阪燒或章魚燒。",
                tags: ["美食", "購物"],
            },
        ],
    },
    {
        date: "3/11",
        day: "Day 7",
        title: "港灣風情",
        location: "海遊館 > 天保山",
        imageUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_tempozan_giant_ferris_wheel.jpg",
        activities: [
            {
                time: "10:00",
                title: "海遊館",
                type: "sightseeing",
                description: "世界最大級水族館",
                guideNotes:
                    "建議開門就進場以避開人潮。觀察巨大的鯨鯊與各式海洋生物，體驗壯闊的深海世界。",
                link: "https://www.kaiyukan.com/",
                tags: ["室內景點"],
            },
            {
                time: "14:00",
                title: "天保山 Marketplace",
                type: "food",
                description: "購物與美食",
                guideNotes:
                    "在 Marketplace 享用午餐，這裡有許多特色小店與美食街，還有復古風格的「浪花美食小巷」。",
            },
            {
                time: "15:00",
                title: "大阪文化館",
                type: "sightseeing",
                description: "清水模設計",
                guideNotes: "紀念三得利創業90週年，委託安藤忠雄所設計。",
            },
            {
                time: "16:00",
                title: "天保山大摩天輪",
                type: "sightseeing",
                description: "俯瞰大阪港",
                guideNotes: "搭乘摩天輪，欣賞大阪港及周邊城市的壯麗景色。",
                tags: ["景觀"],
            },
        ],
    },
    {
        date: "3/12",
        day: "Day 8",
        title: "奈良一日遊",
        location: "大阪 > 奈良",
        imageUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Nara_Park_-_panoramio_(2).jpg",
        activities: [
            {
                time: "09:00",
                title: "前往奈良",
                type: "transport",
                description: "大阪 → 奈良",
                guideNotes: "搭乘近鐵特急或快急前往奈良，車程約 50 分鐘。",
            },
            {
                time: "10:30",
                title: "奈良公園與東大寺",
                type: "sightseeing",
                description: "與鹿共舞",
                guideNotes:
                    "參觀完東大寺後前往若草山步道，步道單程約 30 分鐘。",
                tags: ["世界遺產", "動物互動"],
            },
            {
                time: "14:00",
                title: "春日大社",
                type: "sightseeing",
                description: "萬燈籠之社",
                guideNotes:
                    "漫步於掛滿燈籠的春日大社參道，感受神聖莊嚴的氣氛。",
                tags: ["世界遺產"],
            },
            {
                time: "16:00",
                title: "興福寺",
                type: "sightseeing",
                description: "五重塔",
                guideNotes: "參觀興福寺，欣賞壯觀的五重塔，隨後返回大阪。",
            },
        ],
    },
    {
        date: "3/13",
        day: "Day 9",
        title: "都會購物與夜景",
        location: "伊根舟屋 > 天橋立",
        imageUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Amanohashidate%20view%20from%20Mt%20Moju01s3s4200.jpg",
        activities: [
            {
                time: "07:00",
                title: "抵達集合地點",
                type: "info",
                description: "蟹道樂道頓堀東店",
                guideNotes: "搭乘至近鐵「日本橋站」後步行 2 分鐘",
                tags: ["美食", "購物"],
            },
            {
                time: "07:15",
                title: "天橋立一日遊",
                type: "sightseeing",
                description: "伊根舟屋遊船、天橋立、美山茅屋之里",
                guideNotes: "參加 KKDAY 的一日行程",
                tags: ["已提前付款"],
            },
        ],
    },
    {
        date: "3/14",
        day: "Day 10",
        title: "滿載而歸",
        location: "大阪 > 關西機場 > 台北",
        imageUrl:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Kansai_International_Airport_(1).jpg",
        activities: [
            {
                time: "09:30",
                title: "前往機場",
                type: "transport",
                description: "搭乘 HARUKA 或南海電鐵",
                guideNotes:
                    "建議 09:30-10:00 從飯店出發，確保 11:30 前抵達機場辦理手續。",
            },
            {
                time: "11:30",
                title: "抵達關西機場",
                type: "info",
                description: "報到與最後購物",
                guideNotes: "辦理登機手續後，可以在機場免稅店進行最後採買。",
            },
            {
                time: "14:30",
                title: "返程飛行",
                type: "transport",
                description: "大阪 關西機場 → 台北",
                guideNotes:
                    "搭乘 14:30 起飛的航班，帶著滿滿的回憶回家。期待下次的日本之旅！",
                bookingInfo: [
                    { label: "航班", value: "CI153" },
                    { label: "航廈", value: "T1" },
                ],
            },
        ],
    },
];
