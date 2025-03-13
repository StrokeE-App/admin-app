'use client';

import {useState} from 'react';
import toast from 'react-hot-toast';

export function UserForm() {
	const [userName, setUserName] = useState('');
	const [userLastName, setUserLastName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
  const [rol, setRol] = useState('');
  const [plate, setPlate] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		toast.loading('Iniciando sesión...');
	};

	return (
		<form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
			<div className="space-y-4">
				<div>
					<input
						type="text"
						placeholder="Nombre"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						className="w-full px-4 py-3 rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-customRed focus:border-transparent"
						required
					/>
				</div>
        <div>
					<input
						type="text"
						placeholder="Apellido"
						value={userLastName}
						onChange={(e) => setUserLastName(e.target.value)}
						className="w-full px-4 py-3 rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-customRed focus:border-transparent"
						required
					/>
				</div>
        <div>
					<input
						type="email"
						placeholder="Email"
						value={userEmail}
						onChange={(e) => setUserEmail(e.target.value)}
						className="w-full px-4 py-3 rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-customRed focus:border-transparent"
						required
					/>
				</div>
        <div>
					<input
						type="password"
						placeholder="Contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full px-4 py-3 rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-customRed focus:border-transparent"
						required
					/>
				</div>
        <div>
					<input
						type="password"
						placeholder="Confirmar Contraseña"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						className="w-full px-4 py-3 rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-customRed focus:border-transparent"
						required
					/>
				</div>
				<div>
					<select
            id= "role"
            name='roles'
						value={rol}
						onChange={(e) => setRol(e.target.value)}
						className="w-full px-4 py-3 rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-customRed focus:border-transparent"
						required
					>
            <option value="patient">Paciente</option>
            <option value="operator">Operador</option>
            <option value="ambulance">Ambulancia</option>
            <option value="clinic">Clinica</option>            
          </select>
				</div>
        <div>
          {rol === 'ambulance' && (
            <input
              type="text"
              placeholder="Matricula"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              className="w-full px-4 py-3 rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-customRed focus:border-transparent"
              required  
            />
          )}
        </div>
			</div>
			<button
				type="submit"
				disabled={isLoading}
				className="w-full px-4 py-3 text-white bg-customRed rounded-full hover:bg-gustomRed focus:outline-none focus:ring-2 focus:ring-customRed focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{isLoading ? 'Cargando...' : 'Crear Usuario'}
			</button>
		</form>
	);
}
