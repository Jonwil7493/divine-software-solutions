import React from 'react';

function ServicesSection() {
    return (
        <section className='py-20 ' id='services'>
            <div className='container mx-auto text-center'>
                <h2 className='text-4xl font-bold mb-12'>Our Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {/*Service Card 1 */}
                    <div className='bg-white rounded-lg shadow-md p-6'>
                        <div className='mb-4'>
                            <img src='path/to/service1.jpg' alt='Service 1' className='w-16 h-16 mx-auto' />
                        </div>
                        <h3 className='text-xl font-semibold mb-2'>Web Development</h3>
                        <p className='text-gray-700'>Building responsive and dynamic websites tailored to your business needs, enhancing your online presence.</p>
                    </div>
                    {/*Service Card 2 */}
                    <div className='bg-white rounded-lg shadow-md p-6'>
                        <div className='mb-4'>
                            <img src='path/to/service2.jpg' alt='Service 2' className='w-16 h-16 mx-auto' />
                        </div>
                        <h3 className='text-2xl font-semibold mb-4'>Automation Services</h3>
                        <p className='text-gray-700'>Streamlining business processes and increasing efficiency with automated solutions customized for your company.</p>
                    </div>
                    {/*Service Card 3 */}
                    <div className='bg-white rounded-lg shadow-md p-6'>
                        <div className='mb-4'>
                            <img src='path/to/service3.jpg' alt='Service 3' className='w-16 h-16 mx-auto' />
                        </div>
                        <h3 className='text-2xl font-semibold mb-4'>IT Consulting</h3>
                        <p className='text-gray-700'>Providing expert advice to help you achieve your business goals and overcome challenges in the digital landscape.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection