

function enviarForm(dados) {
    const nodemailer = require("nodemailer")

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "royal.ba2022@gmail.com",
            pass: "gs362498"
        }
    });

    transporter.sendMail({
        from: "Royal Enfield Bahia <royal.ba2022@gmail.com>",
        to: "giovanedevweb@gmail.com",
        subject: "Contato Lead",
        text: dados
        
    }).then(message => {
        console.log(message)
    }).catch(err => {
        console.log(err)
    })
}
const dados = 'Eu sou a Bruxa 2'

enviarForm(dados)
