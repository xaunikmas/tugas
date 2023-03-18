const {Mahasiswa} = require("../models");

class MahasiswaController {
    static async getMahasiswa(req, res){
        try{
            let mahasiswa = await mahasiswa.findAll({
                order: [[id,asc]]
            })
            res.json(mahasiswa)
        }
        catch(err){
            res.json(err)
        }
    }
    static addPage(req, res){

    }
    static async add (req, res){
        try{
            const {name, jurusan, sex, DaftarBaruId, DaftarUlangId} = req.body
            let result = await mahasiswa.create({
                name,jurusan,sex,DaftarBaruId, DaftarUlangId
            })
            res.json(result);
        }
        catch(err){
            res.json(err)
        }
    }
    static remove(req, res){

    }
    static editPage(req, res){

    }
    static edit(req, res){
    }
}

module.exports = MahasiswaController;