import { Email } from './TableEmail'
export interface EmailModalProps {
  modalInfo: Email | undefined
  onSetCloseModal: () => void
}
