class Juego {

    turnoJugador(seleccion) {
        let resultado = 0;
        let selecBot = this.turnoBot();

        switch (seleccion) {
            case 'piedra':
                switch (selecBot) {
                    case 'piedra':
                        resultado = 0;
                        break;
                    case 'papel':
                        resultado = -1;
                        break;
                    case 'tijera':
                        resultado = 1;
                        break;
                }
                break;
            case 'papel':
                switch (selecBot) {
                    case 'piedra':
                        resultado = 1;
                        break;
                    case 'papel':
                        resultado = 0;
                        break;
                    case 'tijera':
                        resultado = -1;
                        break;
                }
                break;
            case 'tijera':
                switch (selecBot) {
                    case 'piedra':
                        resultado = -1;
                        break;
                    case 'papel':
                        resultado = 1;
                        break;
                    case 'tijera':
                        resultado = 0;
                        break;
                }
                break;
        }

        setTimeout(() => { //Esto se cambió para que cambiara la imagen antes del alert
            switch (resultado) {
                case -1:
                    alert("Perdiste");
                    break;
                case 0:
                    alert("Empate");
                    break;
                case 1:
                    alert("Ganaste");
                    break;
            }
        }, 10);

        return resultado;
    }

    turnoBot() {
        let seleccion = Math.floor(Math.random() * 3);
        let imgBot = document.getElementById("img-bot");

        switch (seleccion) {
            case 0:
                seleccion = 'piedra';
                break;
            case 1:
                seleccion = 'papel';
                break;
            case 2:
                seleccion = 'tijera';
                break;
        }

        imgBot.src = "res/" + seleccion + ".jpg";

        return seleccion;
    }

}
