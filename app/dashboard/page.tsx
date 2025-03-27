'use client';

// Mocks
import { emergenciesList } from '@/mocks/emergency';

// Components
import EmergencyCard from '@/components/EmergencyCard';
import { useSseContext } from '@/context/SseContext';
import { formatDate } from '@/utils/functions';
//import SettingsMenu from '@/components/SettingsMenu';

export default function Dashboard() {
  const { emergencies: data, isConnected, error } = useSseContext();

  if (data === null) {
    return (
      <main className="min-h-screen bg-white p-4">
        {/* Main Content */}
        <div className="mt-12 px-4 flex flex-col items-center w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Emergencias Confirmadas
          </h1>
          <p className="text-gray-600">Cargando emergencias...</p>
          {/* <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-customRed"></div> */}
        </div>
      </main>
    );
  }

  if (data === undefined) {
    return (
      <main className="min-h-screen bg-white p-4">
        {/* Main Content */}
        <div className="mt-12 px-4 flex flex-col items-center w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Emergencias Confirmadas
          </h1>
          <p className="text-gray-600">No hay emergencias activas.</p>
          {/* <div className="animate-pulse rounded-full h-32 w-32 border-t-2 border-b-2 border-customRed"></div> */}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white p-4 flex">
      {/* Header */}
      {/* <SettingsMenu /> */}

      {/* Main Content */}
      <div className='hidden w-1/6 container md:block'></div>
      <div className="mt-20 px-4 flex flex-col items-start ml-10 grow md:ml-0">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">En proceso</h1>

        {/* Patient Information */}
        {data.map((emergency) => {
          let formatedTime = formatDate(emergency.startDate);
        return(
        <EmergencyCard
          key={emergency.emergencyId}
          userName={`${emergency.patient.firstName} ${emergency.patient.lastName}`}
          emergencyTime={formatedTime}
          emergencyId={emergency.emergencyId}
          emergency={emergency}
        />
        )				
      })}
      </div>
    </main>
  );
}
