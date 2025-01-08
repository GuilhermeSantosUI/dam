"use client";

import { Button } from "@/views/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { TaxesDetails } from "./taxes-details";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "tributo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Ordenar por Tributo"
        >
          TRIBUTO
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-3">{row.getValue("tributo")}</div>;
    },
  },
  {
    accessorKey: "emissao",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Ordenar por Emissão"
        >
          EMISSÃO
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-3">{row.getValue("emissao")}</div>;
    },
  },
  {
    accessorKey: "vencimento",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Ordenar por Vencimento"
        >
          VENCIMENTO
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-3">{row.getValue("vencimento")}</div>;
    },
  },
  {
    accessorKey: "subtotal",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Ordenar por Subtotal"
        >
          SUBTOTAL
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-3">{row.getValue("subtotal")}</div>;
    },
  },
  {
    accessorKey: "total",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Ordenar por Total"
        >
          TOTAL
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-3">{row.getValue("total")}</div>;
    },
  },
  {
    accessorKey: "desconto",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Ordenar por Desconto"
        >
          DESCONTO
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-3">{row.getValue("desconto")}</div>;
    },
  },
  {
    accessorKey: "juros",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Ordenar por Juros"
        >
          JUROS
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-3">{row.getValue("juros")}</div>;
    },
  },
  {
    accessorKey: "multa",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Ordenar por Multa"
        >
          MULTA
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-3">{row.getValue("multa")}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Ordenar por Status"
        >
          STATUS
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-3">{row.getValue("status")}</div>;
    },
  },
  {
    accessorKey: "taxaExp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Ordenar por Taxa Exp."
        >
          TAXA EXP.
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-3">{row.getValue("taxaExp")}</div>;
    },
  },
  {
    accessorKey: "taxaAdicional",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Ordenar por Taxa Adicional"
        >
          TAXA ADICIONAL
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-3">{row.getValue("taxaAdicional")}</div>;
    },
  },
  {
    accessorKey: "valorCorrigido",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Ordenar por Valor Corrigido"
        >
          VALOR CORRIGIDO
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-3">{row.getValue("valorCorrigido")}</div>;
    },
  },
  {
    accessorKey: "opcoes",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          title="Ordenar por Valor Corrigido"
        >
          Opções
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: () => {
      return (
        <div className="px-3">
          <TaxesDetails />
        </div>
      );
    },
  },
];
