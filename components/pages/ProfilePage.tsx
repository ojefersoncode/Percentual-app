'use client';
import { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Navbar } from '../HomeComponents/NavBar';
import { Input } from "@/components/ui/input"
import { User } from '@supabase/supabase-js';
import { Pencil } from 'lucide-react';
import { Footer } from '../landing/Footer';
import { Bell, Upload } from 'lucide-react';
import Image from 'next/image';

export default function ProfilePage({ user }: { user: User }) {
  const [name, setName] = useState('Jeferson code');
  const [phone, setPhone] = useState('+55 31 91234-5678');
  const [email, setEmail] = useState('ojefersoncode@email.com');
  const [id, setId] = useState('123456');

  const handleEdit = (field: string, value: string) => {
    if (field === 'name') setName(value);
    if (field === 'phone') setPhone(value);
  };

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

      <main className="flex justify-center px-4 py-8">
        <div className="w-full max-w-3xl space-y-6">
          <Card className="border rounded-md shadow-sm bg-white dark:bg-background border border-gray-500 dark:border-border">
            <CardHeader className="flex flex-col items-center my-4 gap-4">
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

            <CardContent className="space-y-6">
              {/* Name */}
              <div className="flex justify-between items-center">
                <Label htmlFor="name" className="text-sm font-medium">
                  Nome:
                </Label>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{name}</span>
                  <Button
                    variant="outline"
                    className="text-black dark:text-text bg-white dark:bg-subbackground hover:bg-white dark:hover:bg-background"
                    size="sm"
                    onClick={() =>
                      handleEdit('name', prompt('Enter new name:', name) || name)
                    }
                  >
                    <Pencil className="size-4" />
                  </Button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex justify-between items-center">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Telefone:
                </Label>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{phone}</span>
                  <Button
                    variant="outline"
                    className="text-black dark:text-text bg-white dark:bg-subbackground hover:bg-white dark:hover:bg-background"
                    size="sm"
                    onClick={() =>
                      handleEdit('phone', prompt('Enter new phone number:', phone) || phone)
                    }
                  >
                    <Pencil className="size-4" />
                  </Button>
                </div>
              </div>

              {/* Email */}
              <div className="flex justify-between items-center">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email:
                </Label>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{email}</span>
              </div>

              {/* ID */}
              <div className="flex justify-between items-center">
                <Label htmlFor="id" className="text-sm font-medium">
                  ID:
                </Label>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{id}</span>
              </div>
            </CardContent>

            <CardFooter>
              <div className="flex w-full items-center justify-between"
                >
              <Button
                variant="ghost"
                className="text-black dark:text-text bg-red-600 dark:bg-red-600 hover:bg-red-600/80 dark:hover:bg-red-600/80"
              >
                Cancelar
              </Button>
              <Button
                variant="outline"
                className="text-black dark:text-text border border-gray-500 dark:border-border bg-white dark:bg-subbackground hover:bg-white dark:hover:bg-background"
              >
                Salvar Alterações
              </Button>
                </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
 }
