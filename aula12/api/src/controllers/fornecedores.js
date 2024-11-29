const con = require('../connect');

const create = (req, res) => {
    const {nome, cnpj, email} = req.body;

    con.query('INSERT INTO fornecedores (nome, cnpj, email) VALUES (?, ?, ?)',
        [nome, cnpj, email],
        (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            return res.status(201).json({ id: result.insertId, nome, cnpj, email});
        });
}

const read = (req, res) => {
    con.query('SELECT * FROM fornecedores', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(result)
        }
    })
}

const update = (req, res) => {
    const {idforn, nome, cnpj, email} = req.body;
    let id = Number(req.params.id);
    let query = `UPDATE fornecedores SET nome='${nome}', cnpj='${cnpj}', email='${email}' WHERE idforn = ${id}`;

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
    con.query(`DELETE FROM fornecedores WHERE idforn = ${id}`, (err, result) => {
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