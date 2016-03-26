/**
 * Created by petun on 22.03.16.
 */

//Как добавить вычисляемое поле
//http://academy.terrasoft.ru/documents/?product=SDK&ver=7.7.0

define("AccountPageV2", [], function () {
    return {
        // Название схемы объекта страницы редактирования.
        "entitySchemaName": "Account",
        "details": {},
        // Настройка визуализации дополнительного поля на странице редактирования.
        attributes: {
            // Название колонки модели представления.
            "UsrSpecialField": {
                // Тип данных колонки модели представления.
                dataValueType: Terrasoft.DataValueType.TEXT,
                // Массив конфигурационных объектов, определяющих зависимости колонки [UsrBalance].
                dependencies: [
                    {
                        // Значение колонки [UsrBalance] зависит от значений колонок [Amount]
                        // и [PaymentAmount].
                        columns: ["UsrSpecialDate"],
                        // Метод-обработчик, который вызывается при изменении значения одной из колонок [Amount]
                        // и [PaymentAmount].
                        methodName: "calculateBalance"
                    }
                ]
            }
        },
        methods: {
            "calculateBalance": function() {
                debugger;
                this.set("UsrSpecialField", this.get('UsrSpecialDate').toString());
            }
        },
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
        ]
    };
});