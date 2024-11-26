import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Expense, columns } from "./columns";
import { DataTable } from "./data-table";
import DashboardBreadcrumb from "@/components/dashboard-breadcrumb";
import WeekHeaderDashboard from "@/components/week-header-dashboard";
import DashboardAddExpense from "@/components/dashboard-add-expense";
import DashboardTotalExpense from "@/components/dashboard-total-expense";
import DashboardExpenseByCategory from "@/components/dashboard-expense-by-category";
import { IconsName } from "@/lib/types";

const categories = [
  {
    name: "Food",
    icon: "Ham" as IconsName,
    total: 5.00,
  },
  {
    name: "Transport",
    icon: "CarTaxiFront" as IconsName,
    total: 5.10,
  },
  {
    name: "Entertainment",
    icon: "Ticket" as IconsName,
    total: 5.60,
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
      currency: "PEN",
    },
    {
      id: "2",
      amount: 1500,
      bank: "diners",
      date: new Date("2024-02-10"),
      category: "taxi",
      currency: "PEN",
    },
    {
      id: "3",
      amount: 75,
      bank: "bbva",
      date: new Date("2024-03-05"),
      category: "health",
      currency: "USD",
    },
    {
      id: "4",
      amount: 500,
      bank: "diners",
      date: new Date("2024-04-20"),
      category: "clothes",
      currency: "PEN",
    },
    {
      id: "5",
      amount: 300,
      bank: "bbva",
      date: new Date("2024-05-15"),
      category: "entertainment",
      currency: "PEN",
    },
    {
      id: "6",
      amount: 120.75,
      bank: "diners",
      date: new Date("2024-06-10"),
      category: "others",
      currency: "PEN",
    },
    {
      id: "7",
      amount: 40,
      bank: "bbva",
      date: new Date("2024-07-01"),
      category: "food",
      currency: "EUR",
    },
    {
      id: "8",
      amount: 95.5,
      bank: "diners",
      date: new Date("2024-08-22"),
      category: "taxi",
      currency: "PEN",
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
            <DashboardTotalExpense totalExpense={500} />
            <Separator orientation="vertical" />
            <DashboardExpenseByCategory categories={categories} />
          </CardContent>
        </Card>

        <Separator orientation="vertical" />
        <DashboardAddExpense />
      </Card>

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}
