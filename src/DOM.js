/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        let block = document.createElement(tag);
        block.innerHTML = content;
        document.body.append(block);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let main_div = document.createElement('div');
    main_div.className = 'item_1';
    document.body.append(main_div);

    let divs = document.getElementsByClassName('item_1');
    for (let j = 2; j < level + 1; j++) {
        for (let k of divs) {
            for (let i = 0; i < childrenCount; i++) {
                let temp = document.createElement('div');
                temp.className = `item_${j}`;
                k.append(temp);
            }
        }
        divs = document.getElementsByClassName(`item_${j}`);
    }

    return document.getElementsByClassName('item_1')[0];
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    let items = document.getElementsByClassName('item_2');
    for (let elem of items) {
        let temp = document.createElement('section');
        temp.innerHTML = elem.innerHTML;
        temp.className = 'item_2';

        elem.before(temp);
        elem.remove();
    }

    return tree;
}
