(function(){
    var userFile = null;

    function init(){
        attachEvents();
    }

    function attachEvents(){

        $("#pageReload").on("click",function(){
            window.location.reload();
        });

        $("#fileReader").on("change",function(){

            userFile = window.URL.createObjectURL(this.files[0]);

            $('#userImage').attr('src',userFile);
            

            $("#invertImage").on("click",function(){

                $("#userImage").addClass('gammaImage');

                postConversion();
            });

        });

    }

    function postConversion(){
        $("#userMessage").slideDown("slow");

        $(".stage").on("mousemove",function(eve){
            mouseMoveOnStage(this, eve);
        });
    }

    function mouseMoveOnStage(ele, eve){
        var fE = $(".floatingElement");

        fE.show();
        fE.css("top" ,eve.clientY - 5);
        fE.css("left" ,eve.clientX - 5);

        $(ele).on("click",function(){
            $(ele).off("mousemove");
        });
    }
    init();
})();
