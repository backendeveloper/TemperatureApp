import { AuthGuard } from "./auth-guard.service";

export const authProviders = [
  AuthGuard
];

export const appRoutes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

