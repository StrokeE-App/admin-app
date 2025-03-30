'use client';

// Mocks
import { emergenciesList } from '@/mocks/emergency';

// Components
import EmergencyCard from '@/components/EmergencyCard';
import { formatDate } from '@/utils/functions';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import toast from 'react-hot-toast';
import apiClient from '@/api/api';
import { Emergency } from '@/types';
//import SettingsMenu from '@/components/SettingsMenu';

export default function Dashboard() {
  const [data, setData] = useState<Emergency[]>([]); // State for emergency data
  const [filteredEmergencies, setFilteredEmergencies] = useState<Emergency[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    const loadingToast = toast.loading("Cargando Usuarios...");
    const fetchEmergencies = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get("/emergency/all");
        setData(response.data.data);
        console.log(response.data.data);
			  setFilteredEmergencies(response.data.data);
        toast.success("Emergencias cargadas correctamente.", { id: loadingToast });
      } catch (error) {
        console.error("Error fetching emergencies:", error);
        toast.error("Error al cargar las emergencias.", { id: loadingToast });
      } finally {
        setLoading(false);
      }
    };

    fetchEmergencies();
  }, [user]);

  useEffect(() => {
		if (searchTerm.trim() === '') {
			setFilteredEmergencies(data);
		} else {
			const filtered = data.filter(
				(emergency) =>
					emergency.status.toLowerCase().includes(searchTerm.toLowerCase()) || emergency.startDate.toLowerCase().includes(searchTerm.toLowerCase()) || emergency.ambulanceId.toLowerCase().includes(searchTerm.toLowerCase()) 
			);
			setFilteredEmergencies(filtered);
		}
	}, [searchTerm, user]);

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
          <p className="text-gray-600">No hay emergencias.</p>
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
          const formatedTime = formatDate(emergency.startDate);
          const formatedTime2 = formatDate(emergency.deliveredDate);
        return(
        <EmergencyCard
          key={emergency.emergencyId}
          userName={formatedTime2}
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
