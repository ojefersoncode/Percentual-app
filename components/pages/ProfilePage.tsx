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
  const [name, setName] = useState('Cooderfy');
  const [phone, setPhone] = useState('+55 31 91234-5678');
  const [email, setEmail] = useState('ojefersoncode@email.com');
  const [bio, setBio] = useState('Programador Fullstack');
  const [id] = useState('123456');

  return (
    <div className="flex flex-col w-full max-md:h-dvh min-h-screen bg-white dark:bg-background">
      {/* Navbar */}
      <nav className="flex w-full justify-between py-1 px-4 border-b bg-white dark:bg-background">
        <div className="flex gap-1 text-base items-center select-none">
          <img className="size-5" src="/LogoC.png" alt="logo" />
          <h1 className="text-black dark:text-text font-medium">Cooderfy</h1>
        </div>
        <div className="flex items-center gap-3">
          <Bell className="size-4" />
          <Navbar />
        </div>
      </nav>

      {/* Main */}
      <main className="flex justify-center px-4 py-8">
        <div className="w-full max-w-3xl space-y-6">
          <Card className="border rounded-md shadow-sm bg-white dark:bg-background border border-gray-500 dark:border-border">
            <CardHeader className="flex w-full items-center gap-4 my-4">
              <Image
                height={80}
                width={80}
                src="/User.jpeg"
                className="rounded-full border"
                alt="User"
              />
              <label className="cursor-pointer flex flex-col items-center justify-center w-full h-12 border-2 rounded-lg bg-gray-100 dark:bg-subbackground transition px-1">
                <input
                  type="file"
                  accept="image/png, image/svg+xml, image/webp, image/jpeg"
                  className="hidden"
                />
                <div className="flex flex-col w-full items-center justify-center bg-white dark:bg-subbackground">
                  <Upload className="w-5 h-5 text-black dark:text-gray-400" />
                </div>
              </label>
            </CardHeader>

            <CardContent className="space-y-4">

              {/* Name */}
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Bio */}
              <div className="space-y-1">
                <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm text-black dark:text-white dark:bg-subbackground"
                  />
              </div>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button
                variant="ghost"
                className="text-white bg-red-600 hover:bg-red-700"
              >
                Cancelar
              </Button>
              <Button
                variant="outline"
                className="text-black dark:text-white border border-gray-500 dark:border-border bg-white dark:bg-subbackground hover:bg-white dark:hover:bg-background"
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
