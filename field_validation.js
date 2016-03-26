/**
 * Created by petun on 22.03.16.
 */

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
            }
        ],
        "methods": {
            "dueDateValidator": function () {
                // Переменная для хранения сообщения об ошибке валидации.
                var invalidMessage = "";
                // Проверка значений колонок [DueDate] и [CreatedOn].
                if (this.get("UsrSpecialField") != "YES") {
                    invalidMessage = "Message is invalid!"; // this is need to store in Localized Condig
                }
                return {
                    fullInvalidMessage: invalidMessage,
                    invalidMessage: invalidMessage
                };
            }

            ,
            // Переопределение базовой функции, инициализирующей пользовательские валидаторы.
            setValidationConfig: function () {
                // Вызывает инициализацию валидаторов родительской модели представления.
                this.callParent(arguments);
                // Для колонки [DueDate] добавляется метод-валидатор dueDateValidator.
                this.addColumnValidator("UsrSpecialField", this.dueDateValidator);
                //Для колонки [CreatedOn] добавляется метод-валидатор dueDateValidator.
            }
        }
    }
        ;
});