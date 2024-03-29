"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          body: 'Впервые пробовал испанское блюдо "OLOLOLO".Конечно не KFC, но тоже мням ',
          userId: 1,
          restaurantId: 1,
        },
        {
          body: "Всю вторую фазу заказывал здесь обеды. Надеюсь, и на третьей буду, если перейду",
          userId: 3,
          restaurantId: 1,
        },
        {
          body: "Здравствуйте, дорогие рестораторы! Был у вас пару раз, все очень понравилось. Желаю дальнейшего процветания!",
          userId: 2,
          restaurantId: 1,
        },
        {
          body: "А мне все нравится!",
          userId: 4,
          restaurantId: 1,
        },
        {
          body: "Попался волос в супе, спросил у официанта что за прикол, на что он мне ответил:'Это хороший вопрос, я отвечу на него завтра'",
          userId: 5,
          restaurantId: 1,
        },
        {
          body: "Немноголюдно в обеденное время, отменное качество продуктов и приготовления. очень вкусно, периодически бываем здесь, все устраивает. есть детское меню. большой выбор сидра Ст-Антон. Летом особенно нравится уютная веранда",
          userId: 4,
          restaurantId: 2,
        },
        {
          body: "Приятный, уютный ресторан, один из моих любимых. Очень вкусная, необычная еда.",
          userId: 5,
          restaurantId: 3,
        },
        {
          body: "Веселые песни и танцы. Испанский и кубинский колорит. В оформление немного добавить Испании) паэлья на удивление класс. Лангустины вкусные. Придем снова!",
          userId: 3,
          restaurantId: 3,
        },
        {
          body: "Красивый интерьер в современном латиноамериканском стиле. Без вычурности и блеска ненужной роскоши, но и не сверх скромный. Обслуживание очень качественное. В момент моего посещения посетителей практически не было, поэтому судить о скорости обслуживания при полной посадке не возьмусь. По вечерам пятниц и в выходные - в ресторане кубинские танцы и живая музыка. Заказывал севиче из тунца - абсолютно классически выполнено.",
          userId: 1,
          restaurantId: 3,
        },
        {
          body: "Хороший ресторан, оформление супер. Еда вкусная, но стоит быть осторожными с острыми блюдами ( они нереально острые). Попробовали Bingsu ( вот что хорошо после острого), молочная стружка и свежие фрукты создают просто непревзойденный вкус. Только ради этого десерта стоит зайти.",
          userId: 1,
          restaurantId: 4,
        },
        {
          body: "В ресторане очень вкусно для любителя корейской кухни, в зале постоянно большое количество корейцев, значит скорее всего это ресторан с действительно корейскими блюдами. Порции очень большие поэтому имеет смысл заказывать одно блюдо на двоих.",
          userId: 2,
          restaurantId: 4,
        },
        {
          body: "Я была во многих корейский кафешках. Но только здесь было действительно вкусно. Чаджамен просто шикарный. А самое удивительное что у них есть БИНСУ. Ребят это божественно вкусная вещь. И среди всех корейский кафешек Москвы только у них он есть. Советую прийти попробовать!",
          userId: 4,
          restaurantId: 4,
        },
        {
          body: "Прекрасное место. Обожаем этот ресторан. Кимчи и закуски просто сказка. Посещали ресторан много раз, всегда все на высшем уровне. Если вы любите острую еду, вам особенно понравится. Остроту при заказе блюд можно выбирать от 1-10))). Можно готовить мясо и пр. самим за столом, встроены, плиты, с вытяжками. Цены выше среднего. Очень рекомендую.",
          userId: 1,
          restaurantId: 5,
        },
        {
          body: "Очень часто бываю в Азии, горячий поклонник корейской кухни. Увидев вывеску, не смог устоять и посетил ресторан. Удивлён и обрадован. МОЛОДЦЫ!!! Действительно корейская кухня, а не унылая попытка закосить под неё.",
          userId: 3,
          restaurantId: 5,
        },
        {
          body: "Зашли случайно. Не в бистро, в сам ресторан. Были очень голодные. Всё очень понравилось! Вкусные супы и порции увесистые) Пять маленьких закусочек на двоих мало совсем, конечно. Но они свежие, вкусные. Отдельное спасибо, что не мучили заказом напитков. Не люблю я есть и пить одновременно. Обычно, если не заказываешь напиток, на тебя смотрят странно. А тут спокойно! Порадовали)",
          userId: 5,
          restaurantId: 5,
        },
        {
          body: "Спасибо большое, что вы есть)))) Все было просто восхитительно. Отмечала день рождения в отдельной кабинке с караоке. Я и мои гости очень остались довольны вкусом блюд, внимательным обслуживанием. Также порадовала музыкальная программа с караоке. Рекомендую однозначно!!!",
          userId: 3,
          restaurantId: 6,
        },
        {
          body: "Очень часто бываю в Азии, горячий поклонник корейской кухни. Увидев вывеску, не смог устоять и посетил ресторан. Удивлён и обрадован. МОЛОДЦЫ!!! Действительно корейская кухня, а не унылая попытка закосить под неё.",
          userId: 2,
          restaurantId: 6,
        },
        {
          body: "Зашли случайно. Не в бистро, в сам ресторан. Были очень голодные. Всё очень понравилось! Вкусные супы и порции увесистые) Пять маленьких закусочек на двоих мало совсем, конечно. Но они свежие, вкусные. Отдельное спасибо, что не мучили заказом напитков. Не люблю я есть и пить одновременно. Обычно, если не заказываешь напиток, на тебя смотрят странно. А тут спокойно! Порадовали)",
          userId: 5,
          restaurantId: 6,
        },
        {
          body: "Часто бываю в этом ресторане с дочерью, когда хочется вкусно и уютно пообедать или поужинать, или на кофе забежать.Атмосфера всегда по-домашнему уютная, спокойная. Очень вкусно готовят все, от самых, казалось бы банальных блюд, таких как салат из помидор с луком, или «цезарь», или пицца 4 сыра, до блюда более тонких, таких как салат с аришоками или запеченый перец рамиро с крабом и соусом из маринованного тунца…А традиционный русский суп-пюре из тыквы…а здесь он с крабом и булгуром, просто сказка.",
          userId: 4,
          restaurantId: 7,
        },
        {
          body: "За пиццу с анчоусами в Боттеге можно продать душу дьяволу. Обслуживание идеальное. Подача изысканная. Готовка особая, не обычная. Лучший ресторан итальянской кухни в Москве в моем понимании",
          userId: 5,
          restaurantId: 7,
        },
        {
          body: "Вкусная паста! Пицца супер. Винная карта очень понравилась! Молодцы! Обслуживание на высшем уровне! Цены в меру высокие.",
          userId: 3,
          restaurantId: 7,
        },
        {
          body: "Этот уютный ресторанчик - кусочек настоящей Италии в Москве, стал любимым в последние месяцы. Небольшое, но содержательное меню. Домашняя паста и десерты. Все блюда невероятно вкусные. И со временем качество не меняется. А хозяин, кстати, итальянец. Bravo, maestro. Grazie mille",
          userId: 4,
          restaurantId: 8,
        },
        {
          body: "Интересное местечко в центре Москвы. Еда очень вкусная (на мой вкус), все свежее и как мне нравится. Обслуживание очень приятное: сделали в блюдах дополнения по моим просьбам и без проблем. Интерьер милый, маленький. Музыка была приятная ,но не итальянская. Из минусов: кисло-горький кофе. Но оценку изза этого снижать не стала в целом место понравилось.",
          userId: 5,
          restaurantId: 8,
        },
        {
          body: "Все очень вкусно, и закуски, и горячее и десерты. Вителло тоннато - отдельный восторг, рекомендую. Нежнейший меренговый рулет никого не оставит равнодушным!",
          userId: 3,
          restaurantId: 8,
        },
        {
          body: "Ресторан в самом сердце ❤️ Москвы, для истинных ценителей Итальянской кухни! Для самодостаточных и уважающих себя людей! Но и человек с не высоким достатком вполне может себе позволить посетить это классное и стильное завершение! А повара и персонал все сделают, чтобы Ваш отдых был приятным и незабываемым!",
          userId: 1,
          restaurantId: 9,
        },
        {
          body: "Очень люблю этот ресторан! Качественные продукты, изысканные блюды, прекрасное обслуживание…да, чек высокий, но это место заслуживает.",
          userId: 2,
          restaurantId: 9,
        },
        {
          body: "Пять из пяти. Великолепные блюда. В командировке на учебе. Зашел по обедать и просто в восторге от вкуса блюд. Итальянская кухня, просто обожаю. Цены нормальные для ресторана еще и в центре. Прекрасное заведение.",
          userId: 3,
          restaurantId: 9,
        },
        {
          body: "Интересное место. Великолепный интерьер и чуткий персонал. Еда очень вкусная и довольно бюджетная. Одним словом, Индия...",
          userId: 4,
          restaurantId: 10,
        },
        {
          body: "Такого огромного и разнообразного меню восточной кухни нет ни где! Очень любим это заведение! Повар, очевидно, настоящий профессионал! Будем всем советовать ваше заведение и не раз придем сами! СПАСИБО!!!",
          userId: 5,
          restaurantId: 10,
        },
        {
          body: "Отличное место где можно окунуться в атмосферу востока! Здесь классное меню, обслуживание высокого уровня. Мы хотим порекомендовать это место своим друзьям!",
          userId: 3,
          restaurantId: 10,
        },
        {
          body: "Интересное место. Великолепный интерьер и чуткий персонал. Еда очень вкусная и довольно бюджетная. Одним словом, Индия...",
          userId: 1,
          restaurantId: 11,
        },
        {
          body: "Такого огромного и разнообразного меню восточной кухни нет ни где! Очень любим это заведение! Повар, очевидно, настоящий профессионал! Будем всем советовать ваше заведение и не раз придем сами! СПАСИБО!!!",
          userId: 2,
          restaurantId: 11,
        },
        {
          body: "Отличное место где можно окунуться в атмосферу востока! Здесь классное меню, обслуживание высокого уровня. Мы хотим порекомендовать это место своим друзьям!",
          userId: 5,
          restaurantId: 11,
        },
        {
          body: "Лучшее место, если хотите открыть для себя индийскую кухню или когда-то побывали в Индии и заскучали по ярким специям и остроте, которая пробивает. Для меня это как раз такое место, где можно поностальгировать по Индии. Здесь недорого и очень вкусно. Про ваши предпочтения по остроте практически никогда не спрашивают, поэтому если они у вас есть, то нужно о них сообщить. Не забудьте взять лепешки наан :)",
          userId: 1,
          restaurantId: 12,
        },
        {
          body: "Такого огромного и разнообразного меню восточной кухни нет ни где! Очень любим это заведение! Повар, очевидно, настоящий профессионал! Будем всем советовать ваше заведение и не раз придем сами! СПАСИБО!!!",
          userId: 2,
          restaurantId: 12,
        },
        {
          body: "Отличное кафе! Обстановка абсолютно Индийская. Ароматы и атмосфера соответствует оригиналу. Очень вкусная и по настоящему индийская еда. Мы с мужем после поездки в Индию долго искали эти вкусы в Москве. И поверьте, Деви-кафе это то самое место!!! Теперь мы раз в месяц стараемся посещать это замечательное место.",
          userId: 4,
          restaurantId: 12,
        },
        {
          body: "Аутентичное место в скандинавском стиле. Очень аккуратное и эстетичное. Меню небольшое, но каждое блюдо производит впечатление. Каждое мясное блюдо состоит из дичи - кабан, олень, лось, утка. Заказывал десерт - мороженное из белых грибов с берёзовым соком, очень необычное и вкусное блюдо. В наличии традиционные скандинавские напитки, а также широкий выбор вин. Очень вежливый и знающий персонал. По каждому блюду могут рассказать не только состав, но и его историю и правильный способ употребления. ",
          userId: 3,
          restaurantId: 13,
        },
        {
          body: "Была несколько раз, всегда отличные впечатления. Блюда не банальные, красивый интерьер, все в скандинавском стиле. Последний раз брала смореброд со сморчками и трубача, очень вкусно, приду ещё",
          userId: 4,
          restaurantId: 13,
        },
        {
          body: "Очень вкусно, супер необычные сочетания, очень приятная обстановка! Хочется перепробовать все меню. Еще вернемся!",
          userId: 5,
          restaurantId: 13,
        },
        {
          body: "Отличная скандинавская кухня, ароматный только испеченный хлеб, приятная расслабляющая обстановка и профессиональное обслуживание!",
          userId: 1,
          restaurantId: 14,
        },
        {
          body: "Была несколько раз, всегда отличные впечатления. Блюда не банальные, красивый интерьер, все в скандинавском стиле. Последний раз брала смореброд со сморчками и трубача, очень вкусно, приду ещё",
          userId: 4,
          restaurantId: 14,
        },
        {
          body: "Очень вкусно, супер необычные сочетания, очень приятная обстановка! Хочется перепробовать все меню. Еще вернемся!",
          userId: 5,
          restaurantId: 14,
        },
        {
          body: "Хорошее место! Зашли с голодными детьми подростками. В таком состоянии они могут съесть слона! Так что, нужно было их срочно накормить! Заказали шашлычный фестиваль на всех и рассольник каждому. Принесли быстро, всё было очень вкусно. Да, не дёшево, но мы остались очень довольны. Дети оставили чаевые со своих карманных денег, что никогда с ними не случалось! Вобщем понравилось! Рекомендую!",
          userId: 1,
          restaurantId: 15,
        },
        {
          body: "Вкусно, быстро, обслуживание на уровне, красивая подача блюд, большие порции. Вежливый персонал. Живая музыка. Все очень понравилось.",
          userId: 4,
          restaurantId: 15,
        },
        {
          body: "Вполне пристойная едальня, которую можно отнести к топовой категории подобных заведений на вднх. Большое меню с национальными и интернациональными блюдами. Показалось, что перевес в сторону интернациональных. ",
          userId: 5,
          restaurantId: 15,
        },
        {
          body: "Саят - Нова! Как многозначно это название...Величайший представитель армянской светской поэзии,лирики,песни(на арм.груз. и азерб.языках)👏👏👏Так же многообразен и ресторан Саят - Нова☝️Особенно классно там вечером.Живая музыка под нац.колорит,веселая публика и конечно же вкусная еда",
          userId: 4,
          restaurantId: 16,
        },
        {
          body: "Всем интересно будет хоть раз погостить данный ресторан. Здесь чувствуется духовная культура, происхождение и уровень гостеприимство армянского народа.",
          userId: 2,
          restaurantId: 16,
        },
        {
          body: "Вполне пристойная едальня, которую можно отнести к топовой категории подобных заведений на вднх. Большое меню с национальными и интернациональными блюдами. Показалось, что перевес в сторону интернациональных. ",
          userId: 5,
          restaurantId: 16,
        },
        {
          body: "Рекомендую это место. Но, если вечером или в выходные - столик надо бронировать. Судя по всему, у них много завсегдатаев. Всё, что заказывали очень вкусное, но баранина особенно. И шашлык и ребрышки. Подача очень быстрая, нам показалось, что даже слишком. Дело было в воскресенье под вечер и, видимо, они ждали новых гостей. Советую к посещению, но денег берите побольше.",
          userId: 1,
          restaurantId: 17,
        },
        {
          body: "Ресторан армянской кухни, готовят вкусно и хорошо. Обслуживают учтиво, место понравилось. Порции не большие, камерно.",
          userId: 3,
          restaurantId: 17,
        },
        {
          body: "Приятное место. Просторно. Мало народа. Ненавязчивая музыка. Внимательные официанты. Много интересных блюд, есть что попробовать.",
          userId: 4,
          restaurantId: 17,
        },
        {
          body: "Если Вы кушали мясо в Стамбуле на площади Таксим, то это однозначно тот московский ресторан, который готовит так же. Трамвайная символика и атмосфера действительно заставляет задуматься, что ты находишься не в Москве, а в Стамбуле. Taksim - это своего рода шоу, только мясное шоу.Эффект Вау не только в подаче и интерпретации мясных блюд, но и в безумии вкусов каждого кусочка мяса. Перед посещением рекомендуется забронировать стол, ведь в Taksim всегда полная посадка.",
          userId: 2,
          restaurantId: 18,
        },
        {
          body: "Отличное место! Обслуживание на высоте, кухня - безумно вкусный донер и баранья нога с пюре из баклажана, коктейли также порадовали! Возвращаемся не в первый раз и 100% не в последний! Спасибо персоналу зала и кухни TAKSIM за прекрасные вечера!",
          userId: 3,
          restaurantId: 18,
        },
        {
          body: "Приятное место. Просторно. Мало народа. Ненавязчивая музыка. Внимательные официанты. Много интересных блюд, есть что попробовать.",
          userId: 5,
          restaurantId: 18,
        },
        {
          body: "Всегда ужинаем в этоим ресторане, когда посещаем Арбат. Отличная кухня,приятное обслуживание, спокойная атмосфера.",
          userId: 1,
          restaurantId: 19,
        },
        {
          body: "Были первый раз, начитавшись много положительных отзывов, и попали в точку! Настоящая турецкая кухня, вкуснейшие блюда и вежливый персонал! В самом ресторане спокойно и уютно. Да, ценник немного завышен, но это того стоит!!!",
          userId: 3,
          restaurantId: 19,
        },
        {
          body: "Приятное место. Просторно. Мало народа. Ненавязчивая музыка. Внимательные официанты. Много интересных блюд, есть что попробовать.",
          userId: 5,
          restaurantId: 19,
        },
        {
          body: "Очень красивый интерьер, необычная униформа у официантов. Меню большое и разнообразное по демократичным ценам. Еда вкусная! Все очень понравилось.",
          userId: 1,
          restaurantId: 20,
        },
        {
          body: "Хорошее приятное заведение. Очень вкусная еда. Чек на двоих вышел 3200₽. Рекомендую! Из минусов: странная посадка и достаточное размеренное обслуживание, если спешите и хотите перекусить, то вам не сюда)",
          userId: 2,
          restaurantId: 20,
        },
        {
          body: "Посетили это кафе. Все понравилось. Семейное кафе. Работают сами хозяева. Имеют реальное отношение к Ливану. Аутентичная обстановка. Вкусные блюда, большие порции. Не очень большой зал, но от этого только уютнее. Рекомендую.",
          userId: 5,
          restaurantId: 21,
        },
        {
          body: "Посещаем с друзьями кафе «Бейрут» с друзьями и возвращаемся снова, и снова. Уютно, вкусно, приятная атмосфера, меню с картинками, большие порции.",
          userId: 3,
          restaurantId: 21,
        },
        {
          body: "Все очень вкусно, душевно. Порции горячего очень большие. Ощущение, как дома и хочется вернуться ещё, что и сделаем с друзьями обязательно. Спасибо Вам за такое замечательное заведение ❤️",
          userId: 2,
          restaurantId: 21,
        },
        {
          body: "Были небольшой компанией в будние дни, народа мало, столики свободные есть в большом количестве. Обслуживание достаточно быстрое. Кроме традиционных закусок, брали суп из бычьих хвостов - очень вкусно, после рабочего дня и прохладной погоды самое то! Живой музыки не было, но и без нее сама атмосфера очень оригинальная, даже в туалетных комнатах )).На мой взгляд, очень приятное место для компании.",
          userId: 2,
          restaurantId: 22,
        },
        {
          body: "Отличный ресторан мексиканской кухни.В 21 час живая музыка. Прекрасная кухня и достойный алкоголь.Хороший внимательный персонал.Думаю, еще не раз посетим этот ресторан.",
          userId: 3,
          restaurantId: 22,
        },
        {
          body: "Обожаем этот ресторан - все блюда, которые пробовали, безумно вкусные, порции большие, цены умеренные. Прекрасное оформление зала в национальном стиле, зажигательная латиноамериканская музыка нон-стоп, большое помещение. Особенно отмечу коктейль дынная маргарита, он бесподобен.",
          userId: 1,
          restaurantId: 22,
        },
        {
          body: "Отличное место. Уютная обстановка, очень вежливый персонал. Буду сюда возвращаться внось. Разнообразное меню. Рекомендую кукурузу гриль",
          userId: 5,
          restaurantId: 23,
        },
        {
          body: "Каса Агаве посещаем с мужем около 6 лет. Сегодня здесь отмечаем годовщину нашего знакомства, здесь мы и познакомились!!! Очень атмосферное заведение, кухня вкусная и разнообразная. Мексиканская кухня и зажигательные танцы - для хорошего вечера! Рекомендую данный ресторан как для активного вечера с танцами так и для семейного ужина или праздника. Официанты приятные и очень вежливые! Более того кальян и начос был в подарок. На фоне живая музыка то, что нужно!",
          userId: 4,
          restaurantId: 23,
        },
        {
          body: "Хорошее место. Очень приветливый персонал, вкусная еда, была на бизнес-ланче, и по меню тоже заказывали, все понравилось. И вечером классные зажигательные вечеринки))",
          userId: 1,
          restaurantId: 23,
        },
        {
          body: "Заходили с друзьями. Во-первых, круто украшен вход. Во-вторых аутентичная кухня, не острая, но можно добавить соусов, кто любит поострее. Коктейли - шедевр. Ели Тако, пили маргариты, все вкусно и быстро. Очень вежливые официанты и бармены, вечером пришел диджей, очень атмосферно.",
          userId: 2,
          restaurantId: 24,
        },
        {
          body: "Посетили место спонтанно днём в субботу. Места были, но правда на вечер все столики были забронированы. Атмосфера очень приятная, классная латиноамериканская музыка фоном, шикарная кухня. Все понравилось. Однако немного тесновато и душновато в помещении.",
          userId: 3,
          restaurantId: 24,
        },
        {
          body: "Отличное место! Таня (менеджер), вы сделали наш вечер! Спасибо! Супер-профессионал! Обязательно придём ещё и порекомендуем друзьям.",
          userId: 5,
          restaurantId: 24,
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
