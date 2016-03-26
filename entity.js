// http://www.academy.terrasoft.ru/documents/docs/technic/SDK/7.6.0/ClientESQGettingResult.html !!!
// http://www.academy.terrasoft.ru/documents/docs/technic/SDK/7.6.0/ClientESQGettingResult.html
// https://www.terrasoft.ru/bpmonlinesdk/UsingEntitySchemaQuery.html

var esq = Ext.create("Terrasoft.EntitySchemaQuery", {rootSchemaName: "Invoice"});
esq.addColumn("Opportunity.Id");
esq.addColumn("PaymentStatus");
esq.addColumn("Amount");
var id = this.get("Id");
console.log(id);

esq.filters.add("Opportunity",
    Terrasoft.createColumnFilterWithParameter(
        Terrasoft.ComparisonType.EQUAL, "Opportunity.Id", id));

esq.filters.add("InvoiceId",
    Terrasoft.createColumnFilterWithParameter(
        Terrasoft.ComparisonType.GREATER_OR_EQUAL, "Amount", 150000));
//GREATER
//GREATER_OR_EQUAL

esq.filters.logicalOperation = Terrasoft.LogicalOperatorType.AND;

esq.getEntityCollection(function(result) {
    if (!result.success) {
        this.showInformationDialog("Ошибка запроса данных");
    } else {
        this.showInformationDialog("Данные получены успешно!");
        result.collection.each(function (item) {
            console.log(item.get("Id"));
            console.log(item.get("Amount"));
            console.log(item.get("PaymentStatus").value);
        });
    }
}, this);


