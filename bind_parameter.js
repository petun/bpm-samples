/**
 * Created by petun on 22.03.16.
 */

//Как заблокировать поле на странице редактирования по определенному условию

define("AccountPageV2", ['BusinessRuleModule'], function (BusinessRuleModule) {
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
        rules: {
            // Набор правил для колонки [UsrSpecialDate] модели представления.
            "UsrSpecialDate": {
                // Правило зависимости доступности поля [Контрагент] от значения в поле [Наименование].
                BindParameterEnabledAccountByName: {
                    // Тип правила BINDPARAMETER.
                    ruleType: BusinessRuleModule.enums.RuleType.BINDPARAMETER,
                    // Правило регулирует свойство ENABLED поля.
                    property: BusinessRuleModule.enums.Property.ENABLED,
                    // Массив условий, при выполнении которых отрабатывает правило. В данном
                    // случае массив содержит одно условие для определения, установлено ли значение
                    // в колонке [Name].
                    conditions: [{
                        // Выражение левой части условия.
                        leftExpression: {
                            // Тип выражения ATTRIBUTE указывает на то, что в качестве выражения выступает
                            // атрибут (колонка) модели представления.
                            type: BusinessRuleModule.enums.ValueType.ATTRIBUTE,
                            // Название колонки модели представления, значение которой сравнивается в выражении.
                            attribute: "UsrSpecialField"
                        },
                        // Тип операции сравнения.
                        comparisonType: Terrasoft.ComparisonType.NOT_EQUAL,
                        // Выражение правой части условия.
                        rightExpression: {
                            // Тип выражения CONSTANT указывает на то, что в качестве значения выражения выступает
                            // константное значение.
                            type: BusinessRuleModule.enums.ValueType.CONSTANT,
                            // Значение, с которым сравнивается выражение левой части.
                            value: "NO"
                        }
                    }]
                }
            }
        }
    }
});