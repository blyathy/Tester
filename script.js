const questions = [
    // 1–70: Python
    { question: "Что выведет print(2 + 3)?", options: ["5", "23", "\"2 + 3\"", "Ошибка", "None"], answer: "5" },
    { question: "Какой тип данных у True?", options: ["bool", "int", "str", "float", "None"], answer: "bool" },
    { question: "Что делает функция len()?", options: ["Возвращает длину объекта", "Удаляет элемент", "Добавляет элемент", "Сортирует список", "Завершает программу"], answer: "Возвращает длину объекта" },
    { question: "Как создать список в Python?", options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>", "list(1, 2, 3)"], answer: "[1, 2, 3]" },
    { question: "Как создать пустой словарь?", options: ["{}", "[]", "()", "set()", "None"], answer: "{}" },
    { question: "Какой результат у 5 // 2?", options: ["2", "2.5", "3", "1", "0"], answer: "2" },
    { question: "Какой оператор используется для возведения в степень?", options: ["**", "^", "^^", "//", "%"], answer: "**" },
    { question: "Какой метод добавляет элемент в список?", options: ["append()", "add()", "insert()", "extend()", "push()"], answer: "append()" },
    { question: "Как проверить тип переменной?", options: ["type()", "typeof", "checktype()", "kind()", "gettype()"], answer: "type()" },
    { question: "Какой результат у выражения bool(\"\")?", options: ["False", "True", "None", "Ошибка", "0"], answer: "False" },
    { question: "Что выведет print(\"a\" * 3)?", options: ["aaa", "a a a", "3a", "aaaa", "Ошибка"], answer: "aaa" },
    { question: "Что делает метод .split()?", options: ["Разделяет строку по разделителю", "Объединяет строки", "Удаляет пробелы", "Разбивает список", "Удаляет элементы"], answer: "Разделяет строку по разделителю" },
    { question: "Что вернёт range(3)?", options: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "1, 2", "3"], answer: "0, 1, 2" },
    { question: "Какой результат у 3 in [1, 2, 3, 4]?", options: ["True", "False", "None", "1", "Ошибка"], answer: "True" },
    { question: "Как начать блок условного оператора?", options: ["if условие:", "if (условие)", "if условие then", "when (условие)", "if {}"], answer: "if условие:" },
    { question: "Что делает elif?", options: ["Проверяет альтернативное условие", "Завершает цикл", "Начинает функцию", "Повторяет условие", "Пропускает итерацию"], answer: "Проверяет альтернативное условие" },
    { question: "Что делает while?", options: ["Повторяет блок, пока условие истинно", "Выполняется один раз", "Повторяет фиксированное число раз", "Определяет переменную", "Импортирует библиотеку"], answer: "Повторяет блок, пока условие истинно" },
    { question: "Как задать функцию?", options: ["def имя():", "func имя()", "function имя()", "create имя()", "function:"], answer: "def имя():" },
    { question: "Как вернуть значение из функции?", options: ["return значение", "yield значение", "print значение", "pass значение", "send значение"], answer: "return значение" },
    { question: "Как импортировать модуль math?", options: ["import math", "include math", "using math", "load math", "attach math"], answer: "import math" },
    { question: "Как вызвать функцию sqrt() из модуля math?", options: ["math.sqrt()", "sqrt()", "sqrt.math()", "math:sqrt()", "get.sqrt()"], answer: "math.sqrt()" },
    { question: "Что такое None?", options: ["Отсутствие значения", "Пустая строка", "Ноль", "Ложь", "Тип ошибки"], answer: "Отсутствие значения" },
    { question: "Что делает оператор is?", options: ["Проверяет идентичность объектов", "Сравнивает значения", "Проверяет тип", "Сравнивает длину", "Присваивает значение"], answer: "Проверяет идентичность объектов" },
    { question: "Как задать множество (set)?", options: ["{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)", "set = [1,2,3]", "set(1 2 3)"], answer: "{1, 2, 3}" },
    { question: "Что делает continue в цикле?", options: ["Переходит к следующей итерации", "Завершает цикл", "Повторяет цикл", "Переходит к началу программы", "Пропускает всю программу"], answer: "Переходит к следующей итерации" },
    { question: "Что делает break?", options: ["Завершает цикл", "Переходит к следующей итерации", "Приостанавливает программу", "Очищает список", "Завершает функцию"], answer: "Завершает цикл" },
    { question: "Как создать класс?", options: ["class Имя:", "Class Имя()", "def class():", "object Имя", "new class"], answer: "class Имя:" },
    { question: "Что такое __init__?", options: ["Конструктор класса", "Деструктор", "Метод печати", "Системная ошибка", "Модуль"], answer: "Конструктор класса" },
    { question: "Как вызвать родительский метод?", options: ["super()", "parent()", "base()", "this()", "upper()"], answer: "super()" },
    { question: "Как открыть файл для чтения?", options: ["open(\"file.txt\", \"r\")", "read(\"file.txt\")", "file(\"file.txt\")", "open(\"file.txt\")", "open(\"file.txt\", \"w\")"], answer: "open(\"file.txt\", \"r\")" },
    { question: "Как обозначается однострочный комментарий в Python?", options: ["#", "//", "/* */", "", "--"], answer: "#" },
    { question: "Какой результат у выражения 10 % 3?", options: ["1", "3", "0", "10", "Ошибка"], answer: "1" },
    { question: "Какой метод используется для сортировки списка?", options: ["sort()", "order()", "arrange()", "sorted()", "list.sort()"], answer: "sort()" },
    { question: "Как удалить элемент по индексу из списка?", options: ["del list[index]", "remove(index)", "pop[index]", "list.delete()", "cut(index)"], answer: "del list[index]" },
    { question: "Что делает input()?", options: ["Считывает ввод пользователя", "Выводит текст", "Вызывает ошибку", "Завершает программу", "Читает файл"], answer: "Считывает ввод пользователя" },
    { question: "Как обозначается логическое И?", options: ["and", "&&", "AND", "&", "+"], answer: "and" },
    { question: "Как обозначается логическое ИЛИ?", options: ["or", "||", "OR", "|", "/"], answer: "or" },
    { question: "Что делает функция map()?", options: ["Применяет функцию к каждому элементу итерируемого объекта", "Объединяет два списка", "Удаляет элементы", "Фильтрует значения", "Клонирует объекты"], answer: "Применяет функцию к каждому элементу итерируемого объекта" },
    { question: "Что делает функция filter()?", options: ["Оставляет элементы, удовлетворяющие условию", "Преобразует список в строку", "Удаляет все значения", "Разбивает список", "Добавляет в список"], answer: "Оставляет элементы, удовлетворяющие условию" },
    { question: "Что делает lambda?", options: ["Создаёт анонимную функцию", "Создаёт класс", "Удаляет переменные", "Импортирует модуль", "Открывает файл"], answer: "Создаёт анонимную функцию" },
    { question: "Как преобразовать строку \"123\" в целое число?", options: ["int(\"123\")", "str(123)", "float(\"123\")", "eval(123)", "parse(\"123\")"], answer: "int(\"123\")" },
    { question: "Что делает try...except?", options: ["Обрабатывает исключения", "Проверяет условие", "Повторяет код", "Создаёт цикл", "Определяет класс"], answer: "Обрабатывает исключения" },
    { question: "Как задать диапазон от 5 до 9 включительно?", options: ["range(5, 10)", "range(5, 9)", "range(5, 9+1)", "range(5, 9, 1)", "range[5, 10]"], answer: "range(5, 10)" },
    { question: "Что делает with open(...) as f:?", options: ["Автоматически закрывает файл", "Создаёт переменную", "Читает каталог", "Проверяет путь", "Выводит имя файла"], answer: "Автоматически закрывает файл" },
    { question: "Как получить доступ к элементу словаря по ключу?", options: ["dict[key]", "dict.key()", "dict.getkey()", "dict{key}", "dict->key"], answer: "dict[key]" },
    { question: "Как узнать количество элементов в словаре?", options: ["len(dict)", "dict.len()", "count(dict)", "dict.count()", "length(dict)"], answer: "len(dict)" },
    { question: "Что возвращает функция enumerate()?", options: ["Индекс и значение из последовательности", "Только значения", "Только индексы", "Ключ и значение", "Пары значений"], answer: "Индекс и значение из последовательности" },
    { question: "Что делает zip()?", options: ["Объединяет несколько итерируемых объектов в кортежи", "Сжимает данные", "Удаляет пустые элементы", "Переворачивает список", "Разбивает строку"], answer: "Объединяет несколько итерируемых объектов в кортежи" },
    { question: "Что делает метод strip()?", options: ["Удаляет пробелы с начала и конца строки", "Делает строку заглавной", "Разбивает строку", "Удаляет символы из середины строки", "Заменяет символы"], answer: "Удаляет пробелы с начала и конца строки" },
    { question: "Какой тип данных возвращает функция range()?", options: ["range", "list", "tuple", "dict", "set"], answer: "range" },
    { question: "Как получить последний элемент списка my_list?", options: ["my_list[-1]", "my_list[1]", "my_list[0]", "my_list[len]", "my_list[last]"], answer: "my_list[-1]" },
    { question: "Что делает метод .join()?", options: ["Объединяет элементы списка в строку", "Разделяет строку", "Копирует строку", "Удаляет символы", "Заменяет символы"], answer: "Объединяет элементы списка в строку" },
    { question: "Как создать кортеж из одного элемента 5?", options: ["(5,)", "(5)", "[5]", "{5}", "tuple[5]"], answer: "(5,)" },
    { question: "Что делает метод .pop() у списка?", options: ["Удаляет и возвращает элемент по индексу", "Копирует элемент", "Заменяет элемент", "Удаляет все элементы", "Удаляет по значению"], answer: "Удаляет и возвращает элемент по индексу" },
    { question: "Как объединить два списка a и b?", options: ["a + b", "a.append(b)", "a.join(b)", "a.extend(b)", "merge(a, b)"], answer: "a + b" },
    { question: "Что делает isinstance(x, int)?", options: ["Проверяет, является ли x числом", "Преобразует x в число", "Удаляет x", "Выводит тип", "Объявляет переменную"], answer: "Проверяет, является ли x числом" },
    { question: "Как вызвать метод upper() для строки?", options: ["\"abc\".upper()", "upper(\"abc\")", "abc.upper()", "str.upper()", "toUpper(\"abc\")"], answer: "\"abc\".upper()" },
    { question: "Что делает pass?", options: ["Заглушка, ничего не делает", "Завершает цикл", "Пропускает строку", "Возвращает значение", "Создаёт переменную"], answer: "Заглушка, ничего не делает" },
    { question: "Что выведет print(type([]))?", options: ["<class 'list'>", "<list>", "list", "[]", "None"], answer: "<class 'list'>" },
    { question: "Что делает not?", options: ["Логическое отрицание", "Проверка равенства", "Сравнение значений", "Условие", "Исключение"], answer: "Логическое отрицание" },
    { question: "Как проверить, является ли список пустым?", options: ["if not my_list:", "if my_list == None:", "if my_list == []:", "if len(my_list) < 1:", "if my_list is 0:"], answer: "if not my_list:" },
    { question: "Что делает метод .get() у словаря?", options: ["Получает значение по ключу", "Удаляет элемент", "Добавляет ключ", "Изменяет ключ", "Проверяет наличие"], answer: "Получает значение по ключу" },
    { question: "Как создать словарь с ключами a, b и значениями 1, 2?", options: ["{'a': 1, 'b': 2}", "{a = 1, b = 2}", "[a: 1, b: 2]", "(a:1, b:2)", "dict[a=1, b=2]"], answer: "{'a': 1, 'b': 2}" },
    { question: "Что делает set()?", options: ["Создаёт множество", "Создаёт список", "Объявляет переменную", "Устанавливает значение", "Объявляет функцию"], answer: "Создаёт множество" },
    { question: "Как узнать количество аргументов в функции?", options: ["Использовать *args и посмотреть длину", "Сравнить args.count()", "Использовать sizeof(args)", "Написать args.length()", "Применить argn()"], answer: "Использовать *args и посмотреть длину" },
    { question: "Что такое генератор списка?", options: ["[x for x in range(5)]", "gen(x)", "for x in range(5)", "x[] for x in range(5)", "list(x) in range(5)"], answer: "[x for x in range(5)]" },
    { question: "Как в Python называется пространство имён переменных?", options: ["Namespace", "Scope", "Stack", "Area", "Block"], answer: "Namespace" },
    { question: "Что делает del x?", options: ["Удаляет переменную x", "Очищает переменную", "Обнуляет x", "Скрывает x", "Объявляет x"], answer: "Удаляет переменную x" },
    { question: "Как в Python получить остаток от деления?", options: ["%", "//", "/", "divmod()", "mod()"], answer: "%" },
    { question: "Что выведет print(\"5\" + \"3\")?", options: ["53", "8", "5+3", "35", "Ошибка"], answer: "53" },

    // 71–100: Delphi
    { question: "Как начинается программа в Delphi?", options: ["program", "unit", "begin", "var", "uses"], answer: "program" },
    { question: "Как объявить переменную типа Integer?", options: ["var x: Integer;", "x = Integer;", "int x;", "dim x as Integer;", "Integer x;"], answer: "var x: Integer;" },
    { question: "С чего начинается основная часть программы?", options: ["begin", "start", "main", "body", "execute"], answer: "begin" },
    { question: "Чем заканчивается блок кода в Delphi?", options: ["end.", "stop", "done", "exit", "close"], answer: "end." },
    { question: "Как обозначается строковая переменная?", options: ["String", "Str", "Text", "Char[]", "Varchar"], answer: "String" },
    { question: "Какой оператор используется для присваивания?", options: [":=", "=", "==", "->", "<-"], answer: ":=" },
    { question: "Как вывести сообщение пользователю?", options: ["ShowMessage('Hello');", "echo 'Hello';", "print('Hello');", "Write('Hello');", "Output('Hello');"], answer: "ShowMessage('Hello');" },
    { question: "Что делает оператор if?", options: ["Выполняет условную проверку", "Создаёт цикл", "Завершает программу", "Объявляет переменную", "Вызывает процедуру"], answer: "Выполняет условную проверку" },
    { question: "Как записывается цикл for?", options: ["for i := 1 to 10 do", "for(i=1; i<=10; i++)", "foreach i in 1..10", "loop i from 1 to 10", "repeat i 1 to 10"], answer: "for i := 1 to 10 do" },
    { question: "Как объявить массив?", options: ["array[1..5] of Integer;", "int a[5];", "Integer[] a = new Integer[5];", "dim a(5) as Integer", "list a = (1..5)"], answer: "array[1..5] of Integer;" },
    { question: "Какой файл содержит исходный код Delphi?", options: [".pas", ".cpp", ".java", ".cs", ".py"], answer: ".pas" },
    { question: "Что такое procedure?", options: ["Подпрограмма без возвращаемого значения", "Класс", "Объект", "Тип данных", "Модуль"], answer: "Подпрограмма без возвращаемого значения" },
    { question: "Что делает оператор case?", options: ["Проверяет значение переменной по вариантам", "Объявляет переменные", "Создаёт цикл", "Импортирует модуль", "Выводит сообщение"], answer: "Проверяет значение переменной по вариантам" },
    { question: "Как объявить константу?", options: ["const Pi = 3.14;", "define Pi = 3.14;", "Pi := 3.14;", "let Pi = 3.14;", "final Pi = 3.14;"], answer: "const Pi = 3.14;" },
    { question: "Как создать новый модуль?", options: ["unit ModuleName;", "mod ModuleName;", "module ModuleName;", "new ModuleName;", "create ModuleName;"], answer: "unit ModuleName;" },
    { question: "Как завершить цикл принудительно?", options: ["break;", "exit;", "end;", "continue;", "stop;"], answer: "break;" },
    { question: "Что делает repeat...until?", options: ["Выполняет цикл, пока условие не станет истинным", "Повторяет бесконечно", "Останавливает цикл", "Создаёт переменную", "Открывает файл"], answer: "Выполняет цикл, пока условие не станет истинным" },
    { question: "Как вызвать функцию?", options: ["FunctionName;", "call FunctionName()", "execute FunctionName;", "FunctionName[];", "run FunctionName;"], answer: "FunctionName;" },
    { question: "Как задать комментарий?", options: ["// комментарий", "# комментарий", "-- комментарий", "/* комментарий */", "REM комментарий"], answer: "// комментарий" },
    { question: "Как объявить тип Boolean?", options: ["Boolean", "bool", "bit", "truefalse", "binary"], answer: "Boolean" },
    { question: "Что такое form в Delphi?", options: ["Окно пользовательского интерфейса", "Массив", "Переменная", "Класс", "Тип данных"], answer: "Окно пользовательского интерфейса" },
    { question: "Где размещаются компоненты?", options: ["На форме", "В модуле", "В переменной", "В цикле", "В классе"], answer: "На форме" },
    { question: "Что делает OnClick?", options: ["Обрабатывает событие нажатия кнопки", "Запускает таймер", "Закрывает форму", "Создаёт переменную", "Запускает цикл"], answer: "Обрабатывает событие нажатия кнопки" },
    { question: "Как вывести значение переменной x в сообщение?", options: ["ShowMessage(IntToStr(x));", "Show(x);", "Display(x);", "Print(x);", "Message(x);"], answer: "ShowMessage(IntToStr(x));" },
    { question: "Что такое TButton?", options: ["Кнопка", "Массив", "Переменная", "Цикл", "Форма"], answer: "Кнопка" },
    { question: "Как работает while?", options: ["Выполняет цикл, пока условие истинно", "Проверяет один раз", "Работает как for", "Выполняет бесконечно", "Работает как case"], answer: "Выполняет цикл, пока условие истинно" },
    { question: "Как указать имя формы?", options: ["Form1.Caption := 'Программа';", "Form1.Name := 'Программа';", "Form1.Label := 'Программа';", "SetTitle(Form1, 'Программа');", "Form1.Title := 'Программа';"], answer: "Form1.Caption := 'Программа';" },
    { question: "Что делает Timer?", options: ["Отслеживает время и выполняет событие", "Считывает дату", "Создаёт будильник", "Меняет цвет", "Создаёт паузу"], answer: "Отслеживает время и выполняет событие" },
    { question: "Что означает Application.Terminate?", options: ["Завершает приложение", "Скрывает форму", "Очищает переменные", "Перезапускает программу", "Закрывает модуль"], answer: "Завершает приложение" },
    { question: "Как задать переменную с плавающей точкой?", options: ["var x: Real;", "float x;", "x = float;", "x: Double();", "decimal x;"], answer: "var x: Real;" }
];

