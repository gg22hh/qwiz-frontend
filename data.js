import ipPrev from './static/images/ip/prev.jpg';
import ip1 from './static/images/ip/1.jpg';
import ip2 from './static/images/ip/2.jpg';
import ip3 from './static/images/ip/3.jpg';
import ip4 from './static/images/ip/4.png';
import ip5 from './static/images/ip/5.jpg';
import ip6 from './static/images/ip/6.jpg';
import ip7 from './static/images/ip/7.jpg';
import ip8 from './static/images/ip/8.jpg';
import ip9 from './static/images/ip/9.jpg';
import ip10 from './static/images/ip/10.jpg';
import bg from './static/images/16161.jpg';
import ednImg from './static/images/ip/end.jpeg';

import wPrev from './static/images/witcher/prev.jpeg';
import w1 from './static/images/witcher/w1.jpg';
import w2 from './static/images/witcher/w2.jpg';
import w3 from './static/images/witcher/w3.jpg';
import w4 from './static/images/witcher/w4.jpg';
import w5 from './static/images/witcher/w5.jpeg';
import w6 from './static/images/witcher/w6.jpg';
import w7 from './static/images/witcher/w7.jpg';
import w8 from './static/images/witcher/w8.jpg';
import w9 from './static/images/witcher/w9.jpg';
import w10 from './static/images/witcher/w10.jpg';
import w11 from './static/images/witcher/w11.jpg';
import w12 from './static/images/witcher/w12.jpg';
import w13 from './static/images/witcher/w13.jpg';
import w14 from './static/images/witcher/w14.jpg';
import w15 from './static/images/witcher/w15.jpg';
import w16 from './static/images/witcher/w16.jpg';
import w17 from './static/images/witcher/w17.jpg';
import wBg from './static/images/witcher/bg.jpg';
import wEndImg from './static/images/witcher/endImg.jpg';

import osdPrev from './static/images/osd/prev.jpg';
import osd1 from './static/images/osd/1.jpg';
import osd2 from './static/images/osd/2.jpg';
import osd3 from './static/images/osd/3.jpeg';
import osd4 from './static/images/osd/4.jpg';
import osd5 from './static/images/osd/5.jpg';
import osd6 from './static/images/osd/6.png';
import osd7 from './static/images/osd/7.jpg';
import osd8 from './static/images/osd/8.jpg';
import osdBg from './static/images/osd/bg.jpg';
import osdEndImg from './static/images/osd/end.jpg';

import ikBg from './static/images/ik/bg.jpg';
import ikPrev from './static/images/ik/prev.jpg';
import ikEndImg from './static/images/ik/end.jpg';
import ik1 from './static/images/ik/1.jpg';
import ik2 from './static/images/ik/2.jpg';
import ik3 from './static/images/ik/3.jpg';
import ik4 from './static/images/ik/4.jpg';
import ik5 from './static/images/ik/5.jpg';
import ik6 from './static/images/ik/6.jpg';
import ik7 from './static/images/ik/7.jpg';
import ik8 from './static/images/ik/8.jpg';
import ik9 from './static/images/ik/9.jpg';
import ik10 from './static/images/ik/10.jpg';
import ik11 from './static/images/ik/11.jpg';
import ik12 from './static/images/ik/12.jpg';
import ik13 from './static/images/ik/13.jpg';
import ik14 from './static/images/ik/14.jpg';
import ik15 from './static/images/ik/15.jpg';
import ik16 from './static/images/ik/16.jpg';
import ik17 from './static/images/ik/17.jpg';
import ik18 from './static/images/ik/18.jpg';
import ik19 from './static/images/ik/19.jpg';
import ik20 from './static/images/ik/20.jpg';

