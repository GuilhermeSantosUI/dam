import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/views/components/ui/sheet";

export function TaxesDetails() {
  return (
    <>
      <Sheet>
        <SheetTrigger>Detalhes</SheetTrigger>
        <SheetContent className="min-w-[500px] overflow-y-auto z-[999999999] rounded-xl">
          <SheetHeader className="animate-slidein300 opacity-0 mb-4">
            <SheetDescription>
              TICF - Taxa de Inspeção, Controle e Fiscalização (1.50%)
            </SheetDescription>
            <SheetTitle>
              51890698000107 - RF Produtos Hospitalares e Odontologicos LTDA
            </SheetTitle>
          </SheetHeader>

          <TableDemo />

          <div className="animate-slidein700 opacity-0 mt-4 p-4 border border-gray-300 rounded-md bg-gray-50">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="font-medium">Subtotal:</div>
              <div className="text-right">R$ 4.350,00</div>
              <div className="font-medium">Total:</div>
              <div className="text-right">R$ 65,25</div>
              <div className="font-medium">Taxa Expediente:</div>
              <div className="text-right">R$ 0,00</div>
              <div className="font-medium">Taxa Adicional:</div>
              <div className="text-right">R$ 0,00</div>
              <div className="font-medium">Entrada:</div>
              <div className="text-right">R$ 0,00</div>
              <div className="font-medium">Desconto:</div>
              <div className="text-right">R$ 0,00</div>
              <div className="font-medium">Correção Monetária:</div>
              <div className="text-right">R$ 0,00</div>
              <div className="font-medium">Juros:</div>
              <div className="text-right">R$ 4,81</div>
              <div className="font-medium">Multa:</div>
              <div className="text-right">R$ 6,53</div>
            </div>
          </div>

          <div className="animate-slidein500 opacity-0 mt-4">
            <div className="flex items-center justify-between mb-2">
              <span>Método de pagamento</span>
              <a href="#" className="font-light text-sm underline">
                Editar
              </a>
            </div>

            <div
              role="radiogroup"
              aria-required="false"
              dir="ltr"
              className="grid grid-cols-3 gap-4"
              style={{ outline: "none" }}
            >
              <div>
                <button
                  type="button"
                  role="radio"
                  aria-checked="false"
                  data-state="unchecked"
                  value="card"
                  className="aspect-square h-4 w-4 rounded-full cursor-pointer border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only"
                  id="card"
                  aria-label="Card"
                  data-radix-collection-item=""
                ></button>
                <label
                  className="cursor-pointer text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col justify-between rounded-xl gap-2 border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&amp;:has([data-state=checked])]:border-primary"
                  htmlFor="card"
                >
                  <File className="h-4 w-4" />
                  Cartão de Crédito
                </label>
              </div>
              <div>
                <button
                  type="button"
                  role="radio"
                  aria-checked="false"
                  data-state="unchecked"
                  value="paypal"
                  className="aspect-square h-4 w-4 rounded-full cursor-pointer border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only"
                  id="paypal"
                  aria-label="Paypal"
                  data-radix-collection-item=""
                ></button>
                <label
                  className="cursor-pointer text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col justify-between rounded-xl gap-2 border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&amp;:has([data-state=checked])]:border-primary"
                  htmlFor="paypal"
                >
                  <File className="h-4 w-4" />
                  Gerar QRCode ou código PIX
                </label>
              </div>
              <div>
                <button
                  type="button"
                  role="radio"
                  aria-checked="true"
                  data-state="checked"
                  value="apple"
                  className="aspect-square h-4 w-4 rounded-full cursor-pointer border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 peer sr-only"
                  id="apple"
                  aria-label="Apple"
                  data-radix-collection-item=""
                >
                  <span
                    data-state="checked"
                    className="flex items-center justify-center"
                  ></span>
                </button>
                <label
                  className="cursor-pointer text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col justify-between rounded-xl gap-2 border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&amp;:has([data-state=checked])]:border-primary"
                  htmlFor="apple"
                >
                  <File className="h-4 w-4" />
                  Gerar/Imprimir Boleto
                </label>
              </div>
            </div>
          </div>

          <div className="animate-slidein500 opacity-0 mt-4 items-top flex space-x-2">
            <Checkbox id="terms1" checked />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Enviar cópia do boleto por e-mail
              </label>
              <p className="text-xs font-light text-muted-foreground">
                Ao selecionar esta opção, você concorda com os{" "}
                <a href="#" className="underline">
                  Termos de Serviço
                </a>{" "}
                e a{" "}
                <a href="#" className="underline">
                  Política de Privacidade
                </a>
                .
              </p>
            </div>
          </div>

          <SheetFooter className="mt-4">
            <Button variant="ghost">Cancelar</Button>
            <Button>Pagar</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/views/components/ui/table";
import { Button } from "./views/components/ui/button";
import { CreditCard, File, Star } from "lucide-react";
import { Checkbox } from "./views/components/ui/checkbox";

const invoices = [
  {
    invoice: "22/05/2024",
    paymentStatus: "31/05/2024",
    totalAmount: "4.350,00",
    paymentMethod: "65,25",
    active: true,
  },
  {
    invoice: "23/05/2024",
    paymentStatus: "01/06/2024",
    totalAmount: "5.200,00",
    paymentMethod: "75,50",
    active: false,
  },
  {
    invoice: "24/05/2024",
    paymentStatus: "02/06/2024",
    totalAmount: "3.400,00",
    paymentMethod: "50,00",
    active: false,
  },
  {
    invoice: "25/05/2024",
    paymentStatus: "03/06/2024",
    totalAmount: "6.800,00",
    paymentMethod: "90,75",
    active: false,
  },
  {
    invoice: "26/05/2024",
    paymentStatus: "04/06/2024",
    totalAmount: "7.150,00",
    paymentMethod: "95,25",
    active: false,
  },
  {
    invoice: "27/05/2024",
    paymentStatus: "05/06/2024",
    totalAmount: "2.900,00",
    paymentMethod: "35,00",
    active: false,
  },
];

export function TableDemo() {
  return (
    <Table className="animate-slidein500 opacity-0 ">
      <TableHeader className="">
        <TableRow>
          <TableHead className="w-[100px]">Emissão</TableHead>
          <TableHead>Vencimento</TableHead>
          <TableHead className="text-center">Valor Corrigido</TableHead>
          <TableHead className="text-end">Subtotal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <TableRow key={index} className={!invoice.active ? "opacity-50" : ""}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell className="text-center">
              {invoice.paymentMethod}
            </TableCell>
            <TableCell className="text-end">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
