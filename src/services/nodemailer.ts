import { createTransport } from "nodemailer"

const nodemailerUser: string = process.env.NODEMAILER_ACCOUNT ?? ""
const nodemailerPass: string = process.env.NODEMAILER_PASSKEY ?? ""

export const transporter = createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: nodemailerUser,
        pass: nodemailerPass,
    },
    secure: true,
})
