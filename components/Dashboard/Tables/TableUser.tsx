import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Request</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.email}>
            <TableCell className="font-medium cursor-pointer">
              {invoice.email}
            </TableCell>
            <TableCell>
              <div className="flex items-center max-md:justify-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    invoice.Status === 'Online' ? 'bg-green-600' : 'bg-red-600'
                  }`}
                ></span>
                <span className='max-md:hidden'>{invoice.Status}</span>
              </div>
            </TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
