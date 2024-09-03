import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import Image from "next/image"
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import { Button } from "./ui/button"

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
        <SheetDescription>
          <div className="flex items-center gap-3 border-b border-solid py-5 text-left">
            <Avatar>
              <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQEhKwLb1ZUqjA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671235367473?e=1730937600&v=beta&t=8K0ueM1lE6eJgiNPHG_4Zp0Qm8vhZAH5yjAFznGh3F0" />
            </Avatar>

            <div>
              <p className="font-bold">Luís Felipe</p>
              <p className="text-xs">lfchiqueto@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-b border-solid py-5">
            <SheetClose asChild>
              <Button className="justify-start gap-2" variant={"ghost"} asChild>
                <Link href={"/"}>
                  <HomeIcon size={18} />
                  Início
                </Link>
              </Button>
            </SheetClose>
            <Button className="justify-start gap-2" variant={"ghost"}>
              <CalendarIcon size={18} /> Agendamentos
            </Button>
          </div>
          <div className="flex flex-col gap-2 border-b border-solid py-5">
            {quickSearchOptions.map((option) => (
              <Button
                key={option.title}
                className="justify-start gap-2"
                variant={"ghost"}
              >
                <Image
                  src={option.imageUrl}
                  alt={option.title}
                  height={18}
                  width={18}
                />
                {option.title}
              </Button>
            ))}
          </div>
          <div className="flex flex-col gap-2 py-5">
            <Button className="justify-start gap-2" variant={"ghost"}>
              <LogOutIcon size={18} />
              Sair da conta
            </Button>
          </div>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  )
}

export default SidebarSheet