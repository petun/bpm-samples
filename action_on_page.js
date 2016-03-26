define("AccountPageV2", [], function () {
    return {
        // Название схемы объекта страницы редактирования.
        "entitySchemaName": "Account",
        "details": {},
        // Настройка визуализации дополнительного поля на странице редактирования.
        "diff": [],
        "methods": {
            isRunning: function() {
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