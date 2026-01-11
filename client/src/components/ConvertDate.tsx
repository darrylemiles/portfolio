/*
* @desc: Converts an ISO date string to a readable date, e.g., "Jan. 1, 2024".
* @usage: convertToWordDate({ inputDate, time: true, today: true, format: 'short' })
*/

import React from 'react'

type DateFormat = 'short' | 'long' | undefined

export const convertToWordDate = (
  {
    inputDate,
    time = false,
    today = false,
    format
  }: { inputDate: string; time?: boolean; today?: boolean; format?: DateFormat }
): string => {
  if (!inputDate) return 'Invalid date'

  const date = new Date(inputDate)
  if (isNaN(date.getTime())) return 'Invalid date'

  const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']

  const day = date.getDate()
  const monthLabel = months[date.getMonth()]
  const year = date.getFullYear()

  let timestamp = ''
  if (time) {
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const amPm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12 || 12 // 12-hour format
    timestamp = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${amPm}`
  }

  if (today) {
    const currentDate = new Date()
    const sameDay = (
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    )
    if (sameDay) return time ? timestamp : 'Today'
  }

  if (format === 'short') {
    const mm = (date.getMonth() + 1).toString().padStart(2, '0')
    const dd = date.getDate().toString().padStart(2, '0')
    const yy = date.getFullYear().toString().slice(-2)
    return `${mm}/${dd}/${yy}`
  }

  return `${monthLabel} ${day}, ${year}${time && timestamp ? ` ${timestamp}` : ''}`
}

const ConvertDate: React.FC<{
  dateString: string
  time?: boolean
  today?: boolean
  format?: DateFormat
}> = ({ dateString, time = false, today = false, format }) => {
  if (!dateString) return null
  const value = convertToWordDate({ inputDate: dateString, time, today, format })
  return <>{value}</>
}

export default ConvertDate