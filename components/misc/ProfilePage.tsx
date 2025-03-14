'use client';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Label } from '../../components/ui/label';
import { Navbar } from '../HomeComponents/NavBar';
import { User } from '@supabase/supabase-js';
import { Pencil } from 'lucide-react';
import { Footer } from '../landing/Footer';

export default function ProfilePage({ user }: { user: User }) {
  const [name, setName] = useState('Jeferson code');
  const [phone, setPhone] = useState('+55 31 91234-5678');
  const [email, setEmail] = useState('ojefersoncode@email.com');
  const [id, setId] = useState('123456');

  // Função para editar os dados
  const handleEdit = (field: string, value: string) => {
    if (field === 'name') setName(value);
    if (field === 'phone') setPhone(value);
  };

  return (
    <div className="flex flex-col w-full mx-auto bg-gray-100 dark:bg-black dark:bg-muted/40 min-h-screen">
      {/* Navbar */}
      <nav className="flex w-full justify-between py-4 px-4 md:px-8 bg-black">
        <div className="flex gap-2 text-xl font-bold items-center select-none">
          <img className="h-8 w-8" src="/Leptrum.png" alt="logo" />
          <div className="flex">
            <h1 className="text-slate-50">Codersaas</h1>
          </div>
        </div>
        <Navbar />
      </nav>

      {/* Card Container */}
      <div className="flex justify-center my-10">
        <Card className="w-full max-w-4xl p-6 md:p-8 bg-white dark:bg-black shadow-lg rounded-lg">
          <CardHeader>
            <h2 className="text-xl font-medium">Meu perfil</h2>
          </CardHeader>

          <CardContent>
            {/* Name */}
            <div className="flex justify-between items-center space-x-4 mb-4">
              <Label htmlFor="name" className="text-lg">
                Nome:
              </Label>
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 dark:text-gray-300">{name}</span>
                <Button
                variant={'outline'}
                  onClick={() =>
                    handleEdit('name', prompt('Enter new name:', name) || name)
                  }
                  className="text-sm"
                >
                  <Pencil className="size-4" />
                </Button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex justify-between items-center space-x-4 mb-4">
              <Label htmlFor="phone" className="text-lg">
                Telefone:
              </Label>
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 dark:text-gray-300">
                  {phone}
                </span>
                <Button
                variant={'outline'}
                  onClick={() =>
                    handleEdit(
                      'phone',
                      prompt('Enter new phone number:', phone) || phone
                    )
                  }
                  className="text-sm"
                >
                  <Pencil className="size-4" />
                </Button>
              </div>
            </div>

            {/* Email */}
            <div className="flex justify-between items-center space-x-4 mb-4">
              <Label htmlFor="email" className="text-lg">
                Email:
              </Label>
              <span className="text-gray-600 dark:text-gray-300">{email}</span>
            </div>

            {/* ID */}
            <div className="flex justify-between items-center space-x-4 mb-4">
              <Label htmlFor="id" className="text-lg">
                ID:
              </Label>
              <span className="text-gray-600 dark:text-gray-300">{id}</span>
            </div>
          </CardContent>

          <CardFooter>
            <Button variant="outline" className="w-full md:w-auto mt-4">
              Savar Alterações
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}
