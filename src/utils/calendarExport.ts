import { CALENDAR_SESSIONS, COURSE_INFO } from '../data/courseData';

export function downloadCalendarIcs() {
  const events = CALENDAR_SESSIONS.map((session) => {
    // Parse time like "09:00 - 13:00" or "14:00 - 18:00"
    const [startTimeStr, endTimeStr] = session.time.split(' - ');
    const [startH, startM] = (startTimeStr || '09:00').trim().split(':').map(Number);
    const [endH, endM] = (endTimeStr || '13:00').trim().split(':').map(Number);

    const [year, month, day] = session.date.split('-').map(Number);

    // Format UTC/Local date-time string YYYYMMDDTHHmm00
    const pad = (n: number) => String(n).padStart(2, '0');
    const dtStart = `${year}${pad(month)}${pad(day)}T${pad(startH)}${pad(startM)}00`;
    const dtEnd = `${year}${pad(month)}${pad(day)}T${pad(endH)}${pad(endM)}00`;

    const summary = `${session.moduleTitle} - Sapienza CAF`;
    const description = `Modulo: ${session.moduleTitle}\\nDocenti: ${session.instructors}\\nArgomento: ${session.topic}\\nTipologia: ${session.type}\\nSede: ${session.location}`;
    const location = session.location;

    return `BEGIN:VEVENT
UID:${session.id}-sapienza-caf-2026@uniroma1.it
DTSTAMP:20260101T000000Z
DTSTART:${dtStart}
DTEND:${dtEnd}
SUMMARY:${summary}
DESCRIPTION:${description}
LOCATION:${location}
STATUS:CONFIRMED
END:VEVENT`;
  }).join('\n');

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Sapienza Universita di Roma//CAF Diritto delle Successioni 2026//IT
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Corso di Alta Formazione - Diritto delle Successioni Sapienza
X-WR-TIMEZONE:Europe/Rome
${events}
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Calendario_Lezioni_CAF_Successioni_Sapienza_2026.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
