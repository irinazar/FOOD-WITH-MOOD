"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Restaurants",
      [
        {
          title: "Pa-paella",
          description:
            "Внушительные порции аппетитных салатов, разнообразные закуски с испанским акцентом, горячие блюда, соблазнительные десерты - все придумано для душевных компаний, которые любят вкусную кухню и вино.",
          adress: "Банковский переулок, дом 2/5",
          phone: "+7 (926) 603-53-23",
          coordX: 55.762099,
          coordY: 37.635026,
          status: "Accepted",
          countryId: 1,
          restOwnerId: 1,
        },
        {
          title: "El Asador ",
          description:
            "El Asador является старейшим действующим испанским рестораном Москвы и местом притяжения для всех фанатов гастрономии и культуры Испании. Аутентичная кухня и строгое следование классическим рецептам из Страны Басков особенно ценится испанцами, которые живут в столице и являются костяком постоянных гостей ресторана.",
          adress: "Большая Ордынка 45/8 стр. 3",
          phone: "+7 495 953-1564",
          coordX: 55.734937,
          coordY: 37.62466,
          status: "Accepted",
          countryId: 1,
          restOwnerId: 2,
        },
        {
          title: "El Idilio",
          description:
            "El Idilio — ресторан традиционной испанской кухни, основное кредо которого — познакомить москвичей и гостей столицы с культурой и вкусами страны конкистадоров, передать весь колорит и темперамент через гастрономию и атмосферу.",
          adress: "Благовещенский пер., д. 3, стр.1",
          phone: "+7 (926) 603-53-23",
          coordX: 55.767691,
          coordY: 37.598052,
          status: "Accepted",
          countryId: 1,
          restOwnerId: 3,
        },
        {
          title: "JasMin",
          description:
            "«JasMin» — уютный корейский ресторан на Ленинском проспекте, где вас ждет разнообразие восточных блюд, которые покорят сердце, станут первыми в списке любимых кушаний.",
          adress: "Ленинский проспект, 121/1к3",
          phone: "+7 (499) 749-67-02",
          coordX: 55.649251,
          coordY: 37.484406,
          status: "Accepted",
          countryId: 2,
          restOwnerId: 6,
        },
        {
          title: "ИНСАМ",
          description:
            "«Принцип работы нашего ресторана заключается в том, чтобы передать национальную корейскую кухню в первозданном виде. Шеф-повар ресторана «ИНСАМ» Дмитрий Шин знает о корейской кухне абсолютно все: от приготовления классических корейских блюд до важных деталей, берущих свои корни в далеком прошлом. В каждом блюде нашего ресторана вы будете чувствовать настоящий корейский колорит, любовь шеф-повара к кулинарному делу и изысканность национальных блюд, приготовленных согласно традиционным корейским рецептурам.",
          adress: "Пресненская наб., д. 2",
          phone: "+7 (499) 749-67-02",
          coordX: 55.749162,
          coordY: 37.539742,
          status: "Accepted",
          countryId: 2,
          restOwnerId: 5,
        },
        {
          title: "Дом Куксу",
          description:
            "«Дом Куксу» — семейный ресторан, корейской кухни. Основанный Викторией Ли в 2014 году. Это первый ресторан в Москве, специализирующийся на традиционной давленной корейской лапше. Слово «дом» в названии — символ уюта, тепла, любви, семьи и заботы.",
          adress: "Симферопольский бульвар 22к3",
          phone: "+7 (926) 090-69-96",
          coordX: 55.646985,
          coordY: 37.604708,
          status: "Accepted",
          countryId: 2,
          restOwnerId: 4,
        },
        {
          title: "La Bottega Siciliana",
          description:
            "La bottega siciliana — ресторан аутентичной сицилийской кухни в шаге от Красной площади. Ресторан находится в здании отеля Four Seasons, руководят им бренд-шеф Нино Грациано и Semifredo Group. Здесь готовят пиццу в дровяной печи, домашнюю пасту, итальянские десерты и мороженое в классическом виде, но также в меню есть раздел с четырьмя русскими блюдами.",
          adress: "ул. Охотный Ряд, 2",
          phone: "+7 495 660-03-83",
          coordX: 55.757131,
          coordY: 37.617114,
          status: "Accepted",
          countryId: 3,
          restOwnerId: 3,
        },

        {
          title: "Officina",
          description:
            "Ресторан с классическими итальянскими блюдами в Китай-городе. Шеф-поваром заведения стал Мирко Дзаго («Сыр»). Особое внимание он уделил пасте — ее тут около 10 видов. Есть как классические домашние спагетти или карбонара, так и более гастрономичные вариации. Из горячего ― легкие блюда в средиземноморском стиле. Каждый заказ сопровождает корзина домашнего хлеба: чиабатта, фокачча и гриссини. При «Оффичине» работает сырная лавка. Название ресторана переводится как «мастерская». Это отражено в интерьере: много геометрических деревянных деталей, на стене шестеренки и схемы, а с потолка свисают лампочки в индустриальном стиле.",
          adress: "ул. Забелина 1",
          phone: "+7 (499) 391-08-57",
          coordX: 55.754552,
          coordY: 37.637398,
          status: "Accepted",
          countryId: 3,
          restOwnerId: 6,
        },
        {
          title: "Piazza Italiana",
          description:
            "Премиум-ресторан европейской кухни на Пречистенской набережной. В обширном меню ресторана Piazza Italiana преобладают итальянские блюда вроде ассорти сыров, пасты, лазаньи. Из фирменного — моцарелла из буйволиного молока; лапша с трюфельным маслом, заправленная в головке сыра. Винный лист для ресторана «Пьяцца Итальяна» составил лучший сомелье по версии Wheretoeat 2018 Александр Зубков: здесь биодинамика соседствует с редкими европейскими образцами. Для торжественных мероприятий в Piazza Italiana предусмотрен банкетный зал и кейтеринг.",
          adress: "Пречистенская наб. 13с1",
          phone: "+7 495 788-68-78",
          coordX: 55.738029,
          coordY: 37.603972,
          status: "Accepted",
          countryId: 3,
          restOwnerId: 9,
        },
        {
          title: "Дарбарс",
          description:
            "Большое меню «Дарбарса» состоит из аутентичных блюд юга и севера Индии, более 50 позиций в нем — вегетарианские. Основными ингредиентами являются креветки, курица, мясо ягненка, баранина, овощи, травы, орехи и специи. Есть разделы с блюдами из тандура, с карри, с рисом. На отдельную страницу вынесены позиции южно-индийского региона: блины с овощами и мясом, пирожки, лепешки. По будням предлагают меню бизнес-ланчей, можно выбрать вегетарианский вариант. Интерьер современный, с восточными элементами в виде индийских картин и резных украшений из дерева на стенах и окнах.",
          adress: "пр. Мира 79",
          phone: "+7 (495) 930-23-65",
          coordX: 55.79098,
          coordY: 37.634182,
          status: "Accepted",
          countryId: 4,
          restOwnerId: 1,
        },
        {
          title: "Moscow-Delhi",
          description:
            "Moscow-Delhi — камерный аутентичный индийский ресторан на Патриарших прудах. Формат заведения владельцы определяют как даба — это популярная в Индии забегаловка, где в основном обедают местные жители. Помещение ресторана небольшое — в зале всего три стола и открытая кухня с традиционной глиняной печью тандур. Оформлением пространства создатели занимались самостоятельно, получилось очень колоритно — под потолком на веревке сушатся полотенца, полки обставлены старинной кухонной утварью, а стены отштукатурены глиной с добавлением соломы. В Индии снятие обуви при входе в дом считается обязательным, противное рассматривается как неуважение к хозяевам. Поэтому в «Москва-Дели» всех гостей просят разуться.",
          adress: "пер. Ермолаевский 7",
          phone: "+7 (925) 193-19-16",
          coordX: 55.764237,
          coordY: 37.59047,
          status: "Accepted",
          countryId: 4,
          restOwnerId: 4,
        },
        {
          title: "Devi",
          description:
            "Кафе-бар азиатской кухни у Тропаревского лесопарка. Меню поделено на две части – индийскую и китайскую. Специалитеты Devi – карри, лапша и рис, лепешки роти, чикен тикка, спринг роллы; широкий выбор супов и печного горячего. У гостей есть возможность варьировать остроту заказанных блюд. В карте напитков – чайная линейка и кофе, широкий ассортимент пива. По будням в обеденные часы здесь действует бизнес-ланч (дополнительно включен вегетарианский вариант). Предоставляются услуги кейтеринга.",
          adress: "Миклухо-Маклая 21а",
          phone: "+7 (495) 544-46-40",
          coordX: 55.651577,
          coordY: 37.507663,
          status: "Accepted",
          countryId: 4,
          restOwnerId: 3,
        },
        {
          title: "Björn",
          description:
            "Ресторан северной кухни на Пятницкой улице, название которого выбрано неслучайно, ведь Björn в переводе со шведского — медведь, главный обитатель и хранитель северных лесов. Для нас бережное отношение к окружающему миру действительно имеет значение. В интерьере ресторана использовались только натуральные материалы: внутри — дерево, камень, мох, рог — благодаря всему это пространство выглядит одновременно лаконичным и суровым.",
          adress: "ул. Пятницкая 3/4 стр. 1",
          phone: "+7 (495) 544-46-40",
          coordX: 55.745498,
          coordY: 37.627032,
          status: "Accepted",
          countryId: 5,
          restOwnerId: 7,
        },
        {
          title: "Scandinavia",
          description:
            "Известный ресторан северной кухни и любимое место московских экспатов. Маринованная селедка, оленина и шведские фрикадельки появились здесь задолго до возникновения моды на скандинавскую кухню. Неброский интерьер разбавляют светильники из цветного стекла. Летом популярна терраса в тени деревьев Малого Палашевского переулка. Среди гостей много иностранцев, все официанты говорят по-английски.",
          adress: "М.Палашевский пер. 7",
          phone: "+7 (495) 937-56-30",
          coordX: 55.765514,
          coordY: 37.602256,
          status: "Accepted",
          countryId: 5,
          restOwnerId: 7,
        },
        {
          title: "Арарат",
          description:
            "«Арарат» — армянский ресторан на Арбате. Здесь угощают традиционными блюдами колоритной страны и устраивают праздники. Пространство ресторана оформлено в спокойном стиле лофт с национальными акцентами: стены украшают расписные ковры, а под потолками блестят звенящие люстры.Основу меню «Арарата» составили традиционные рецепты Армении, Кавказа и Европы. В печи выпекают фирменные лепешки, варят борщь и готовят необяные салаты. Гостям подают фестиваль шашлыка с сочным мясом и нежнейший паштет по фирменному рецепту бренд-шефа.",
          adress: "ул. Арбат 32",
          phone: "+7 (495) 222-44-96",
          coordX: 55.752673,
          coordY: 37.598492,
          status: "Accepted",
          countryId: 6,
          restOwnerId: 5,
        },
        {
          title: "Саят-Нова",
          description:
            "Ресторан армянской кухни в Капотне. Пространство разделено на большой основной зал и уютный камерный бар. В обширное меню вошли традиционные долма и тжвжик, хашлама из ягненка и телятины, ассорти шашлыков, домашняя выпечка. «Саят-Нова» располагает большой развлекательной программой: здесь можно послушать национальную музыку в живом исполнении, организовать детский праздник или торжественное мероприятие. В собственной кондитерской готовят торты под заказ. В теплые месяцы на территории работает веранда.",
          adress: "ул. Капотня 34",
          phone: "+7 (905) 777-26-60",
          coordX: 55.639939,
          coordY: 37.808384,
          status: "Accepted",
          countryId: 6,
          restOwnerId: 1,
        },
        {
          title: "Gayane’s",
          description:
            "Аутентичный ресторан домашней армянской и грузинской кухни. Здесь два этажа, обстановка уютная и доброжелательная: на диванах разбросаны восточные подушки, полки плотно заставлены разной утварью, а на втором этаже есть работающий камин. В меню, по задумке ресторатора Гаяне Бреиовой, собраны в основном блюда ее детства по семейным рецептам — долма, лепешки ламаджо, хашлама.",
          adress: "пер. 2-й Смоленский 1/4",
          phone: "+7 (495) 032-17-00",
          coordX: 55.746998,
          coordY: 37.581523,
          status: "Accepted",
          countryId: 6,
          restOwnerId: 8,
        },
        {
          title: "Taksim",
          description:
            "Турецкий ресторан международной сети на Новом Арбате. Другие точки работают в Баку и Дубае. Заведение названо в честь площади Таксим в Стамбуле, атмосферу этого места и постарались воссоздать в ресторане.Бренд-шеф сети Taksim— турецкий повар с 15-летним стажем работы. Основу меню составили мясные блюда, которых в меню больше 30. Среди них — национальные турецкие котлеты кефте, стейки на гриле, люля-кебабы с мангала, бургеры и денеры.",
          adress: "ул. Н. Арбат 15",
          phone: "+7 (495) 699-55-55",
          coordX: 55.752141,
          coordY: 37.59242,
          status: "Accepted",
          countryId: 7,
          restOwnerId: 8,
        },
        {
          title: "Босфор",
          description:
            "Турецкий кофе и сладости в фудхолле «Паrк». В «Босфор» можно попробовать кофе и чай, привезенные прямиком из Турции, и заказать традиционные десерты. Подают пахлаву с медом и фисташками, халву разных видов, например, с какао, и пишмание — это тонкие нити, которые готовятся на основе сахарного сиропа и обжаренной муки. Кофе и сладости можно купить с собой.",
          adress: "Проспект Вернадского 86В",
          phone: "+7 (495) 532-80-62",
          coordX: 55.661638,
          coordY: 37.480148,
          status: "Accepted",
          countryId: 7,
          restOwnerId: 7,
        },
        {
          title: "Mr. Ливанец",
          description:
            "Стильный ресторан ливанской кухни. В меню, составленном шеф-поваром из Ливана, можно обнаружить как демократичный стритфуд вроде фалафеля и шаурмы, так и масштабные дорогие блюда, главное из которых – маза: сет на двоих, включающий 30 мини-блюд основного меню. В барной карте – хороший выбор коктейлей и вин, в том числе ливанских.",
          adress: "пер. Глинищевский 3",
          phone: "+7 (495) 692-99-23",
          coordX: 55.76327,
          coordY: 37.609775,
          status: "Accepted",
          countryId: 8,
          restOwnerId: 8,
        },
        {
          title: "Бейрут",
          description:
            "Семейный ресторан ливанской кухни. Зал незатейливо оформлен в восточном стиле; атмосфера самая домашняя и такая же домашняя еда – простые, сытные, щедрые мясные блюда. Для первого знакомства с кухней стоит взять ассорти, правда, лучше на двоих – в одиночку можно не справиться. На десерт в ресторане Бейрут предлагают ливанский кофе и традиционные сладости.",
          adress: "ул. Машкова 22",
          phone: "+7 (495) 625-59-10",
          coordX: 55.764212,
          coordY: 37.653173,
          status: "Accepted",
          countryId: 8,
          restOwnerId: 6,
        },
        {
          title: "Pancho Villa",
          description:
            "Атмосферное мексиканское заведение. Хулиганский интерьер в духе вестернов: ружья, револьверы, люстры-сомбреро, стулья-седла; залы называются «Таверна», «Площадь», «Церковь», «Тюрьма» и «Погребок» и оформлены соответствующе. В меню представлено все, чем славится мексиканская кухня, плюс более привычные европейские блюда. Среди напитков выделяются местные настойки и домашнее вино.",
          adress: "Б.Якиманка 52",
          phone: "+7 (499) 238-79-13",
          coordX: 55.731779,
          coordY: 37.611473,
          status: "Accepted",
          countryId: 9,
          restOwnerId: 3,
        },
        {
          title: "Casa Agave",
          description:
            "Casa Agave — аутентичный ресторан мексиканской и перуанской кухни с насыщенной событийной программой и яркими вечеринками. Здесь можно послушать традиционную мексиканскую музыку, научиться танцевать бачату на мастер-классе, попробовать классическое перуанское севиче и выпить кубинского рома. ",
          adress: "пер. Б. Черкасский 17",
          phone: "+7 (926) 569-33-83",
          coordX: 55.756645,
          coordY: 37.627086,
          status: "Accepted",
          countryId: 9,
          restOwnerId: 4,
        },
        {
          title: "Michelada",
          description:
            "Ресторан мексиканской кухни с интересной барной картой на Маросейке. В Michelada собрали хиты традиционных рецептов Мексики: готовят кесадильи, тако (тортильи с начинкой) наполняют овощной сальсой, креветками в пивном кляре, говядиной или бараниной. Буррито делают не только классические — с острым говяжьим фаршем, но и для вегетарианцев. Готовят влажный мексиканский торт «Три молока», бисквит для которого пропитывают в сливках, молоке и сгущенке. В обширном выборе барной карты выделяются более 20 видов текилы и вариации коктейля «Маргарита». В баре наливают мескаль и подают сангрию — испанский некрепкий напиток из вина, фруктов и газированной воды.",
          adress: "ул. Маросейка 4/2 стр 3",
          phone: "+7 (495) 098-04-85",
          coordX: 55.757222,
          coordY: 37.634021,
          status: "Accepted",
          countryId: 9,
          restOwnerId: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
