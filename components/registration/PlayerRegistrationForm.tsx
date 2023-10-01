// components/PlayerRegistrationForm.tsx
"use client"
import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

interface PlayerRegistrationFormProps {}

interface PlayerFormData {
  name: string;
  email: string;
  gender: string;
  playerType: string;
  batsmanHand?: string;
  bowlerType?: string;
  battingLevel: number;
  bowlingLevel: number;
}

const PlayerRegistrationForm: React.FC<PlayerRegistrationFormProps> = () => {
  const { handleSubmit, control, register, watch, reset } = useForm<PlayerFormData>();

  const onSubmit: SubmitHandler<PlayerFormData> = (data) => {
    console.log(data);
    reset(); // You can handle form submission here
  };

  return (
    <div className="container mx-auto p-6 bg-light-2">
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
        {/* ... other input fields */}

        <Controller
          name="playerType"
          control={control}
          render={({ field, fieldState }) => (
            <div className="mb-4">
              <label htmlFor="playerType" className="block text-gray-700 text-sm font-bold mb-2">
                Player Type
              </label>
              <select
                {...field}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Player Type</option>
                <option value="Batsman">Batsman</option>
                <option value="Bowler">Bowler</option>
                <option value="All Rounder">All Rounder</option>
              </select>
            </div>
          )}
        />

        {/* Conditional rendering based on playerType */}
        {watch('playerType') === 'Batsman' && (
          <Controller
            name="batsmanHand"
            control={control}
            render={({ field, fieldState }) => (
              <div className="mb-4">
                <label htmlFor="batsmanHand" className="block text-gray-700 text-sm font-bold mb-2">
                  Batsman Hand
                </label>
                <select
                  {...field}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="RHB">RHB</option>
                  <option value="LHB">LHB</option>
                </select>
              </div>
            )}
          />
        )}

        {watch('playerType') === 'Bowler' && (
          <Controller
            name="bowlerType"
            control={control}
            render={({ field, fieldState }) => (
              <div className="mb-4">
                <label htmlFor="bowlerType" className="block text-gray-700 text-sm font-bold mb-2">
                  Bowler Type
                </label>
                <select
                  {...field}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="RMF">RMF</option>
                  <option value="LMF">LMF</option>
                  <option value="RSPN">RSPN</option>
                  <option value="LSPN">LSPN</option>
                </select>
              </div>
            )}
          />
        )}

        {['Batsman', 'All Rounder'].includes(watch('playerType')) && (
          <Controller
            name="battingLevel"
            control={control}
            render={({ field, fieldState }) => (
              <div className="mb-4">
                <label htmlFor="battingLevel" className="block text-gray-700 text-sm font-bold mb-2">
                  Batting Level (0-100)
                </label>
                <input
                  {...field}
                  type="number"
                  min={0}
                  max={100}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
          />
        )}

        {['Bowler', 'All Rounder'].includes(watch('playerType')) && (
          <Controller
            name="bowlingLevel"
            control={control}
            render={({ field, fieldState }) => (
              <div className="mb-4">
                <label htmlFor="bowlingLevel" className="block text-gray-700 text-sm font-bold mb-2">
                  Bowling Level (0-100)
                </label>
                <input
                  {...field}
                  type="number"
                  min={0}
                  max={100}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
          />
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default PlayerRegistrationForm;
