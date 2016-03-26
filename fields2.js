define("InvoicePageV2", ["ServiceHelper"], function (ServiceHelper) {
    return {
        // Название схемы объекта страницы редактирования.
        "entitySchemaName": "Invoice",
        "details": {},
        // Настройка визуализации дополнительного поля на странице редактирования.
        "methods": {
            onEntityInitialized: function() {
                this.callParent(arguments);
                debugger;
                var date = this.get("StartDate");
                var formatted = date.getFullYear() + '-' + date.getMonth() + '-' +  date.getDate();
                console.log(date);
                console.log(formatted);
                ServiceHelper.callService("PetunTestConfigurationService", "GetTransformValue",
                    function(response) {
                        var result = response.GetTransformValueResult;
                        this.set("CurrencyDate", result);
                    }, {"inputParam":formatted}, this);
            }
        },
        "diff": [
            {
                "operation": "insert",
                "parentName": "Header",
                "propertyName": "items",
                "values": {
                    "name": "CurrencyRate",
                    "bindTo": "CurrencyRate",
                    "layout": {"column": 0, "row": 3, "colSpan": 12},
                    "contentType": Terrasoft.ContentType.LONG_TEXT
                }
            }
        ]
    };
});
