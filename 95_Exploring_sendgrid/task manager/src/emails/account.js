import sgMail from "@sendgrid/mail"

const sendgridAPIKey = "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"

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: "shaikhrafat25@gmail.com",
    from: "info@mnyinfotech.com",
    subject: "Task manager",
    text: "test email."
})