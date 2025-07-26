import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

const invoices = [
  {
    email: 'Jonasburgue@email.com',
    Status: 'Online',
    totalAmount: '250'
  },
  {
    email: 'Peterson55@email.com',
    Status: 'Offline',
    totalAmount: '150'
  },
  {
    email: 'Flavinhoo7@email.com',
    Status: 'Online',
    totalAmount: '350'
  },
  {
    email: 'Lurdesmaria1@email.com',
    Status: 'Offline',
    totalAmount: '450'
  },
  {
    email: 'Caioromas@email.com',
    Status: 'Online',
    totalAmount: '550'
  },
  {
    email: 'Renatomoss@email.com',
    Status: 'Online',
    totalAmount: '200'
  },
  {
    email: 'Karinybella3@email.com',
    Status: 'Online',
    totalAmount: '300'
  }
];

export function TableUser() {
  return (
    <ScrollArea>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead className="max-md:hidden">Status</TableHead>
            <TableHead className="text-right">Req</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.email}>
              <TableCell className="font-medium cursor-pointer">
                <div className='flex items-center gap-2'>     
                  <span
                    className={`h-2 w-2 md:hidden rounded-full ${
                      invoice.Status === 'Online'
                        ? 'bg-green-600'
                        : 'bg-red-600'
                    }`}
                  ></span>
                  <span> {invoice.email} </span>
             
                </div>
              </TableCell>

              <TableCell className="max-md:hidden">
                <div className="flex items-center max-md:justify-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      invoice.Status === 'Online'
                        ? 'bg-green-600'
                        : 'bg-red-600'
                    }`}
                  ></span>
                  <span className="max-md:hidden">{invoice.Status}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
