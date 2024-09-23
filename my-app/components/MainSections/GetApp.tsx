"use client";
import React from 'react';
import AppleIcon from '@/public/images/apple';
import AndroidIcon from '@/public/images/android';
import Button from '../Button/Button';

const GetApp = () => {
  return (
    <section className="w-full flexCenter flex-col">
      <div className="get-app">
        <div className="w-full self-center flex flex-1 flex-col items-center justify-center gap-12 z-20">

          <div className='w-full'>
            <h2 className="bold-32 lg:bold-64">Get for free now!</h2>
            <p className="regular-16 text-gray-500 mt-6">Available on iOS and Android</p>
            <div className="w-full sm:w-1/2 md:w-full flex flex-col sm:flex-row gap-3 mt-6">
              <Button type='button' color='green' title='Apple Store' icon={<AppleIcon />}/>
              <Button type='button' color='white' title='Play Store' icon={<AndroidIcon />}/>
            </div>
          </div>
        </div>

      </div>
    </section>
  ) 
}

export default GetApp;