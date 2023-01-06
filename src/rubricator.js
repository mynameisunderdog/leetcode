const rubricatorNodes = [
    { title: 'Вещи', children: [
        { title: 'Одежда', children: [
            { title: 'Мужская', children: [] },
            { title: 'Женская', children: [] },
        ]}
    ]},
    { title: 'Хобби', children: [
        { title: 'Велосипеды', children: [
            { title: 'Горные', children: [] }
        ]},
        { title: 'Мангалы', children: []}
    ]},
    { title: 'Транспорт', children: []}
];

const printNode = (path, node) => {
    if (node.children.length === 0) {
        console.log(`${path}${node.title}`);
        return
    }
    node.children.forEach((child) => {
        printNode(`${path}${node.title} => `, child)
    })
};

const printTree = rootNodes => rootNodes.forEach((node) => {
    printNode('', node)
});

console.log(printTree(rubricatorNodes));
