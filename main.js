
frm.addEventListener('submit', (event) => {
    event.preventDefault();
        let input1  = document.getElementById("marca").value;
        let input2  = document.getElementById("anio").value;
        let input3  = document.getElementById("valor").value;
        let input4  = document.getElementById("plan").value;
        console.log(input1);
        console.log(input2);
        console.log(input3);
        console.log(input4);
    })
    $('body').append("<p><h2>¡Hola Coder!</h2></p>");