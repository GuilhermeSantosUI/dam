import { columns } from "./columns";
import { DataTable } from "./views/components/data-table";
import { Button } from "./views/components/ui/button";

import { useState } from "react";

import {
  SortingState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Filter } from "lucide-react";
import { Input } from "./views/components/ui/input";

const menuOptions = [
  { label: "Início", path: "/transparencia" },
  { label: "O Município", path: "/municipio" },
  { label: "Licitações", path: "/" },
  { label: "Legislação", path: "/" },
  { label: "eSIC", path: "/" },
  { label: "LGPD", path: "/lgpd" },
  { label: "Estrutura Organizacional", path: "/" },
];

const data = [
  {
    id: 1,
    category: "51890698000107 - RF Produtos Hospitalares e Odontológicos LTDA",
    date: new Date().toISOString().split("T")[0],
    tributo: "IPTU",
    emissao: new Date().toISOString().split("T")[0],
    vencimento: new Date().toISOString().split("T")[0],
    subtotal: (Math.random() * 1000).toFixed(2),
    exerc: "2023",
    total: (Math.random() * 1000).toFixed(2),
    desconto: (Math.random() * 100).toFixed(2),
    juros: (Math.random() * 50).toFixed(2),
    multa: (Math.random() * 50).toFixed(2),
    status: "Pago",
    taxaExp: (Math.random() * 20).toFixed(2),
    taxaAdicional: (Math.random() * 20).toFixed(2),
    valorCorrigido: (Math.random() * 1000).toFixed(2),
  },
  {
    id: 2,
    category: "12345678000100 - ABC Comércio de Alimentos LTDA",
    date: new Date().toISOString().split("T")[0],
    tributo: "ISS",
    emissao: new Date().toISOString().split("T")[0],
    vencimento: new Date().toISOString().split("T")[0],
    subtotal: (Math.random() * 2000).toFixed(2),
    exerc: "2023",
    total: (Math.random() * 2000).toFixed(2),
    desconto: (Math.random() * 200).toFixed(2),
    juros: (Math.random() * 100).toFixed(2),
    multa: (Math.random() * 100).toFixed(2),
    status: "Em Aberto",
    taxaExp: (Math.random() * 30).toFixed(2),
    taxaAdicional: (Math.random() * 30).toFixed(2),
    valorCorrigido: (Math.random() * 2000).toFixed(2),
  },
  {
    id: 3,
    category: "98765432000199 - XYZ Serviços de Limpeza LTDA",
    date: new Date().toISOString().split("T")[0],
    tributo: "IPTU",
    emissao: new Date().toISOString().split("T")[0],
    vencimento: new Date().toISOString().split("T")[0],
    subtotal: (Math.random() * 1500).toFixed(2),
    exerc: "2023",
    total: (Math.random() * 1500).toFixed(2),
    desconto: (Math.random() * 150).toFixed(2),
    juros: (Math.random() * 75).toFixed(2),
    multa: (Math.random() * 75).toFixed(2),
    status: "Pago",
    taxaExp: (Math.random() * 25).toFixed(2),
    taxaAdicional: (Math.random() * 25).toFixed(2),
    valorCorrigido: (Math.random() * 1500).toFixed(2),
  },
  {
    id: 4,
    category: "11223344000155 - DEF Consultoria Empresarial LTDA",
    date: new Date().toISOString().split("T")[0],
    tributo: "ISS",
    emissao: new Date().toISOString().split("T")[0],
    vencimento: new Date().toISOString().split("T")[0],
    subtotal: (Math.random() * 2500).toFixed(2),
    exerc: "2023",
    total: (Math.random() * 2500).toFixed(2),
    desconto: (Math.random() * 250).toFixed(2),
    juros: (Math.random() * 125).toFixed(2),
    multa: (Math.random() * 125).toFixed(2),
    status: "Em Aberto",
    taxaExp: (Math.random() * 35).toFixed(2),
    taxaAdicional: (Math.random() * 35).toFixed(2),
    valorCorrigido: (Math.random() * 2500).toFixed(2),
  },
  {
    id: 5,
    category: "55667788000122 - GHI Transporte e Logística LTDA",
    date: new Date().toISOString().split("T")[0],
    tributo: "IPTU",
    emissao: new Date().toISOString().split("T")[0],
    vencimento: new Date().toISOString().split("T")[0],
    subtotal: (Math.random() * 3000).toFixed(2),
    exerc: "2023",
    total: (Math.random() * 3000).toFixed(2),
    desconto: (Math.random() * 300).toFixed(2),
    juros: (Math.random() * 150).toFixed(2),
    multa: (Math.random() * 150).toFixed(2),
    status: "Pago",
    taxaExp: (Math.random() * 40).toFixed(2),
    taxaAdicional: (Math.random() * 40).toFixed(2),
    valorCorrigido: (Math.random() * 3000).toFixed(2),
  },
  {
    id: 6,
    category: "99887766000133 - JKL Tecnologia da Informação LTDA",
    date: new Date().toISOString().split("T")[0],
    tributo: "ISS",
    emissao: new Date().toISOString().split("T")[0],
    vencimento: new Date().toISOString().split("T")[0],
    subtotal: (Math.random() * 3500).toFixed(2),
    exerc: "2023",
    total: (Math.random() * 3500).toFixed(2),
    desconto: (Math.random() * 350).toFixed(2),
    juros: (Math.random() * 175).toFixed(2),
    multa: (Math.random() * 175).toFixed(2),
    status: "Em Aberto",
    taxaExp: (Math.random() * 45).toFixed(2),
    taxaAdicional: (Math.random() * 45).toFixed(2),
    valorCorrigido: (Math.random() * 3500).toFixed(2),
  },
  {
    id: 7,
    category: "33445566000144 - MNO Construções LTDA",
    date: new Date().toISOString().split("T")[0],
    tributo: "IPTU",
    emissao: new Date().toISOString().split("T")[0],
    vencimento: new Date().toISOString().split("T")[0],
    subtotal: (Math.random() * 4000).toFixed(2),
    exerc: "2023",
    total: (Math.random() * 4000).toFixed(2),
    desconto: (Math.random() * 400).toFixed(2),
    juros: (Math.random() * 200).toFixed(2),
    multa: (Math.random() * 200).toFixed(2),
    status: "Pago",
    taxaExp: (Math.random() * 50).toFixed(2),
    taxaAdicional: (Math.random() * 50).toFixed(2),
    valorCorrigido: (Math.random() * 4000).toFixed(2),
  },
  {
    id: 8,
    category: "77665544000111 - PQR Comércio de Eletrônicos LTDA",
    date: new Date().toISOString().split("T")[0],
    tributo: "ISS",
    emissao: new Date().toISOString().split("T")[0],
    vencimento: new Date().toISOString().split("T")[0],
    subtotal: (Math.random() * 4500).toFixed(2),
    exerc: "2023",
    total: (Math.random() * 4500).toFixed(2),
    desconto: (Math.random() * 450).toFixed(2),
    juros: (Math.random() * 225).toFixed(2),
    multa: (Math.random() * 225).toFixed(2),
    status: "Em Aberto",
    taxaExp: (Math.random() * 55).toFixed(2),
    taxaAdicional: (Math.random() * 55).toFixed(2),
    valorCorrigido: (Math.random() * 4500).toFixed(2),
  },
  {
    id: 9,
    category: "22334455000166 - STU Serviços de Manutenção LTDA",
    date: new Date().toISOString().split("T")[0],
    tributo: "IPTU",
    emissao: new Date().toISOString().split("T")[0],
    vencimento: new Date().toISOString().split("T")[0],
    subtotal: (Math.random() * 5000).toFixed(2),
    exerc: "2023",
    total: (Math.random() * 5000).toFixed(2),
    desconto: (Math.random() * 500).toFixed(2),
    juros: (Math.random() * 250).toFixed(2),
    multa: (Math.random() * 250).toFixed(2),
    status: "Pago",
    taxaExp: (Math.random() * 60).toFixed(2),
    taxaAdicional: (Math.random() * 60).toFixed(2),
    valorCorrigido: (Math.random() * 5000).toFixed(2),
  },
  {
    id: 10,
    category: "66554433000177 - VWX Comércio de Roupas LTDA",
    date: new Date().toISOString().split("T")[0],
    tributo: "ISS",
    emissao: new Date().toISOString().split("T")[0],
    vencimento: new Date().toISOString().split("T")[0],
    subtotal: (Math.random() * 5500).toFixed(2),
    exerc: "2023",
    total: (Math.random() * 5500).toFixed(2),
    desconto: (Math.random() * 550).toFixed(2),
    juros: (Math.random() * 275).toFixed(2),
    multa: (Math.random() * 275).toFixed(2),
    status: "Em Aberto",
    taxaExp: (Math.random() * 65).toFixed(2),
    taxaAdicional: (Math.random() * 65).toFixed(2),
    valorCorrigido: (Math.random() * 5500).toFixed(2),
  },
];

