import { useAuthSessionQuery } from "@/entities/auth/queries";
import { NavigationAuthorized } from "@/layout/NavigationAuthorized/NavigationAuthorized";
import { NavigationUnauthorized } from "@/layout/NavigationUnauthorized/NavigationUnauthorized";

export const Navigation = () => {
  const { data: session } = useAuthSessionQuery();

  return <>{session ? <NavigationAuthorized /> : <NavigationUnauthorized />}</>;
};
