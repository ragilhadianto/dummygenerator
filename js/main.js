$(document).ready(function() {
  //push footer
  //var heg = $(window).height();
  //$('#wrapper').height(heg);

   $(".tabs-menu a").click(function(event) {
        event.preventDefault();
       // $(this).parent().addClass("current");
        //$(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

   //__upload --- opsi file
    $("#file_basic ul li").click(function(){
        var pfile = $(this).index();
        var content = $(".show_file ul li").index();

        $("#file_basic ul li .item-file").removeClass("current");
        $(".show_file ul li .item-show").slideUp();
        $("#file_basic ul li .item-file").eq(pfile).addClass("current");    
        $(".show_file ul li .item-show").eq(pfile).slideDown();
         
    });

   //__upload --- opsi file
    $("#file_expand ul li").click(function(){
        var pfile = $(this).index();
        var content = $("#show_file_expand ul li").index();

        $("#file_expand ul li .item-file").removeClass("current");
        $("#show_file_expand ul li .item-show").slideUp();
        $("#file_expand ul li .item-file").eq(pfile).addClass("current");    
        $("#show_file_expand ul li .item-show").eq(pfile).slideDown();
         
    });

   //__next tabbing
    $(".categori-ad .bisa_diklik").click(function(){
      $("#click-tab-2").attr({
        href: "#tab-2"
      });
      
      $(".tab-content").css("display", "none");
      $("#tab-2").fadeIn();

      $("#click-tab-2").parent().addClass("current");
      $("#click-tab-2").removeClass( "disable" );   

      $("#click-tab-2").trigger( "click" );   

    });


    $(".pilih-kanal select").change(function(){
      $("#click-tab-3").attr({
        href: "#tab-3"
      });
      
      $(".tab-content").css("display", "none");
      $("#tab-3").fadeIn();

      $("#click-tab-3").parent().addClass("current");
      $("#click-tab-3").removeClass( "disable" );   

      $("#click-tab-3").trigger( "click" ); 
       //auto click file image    
      $(".pilih_file ul li #_img").trigger( "click" );   
    });   


    $("#btn_upload").click(function(){
      $("#btnUpload").trigger( "click" );    
    });

    //___radio button
    $(".categori-ad ul li .name-ad").click(function(){ 
        $('input[type=radio]', this).prop("checked",true);
    });

    $(".pilih_file ul li").click(function(){
        $('input[type=radio]',this).prop("checked",true);
    });

    //__list kanal
    $("#list_kanal").children('option:gt(0)').hide();
    $(".bisa_diklik").click(function() {
        
        $("#list_kanal").children('option').hide();
        $("#list_kanal").children("option[value^=" + $(this).attr("id") + "]").show()
    })



    $(".expandable .bisa_diklik").click(function(){
        $(".upload_basic").hide();
        $(".upload_expand").show();
    });

    $(".no-expand .bisa_diklik").click(function(){
        $(".upload_expand").hide();
        $(".upload_basic").show();
    });

    $(".expandable .bisa_diklik").click(function(){
        $(".upload_basic").hide();
        $(".upload_expand").show();
    });


    //expand
    $("#kanal_premiumhead_youtube").click(function(){
        $(".id_youtube ").show();
    });
});