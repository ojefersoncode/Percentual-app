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
    invoice: 'INV001',
    paymentStatus: 'Pendente',
    totalAmount: 'R$:250.00',
    paymentMethod: 'Pix'
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pago',
    totalAmount: 'R$:150.00',
    paymentMethod: 'Pix'
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Cancelado',
    totalAmount: 'R$:350.00',
    paymentMethod: 'Pix'
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Pago',
    totalAmount: 'R$:450.00',
    paymentMethod: 'Pix'
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Pago',
    totalAmount: 'R$:550.00',
    paymentMethod: 'Pix'
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pago',
    totalAmount: 'R$:200.00',
    paymentMethod: 'Pix'
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Cancelado',
    totalAmount: 'R$:300.00',
    paymentMethod: 'Pix'
  }
];

export function BalanceHistory() {
  return (
    <Table className="pt-4">
      <TableHeader>
        <TableRow className="bg-btn hover:bg-btn/90 text-text">
          <TableHead className="w-[100px] text-text">Seu Id</TableHead>
          <TableHead className="text-text">Status</TableHead>
          <TableHead className="text-text">Metodo</TableHead>
          <TableHead className="text-right text-text">Saldo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-subbackground hover:bg-subbackground dark:focus:bg-subbackground focus:bg-subbackground text-text">
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
