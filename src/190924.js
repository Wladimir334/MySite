/*
$(document).ready(function () {    
    $("p").click(function () {
        $(this).hide();
    });
});


/* знак $ в начале вызывает Jquery  и становится: $(document) = html.document
$('p') = document.getElements('p')
*/

/*
$(document).ready(function () {    
    $("button").click(function () {
        $('p').toggle();
    });
});
*/

/*
$(document).ready(function () {    
    //$("p").text('Текст установленный из jQuery');
    $('p').html("<h3>Текст установленный из jQuery</h3>");
    //$("input").val("Значение поля, установленное из jQuery");
    $("p").attr("style", "font-size: 30px;");
    $("p").text();

    /*
    $("p").append("Hello"); - добавление значения в конец тега
    $("p").prepend("Oh, man, ..."); - добавление значения в начало тега
    $("p").after("div");
    $("p").before("div");

    div::after{
    }
    div::before{          
    }

    */
/*
    $("p").before("<div>Hello!</div>");

    //$("p").remove() - удаление дочернего элемента (или указанного в методе)
    //$("p").empty()  -  удаление всех дочерних элементов



});
*/

$(document).ready(function () {    
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/5",
        type: "GET",
        success: function (data) {
            
                for (key in data) {
                $('#ajaxPicture').append(key + ":" + data[key] + "<br>");
                
            }
        
            },
        error: function (error) {
            $('#ajaxPicture').text(error);
        }

    })
});
    