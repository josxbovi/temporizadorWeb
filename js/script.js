let intervalo;
            let tiempoRestante = 0;

            function iniciar() {
                const tiempoInput = document.getElementById("tiempo");
                tiempoRestante = parseInt(tiempoInput.value);

                if (tiempoRestante > 0) {
                    intervalo = setInterval(decrementarContador, 1000);
                }
            }

            function decrementarContador() {
                const contador = document.getElementById("contador");
                contador.textContent = tiempoRestante;
                tiempoRestante--;

                if (tiempoRestante < 0) {
                    clearInterval(intervalo);
                    contador.textContent = "Tiempo finalizado";
                }
            }

            function pausar() {
                clearInterval(intervalo);
            }

            function reset() {
                clearInterval(intervalo);
                const contador = document.getElementById("contador");
                contador.textContent = "0";
                tiempoRestante = 0;
            }