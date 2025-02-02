import LogoLight from '@/assets/logo.png';
import UserLight from '@/assets/userlight.png';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Main = () => {
  return (
    <div className="flex h-screen">
      <nav className="w-[6vw] bg-background shadow-lg flex flex-col justify-between p-4">
        <div className="flex flex-col items-center space-y-8">
          <img
            src={LogoLight}
            alt="Logo"
            className="w-16 h-16"
          />
          <div className="flex flex-col space-y-6">
            <button className="text-base font-semibold text-muted-foreground hover:text-primary">
              Tasks
            </button>
            <button className="text-base font-semibold text-muted-foreground hover:text-primary">
              Note
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-6">

          <Avatar>
            <AvatarImage src={UserLight} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
      <div className="flex-1 p-8 ">
        <h1 className="text-3xl font-bold">Dashboard Content</h1>
      </div>
    </div>
  );
};

export default Main;