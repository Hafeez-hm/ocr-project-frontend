import { LayoutDashboard, MonitorPlay, Search, Settings, HelpCircle } from "lucide-react";
import Grid from "@/components/layout/Grid";
  
export default function Sidebar(){ 
    return( 
        <div className="hidden md:flex w-[8%] bg-gray-100 flex-col items-center py-6 gap-8 relative">
          <Grid />
          {/* Dashboard */}
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity">
            <LayoutDashboard className="w-8 h-8 text-black" strokeWidth={1.5} />
            <span className="text-[10px] text-gray-800 text-center">Dashboard</span>
          </div>

          {/* Live Monitoring */}
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity">
            <MonitorPlay className="w-8 h-8 text-black" strokeWidth={1.5} />
            <span className="text-[10px] text-gray-800 text-center">Live Monitoring</span>
          </div>

          {/* Search */}
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity">
            <Search className="w-8 h-8 text-black" strokeWidth={1.5} />
            <span className="text-[10px] text-gray-800 text-center">Search</span>
          </div>

          {/* Admin Console */}
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity">
            <Settings className="w-8 h-8 text-black" strokeWidth={1.5} />
            <span className="text-[10px] text-gray-800 text-center">Admin Console</span>
          </div>

          {/* About */}
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity">
            <HelpCircle className="w-8 h-8 text-black" strokeWidth={1.5} />
            <span className="text-[10px] text-gray-800 text-center">About</span>
          </div>

        </div>
    )
}