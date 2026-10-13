import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import axios from 'axios'; // We import axios for the API request
import { ShieldAlert, ArrowRight, CheckCircle2, UserCircle2 } from 'lucide-react';

export default function Login() {
  const [step, setStep] = useState(1);
  const [studentName, setStudentName] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const { data, setData, post, processing, errors } = useForm({
    student_id: '',
    password: '',
  });

 
  const handleVerifyId = async (e) => {
    e.preventDefault();
    setIsChecking(true);
    setErrorMessage('');

    try {
      const response = await axios.post('/verify-student', { 
        student_id: data.student_id 
      });
      
      setStudentName(response.data.full_name);
      setIsRegistered(response.data.is_registered);
      
      setStep(2);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    } finally {
      setIsChecking(false);
    }
  };

  // STEP 2: Final Submission to log in
  const handleLogin = (e) => {
    e.preventDefault();
    // We will build this backend route next!
    post('/login-registered-student'); 
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans selection:bg-yellow-400 selection:text-purple-950">
      <Head title="Portal Access" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-14 h-14 bg-purple-950 rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
            <ShieldAlert className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-black text-purple-950 tracking-tight">
          Portal Access
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:rounded-2xl sm:px-10 border border-slate-200">
          
          {/* STEP 1: Ask for Student ID */}
          {step === 1 && (
            <form className="space-y-6" onSubmit={handleVerifyId}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Student ID Number
                </label>
                <input
                  type="text"
                  required
                  value={data.student_id}
                  onChange={(e) => setData('student_id', e.target.value)}
                  className="block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-600 sm:text-sm font-medium"
                  placeholder="e.g. 2024-00001"
                />
                {errorMessage && <p className="mt-2 text-sm text-red-600 font-medium">{errorMessage}</p>}
              </div>

              <button
                type="submit"
                disabled={isChecking}
                className="w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl shadow-sm text-sm font-bold text-white bg-purple-950 hover:bg-purple-900 disabled:opacity-70 transition-all"
              >
                {isChecking ? "Verifying..." : "Continue"}
              </button>
            </form>
          )}

          {/* STEP 2: Show Name & Ask for Password (if registered) */}
          {step === 2 && isRegistered && (
            <form className="space-y-6" onSubmit={handleLogin}>
              
              {/* Display the Student's Name pulled from the database */}
              <div className="p-4 bg-purple-50 border border-purple-100 rounded-xl flex items-center gap-3">
                <UserCircle2 className="w-8 h-8 text-purple-700" />
                <div>
                  <p className="text-xs text-purple-600 font-bold uppercase tracking-wider">Welcome Back</p>
                  <p className="text-sm font-bold text-purple-950">{studentName}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                <input
                  type="password"
                  required
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  className="block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-600 sm:text-sm font-medium"
                />
                {errors.password && <p className="mt-2 text-sm text-red-600 font-medium">{errors.password}</p>}
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl shadow-sm text-sm font-bold text-slate-900 bg-yellow-400 hover:bg-yellow-300 disabled:opacity-70 transition-all"
              >
                {processing ? "Authenticating..." : "Sign In"}
              </button>
            </form>
          )}

          {/* Optional: We will handle the isRegistered === false (OTP flow) here later! */}
          {step === 2 && !isRegistered && (
             <div className="text-center p-4">
                <p className="text-sm text-slate-600">You are on the masterlist but haven't registered yet! (OTP Flow goes here)</p>
             </div>
          )}

        </div>
      </div>
    </div>
  );
}