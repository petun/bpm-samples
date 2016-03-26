define("AccountPageV2", [], function () {
    return {
        // Название схемы объекта страницы редактирования.
        "entitySchemaName": "Account",
        "details": {},
        // Настройка визуализации дополнительного поля на странице редактирования.
        "diff": [
            {
                // Указывает на то, что выполняется операция добавления элемента на страницу.
                "operation": "insert",
                // Мета-имя родительского элемента управления, в который добавляется кнопка.
                "parentName": "LeftContainer",
                // Указывает на то, что кнопка добавляется в коллекцию элементов управления
                // родительского элемента (мета-имя которого указано в parentName).
                "propertyName": "items",
                // Мета-имя добавляемой кнопки.
                "name": "MainContactButton",
                // Дополнительные свойства элемента.
                "values": {
                    // Тип добавляемого элемента - кнопка.
                    itemType: Terrasoft.ViewItemType.BUTTON,
                    // Привязка заголовка кнопки к локализуемой строке схемы.
                    caption: {bindTo: "Resources.Strings.UserShowSpecialDate"},
                    // Привязка метода-обработчика нажатия кнопки.
                    click: {bindTo: "onOpenPrimaryContactClick"},
                    // Привязка свойства доступности кнопки.
                    enabled: {bindTo: "isRunning"},
                    // Настройка расположения поля.
                    "layout": {
                        "column": 1,
                        "row": 6,
                        "colSpan": 1
                    }
                }
            }
        ],
        "methods": {
            onOpenPrimaryContactClick: function() {
                console.log(this);
            },
            // Метод, проверяющий на какой стадии находится заказ.
            isRunning: function () {
                return true;
            }
        }
    };
});