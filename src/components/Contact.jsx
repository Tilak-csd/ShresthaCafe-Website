import React from 'react'

export default function Contact() {
    return (
        <section id='menu' className="w-full pt-20 pb-10 bg-white flex flex-col items-center justify-center gap-9">
            <div className='max-w-6xl mx-auto my-10 flex justify-center items-center bg-red-400 gap-10'>
                <div className='w-full'>
                    {/* location details */}
                    <div>
                        <h4>Our Location</h4>
                        <ul className="space-y-2 text-gray-600 text-md">
                            <li>MachaPokhari</li>
                            <li>Kathmandu, Nepal</li>
                            <li>+977 9845231690</li>
                            <li>info@shresthacafe.com</li>
                        </ul>
                    </div>
                    {/* query form */}
                    <div className='flex flex-col w-full'>
                        <Input type={'text'} />
                        <Input type={'email'} />
                        {/* <Input type={'textarea'} /> */}
                    </div>

                </div>
                <div>
                    <img src="/contact/side_image.webp" alt="" />
                </div>
            </div>
        </section>
    )
}

function Input({type}){
    return <input type={type} className='border-1'/>
}