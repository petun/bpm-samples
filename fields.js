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
        ]
    };
});