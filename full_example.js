define("AccountPageV2", [], function () {
    return {
        // Название схемы объекта страницы редактирования.
        "entitySchemaName": "Account",
        "details": {},
        // Настройка визуализации дополнительного поля на странице редактирования.
        "diff": [
            {
                // Метаданные для добавления поля [Место встречи].
                "operation": "insert",
                "parentName": "Header",
                "propertyName": "items",
                "name": "UsrSpecialField",
                "values": {
                    "layout": {"column": 0, "row": 2, "colSpan": 12}
                }
            },
            {
                // Метаданные для добавления поля [Место встречи].
                "operation": "insert",
                "parentName": "Header",
                "propertyName": "items",
                "name": "UsrSpecialDate",
                "values": {
                    "layout": {"column": 0, "row": 3, "colSpan": 12}
                }
            },
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
            },
            // Метод-обработчик действия, который отображает в информационном окне дату выполнения заказа.
            showOrderInfo: function () {
                // Получение даты выполнения заказа.
                var dueDate = this.get("UsrSpecialDate");
                // Вызов стандартного системного метода для отображения информационного окна.
                this.showInformationDialog(dueDate);
            },
            // Перегрузка базового виртуального метода, возвращающего коллекцию действий страницы редактирования.
            "getActions": function () {
                // Вызывается родительская реализация метода для получения
                // коллекции проинициализированных действий базовой страницы.
                var actionMenuItems = this.callParent(arguments);
                // Добавление линии сепаратора для визуального отделения пользовательского действия от списка
                // действий базовой страницы.
                actionMenuItems.addItem(this.getButtonMenuItem({
                    Type: "Terrasoft.MenuSeparator",
                    Caption: ""
                }));
                // Добавление пункта меню в список действий страницы редактирования.
                actionMenuItems.addItem(this.getButtonMenuItem({
                    // Привязка заголовка пункта меню к локализуемой строке схемы.
                    "Caption": {bindTo: "Resources.Strings.UserShowSpecialDate"},
                    // Привязка метода обработчика действия.
                    "Tag": "showOrderInfo",
                    // Привязка свойства видимости пункта меню к значению, которое возвращает метод isRunning.
                    "Visible": {bindTo: "isRunning"}
                }));
                return actionMenuItems;
            }
        }
    };
});