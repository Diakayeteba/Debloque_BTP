import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, phone, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Champs requis manquants.' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const htmlBody = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #F9FAFB; margin: 0; padding: 0; }
        .wrapper { max-width: 600px; margin: 30px auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .header { background: #1E3A8A; padding: 32px 40px; text-align: center; }
        .header h1 { color: #fff; margin: 0; font-size: 22px; letter-spacing: 1px; }
        .header p { color: #93C5FD; margin: 6px 0 0; font-size: 13px; }
        .badge { display: inline-block; background: #F59E0B; color: #fff; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 99px; margin-top: 12px; letter-spacing: 1px; text-transform: uppercase; }
        .body { padding: 32px 40px; }
        .field { margin-bottom: 20px; }
        .field label { display: block; font-size: 11px; font-weight: 700; color: #9CA3AF; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
        .field p { background: #F3F4F6; border-radius: 8px; padding: 12px 16px; margin: 0; color: #111827; font-size: 15px; line-height: 1.6; }
        .message-box { background: #EFF6FF; border-left: 4px solid #1E3A8A; border-radius: 0 8px 8px 0; padding: 16px 20px; color: #1E3A8A; font-size: 15px; line-height: 1.7; white-space: pre-wrap; }
        .divider { border: none; border-top: 1px solid #E5E7EB; margin: 24px 0; }
        .footer { background: #F9FAFB; padding: 20px 40px; text-align: center; color: #9CA3AF; font-size: 12px; }
        .footer a { color: #F59E0B; text-decoration: none; }
        .reply-btn { display: inline-block; background: #F59E0B; color: #fff; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 10px; text-decoration: none; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>DÉBLOQUÉ BTP</h1>
          <p>Nouveau message reçu depuis le site web</p>
          <span class="badge">Nouveau contact</span>
        </div>
        <div class="body">
          <div class="field">
            <label>Nom complet</label>
            <p>${name}</p>
          </div>
          <div class="field">
            <label>Email</label>
            <p><a href="mailto:${email}" style="color:#1E3A8A;">${email}</a></p>
          </div>
          ${phone ? `<div class="field"><label>Téléphone</label><p>${phone}</p></div>` : ''}
          ${subject ? `<div class="field"><label>Sujet</label><p>${subject}</p></div>` : ''}
          <hr class="divider" />
          <div class="field">
            <label>Message</label>
            <div class="message-box">${message.replace(/\n/g, '<br/>')}</div>
          </div>
          <div style="text-align:center;">
            <a href="mailto:${email}?subject=Re: ${subject || 'Votre message'}" class="reply-btn">
              Répondre à ${name}
            </a>
          </div>
        </div>
        <div class="footer">
          <p>Message envoyé depuis <strong>debloque-btp.ml</strong> · <a href="https://wa.me/22366724869">WhatsApp</a></p>
          <p style="margin-top:4px;">© ${new Date().getFullYear()} DÉBLOQUÉ BTP — Abdoulaye KEITA</p>
        </div>
      </div>
    </body>
    </html>
  `

  try {
    await transporter.sendMail({
      from: `"DÉBLOQUÉ BTP Website" <${process.env.EMAIL_USER}>`,
      to: 'madoudiakayeteba@gmail.com',
      replyTo: email,
      subject: `[DÉBLOQUÉ BTP] ${subject || `Nouveau message de ${name}`}`,
      html: htmlBody,
    })

    // Auto-reply to the client
    await transporter.sendMail({
      from: `"Abdoulaye KEITA — DÉBLOQUÉ BTP" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Votre message a bien été reçu — DÉBLOQUÉ BTP',
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8" />
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background: #F9FAFB; margin: 0; padding: 0; }
            .wrapper { max-width: 580px; margin: 30px auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
            .header { background: #1E3A8A; padding: 32px 40px; text-align: center; }
            .body { padding: 32px 40px; color: #374151; font-size: 15px; line-height: 1.7; }
            .footer { background: #F9FAFB; padding: 20px 40px; text-align: center; color: #9CA3AF; font-size: 12px; }
            .wa-btn { display: inline-block; background: #25D366; color: #fff; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 10px; text-decoration: none; margin-top: 16px; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1 style="color:#fff;margin:0;font-size:22px;">DÉBLOQUÉ BTP</h1>
              <p style="color:#93C5FD;margin:6px 0 0;font-size:13px;">Bamako, Mali</p>
            </div>
            <div class="body">
              <p>Bonjour <strong>${name}</strong>,</p>
              <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
              <p>Pour toute urgence, n'hésitez pas à nous contacter directement :</p>
              <ul>
                <li>📞 +223 70 91 24 03 / +223 66 72 48 69</li>
                <li>✉️ madoudiakayeteba@gmail.com</li>
              </ul>
              <div style="text-align:center;">
                <a href="https://wa.me/22366724869?text=Bonjour%20Abdoulaye%2C%20je%20viens%20de%20vous%20envoyer%20un%20message%20via%20le%20site." class="wa-btn">
                  Nous contacter sur WhatsApp
                </a>
              </div>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} DÉBLOQUÉ BTP — Abdoulaye KEITA · Bamako, Mali</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ message: 'Erreur lors de l\'envoi. Veuillez réessayer.' })
  }
}
