import { DailyPlan } from "./types";

// Note: Flight info is now embedded in Day 1 and Day 10 activities

export const ITINERARY: DailyPlan[] = [
    {
        date: "3/5",
        day: "Day 1",
        title: "啟程京都",
        location: "台北 > 關西機場 > 京都",
        imageUrl:
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1000&auto=format&fit=crop",
        activities: [
            {
                time: "05:30",
                title: "機場接送",
                type: "transport",
                description: "前往桃園國際機場",
                guideNotes:
                    "預約好的機場接送將於 05:30 準時抵達。請再次確認護照、日幣及 Visit Japan Web QR Code 是否已準備妥當。",
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
                    { label: "航班", value: "JX822 / CI156 / BR132" },
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
                // address:
                //     "〒600-8104 京都府京都市下京区五条通東洞院東入万寿寺町140番2",
                // jpName: "ザ ブラッサム 京都",
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
                        mapQuery: "富美家 錦店 京都",
                    },
                    {
                        name: "三木鶏卵",
                        subtitle: "日式高湯蛋捲",
                        mapQuery: "三木鶏卵 京都 錦市場",
                    },
                    {
                        name: "錦 魚力",
                        subtitle: "海鮮串燒",
                        mapQuery: "錦 魚力 京都 錦市場",
                    },
                    {
                        name: "カリカリ博士",
                        subtitle: "章魚燒",
                        mapQuery: "カリカリ博士 錦市場",
                    },
                    {
                        name: "新潟カツ丼 タレカツ",
                        subtitle: "豬排丼",
                        mapQuery: "新潟カツ丼 タレカツ 京都",
                    },
                    {
                        name: "麺匠 たか松",
                        subtitle: "沾麵",
                        mapQuery: "麺匠たか松 四条店",
                    },
                ],

                // address: "〒604-8054 京都府京都市中京区西大文字町609",
                // jpName: "錦市場",
            },
            // {
            //     time: "19:00",
            //     title: "鴨川散步",
            //     type: "sightseeing",
            //     description: "晚風徐徐的鴨川畔",
            //     guideNotes: "餐後漫步於鴨川畔，感受京都夜晚的寧靜與浪漫。",
            //     tags: ["夜景", "散策"],
            // },
        ],
    },
    {
        date: "3/6",
        day: "Day 2",
        title: "和服體驗與洛東",
        location: "清水寺 > 祇園",
        imageUrl:
            "https://images.unsplash.com/photo-1595839021616-565d7069502b?q=80&w=1000&auto=format&fit=crop",
        activities: [
            {
                time: "Morning",
                title: "穿和服",
                type: "info",
                description: "變身京都旅人",
                guideNotes:
                    "早晨預約和服體驗，穿上傳統服飾漫步古都，是京都旅行的經典行程。",
                tags: ["需預約"],
            },
            {
                time: "06:45",
                title: "洛東名勝巡禮",
                type: "sightseeing",
                description:
                    "清水寺、二年坂、石坪小路、高台寺、八坂塔、八坂神社",
                guideNotes:
                    "從清水寺開始，沿著產寧坂（三年坂）、二年坂漫步。經過石坪小路與高台寺，最後抵達八坂塔與八坂神社。",
                address: "〒605-0862 京都府京都市東山区清水1丁目294",
                jpName: "清水寺",
                tags: ["世界遺產", "必訪"],
            },
            {
                time: "14:30",
                title: "祇園風情",
                type: "sightseeing",
                description: "祇園白川、花見小路、建仁寺",
                guideNotes:
                    "下午漫步於祇園區域。白川畔的柳樹與石板路極具風情，花見小路則有機會見到藝伎。最後參訪京都最古老的禪寺——建仁寺。",
                address: "〒605-0074 京都府京都市東山区祇園町南側",
                jpName: "花見小路",
                tags: ["拍照聖地"],
            },
            {
                time: "16:30",
                title: "福壽園買茶葉",
                type: "food",
                description: "京都老牌茶舖",
                guideNotes: "前往福壽園挑選精緻的京都茶葉作為伴手禮。",
                address: "〒600-8005 京都府京都市下京区立売東町21",
                jpName: "福寿園 京都本店",
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
            "https://images.unsplash.com/photo-1588698485203-d2d480f2d475?q=80&w=1000&auto=format&fit=crop",
        activities: [
            {
                time: "08:00",
                title: "前往嵐山",
                type: "transport",
                description: "JR 嵯峨野線",
                guideNotes: "從京都車站搭乘 JR 嵯峨野線前往嵯峨嵐山站。",
                tags: ["JR Pass 可用"],
            },
            {
                time: "09:45",
                title: "嵐山深度遊",
                type: "sightseeing",
                description: "嵐電嵐山站、竹林之道、野宮神社、常寂光寺",
                guideNotes:
                    "抵達嵐山後，先參觀嵐電車站的「和服森林」。接著漫步於著名的竹林之道，參拜野宮神社，並前往以紅葉著稱的常寂光寺。",
                address: "〒616-8393 京都府京都市右京区嵯峨小倉山田淵山町",
                jpName: "嵐山 竹林の小径",
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
                title: "天龍寺與渡月橋",
                type: "sightseeing",
                description: "嵐山地標",
                guideNotes:
                    "下午參觀世界遺產天龍寺及其美麗的曹源池庭園，最後在渡月橋欣賞嵐山的山光水色。",
                address: "〒616-8385 京都府京都市右京区嵯峨天龍寺芒ノ馬場町68",
                jpName: "天龍寺",
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
            "https://images.unsplash.com/photo-1572973809249-144a144e5200?q=80&w=1000&auto=format&fit=crop",
        activities: [
            {
                time: "08:00",
                title: "洛北名剎",
                type: "sightseeing",
                description: "金閣寺、仁和寺、北野天滿宮",
                guideNotes:
                    "早晨參觀金光閃閃的金閣寺，接著前往以櫻花聞名的仁和寺，最後到北野天滿宮祈求學業與智慧。",
                address: "〒603-8361 京都府京都市北区金閣寺町1",
                jpName: "金閣寺",
                tags: ["世界遺產"],
            },
            {
                time: "13:20",
                title: "京都站",
                type: "info",
                description: "交通樞紐與購物",
                guideNotes:
                    "回到京都車站，可以在此享用午餐，或在伊勢丹百貨、地下街進行購物。",
                address: "〒600-8216 京都府京都市下京区東塩小路町",
                jpName: "京都駅",
            },
            {
                time: "16:30",
                title: "伏見稻荷大社",
                type: "sightseeing",
                description: "千本鳥居",
                guideNotes:
                    "傍晚前往伏見稻荷大社，穿梭在壯觀的千本鳥居之間，感受神祕的氛圍。",
                address: "〒612-0882 京都府京都市伏見区深草藪之内町68",
                jpName: "伏見稲荷大社",
                tags: ["必訪", "免費參觀"],
            },
        ],
    },
    {
        date: "3/9",
        day: "Day 5",
        title: "宇治茶香",
        location: "宇治",
        imageUrl:
            "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=1000&auto=format&fit=crop",
        activities: [
            {
                time: "08:00",
                title: "前往宇治",
                type: "transport",
                description: "JR 奈良線",
                guideNotes: "搭乘 JR 奈良線前往抹茶之鄉——宇治。",
                tags: ["抹茶之旅"],
            },
            {
                time: "09:45",
                title: "宇治神社巡禮",
                type: "sightseeing",
                description: "宇治上神社、宇治神社",
                guideNotes:
                    "參訪日本最古老的神社建築——宇治上神社，以及鄰近的宇治神社。",
                address: "〒611-0021 京都府宇治市宇治山田59",
                jpName: "宇治上神社",
                tags: ["世界遺產"],
            },
            {
                time: "14:30",
                title: "平等院與宇治公園",
                type: "sightseeing",
                description: "鳳凰堂與川畔散策",
                guideNotes:
                    "參觀印在 10 日圓硬幣上的平等院鳳凰堂，隨後在宇治公園與宇治川畔悠閒散步，結束這趟美好的京都之旅。",
                address: "〒611-0021 京都府宇治市宇治蓮華116",
                jpName: "平等院",
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
            "https://images.unsplash.com/photo-1590559259882-680c23fa0cb7?q=80&w=1000&auto=format&fit=crop",
        activities: [
            {
                time: "09:00",
                title: "移動至大阪",
                type: "transport",
                description: "京都 -> 大阪",
                guideNotes:
                    "搭乘 JR 或近鐵前往大阪，車程約 30-45 分鐘。抵達後先前往飯店寄放行李，開始大阪之旅。",
            },
            {
                time: "14:00",
                title: "大阪城公園",
                type: "sightseeing",
                description: "大阪城天守閣",
                guideNotes:
                    "參觀大阪城公園，欣賞壯麗的天守閣外觀。這裡是大阪的地標，也是歷史的見證。",
                address: "〒540-0002 大阪府大阪市中央区大阪城1−1",
                jpName: "大阪城",
                tags: ["歷史地標"],
            },
            {
                time: "18:00",
                title: "心齋橋與道頓堀",
                type: "sightseeing",
                description: "購物與美食天堂",
                guideNotes:
                    "晚上在心齋橋筋購物，並在道頓堀與固力果跑跑人合照，享用大阪燒或章魚燒。",
                address: "〒542-0071 大阪府大阪市中央区道頓堀",
                jpName: "道頓堀",
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
            "https://images.unsplash.com/photo-1516644490365-98547900b957?q=80&w=1000&auto=format&fit=crop",
        activities: [
            {
                time: "10:00",
                title: "海遊館",
                type: "sightseeing",
                description: "世界最大級水族館",
                guideNotes:
                    "建議開門就進場以避開人潮。觀察巨大的鯨鯊與各式海洋生物，體驗壯闊的深海世界。",
                address: "〒552-0022 大阪府大阪市港区海岸通1丁目1−10",
                jpName: "海遊館",
                link: "https://www.kaiyukan.com/",
                tags: ["親子推薦", "室內景點"],
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
                time: "16:00",
                title: "天保山大摩天輪",
                type: "sightseeing",
                description: "俯瞰大阪港",
                guideNotes: "搭乘摩天輪，欣賞大阪港及周邊城市的壯麗景色。",
                address: "〒552-0022 大阪府大阪市港区海岸通1丁目1−10",
                jpName: "天保山大観覧車",
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
            "https://images.unsplash.com/photo-1525049969348-e8a08c5c7657?q=80&w=1000&auto=format&fit=crop",
        activities: [
            {
                time: "09:00",
                title: "前往奈良",
                type: "transport",
                description: "近鐵大阪難波 -> 奈良",
                guideNotes: "搭乘近鐵特急或快急前往奈良，車程約 40 分鐘。",
            },
            {
                time: "10:30",
                title: "奈良公園與東大寺",
                type: "sightseeing",
                description: "與鹿共舞",
                guideNotes:
                    "在奈良公園餵食可愛（但貪吃）的鹿，並參觀擁有巨大佛像的東大寺。",
                address: "〒630-8211 奈良県奈良市雜司町406-1",
                jpName: "東大寺",
                tags: ["世界遺產", "動物互動"],
            },
            {
                time: "14:00",
                title: "春日大社",
                type: "sightseeing",
                description: "萬燈籠之社",
                guideNotes:
                    "漫步於掛滿燈籠的春日大社參道，感受神聖莊嚴的氣氛。",
                address: "〒630-8212 奈良県奈良市春日野町160",
                jpName: "春日大社",
                tags: ["世界遺產"],
            },
            {
                time: "16:00",
                title: "興福寺",
                type: "sightseeing",
                description: "五重塔",
                guideNotes: "參觀興福寺，欣賞壯觀的五重塔，隨後返回大阪。",
                address: "〒630-8213 奈良県奈良市登大路町48",
                jpName: "興福寺",
            },
        ],
    },
    {
        date: "3/13",
        day: "Day 9",
        title: "都會購物與夜景",
        location: "黑門市場 > 阿倍野",
        imageUrl:
            "https://images.unsplash.com/photo-1590253232288-7557a66cb977?q=80&w=1000&auto=format&fit=crop",
        activities: [
            {
                time: "10:00",
                title: "黑門市場 / 日本橋",
                type: "food",
                description: "大阪的廚房與動漫街",
                guideNotes:
                    "早晨在黑門市場品嚐新鮮海鮮，隨後逛逛日本橋的動漫與電器店。",
                address: "〒542-0073 大阪府大阪市中央区日本橋2丁目4−1",
                jpName: "黑門市場",
                tags: ["美食", "購物"],
            },
            {
                time: "15:00",
                title: "阿倍野 Harukas",
                type: "sightseeing",
                description: "日本第一高樓購物",
                guideNotes: "在近鐵百貨購物，準備最後的伴手禮。",
            },
            {
                time: "17:30",
                title: "阿倍野展望台",
                type: "sightseeing",
                description: "HARUKAS 300",
                guideNotes:
                    "登上展望台看日落與大阪百萬夜景，為旅程畫下完美句點。",
                address: "〒545-6016 大阪府大阪市阿倍野区阿倍野筋1丁目1−43",
                jpName: "あべのハルカス300",
                tags: ["夜景", "景觀"],
            },
        ],
    },
    {
        date: "3/14",
        day: "Day 10",
        title: "滿載而歸",
        location: "大阪 > 關西機場 > 台北",
        imageUrl:
            "https://images.unsplash.com/photo-1569614425712-4299b959827b?q=80&w=1000&auto=format&fit=crop",
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
                description: "大阪 KIX ➔ 台北 TPE",
                guideNotes:
                    "搭乘 14:30 起飛的航班，帶著滿滿的回憶回家。期待下次的日本之旅！",
                bookingInfo: [
                    { label: "起飛時間", value: "14:30" },
                    { label: "航廈", value: "T1" },
                ],
            },
        ],
    },
];
