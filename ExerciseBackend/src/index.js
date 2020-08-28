const express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors')

const app = express()
app.use(bodyParser.json());
app.options('*', cors())
app.use(cors())

app.use("/api/add", function (request, response) {
    var result = {
        success: true,
        message: "success",
        sum: 0
    }
    var { a, b } = request.body;
    if (a != null && b != null) {
        if (typeof a === "number" && typeof b === "number") {
            result.sum = a + b;
        } else {
            result.success = false;
            result.message = "non-numeric values";
        }
    } else {
        result.success = false;
        result.message = "non-numeric values";
    }
    response.json(result);
});

app.use("/api/getList", function (request, response) {
    var result = {
        success: true,
        message: "success",
        list: [
            {
                key: 1,
                image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2019/12/tavuk-kapama-yemekcom.jpg',
                title: "Tavuk Kapama",
                description: "Verilen malzeme ölçüleri 40 santimetre çapında sığ fırın tepsisi içindir. Daha küçük bir tepsi kullanacaksanız, ölçüleri ve fırında pişme süresini adapte etmeniz önerilir."
            }, {
                key: 2,
                image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2019/02/kiymali-patates-dolmasi-yemekcom1.jpg',
                title: "Patates Dolması",
                description: "Sevdiklerinizle birlikte hem şık hem de doyurucu bir akşam yemeği yemek istiyorsanız bu tarif tüm isteklerinizi karşılayacak türden!"
            }, {
                key: 3,
                image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2018/12/pureli-tepsi-koftesi-yemekcom-yeni.jpg',
                title: "Püreli Köfte",
                description: "Evde hep aynı köfteleri denemekten sıkılanlar, farklı, herkesin afiyetle yiyebileceği bir tarif arayışında olanlar!"
            }, {
                key: 4,
                image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2014/07/pacanga-boregi-tarifi-yenii.jpg',
                title: "Paçanga Böreği",
                description: "Pastırmanın büyüleyen tadı, kaşar peynirinin bir ısırıkta uzayan dokusu... Her öğünde harika bir tercih olan paçanga böreğini genelde restoranlarda başlangıç olarak yemeye alıştık."
            }, {
                key: 5,
                image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2017/04/yag-mantisi-tarifi.jpg',
                title: "Yağ Mantısı",
                description: "Mantının her hali güzel ama Kayseri'nin bir de yağ mantısı var ki sormayın. Kayseri bir kaşığa 40 tane mantı sığdrımasıyla ünlü ama mantının bir tanesi bile sizi doyurmaya niyetli."
            }, {
                key: 6,
                image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2019/02/simit-kebabi-yemekcom.jpg',
                title: "Simit Kebabı",
                description: "Gaziantep mutfağının müthiş lezzetlerinden biri olan simit kebabını yerinde yemek en güzeli! Ama bu lezzeti evde de yapmaki sevdiklerinize mükellef bir sofra kurmak istiyorsanız, size ev yapımı nefis bir simit kebabı tarifimiz var!"
            }
        ]

    }


    setTimeout(() => {
        result.success = true;
        result.message = "";
        response.json(result);
    }, 1300);
});

app.listen(8090, () => console.log("Server Ready On port 8090"));