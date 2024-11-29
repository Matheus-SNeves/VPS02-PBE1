const con = require('../connect');

const create = (req, res) => {
    const {idcliente, idprod, idtelefone, datalancamento, total} = req.body;

    con.query('INSERT INTO pedidos (idcliente, idprod, idtelefone, datalancamento, total) VALUES (?, ?, ?, ?, ?)',
        [idcliente, idprod, idtelefone, datalancamento, total],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, idcliente, idprod, idtelefone, datalancamento, total});
        });
}

const read = (req, res) => {
    con.query('SELECT * FROM pedidos', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const update = (req, res) => {
    const {idpedido, idcliente, idprod, idtelefone, datalancamento, total} = req.body;
    let id = Number(req.params.id);
    let query = `UPDATE pedidos SET idcliente='${idcliente}', idprod='${idprod}', idtelefone='${idtelefone}', datalancamento='${datalancamento}', total='${total}' WHERE idpedido = ${id}`;

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
    con.query(`DELETE FROM pedidos WHERE idpedido = ${id}`, (err, result) => {
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