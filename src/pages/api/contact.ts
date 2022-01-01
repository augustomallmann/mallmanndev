import type { NextApiRequest, NextApiResponse } from 'next'
import { transporter } from '../../services/nodemailer';

const nodemailerEmailDestination: string = process.env.NODEMAILER_DESTINATION_EMAIL ?? '';

export default async function async(req: NextApiRequest, res: NextApiResponse) {

    try {
        await transporter.sendMail({
            from: req.body.data.email,
            to: nodemailerEmailDestination,
            subject: `${req.body.data.name}: ${req.body.data.subject}`,
            html: `<div>
                        <p>From: ${req.body.data.email}</p>
                        <p>${req.body.data.message}</p>
                    </div>`,
        })
        return res.status(201).end()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error })
    }

}