// Переменные состояния
let currentQuestion = 0;
let score = 0;
let questionLimit = 20; // Значение по умолчанию
let selectedQuestions = [];
let userAnswers = []; // Для хранения ответов пользователя

// Элементы DOM
const settingsDiv = document.querySelector(".settings");
const quizContainer = document.getElementById("quizContainer");
const resultContainer = document.getElementById("resultContainer");
const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("optionsBox");
const resultText = document.getElementById("resultText");
const resultChart = document.getElementById("resultChart");
const errorsDiv = document.getElementById("errors");
const nextButton = document.getElementById("nextButton");

function startTest() {
    const count = parseInt(document.getElementById("questionCount").value);
    questionLimit = count;

    // Перемешиваем все вопросы один раз в начале
    const allQuestionsShuffled = questions.slice().sort(() => 0.5 - Math.random());
    selectedQuestions = allQuestionsShuffled.slice(0, questionLimit);

    currentQuestion = 0;
    score = 0;
    userAnswers = [];

    settingsDiv.classList.add("hidden");
    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    errorsDiv.innerHTML = ""; // Очищаем предыдущие ошибки
    errorsDiv.classList.add("hidden");


    showQuestion();
}

function showQuestion() {
    const q = selectedQuestions[currentQuestion];
    questionBox.textContent = `${currentQuestion + 1}. ${q.question}`;

    optionsBox.innerHTML = ''; // Очищаем предыдущие варианты

    // Перемешиваем варианты для текущего вопроса
    const shuffledOptions = q.options.slice().sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(optionText => {
        const btn = document.createElement("button");
        btn.textContent = optionText;
        btn.onclick = () => checkAnswer(optionText, q);
        optionsBox.appendChild(btn);
    });

    nextButton.classList.add("hidden"); // Скрываем кнопку "Следующий" до ответа
}

