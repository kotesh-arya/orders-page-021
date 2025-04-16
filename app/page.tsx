"use client"
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Filter,
  Download,
  ChevronDown,
  ArrowUpDown,
  X,
  Menu,
  XCircle, Ban
} from "lucide-react";
import Image from "next/image";

const trendingStocks = [
  { title: "SIGNORIA", value: 0.0 },
  { title: "NIFTY BANK", value: 52323.3 },
  { title: "NIFTY FIN SERVICE", value: 25255.75 },
  { title: "RELCHEMQ", value: 162.73 },
];

const pages = [
  { title: "MARKETWATCH" },
  { title: "EXCHANGE FILES" },
  { title: "PORTFOLIO", submenu: ["one", "two", "three"] },
  { title: "FUNDS", submenu: ["one", "two", "three"] },
];

const orders = [
  {
    time: "08:14:31",
    client: "AAA001",
    ticker: "RELIANCE",
    side: "Buy",
    product: "CNC",
    quantity: "50/100",
    price: "250.50",
  },
  {
    time: "08:14:31",
    client: "AAA003",
    ticker: "MRF",
    side: "Buy",
    product: "NRML",
    quantity: "10/20",
    price: "2,700.00",
  },
  {
    time: "08:14:31",
    client: "AAA002",
    ticker: "ASIANPAINT",
    side: "Buy",
    product: "NRML",
    quantity: "10/30",
    price: "1,500.60",
  },
  {
    time: "08:14:31",
    client: "AAA002",
    ticker: "TATAINVEST",
    side: "Sell",
    product: "INTRADAY",
    quantity: "10/10",
    price: "2,300.10",
  },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100 h-screen relative">
      {/* Overlay for Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
          <div className="flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <XCircle size={24} className="text-gray-600" />
            </button>
          </div>
          <div className="mt-4">
            {pages.map((item) => (
              <div key={item.title} className="py-2">
                <span className="font-semibold cursor-pointer">{item.title}</span>
                {item.submenu && (
                  <div className="mt-2">
                    {item.submenu.map((subItem, index) => (
                      <div
                        key={index}
                        className="py-1 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded"
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="mb-6 p-3 flex justify-between bg-white gap-75">
        <div className="flex w-2/3">
          <Image
            src="https://lofrev.net/wp-content/photos/2016/08/random_logo_1.png"
            alt="logo"
            width="50"
            height="50"
          />
          {trendingStocks.map((item) => (
            <div key={item.title} className="w-2/6 xl:flex xl:flex-col  xl:items-center hidden  ">
              <p>{item.title}</p>
              <p className="text-green-700">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="block lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <XCircle size={24} className="text-gray-600" />
            ) : (
              <Menu size={24} className="text-gray-600" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-2/3 flex justify-evenly items-center">
          {pages.map((item) => (
            <div key={item.title} className="relative group">
              <div className="flex items-center cursor-pointer text-sm font-semibold px-4 py-2">
                <span>{item.title}</span>
                {item.submenu && <ChevronDown size={16} className="ml-1" />}
              </div>
              {item.submenu && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 scale-95 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-200 ease-in-out z-50 pointer-events-none group-hover:pointer-events-auto">
                  {item.submenu.map((subItem, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded"
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="w-10 h-10 bg-gray-200 cursor-pointer rounded-3xl p-4 flex flex-col items-center justify-center">
            LK
          </div>
        </div>
      </div>

      {/* Open Orders Section */}
      <div className="flex justify-between gap-4 items-center m-4">
        <p className="font-bold text-xl">Open Orders</p>
        <Button
          variant="outline"
          className="flex items-center gap-1 bg-gray-200 cursor-pointer"
        >
          <Download size={20} /> Download
        </Button>
      </div>

      {/* Table Section */}
      <div className="p-6 rounded-xl shadow-lg bg-white mx-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4 ">
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative w-full sm:w-[130px]">
              <Input className="pr-10 pl-2 w-full" placeholder="AAA002" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-2 text-muted-foreground bg-gray-200"
              >
                👤
              </Button>
            </div>
            <Badge
              variant="secondary"
              className="flex items-center gap-1 p-2 rounded-2xl"
            >
              Lalit
              <X
                size={16}
                className="cursor-pointer hover:text-red-500 transition-colors"
              />
            </Badge>
            <Input
              placeholder="Search for a stock, future, option or index"
              className="w-full sm:w-[300px]"
            />
            <Badge
              variant="secondary"
              className="flex items-center gap-1 p-2 rounded-2xl"
            >
              RELIANCE
              <X
                size={16}
                className="cursor-pointer hover:text-red-500 transition-colors"
              />
            </Badge>
            <Badge
              variant="secondary"
              className="flex items-center gap-1 p-2 rounded-2xl"
            >
              ASIANPAINT
              <X
                size={16}
                className="cursor-pointer hover:text-red-500 transition-colors"
              />
            </Badge>
          </div>
          <div className="flex justify-end md:justify-start items-center gap-4">
            <Button variant="destructive" className="cursor-pointer">
              <Ban /> Cancel all
            </Button>
          </div>
        </div>


        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <div className="flex items-center gap-1">
                  Time <ArrowUpDown size={15} /> <Filter size={12} />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Client <ArrowUpDown size={15} /> <Filter size={12} />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">Ticker</div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Side <Filter size={12} />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Product <ArrowUpDown size={15} /> <Filter size={12} />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Qty (Executed/Total) <ArrowUpDown size={15} />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Price <ArrowUpDown size={15} />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">Actions</div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell>{order.time}</TableCell>
                <TableCell>{order.client}</TableCell>
                <TableCell>
                  {order.ticker}{" "}
                  {order.ticker === "RELIANCE" || order.ticker === "ASIANPAINT"
                    ? "📶"
                    : ""}
                </TableCell>
                <TableCell>{order.side}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>⋯</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex justify-end items-center mt-4 gap-2">
          <Button variant="outline" className="cursor-pointer">
            Previous
          </Button>
          <span>Page 1</span>
          <Button variant="outline" className="cursor-pointer">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
