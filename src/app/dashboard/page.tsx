import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { CarTaxiFront, Ham, Plus, Ticket } from "lucide-react";
import { Expense, columns } from "./columns";
import { DataTable } from "./data-table";
import DashboardBreadcrumb from "@/components/dashboard-breadcrumb";
import WeekHeaderDashboard from "@/components/week-header-dashboard";
import { formatCurrency } from "@/lib/utils";
import DashboardRightSection from "@/components/dashboard-right-section";

const categories = [
  {
    name: "Food",
    icon: Ham,
    total: "S/. 5.00",
  },
  {
    name: "Transport",
    icon: CarTaxiFront,
    total: "S/. 5.00",
  },
  {
    name: "Entertainment",
    icon: Ticket,
    total: "S/. 5.00",
  },
];

async function getData(): Promise<Expense[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      amount: 250.5,
      bank: "bbva",
      date: new Date("2024-01-15"),
      category: "food",
    },
    {
      id: "2",
      amount: 1500,
      bank: "diners",
      date: new Date("2024-02-10"),
      category: "taxi",
    },
    {
      id: "3",
      amount: 75,
      bank: "bbva",
      date: new Date("2024-03-05"),
      category: "health",
    },
    {
      id: "4",
      amount: 500,
      bank: "diners",
      date: new Date("2024-04-20"),
      category: "clothes",
    },
    {
      id: "5",
      amount: 300,
      bank: "bbva",
      date: new Date("2024-05-15"),
      category: "entertainment",
    },
    {
      id: "6",
      amount: 120.75,
      bank: "diners",
      date: new Date("2024-06-10"),
      category: "others",
    },
    {
      id: "7",
      amount: 40,
      bank: "bbva",
      date: new Date("2024-07-01"),
      category: "food",
    },
    {
      id: "8",
      amount: 95.5,
      bank: "diners",
      date: new Date("2024-08-22"),
      category: "taxi",
    },
  ];
}

const prevItems = [{ href: "/dashboard", text: "Dashboard" }];
const current = "Home";

export default async function Page() {
  const data = await getData();

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <DashboardBreadcrumb current={current} prevItems={prevItems} />
        </div>
      </header>

      <Card className="w-full flex items-center justify-center border-none shadow-none">
        <Card className="w-3/4 border-none shadow-none">
          <WeekHeaderDashboard />
          <CardContent className="flex justify-center items-center gap-2">
            <div className="w-1/5">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Total expense
              </h3>
              <p className="scroll-m-20  pb-2 text-3xl font-light tracking-tight first:mt-0">
                {formatCurrency(5000, "PEN")}
              </p>
            </div>
            <Separator orientation="vertical" />
            <div className="w-4/5 grid auto-rows-min gap-4 md:grid-cols-3">
              {categories.map((category) => (
                <div
                  className="aspect-video rounded-xl bg-muted/50"
                  key={category.name}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <category.icon className="size-8" />
                    <span className="text-lg font-semibold tracking-tight">
                      {category.name}
                    </span>
                    <span className="text-lg font-light tracking-tight">
                      {category.total}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Separator orientation="vertical" />
        <DashboardRightSection />
      </Card>

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
