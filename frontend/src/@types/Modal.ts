export interface ModalProps {
  title: string
  description: string
  color: string
  onClickClose: React.MouseEventHandler<HTMLButtonElement>
}

export interface ToastProps {
  title: string
  description: string
  color: string
  handleSvgError: boolean
  onClickClose: React.MouseEventHandler<HTMLButtonElement>
  toReset: boolean
}
