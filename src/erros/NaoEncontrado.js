import ErroBase from "./ErroBase.js";

class NaoEncontrado extends ErroBase {
    constructor(mensagem = "Página não econtrada.") {
        super(mensagem, 404);
    }
}

export default NaoEncontrado;