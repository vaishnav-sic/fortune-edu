import React, { useState } from 'react';
import NumberAni from './NumberAni';
function AboutTwo() {
    return (
        <>
            <div className='about2_main'>
                <NumberAni num={20} name="Years Of Experience" />
                <NumberAni num={15532} name="Students Counselled" />
                <NumberAni num={11784} name="Students Admitted" />
            </div>
        </>
    )
}
export default AboutTwo;
