import Image from "next/image";

export default function VehicleCard({ vehicle, isSelected, onSelect }){ 
  return (

    <div 
      onClick={onSelect}
      className={`flex flex-wrap gap-2 border rounded-2xl p-4 cursor-pointer transition-all ${
        isSelected 
          ? 'border-gray-900 border-2 bg-gray-100' 
          : 'border-gray-300 hover:border-gray-500'
      } bg-white`}
    >
      
      <div className="flex items-center p-2">
        <span className="text-xs font-bold text-gray-800">#{vehicle.sNo}</span>
      </div>
      
      <div className="flex flex-col items-center justify-between p-2">
  
        <div className="text-xs font-semibold text-gray-700">License Plate</div>
        {vehicle.licensePlateImage ? (
          <Image 
            src={vehicle.licensePlateImage} 
            alt={`License plate ${vehicle.licensePlate}`}
            width={80}
            height={30}
            className="my-1"
          />
        ) : (
          <div className="text-xs text-gray-600">{vehicle.licensePlate}</div>
        )}
        
        <div className="text-xs font-semibold text-gray-700 mt-1">Registration No</div>
        <div className="text-xs text-gray-900">{vehicle.regNumber}</div>
      </div>

      <div className="flex flex-1 flex-wrap gap-2"> 
        <div className="flex flex-col w-24 p-2">
          <span className="font-semibold text-xs text-gray-700">Timestamp</span>
          <span className="text-xs text-gray-900">{vehicle.timeStamp}</span>
        </div>

        <div className="flex flex-col w-24 p-2">
          <span className="font-semibold text-xs text-gray-700">Camera Location</span>
          <span className="text-xs text-gray-900 break-words">{vehicle.cameraLocation}</span>
        </div>

        <div className="flex flex-col w-24 p-2">
          <span className="font-semibold text-xs text-gray-700">Violation Type</span>
          <span className="text-xs text-gray-900 mt-1">{vehicle.violationType}</span>
        </div>

        <div className="flex flex-col w-24 p-2">
          <span className="font-semibold text-xs text-gray-700">Violation Description</span>
          <span className="text-xs text-gray-900 break-words">{vehicle.violationDescription}</span>
        </div>

        <div className="flex flex-col w-24 p-2">
          <span className="font-semibold text-xs text-gray-700">Category</span>
          <span className="text-xs text-gray-900 mt-1">{vehicle.category}</span>
        </div>

        <div className="flex flex-col w-24 p-2">
          <span className="font-semibold text-xs text-gray-700">Status</span>
          <span className="text-xs text-gray-900 mt-1">{vehicle.status}</span>
        </div>

        <div className="flex flex-col w-24 p-2">
          <span className="font-semibold text-xs text-gray-700">Make</span>
          <span className="text-xs text-gray-900">{vehicle.make}</span>
        </div>

        <div className="flex flex-col w-24 p-2">
          <span className="font-semibold text-xs text-gray-700">Logo</span>
          {vehicle.logoImage ? (
            <Image 
              src={vehicle.logoImage} 
              alt={`${vehicle.make} logo`}
              width={32}
              height={32}
              className="rounded mt-1 border border-gray-300"
            />
          ) : (
            <div className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center text-xs mt-1 text-gray-600">
              {vehicle.make ? vehicle.make.charAt(0) : '?'}
            </div>
          )}
        </div>

        <div className="flex flex-col w-24 p-2">
          <span className="font-semibold text-xs text-gray-700">Vehicle Type</span>
          <span className="text-xs text-gray-900">{vehicle.vehicleType}</span>
        </div>

        <div className="flex flex-col w-24 p-2">
          <span className="font-semibold text-xs text-gray-700">Colour</span>
          <span className="text-xs text-gray-900">{vehicle.color}</span>
        </div>
      </div>
    </div>
  );
}