function App() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedRowModel: getFacetedRowModel(),
  });

  const [filter, setFilter] = useState(false);

  function toggleFilter() {
    setFilter((prev) => !prev);
  }

  return (
    <>
      <header className="h-32 w-full rounded-b-lg flex flex-col justify-center mb-2 px-4 sm:px-8 text-gray-200 md:bg-cover bg-agprimary dark:bg-gray-950 bg-[url('src/assets/img/header-bg.jpg')] dark:bg-[url('src/assets/img/header-bg-dark.jpg')]">
        <div className="flex gap-1.5 text-sm">
          Horário de atendimento: Seg. à Sex. das 8h às 14h
        </div>

        <div className="flex justify-between items-center gap-4 md:pt-0">
          <div className="hidden md:flex flex-wrap items-center gap-4 py-3">
            <img src="/image_gallery.png" alt="Logo" className="h-14 mr-4" />

            {menuOptions.map(({ label }, index) => (
              <Button key={index} variant="link" asChild>
                <a href="#">{label}</a>
              </Button>
            ))}
          </div>
        </div>
      </header>

      <div className="container flex flex-col justify-between">
        <header className="animate-slidein300 opacity-0 my-6 flex items-center justify-between lg:flex-row flex-col">
          <div className="lg:w-fit lg:mb-0 w-full mb-2">
            <h1 className="mt-2 text-2xl font-medium tracking-tight text-slate-900 dark:text-slate-100">
              Emissão de Segunda Via
            </h1>
            <p className="text-slate-600">Documento de Arrecadação Municipal</p>
          </div>

          <div className="flex items-center lg:w-fit w-full gap-2 mt-3 lg:mt-0">
            <Input
              placeholder="Pesquisar por tributo"
              className="lg:w-64 w-full"
            />

            <Button
              title="Filtros"
              size="icon"
              variant="outline"
              onClick={toggleFilter}
            >
              <Filter className="w-4 h-4 dark:text-white" />
            </Button>
          </div>
        </header>
        {filter && (
        <div className="animate-slidein300 opacity-0 grid md:grid-cols-6 gap-2.5 items-end mb-6 text-slate-900 dark:text-slate-100 text-sm">
          <div>
            <span>Modalidade</span>
            <Input placeholder="Nome da modalidade" />
          </div>
          <div>
            <span>Situação</span>
            <Input type="search" placeholder="Nome da situação" />
          </div>
          <div>
            <span>Data inicial</span>
            <Input type="date" />
          </div>
          <div>
            <span>Data final</span>
            <Input type="date" />
          </div>
          <div>
            <span>Vencedor</span>
            <Input type="search" placeholder="Nome da empresa" />
          </div>
          <Button className="mt-1.5 md:mt-0 md:ml-1.5 flex items-center gap-2">
            Filtrar
          </Button>
        </div>
        )}
        <DataTable columns={columns} table={table} />
      </div>
    </>
  );
}

export default App;
