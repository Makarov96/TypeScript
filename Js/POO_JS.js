window.addEventListener('load', () => {




    var bicicleta = {
        color: 'Rojo',
        Modelo: 'BMX',
        frenos: 'De disco',
        VelocidadMax: '60km',
        CambiaColor: function(nuevo_color) {
            //  bicicleta.color = nuevo_color;
            this.color = nuevo_color;


        },
        CambiaVelocidad: function(nueva_velocidad) {

            this.VelocidadMax = nueva_velocidad;

        }


    };

    bicicleta.CambiaVelocidad('70kms/s');

    bicicleta.CambiaColor('azul');

    console.log(bicicleta);







































});