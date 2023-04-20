
import NaoEncontrado from "../erros/NaoEncontrado.js";
import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = async (req, res, next) => {
        try {
            const autoresResultado = await autores.find();
            res.status(200).json(autoresResultado);
            
        } catch (err) {
            next(err);
        }
    };

    static listarAutorPorId = async (req, res, next) => {
        try {
            const id = req.params.id;
            const autoresResultado = await autores.findById(id);
            if (autoresResultado !== null) {
                res.status(200).send(autoresResultado);
            } else {
                next(new NaoEncontrado("Id do Autor não localizado."));
            }
        } catch (err) {
            next(err);
        }
    };
        
    static cadastrarAutor = async (req, res, next) => {
        try {
            let autor =  new autores(req.body);
            const autorResultado = await autor.save();
            res.status(201).send(autorResultado.toJSON());
        } catch (err) {
            next(err);
        }
    };

    static atualizarAutor = async (req, res, next) => {
        try {
            const id = req.params.id;
            const autoresResultado = await autores.findByIdAndUpdate(id, {$set: req.body}, {new: true});
            res.status(200).send(autoresResultado);
        } catch (err) {
            next(err);
        }
    };

    static excluirAutor = async (req, res, next) => {
        try {
            const id = req.params.id;
            await autores.findByIdAndDelete(id);
            res.status(200).send({message: "Autor removido com sucesso"});
        } catch (err) {
            next(err);
        }
    };
}

export default AutorController;