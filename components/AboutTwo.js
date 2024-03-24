import React, { useState } from 'react';
import NumberAni from './NumberAni';
function AboutTwo() {
    return (
        <>
            <div className='about2_main'>
                <NumberAni num={12} name="Years Of Experience" />
                <NumberAni num={9215} name="Students Counselled" />
                <NumberAni num={6389} name="Students Admitted" />
            </div>
        </>
    )
}
export default AboutTwo;
