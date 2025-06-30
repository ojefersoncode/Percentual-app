'use client';
import { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Navbar } from '../HomeComponents/NavBar';
import { Input } from "@/components/ui/input";
import { User } from '@supabase/supabase-js';
import { Footer } from '../landing/Footer';
import { Bell, Upload } from 'lucide-react';
import Image from 'next/image';

export default function ProfilePage({ user }: { user: User }) {
  const [name, setName] = useState('Jeferson');
  const [phone, setPhone] = useState('+55 31 91234-5678');
  const [email, setEmail] = useState('ojefersoncode@email.com');
  const [bio, setBio] = useState('Programador Fullstack');
  const [id] = useState('123456');

  return (
    <div className="flex flex-col w-full h-screen bg-white dark:bg-background touch-pan-x touch-pan-y">
      {/* Navbar */}
      <nav className="flex w-full justify-between py-1 px-4 border-b border-zinc-300 dark:border-border bg-white dark:bg-background">
        <div className="flex items-center select-none">
          <img className="size-8" src="/LogoC.png" alt="logo" />
        </div>
        <div className="flex items-center gap-3">
          <Bell className="size-4" />
          <Navbar />
        </div>
      </nav>

      {/* Main */}
      <main className="flex justify-center p-4">
        <div className="w-full max-w-3xl space-y-6">
          <Card className="border rounded-md shadow-sm bg-white dark:bg-background border border-zinc-300 dark:border-border">
            <CardHeader className="flex w-full items-center gap-4 mt-4">
              <div className="flex w-full items-center justify-between">
              <Image
                height={80}
                width={80}
                src="/User.jpeg"
                className="rounded-full border-2 border-zinc-600 dark:border-border"
                alt="User"
              />
              <label className="cursor-pointer flex flex-col items-center justify-center px-12 py-2 border-2 border-zinc-300 dark:border-border rounded-lg bg-white dark:bg-subbackground transition">
                <input
                  type="file"
                  accept="image/png, image/svg+xml, image/webp, image/jpeg"
                  className="hidden"
                />
                <div className="flex items-center justify-center bg-white dark:bg-subbackground gap-2">
                  <Upload className="size-4 text-black dark:text-zinc-500" />
                  <span className="text-xs text-black dark:text-zinc-500">Atualizar imagem</span>
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
                  className="text-black dark:text-text border border-zinc-300 dark:border-border bg-white dark:bg-subbackground hover:bg-white dark:hover:subbg-background"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-black dark:text-text border border-zinc-300 dark:border-border bg-white dark:bg-subbackground hover:bg-white dark:hover:bg-background"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-black dark:text-text border border-zinc-300 dark:border-border bg-white dark:bg-subbackground hover:bg-white dark:hover:bg-background"
                />
              </div>

              {/* Bio */}
              <div className="space-y-1">
                <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full min-h-[80px] rounded-md resize-none border border-zinc-300 dark:border-border px-3 py-2 text-sm text-black dark:text-text bg-white dark:bg-subbackground"
                  />
              </div>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button
                variant="ghost"
                className="text-white bg-red-600 hover:bg-red-700 dark:hover:bg-red-700"
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
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
