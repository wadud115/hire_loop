
"use client";

import { Card } from "@heroui/react";
import {
  FileText,
  Users,
  Zap,
  CircleCheck,
  BriefcaseBusiness,
  Clock,
  CalendarCheck,
  TrendingUp,
  Trophy,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const iconMap = {
  jobs: FileText,
  users: Users,
  active: Zap,
  completed: CircleCheck,
  briefcase: BriefcaseBusiness,
  clock: Clock,
  calendar: CalendarCheck,
  trending: TrendingUp,
  trophy: Trophy,
};

export default function DashboardStats({ stats = [] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon =
          typeof stat.icon === "string"
            ? iconMap[stat.icon] || FileText
            : stat.icon || FileText;

        const isNegative = stat.trendType === "down";
        const TrendIcon = isNegative ? ArrowDownRight : ArrowUpRight;

        return (
          <Card
            key={stat.id || stat.title}
            className="group relative overflow-hidden !rounded-2xl !border !border-zinc-200/80 !bg-white !p-5 !shadow-sm transition-all duration-300 hover:-translate-y-1 hover:!border-indigo-300 hover:!shadow-lg hover:!shadow-indigo-950/5 dark:!border-zinc-800 dark:!bg-zinc-950 dark:hover:!border-indigo-500/40"
          >
            {/* Subtle decorative glow */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/[0.06] blur-2xl transition-all duration-300 group-hover:bg-indigo-500/[0.12]" />

            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {stat.title}
                </p>

                <p className="mt-3 break-words text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  {stat.value ?? 0}
                </p>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-100 text-indigo-600 transition-transform duration-300 group-hover:scale-110 dark:border-indigo-400/10 dark:from-indigo-500/15 dark:to-violet-500/10 dark:text-indigo-400">
                <Icon size={21} strokeWidth={1.8} />
              </div>
            </div>

            <div className="relative mt-5 flex min-h-6 flex-wrap items-center gap-x-2 gap-y-1 border-t border-zinc-100 pt-4 dark:border-zinc-800">
              {stat.trend && (
                <span
                  className={`inline-flex items-center gap-0.5 rounded-md px-1.5 py-1 text-xs font-semibold ${
                    isNegative
                      ? "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                      : "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                  }`}
                >
                  <TrendIcon size={14} />
                  {stat.trend}
                </span>
              )}

              {stat.description && (
                <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                  {stat.description}
                </p>
              )}

              {!stat.trend && !stat.description && (
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                  Current total
                </p>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
