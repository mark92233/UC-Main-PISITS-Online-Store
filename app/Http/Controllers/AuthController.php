<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Masterlist;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function verifyStudent(Request $request)
    {
        $request->validate([
            'student_id' => 'required|string|max:20'
        ]);

        $student = Masterlist::where('student_id', $request->student_id)->first();
        if (!$student) {
            return response()->json([
                'message' => 'Access Denied: This Student ID is not in the official Masterlist.'
            ], 404);
        }
        return response()->json([
            'full_name' => $student->first_name . ' ' . $student->middle_name . ' ' . $student->last_name,
            'is_registered' => (bool) $student->is_registered
        ]);
    }
    public function loginRegisteredStudent(Request $request){
        $request->validate([
            'student_id' => 'required|string',
            'password' => 'required|string',
        ]);

        $masterlistRecord = Masterlist::where('student_id', $request->student_id)->first();
        if (!$masterlistRecord) {
            return back()->withErrors([
                'student_id' => 'Access Denied: This Student ID is not in the official Masterlist.'
            ]);
        }

        $credentials = [
            'masterlist_id' => $masterlistRecord->id,
            'password' => $request->password,
        ];

        if(Auth::attempt($credentials)){
            $request->session()->regenerate();
            return redirect()->intended('/dashboard');

        }
        return back()->withErrors([
            'password' => 'The provided password is incorrect.',
        ]);
    }
}