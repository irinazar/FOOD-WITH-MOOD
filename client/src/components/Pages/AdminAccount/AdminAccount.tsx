import React from 'react'
import PendingCard from '../../UI/AdminUI/PendingCard'

export default function AdminPage(): JSX.Element {
  const rests = [
    {id:1, title: '123456', address:'igvbo bovd', }, {title: 'gbsdrnb', address:'igvbo bovd'}, {title: '1234hbdb56', address:'igvbo bovd'}
  ]
  return (
    <div className="flex flex-col w-full">
      
      <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-3 mt-4 mb-5">
        {rests.map((el) => (
          <PendingCard key={el.id} />
        ))}
      </div>
    </div>
  )
}
