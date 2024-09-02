"use client"

import { Smartphone } from "lucide-react"
import { Button } from "./ui/button"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handlePhoneCopyClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
  }

  return (
    <div className="flex justify-between" key={phone}>
      {/* ESQUERDA */}
      <div className="flex items-center gap-2">
        <Smartphone />
        <p className="text-sm">{phone}</p>
      </div>
      {/* DIREITA */}
      <Button
        variant={"outline"}
        size={"sm"}
        onClick={() => {
          handlePhoneCopyClick(phone)
        }}
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
