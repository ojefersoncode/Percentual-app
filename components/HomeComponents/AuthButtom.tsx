import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { User } from 'lucide-react';

export function AuthButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="max-md:p-4 p-6 text-slate-50 bg-blue-400 hover:bg-blue-400/90"
        >
          <div className="flex items-center gap-2">
            <User className="size-6 max-md:size-4" />
            <span className="text-sm max-md:text-xs font-sans">
              Conectar-se
            </span>
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-blue-950 border border-blue-600">
        <VisuallyHidden>
          <DialogTitle>Autenticação</DialogTitle>
        </VisuallyHidden>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="bg-blue-900 border-none text-blue-400">
            <TabsTrigger value="login" className="text-blue-500">
              Entrar
            </TabsTrigger>
            <TabsTrigger value="register" className="text-blue-500">
              Cadastrar-se
            </TabsTrigger>
          </TabsList>

          {/* Formulário de Login */}
          <TabsContent value="login">
            <Card className="bg-transparent border-none text-white">
              <CardHeader>
                <CardTitle className="text-lg font-black">
                  Entrar na Conta
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    className="border border-blue-600"
                    id="login-email"
                    type="email"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="login-password">Senha</Label>
                  <Input
                    className="border border-blue-600"
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-500 hover:bg-blue-500/90">
                  Entrar
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Formulário de Registro */}
          <TabsContent value="register">
            <Card className="bg-transparent border-none text-white">
              <CardHeader>
                <CardTitle className="text-lg font-black">
                  Criar Conta
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="register-name">Nome</Label>
                  <Input
                    className="border border-blue-600"
                    id="register-name"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input
                    className="border border-blue-600"
                    id="register-email"
                    type="email"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="register-password">Senha</Label>
                  <Input
                    className="border border-blue-600"
                    id="register-password"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-500 hover:bg-blue-500/90">
                  Registrar
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
