
const mailer = require("nodemailer")

const sendingMail = async (to,subject,text) => {

    const transporter = mailer.createTransport({
        service:"gmail",
        auth:{
            user:"realestatefinder18@gmail.com",
            pass:"mbag acxj rupt xpar"
        }
    })

    const mailOptions = {
        from:"realestatefinder18@gmail.com",
        to: to,
        subject: subject,
        html: text,
    }

    const mailResponse = await transporter.sendMail(mailOptions);
    console.log(mailResponse);
    return mailResponse
    
}

module.exports = {sendingMail}
