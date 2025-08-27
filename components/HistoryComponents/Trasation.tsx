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
    totalAmount: 'R$:250.00'
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Resgatado',
    totalAmount: 'R$:150.00'
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Vendido',
    totalAmount: 'R$:350.00'
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Resgatado',
    totalAmount: 'R$:450.00'
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Resgatado',
    totalAmount: 'R$:550.00'
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Resgatado',
    totalAmount: 'R$:200.00'
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Vendido',
    totalAmount: 'R$:300.00'
  }
];

export function Transition() {
  return (
    <Table className="pt-4">
      <TableHeader>
        <TableRow className="bg-btn hover:bg-btn/90 text-text dark:text-text">
          <TableHead className=" text-text">Seu Id</TableHead>
          <TableHead className="text-text">Status</TableHead>
          <TableHead className="text-text">Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-subbackground hover:bg-subbackground dark:focus:bg-subbackground focus:bg-subbackground text-text">
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
