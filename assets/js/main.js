'use strict';

  const render = (root) => {
    root.empty();
    const wrapper = $('<img class="wrapper"></img>');
    var  points =$(".points");
    //Append de componentes
    var paises=$(".paises");
    if (paises.val()== 0){
      alert("Seleccione una opcion");
    } else {

    };

    $( ".paises" ).change(function() {
      if(paises.val()==1){
        $(".wrapper").attr({src: "assets/img/peru/"+ peru[Math.floor(Math.random()*peru.length)].image, alt: "" });

      }else if(paises.val()==2){
        $(".wrapper").attr({src: "assets/img/mexico/"+ mexico[Math.floor(Math.random()*mexico.length)].image, alt: "" });
      }
    });
    root.append(wrapper);

    $("#comprobar").click(function(event){
      event.preventDefault();
      var puntos=0;
      var  names =$(".name");
      if (paises.val()==1){
        if (peru.name.toLowerCase()==names.val().toLowerCase()){
          puntos += 5;
          points.val(puntos);
        } else{
            alert("Se equivoco de Coder ;(")
        }
      }else if (paises.val()==2) {

      }
    })

  };




  $( _ => {

    const root = $('.detail-img');
    render(root);
  });
