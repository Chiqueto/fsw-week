import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import Image from "next/image"
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import Link from "next/link"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
        <SheetDescription>
          <div className="flex items-center justify-between gap-3 border-b border-solid py-5 text-left">
            <h2 className="font-bold">Olá, faça seu login!</h2>

            <Dialog>
              <DialogTrigger asChild>
                <Button size={"icon"}>
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%]">
                <DialogHeader>
                  <DialogTitle>Faça seu login na plataforma</DialogTitle>
                  <DialogDescription>
                    Conecte-se usando sua conta do Google
                  </DialogDescription>
                </DialogHeader>
                <Button variant={"outline"} className="gap-1 font-bold">
                  <Image
                    src={"google.svg"}
                    width={18}
                    height={18}
                    alt="fazer login com o Google"
                  ></Image>{" "}
                  Google
                </Button>
              </DialogContent>
            </Dialog>
            {/* <Avatar>
              <AvatarImage src="https://media.licdn.com/dms/image/v2/D5603AQEhKwLb1ZUqjA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671235367473?e=1730937600&v=beta&t=8K0ueM1lE6eJgiNPHG_4Zp0Qm8vhZAH5yjAFznGh3F0" />
            </Avatar>

            <div>
              <p className="font-bold">Luís Felipe</p>
              <p className="text-xs">lfchiqueto@gmail.com</p>
            </div> */}
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
