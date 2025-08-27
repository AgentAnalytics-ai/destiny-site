import { cc } from "@/lib/services/churchCenter";

export type AdminLink = { label: string; href: string; note?: string };
export type AdminSection = { id: string; title: string; owner?: string; links: AdminLink[] };
export type AdminConfig = { quickLinks: AdminLink[]; sections: AdminSection[] };

/** QUICK LINKS (top row) — public, safe to click on Sundays */
const quickLinks: AdminLink[] = [
  { label: "Give", href: cc.giving() },
  { label: "Events", href: cc.events() },
  { label: "Groups", href: cc.groups() },
  { label: "Signups", href: cc.registrations() },
  { label: "Kids Check-Ins", href: cc.checkins() },
  // Replace once you know it:
  { label: "Plan a Visit (Form)", href: cc.form("REPLACE_PLAN_FORM_ID") },
  // Optional:
  // { label: "Prayer Request (Form)", href: cc.form("REPLACE_PRAYER_FORM_ID") },
];

const sections: AdminSection[] = [
  {
    id: "executive",
    title: "Executive",
    links: [
      { label: "People – Smart Lists", href: "https://people.planningcenteronline.com/smart_lists" },
      { label: "Giving – Reports", href: "https://giving.planningcenteronline.com/reports" },
    ],
  },
  {
    id: "worship",
    title: "Worship Team",
    owner: "Krissy",
    links: [
      { label: "This Week's Plan", href: "https://services.planningcenteronline.com/plans/REPLACE_PLAN_ID" },
      { label: "Services › Teams", href: "https://services.planningcenteronline.com/teams/REPLACE_TEAM_ID" },
      { label: "Song List (Plan items)", href: "https://services.planningcenteronline.com/plans/REPLACE_PLAN_ID#items" },
    ],
  },
  {
    id: "dkids",
    title: "D-Kids",
    owner: "Tabitha",
    links: [
      { label: "Rooms & Volunteers", href: "https://services.planningcenteronline.com/teams/REPLACE_TEAM_ID" },
      { label: "Check-Ins Stations", href: "https://check-ins.planningcenteronline.com/stations" },
      { label: "Registration (Signups)", href: cc.registrations() },
    ],
  },
  {
    id: "director_camera_audio_presentation",
    title: "Director / Camera / Audio / Presentation",
    owner: "Samuel & Derek",
    links: [
      { label: "Director/Camera Schedule", href: "https://services.planningcenteronline.com/teams/REPLACE_TEAM_ID" },
      { label: "Audio Team Schedule", href: "https://services.planningcenteronline.com/teams/REPLACE_TEAM_ID" },
      { label: "Presentation Plan", href: "https://services.planningcenteronline.com/plans/REPLACE_PLAN_ID" },
    ],
  },
  {
    id: "workflow_mgmt",
    title: "Workflow Management",
    links: [
      { label: "First-Time Guest Workflow", href: "https://people.planningcenteronline.com/workflows/REPLACE_ID" },
      { label: "Prayer Requests Workflow", href: "https://people.planningcenteronline.com/workflows/REPLACE_ID" },
      { label: "Attendance Care (3-week) Smart List", href: "https://people.planningcenteronline.com/smart_lists/REPLACE_ID" },
    ],
  },
  {
    id: "background_checks",
    title: "Background Checks",
    links: [
      { label: "Overview", href: "https://people.planningcenteronline.com/background_checks" },
      { label: "New Request", href: "https://people.planningcenteronline.com/background_checks/new" },
    ],
  },
  {
    id: "youth",
    title: "Youth",
    links: [
      { label: "Youth Team", href: "https://services.planningcenteronline.com/teams/REPLACE_TEAM_ID" },
      { label: "Youth Signups", href: cc.registrations() },
    ],
  },
  {
    id: "community_groups",
    title: "Community Groups",
    links: [
      { label: "Groups Directory", href: cc.groups() },
      { label: "Leaders Smart List", href: "https://people.planningcenteronline.com/smart_lists/REPLACE_ID" },
    ],
  },
  {
    id: "host_teams",
    title: "Host Teams",
    links: [
      { label: "Greeters Schedule", href: "https://services.planningcenteronline.com/teams/REPLACE_TEAM_ID" },
      { label: "Follow-up Workflow", href: "https://people.planningcenteronline.com/workflows/REPLACE_ID" },
    ],
  },
  {
    id: "prayer_teams",
    title: "Prayer Teams",
    links: [
      { label: "Prayer Requests (Workflow)", href: "https://people.planningcenteronline.com/workflows/REPLACE_ID" },
      { label: "Report", href: "https://people.planningcenteronline.com/reports/REPLACE_ID" },
    ],
  },
];

export const PC_ADMIN: AdminConfig = { quickLinks, sections };
