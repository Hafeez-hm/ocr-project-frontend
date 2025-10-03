"use client"

import { useState } from "react";
import Image from "next/image";
import VehicleCard from "@/components/VehicleCard";
import DetailedInfo from "@/components/DetailedInfo";
import vehicleData from "@/data/vehicleData.json";
import Grid from "@/components/layout/Grid";

export default function Home() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicleData.vehicles[0]);

  return (
    <div className="bg-gray-100 px-12">
    <div className="h-screen flex md:flex-row flex-col pt-4"> 

      {/* vehicle views */}
      <div className="flex flex-3 flex-col min-w-0">

        <div className="flex-1 p-4 overflow-y-auto min-h-0 flex items-center justify-center"> 
          {selectedVehicle?.vehicleImage ? (
            <Image 
              src={selectedVehicle.vehicleImage}
              alt={`Vehicle ${selectedVehicle.licensePlate}`}
              width={1000}
              height={500}
              className="object-contain max-h-full"
            />
          ) : (
            <div className="text-gray-500">No vehicle image available</div>
          )}
        </div>
        
        {/* Vehicle pass-by details */}
        <div className="flex-2 pt-4 space-y-4 pr-4 overflow-y-auto min-h-0">
          {vehicleData.vehicles.map((vehicle) => (
            <VehicleCard 
              key={vehicle.sNo} 
              vehicle={vehicle}
              isSelected={selectedVehicle?.sNo === vehicle.sNo}
              onSelect={() => setSelectedVehicle(vehicle)}
            />
          ))}
        </div>

      </div> 

      {/* Detailed information */}
      <div className="w-[30%] p-4 min-w-0 overflow-y-auto min-h-0">
        <DetailedInfo vehicle={selectedVehicle} />
      </div>

    </div>
    </div>
  );
}
