'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from "@/components/ui/input";
import { Bell, Upload } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';

export default function Profilecard () {
    const [name, setName] = useState('Jeferson');
  const [phone, setPhone] = useState('+55 31 91234-5678');
  const [email, setEmail] = useState('ojefersoncode@email.com');
  const [bio, setBio] = useState('Programador Fullstack');
  const [id] = useState('123456');
    
    return ( 
        
    <div className="flex flex-col bg-white dark:bg-background p-4">
       <div className="rounded-lg bg-white dark:bg-subbackground border border-zinc-300 dark:border-border">
            <CardHeader className="flex w-full items-center">
              <div className="flex w-full items-center justify-center">
              <Image
                height={80}
                width={80}
                src="/Mash.jpeg"
                className="rounded-full border-2 border-btn dark:border-btn opacity-95"
                alt="User"
              />
              <label className="cursor-pointer flex flex-col items-center justify-center  />
absolute mt-4 w-13 py-1 rounded-b-full transition bg-transparent">
                <input
                  type="file"
                  accept="image/png, image/svg+xml, image/webp, image/jpeg"
                  className="hidden"
                />
                <div className="flex items-center justify-center">
                  <Upload className="size-6 text-btn shadow-md bg-tra" />
                </div>
              </label>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">

              {/* Name */}
              <div className="space-y-1">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-black dark:text-text border border-zinc-300 dark:border-border bg-white dark:bg-background hover:bg-white dark:hover:subbg-background"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-black dark:text-text border border-zinc-300 dark:border-border bg-white dark:bg-background hover:bg-white dark:hover:bg-background"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-black dark:text-text border border-zinc-300 dark:border-border bg-white dark:bg-background hover:bg-white dark:hover:bg-background"
                />
              </div>

            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <Button
                variant="ghost"
                className="text-background dark:hover:text-background bg-slate-100 hover:bg-slate-200 dark:hover:bg-slate-200"
              >
                Cancelar
              </Button>
              <Button
                variant="ghost"
                className="text-text dark:text-text bg-btn dark:bg-btn hover:bg-btn/80 dark:hover:bg-btn/80"
              >
                Salvar Alterações
              </Button>
            </CardFooter>
          </div>
            </div>
        )
}