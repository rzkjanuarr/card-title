import React from 'react'

export default function index() {
  return (
    <div className='max-w-xl'>
      <div className='bg-white border rounded-xl shadow-sm overflow-hidden'>
        <header className='border-b px-4 py-2.5 bg-gray-50 flex justify-between items-center'>
          <div>
            <h1 className='font-medium'>
              Card Title
            </h1>
            <span className='text-gray-500 text-xs'>
              Lorem ipsum dolor si amet.
            </span>
          </div>
          <a href='/halocuy' className='bg-pink-500 hover:bg-pink-700 transition duration-300 text-white px-5 py-2.5 rounded-xl font-semibold text-sm'>
            New task
          </a>
        </header>
        <section className='px-4 py-2.5 italic'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </section>
        <footer className='border-t px-4 py-2.5 text-gray-500 bg-gray-50'>
          by line code.
        </footer>
      </div>
    </div>
  )
}
