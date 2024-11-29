const con = require('../connect');

const create = (req, res) => {
    const {descricao, preco, nome, validade, idforn} = req.body;

    con.query('INSERT INTO produtos (descricao, preco, nome, validade, idforn) VALUES (?, ?, ?, ?, ?)',
        [descricao, preco, nome, validade, idforn],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, descricao, preco, nome, validade, idforn});
        });
}

const read = (req, res) => {
    con.query('SELECT * FROM produtos', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const update = (req, res) => {
    const {idprod, descricao, preco, nome, validade, idforn} = req.body;
    let id = Number(req.params.id);
    let query = `UPDATE produtos SET descricao='${descricao}', preco='${preco}', nome='${nome}', validade='${validade}', preco='${preco}' WHERE idprod = ${id}`;

    con.query(query, (err, result) => {
    if (err) {
        res.status(500).json(err)
    } else {
        res.status(200).json(result)
    }
})
}

const deletar = (req, res) => {
    let id = Number(req.params.id);
    con.query(`DELETE FROM produtos WHERE idprod = ${id}`, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    update,
    deletar
}