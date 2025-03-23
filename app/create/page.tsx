'use client';

import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'Yes',
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  

  const placeholders = {
    fullName: 'Enter your full name',
    phoneNumber: 'Enter your phone number',
    email: 'Enter your email address',
    password: 'Enter your password',
    companyName: 'Enter your company name'
  };

  return (
    <div className="flex flex-col p-6">
      <h2 className="text-2xl font-bold mb-4 w-48 mt-4 text-gray-900">Create your PopX account</h2>
      <form 
        onSubmit={handleSubmit} 
        className='flex flex-col flex-grow justify-between'
      >
        <div className="space-y-4">
          {['fullName', 'phoneNumber', 'email', 'password', 'companyName'].map((field) => (
            <fieldset key={field} className="mb-4 border border-gray-300 rounded-lg bg-white">
              <legend className="text-purple-600 ml-3 pr-3 pl-1 capitalize">
                {field.replace(/([A-Z])/g, ' $1')}<span className="text-red-500">*</span>
              </legend>
              <input
                type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full p-2 ml-2 rounded-lg bg-transparent text-gray-900 placeholder-gray-400 border-none focus:outline-none focus:ring-0"
                placeholder={placeholders[field as keyof typeof placeholders]}
                required
              />
            </fieldset>
          ))}

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700">Are you an Agency?<span className="text-red-500">*</span></p>
            <RadioGroup
              value={formData.isAgency}
              onChange={(value) => setFormData({ ...formData, isAgency: value })}
              className="flex space-x-4 mt-2"
            >
              {['Yes', 'No'].map((option) => (
                <RadioGroup.Option key={option} value={option}>
                  {({ checked }) => (
                    <div
                      className={`flex items-center space-x-2 cursor-pointer px-4 py-2 border rounded-lg ${checked ? 'border-purple-500 bg-transparent' : 'border-gray-300'}`}
                    >
                      <div className={`w-4 h-4 rounded-full ${checked ? 'bg-purple-500' : 'border border-gray-500'}`} />
                      <span className={`${checked ? 'text-purple-500' : 'text-gray-700'}`}>{option}</span>
                    </div>
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
        </div>

        <button
          type="submit" onClick={() => router.push('/profile')}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition mt-auto cursor-pointer"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

