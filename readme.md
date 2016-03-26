websharks.bpmonline.com 
Логин: Марочкин Петр
Пароль: Nru23nuE


# REST
POST 
https://websharks.bpmonline.com/0/rest/PetunTestConfigurationService/GetTransformValue

Access-Token: auth-token-temporary
Content-Type: application/json

{"inputParam":"testParam"}


Почитать DataContract и другие атрибуты

## WSDL SOAP
Для создания WSDL нужно создать файл и положить в спец папку. 
/ServiceModule/<ServiceName>.

Тогда формат ответов должен быть XML. Я так понял.


## Интеграция со стороннем сервисом
### Создание proxy class. - Повторяем запросы исходного сервиса.

Это в Visual Studio делаем новую Class Library + доавляем ссылку на веб сервис.
Подкладываем библиотеку как внешнюю сборку. КАК?

### Простая генерация прокси класс с помощью svcutil
Он генерит cs файл и его можно вставить как исохдный код, предварительно поменяв namespace.


## MOCK-сервис - отладочный сервис
- Этос  помощью SoAPUI
- AddtoMockservice
- добавили ответ
- запустили Mock Service




BPM Online
IIS
SQL Server
Redis


Доабвить в карточку продажи новый блок, который отобр сумму всех просроченных счетов по данному счету.


## Client EntitySchemaQuery
http://www.community.terrasoft.ru/blogs/8977 - описание работы
this.get("Owner").value
this.get("Budget")


### Сущности

http://www.academy.terrasoft.ru/documents/docs/technic/SDK/7.6.0/ClientESQGettingResult.html !!!

OpportunityPageV2
Opportunity - продажа

Invoice - модель счета
```javascript
// счета
var esq = Ext.create("Terrasoft.EntitySchemaQuery", {rootSchemaName: "Invoice"});
// выбираем связанные 
esq.addColumn("Opportunity");
var id = this.get("Id");


// var filter
var filter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Opportunity.id", id);
esq.getEntityCollection(function(result) {
     result.collection.each(function (item) {
            message += "Account name: " + item.get("AccountName") +
            " - primary contact name: " + item.get("PrimaryContactName") + "\n";
        });

})

/*esq.getEntity(id, function(result) {
    console.log(result);
}, this);*/


```


## Jobs
- запуск от имени пользователи
- запуск от имени системы






 

