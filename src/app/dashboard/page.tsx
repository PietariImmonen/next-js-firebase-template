import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/firebase/firebase-admin";
import DashboardMock from "@/components/dashboard/dashboard-mock";

export default async function DashboardPage() {
  return (
    <main className="container">
      <DashboardMock />
    </main>
  );
}
