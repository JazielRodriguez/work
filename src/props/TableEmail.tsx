export interface Email {
  subject: string
  sender: string
  email: string
}

export interface TableEmailProps {
  headers: string[]
  emails: Email[]
}
