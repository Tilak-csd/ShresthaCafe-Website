import React from 'react'

export default function NewsCard({id, author, date, imageUrl, title, description}) {
    return (
        <div key={id} className="rounded-2xl w- shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
                src={imageUrl}
                alt={title}
                loading='lazy'
                className="h-56 w-full object-cover"
            />
            <div className="p-6 text-center">
                <p> <span className='itallic'>{date}</span> . {author}</p>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm text-left">
                    {description}
                </p>
            </div>
        </div>
    )
}
