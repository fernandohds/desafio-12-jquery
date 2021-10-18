$(document).ready(function () {

    $("#frm").submit(function (e) {
        e.preventDefault();
        $("#frm :input").each(function () {

            let elemento = $(this)
            let elementType = $(this).attr('type')
            if (elementType !== 'submit' && elementType !== 'reset') {
                let inputValue = $(this).val();
                console.log('El input de ID ->' + elemento[0].id + '  Tiene el valor de ' + inputValue);
                $(".elDiv").append(`<p><h2> ${elemento[0].id}  ${inputValue}</h2></p>`);
           } });   }
        )
        })


        // $(document).ready(function(){

//     $("#frm").submit(function (e) {
//         e.preventDefault();
//         let hijos = $(e.target).children();
//         console.log(hijos[1].value);
//         //Primer input type="number"
//         console.log(hijos[2].value);

// $(".elDiv").append(`<p><h2>¡Hola ${hijos.val(1)} </h2></p>`);
// //     $("#btnSubmit").click(function(e){

// //         e.preventDefault();
// //         let input1 = $("#marca").val();
// //         let input2 = $("#anio").val();
// //         let input3 = $("#valor").val();
// //         let input4 = $("#correo").val();
// //         let input5 = $("#plan").val();

// //     });

// });

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
    // })