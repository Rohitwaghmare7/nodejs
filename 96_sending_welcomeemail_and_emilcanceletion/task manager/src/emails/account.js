import sgMail from "@sendgrid/mail"

const sendgridAPIKey = "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"

sgMail.setApiKey(sendgridAPIKey)

export const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "info@mnyinfotech.com",
        subject: "Task manager",
        text: 'welcome to the app,'
    })
}

export const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "info@mnyinfotech.com",
        subject: "Task manager",
        text: 'Kya ho gaya yaar ....!!!'
    })
}