import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";


type DashboardBreadcrumbProps = {
    current: string;
    prevItems: { href: string; text: string }[];
};

export default function DashboardBreadcrumb({ current, prevItems }: DashboardBreadcrumbProps): JSX.Element {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {prevItems.map((item) => (
          <React.Fragment key={item.href}>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href={item.href}>{item.text}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
          </React.Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{current}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