export const data = [
  {
    id: 'igra-prestolov',
    name: 'Игра Престолов',
    background: bg,
    endImage: ednImg,
    preview: ipPrev,
    text: 'Предлагаем проверить, как хорошо ты помнишь знаменитую историю Джорджа Мартина о Таргариенах, Ланнистерах и Старках!',
    marks: {
      bad: 'Ты почти ничего не знаешь! Будто и не смотрел вовсе. Ну, пересматривать советовать не будем, все-таки 8 сезонов заново - не для слабонервных.',
      good: 'Очень неплохо! 8 сезонов явно прошли для тебя не бесследно. Конечно, усесться на Железный трон не предлагаем, но похвалу и серебряную звездочку на лоб ты точно заслужил.',
      best: 'Подать сюда трон знатоку! Ты настоящий фанат, даже мы не знали ответы на все эти вопросы. Апплодируем стоя!',
    },
    questions: [
      {
        id: '1',
        image: ip1,
        question: 'Кого не убивала Арья Старк?',
        rightAnswer: 'Серсею',
        answers: ['Петира Бейлиша', 'Меррина Транта', 'Серсею', 'Короля Ночи'],
        wrongExp: 'Вообще-то убила! А вот до Серсеи так и не добралась.',
        rightExp: 'Верно',
      },
      {
        id: '2',
        image: ip2,
        question: 'Кому принадлежит этот герб?',
        rightAnswer: 'Баратеонам',
        answers: ['Баратеонам', 'Ланнистерам', 'Форрестерам', 'Грейджоям'],
        wrongExp: 'Нет, Баратеонам!',
        rightExp: 'Да!',
      },
      {
        id: '3',
        image: ip3,
        question:
          'Что еще, кроме драконьего стекла, может уничтожить белых ходоков?',
        rightAnswer: 'Валирийская сталь',
        answers: [
          'Огонь',
          'Валирийская сталь',
          'Драконы',
          'Заклинания Красной женщины',
        ],
        wrongExp: 'Нет, только валирийская сталь',
        rightExp: 'Точно!',
      },
      {
        id: '4',
        image: ip4,
        question: 'Кого в сериале называли Королевой шипов?',
        rightAnswer: 'Оленну Тирелл',
        answers: ['Серсею', 'Дейнерис', 'Маргери Тирелл', 'Оленну Тирелл'],
        wrongExp: 'Ты что? Оленну Тирелл, конечно!',
        rightExp: 'Именно!',
      },
      {
        id: '5',
        image: ip5,
        question: 'Как назывался меч Неда Старка?',
        rightAnswer: 'Лед',
        answers: ['Лед', 'Голос вдовы', 'Камень', 'Возмездие'],
        wrongExp: 'Нет, лед!',
        rightExp: 'Бинго!',
      },
      {
        id: '6',
        image: ip6,
        question: 'Сколько серий в сериале?',
        rightAnswer: '73',
        answers: ['69', '73', '86', '118'],
        wrongExp: 'Нет, 73',
        rightExp: 'Точно!',
      },
      {
        id: '7',
        image: ip7,
        question: 'Кто отрубил голову Эддарду Старку?',
        rightAnswer: 'Илин Пейн',
        answers: [
          'Меррин Трант',
          'Джоффри Баратеон',
          'Джейме Ланнистер',
          'Илин Пейн',
        ],
        wrongExp: 'Сир Илин Пейн казнил «предателя» его же собственным мечом!',
        rightExp: 'Верно!',
      },
      {
        id: '8',
        image: ip8,
        question:
          'На красной свадьбе была настоящая резня! Что послужило сигналом к нападению на Старков?',
        rightAnswer: 'Музыканты начали играть «Дожди в Кастамере»',
        answers: [
          'Подача вина',
          'Музыканты начали играть «Дожди в Кастамере»',
          'Убийство беременной Талисы (ножом в живот)',
          'Крик «Встречайте Короля Севера!»',
        ],
        wrongExp:
          'Нет. Сигналом были «Дожди в Кастамере» в исполнении арбалетчиков, переодетых музыкантами',
        rightExp: 'Именно!',
      },
      {
        id: '9',
        image: ip9,
        question: 'Зачем дети леса создали белых ходоков?',
        rightAnswer: 'Для защиты от первых людей',
        answers: [
          'Чтобы защитить Трехглазого ворона',
          'Чтобы противостоять драконам',
          'Для защиты от первых людей',
          'Для красоты!',
        ],
        wrongExp: 'Нет! Для защиты от первых людей',
        rightExp: 'Точно!',
      },
      {
        id: '10',
        image: ip10,
        question: 'Что Джорах Мормонт подарил Дейнерис на свадьбу с Дрого?',
        rightAnswer: 'Книги',
        answers: ['Меч', 'Драконьи яйца', 'Книги', 'Белую лошадь'],
        wrongExp: 'Нет, Джорах подарил ей книги',
        rightExp: 'Точно!',
      },
    ],
  },
  {
    id: 'withcer',
    name: 'Ведьмак',
    background: wBg,
    endImage: wEndImg,
    preview: wPrev,
    text: 'Интересно, а вы внимательно смотрели фэнтезийный сериал "Ведьмак"? Хорошо помните сюжетные линии? Проверьте себя в тесте «КП» прямо сейчас!',
    marks: {
      bad: 'Охо-хо… Кажется, вы не очень внимательно смотрели «Ведьмака». А может быть, вообще не смотрели? Обязательно уделите время этому сериалу — получилось достойно!',
      good: 'Очень неплохо! Похвалу и серебряную звездочку на лоб ты точно заслужил.',
      best: 'Подать сюда трон знатоку! Ты настоящий фанат, даже мы не знали ответы на все эти вопросы. Апплодируем стоя!',
    },
    questions: [
      {
        id: '1',
        image: w1,
        question: 'Начнем с простого: откуда родом Ведьмак?',
        rightAnswer: 'Из Ривии',
        answers: ['Из Цинтры', 'Из Ривии', 'Из Нильфгаарда', 'Из Аэдирна'],
        wrongExp:
          'На этот вопрос сложно ответить неправильно, ведь Ведьмака частенько называют, упоминая его родину. А именно — Геральт из Ривии.',
        rightExp: 'Верно!',
      },
      {
        id: '2',
        image: w2,
        question: 'C кем борется Ведьмак в первой серии?',
        rightAnswer: 'С кикиморой',
        answers: ['С охотником', 'С кикиморой', 'С королем', 'С принцессой'],
        wrongExp:
          'Не угадали! В начале сериала Ведьмак борется с кикиморой — поединок происходит на лесном болоте.',
        rightExp: 'Правильно!',
      },
      {
        id: '3',
        image: w3,
        question: 'Что случилось на городской площади?',
        rightAnswer: 'Ведьмак убил Ренфри',
        answers: [
          'Ренфри и Ведьмак поцеловались',
          'Ренфри и Ведьмак познакомились',
          'Ренфри убила Стрегобора',
          'Ведьмак убил Ренфри',
        ],
        wrongExp:
          'Увы. В поединке на площади Блавикена ничего приятного для Ренфри не произошло. Ее убил Ведьмак. ',
        rightExp: 'Именно!',
      },
      {
        id: '4',
        image: w4,
        question: 'Как звали героиню, у которой был горб?',
        rightAnswer: 'Йеннифер',
        answers: ['Цирилла', 'Тиссая де Врие', 'Ренфри', 'Йеннифер'],
        wrongExp:
          'Необычной внешностью отличалась Йеннифер — у нее был горб и перекошенное лицо. Но это не помешало ей попасть в школу магии и стать одной из самых успешных учениц!',
        rightExp: 'Верно!',
      },
      {
        id: '5',
        image: w5,
        question: 'Чьей дочкой была упырица?',
        rightAnswer: 'Короля Фольтеста',
        answers: ['Упыря и упырихи', 'Гнома', 'Фермера', 'Короля Фольтеста'],
        wrongExp:
          'Неожиданно, но … жуткая упырица была дочерью короля! Да-да, неудивительно, что папа был готов на все, лишь бы ее расколдовали. И все получилось: упырица превратилась в молодую девушку.',
        rightExp: 'Правильно!',
      },
      {
        id: '6',
        image: w6,
        question: 'Каким правом воспользовался Йож?',
        rightAnswer: 'Правом неожиданности',
        answers: [
          'Правом голоса',
          'Правом выбора',
          'Правом неожиданности',
          'Правом молчания',
        ],
        wrongExp:
          'Йож, узнав, что для Паветты ищут мужа, воспользовался древним обычаем — Правом Неожиданности. И матери Паветты пришлось согласиться выдать дочь замуж за Йожа, хотя она была от него, мягко говоря, не в восторге.',
        rightExp: 'Именно!',
      },
      {
        id: '7',
        image: w7,
        question: 'На кого охотились Ведьмак и Йеннифер?',
        rightAnswer: 'На золотого дракона',
        answers: [
          'На золотого дракона',
          'На золотую рыбку',
          'На золотого ястреба',
          'На золотого оленя',
        ],
        wrongExp:
          'Ведьмак и Йеннифер встретились во время охоты на золотого дракона. Кстати, незадолго до этих событий их отношения вышли, кхм, на другой уровень.  ',
        rightExp: 'Верно!',
      },
      {
        id: '8',
        image: w8,
        question: 'Какое желание было у Йеннифер самым сильным?',
        rightAnswer: 'Стать матерью',
        answers: [
          'Быть женой Геральта',
          'Стать самой могущественной чародейкой',
          'Стать матерью',
          'Победить нильфгаардцев',
        ],
        wrongExp:
          'У Йеннифер не может быть детей из-за того, что она владеет могущественной магией. Но женщина не хочет смиряться с этим и, кажется, готова на все, чтобы родить ребенка.',
        rightExp: 'Правильно!',
      },
      {
        id: '9',
        image: w9,
        question:
          'Песня Лютика “Ведьмаку заплатите чеканной монетой” стала хитом. Давайте проверим, хорошо ли вы ее знаете. Какой фразы нет в песне?',
        rightAnswer: 'Он защитит всех вас',
        answers: [
          'Он бьет не в бровь, а в глаз',
          'Он защитит всех вас',
          'Был ранен много раз',
          'Всегда он за нас',
        ],
        wrongExp:
          'Кто только не перепевал эту песню! Кажется, ее знают наизусть все фанаты сериала. В знаменитой песне нет фразы “Он защитит всех вас” и, если вы об этом не знали, просто послушайте ее еще раз. А можно даже сериал пересмотреть!',
        rightExp: 'Именно!',
      },
      {
        id: '10',
        image: w10,
        question: 'Что Филавандрель хотел сделать с Геральтом?',
        rightAnswer: 'Убить',
        answers: [
          'Нанять для тайного дела',
          'Убить',
          'Сосватать эльфийке',
          'Пригласить на ночлег',
        ],
        wrongExp:
          'Эх, никакой романтики! Эльф банально собирался убить Ведьмака, но, к счастью передумал.',
        rightExp: 'Верно!',
      },
      {
        id: '11',
        image: w11,
        question: 'Кто стал спутником Цири после бегства из лагеря беженцев?',
        rightAnswer: 'Дара',
        answers: ['Лютик', 'Дара', 'Ренфри', 'Йеннифер'],
        wrongExp:
          'После нападения нильфгаардцев на лагерь беженцев Цири помог выжить молодой эльф по имени Дара. А потом стал спутником девушки.',
        rightExp: 'Правильно!',
      },
      {
        id: '12',
        image: w12,
        question: 'Что Геральт выловил из воды?',
        rightAnswer: 'Сосуд с джином',
        answers: [
          'Золотой слиток',
          'Сосуд с джином',
          'Старинное оружие',
          'Тайную печать',
        ],
        wrongExp:
          'Геральт выловил сосуд с джином, и вместе с Лютиком они выпустили его на волю. Освобождение джина оказалось не таким приятным, как можно представить…',
        rightExp: 'Именно!',
      },
      {
        id: '13',
        image: w13,
        question: 'Что джин сделал с Лютиком?',
        rightAnswer: 'Наслал на него болезнь',
        answers: [
          'Уменьшил в размере',
          'Увеличил в размере',
          'Наслал на него болезнь',
          'Предложил загадать 13 желаний',
        ],
        wrongExp:
          'Когда джин оказался на свободе, Геральт сказал, что хочет покоя. Джин истолковал это по-своему и сделал так, чтобы болтливый Лютик, спутник Геральта, замолчал. Лютик захрипел, а его горло опухло — Геральту пришлось думать о том, как спасать товарища.',
        rightExp: 'Верно!',
      },
      {
        id: '14',
        image: w14,
        question: 'Какой уникальной способностью обладает допплер?',
        rightAnswer: 'Принимать чужой облик',
        answers: [
          'Летать',
          'Принимать чужой облик',
          'Видеть в темноте',
          'Становиться невидимкой',
        ],
        wrongExp:
          'Допплер — существо, которое умеет принимать чужой облик. Так, к примеру, он превратился в Мышовура, чтобы обмануть Цири.',
        rightExp: 'Правильно!',
      },
      {
        id: '15',
        image: w15,
        question: 'Что обсуждали на совете чародеев?',
        rightAnswer: 'Стоит ли помогать Цинтре в войне с Нильфгаардом',
        answers: [
          'Стоит ли помогать Цинтре в войне с Нильфгаардом',
          'Нужно ли освобождать Геральта из башни',
          'Нужно ли менять внешность Йеннифер',
          'Есть ли у Цири магические способности',
        ],
        wrongExp:
          'На собрании чародеи обсуждали необходимость помощи Цинтре. Многие склонялись к тому, что помогать не нужно, но Тессея была уверена, что Нильфгаард нужно остановить. ',
        rightExp: 'Именно!',
      },
      {
        id: '16',
        image: w16,
        question:
          'Кто уничтожил большую часть нильфгаардских войск в финальной битве?',
        rightAnswer: 'Йеннифер',
        answers: ['Ведьмак', 'Йеннифер', 'Цири', 'Тиссея'],
        wrongExp:
          'Йеннифер, используя магическую силу, направила на нильфгаардскую армию настоящий огненный взрыв. Он и уничтожил большую часть нападающих воинов.',
        rightExp: 'Верно!',
      },
      {
        id: '17',
        image: w17,
        question: 'Где Ведьмак находит Цири в конце первого сезона?',
        rightAnswer: 'В лесу',
        answers: [
          'В доме у деревенской женщины',
          'На поле боя',
          'В лесу',
          'В башне',
        ],
        wrongExp:
          'Ведьмак и Цири встречаются в лесу. Девочка бросается к Геральту и первый же вопрос, который она задает: кто такая Йеннифер?',
        rightExp: 'Правильно!',
      },
    ],
  },
  {
    id: 'osd',
    name: 'Очень странные дела',
    background: osdBg,
    endImage: osdEndImg,
    preview: osdPrev,
    text: '19 февраля, свой день рождения отмечает Милли Бобби Браун. Поэтому сегодня мы решили сделать тематический тест. Давай проверим, хорошо ли ты помнишь сериал «Очень странные дела».',
    marks: {
      bad: 'А ты вообще смотрел сериал! По твоим ответам создается впечатление, что ты вообще не в курсе происходящего. Срочно исправляй ситуацию и иди пересматривать предыдущие сезоны.',
      good: 'Даже если ты смотрел сериал, то это было очень давно. Ну, или у кого-то просто плохая память. В любом случае рекомендуем на досуге пересмотреть пару серий (или даже сезонов).',
      best: 'Кажется, перед нами главный фанат «Очень странных дел»! Уверены, ты больше всех ждешь нового сезона и уже успел пересмотреть предыдущие серии любимого сериала. Так держать!',
    },
    questions: [
      {
        id: '1',
        image: osd1,
        question:
          'Начнем с простого: в каком городе происходят события сериала?',
        rightAnswer: 'Хокинс',
        answers: ['Хокинс', 'Мурдейл', 'Спрингфилд', 'Нордфилд'],
        wrongExp: 'Кажется, ты перепутал. В «Очень странных делах» был Хокинс.',
        rightExp: 'Верно!',
      },
      {
        id: '2',
        image: osd2,
        question: 'Что в 1 сезоне Оди украла в магазине?',
        rightAnswer: 'Вафли',
        answers: ['Одежду', 'Лампочки', 'Вафли', 'Туфли'],
        wrongExp: 'Мимо! Она украла вафли Eggo',
        rightExp: 'Правильно!',
      },
      {
        id: '3',
        image: osd3,
        question: 'Какое имя дали Оди при рождении?',
        rightAnswer: 'Джейн',
        answers: ['Нэнси', 'Хоуп', 'Джейн', 'Барбара'],
        wrongExp: 'Ошибочка! Ее назвали Джейн',
        rightExp: 'Именно!',
      },
      {
        id: '4',
        image: osd4,
        question:
          'Как героиня Вайноны Райдер общалась с сыном, когда он пропал?',
        rightAnswer: 'Через лампочки в доме',
        answers: [
          'Через лампочки в доме',
          'Через телефон',
          'С помощью силы мысли',
          'Через письма',
        ],
        wrongExp: 'Ну, нет! Она общалась с ним через лампочки',
        rightExp: 'Верно!',
      },
      {
        id: '5',
        image: osd5,
        question: 'Как Дастин назвал своего необычного питомца во 2 сезоне?',
        rightAnswer: 'Дарт',
        answers: ['Дарт', 'Джек', 'Стив', 'Брюс'],
        wrongExp: 'Не угадал! Он назвал его Дарт',
        rightExp: 'Правильно!',
      },
      {
        id: '6',
        image: osd6,
        question: 'Кем Макс нарядилась на Хэллоуин?',
        rightAnswer: 'Майком Майерсом',
        answers: [
          'Майком Майерсом',
          'Охотником за привидениями',
          'Ханом Соло',
          'Чубакой',
        ],
        wrongExp: 'Эх ты! Она была в костюме Майка Майерса',
        rightExp: 'Именно!',
      },
      {
        id: '7',
        image: osd7,
        question: 'С кем танцевал Дастин в финале 2 сезоне?',
        rightAnswer: 'С Нэнси',
        answers: ['С Нэнси', 'С Оди', 'Ни с кем', 'С Макс'],
        wrongExp: 'А вот и нет! Он танцевал с Нэнси',
        rightExp: 'Верно!',
      },
      {
        id: '8',
        image: osd8,
        question:
          'Как Хоппер назвал Оди в последнем сезоне, когда увидел ее новый образ?',
        rightAnswer: 'Панк с MTV',
        answers: [
          'Панк с MTV',
          'Хулиганка',
          'Он назвал ее своей дочкой',
          'Джэйн',
        ],
        wrongExp: 'Ну ты даешь! Хоппер сказал: «Ты похожа на панка с MTV»',
        rightExp: 'Правильно!',
      },
    ],
  },
  {
    id: 'igra-kalmara',
    name: 'Игра в Кальмара',
    background: ikBg,
    endImage: ikEndImg,
    preview: ikPrev,
    text: 'В середине сентября 2021 года на сервисе Netflix вышел южнокорейский сериал «Игра в кальмара», который быстро оказался на вершине самых популярных шоу. В этом тесте вы можете проверить себя на знание сериала.',
    marks: {
      bad: 'К сожалению, вы невнимательно смотрели «Игру в кальмара». Но не стоит переживать, у вас есть хорошая возможность, чтобы пересмотреть сериал!',
      good: 'Даже если ты смотрел сериал, то это было очень давно. Ну, или у кого-то просто плохая память. В любом случае рекомендуем на досуге пересмотреть пару серий (или даже сезонов).',
      best: 'Поздравляем, вы настоящий знаток известного южнокорейского триллера «Игра в кальмара»! Вот кто-кто, а вы бы точно получили денежный приз, как финалист этой игры!',
    },
    questions: [
      {
        id: '1',
        image: ik1,
        question: 'Что означает "игра в кальмара"?',
        rightAnswer: 'Детская корейская игра',
        answers: [
          'Традиционное корейское блюдо',
          'Детская корейская игра',
          'Компьютерная игра',
          'Догонялки',
        ],
        wrongExp:
          'К сожалению, нет! «Игра в кальмара» — это детская уличная корейская игра. На земле мелом рисуется фигура в виде кальмара. Участники должны находиться внутри игрового поля. Фишка игры в том, что нужно выбить соперника за пределы этой фигуры и добежать до головы.',
        rightExp: 'Верно!',
      },
      {
        id: '2',
        image: ik2,
        question: 'Сколько изначально было участников в этой кровавой игре?',
        rightAnswer: '456',
        answers: ['400', '345', '456', '500'],
        wrongExp:
          'Изначально в замкнутом пространстве под присмотром надзирателей было 456 человек. Все они добровольно согласились на «Игру в кальмара», однако никто даже и не догадывался о таких жестоких условиях.',
        rightExp: 'Правильно!',
      },
      {
        id: '3',
        image: ik3,
        question: 'Сколько игр нужно пройти, чтобы добраться до финала?',
        rightAnswer: '6',
        answers: ['4', '6', '8', '10'],
        wrongExp:
          'Чтобы добраться до финала, участнику нужно пройти все 6 игр!',
        rightExp: 'Именно!',
      },
      {
        id: '4',
        image: ik4,
        question: 'Почему участники согласились принять условия игры?',
        rightAnswer: 'Из-за больших финансовых проблем',
        answers: [
          'Из интереса',
          'Из-за больших финансовых проблем',
          'Хотели попробовать что-то новое в жизни',
          'Хотели получить адреналин',
        ],
        wrongExp:
          'Неверно! 456 участников «Игры в кальмара» не знали, что их ждет кровавая бойня. Все эти люди погрязли в долгах, поэтому они смело пошли на этот шаг. Но позже, конечно, участники пожалели о своем решении. Однако было уже слишком поздно…',
        rightExp: 'Правильно',
      },
      {
        id: '5',
        image: ik5,
        question: 'Как называлась первая игра в сериале "Игра в кальмара"?',
        rightAnswer: 'Тише едешь - дальше будешь',
        answers: [
          'Раз, два, три',
          'Море волнуется раз...',
          'Тише едешь - дальше будешь',
          'Прятки',
        ],
        wrongExp:
          'Первая игра называлась «Тише едешь — дальше будешь». В центре поля стоит большая кукла. На первый взгляд правила просты: нужно пересечь линию, которая находится за той самой куклой. Игрокам можно двигаться, пока фигура отвернула голову, напевая песенку. Однако, когда кукла поворачивается в сторону участников, а кто-то в это время пошевелился, то он выбывает из игры.',
        rightExp: 'Именно!',
      },
      {
        id: '6',
        image: ik6,
        question:
          'Кого в этой игре встречает главный герой - бедный кореец Сон Ки Хун?',
        rightAnswer: 'Друга детства',
        answers: [
          'Родного брата',
          'Дальнего родственника',
          'Друга детства',
          'Отца',
        ],
        wrongExp:
          'Сон Ки Хун встречает в «Игре в кальмара» своего друга детства — Чо Сан Ву. По словам его матери, он жил за рубежом и имел все, о чем главный герой мог только мечтать. На деле же оказалось все иначе. Чо Сан Ву неправильно распорядился ценными бумагами фирмы, где трудился несколько лет, поэтому был объявлен в розыск. Он пришел сюда, чтобы заработать денег, которые помогли бы ему расплатиться с компанией.',
        rightExp: 'Верно',
      },
      {
        id: '7',
        image: ik7,
        question: 'Под каким номером был Сон Ки Хун?',
        rightAnswer: '456',
        answers: ['456', '441', '001', '007'],
        wrongExp: 'Неверный ответ! Сон Ки Хун был под номером 456.',
        rightExp: 'Правильно!',
      },
      {
        id: '8',
        image: ik8,
        question: 'Кем был безобидный старичок, который был под номером 001?',
        rightAnswer: 'Богатым стариком, который и придумал эту игру',
        answers: [
          'Бедняком, которому нужны были деньги на лечение',
          'Богатым стариком, который и придумал эту игру',
          'Немощным мужчиной в годах, который разочаровался в жизни',
          'Отцом Сон Ки Хуна',
        ],
        wrongExp:
          'О Иль Нам или номер 001 — это богатый мужчина в годах, который и создал игру. Посоветовавшись со своими обеспеченными клиентами, он для развлечения придумал такую «интересное» удовольствие. А участником стал просто из любопытства.',
        rightExp: 'Именно!',
      },
      {
        id: '9',
        image: ik9,
        question: 'Кем была создана эта кровавая игра?',
        rightAnswer:
          'Богатыми людьми, которые хотели таким образом развлечь себя',
        answers: [
          'Одним небогатым человеком, который хотел доказать свою значимось',
          'Государством',
          'Богатыми людьми, которые хотели таким образом развлечь себя',
          'Богами',
        ],
        wrongExp:
          'Создателями этой игры выступили богатые люди, которые воспринимали все испытания участников как забаву. Одним из главных в этой команде был О Иль Нам, тот самый безобидный старичок, который выступал в команде под номером 001.',
        rightExp: 'Верно!',
      },
      {
        id: '10',
        image: ik10,
        question:
          'С кем из игроков почти сразу же подружился Сон Ки Хун (номер 456)?',
        rightAnswer: 'Со старичком (номер 001)',
        answers: [
          'С девушкой с тяжелой судьбой (номер 067)',
          'Со старичком (номер 001)',
          'С бандитом (номер 101)',
          'Ни с кем',
        ],
        wrongExp:
          'Сон Ки Хун почти сразу же нашел общий язык с немощным старичком, который был под номером 001. По его словам, он был серьезно болен — у него была опухоль головного мозга.',
        rightExp: 'Правильно!',
      },
      {
        id: '11',
        image: ik11,
        question: 'Сколько дней провел Сон Ки Хун в этой игре?',
        rightAnswer: 'Год',
        answers: ['Месяц', '6 дней', '1 день', 'Год'],
        wrongExp: 'Неверно! Конечно, Сон Ки Хун провел в этой игре шесть дней',
        rightExp: 'Именно!',
      },
      {
        id: '12',
        image: ik12,
        question: 'Кто вошел в тройку финалистов в игре?',
        rightAnswer: 'Номера - 456, 067, 218',
        answers: [
          'Номера - 001, 110, 456',
          'Номера - 456, 111, 001',
          'Номера - 456, 067, 218',
          'Никто из вышеперечисленных',
        ],
        wrongExp:
          'В тройку финалистов вошли такие номера, как 456, 067, 218. Пять игр прошли три участника: главный герой, балагур и бедняк Сон Ки Хун, беженка из Северной Кореи Кан Сэ Бёк и Чон Сан Ву — друг детства Сон Ки Хуна и руководитель инвестиционной группы в крупной холдинговой компании.',
        rightExp: 'Верно!',
      },
      {
        id: '13',
        image: ik13,
        question: 'От чего умирает Старик - участник под номером 001?',
        rightAnswer: 'От опухоли в голове',
        answers: [
          'Был убит в игре, так как не прошел испытание',
          'От опухоли в голове',
          'От старости',
          'От сердечного приступа',
        ],
        wrongExp:
          'О Иль Нам действительно был серьезно болен, он умер от опухоли головного мозга.',
        rightExp: 'Правильно!',
      },
      {
        id: '14',
        image: ik14,
        question: 'Что получает тот, кто проходит все испытания?',
        rightAnswer: 'Денежный приз',
        answers: ['Денежный приз', 'Квартиру', 'Работу', 'Ничего'],
        wrongExp:
          'Неверно! Конечно, кто прошел все испытания и выжил получает денежный приз в размере 45,6 миллиардов вон.',
        rightExp: 'Именно!',
      },
      {
        id: '15',
        image: ik15,
        question: 'Как называлась последняя игра?',
        rightAnswer: 'Игра в кальмара',
        answers: ['Сахарные соты', 'Репка', 'Прятки', 'Игра в кальмара'],
        wrongExp:
          'К сожалению, нет! Последней игрой, которая стала по счету шестой, стала та самая «Игра в кальмара».',
        rightExp: 'Верно!',
      },
      {
        id: '16',
        image: ik16,
        question: 'Во что были одеты сотрудники этой игры?',
        rightAnswer:
          'Красные комбинезоны с черными масками, где были нарисованы фигуры',
        answers: [
          'Классические костюмы с черными масками',
          'Черные плащи',
          'Красные комбинезоны с черными масками, где были нарисованы фигуры',
          'В школьную форму',
        ],
        wrongExp:
          'Сотрудники ужасной игры были одеты в красные комбинезоны. Костюмы они дополнили закрытыми черными масками с нарисованными фигурами в зависимости от должности. Каждый сотрудник имел свои обязанности.',
        rightExp: 'Правильно!',
      },
      {
        id: '17',
        image: ik17,
        question: 'Кто такой Фронтмен в игре?',
        rightAnswer: 'Правая рука создателя этой бойни',
        answers: [
          'Он следит за порядком игры и выполняет важные функции',
          'Один из создателей "Игры в кальмара"',
          'Правая рука создателя этой бойни',
          'Один из участников игры',
        ],
        wrongExp:
          'Неверно! Фронтмен — это ответственный человек, который является правой рукой создателя «Кальмара». Он отвечает за порядок и сотрудников, а также является ведущим и тем, кто принимает VIP-персон. Главный антагонист этой истории одет полностью во все черное, а его лицо скрывает маска.',
        rightExp: 'Именно!',
      },
      {
        id: '18',
        image: ik18,
        question: 'Что случилось с матерью главного героя Сон Ки Хуна?',
        rightAnswer: 'Умирает от сахарного диабета',
        answers: [
          'Ничего',
          'Бесследно исчезает',
          'Умирает от сахарного диабета',
          'У него нет матери',
        ],
        wrongExp:
          'Еще в первых сериях становится понятно о тяжелой болезни матери главного героя. Вернувшись после «Игры в кальмара», Сон Ки Хун обнаруживает тело родительницы на полу. Мать, не дождавшись сына, умерла от сахарного диабета.',
        rightExp: 'Верно!',
      },
      {
        id: '19',
        image: ik19,
        question: 'Почему создатели игры придумали такие кровавые правила?',
        rightAnswer: 'Они не считают участников за людей',
        answers: [
          'Они не считают участников за людей',
          'Они являются финалистами игры и были в похожем положении',
          'Решили провести эксперимент',
          'Никто из них не думал, что участников лишают жизни за любой промох',
        ],
        wrongExp:
          'Все, кто причастны к созданию этой кровавой игры, обеспеченные люди. Для них все это, как некое развлечение от рутины. Они никак не воспринимают участников, которые пришли на эти испытания не от хорошей жизни. Для них все эти люди являются «пушечным мясом» и не более того.',
        rightExp: 'Правильно!',
      },
      {
        id: '20',
        image: ik20,
        question:
          'После смерти Иль Нама эта жестокая игра перестала существовать?',
        rightAnswer: 'Нет',
        answers: ['Да', 'Нет', 'Никто не знает', 'Не знаю'],
        wrongExp:
          'Конечно же, нет! Даже после смерти старика О Иль Нама игра все также продолжается. Кто стал главарем после его смерти — неизвестно. Есть вероятность, что его место занял финалист прошлых лет и его правая рука — Ин Хо, который все это время был Фронтменом.',
        rightExp: 'Верно!',
      },
    ],
  },
];
