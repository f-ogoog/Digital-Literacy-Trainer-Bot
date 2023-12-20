export const themes = [
  {
    title: 'Інтернет та безпека в мережі',
    text: 'Інтернет став невід\'ємною частиною нашого життя. Ми використовуємо його для роботи, навчання, розваг, спілкування з друзями та родичами. Однак, користуючись Інтернетом, важливо дотримуватися правил безпеки, щоб захистити себе від можливих загроз.',
    subtopics: [
      {
        subtopic: 'Безпечне переглядання веб-сайтів',
        text: ' Однією з найпоширеніших загроз в Інтернеті є фішингові атаки. Фішинг - це вид шахрайства, при якому зловмисники намагаються отримати особисту інформацію користувачів, наприклад, паролі, номери кредитних карток тощо. Щоб захиститися від фішингу, дотримуйтесь наступних правил:' +
          '\n- Не відкривайте електронні листи та посилання від невідомих відправників.' +
          '\n- Ретельно перевіряйте адреси веб-сайтів, на які ви переходите.' +
          '\n- Не вводьте особисту інформацію на ненадійних веб-сайтах.' +
          '\n \n Ще одна загроза, яка може виникнути при перегляданні веб-сайтів, - це зараження вірусами та шкідливими програмами. Віруси можуть пошкодити або знищити ваші файли, а шкідливі програми можуть крадіти особисту інформацію, наприклад, паролі, номери кредитних карток тощо. Щоб захиститися від вірусів та шкідливих програм, дотримуйтесь наступних правил:' +
          '\n- Завжди встановлюйте антивірусне програмне забезпечення і регулярно оновлюйте його.' +
          '\n- Не встановлюйте програмне забезпечення з ненадійних джерел.' +
          '\n- Будьте обережні при відвідуванні веб-сайтів, які не є надійні.',
      },
      {
        subtopic: 'Захист від вірусів та шкідливих програм',
        text: 'Щоб захиститися від вірусів та шкідливих програм, важливо використовувати надійний антивірус. Антивірусне програмне забезпечення сканує ваші файли та систему на наявність вірусів та шкідливих програм і видаляє їх, якщо знаходить.\n' +
          ' Антивірусне програмне забезпечення слід встановлювати на всі комп\'ютери, які підключені до Інтернету. Також важливо регулярно оновлювати антивірусне програмне забезпечення, щоб захистити свій комп\'ютер від останніх вірусів та шкідливих програм.\n' +
          ' Ось кілька порад щодо вибору антивірусного програмного забезпечення:' +
          '\n- Вибирайте антивірусне програмне забезпечення, яке має хороші відгуки від інших користувачів.' +
          '\n- Уважно вивчіть функції антивірусного програмного забезпечення, щоб переконатися, що воно відповідає вашим потребам.' +
          '\n- Спробуйте демо-версію антивірусного програмного забезпечення, перш ніж купувати його.',
      },
      {
        subtopic: 'Захист особистої інформації в Інтернеті',
        text: ' Особиста інформація, така як ваше ім\'я, адреса, номер телефону, номер кредитної картки тощо, може бути використана зловмисниками для шахрайства або інших незаконних дій. Щоб захистити свою особисту інформацію в Інтернеті, дотримуйтесь наступних правил:' +
          '\n- Не надсилайте свою особисту інформацію людям, яких ви не знаєте.' +
          '\n- Не вводьте свою особисту інформацію на ненадійних веб-сайтах.' +
          '\n- Будьте обережні при використанні соціальних мереж.' +
          '\n \n Ось кілька додаткових порад щодо захисту особистої інформації в Інтернеті:' +
          '\n- Використовуйте складні паролі для всіх своїх облікових записів.' +
          '\n- Регулярно змінюйте свої паролі.' +
          '\n- Увімкніть двофакторну аутентифікацію для своїх облікових записів.' +
          '\n- Використовуйте менеджер паролів, щоб зберігати свої паролі в одному безпечному місці.',
      }
    ],
    test: [
      {
        text: 'Що є однією з найпоширеніших загроз в Інтернеті, враховуючи фішингові атаки?',
        variants: {
          A: 'Зараження вірусами',
          B: 'Спам',
          C: 'Втрата особистої інформації через шахрайство',
        },
        answer: 'C',
      },
      {
        text: 'Як можна захистити свій комп\'ютер від вірусів та шкідливих програм?',
        variants: {
          A: 'Регулярно оновлювати антивірусне програмне забезпечення',
          B: 'Встановлюйте тільки програмне забезпечення з ненадійних джерел',
          C: 'Завжди вводьте особисту інформацію на всіх веб-сайтах',
        },
        answer: 'A',
      },
      {
        text: 'Які поради надаються для захисту особистої інформації в Інтернеті?',
        variants: {
          A: 'Надсилайте свою особисту інформацію незнайомим людям',
          B: 'Використовуйте прості паролі для облікових записів',
          C: 'Регулярно змінюйте паролі та використовуйте менеджер паролів',
        },
        answer: 'C',
      },
      {
        text: 'Чому важливо встановлювати антивірусне програмне забезпечення на всі комп\'ютери, що підключені до Інтернету?',
        variants: {
          A: 'Щоб уникнути відвідування ненадійних веб-сайтів',
          B: 'Щоб захистити від фішингових атак',
          C: 'Щоб сканувати систему на наявність вірусів та шкідливих програм',
        },
        answer: 'C',
      },
      {
        text: 'Як можна захистити свою особисту інформацію від використання зловмисниками?',
        variants: {
          A: 'Використовуйте прості паролі',
          B: 'Вводьте свою інформацію на всіх веб-сайтах',
          C: 'Не надсилайте особисту інформацію незнайомим людям',
        },
        answer: 'C',
      }
    ],
  },
  {
    title: 'Електронна комунікація',
    text: 'Електронна комунікація - це обмін інформацією за допомогою електронних засобів, таких як Інтернет, електронна пошта, соціальні мережі, чати та інші. Вона стала невід\'ємною частиною нашого життя, дозволяючи нам спілкуватися з людьми з усього світу в будь-який час і в будь-якому місці',
    subtopics: [
      {
        subtopic: 'Використання електронної пошти',
        text: ' Електронна пошта (е-пошта) - це один з найпоширеніших способів електронної комунікації. Вона дозволяє нам надсилати та отримувати текстові повідомлення, файли та інші дані.' +
          '\n Для того, щоб використовувати електронну пошту, необхідно мати обліковий запис в одному з провайдерів електронної пошти, таких як Gmail, Outlook або Yahoo. Після створення облікового запису ви зможете надсилати та отримувати електронні листи з будь-якого комп\'ютера або мобільного пристрою, підключеного до Інтернету.' +
          '\n Електронна пошта має ряд переваг перед традиційним листуванням. Вона дозволяє:' +
          '\n- Надсилати повідомлення швидко та легко.' +
          '\n- Надсилати повідомлення на велику кількість адресатів одночасно.' +
          '\n- Додавати файли до листа.' +
          '\n- Відстежувати статус доставки повідомлень.',
      },
      {
        subtopic: 'Соціальні мережі та їх безпека',
        text: ' Соціальні мережі - це онлайн-платформи, які дозволяють людям спілкуватися, ділитися інформацією та знайомитися один з одним. Найбільш популярними соціальними мережами є Facebook, Instagram, TikTok та Twitter.' +
          '\n Соціальні мережі мають ряд переваг. Вони дозволяють:' +
          '\n Тримати зв\'язок з друзями та родиною, які живуть далеко.' +
          '\n- Знаходити нових друзів та однодумців.' +
          '\n- Знаходити нових друзів та однодумців.' +
          '\n- Дізнаватися про останні новини та події.' +
          '\n- Ділитися своїми думками та враженнями з іншими людьми.' +
          '\n Однак соціальні мережі також мають ряд недоліків. Вони можуть бути:' +
          '\n- Залежність. Люди, які часто використовують соціальні мережі, можуть стати від них залежними.' +
          '\n- Шкідливі впливи. Соціальні мережі можуть призводити до кібербулінгу, фейкових новин та інших шкідливих впливів.' +
          '\n- Безпека. Соціальні мережі можуть становити загрозу безпеці особистих даних.',
      },
      {
        subtopic: 'Віртуальні конференції та чати',
        text: ' Віртуальні конференції та чати - це онлайн-платформи, які дозволяють людям спілкуватися в реальному часі. Вони використовуються для проведення нарад, вебінарів, навчальних курсів та інших заходів.' +
          '\n Найбільш популярними платформами для віртуальних конференцій та чатів є Zoom, Skype, Google Meet та Discord.' +
          '\n Віртуальні конференції та чати мають ряд переваг. Вони дозволяють:' +
          '\n- Спілкуватися з людьми з усього світу в реальному часі.' +
          '\n- Поділитися екраном та презентаціями.' +
          '\n- Забезпечувати можливість взаємодії між учасниками.' +
          '\n Однак віртуальні конференції та чати також мають ряд недоліків. Вони можуть бути:' +
          '\n- Технічні проблеми. Віртуальні конференції та чати можуть бути перервані технічними проблемами, такими як нестабільний інтернет-зв\'язок або проблеми з обладнанням.' +
          '\n- Втома. Віртуальні конференції та чати можуть бути напружуючими, оскільки люди проводять багато часу, дивлячись в екран.',
      }
    ],
    test: [
      {
        text: 'Що включає в себе поняття "електронна комунікація"?',
        variants: {
          A: 'Обмін інформацією за допомогою електронних засобів',
          B: 'Тільки використання електронної пошти',
          C: 'Лише спілкування через соціальні мережі',
        },
        answer: 'A',
      },
      {
        text: 'Яка перевага електронної пошти порівняно з традиційним листуванням?',
        variants: {
          A: 'Можливість додавати файли до листа',
          B: 'Тільки можливість відстеження статусу доставки повідомлень',
          C: 'Швидкість та зручність надсилання повідомлень',
        },
        answer: 'C',
      },
      {
        text: 'Який може бути недолік електронної пошти?',
        variants: {
          A: 'Залежність від неї',
          B: 'Повідомлення можуть бути загублені або заблоковані',
          C: 'Тільки може бути використана на комп\'ютерах',
        },
        answer: 'B',
      },
      {
        text: 'Що представляють собою соціальні мережі?',
        variants: {
          A: 'Тільки платформи для віртуальних конференцій',
          B: 'Онлайн-платформи для спілкування та обміну інформацією',
          C: 'Тільки інформаційні портали',
        },
        answer: 'B',
      },
      {
        text: 'Які переваги мають соціальні мережі?',
        variants: {
          A: 'Залежність від них',
          B: 'Можливість ділитися своїми думками та враженнями',
          C: 'Шкідливі впливи та кібербулінг',
        },
        answer: 'B',
      },
      {
        text: 'Що є прикладами платформ для віртуальних конференцій та чатів?',
        variants: {
          A: 'Google, Steam, Excel',
          B: 'Zoom, Skype, Google Meet та Discord',
          C: 'PyCharm, Epic Games, Instagram',
        },
        answer: 'B',
      },
      {
        text: 'Яка перевага віртуальних конференцій та чатів?',
        variants: {
          A: 'Залежність від них',
          B: 'Можливість взаємодії між учасниками та спілкування в реальному часі',
          C: 'Стабільний інтернет-зв\'язок',
        },
        answer: 'B',
      },
      {
        text: 'Який недолік може виникнути під час віртуальних конференцій та чатів?',
        variants: {
          A: 'Тільки технічні проблеми',
          B: 'Втома від тривалого перегляду екрану',
          C: 'Всі вищенаведені варіанти',
        },
        answer: 'C',
      }
    ],
  },
  {
    title: 'Цифрові навички роботи з інформацією',
    text: 'Цифрові навички роботи з інформацією є важливим компонентом сучасної освіти та життя. Вони дозволяють нам ефективно знаходити, оцінювати, аналізувати та використовувати інформацію, що доступна в Інтернеті та інших цифрових джерелах.',
    subtopics: [
      {
        subtopic: 'Пошук та оцінка інформації в Інтернеті',
        text: ' Це одна з найважливіших цифрових навичок. Вона передбачає вміння ефективно використовувати пошукові системи для пошуку інформації, а також критично її оцінювати.' +
          '\n До основних навичок пошуку інформації в Інтернеті належать:' +
          '\n- Вміння формулювати ефективні запити до пошукових систем.' +
          '\n- Вміння оцінювати результати пошуку за релевантністю, достовірністю та актуальністю.' +
          '\n- Вміння використовувати різні пошукові системи та інструменти.' +
          '\n До основних навичок оцінки інформації належать:' +
          '\n- Вміння визначати та оцінювати джерело інформації.' +
          '\n- Вміння визначати достовірність та актуальність  інформації.',
      },
      {
        subtopic: 'Аналіз та інтерпретація даних',
        text: ' Ця навичка дозволяє нам ефективно використовувати дані для вирішення завдань. Вона передбачає вміння збирати, обробляти та аналізувати дані, а також робити на їх основі висновки' +
          '\n До основних навичок аналізу та інтерпретації даних належать:' +
          '\n- Вміння збирати дані з різних джерел.' +
          '\n- Вміння обробляти та аналізувати дані за допомогою різних інструментів.' +
          '\n- Вміння робити на основі даних висновки та приймати рішення.',
      },
      {
        subtopic: 'Створення та редагування мультимедійного контенту',
        text: ' Ця навичка дозволяє нам створювати та редагувати мультимедійний контент, такий як текст, зображення, відео та аудіо. Вона передбачає вміння використовувати різні цифрові інструменти для створення та редагування мультимедійного контенту.' +
          '\n До основних навичок створення та редагування мультимедійного контенту належать:' +
          '\n- Вміння використовувати текстові, відео-, аудіо- та графічні редактори.' +
          '\n- 3D-моделювання та віртуальна реальність.' +
          '\n- Основи монтажу та композиції' +
          '\n- Робота з мультимедійними форматами' +
          '\n Ці цифрові навички можна розвивати за допомогою різних методів, таких як:' +
          '\n- Навчання в школі та університеті.' +
          '\n- Самонавчання за допомогою онлайн-ресурсів.' +
          '\n- Участь в тренінгах та курсах.',
      }
    ],
    test: [
      {
        text: 'Що передбачають цифрові навички "Пошук та оцінка інформації в Інтернеті"?',
        variants: {
          A: 'Вміння створювати мультимедійний контент',
          B: 'Вміння ефективно використовувати пошукові системи та критично оцінювати інформацію',
          C: 'Вміння збирати та аналізувати дані',
        },
        answer: 'B',
      },
      {
        text: 'Що включають в себе навички "Оцінка інформації в Інтернеті"?',
        variants: {
          A: 'Вміння створювати текстовий контент',
          B: 'Вміння визначати та оцінювати джерело інформації, достовірність та актуальність',
          C: 'Вміння аналізувати дані різними методами',
        },
        answer: 'B',
      },
      {
        text: 'Що забезпечують навички "Аналіз та інтерпретація даних"?',
        variants: {
          A: 'Вміння створювати 3D-моделі та працювати з віртуальною реальністю',
          B: 'Вміння збирати дані з різних джерел та обробляти їх за допомогою інструментів',
          C: 'Вміння працювати з графічними редакторами',
        },
        answer: 'B',
      },
      {
        text: 'Що включається до навичок "Створення та редагування мультимедійного контенту"?',
        variants: {
          A: 'Вміння використовувати пошукові системи для пошуку інформації',
          B: 'Вміння використовувати різні цифрові інструменти для створення та редагування мультимедійного контенту',
          C: 'Вміння робити висновки та приймати рішення на основі даних',
        },
        answer: 'B',
      },
      {
        text: 'Які методи можна використовувати для розвитку цифрових навичок?',
        variants: {
          A: 'Тільки навчання в школі та університеті',
          B: 'Тільки самонавчання за допомогою онлайн-ресурсів',
          C: 'Розвиток за допомогою різних методів, таких як навчання в школі, самонавчання, участь в тренінгах та курсах',
        },
        answer: 'C',
      }
    ],
  },
  {
    title: 'Основи програмування та робота з алгоритмами',
    text: 'Програмування - це процес розробки комп\'ютерних програм, які можуть виконувати різні завдання. Алгоритми - це послідовності інструкцій, які визначають, як комп\'ютер має виконати завдання.',
    subtopics: [
      {
        subtopic: 'Основні концепції програмування',
        text: ' Основними концепціями програмування є:' +
          '\n- Дані - це інформація, яку обробляє комп\'ютер. Дані можуть бути представлені в різних формах, таких як числа, текст, зображення та звуки.' +
          '\n- Операції - це дії, які комп\'ютер може виконувати над даними. Операції можуть бути простими, такими як додавання або віднімання, або більш складними, такими як сортування або пошук.' +
          '\n- Структури даних - це способи організації даних у комп\'ютері. Структура даних визначає, як дані зберігаються та доступні.' +
          '\n- Процедури - це послідовності інструкцій, які виконуються як єдина одиниця. Процедури часто використовуються для повторення завдань або групування пов\'язаних інструкцій.',
      },
      {
        subtopic: 'Введення до алгоритмів та їх застосування',
        text: ' Алгоритм - це послідовність інструкцій, які визначають, як комп\'ютер має виконати завдання. Алгоритми є основою програмування, і їх можна використовувати для вирішення широкого спектру завдань.' +
          '\n Алгоритми часто описуються за допомогою блок-схем. Блок-схема - це графічний спосіб представлення алгоритму. Блок-схеми складаються з блоків, які представляють різні види інструкцій, і ліній, які показують порядок виконання інструкцій.',
      }
    ],
    test: [
      {
        text: 'Що включає в себе процес програмування?',
        variants: {
          A: 'Введення даних в таблицю',
          B: 'Розробка комп\'ютерних програм',
          C: 'Виконання операцій над даними',
        },
        answer: 'B',
      },
      {
        text: 'Які основні концепції програмування включають в себе дані?',
        variants: {
          A: 'Тільки процедури',
          B: 'Операції та структури даних',
          C: 'Лише дані без інших елементів',
        },
        answer: 'B',
      },
      {
        text: 'Як визначаються алгоритми?',
        variants: {
          A: 'Послідовність інструкцій для виконання завдань',
          B: 'Тільки за допомогою блок-схем',
          C: 'Тільки за допомогою операцій',
        },
        answer: 'A',
      },
      {
        text: 'Що таке блок-схема в контексті програмування?',
        variants: {
          A: 'Графічний спосіб представлення алгоритму',
          B: 'Послідовність інструкцій',
          C: 'Типи операцій над даними',
        },
        answer: 'A',
      }
    ],
  },
  {
    title: 'Цифрова грамотність для роботи та бізнесу',
    text: 'Цифрова грамотність - це сукупність знань, умінь і навичок, необхідних для ефективного використання цифрових технологій у професійній діяльності. У сучасному світі цифрова грамотність є одним із ключових факторів успіху в роботі та бізнесі.',
    subtopics: [
      {
        subtopic: 'Використання офісних програм',
        text: ' Офісні програми - це базовий набір інструментів, необхідних для роботи в офісі та онлайн. До них відносяться текстові редактори, електронні таблиці, презентації та програми для створення графіків та діаграм.' +
          '\n Вміння використовувати офісні програми є обов\'язковим для будь-якого працівника офісу. ' +
          '\n Вони дозволяють:' +
          '\n- Створювати та редагувати текстові документи.' +
          '\n- Обробляти та аналізувати дані в електронних таблицях.' +
          '\n- Створювати презентації для показу інформації.' +
          '\n- Створювати графіки та діаграми для візуалізації даних.' +
          '\n Офісні програми постійно розвиваються та удосконалюються. Тому важливо постійно вдосконалювати свої навички роботи з ними.',
      },
      {
        subtopic: 'Віртуальні інструменти для управління проектами',
        text: ' Віртуальні інструменти для управління проектами - це онлайн-сервіси, які дозволяють керувати проектами та взаємодіяти з членами команди. До них відносяться такі сервіси як Asana, Trello, Jira, Slack та інші.' +
          '\n Вміння використовувати віртуальні інструменти для управління проектами є важливим для працівників, які беруть участь у реалізації проектів. Вони дозволяють:' +
          '\n- Ефективно планувати та контролювати виконання проектів.' +
          '\n- Розподіляти завдання та ресурси між членами команди.' +
          '\n- Спілкуватися та обмінюватися інформацією з членами команди.' +
          '\n- Відстежувати прогрес проекту та виявляти проблеми на ранніх етапах.' +
          '\n Віртуальні інструменти для управління проектами постійно розвиваються та удосконалюються. Тому важливо постійно вдосконалювати свої навички роботи з ними.',
      },
      {
        subtopic: 'Онлайн-платформи для роботи та навчання',
        text: ' Онлайн-платформи для роботи та навчання - це веб-сайти та сервіси, які дозволяють працювати та навчатися дистанційно. До них відносяться такі платформи як Google Workspace, Microsoft Office 365, Zoom, Google Meet та інші.' +
          '\n Вміння використовувати онлайн-платформи для роботи та навчання є важливим для працівників, які працюють віддалено, а також для студентів та інших учнів. Вони дозволяють:' +
          '\n- Працювати з документами та файлами, а також спілкуватися з колегами та однокласниками в режимі реального часу.' +
          '\n- Брати участь у вебінарах та інших онлайн-заняттях.' +
          '\n- Отримувати доступ до навчальних матеріалів та виконувати завдання.' +
          '\n Онлайн-платформи для роботи та навчання постійно розвиваються та удосконалюються.',
      }
    ],
    test: [
      {
        text: 'Що включає в себе поняття "цифрова грамотність для роботи та бізнесу"?',
        variants: {
          A: 'Знання історії розвитку цифрових технологій',
          B: 'Сукупність знань, умінь і навичок для ефективного використання цифрових технологій у професійній діяльності',
          C: 'Навички ведення бухгалтерії',
        },
        answer: 'B',
      },
      {
        text: 'Які інструменти входять до складу офісних програм?',
        variants: {
          A: 'Графічні редактори',
          B: 'Текстові редактори, електронні таблиці, презентації та програми для створення графіків та діаграм',
          C: 'Аудіоплеєри та відеоредактори',
        },
        answer: 'B',
      },
      {
        text: 'Які можливості надають офісні програми?',
        variants: {
          A: 'Тільки створення текстових документів',
          B: 'Створення та редагування текстових документів, обробка та аналіз даних в електронних таблицях, створення презентацій, графіків та діаграм',
          C: 'Тільки створення електронних таблиць',
        },
        answer: 'B',
      },
      {
        text: 'Що включають в себе віртуальні інструменти для управління проектами?',
        variants: {
          A: 'Інструмент для управління проектами - це тільки програмне забезпечення для спілкування',
          B: 'Онлайн-сервіси, які дозволяють керувати проектами та взаємодіяти з членами команди',
          C: 'Віртуальні інструменти для управління проектами мають лише графіки і не можуть виконувати завдання',
        },
        answer: 'B',
      },
      {
        text: 'Для чого важливе вміння використовувати онлайн-платформи для роботи та навчання?',
        variants: {
          A: 'Тільки для відпочинку',
          B: 'Для роботи в офісі',
          C: 'Для працівників, які працюють віддалено, а також для студентів та інших учнів, щоб працювати, навчатися дистанційно та отримувати доступ до навчальних матеріалів',
        },
        answer: 'C',
      }
    ],
  },
  {
    title: 'Цифрова грамотність в освіті',
    text: 'Цифрова грамотність - це набір знань, умінь та навичок, які необхідні для безпечного та ефективного використання цифрових технологій та ресурсів інтернету. Вона є важливою складовою успішної освіти в сучасному цифровому світі.',
    subtopics: [
      {
        subtopic: 'Використання технологій в навчанні та викладанні',
        text: 'Технології можуть використовуватися в навчанні різними способами. Вони можуть використовуватися для:' +
          '\n- Організації навчального процесу: створення освітніх платформ, систем управління навчанням, електронних журналів та інших інструментів, які допомагають вчителям та учням краще організувати свій навчальний процес.' +
          '\n- Надання доступу до інформації та ресурсів: створення електронних підручників, навчальних матеріалів, баз даних та інших ресурсів, які допомагають учням навчатися в будь-який час і в будь-якому місці.' +
          '\n- Створення інтерактивних навчальних середовищ: використання віртуальної реальності, доповненої реальності, інтерактивних навчальних ігор та інших технологій, які допомагають учням краще опрацьовувати матеріал.',
      },
      {
        subtopic: 'Розвиток електронних навчальних ресурсів',
        text: 'Електронні навчальні ресурси (ЕНР) - це навчальні матеріали, які створені та представлені в електронному вигляді. ЕНР можуть бути різноманітними за формою та змістом: електронні підручники, навчальні матеріали, тести, навчальні ігри та інші.' +
          '\n Розвиток ЕНР є важливим напрямком в освіті. ЕНР мають ряд переваг перед традиційними навчальними матеріалами:' +
          '\n- Доступність: ЕНР можуть бути доступні в будь-який час і в будь-якому місці, що особливо важливо для учнів, які проживають у віддалених районах або мають обмежений доступ до освітніх ресурсів.' +
          '\n- Інтерактивність: ЕНР дозволяють учням взаємодіяти з навчальним матеріалом, що сприяє кращому засвоєнню інформації.' +
          '\n- Надсилання індивідуальних навчальних траєкторій: ЕНР можуть бути адаптовані до потреб конкретного учня, що дозволяє забезпечити більш ефективне навчання.',
      }
    ],
    test: [
      {
        text: 'Що включає в себе поняття "Цифрова грамотність"?',
        variants: {
          A: 'Спроможність користуватися традиційними навчальними матеріалами',
          B: 'Набір знань, умінь та навичок для безпечного та ефективного використання цифрових технологій та ресурсів інтернету',
          C: 'Здатність вчителя правильно визначити потреби учня',
        },
        answer: 'B',
      },
      {
        text: 'Як технології можуть бути використані в навчанні та викладанні?',
        variants: {
          A: 'Тільки для створення освітніх платформ',
          B: 'Організація навчального процесу, надання доступу до інформації та ресурсів, створення інтерактивних навчальних середовищ',
          C: 'Виключно для адміністративних цілей',
        },
        answer: 'B',
      },
      {
        text: 'Що включає в себе поняття "Електронні навчальні ресурси (ЕНР)"?',
        variants: {
          A: 'Тільки електронні підручники',
          B: 'Навчальні матеріали, тести, навчальні ігри та інші матеріали, створені та представлені в електронному вигляді',
          C: 'Традиційні навчальні засоби',
        },
        answer: 'B',
      },
      {
        text: 'Які переваги мають Електронні навчальні ресурси (ЕНР) перед традиційними навчальними матеріалами?',
        variants: {
          A: 'ЕНР не мають переваг перед традиційними матеріалами',
          B: 'Доступність та інтерактивність',
          C: 'Тільки інтерактивність',
        },
        answer: 'B',
      },
      {
        text: 'З чим пов\'язаний розвиток електронних навчальних ресурсів в освіті?',
        variants: {
          A: 'З тільки традиційними методами навчання',
          B: 'З розвитком інтернет-технологій та прагненням забезпечити доступ до освіти в будь-якому місці',
          C: 'Тільки з розвитком електронних підручників',
        },
        answer: 'B',
      }
    ],
  },
  {
    title: 'Розвиток особистості в умовах цифрового світу',
    text: 'Цифровий світ відкриває перед особистістю нові можливості для розвитку. Онлайн-курси та відкрите навчання дозволяють отримувати якісну освіту, не виходячи з дому, психологічний аспект використання цифрових технологій дозволяє розвивати нові навички та вміння, а етика та відповідальність в Інтернеті допомагають сформувати виважене ставлення до віртуального світу.',
    subtopics: [
      {
        subtopic: 'Саморозвиток через онлайн-курси та відкрите навчання',
        text: 'Онлайн-курси та відкрите навчання є одними з найпопулярніших форм саморозвитку в цифровому світі. Вони пропонують широкий вибір навчальних програм з різних предметів, від мов і програмування до бізнесу та креативності. Онлайн-курси дозволяють навчатися в комфортному для себе темпі і в будь-який час доби.' +
          '\n Онлайн-курси та відкрите навчання можуть допомогти в розвитку особистості в наступних сферах:' +
          '\n- Освіта та професійний розвиток: онлайн-курси дозволяють отримати нові знання та навички, які можуть бути корисними в професійній діяльності.' +
          '\n- Самоосвіта та особистий розвиток: онлайн-курси можуть допомогти розвинути інтереси, хобі та творчі здібності.' +
          '\n- Інформаційна грамотність: онлайн-курси можуть навчити критично оцінювати інформацію, отриману з Інтернету.',
      },
      {
        subtopic: 'Психологічний аспект використання цифрових технологій',
        text: 'Цифрові технології мають значний вплив на психіку людини. Вони можуть сприяти розвитку таких навичок та якостей, як:' +
          '\n- Критичне мислення: цифрові технології дозволяють отримувати доступ до великої кількості інформації, що вимагає від людини критичного мислення для її оцінки та аналізу.' +
          '\n- Комунікація: цифрові технології дозволяють людям спілкуватися з іншими людьми з усього світу, що може сприяти розвитку їхніх комунікативних навичок.' +
          '\n- Самоорганізація: цифрові технології можуть допомогти людям краще організовувати свій час і ресурси.' +
          '\n Однак, цифрові технології також можуть мати негативний вплив на психіку людини, наприклад, викликати такі проблеми, як:' +
          '\n- Залежність: цифрові технології можуть бути дуже захоплюючими, що може призвести до їхньої залежності.' +
          '\n- Ізоляція: надмірне використання цифрових технологій може призвести до ізоляції людини від реального світу.' +
          '\n- Стрес: неконтрольоване використання цифрових технологій може призвести до стресу та інших психологічних проблем.',
      },
      {
        subtopic: 'Етика та відповідальність в Інтернеті',
        text: 'Етика та відповідальність в Інтернеті є важливими аспектами розвитку особистості в цифровому світі. Людина повинна усвідомлювати, що її дії в Інтернеті мають наслідки не тільки для неї самої, а й для інших людей.' +
          '\n До основних принципів етики та відповідальності в Інтернеті відносяться:' +
          '\n- Поважайте інших людей: не використовуйте Інтернет для поширення ненависті, дискримінації або насильства.' +
          '\n- Будьте відповідальні за свої дії: пам\'ятайте, що все, що ви публікуєте в Інтернеті, може бути прочитано іншими людьми.' +
          '\n- Захистіть свою особисту інформацію: не розголошуйте свою особисту інформацію незнайомим людям.',
      }
    ],
    test: [
      {
        text: 'Яка можливість для розвитку особистості в цифровому світі найбільш актуальна в контексті отриманої інформації?',
        variants: {
          A: 'Участь у фізичних тренінгах',
          B: 'Онлайн-курси та відкрите навчання',
          C: 'Заходи з вишивання',
        },
        answer: 'B',
      },
      {
        text: 'Які переваги надають онлайн-курси та відкрите навчання з точки зору розвитку особистості?',
        variants: {
          A: 'Обмежений вибір навчальних програм',
          B: 'Можливість отримання нових знань та навичок в зручний час і темпі',
          C: 'Виключення можливості самостійного вивчення',
        },
        answer: 'B',
      },
      {
        text: 'Які якості може розвивати психологічний аспект використання цифрових технологій?',
        variants: {
          A: 'Зменшення комунікативних навичок',
          B: 'Стрес та психологічні проблеми',
          C: 'Критичне мислення, комунікація, самоорганізація',
        },
        answer: 'C',
      },
      {
        text: 'Які проблеми може викликати неконтрольоване використання цифрових технологій?',
        variants: {
          A: 'Розвиток критичного мислення',
          B: 'Залежність, ізоляція, стрес',
          C: 'Саморозвиток через онлайн-курси',
        },
        answer: 'B',
      },
      {
        text: 'Які принципи етики та відповідальності в Інтернеті важливі для розвитку особистості?',
        variants: {
          A: 'Поширення ненависті та дискримінації',
          B: 'Повага до інших людей, відповідальність за свої дії, захист особистої інформації',
          C: 'Публікація особистої інформації незнайомим людям',
        },
        answer: 'B',
      }
    ],
  }
];