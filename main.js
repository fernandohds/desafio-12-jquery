$(document).ready(function(){

    $("#frm").submit(function (e) {
        e.preventDefault();
        let hijos = $(e.target).children();
        console.log(hijos[1].value);
        //Primer input type="number"
        console.log(hijos[2].value);


//     $("#btnSubmit").click(function(e){

//         e.preventDefault();
//         let input1 = $("#marca").val();
//         let input2 = $("#anio").val();
//         let input3 = $("#valor").val();
//         let input4 = $("#correo").val();
//         let input5 = $("#plan").val();
$("#elDiv").append(`<p><h2>¡Hola ${hijos[1]} </h2></p>`);
//     });

});

// frm.addEventListener('submit', (event) => {
//     event.preventDefault();
//         let input1  = document.getElementById("marca").value;
//         let input2  = document.getElementById("anio").value;
//         let input3  = document.getElementById("valor").value;
//         let input4  = document.getElementById("plan").value;
//         console.log(input1);
//         console.log(input2);
//         console.log(input3);
//         console.log(input4);
    })
   