function checkAnswer(selected, questionData) {
    userAnswers.push({
        question: questionData.question,
        selected: selected,
        correct: questionData.answer
    });

    if (selected === questionData.answer) {
        score++;
    }

    document.querySelectorAll("#optionsBox button").forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === questionData.answer) {
            btn.style.backgroundColor = "#c8e6c9"; // Зеленый для правильного
            btn.style.borderColor = "#a5d6a7";
        } else if (btn.textContent === selected) {
            btn.style.backgroundColor = "#ffcdd2"; // Красный для неправильного выбора пользователя
            btn.style.borderColor = "#ef9a9a";
        } else {
            btn.style.backgroundColor = "#e9ecef"; // Нейтральный для остальных
            btn.style.opacity = "0.6";
        }
    });

    nextButton.classList.remove("hidden"); // Показываем кнопку "Следующий"
}

function nextQuestion() {
    if (currentQuestion < selectedQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    const correctAnswers = score;
    const incorrectAnswers = selectedQuestions.length - score;
    const totalQuestions = selectedQuestions.length;

    resultText.textContent = `Вы набрали ${correctAnswers} из ${totalQuestions} (${((correctAnswers / totalQuestions) * 100).toFixed(1)}%) правильных ответов.`;

    // Обновление круговой диаграммы
    const correctPercentage = (correctAnswers / totalQuestions) * 100;
    const incorrectPercentage = 100 - correctPercentage;

    // conic-gradient: green 0% to X%, red X% to 100%
    // Пример: background: conic-gradient(#4CAF50 0% 70%, #F44336 70% 100%);
    resultChart.style.background = `conic-gradient(#4CAF50 0% ${correctPercentage}%, #F44336 ${correctPercentage}% 100%)`;


    const mistakes = userAnswers.filter(a => a.selected !== a.correct);
    if (mistakes.length > 0) {
        errorsDiv.classList.remove("hidden");
        let errorHTML = "<h2>Ошибки:</h2><ul id=\"errorList\">";
        mistakes.forEach(item => {
            errorHTML += `<li><strong>Вопрос:</strong> ${item.question}<br><strong>Ваш ответ:</strong> <span style="color: #c0392b;">"${item.selected}"</span><br><strong>Правильный ответ:</strong> <span style="color: #27ae60;">"${item.correct}"</span></li>`;
        });
        errorHTML += "</ul>";
        errorsDiv.innerHTML = errorHTML;
    } else {
        errorsDiv.classList.add("hidden");
        errorsDiv.innerHTML = ""; // Убедимся, что блок ошибок пуст, если их нет
    }
}

function restartTest() {
    settingsDiv.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    quizContainer.classList.add("hidden");
}

// Инициализация: можно скрыть контейнер с вопросами при загрузке, если он не скрыт HTML
document.addEventListener('DOMContentLoaded', () => {
    quizContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
});
